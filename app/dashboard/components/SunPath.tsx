import { formatTimestampToHour } from "@/utils/date-utils";

interface SunPathProps {
  sunrise: number;
  sunset: number;
  currentDate: number;
}

const SunPath: React.FC<SunPathProps> = ({ sunrise, sunset, currentDate }) => {
  const sunriseDate = new Date(sunrise);
  const sunsetDate = new Date(sunset);
  const current = new Date(currentDate);
  const amplitude = sunsetDate.getUTCHours() - sunriseDate.getUTCHours();

  //console.log(currentDate);
  const radius = 50;
  const startAngle = -90; // Angle de début (en degrés)
  const endAngle = 90; // Angle de fin (en degrés)

  // Convertir les angles de degrés en radians
  const startAngleRad = ((startAngle - 90) * Math.PI) / 180;
  const endAngleRad = ((endAngle - 90) * Math.PI) / 180;

  // Calculer les coordonnées du début et de la fin de l'arc
  const x1 = radius * Math.cos(startAngleRad);
  const y1 = radius * Math.sin(startAngleRad);
  const x2 = radius * Math.cos(endAngleRad);
  const y2 = radius * Math.sin(endAngleRad);
  const isLargeArc = endAngle - startAngle <= 180 ? 0 : 1;
  //const currentHour =
  const theta: number =
    ((current.getHours() - sunriseDate.getUTCHours()) / amplitude) * 180;
  const x = -radius * Math.cos((theta * Math.PI) / 180);
  const y = -radius * Math.sin((theta * Math.PI) / 180);

  return (
    <svg className="w-40 h-20" viewBox="-60 -60 120 80">
      <defs>
        <linearGradient id="solarPathGradient" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </linearGradient>
      </defs>
      <path
        d={`M ${x1},${y1} A ${radius},${radius} 0 ${isLargeArc} 1 ${x2},${y2}`}
        fill="none"
        stroke="white"
        strokeWidth="2"
      />
      <circle cx={x} cy={y} r="10" fill="url(#solarPathGradient)" />
      <rect
        x={x1 + 5 - 25} // Position x du coin supérieur gauche du rectangle (ajustée selon les besoins)
        y={y1 + 20 - 20} // Position y du coin supérieur gauche du rectangle (ajustée selon les besoins)
        width="50" // Largeur du rectangle (ajustée selon les besoins)
        height="20" // Hauteur du rectangle (ajustée selon les besoins)
        fill="#2B93F3" // Couleur de fond du rectangle
      />
      <text x={x1 + 5} y={y1 + 20} textAnchor="middle" fill="white">
        {formatTimestampToHour(sunrise)}
      </text>
      <rect
        x={x2 + 5 - 25} // Position x du coin supérieur gauche du rectangle (ajustée selon les besoins)
        y={y2 + 20 - 20} // Position y du coin supérieur gauche du rectangle (ajustée selon les besoins)
        width="50" // Largeur du rectangle (ajustée selon les besoins)
        height="20" // Hauteur du rectangle (ajustée selon les besoins)
        fill="#2B93F3" // Couleur de fond du rectangle
      />
      <text x={x2 + 5} y={y2 + 20} textAnchor="middle" fill="white">
        {formatTimestampToHour(sunset)}
      </text>
    </svg>
  );
};

export default SunPath;
