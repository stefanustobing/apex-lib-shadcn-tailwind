import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../../utility/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 !rounded-[0.375rem] font-normal text-[var(--white)] !font-poppins shadow-[0_4px_4px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_4px_rgba(0,0,0,0.3)] !px-[1.2rem] !py-[0.45rem] cursor-pointer transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [&_svg]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-[var(--primary)] hover:bg-[var(--primary-hover)]",
        warning: "bg-warning hover:bg-[var(--warning-hover)]",
        secondary: "bg-secondary hover:bg-[var(--secondary-hover)]",
        success: "bg-success hover:bg-[var(--success-hover)]",
        info: "bg-info hover:bg-[var(--info-hover)]",
        danger: "bg-danger hover:bg-[var(--danger-hover)]",
        gray: "bg-gray hover:bg-[var(--gray-hover)]",
        orange: "bg-orange hover:bg-[var(--orange-hover)]",
        blue: "bg-blue hover:bg-[var(--blue-hover)]",
        dark: "bg-dark hover:bg-[var(--dark-hover)]",
        light:
          "bg-[var(--btn-light-color)] hover:bg-[var(--base-color)] text-[var(--default-font-color)]",
        white:
          "bg-[var(--chips-bg)] shadow-[0_4px_6px_rgba(0,0,0,0.05)] hover:shadow-[3px_4px_8px_rgba(0,0,0,0.08)] text-[var(--gray)] hover:text-[var(--sub-primary-color)] hover:brightness-100",
        ghost:
          "bg-transparent text-[var(--gray)] shadow-none hover:shadow-none !p-0",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export type ButtonProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
  variant?:
    | "primary"
    | "warning"
    | "secondary"
    | "success"
    | "info"
    | "danger"
    | "gray"
    | "orange"
    | "blue"
    | "dark"
    | "light"
    | "white"
    | "ghost";
  className?: string;
} & React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, fullWidth = false, variant, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        data-slot="button"
        className={cn(buttonVariants({ variant, fullWidth, className }))}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
