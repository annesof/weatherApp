import { IconSvgProps } from "@/components/icons";

export const Icon10d = (props: IconSvgProps) => {
  const { id } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      {...props}
    >
      <defs>
        <linearGradient
          id={`${id}-b`}
          x1={16.5}
          x2={21.5}
          y1={19.67}
          y2={28.33}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fbbf24" />
          <stop offset={0.45} stopColor="#fbbf24" />
          <stop offset={1} stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient
          id={`${id}-c`}
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
          id={`${id}-a`}
          x1={22.53}
          x2={25.47}
          y1={42.95}
          y2={48.05}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#4286ee" />
          <stop offset={0.45} stopColor="#4286ee" />
          <stop offset={1} stopColor="#0950bc" />
        </linearGradient>
        <linearGradient
          xlinkHref={`#${id}-a`}
          id={`${id}-d`}
          x1={29.53}
          x2={32.47}
          y1={42.95}
          y2={48.05}
        />
        <linearGradient
          xlinkHref={`#${id}-a`}
          id={`${id}-e`}
          x1={36.53}
          x2={39.47}
          y1={42.95}
          y2={48.05}
        />
      </defs>
      <circle
        cx={19}
        cy={24}
        r={5}
        fill={`url(#${id}-b)`}
        stroke="#f8af18"
        strokeMiterlimit={10}
        strokeWidth={0.5}
      />
      <path
        fill="none"
        stroke="#fbbf24"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M19 15.67V12.5m0 23v-3.17m5.89-14.22 2.24-2.24M10.87 32.13l2.24-2.24m0-11.78-2.24-2.24m16.26 16.26-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"
      >
        <animateTransform
          attributeName="transform"
          dur="45s"
          repeatCount="indefinite"
          type="rotate"
          values="0 19 24; 360 19 24"
        />
      </path>
      <path
        fill={`url(#${id}-c)`}
        stroke="#e6effc"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="M46.5 31.5h-.32a10.49 10.49 0 0 0-19.11-8 7 7 0 0 0-10.57 6 7.21 7.21 0 0 0 .1 1.14A7.5 7.5 0 0 0 18 45.5a4.19 4.19 0 0 0 .5 0h28a7 7 0 0 0 0-14z"
      />
      <path
        fill="none"
        stroke={`url(#${id}-a)`}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="m24.39 43.03-.78 4.94"
      >
        <animateTransform
          attributeName="transform"
          dur="0.7s"
          repeatCount="indefinite"
          type="translate"
          values="1 -5; -2 10"
        />
        <animate
          attributeName="opacity"
          dur="0.7s"
          repeatCount="indefinite"
          values="0;1;1;0"
        />
      </path>
      <path
        fill="none"
        stroke={`url(#${id}-d)`}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="m31.39 43.03-.78 4.94"
      >
        <animateTransform
          attributeName="transform"
          begin="-0.4s"
          dur="0.7s"
          repeatCount="indefinite"
          type="translate"
          values="1 -5; -2 10"
        />
        <animate
          attributeName="opacity"
          begin="-0.4s"
          dur="0.7s"
          repeatCount="indefinite"
          values="0;1;1;0"
        />
      </path>
      <path
        fill="none"
        stroke={`url(#${id}-e)`}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="m38.39 43.03-.78 4.94"
      >
        <animateTransform
          attributeName="transform"
          begin="-0.2s"
          dur="0.7s"
          repeatCount="indefinite"
          type="translate"
          values="1 -5; -2 10"
        />
        <animate
          attributeName="opacity"
          begin="-0.2s"
          dur="0.7s"
          repeatCount="indefinite"
          values="0;1;1;0"
        />
      </path>
    </svg>
  );
};
