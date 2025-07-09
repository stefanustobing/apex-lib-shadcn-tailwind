import { cva, type VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef, ReactNode } from "react";

import { cn } from "../../../utility/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center border-0 gap-2 whitespace-nowrap !rounded-[5px] !text-base font-normal shadow-[0_4px_6px_rgba(0,0,0,0.05)] hover:shadow-[var(--filter-button-hover-shadow)]  !px-[1.8rem] !py-[0.6rem] !rounded-[30px] !font-poppins text-[color:var(--gray)] hover:text-[var(--sub-primary-color)] [&_svg]:size-[1rem] transition-all duration-500 ease-in-out cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-[var(--chips-bg)]",
        primary: "bg-[var(--primary)] text-[var(--white)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type variant = "default" | "primary";

export type FilterButtonProps = {
  children: ReactNode;
  variant?: variant;
  className?: string;
} & ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

const FilterButton = forwardRef<HTMLButtonElement, FilterButtonProps>(
  function FilterButton({ className, variant, ...props }, ref) {
    return (
      <button
        ref={ref}
        data-shadow="var(--filter-button-hover-shadow)"
        className={cn(buttonVariants({ variant, className }))}
        {...props}
      />
    );
  },
);

export default FilterButton;
