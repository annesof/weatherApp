import { IconSvgProps } from "@/components/icons";

export const Icon11n = (props: IconSvgProps) => {
  const { id } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
      <defs>
        <linearGradient
          id={`${id}-a`}
          x1={22.56}
          x2={39.2}
          y1={21.96}
          y2={50.8}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f3f7fe" />
          <stop offset={0.45} stopColor="#f3f7fe" />
          <stop offset={1} stopColor="#deeafb" />
        </linearGradient>
        <linearGradient
          id={`${id}-b`}
          x1={26.74}
          x2={35.76}
          y1={37.88}
          y2={53.52}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f7b23b" />
          <stop offset={0.45} stopColor="#f7b23b" />
          <stop offset={1} stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <path
        fill={`#${id}-a`}
        stroke="#e6effc"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="M46.5 31.5h-.32a10.49 10.49 0 0 0-19.11-8 7 7 0 0 0-10.57 6 7.21 7.21 0 0 0 .1 1.14A7.5 7.5 0 0 0 18 45.5a4.19 4.19 0 0 0 .5 0h28a7 7 0 0 0 0-14z"
      />
      <path
        fill={`#${id}-b`}
        stroke="#f6a823"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="m30 36-4 12h4l-2 10 10-14h-6l4-8h-6z"
      >
        <animate
          attributeName="opacity"
          dur="2s"
          repeatCount="indefinite"
          values="1; 1; 1; 1; 1; 1; 0.1; 1; 0.1; 1; 1; 0.1; 1; 0.1; 1"
        />
      </path>
    </svg>
  );
};
