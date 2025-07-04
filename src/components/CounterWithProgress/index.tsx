import { ReactElement, ReactNode } from "react";
import FlexContainer from "../Container/FlexContainer";
import CircularProgressBar from "../ProgressBar/CircularProgressBar";
import Counter from "../Counter";

type counterWithAvatarProps = {
  variant?:
    | "primary"
    | "warning"
    | "danger"
    | "purple"
    | "green"
    | "violate"
    | "cyan"
    | "success"
    | "yellow";
  counts: number;
  value: number;
  description: ReactNode;
  className?: string;
  coloredCounts?: boolean;
};

const CounterWithProgress = ({
  variant = "primary",
  counts,
  value,
  description,
  className,
  coloredCounts = false,
}: counterWithAvatarProps): ReactElement => {
  return (
    <FlexContainer className={className}>
      <CircularProgressBar
        variant={variant}
        value={value}
        className="!mr-[1rem]"
      />
      <Counter
        counts={counts}
        variant={coloredCounts ? variant : undefined}
        description={description}
      />
    </FlexContainer>
  );
};

export default CounterWithProgress;
