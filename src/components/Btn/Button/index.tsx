import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../../utility/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[0.375rem] font-normal bg-[var(--primary)] hover:brightness-90  text-[var(--white)] font-poppins shadow-[0_4px_4px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_4px_rgba(0,0,0,0.3)] px-[1.2rem] py-[0.45rem] [&>svg]:size-4 cursor-pointer transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary: "",
        warning: "bg-warning",
        secondary: "bg-secondary",
        success: "bg-success",
        info: "bg-info",
        danger: "bg-danger",
        gray: "bg-gray",
        orange: "bg-orange",
        blue: "bg-blue",
        dark: "bg-dark",
        light:
          "bg-[var(--btn-light-color)] hover:bg-[var(--base-color)] text-[var(--default-font-color)]",
        white:
          "bg-[var(--chips-bg)] shadow-[0_4px_6px_rgba(0,0,0,0.05)] hover:shadow-[3px_4px_8px_rgba(0,0,0,0.08)] text-[var(--gray)] hover:text-[var(--sub-primary-color)] hover:brightness-100",
        text: "bg-transparent p-0 text-[var(--gray)] shadow-none hover:shadow-none hover:text-[var(--primary)]",
      },
      pillShape: {
        false: "",
        true: "rounded-[50px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      pillShape: false,
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

function Button({
  className,
  variant,
  pillShape,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, pillShape, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
