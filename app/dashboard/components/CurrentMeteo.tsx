import { IconWeather, iconTypes } from "@/components/IconWeather";
import { title } from "@/components/primitives";
import { formatTimestampToDateWithHours } from "@/utils/date-utils";
import { capitalizeFirstLetter } from "@/utils/string-utils";
import { DailyData } from "./DashboardContainer";

export const CurrentMeteo = ({
  currentData,
  location,
}: {
  currentData?: DailyData;
  location?: string;
}) => {
  const icon = `icon${currentData?.weather[0].icon}` as keyof typeof iconTypes;
  return (
    <div className="flex flex-col w-100">
      {currentData && (
        <div className="w-full rounded-2xl bg-blue-950 px-8 py-8  bg-opacity-50 flex flex-col">
          <div className="flex">
            <div className="md:flex  w-1/3">
              <div>
                <IconWeather name={icon} className="w-20" />
              </div>
              <div
                className={title()}
                style={{ paddingTop: 25, textWrap: "nowrap" }}
              >
                {currentData?.main.temp &&
                  `${Math.round(currentData?.main.temp)} °C`}
              </div>
            </div>
            <div className="w-2/3   flex flex-col">
              <div className="text-right text-2xl font-bold">{location}</div>
              <div className="text-right text-xl">
                {capitalizeFirstLetter(
                  formatTimestampToDateWithHours(currentData.dt)
                )}
              </div>
            </div>
          </div>
          <div className="text-xl w-100 flex justify-between">
            <div>Ressenti {Math.round(currentData.main.feels_like)} °C</div>
            <div>{currentData.weather[0].description}</div>
          </div>
        </div>
      )}
    </div>
  );
};
