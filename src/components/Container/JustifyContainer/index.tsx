import {
  FunctionComponent,
  ReactElement,
  ComponentProps,
  ReactNode,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utility/utils";

const justifyContainerVariants = cva(
  "flex gap-2 items-center bg-transparent w-full",
  {
    variants: {
      justify: {
        end: "justify-end",
        start: "justify-start",
        center: "justify-center",
        between: "justify-between",
      },
    },
    defaultVariants: {
      justify: "end",
    },
  },
);
type JustifyContainerProps = ComponentProps<"div"> &
  VariantProps<typeof justifyContainerVariants> & { children?: ReactNode };

const JustifyContainer: FunctionComponent<JustifyContainerProps> = ({
  className,
  justify,
  ...props
}: ComponentProps<"div"> &
  VariantProps<typeof justifyContainerVariants>): ReactElement => {
  return (
    <div
      className={cn(justifyContainerVariants({ justify, className }))}
      {...props}
    />
  );
};

export default JustifyContainer;
