import { DailyData } from "@/types";
import { formatTimestampToHour } from "@/utils/date-utils";
import { DropletIcon } from "hugeicons-react";

interface DayRainProps {
  data: DailyData[];
}

const calculateHeight = (rain: number | undefined): string => {
  if (rain === undefined) return "0";
  return `${rain * 5}px`;
};

export const DayRain = ({ data }: DayRainProps) => {
  return (
    <div className="flex flex-col mt-2">
      <div className="text-l pb-2 flex items-center gap-1">
        <DropletIcon strokeWidth={1.8} size={17} />
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
  );
};
