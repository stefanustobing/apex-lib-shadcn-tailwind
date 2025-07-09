import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import * as React from "react";

import { cn } from "../../../utility/utils";

const actionButtonVariants = cva(
  "flex items-center justify-center cursor-pointer !px-[1.3rem] !py-[0.6rem] gap-2 !rounded-[5px] font-normal text-[var(--white)] !font-poppins shadow-[0_4px_4px_rgba(0,0,0,0.2)] disabled:pointer-events-none disabled:opacity-50 bg-[var(--primary)] [&_svg]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 shrink-0",
  {
    variants: {
      variant: {
        primary: "",
        white:
          "bg-[var(--chips-bg)] text-[var(--gray)] hover:text-[var(--sub-primary-color)] hover:brightness-100",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "white";
  className?: string;
} & React.ComponentProps<"button"> &
  VariantProps<typeof actionButtonVariants>;

const ActionButton = forwardRef<HTMLButtonElement, ButtonProps>(
  function ActionButton({ variant, className, ...props }, ref) {
    return (
      <button
        ref={ref}
        className={cn(actionButtonVariants({ variant, className }))}
        {...props}
      />
    );
  },
);

export default ActionButton;
