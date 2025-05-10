import { FunctionComponent, ReactElement, ReactNode } from "react";
import { cn } from "../../utility/utils";

type BoxGridProps = {
  numOfGrids: number;
  children: ReactNode;
  className?: string;
};

const BoxGrid: FunctionComponent<BoxGridProps> = ({
  numOfGrids,
  children,
  className,
}): ReactElement => {
  const columnClass = [
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-3",
    "grid-cols-4",
    "grid-cols-5",
  ];
  return (
    <div
      className={cn(
        "p-[30px] grid gap-[25px]",
        columnClass[numOfGrids - 1],
        className,
      )}
    >
      {children}
    </div>
  );
};

export default BoxGrid;
