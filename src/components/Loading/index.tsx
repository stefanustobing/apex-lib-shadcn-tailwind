import { ReactElement } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utility/utils";
import Spinner from "./Spinner";
import Dots from "./Dots";

const loadingVariants = cva("", {
  variants: {
    variant: {
      green: "",
      info: "",
    },
    type: {
      type1: "",
      type2: "",
    },
    size: {
      sm: "h-[16px] w-[16px]",
      base: "h-[32px] w-[32px]",
      lg: "h-[64px] w-[64px]",
      xl: "h-[128px] w-[128px]",
      "2xl": "h-[256px] w-[256px]",
      "3xl": "h-[512px] w-[512px]",
    },
  },
  compoundVariants: [
    {
      variant: "green",
      type: "type1",
      className:
        "border-[var(--green)] border-[4px] border-r-transparent rounded-full spinner",
    },
    {
      variant: "info",
      type: "type1",
      className:
        "border-[var(--info)] border-[4px] border-r-transparent rounded-full spinner",
    },
  ],
  defaultVariants: {
    variant: "green",
    type: "type2",
    size: "base",
  },
});

type color = "info" | "green";

type LoadingProps = {
  variant: color;
  type: "type1" | "type2";
  size: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
} & VariantProps<typeof loadingVariants>;

const Loading = ({
  variant = "green",
  type = "type1",
  size = "base",
}: LoadingProps): ReactElement => {
  if (type === "type1") {
    return <Spinner className={cn(loadingVariants({ variant, type, size }))} />;
  }
  return (
    <Dots
      className={cn(loadingVariants({ variant, type, size }))}
      variant={variant}
    />
  );
};

export default Loading;
