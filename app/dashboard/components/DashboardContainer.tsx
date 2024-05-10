"use client";
import { getDailyForecastData } from "@/actions/getDailyForecastData";
import { getGeocodingData } from "@/actions/getGeocodingData";

import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { useGeolocation } from "@/hooks/useGeolocation";
import { formatTimestampToDate } from "@/utils/date-utils";
import { Tab, Tabs } from "@nextui-org/react";
import { Autocomplete } from "./Autocomplete";
import { DayTab } from "./DayTab";
import { LocationHeader } from "./LocationHeader";

interface Feature {
  geometry: {
    type: string;
    coordinates: number[];
  };
  properties: {
    id: string;
    confidence: string;
    match_type: string;
    country: string;
    macroregion: string;
    region: string;
    locality: string;
    label: string;
  };
}

export interface DailyData {
  dt: number;
  pop: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
  };
  weather: { id: number; main: string; description: string; icon: string }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  rain: {
    "3h": number;
  };
  snow: {
    "3h": number;
  };
  visibility: number;
}

interface WeatherResponse {
  list: DailyData[];
  city: {
    sunrise: number;
    sunset: number;
    name: string;
    timezone: number;
  };
}

interface WeatherDisplay {
  list: { [day: string]: DailyData[] };
  city: {
    sunrise: number;
    sunset: number;
    name: string;
    timezone: number;
  };
}

export const DashboardContainer = () => {
  const [text, setText] = useState<string>();
  const [geolocalisations, setGeolocalisations] = useState<Feature[]>([]);
  const [value] = useDebounce(text, 500);
  const [selectedKey, setSelectedKey] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingWeather, setIsLoadingWeather] = useState(false);
  const [dailyData, setDailyData] = useState<WeatherDisplay>();
  const [selectedLocation, setSelectedLocation] = useState<{
    name?: string;
    lon: string;
    lat: string;
  }>();
  const [currentData, setCurrentData] = useState<DailyData>();
  const [first, setfirst] = useState(true);
  const { location } = useGeolocation();

  if (location && first) {
    setSelectedLocation(location);
    setfirst(false);
  }

  useEffect(() => {
    async function fetchData(text: string) {
      setIsLoading(true);
      const result = await getGeocodingData({ text });
      setGeolocalisations(result.features);
      setIsLoading(false);
    }

    if (value) {
      fetchData(value);
    }
  }, [value]);

  const onSelectionChange = useCallback(
    (id: any) => {
      const chosenLocation = geolocalisations.find(
        (item) => item.properties.id === id
      );
      setDailyData(undefined);
      setCurrentData(undefined);

      if (chosenLocation) {
        const locationCoordinates = {
          lon: `${chosenLocation?.geometry.coordinates[0]}`,
          lat: `${chosenLocation?.geometry.coordinates[1]}`,
          name: chosenLocation.properties.label,
        };

        setSelectedLocation(locationCoordinates);
      }
      setSelectedKey(id);
    },
    [geolocalisations]
  );

  useEffect(() => {
    async function fetchWeatherForecast({
      lat,
      lon,
    }: {
      lat: string;
      lon: string;
    }) {
      const result: WeatherResponse = await getDailyForecastData({
        lat,
        lon,
      });

      const forecasts: { [day: string]: DailyData[] } = result.list.reduce<{
        [day: string]: DailyData[];
      }>((acc, data) => {
        const unixTime = data.dt + result.city.timezone;
        const timestamp = unixTime * 1000;
        const dayOfWeek: string = formatTimestampToDate(timestamp);
        const dataFormatted = { ...data, dt: timestamp };
        if (!acc[dayOfWeek]) {
          acc[dayOfWeek] = [];
        }
        acc[dayOfWeek].push(dataFormatted);
        return acc;
      }, {});
      const display: WeatherDisplay = { ...result, list: forecasts };
      setDailyData(display);
      setCurrentData(display.list[Object.keys(display.list)[0]][0]);
    }
    if (selectedLocation?.lat && selectedLocation?.lon) {
      fetchWeatherForecast(selectedLocation);
    }
  }, [selectedLocation]);

  return (
    <>
      <div className="inline-block text-center justify-center">
        <Autocomplete
          items={geolocalisations.map((item) => ({
            id: item.properties.id,
            label: item.properties.label,
          }))}
          emptyContent="Aucune localisation trouvée"
          placeholder="Tapez une localisation"
          isLoading={isLoading}
          onSelectionChange={onSelectionChange}
          onInputChange={(event) => setText(event)}
        />
      </div>

      {dailyData && (
        <>
          <LocationHeader
            name={selectedLocation?.name}
            timezone={dailyData.city.timezone}
          />

          <Tabs
            variant={"light"}
            radius={"full"}
            classNames={{
              tabList: "gap-2 w-full relative rounded-none p-0  border-divider",
              cursor:
                "w-full bg-blue-500 text-[#FFFFFF] group-data-[selected=true]:bg-[#FFFFFF]",
              tab: "max-w-fit px-2 md:px-5 h-8 md:h-12",
              panel: "w-full",
              tabContent:
                "group-data-[selected=true]:text-[#000000]  text-l md:text-xl text-[#FFFFFF]",
            }}
            aria-label="Tabs variants"
          >
            <Tab key="today" title="Aujourd'hui">
              {dailyData && (
                <DayTab
                  data={dailyData.list[Object.keys(dailyData.list)[0]]}
                  current
                  sunData={{
                    sunrise:
                      (dailyData.city.sunrise + dailyData.city.timezone) * 1000,
                    sunset:
                      (dailyData.city.sunset + dailyData.city.timezone) * 1000,
                    timezone: dailyData.city.timezone,
                  }}
                />
              )}
            </Tab>
            <Tab key="tomorrow" title="Demain">
              {dailyData && (
                <DayTab data={dailyData.list[Object.keys(dailyData.list)[1]]} />
              )}
            </Tab>
            <Tab key="5days" title="Prévisions 5 jours">
              <div className="flex flex-col gap-4">
                {dailyData &&
                  Object.keys(dailyData?.list).map((key: string) => (
                    <DayTab key={key} data={dailyData.list[key]} />
                  ))}
              </div>
            </Tab>
          </Tabs>
        </>
      )}
    </>
  );
};
