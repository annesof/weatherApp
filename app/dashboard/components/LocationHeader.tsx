import { Location01Icon } from "hugeicons-react";
import { CurrentTime } from "../../../components/CurrentTime";

interface LocationHeaderProps {
  name?: string;
  timezone: number;
}
export const LocationHeader = ({ name, timezone }: LocationHeaderProps) => {
  return (
    <div className="text-left text-l w-full font-bold flex items-center justify-between gap-2  rounded-2xl  p-2 ">
      <div className="flex gap-1">
        <Location01Icon strokeWidth={2} /> {name}
      </div>
      <CurrentTime timezone={timezone} />
    </div>
  );
};
