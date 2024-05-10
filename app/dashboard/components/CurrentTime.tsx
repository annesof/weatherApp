import { useEffect, useState } from "react";

export const CurrentTime = ({ timezone }: { timezone: number }) => {
  const [currentTime, setCurrentTime] = useState(
    new Date(Date.now() + timezone * 1000)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const adjustedTime = new Date(Date.now() + timezone * 1000);
      setCurrentTime(adjustedTime);
    }, 1000);

    // Nettoyer l'intervalle lors du démontage du composant
    return () => clearInterval(intervalId);
  }, [timezone]);

  const formatTime = (date: Date) => {
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div>
      <p>Heure locale </p>
      <p>{formatTime(new Date(currentTime))}</p>
    </div>
  );
};
