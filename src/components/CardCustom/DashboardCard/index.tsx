import { ReactElement, ReactNode } from "react";
import { Card, CardHeader, CardContent } from "../../Card";
import { Separator } from "../../Separator";

type DashboardCardProps = {
  header: ReactNode;
  children: ReactNode;
};

const DashboardCard = ({
  header,
  children,
}: DashboardCardProps): ReactElement => {
  return (
    <Card className="gap-0">
      <CardHeader className="p-[30px]">{header}</CardHeader>
      <Separator className="border-[var(--default-border-color)]" />
      <CardContent className="p-[30px]">{children}</CardContent>
    </Card>
  );
};

export default DashboardCard;
