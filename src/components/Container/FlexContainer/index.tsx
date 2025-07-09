import { cva, VariantProps } from "class-variance-authority";
import { ReactElement, ReactNode } from "react";

import { cn } from "../../../utility/utils";

const flexContainerPropsVariants = cva("flex items-center w-full", {
  variants: {
    flexDirection: {
      flexRow: "",
      flexCol: "flex-col items-start",
    },
    flexWrap: {
      false: "",
      true: "flex-wrap",
    },
  },
  defaultVariants: {
    flexDirection: "flexRow",
    flexWrap: false,
  },
});

type FlexContainerProps = {
  children: ReactNode;
  flexDirection?: "flexRow" | "flexCol";
  className?: string;
  flexWrap?: boolean;
} & VariantProps<typeof flexContainerPropsVariants>;

const FlexContainer = ({
  children,
  flexDirection = "flexRow",
  className,
}: FlexContainerProps): ReactElement => {
  return (
    <div
      className={cn(flexContainerPropsVariants({ flexDirection }), className)}
      data-slot="flexContainer"
    >
      {children}
    </div>
  );
};
export default FlexContainer;
