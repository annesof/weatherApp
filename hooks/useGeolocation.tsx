import { useEffect, useState } from "react";

export const useGeolocation = () => {
  const [error, setError] = useState<string>();
  const [location, setLocation] = useState<{ lon: string; lat: string }>();
  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser.");
      return;
    }
    function handleSuccess(position: {
      coords: { longitude: number; latitude: number };
    }) {
      const { latitude, longitude } = position.coords;
      setLocation({ lat: latitude.toString(), lon: longitude.toString() });
    }
    function handleError(error: any) {
      setError(error.message);
    }
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);
  return { error, location };
};
