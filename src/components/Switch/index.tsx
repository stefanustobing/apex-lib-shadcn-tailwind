import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "../../utility/utils";

type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root>;

function Switch({ className, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-success data-[state=unchecked]:bg-[var(--chips-bg)] focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[28px] w-[54px] shrink-0 items-center !rounded-full data-[state=unchecked]:!border-2 !border-[var(--muted-color)] data-[state=checked]:border-success shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-[var(--muted-color)] data-[state=checked]:bg-white dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-[18px] rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[30px] data-[state=unchecked]:translate-x-[4px]",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
