import { DailyData, WeatherResponse } from "@/types";
import { formatTimestampToDate } from "./date-utils";

export const formatWeatherData = (weatherData: WeatherResponse) => {
  return weatherData.list.reduce<{
    [day: string]: DailyData[];
  }>((acc, data) => {
    const unixTime = data.dt + weatherData.city.timezone;
    const timestamp = unixTime * 1000;
    const dayOfWeek: string = formatTimestampToDate(timestamp);
    const dataFormatted = { ...data, dt: timestamp };
    if (!acc[dayOfWeek]) {
      acc[dayOfWeek] = [];
    }
    acc[dayOfWeek].push(dataFormatted);
    return acc;
  }, {});
};
