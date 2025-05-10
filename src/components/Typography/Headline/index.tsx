import { ReactElement, ReactNode } from "react";
import Text from "../Text";

type HeadlineProps = {
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

const Headline = ({
  children,
  variant = "gray",
  className,
  weight = "medium",
}: HeadlineProps): ReactElement => {
  return (
    <Text
      as="h1"
      size="2xl"
      weight={weight}
      variant={variant}
      className={className}
    >
      {children}
    </Text>
  );
};

export default Headline;
