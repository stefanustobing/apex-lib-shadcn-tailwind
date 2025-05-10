import { ReactElement } from "react";
import "./HorizontalProgressBar.css";
import { cn } from "../../../utility/utils";
import { cva, VariantProps } from "class-variance-authority";

const horizontalProgressBarVariants = cva("", {
  variants: {
    variant: {
      primary: "bg-primary",
      success: "bg-success",
      warning: "bg-warning",
      danger: "bg-danger",
      purple: "bg-[var(--purple)]",
      violate: "bg-[var(--violate)]",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type HorizontalProgressBarProps = {
  value?: number;
  className?: string;
  variant?: "primary" | "success" | "warning" | "danger" | "purple" | "violate";
} & VariantProps<typeof horizontalProgressBarVariants>;

const HorizontalProgressBar = ({
  value = 70,
  variant = "primary",
  className,
}: HorizontalProgressBarProps): ReactElement => {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[var(--base-color)] h-[0.8rem] rounded-full w-[100%]",
        className,
      )}
    >
      <span
        className={`block h-full`}
        style={{ width: `${Math.round(value)}%` }}
      >
        <span
          className={cn(
            horizontalProgressBarVariants({ variant }),
            "block h-full rounded-full animate-horizontal-progress-bar",
          )}
        />
      </span>
    </div>
  );
};

export default HorizontalProgressBar;
