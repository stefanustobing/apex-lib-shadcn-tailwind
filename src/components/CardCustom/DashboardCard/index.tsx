import { ReactElement, ReactNode } from "react";

import { cn } from "../../../utility/utils";
import { Card, CardHeader, CardContent } from "../../Card";
import JustifyContainer from "../../Container/JustifyContainer";
import LoadingDots from "../../Loading/LoadingDots";
import { Separator } from "../../Separator";

type DashboardCardProps = {
  titleLeft: ReactNode;
  titleRight?: ReactNode;
  children: ReactNode;
  className?: string;
  loading?: boolean;
};

const DashboardCard = ({
  titleLeft,
  titleRight,
  children,
  className,
  loading = false,
}: DashboardCardProps): ReactElement => {
  return (
    <div className="relative">
      {loading && (
        <div className="absolute h-full w-full flex items-center z-50">
          <LoadingDots size="lg" />
        </div>
      )}
      <Card className={cn(`gap-0 ${loading ? "opacity-40" : ""}`, className)}>
        <CardHeader className="!p-[30px]">
          <JustifyContainer justify="between">
            {titleLeft}
            {titleRight}
          </JustifyContainer>
        </CardHeader>
        <Separator className="bg-[var(--default-border-color)]" />
        <CardContent className="!p-[30px]">{children}</CardContent>
      </Card>
    </div>
  );
};

export default DashboardCard;
