import { ReactElement, ReactNode } from "react";
import { Card, CardContent } from "../../Card";
import LoadingDots from "../../Loading/LoadingDots";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utility/utils";

const tileCardVariants = cva("w-full h-full", {
  variants: {
    padding: {
      p30: "!p-[30px]",
      p34: "!p-[34px]",
      px30py15: "!px-[30px] !py-[15px]",
      px30py20: "!px-[30px] !py-[20px]",
    },
    loading: {
      false: "",
      true: "opacity-40",
    },
  },
  defaultVariants: {
    padding: "p30",
  },
});

type TileCardProps = {
  children: ReactNode;
  className?: string;
  padding?: "p30" | "p34" | "px30py20" | "px30py15";
  loading?: boolean;
} & VariantProps<typeof tileCardVariants>;

const TileCard = ({
  className,
  children,
  padding = "p30",
  loading = false,
}: TileCardProps): ReactElement => {
  return (
    <div className="relative w-full">
      {loading && (
        <div className="absolute h-full w-full flex items-center z-50">
          <LoadingDots size="lg" />
        </div>
      )}
      <Card className={cn(tileCardVariants({ padding, loading, className }))}>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
};

export default TileCard;
