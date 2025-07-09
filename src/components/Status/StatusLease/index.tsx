import { cva, type VariantProps } from "class-variance-authority";
import { ReactElement, ReactNode } from "react";

import { cn } from "../../../utility/utils";
import Headline from "../../Typography/Headline";
import Paragraph from "../../Typography/Paragraph";

const statusLeaseVariants = cva(
  "!p-[1.337rem] rounded-[0.334rem] h-full w-full",
  {
    variants: {
      variant: {
        green: "bg-[rgba(125,153,65,0.1)] hover:bg-[rgba(125,153,65,0.3)]",
        purple: "bg-[rgba(135,76,114,0.1)] hover:bg-[rgba(135,76,114,0.3)]",
        yellow: "bg-[rgba(221,158,16,0.1)] hover:bg-[rgba(221,158,16,0.3)]",
        orange: "bg-[rgba(219,112,15,0.1)] hover:bg-[rgba(219,112,15,0.3)]",
        transparent: "bg-transparent hover:bg-[var(--base-color)]",
      },
    },
    defaultVariants: {
      variant: "green",
    },
  },
);

type StatusLeaseProps = {
  counts?: ReactNode;
  leaseStatus?: ReactNode;
  additionalInfo?: ReactNode;
  variant?: "green" | "yellow" | "purple" | "orange";
  className?: string;
} & VariantProps<typeof statusLeaseVariants>;

const StatusLease = ({
  counts,
  leaseStatus,
  additionalInfo,
  variant = "green",
  className,
}: StatusLeaseProps): ReactElement => {
  return (
    <div className={cn(statusLeaseVariants({ variant, className }))}>
      <Headline variant={variant} className="!mb-[1rem]">
        {counts}
      </Headline>
      <Paragraph className="text-start">{leaseStatus}</Paragraph>
      <Paragraph className="!pb-[1.5rem]">{additionalInfo}</Paragraph>
    </div>
  );
};

export default StatusLease;
