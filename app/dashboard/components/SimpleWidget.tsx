export const SimpleWidget = ({
  label,
  value,
  unit,
}: {
  label: string;
  value: number;
  unit: string;
}) => (
  <div className="flex flex-col items-center gap-1">
    <span className="text-l md:text-xl font-medium">{label}</span>
    <div className="flex gap-1">
      <span className="text-2xl md:text-4xl">{Math.round(value)}</span>
      <span className="text-base md:text-2xl pt-2 md:pt-2">{unit}</span>
    </div>
  </div>
);
