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

  return (
    <div className="flex rounded-lg bg-gradient-to-br from-sky-900 to-sky-600 p-1 gap-1">
      <div>
        {new Date(currentTime).getUTCHours().toString().padStart(2, "0")}
      </div>
      <div>:</div>
      <div>
        {new Date(currentTime).getUTCMinutes().toString().padStart(2, "0")}
      </div>
      <div>:</div>
      <div>
        {new Date(currentTime).getUTCSeconds().toString().padStart(2, "0")}
      </div>
    </div>
  );
};
