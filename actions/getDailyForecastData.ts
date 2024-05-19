"use server";
import { NextResponse } from "next/server";
export const getDailyForecastData = async ({
  lat,
  lon,
}: {
  lat: string;
  lon: string;
}) => {
  const appid = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;

  if (!appid) {
    return NextResponse.json(
      { message: "OpenWeather API key not found in environment variables" },
      { status: 401 }
    );
  }

  if (!lat || !lon) {
    return NextResponse.json(
      { message: "Missing lat or lon param" },
      { status: 400 }
    );
  }

  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${appid}&lang=fr`,
    { cache: "no-store" }
  );
  if (!data.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return data.json();
};
