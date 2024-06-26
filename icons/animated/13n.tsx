import { IconSvgProps } from "@/components/icons";

export const Icon13n = (props: IconSvgProps) => {
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
          x1={30.12}
          x2={31.88}
          y1={43.48}
          y2={46.52}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#86c3db" />
          <stop offset={0.45} stopColor="#86c3db" />
          <stop offset={1} stopColor="#5eafcf" />
        </linearGradient>
        <linearGradient
          xlinkHref={`#${id}-a`}
          id={`${id}-d`}
          x1={29.67}
          x2={32.33}
          y1={42.69}
          y2={47.31}
        />
        <linearGradient
          xlinkHref={`#${id}-a`}
          id={`${id}-e`}
          x1={23.12}
          x2={24.88}
          y1={43.48}
          y2={46.52}
        />
        <linearGradient
          xlinkHref={`#${id}-a`}
          id={`${id}-f`}
          x1={22.67}
          x2={25.33}
          y1={42.69}
          y2={47.31}
        />
        <linearGradient
          xlinkHref={`#${id}-a`}
          id={`${id}-g`}
          x1={37.12}
          x2={38.88}
          y1={43.48}
          y2={46.52}
        />
        <linearGradient
          xlinkHref={`#${id}-a`}
          id={`${id}-h`}
          x1={36.67}
          x2={39.33}
          y1={42.69}
          y2={47.31}
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
      <g>
        <circle
          cx={31}
          cy={45}
          r={1.25}
          fill="none"
          stroke={`url(#${id}-a)`}
          strokeMiterlimit={10}
        />
        <path
          fill="none"
          stroke={`url(#${id}-d)`}
          strokeLinecap="round"
          strokeMiterlimit={10}
          d="m33.17 46.25-1.09-.63m-2.16-1.24-1.09-.63M31 42.5v1.25m0 3.75v-1.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
        />
        <animateTransform
          additive="sum"
          attributeName="transform"
          dur="4s"
          repeatCount="indefinite"
          type="translate"
          values="-1 -6; 1 12"
        />
        <animateTransform
          additive="sum"
          attributeName="transform"
          dur="9s"
          repeatCount="indefinite"
          type="rotate"
          values="0 31 45; 360 31 45"
        />
        <animate
          attributeName="opacity"
          dur="4s"
          repeatCount="indefinite"
          values="0;1;1;1;0"
        />
      </g>
      <g>
        <circle
          cx={24}
          cy={45}
          r={1.25}
          fill="none"
          stroke={`url(#${id}-e)`}
          strokeMiterlimit={10}
        />
        <path
          fill="none"
          stroke={`url(#${id}-f)`}
          strokeLinecap="round"
          strokeMiterlimit={10}
          d="m26.17 46.25-1.09-.63m-2.16-1.24-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
        />
        <animateTransform
          additive="sum"
          attributeName="transform"
          begin="-2s"
          dur="4s"
          repeatCount="indefinite"
          type="translate"
          values="1 -6; -1 12"
        />
        <animateTransform
          additive="sum"
          attributeName="transform"
          dur="9s"
          repeatCount="indefinite"
          type="rotate"
          values="0 24 45; 360 24 45"
        />
        <animate
          attributeName="opacity"
          begin="-2s"
          dur="4s"
          repeatCount="indefinite"
          values="0;1;1;1;0"
        />
      </g>
      <g>
        <circle
          cx={38}
          cy={45}
          r={1.25}
          fill="none"
          stroke={`url(#${id}-g)`}
          strokeMiterlimit={10}
        />
        <path
          fill="none"
          stroke={`url(#${id}-h)`}
          strokeLinecap="round"
          strokeMiterlimit={10}
          d="m40.17 46.25-1.09-.63m-2.16-1.24-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
        />
        <animateTransform
          additive="sum"
          attributeName="transform"
          begin="-1s"
          dur="4s"
          repeatCount="indefinite"
          type="translate"
          values="1 -6; -1 12"
        />
        <animateTransform
          additive="sum"
          attributeName="transform"
          dur="9s"
          repeatCount="indefinite"
          type="rotate"
          values="0 38 45; 360 38 45"
        />
        <animate
          attributeName="opacity"
          begin="-1s"
          dur="4s"
          repeatCount="indefinite"
          values="0;1;1;1;0"
        />
      </g>
    </svg>
  );
};
