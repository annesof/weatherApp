//import Icon01d from "@/icons/animated/01d.svg";
import { Icon01d } from "@/icons/animated/01d";
import { Icon01n } from "@/icons/animated/01n";
import { Icon02d } from "@/icons/animated/02d";
import { Icon02n } from "@/icons/animated/02n";
import { Icon03d } from "@/icons/animated/03d";
import { Icon03n } from "@/icons/animated/03n";
import { Icon04d } from "@/icons/animated/04d";
import { Icon04n } from "@/icons/animated/04n";
import { Icon09d } from "@/icons/animated/09d";
import { Icon09n } from "@/icons/animated/09n";
import { Icon10d } from "@/icons/animated/10d";
import { Icon10n } from "@/icons/animated/10n";
import { Icon11d } from "@/icons/animated/11d";
import { Icon11n } from "@/icons/animated/11n";
import { Icon13d } from "@/icons/animated/13d";
import { Icon13n } from "@/icons/animated/13n";
import { Icon50d } from "@/icons/animated/50d";
import { Icon50n } from "@/icons/animated/50n";
import { SVGProps } from "react";

type IconKey = keyof typeof iconTypes;
interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconKey;
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

export const IconWeather = ({ name, ...props }: IconProps) => {
  let Icon = name && iconTypes[name];
  return Icon ? <Icon {...props} /> : <></>;
};
