import { ComponentProps, forwardRef } from "react";
import { cn } from "../../../utility/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center border-0 gap-2 whitespace-nowrap rounded-[30px] font-normal shadow-[0_4px_6px_rgba(0,0,0,0.05)] hover:shadow-[var(--filter-button-hover-shadow)]  px-[1.8rem] py-[0.6rem] font-poppins text-[color:var(--gray)] hover:text-[var(--sub-primary-color)] [&_svg]:size-[1rem] bg-[var(--chips-bg)] transition-all duration-500 ease-in-out",
  {
    variants: {
      variant: {
        default: "",
        primary: "bg-[var(--primary)] text-[var(--white)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type FilterButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

const FilterButton = forwardRef<HTMLButtonElement, FilterButtonProps>(
  ({ className, variant, ...props }, ref) => {
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
