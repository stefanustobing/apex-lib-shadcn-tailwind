import { ReactElement, ReactNode } from "react";
import FlexContainer from "../Container/FlexContainer";
/*import FrameSquared from "../FrameSquared";*/
import Counter from "../Counter";
import { Avatar, AvatarFallback } from "../Avatar";

type counterWithAvatarProps = {
  avatar: ReactNode;
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
  counts: ReactNode;
  description: ReactNode;
  className?: string;
  coloredCounts?: boolean;
};

const CounterWithAvatar = ({
  avatar,
  variant = "primary",
  counts,
  description,
  className,
  coloredCounts = false,
}: counterWithAvatarProps): ReactElement => {
  return (
    <FlexContainer className={className}>
      {/*<FrameSquared variant={variant} className="!mr-[1rem] shrink-0">
        {avatar}
      </FrameSquared>*/}
      <Avatar shape="square" size="s60px" className="!mr-[1rem] shrink-0">
        <AvatarFallback variant={variant}>{avatar}</AvatarFallback>
      </Avatar>
      <Counter
        counts={counts}
        variant={coloredCounts ? variant : undefined}
        description={description}
      />
    </FlexContainer>
  );
};

export default CounterWithAvatar;
