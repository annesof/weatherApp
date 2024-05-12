"use client";
import { getDailyForecastData } from "@/actions/getDailyForecastData";
import { getGeocodingData } from "@/actions/getGeocodingData";
import { getReverseGeocodingData } from "@/actions/getReverseGeocoding";

import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { Autocomplete } from "@/components/Autocomplete";
import { useGeolocation } from "@/hooks/useGeolocation";
import {
  Coordinate,
  DailyData,
  Feature,
  Location,
  WeatherDisplay,
  WeatherResponse,
} from "@/types";
import { formatTimestampToDate } from "@/utils/date-utils";
import { CircularProgress, Tab, Tabs } from "@nextui-org/react";
import { DayAll } from "./DayAll";
import { LocationHeader } from "./LocationHeader";

export const DashboardContainer = () => {
  const [text, setText] = useState<string>();
  const [geolocalisations, setGeolocalisations] = useState<Feature[]>([]);
  const [value] = useDebounce(text, 500);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingGeoLoc, setIsLoadingGeoloc] = useState(true);
  const [dailyData, setDailyData] = useState<WeatherDisplay>();
  const [selectedLocation, setSelectedLocation] = useState<Location>();
  const [first, setfirst] = useState(true);
  const { location } = useGeolocation();

  useEffect(() => {
    async function fetchReverseGeocodingData({ lat, lon }: Coordinate) {
      const result = await getReverseGeocodingData({ lat, lon });
      const locationCompleted: Location = {
        lat,
        lon,
        name:
          result.features[0].properties.name +
          ", " +
          result.features[0].properties.locality +
          ", " +
          result.features[0].properties.country,
      };
      setIsLoadingGeoloc(false);
      setSelectedLocation(locationCompleted);
    }

    if (first && location) {
      fetchReverseGeocodingData({
        lon: location.lon,
        lat: location.lat,
      });
      setfirst(true);
    }
  }, [location, first]);

  useEffect(() => {
    async function fetchGeocodingData(text: string) {
      setIsLoading(true);
      const result = await getGeocodingData({ text });
      setGeolocalisations(result.features);
      setIsLoading(false);
    }
    if (value) {
      fetchGeocodingData(value);
    }
  }, [value]);

  const onSelectionChange = useCallback(
    (id: any) => {
      const chosenLocation = geolocalisations.find(
        (item) => item.properties.id === id
      );
      setDailyData(undefined);
      if (chosenLocation) {
        const locationCoordinates = {
          lon: `${chosenLocation?.geometry.coordinates[0]}`,
          lat: `${chosenLocation?.geometry.coordinates[1]}`,
          name: chosenLocation.properties.label,
        };
        setSelectedLocation(locationCoordinates);
      }
    },
    [geolocalisations]
  );

  useEffect(() => {
    async function fetchWeatherForecast({ lat, lon }: Coordinate) {
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

      {isLoadingGeoLoc && (
        <>
          Recherche de votre position ...
          <CircularProgress
            size="lg"
            color="secondary"
            aria-label="Loading..."
          />
        </>
      )}

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
              tab: "max-w-fit px-2 md:px-4 h-8 md:h-8",
              panel: "w-full",
              tabContent:
                "group-data-[selected=true]:text-[#000000]  text-l text-[#FFFFFF]",
            }}
            aria-label="Onglets"
          >
            <Tab key="today" title="Aujourd'hui">
              {dailyData && (
                <DayAll
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
                <DayAll data={dailyData.list[Object.keys(dailyData.list)[1]]} />
              )}
            </Tab>
            <Tab key="5days" title="Prévisions 5 jours">
              <div className="flex flex-col 2xl:inline-grid 2xl:grid-cols-2   gap-3">
                {dailyData &&
                  Object.keys(dailyData?.list).map((key: string) => (
                    <DayAll key={key} data={dailyData.list[key]} />
                  ))}
              </div>
            </Tab>
          </Tabs>
        </>
      )}
    </>
  );
};
