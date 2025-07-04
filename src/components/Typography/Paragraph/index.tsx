import { ReactElement, ReactNode } from "react";
import Text from "../Text";

type ParagraphProps = {
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

const Paragraph = ({
  children,
  variant = "gray",
  weight = "normal",
  className,
}: ParagraphProps): ReactElement => {
  return (
    <Text
      as="p"
      size="sm"
      variant={variant}
      weight={weight}
      className={`[&>svg]:h-[14px] [&>svg]:w-[14px] ${className ? className : ""}`}
    >
      {children}
    </Text>
  );
};

export default Paragraph;
