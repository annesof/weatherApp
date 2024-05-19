"use server";
import { NextResponse } from "next/server";

export const getGeocodingData = async ({ text }: { text: string }) => {
  if (!text) {
    return NextResponse.json(
      { message: "Missing text param" },
      { status: 400 }
    );
  }

  const data = await fetch(
    `http://pelias.smappen.com:4000/v1/search?text=${text}`
  );

  if (!data.ok) {
    throw new Error("Failed to fetch geocoding data");
  }

  return data.json();
};
