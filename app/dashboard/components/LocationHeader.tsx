import { Location01Icon } from "hugeicons-react";

export const LocationHeader = ({ name }: { name?: string }) => {
  return (
    <div className="text-left text-4xl w-full flex items-center gap-2">
      <Location01Icon /> {name}
    </div>
  );
};
