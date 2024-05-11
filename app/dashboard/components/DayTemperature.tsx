import { IconWeather, iconTypes } from "@/components/IconWeather";
import { DailyData } from "@/types";
import { formatTimestampToHour } from "@/utils/date-utils";
import { TemperatureIcon } from "hugeicons-react";

interface DayTemperatureProps {
  data: DailyData[];
}

export const DayTemperature = ({ data }: DayTemperatureProps) => {
  return (
    <div className="flex flex-col mt-2 ">
      <div className="text-l pb-2 flex items-center">
        <TemperatureIcon strokeWidth={1.8} size={20} />
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
              <IconWeather name={icon} className="w-16" id={daily.dt + ""} />
              <div className="font-semibold text-l">
                {Math.round(daily.main.temp)}°
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
