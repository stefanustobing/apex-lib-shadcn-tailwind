import { ReactElement, ComponentProps, forwardRef } from "react";

import { cn } from "../../../utility/utils";

type ScrollContainerProps = {
  className?: string;
} & ComponentProps<"div">;

const ScrollContainer = forwardRef<HTMLDivElement, ScrollContainerProps>(
  function ScrollContainer({ className, ...props }, ref): ReactElement {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-h-60 custom-scrollbar overflow-hidden overflow-y-scroll",
          className,
        )}
        {...props}
      />
    );
  },
);

export default ScrollContainer;
