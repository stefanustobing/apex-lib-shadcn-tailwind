import { cva } from "class-variance-authority";
import { ReactElement } from "react";

import { getCSSVar } from "../../../utility/utils";
import { cn } from "../../../utility/utils";

const loadingVariants = cva("", {
  variants: {
    size: {
      sm: "h-[16px] w-[16px]",
      base: "h-[32px] w-[32px]",
      lg: "h-[64px] w-[64px]",
      xl: "h-[128px] w-[128px]",
      "2xl": "h-[256px] w-[256px]",
      "3xl": "h-[512px] w-[512px]",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

type LoadingDotsProps = {
  variant?: "green" | "info";
  size?: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
};

const LoadingDots = ({
  variant = "green",
  size = "base",
}: LoadingDotsProps): ReactElement => {
  return (
    <svg
      style={{
        margin: "auto",
        background: "none",
        display: "block",
        shapeRendering: "auto",
      }}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      role="status"
      className={cn(loadingVariants({ size }))}
    >
      <circle cx="84" cy="50" r="10" fill={getCSSVar(`--${variant}`)}>
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1.1363636363636365s"
          calcMode="spline"
          keyTimes="0;1"
          values="10;0"
          keySplines="0 0.5 0.5 1"
          begin="0s"
        />
        <animate
          attributeName="fill"
          repeatCount="indefinite"
          dur="4.545454545454546s"
          calcMode="discrete"
          keyTimes="0;0.25;0.5;0.75;1"
          values={`${getCSSVar(`--${variant}`)}; ${getCSSVar(`--${variant}`)}; ${getCSSVar(`--${variant}`)}; ${getCSSVar(`--${variant}`)}; ${getCSSVar(`--${variant}`)};`}
          begin="0s"
        />
      </circle>
      <circle cx="16" cy="50" r="10" fill={getCSSVar(`--${variant}`)}>
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="4.545454545454546s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        />
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="4.545454545454546s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        />
      </circle>
      <circle cx="50" cy="50" r="10" fill={getCSSVar(`--${variant}`)}>
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="4.545454545454546s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.1363636363636365s"
        />
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="4.545454545454546s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.1363636363636365s"
        />
      </circle>
      <circle cx="84" cy="50" r="10" fill={getCSSVar(`--${variant}`)}>
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="4.545454545454546s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-2.272727272727273s"
        />
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="4.545454545454546s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-2.272727272727273s"
        />
      </circle>
      <circle cx="16" cy="50" r="10" fill={getCSSVar(`--${variant}`)}>
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="4.545454545454546s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-3.409090909090909s"
        />
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="4.545454545454546s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-3.409090909090909s"
        />
      </circle>
    </svg>
  );
};

export default LoadingDots;
