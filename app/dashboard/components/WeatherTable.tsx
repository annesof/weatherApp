import { IconWeather, iconTypes } from "@/components/IconWeather";
import { DailyData } from "@/types";
import { formatTimestampToHour } from "@/utils/date-utils";
import { ArrowDown02Icon } from "hugeicons-react";

interface WeatherTableProps {
  data: DailyData[];
}

export const WeatherTable = ({ data }: WeatherTableProps) => {
  return (
    <div className="table w-full mt-6 ">
      <div className="table-header-group ">
        <div className="table-row bg-sky-800">
          <div className="table-cell font-semibold text-left pl-1">Heure</div>
          <div className="table-cell font-semibold text-center "></div>
          <div className="table-cell font-semibold text-left pl-1">Temp</div>
          <div className="table-cell font-semibold text-left pl-1">Pluie</div>
          <div className="table-cell font-semibold text-center pl-1">Vent</div>
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
                <IconWeather
                  name={icon}
                  className="h-8"
                  id={daily.dt + "_small"}
                />
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
  );
};
