import { DailyData } from "@/types";
import { formatTimestampToHour } from "@/utils/date-utils";
import { ArrowDown02Icon, FastWindIcon } from "hugeicons-react";

interface DayWindProps {
  data: DailyData[];
}

export const DayWind = ({ data }: DayWindProps) => {
  return (
    <div className="flex flex-col mt-2">
      <div className="text-l pb-2 flex items-center gap-1">
        <FastWindIcon strokeWidth={1.8} size={20} fill="white" />
        Vent
      </div>
      <div className="flex gap-3">
        {data.map((daily: DailyData, index: number) => {
          const { wind, dt } = daily;
          const deg = { transform: `rotate(${wind.deg}deg)` };
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-between rounded-2xl p-1 bg-[#172554]/30 min-w-[72px] min-h-28"
            >
              <div className="font-semibold text-l">
                {formatTimestampToHour(dt)}
              </div>
              <div className="flex-grow  content-center">
                <div style={deg}>
                  <ArrowDown02Icon strokeWidth={2} size={30} />
                </div>
              </div>
              <div className="font-semibold text-l">
                {Math.round(wind.speed * 3.6)}km/h
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
