import { ReactElement, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../utility/utils";

const svgLogoVariants = cva(
  "h-[4rem] w-[4rem] rounded-[var(--default-radius)] text-[var(--white)] flex items-center justify-center [&>svg]:w-[24px] [&>svg]:h-[24px]",
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

type SVGLogoProps = {
  children: ReactNode;
  className?: string;
} & VariantProps<typeof svgLogoVariants>;

const SvgLogo = ({
  children,
  className,
  variant,
}: SVGLogoProps): ReactElement => {
  return (
    <div
      data-slot="svg-logo"
      className={cn(svgLogoVariants({ variant, className }))}
    >
      {children}
    </div>
  );
};
export default SvgLogo;
