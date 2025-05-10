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
    },
  },
  defaultVariants: {
    variant: "success",
  },
});

type CircularProgressBarProps = {
  value: number;
  variant?: "primary" | "success" | "warning" | "danger";
} & VariantProps<typeof circularProgressBarVariants>;

const CircularProgressBar: FunctionComponent<CircularProgressBarProps> = ({
  value = 75,
  variant = "primary",
}: CircularProgressBarProps) => (
  <div className="circular-progress-bar">
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
