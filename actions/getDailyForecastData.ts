"use server";
export const getDailyForecastData = async ({
  lat,
  lon,
}: {
  lat: string;
  lon: string;
}) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/weather?lat=${lat}&lon=${lon}`,
    { cache: "no-store" }
  );
  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
};
