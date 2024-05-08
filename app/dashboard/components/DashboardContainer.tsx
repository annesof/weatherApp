"use client";
import { getDailyForecastData } from "@/actions/getDailyForecastData";
import { getGeocodingData } from "@/actions/getGeocodingData";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";

import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { IconWeather, iconTypes } from "@/components/IconWeather";
import {
  formatTimestampToDay,
  formatTimestampToHour,
} from "@/utils/date-utils";
import { capitalizeFirstLetter } from "@/utils/string-utils";
import { CloudIcon, HumidityIcon, RainIcon } from "hugeicons-react";
import { CurrentMeteo } from "./CurrentMeteo";
import { SearchIcon } from "./SearchIcon";
import { SimpleWidget } from "./SimpleWidget";

interface Feature {
  geometry: {
    type: string;
    coordinates: string[];
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
  const [results, setResults] = useState<Feature[]>([]);
  const [value] = useDebounce(text, 500);
  const [selectedKey, setSelectedKey] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingWeather, setIsLoadingWeather] = useState(false);
  const [dailyData, setDailyData] = useState<WeatherDisplay>();
  const [selectedLocation, setSelectedLocation] = useState<Feature>();
  const [currentData, setCurrentData] = useState<DailyData>();

  useEffect(() => {
    async function fetchData(text: string) {
      setIsLoading(true);
      const result = await getGeocodingData({ text });
      setResults(result.features);
      setIsLoading(false);
    }

    if (value) {
      fetchData(value);
    }
  }, [value]);

  const onSelectionChange = useCallback(
    (id: any) => {
      async function fetchData({ lat, lon }: { lat: string; lon: string }) {
        const result: WeatherResponse = await getDailyForecastData({
          lat,
          lon,
        });

        const test: { [day: string]: DailyData[] } = result.list.reduce<{
          [day: string]: DailyData[];
        }>((acc, data) => {
          const unixTime = data.dt + result.city.timezone;
          const timestamp = unixTime * 1000;
          const dayOfWeek: string = formatTimestampToDay(timestamp);
          const dataFormatted = { ...data, dt: timestamp };
          if (!acc[dayOfWeek]) {
            acc[dayOfWeek] = [];
          }
          acc[dayOfWeek].push(dataFormatted);
          return acc;
        }, {});
        const display: WeatherDisplay = { ...result, list: test };
        //result.list = test;
        setDailyData(display);
        setCurrentData(display.list[Object.keys(display.list)[0]][0]);
      }
      const selectedLocation = results.find(
        (item) => item.properties.id === id
      );
      setDailyData(undefined);
      setCurrentData(undefined);
      setSelectedLocation(selectedLocation);
      if (selectedLocation) {
        setIsLoadingWeather(true);

        fetchData({
          lon: selectedLocation?.geometry.coordinates[0],
          lat: selectedLocation?.geometry.coordinates[1],
        });
        setIsLoadingWeather(false);
      }
      setSelectedKey(id);
    },
    [results, dailyData]
  );

  return (
    <>
      <div className="inline-block text-center justify-center">
        <Autocomplete
          items={results}
          isLoading={isLoading}
          placeholder="Tapez une localisation"
          className="w-[500px]"
          autoFocus={true}
          aria-label="Tapez une localisation"
          listboxProps={{
            emptyContent: "Aucune localisation trouvée",
          }}
          allowsEmptyCollection={true}
          onSelectionChange={onSelectionChange}
          menuTrigger="input"
          startContent={
            <SearchIcon
              className="text-default-400"
              strokeWidth={2.5}
              size={20}
            />
          }
          inputProps={{
            classNames: {
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focused=true]:bg-default-200/50",
                "dark:group-data-[focused=true]:bg-default/60",
                "!cursor-text",
              ],
            },
          }}
          onKeyDown={(e: any) => e.continuePropagation()}
          onInputChange={(event) => {
            if (event !== selectedLocation?.properties.label) {
              //setSelectedLocation(undefined);
            }
            return setText(event);
          }}
        >
          {(location) => (
            <AutocompleteItem key={location.properties.id}>
              {location.properties.label}
            </AutocompleteItem>
          )}
        </Autocomplete>
      </div>
      <div className="w-full pt-10 flex gap-3">
        <div className="w-1/2">
          {currentData && (
            <CurrentMeteo
              location={selectedLocation?.properties.label}
              currentData={currentData}
            />
          )}
        </div>
        <div className="w-1/6">
          {currentData && (
            <SimpleWidget
              title="Humidité"
              number={currentData?.main.humidity}
              Icon={HumidityIcon}
            />
          )}
        </div>
        <div className="w-1/6">
          {currentData && (
            <SimpleWidget
              title="Nébulosité"
              number={currentData?.clouds.all}
              Icon={CloudIcon}
            />
          )}
        </div>
        <div className="w-1/6">
          {currentData && (
            <SimpleWidget
              title="Précipitations"
              number={Math.round(currentData?.pop * 100)}
              Icon={RainIcon}
              subtitle="(Risques)"
            />
          )}
        </div>
      </div>
      <div className="w-full pt">
        {dailyData &&
          Object.keys(dailyData?.list).map((key: string) => (
            <div key={key}>
              <h2 className="text-3xl">{capitalizeFirstLetter(key)}</h2>
              {/* Afficher la clé (jour de la semaine) */}
              <div className="flex gap-14">
                {dailyData?.list[key].map((data: DailyData, index: number) => {
                  const icon =
                    `icon${data?.weather[0].icon}` as keyof typeof iconTypes;
                  return (
                    <div key={index} className="flex gap-2 ">
                      <IconWeather name={icon} className="w-20" />
                      <div>{Math.round(data.main.temp)}°C</div>
                      <div>{formatTimestampToHour(data.dt)}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
