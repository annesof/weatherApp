import { CircularProgress } from "@nextui-org/react";
export const SimpleWidget = ({
  label,
  value,
  unit,
}: {
  label: string;
  value: number;
  unit: string;
}) => {
  const isKm = unit === "km";
  const unitFormat = isKm
    ? { style: "unit", unit: "kilometer" }
    : { style: "percent" };
  return (
    <div className="flex flex-col items-center gap-1">
      <CircularProgress
        classNames={{
          svg: " w-14 h-14  md:w-20 md:h-20 drop-shadow-md",
          indicator: "stroke-white",
          track: "stroke-white/10",
          value: "text-sm font-normal text-white",
          label: "text-base font-medium",
        }}
        label={label}
        maxValue={isKm ? 10 : 100}
        size="lg"
        value={Math.round(value)}
        color="success"
        showValueLabel={true}
        formatOptions={unitFormat}
      />
    </div>
  );
};
