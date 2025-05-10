import { ComponentProps, forwardRef } from "react";
import { cn } from "../../../utility/utils";

const IconButton = forwardRef<HTMLButtonElement, ComponentProps<"button">>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "p-0 [&_svg]: size-6 focus:outline-none disabled:cursor-not-allowed",
          className,
        )}
        {...props}
      />
    );
  },
);

export default IconButton;
