import {
  ReactElement,
  ReactNode,
  ComponentProps,
  JSX,
  createElement,
} from "react";
import { cn } from "../../../utility/utils";
import { cva, VariantProps } from "class-variance-authority";

const textVariants = cva("font-poppins flex items-center gap-1", {
  variants: {
    variant: {
      default: "",
      primary: "text-primary",
      success: "text-success",
      warning: "text-warning",
      danger: "text-danger",
      gray: "text-gray",
      yellow: "text-[var(--yellow)]",
      green: "text-[var(--green)]",
      purple: "text-[var(--purple)]",
      secondary: "text-secondary",
      violate: "text-[var(--violate)]",
      orange: "text-orange",
      info: "text-info",
      tertiary: "text-[var(--tertiary)]",
      blue: "text-[var(--blue)]",
      cyan: "text-[var(--cyan)]",
      teal: "text-[var(--teal)]",
      skyblue: "text-[var(--skyblue)]",
      brown: "text-[var(--brown)]",
    },
    weight: {
      thin: "!font-thin",
      extralight: "!font-extralight",
      light: "!font-light",
      normal: "!font-normal",
      medium: "!font-medium",
      semibold: "!font-semibold",
      bold: "!font-bold",
      extrabold: "!font-extrabold",
      black: "!font-black",
    },
    size: {
      xs: "!text-xs",
      sm: "text-sm",
      base: "!text-base",
      lg: "!text-lg",
      xl: "!text-xl",
      "2xl": "!text-2xl",
      "3xl": "!text-3xl",
      "4xl": "!text-4xl",
      "5xl": "!text-5xl",
      "6xl": "!text-6xl",
      "7xl": "!text-7xl",
      "8xl": "!text-8xl",
      "9xl": "!text-9xl",
    },
  },
  defaultVariants: {
    variant: "default",
    weight: "normal",
    size: "base",
  },
});

type TextProps<T extends keyof JSX.IntrinsicElements> = ComponentProps<T> &
  VariantProps<typeof textVariants> & {
    as: T;
    children: ReactNode;
    className?: string;
  };

const Text = <T extends keyof JSX.IntrinsicElements>({
  as,
  children,
  className,
  variant,
  weight,
  size,
  ...props
}: TextProps<T>): ReactElement => {
  return createElement(
    as,
    {
      className: cn(textVariants({ variant, size, weight }), className),
      "data-slot": "text",
      ...props,
    },
    children,
  );
};

export default Text;
