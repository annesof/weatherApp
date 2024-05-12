import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const text = searchParams.get("text");

  if (!text) {
    return Response.json({ message: "Missing text param" }, { status: 400 });
  }

  const res = await fetch(
    `http://pelias.smappen.com:4000/v1/search?text=${text}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return NextResponse.json(data);
}
