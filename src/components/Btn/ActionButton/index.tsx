import { ComponentProps, forwardRef } from "react";
import { cn } from "../../../utility/utils";

const ActionButton = forwardRef<HTMLButtonElement, ComponentProps<"button">>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "flex items-center justify-center cursor-pointer p-0 [&_svg]:size-[17.5px] size-[35px] p0 text-[var(--sub-primary-color)] rounded-[50%] bg-transparent hover:bg-[rgba(0,0,0,0.1)] focus-visible:ring-0",
          className,
        )}
        {...props}
      />
    );
  },
);

export default ActionButton;
