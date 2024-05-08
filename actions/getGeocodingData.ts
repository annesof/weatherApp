"use server";

export const getGeocodingData = async ({ text }: { text: string }) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/geocoding?text=${text}`,
    { cache: "no-store" }
  );

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
};
