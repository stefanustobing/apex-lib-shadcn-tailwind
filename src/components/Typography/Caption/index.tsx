import { ReactElement, ReactNode } from "react";

import Text from "../Text";

type CaptionProps = {
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
  weight?: "light" | "normal" | "medium" | "semibold";
};

const Caption = ({
  children,
  variant = "gray",
  weight = "normal",
  className,
}: CaptionProps): ReactElement => {
  return (
    <Text
      as="p"
      size="xs"
      variant={variant}
      weight={weight}
      className={`[&>svg]:h-[12px] [&>svg]:w-[12px] ${className ? className : ""}`}
    >
      {children}
    </Text>
  );
};

export default Caption;
