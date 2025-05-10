import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../utility/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-[50rem] border px-[14px] py-[8px] text-xs font-normal text-[var(--white)] border-transparent w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 bg-[var(--primary)] [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        primary: "",
        secondary: "bg-[var(--secondary)]",
        success: "bg-[var(--success)]",
        teal: "bg-[var(--teal)]",
        green: "bg-[var(--green)]",
        info: "bg-[var(--info)]",
        yellow: "bg-[var(--yellow)]",
        warning: "bg-[var(--warning)]",
        purple: "bg-[var(--purple)]",
        violate: "bg-[var(--violate)]",
        blue: "bg-[var(--blue)]",
        skyblue: "bg-[var(--skyblue)]",
        brown: "bg-[var(--brown)]",
        tertiary: "bg-[var(--tertiary)]",
        light: "bg-[var(--btn-light-color)] text-[var-(--default-font-color)]",
        orange: "bg-[var(--orange)]",
      },
      size: {
        md: "",
        lg: "px-[18px] py-[10px] [&>svg]:size-[14px] text-sm",
        sm: "px-[14px] py-[6px] [&>svg]:size-[10px] text-[11px]",
      },
      square: {
        false: "",
        true: "rounded-[0.375rem]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      square: false,
    },
  },
);

function Badge({
  className,
  variant,
  size,
  square,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size, square }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
