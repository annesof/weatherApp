export interface DailyData {
  dt: number;
  pop: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
  };
  weather: { id: number; main: string; description: string; icon: string }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  rain?: {
    "3h": number;
  };
  snow?: {
    "3h": number;
  };
  visibility: number;
}
export interface WeatherResponse {
  list: DailyData[];
  city: {
    sunrise: number;
    sunset: number;
    name: string;
    timezone: number;
  };
}

export interface Feature {
  geometry: {
    type: string;
    coordinates: number[];
  };
  properties: {
    id: string;
    confidence: string;
    match_type: string;
    country: string;
    macroregion: string;
    region: string;
    locality: string;
    label: string;
  };
}

export interface WeatherDisplay {
  list: { [day: string]: DailyData[] };
  city: {
    sunrise: number;
    sunset: number;
    name: string;
    timezone: number;
  };
}

export interface Location {
  name?: string;
  lon: string;
  lat: string;
}

export interface Coordinate {
  lat: string;
  lon: string;
}
