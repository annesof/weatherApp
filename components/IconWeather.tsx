import Icon01d from "@/icons/animated/01d.svg";
import Icon01n from "@/icons/animated/01n.svg";
import Icon02d from "@/icons/animated/02d.svg";
import Icon02n from "@/icons/animated/02n.svg";
import Icon03d from "@/icons/animated/03d.svg";
import Icon03n from "@/icons/animated/03n.svg";
import Icon04d from "@/icons/animated/04d.svg";
import Icon04n from "@/icons/animated/04n.svg";
import Icon09d from "@/icons/animated/09d.svg";
import Icon09n from "@/icons/animated/09n.svg";
import Icon10d from "@/icons/animated/10d.svg";
import Icon10n from "@/icons/animated/10n.svg";
import Icon11d from "@/icons/animated/11d.svg";
import Icon11n from "@/icons/animated/11n.svg";
import Icon13d from "@/icons/animated/13d.svg";
import Icon13n from "@/icons/animated/13n.svg";
import Icon50d from "@/icons/animated/50d.svg";
import Icon50n from "@/icons/animated/50n.svg";
import { FC } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof iconTypes;
}

export const iconTypes = {
  icon10d: Icon10d,
  icon10n: Icon10n,
  icon01d: Icon01d,
  icon01n: Icon01n,
  icon02d: Icon02d,
  icon02n: Icon02n,
  icon03d: Icon03d,
  icon03n: Icon03n,
  icon04d: Icon04d,
  icon04n: Icon04n,
  icon09d: Icon09d,
  icon09n: Icon09n,
  icon11d: Icon11d,
  icon11n: Icon11n,
  icon13d: Icon13d,
  icon13n: Icon13n,
  icon50d: Icon50d,
  icon50n: Icon50n,
};

export const IconWeather: FC<IconProps> = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};
