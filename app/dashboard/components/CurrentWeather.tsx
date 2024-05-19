import { IconWeather, iconTypes } from "@/components/IconWeather";
import { DailyData } from "@/types";
import { SimpleWidget } from "./SimpleWidget";

interface CurrentWeatherProps {
  dayData: DailyData;
}

export const CurrentWeather = ({ dayData }: CurrentWeatherProps) => {
  const { weather, main, clouds, pop, visibility } = dayData;
  const icon = `icon${weather[0].icon}` as keyof typeof iconTypes;
  return (
    <div className="w-full inline-grid grid-cols-2   justify-start gap-5  items-center md:mr-20 ">
      <div className="flex flex-col items-center">
        <IconWeather name={icon} className="w-20 md:min-w-24" id="principal" />
        <div className="text-l relative -top-2">{weather[0].description}</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex text-3xl md:text-6xl font-semibold ">
          <div className="pt-3 md:pt-3">{Math.round(main.temp)}</div>
          <span className=" text-xl md:text-3xl font-bold pt-3 md:pt-3">
            °C
          </span>
        </div>
        <div className=" text-l md:text-l pt-2">
          Ressenti {Math.round(main.feels_like)} °C
        </div>
      </div>
      <SimpleWidget label="Humidité" value={main.humidity} unit="%" />
      <SimpleWidget label="Nébulosité" value={clouds.all} unit="%" />
      <SimpleWidget label="Précipitation" value={pop * 100} unit="%" />
      <SimpleWidget label="Visibilité" value={visibility / 1000} unit="km" />
    </div>
  );
};
