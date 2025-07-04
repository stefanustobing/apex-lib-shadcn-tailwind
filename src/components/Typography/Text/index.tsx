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
      yellow: "!text-[var(--yellow)]",
      green: "!text-[var(--green)]",
      purple: "!text-[var(--purple)]",
      secondary: "text-secondary",
      violate: "!text-[var(--violate)]",
      orange: "text-orange",
      info: "text-info",
      tertiary: "!text-[var(--tertiary)]",
      blue: "!text-[var(--blue)]",
      cyan: "!text-[var(--cyan)]",
      teal: "!text-[var(--teal)]",
      skyblue: "!text-[var(--skyblue)]",
      brown: "!text-[var(--brown)]",
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
      xs: "!text-[12px]",
      sm: "text-[14px]",
      base: "!text-[16px]",
      lg: "!text-[18px]",
      xl: "!text-[20px]",
      "2xl": "!text-[24px]",
      "3xl": "!text-[30px]",
      "4xl": "!text-[46px]",
      "5xl": "!text-[48px]",
      "6xl": "!text-[60px]",
      "7xl": "!text-[72px]",
      "8xl": "!text-[96px]",
      "9xl": "!text-[128px]",
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
    variant?:
      | "default"
      | "primary"
      | "success"
      | "warning"
      | "danger"
      | "gray"
      | "yellow"
      | "green"
      | "purple"
      | "secondary"
      | "violate"
      | "orange"
      | "info"
      | "tertiary"
      | "blue"
      | "cyan"
      | "teal"
      | "skyblue"
      | "brown";
    size?:
      | "xs"
      | "sm"
      | "base"
      | "lg"
      | "xl"
      | "2xl"
      | "3xl"
      | "4xl"
      | "5xl"
      | "6xl"
      | "7xl"
      | "8xl"
      | "9xl";
    weight?:
      | "thin"
      | "extralight"
      | "light"
      | "normal"
      | "medium"
      | "semibold"
      | "bold"
      | "extrabold"
      | "black";
  };

const Text = <T extends keyof JSX.IntrinsicElements>({
  as,
  children,
  className,
  variant = "default",
  weight = "normal",
  size = "base",
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
