import { ReactElement } from "react";
import BulletPoint from "../BulletPoint";
import FlexContainer from "../Container/FlexContainer";
import Text from "../Typography/Text";
import { cn } from "../../utility/utils";

type ListPointProps = {
  children: string;
  className?: string;
  variant?:
    | "primary"
    | "secondary"
    | "yellow"
    | "purple"
    | "violate"
    | "warning"
    | "orange"
    | "green"
    | "danger"
    | "success"
    | "info"
    | "tertiary"
    | "blue"
    | "cyan"
    | "teal"
    | "skyblue"
    | "brown";
};

const ListPoint = ({
  children,
  variant = "primary",
  className,
}: ListPointProps): ReactElement => {
  return (
    <FlexContainer
      flexDirection="flexRow"
      className={cn("gap-[5px]", className)}
    >
      <BulletPoint variant={variant} />
      <Text as="span" size="sm" weight="light" variant={variant}>
        {children}
      </Text>
    </FlexContainer>
  );
};
export default ListPoint;
