import { ReactElement, ReactNode } from "react";
import FlexContainer from "../Container/FlexContainer";
import Subheadline from "../Typography/Subheadline";
import Paragraph from "../Typography/Paragraph";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utility/utils";

const counterVariants = cva("w-auto, items-start", {
  variants: {
    centered: {
      false: "",
      true: "items-center",
    },
  },
  defaultVariants: {
    centered: false,
  },
});

type CounterProps = {
  centered?: boolean;
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
} & VariantProps<typeof counterVariants>;

const Counter = ({
  variant,
  centered = false,
  counts,
  description,
  className,
}: CounterProps): ReactElement => {
  return (
    /*<FlexContainer className={className}>
      <FrameSquared variant={variant} className="!mr-[1rem] shrink-0">
        {avatar}
      </FrameSquared>
      <FlexContainer flexDirection="flexCol" className="w-auto items-start">
        <Subheadline className="!mb-2">{textTop}</Subheadline>
        <Paragraph weight="light">{textBottom}</Paragraph>
      </FlexContainer>
    </FlexContainer>*/
    <FlexContainer
      flexDirection="flexCol"
      className={cn(counterVariants({ centered, className }))}
    >
      <Subheadline className="!mb-2" variant={variant}>
        {counts}
      </Subheadline>
      <Paragraph weight="light" className={centered ? "text-center" : ""}>
        {description}
      </Paragraph>
    </FlexContainer>
  );
};

export default Counter;
