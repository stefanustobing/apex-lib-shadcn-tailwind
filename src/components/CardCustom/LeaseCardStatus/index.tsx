import { cva, type VariantProps } from "class-variance-authority";
import { ReactElement, ReactNode } from "react";

import { cn } from "../../../utility/utils";
import { Card, CardContent } from "../../Card";

const leaseCardStatusVariant = cva("shadow-none", {
  variants: {
    variant: {
      burlywood: "bg-[rgba(219,112,15,0.1)] hover:bg-[rgba(219,112,15,0.3)]",
      yellow: "bg-[rgba(221,158,16,0.1)] hover:bg-[rgba(221,158,16,0.3)]",
      purple: "bg-[rgba(135,76,114,0.1)] hover:bg-[rgba(135,76,114,0.3)]",
      green: "bg-[rgba(125,153,65,0.1)] hover:bg-[rgba(125,153,65,0.3)]",
    },
  },
  defaultVariants: {
    variant: "burlywood",
  },
});

type LeaseCardStatusProps = {
  className?: string;
  children: ReactNode;
  variant?: "burlywood" | "yellow" | "purple" | "green";
} & VariantProps<typeof leaseCardStatusVariant>;

const LeaseCardStatus = ({
  className,
  children,
  variant = "burlywood",
}: LeaseCardStatusProps): ReactElement => {
  return (
    <Card className={cn(leaseCardStatusVariant({ variant }))}>
      <CardContent className={cn("!p-[20px]", className)}>
        {children}
      </CardContent>
    </Card>
  );
};

export default LeaseCardStatus;
