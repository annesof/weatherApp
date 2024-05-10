import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon) {
    return NextResponse.json(
      { message: "Missing lat or lon param" },
      { status: 400 }
    );
  }

  const res = await fetch(
    `http://pelias.smappen.com:4000/v1/reverse?size=1&point.lat=${lat}&point.lon=${lon}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return NextResponse.json(data);
}
