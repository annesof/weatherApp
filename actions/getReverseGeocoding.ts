"use server";

export const getReverseGeocodingData = async ({
  lon,
  lat,
}: {
  lon: string;
  lat: string;
}) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/reverse-geocoding?lon=${lon}&lat=${lat}`,
    { cache: "no-store" }
  );
  console.log(data);
  if (!data.ok) {
    console.log(data);
    throw new Error("Failed to fetch data");
  }

  return data.json();
};
