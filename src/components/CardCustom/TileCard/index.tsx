import { ReactElement, ReactNode } from "react";
import { Card, CardContent } from "../../Card";
import { cn } from "../../../utility/utils";

type TitleCardProps = {
  className?: string;
  children: ReactNode;
};

const TileCard = ({ className, children }: TitleCardProps): ReactElement => {
  return (
    <Card>
      <CardContent className={cn("p-[20px]", className)}>
        {children}
      </CardContent>
    </Card>
  );
};

export default TileCard;
