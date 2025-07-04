import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../utility/utils";

const avatarVariants = cva("relative flex size-8 shrink-0 overflow-hidden", {
  variants: {
    shape: {
      circle: "rounded-full",
      square: "rounded-[var(--default-radius)]",
    },
    size: {
      s20px: "size-[20px] [&_svg]:size-[10px]",
      s25px: "size-[25px] [&_svg]:size-[12.5px]",
      s40px: "size-[40px] [&_svg]:size-[20px]",
      s60px: "size-[60px] [&_svg]:!size-[30px]",
      s70px: "size-[70px] [&_svg]:size-[35px]",
    },
  },
  defaultVariants: {
    shape: "circle",
    size: "s20px",
  },
});

type avatarProps = {
  shape?: "circle" | "square";
  size?: "s20px" | "s25px" | "s40px" | "s60px" | "s70px";
  className?: string;
} & VariantProps<typeof avatarVariants>;

function Avatar({
  className,
  shape = "circle",
  size = "s20px",
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & avatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(avatarVariants({ shape, size, className }))}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
}

const avatarFallbackVariants = cva(
  "flex size-full items-center justify-center text-[var(--white)]",
  {
    variants: {
      variant: {
        primary: "bg-primary",
        warning: "bg-warning",
        danger: "bg-danger",
        purple: "bg-[var(--purple)]",
        green: "bg-[var(--green)]",
        violate: "bg-[var(--violate)]",
        cyan: "bg-[var(--cyan)]",
        success: "bg-success",
        yellow: "bg-[var(--yellow)]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

function AvatarFallback({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback> &
  VariantProps<typeof avatarFallbackVariants>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(avatarFallbackVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
