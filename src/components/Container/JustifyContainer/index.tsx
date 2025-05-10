import {
  FunctionComponent,
  ReactElement,
  ComponentProps,
  ReactNode,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utility/utils";

const justifyContainerVariants = cva(
  "flex flex-wrap gap-2 items-center bg-transparent",
  {
    variants: {
      justify: {
        end: "justify-end",
        start: "justify-start",
        center: "justify-center",
        between: "justify-between",
      },
      padding: {
        p_20: "p-[20px]",
        p_30: "p-[30px]",
        py_1_px_2: "py-[1.337rem] px-[2.005rem]",
      },
    },
    defaultVariants: {
      justify: "end",
      padding: "py_1_px_2",
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
