import { FunctionComponent } from "react";
import "./CircularProgressBar.css";
import { cn } from "../../../utility/utils";
import { cva, VariantProps } from "class-variance-authority";

const circularProgressBarVariants = cva("", {
  variants: {
    variant: {
      primary: "text-primary border-primary",
      success: "text-success border-success",
      warning: "text-warning border-warning",
      danger: "text-danger border-danger",
      purple: "text-[var(--purple) border-[var(--purple)]]",
      green: "text-[var(--green)] border-[var(--green)])",
      violate: "text-[var(--violate)] border-[var(--violate)])",
      cyan: "text-[var(--cyan)] border-[var(--cyan)]",
      yellow: "text-[var(--yellow)] border-[var(--yellow)]",
    },
  },
  defaultVariants: {
    variant: "success",
  },
});

type CircularProgressBarProps = {
  value: number;
  variant?:
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "purple"
    | "green"
    | "violate"
    | "cyan"
    | "yellow";
  className?: string;
} & VariantProps<typeof circularProgressBarVariants>;

const CircularProgressBar: FunctionComponent<CircularProgressBarProps> = ({
  value = 75,
  variant = "primary",
  className,
}: CircularProgressBarProps) => (
  <div className={cn("circular-progress-bar", className)}>
    <div className="progress" data-percentage={`${Math.round(value)}`}>
      <span className="progress-left">
        <span
          className={cn(
            circularProgressBarVariants({ variant }),
            "progress-bar",
          )}
        />
      </span>
      <span className="progress-right">
        <span
          className={cn(
            circularProgressBarVariants({ variant }),
            "progress-bar",
          )}
        />
      </span>
      <div className="progress-value">
        <p
          className={cn(circularProgressBarVariants({ variant }), "text-base")}
        >
          {Math.round(value)}%
        </p>
      </div>
    </div>
  </div>
);

export default CircularProgressBar;
