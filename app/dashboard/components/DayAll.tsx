import { SunPath } from "@/components/SunPath";
import { DailyData } from "@/types";
import { formatTimestampToDate } from "@/utils/date-utils";
import { capitalizeFirstLetter } from "@/utils/string-utils";
import { CurrentWeather } from "./CurrentWeather";
import { DayRain } from "./DayRain";
import { DayTemperature } from "./DayTemperature";
import { DayWind } from "./DayWind";
import { WeatherTable } from "./WeatherTable";

interface DayTabProps {
  data: DailyData[];
  sunData?: { sunrise: number; sunset: number; timezone: number };
  current?: boolean;
}

export const DayAll = ({ data, sunData, current = false }: DayTabProps) => {
  const currentDayData = data[0];
  return (
    <div className="bg-[#2B93F3] rounded-2xl w-full p-4 md:p-8">
      <div className="flex w-full justify-between gap-20">
        <div className="text-xl md:text-2xl font-bold content-center">
          {capitalizeFirstLetter(formatTimestampToDate(currentDayData.dt))}
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
        {current && <CurrentWeather dayData={currentDayData} />}
        <div className="hidden md:block">
          <DayTemperature data={data} />
          <DayRain data={data} />
          <DayWind data={data} />
        </div>
      </div>
      <div className="md:hidden">
        <WeatherTable data={data} />
      </div>
    </div>
  );
};
