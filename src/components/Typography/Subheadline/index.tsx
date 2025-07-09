import { ReactElement, ReactNode } from "react";

import Text from "../Text";

type SubheadlineProps = {
  children: ReactNode;
  className?: string;
  variant?:
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "gray"
    | "yellow"
    | "green"
    | "purple"
    | "secondary"
    | "violate"
    | "orange"
    | "info"
    | "tertiary"
    | "blue"
    | "cyan"
    | "teal"
    | "skyblue"
    | "brown";
  weight?: "medium" | "semibold";
};

const Subheadline = ({
  children,
  variant = "gray",
  weight = "medium",
  className,
}: SubheadlineProps): ReactElement => {
  return (
    <Text
      as="h2"
      size="lg"
      variant={variant}
      weight={weight}
      className={`[&>svg]:h-[18px] [&>svg]:w-[18px] ${className ? className : ""}`}
    >
      {children}
    </Text>
  );
};

export default Subheadline;
