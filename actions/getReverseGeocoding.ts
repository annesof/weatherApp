"use server";

import { NextResponse } from "next/server";
export const getReverseGeocodingData = async ({
  lon,
  lat,
}: {
  lon: string;
  lat: string;
}) => {
  if (!lat || !lon) {
    return NextResponse.json(
      { message: "Missing lat or lon param" },
      { status: 400 }
    );
  }
  const data = await fetch(
    `http://pelias.smappen.com:4000/v1/reverse?size=1&point.lat=${lat}&point.lon=${lon}`
  );
  if (!data.ok) {
    throw new Error("Failed to fetch coordinates");
  }

  return data.json();
};
