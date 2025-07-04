import { ComponentProps, ReactNode, forwardRef } from "react";
import { cn } from "../../../utility/utils";

type IconFocusRingButtonProps = {
  children: ReactNode;
  className?: string;
} & ComponentProps<"button">;

const IconFocusRingButton = forwardRef<
  HTMLButtonElement,
  IconFocusRingButtonProps
>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "flex items-center justify-center cursor-pointer !p-0 [&_svg]:size-[17.5px] size-[35px] !rounded-[50%] bg-transparent text-[var(--sub-primary-color)] hover:bg-[rgba(0,0,0,0.1)] focus-visible:ring-0",
        className,
      )}
      {...props}
    />
  );
});

export default IconFocusRingButton;
