import { Location01Icon } from "hugeicons-react";
import { CurrentTime } from "./CurrentTime";

export const LocationHeader = ({
  name,
  timezone,
}: {
  name?: string;
  timezone: number;
}) => {
  return (
    <div className="text-left text-xl md-text-4xl w-full flex items-center gap-2">
      <Location01Icon strokeWidth={2.5} /> {name}
      <CurrentTime timezone={timezone} />
    </div>
  );
};
