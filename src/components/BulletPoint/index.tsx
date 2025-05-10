import { ReactElement } from "react";
import { cn } from "../../utility/utils";
import { cva, VariantProps } from "class-variance-authority";

const bulletPointVariants = cva("rounded-full", {
  variants: {
    variant: {
      primary: "bg-primary",
      yellow: "bg-[var(--yellow)]",
      purple: "bg-[var(--purple)]",
      violate: "bg-[var(--violate)]",
      warning: "bg-warning",
      orange: "bg-orange",
      green: "bg-[var(--green)]",
      secondary: "bg-secondary",
      danger: "bg-danger",
      success: "bg-success",
      info: "bg-info",
      tertiary: "bg-[var(--tertiary)]",
      teal: "bg-[var(--teal)]",
      blue: "bg-[var(--blue)]",
      cyan: "bg-[var(--cyan)]",
      skyblue: "bg-[var(--skyblue)],",
      brown: "bg-[var(--brown)]",
      gray: "bg-[var(--gray)]",
    },
    size: {
      default: "h-[0.935rem] w-[0.935rem]",
      sm: "h-[5px] w-[5px]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

const validVariants = [
  "primary",
  "yellow",
  "purple",
  "violate",
  "warning",
  "orange",
  "green",
  "secondary",
  "danger",
  "success",
  "info",
  "tertiary",
  "teal",
  "blue",
  "cyan",
  "skyblue",
  "brown",
  "gray",
  undefined,
] as const;

type BullePointProps = {
  className?: string;
  variant?: (typeof validVariants)[number];
  size?: "default" | "sm";
} & VariantProps<typeof bulletPointVariants>;

const BulletPoint = ({
  variant,
  size,
  className,
}: BullePointProps): ReactElement => {
  const safeVariant = validVariants.includes(variant) ? variant : "primary";
  return (
    <div
      className={cn(
        bulletPointVariants({ variant: safeVariant, size }),
        className,
      )}
      data-slot="bulletPoint"
    />
  );
};

export default BulletPoint;
