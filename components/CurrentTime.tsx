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

  const time = new Date(currentTime);
  const hours = time.getUTCHours().toString().padStart(2, "0");
  const minutes = time.getUTCMinutes().toString().padStart(2, "0");
  const seconds = time.getUTCSeconds().toString().padStart(2, "0");

  return (
    <div className="flex rounded-lg bg-gradient-to-br from-sky-900 to-sky-600 p-1 gap-1">
      <div>{hours}</div>
      <div>:</div>
      <div>{minutes}</div>
      <div>:</div>
      <div>{seconds}</div>
    </div>
  );
};
