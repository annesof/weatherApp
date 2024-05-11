import { IconWeather, iconTypes } from "@/components/IconWeather";
import { DailyData } from "@/types";
import {
  formatTimestampToDate,
  formatTimestampToHour,
} from "@/utils/date-utils";
import { capitalizeFirstLetter } from "@/utils/string-utils";
import {
  ArrowDown02Icon,
  DropletIcon,
  FastWindIcon,
  TemperatureIcon,
} from "hugeicons-react";
import SunPath from "../../../components/SunPath";
import { CurrentWeather } from "./CurrentWeather";

interface DayTabProps {
  data: DailyData[];
  sunData?: { sunrise: number; sunset: number; timezone: number };
  current?: boolean;
}

export const DayTab = ({ data, sunData, current = false }: DayTabProps) => {
  const calculateHeight = (temp: number | undefined): string => {
    if (temp === undefined) return "0"; // Si la température n'est pas définie, la hauteur est de 0
    return `${temp * 5}px`;
  };

  return (
    <div className="bg-[#2B93F3] rounded-2xl w-full p-4 md:p-8">
      <div className="flex w-full justify-between gap-20">
        <div className="text-xl md:text-2xl font-bold content-center">
          {capitalizeFirstLetter(formatTimestampToDate(data[0].dt))}
        </div>
        {sunData && (
          <div className="hidden md:block">
            <SunPath
              currentDate={Date.now() + sunData.timezone * 1000}
              sunrise={sunData.sunrise}
              sunset={sunData.sunset}
            />
          </div>
        )}
      </div>
      <div className="md:inline-grid md:grid-cols-2 md:gap-24">
        {current && <CurrentWeather dayData={data[0]} />}
        <div className="hidden md:block">
          <div className="flex flex-col mt-2 ">
            <div className="text-l pb-2 flex items-center">
              <TemperatureIcon strokeWidth={1.5} size={20} />
              Températures
            </div>
            <div className="flex gap-3">
              {data.map((daily: DailyData, index: number) => {
                const icon =
                  `icon${daily?.weather[0].icon}` as keyof typeof iconTypes;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center rounded-2xl p-1 bg-[#172554]/30"
                  >
                    <div className="font-semibold text-l">
                      {formatTimestampToHour(daily.dt)}
                    </div>
                    <IconWeather
                      name={icon}
                      className="w-16"
                      id={daily.dt + ""}
                    />
                    <div className="font-semibold text-l">
                      {Math.round(daily.main.temp)}°
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col mt-2">
            <div className="text-l pb-2 flex items-center">
              <DropletIcon strokeWidth={1.5} size={17} />
              Précipitations
            </div>
            <div className="flex gap-3">
              {data.map((daily: DailyData, index: number) => {
                const rain =
                  (daily?.rain && Math.round(daily?.rain["3h"] * 10) / 10) || 0;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-between rounded-2xl p-1 bg-[#172554]/30 min-w-[72px] min-h-32"
                  >
                    <div className="font-semibold text-l">
                      {formatTimestampToHour(daily.dt)}
                    </div>
                    <div className="flex-grow  content-end">
                      <div
                        className=" w-3 bg-[#B4D4F2] rounded-xl max-h-24"
                        style={{ height: calculateHeight(rain) }}
                      ></div>
                    </div>
                    <div className="font-semibold text-l">{rain} mm</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col mt-2">
            <div className="text-l pb-2 flex items-center">
              <FastWindIcon strokeWidth={1.5} size={20} />
              Vent
            </div>
            <div className="flex gap-3">
              {data.map((daily: DailyData, index: number) => {
                const deg = { transform: `rotate(${daily.wind.deg}deg)` };
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-between rounded-2xl p-1 bg-[#172554]/30 min-w-[72px] min-h-28"
                  >
                    <div className="font-semibold text-l">
                      {formatTimestampToHour(daily.dt)}
                    </div>
                    <div className="flex-grow  content-center">
                      <div style={deg}>
                        <ArrowDown02Icon strokeWidth={2} size={30} />
                      </div>
                    </div>
                    <div className="font-semibold text-l">
                      {Math.round(daily.wind.speed * 3.6)}km/h
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="table w-full md:hidden mt-6 ">
        <div className="table-header-group ">
          <div className="table-row bg-sky-800">
            <div className="table-cell font-semibold text-left pl-1">Heure</div>
            <div className="table-cell font-semibold text-center "></div>
            <div className="table-cell font-semibold text-left pl-1">Temp</div>
            <div className="table-cell font-semibold text-left pl-1">Pluie</div>
            <div className="table-cell font-semibold text-center pl-1">
              Vent
            </div>
          </div>
        </div>
        <div className="table-row-group ">
          {data.map((daily: DailyData, index: number) => {
            const icon =
              `icon${daily?.weather[0].icon}` as keyof typeof iconTypes;
            const rain =
              (daily?.rain && Math.round(daily?.rain["3h"] * 10) / 10) || 0;
            const deg = { transform: `rotate(${daily.wind.deg}deg)` };
            return (
              <div key={index} className="table-row  even:bg-sky-500">
                <div className="table-cell pl-1">
                  {formatTimestampToHour(daily.dt)}
                </div>
                <div className="table-cell pl-2 align-bottom">
                  <IconWeather name={icon} className="h-8" id={daily.dt + ""} />
                </div>
                <div className="table-cell pl-1">
                  {Math.round(daily.main.temp)}°
                </div>
                <div className="table-cell pl-1">{rain}mm</div>
                <div className="table-cell pl-1">
                  <div className="flex">
                    <div style={deg}>
                      <ArrowDown02Icon strokeWidth={1.5} size={20} />
                    </div>
                    {Math.round(daily.wind.speed * 3.6)}km/h{" "}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
