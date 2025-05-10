import { ReactElement, ReactNode } from "react";
import Text from "../Text";

type TitleProps = {
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
  weight?: "normal" | "medium";
};

const Title = ({
  children,
  variant = "gray",
  weight = "medium",
  className,
}: TitleProps): ReactElement => {
  return (
    <Text
      as="h3"
      size="base"
      variant={variant}
      weight={weight}
      className={`[&>svg]:h-[16px] [&>svg]:w-[16px] ${className ? className : ""}`}
    >
      {children}
    </Text>
  );
};

export default Title;
