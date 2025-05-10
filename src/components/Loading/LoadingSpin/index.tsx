import { ReactElement } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../../utility/utils";

const spinnerVariants = cva("", {
  variants: {
    variant: {
      green:
        "border-[var(--green)]  border-r-transparent rounded-full animate-spinner-loading",
      info: "border-[var(--info)] border-r-transparent rounded-full animate-spinner-loading",
    },
    size: {
      sm: "h-[16px] w-[16px] border-[2px]",
      base: "h-[32px] w-[32px] border-[4px]",
      lg: "h-[64px] w-[64px] border-[6px]",
      xl: "h-[128px] w-[128px] border-[8px]",
      "2xl": "h-[256px] w-[256px] border-[10px]",
      "3xl": "h-[512px] w-[512px] border-[12px]",
    },
  },
  defaultVariants: {
    variant: "green",
    size: "base",
  },
});

type LoadingSpinProps = {
  variant?: "green" | "info";
  size?: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
} & VariantProps<typeof spinnerVariants>;

const LoadingSpin = ({
  variant = "green",
  size = "base",
}: LoadingSpinProps): ReactElement => (
  <div className={cn(spinnerVariants({ variant, size }))} role="status">
    <span className="sr-only">Loading</span>
  </div>
);

export default LoadingSpin;
