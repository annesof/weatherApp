import { IconWeather, iconTypes } from "@/components/IconWeather";
import {
  formatTimestampToDate,
  formatTimestampToHour,
} from "@/utils/date-utils";
import { capitalizeFirstLetter } from "@/utils/string-utils";
import { ArrowDown02Icon, TemperatureIcon } from "hugeicons-react";
import { DailyData } from "./DashboardContainer";
import SunPath from "./SunPath";

interface DayTabProps {
  data: DailyData[];
  sunData?: { sunrise: number; sunset: number; timezone: number };
  current?: boolean;
}

export const DayTab = ({ data, sunData, current = false }: DayTabProps) => {
  const icon = `icon${data[0].weather[0].icon}` as keyof typeof iconTypes;
  const calculateHeight = (temp: number | undefined): string => {
    if (temp === undefined) return "0"; // Si la température n'est pas définie, la hauteur est de 0
    return `${temp * 5}px`; // Multipliez par un facteur pour ajuster la hauteur à votre convenance
  };

  return (
    <div className="bg-[#2B93F3] rounded-2xl w-full p-4 md:p-10">
      <div className="flex w-full justify-start gap-20">
        <div className="text-2xl md:text-4xl font-bold content-center">
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
      {current && (
        <div className="w-full inline-grid grid-cols-2  md:grid-cols-6 justify-start gap-5 md:gap-16 items-center pt-3 ">
          <div className="flex flex-col items-center">
            <IconWeather name={icon} className="w-20 md:w-40" />
            <div className=" md-l md:text-lg">
              {data[0].weather[0].description}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex text-4xl md:text-8xl font-semibold">
              {Math.round(data[0]?.main.temp)}
              <span className=" text-2xl md:text-4xl font-bold pt-2 md:pt-3">
                °C
              </span>
            </div>
            <div>Ressenti {Math.round(data[0].main.feels_like)} °C</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xl md:text-2xl font-medium">Humidité</span>
            <div className="flex gap-1">
              <span className="text-2xl md:text-5xl">
                {Math.round(data[0]?.main.humidity)}
              </span>
              <span className="text-base md:text-2xl pt-2 md:pt-5">%</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xl md:text-2xl font-medium">Nébulosité</span>
            <div className="flex gap-1">
              <span className="text-2xl md:text-5xl">
                {Math.round(data[0]?.clouds.all)}
              </span>
              <span className="text-base md:text-2xl pt-2 md:pt-5">%</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xl md:text-2xl font-medium">
              Précipitations
            </span>
            <div className="flex gap-1">
              <span className="text-2xl md:text-5xl">
                {Math.round(data[0]?.pop * 100)}
              </span>
              <span className="text-base md:text-2xl pt-2 md:pt-5">%</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <span className="text-xl md:text-2xl font-medium">Visibilité</span>
            <div className="flex gap-1">
              <span className="text-2xl md:text-5xl">
                {Math.round(data[0]?.visibility / 1000)}
              </span>
              <span className="text-base md:text-2xl pt-2 md:pt-5">km</span>
            </div>
          </div>
        </div>
      )}
      <div className="hidden md:block">
        <div className="flex flex-col mt-6 ">
          <div className="text-3xl pb-4 flex items-center">
            <TemperatureIcon strokeWidth={1.5} size={30} />
            Températures
          </div>
          <div className="flex gap-5">
            {data.map((daily: DailyData, index: number) => {
              const icon =
                `icon${daily?.weather[0].icon}` as keyof typeof iconTypes;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-2xl p-1 bg-[#172554]/30"
                >
                  <div className="font-semibold text-xl">
                    {formatTimestampToHour(daily.dt)}
                  </div>
                  <IconWeather name={icon} className="w-20" />
                  <div className="font-semibold text-xl">
                    {Math.round(daily.main.temp)}°
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col mt-6">
          <div className="text-3xl pb-4">Précipitations</div>
          <div className="flex gap-5">
            {data.map((daily: DailyData, index: number) => {
              const rain =
                (daily?.rain && Math.round(daily?.rain["3h"] * 10) / 10) || 0;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-between rounded-2xl p-1 bg-[#172554]/30 min-w-[88px] min-h-36"
                >
                  <div className="font-semibold text-xl">
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
        <div className="flex flex-col mt-6">
          <div className="text-3xl pb-4">Vent</div>
          <div className="flex gap-5">
            {data.map((daily: DailyData, index: number) => {
              const deg = { transform: `rotate(${daily.wind.deg}deg)` };
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-between rounded-2xl p-1 bg-[#172554]/30 min-w-[88px] min-h-36"
                >
                  <div className="font-semibold text-xl">
                    {formatTimestampToHour(daily.dt)}
                  </div>
                  <div className="flex-grow  content-center">
                    <div style={deg}>
                      <ArrowDown02Icon strokeWidth={2.5} size={30} />
                    </div>
                  </div>
                  <div className="font-semibold text-xl">
                    {Math.round(daily.wind.speed * 3.6)}km/h
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="table w-full md:hidden mt-6">
        <div className="table-header-group ">
          <div className="table-row">
            <div className="table-cell font-semibold text-left ">Heure</div>
            <div className="table-cell font-semibold text-center "></div>
            <div className="table-cell font-semibold text-left ">Temp</div>
            <div className="table-cell font-semibold text-left ">Pluie</div>
            <div className="table-cell font-semibold text-center">Vent</div>
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
              <div
                key={index}
                className="table-row  odd:bg-transparent even:bg-cyan-500"
              >
                <div className="table-cell ">
                  {formatTimestampToHour(daily.dt)}
                </div>
                <div className="table-cell ">
                  <IconWeather name={icon} className="h-8" />
                </div>
                <div className="table-cell">{Math.round(daily.main.temp)}°</div>
                <div className="table-cell">{rain}mm</div>
                <div className="table-cell">
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
