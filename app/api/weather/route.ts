export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  const appid = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;

  if (!appid) {
    return Response.json(
      { message: "OpenWeather API key not found in environment variables" },
      { status: 401 }
    );
  }

  if (!lat || !lon) {
    return Response.json({ message: "Missing lat param" }, { status: 400 });
  }
  console.log("===============&================");

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${appid}&lang=fr`,
    {
      next: { revalidate: 900 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  console.log(data);

  return Response.json(data);
}
