import { ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../Dropdown";

type dropdownProps = {
  trigger: ReactNode;
  children: ReactNode;
  onOpenChange?: () => void;
  asChild?: boolean;
  open?: boolean;
  className?: string;
};

const Dropdown = ({
  trigger,
  className,
  children,
  onOpenChange,
  open,
  asChild = false,
}: dropdownProps): ReactElement => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [availableSpaceOnTheRight, setAvailableSpaceOnTheRight] = useState(0);

  useEffect(() => {
    const updateAvailableSpaceOnTheRight = () => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        setAvailableSpaceOnTheRight(window.innerWidth - rect.left);
      }
    };
    updateAvailableSpaceOnTheRight();
    window.addEventListener("resize", updateAvailableSpaceOnTheRight);
    return () =>
      window.removeEventListener("resize", updateAvailableSpaceOnTheRight);
  }, []);

  return (
    <DropdownMenu
      onOpenChange={(open) => {
        if (open) {
          onOpenChange?.();
        }
      }}
      open={open}
    >
      <DropdownMenuTrigger
        ref={triggerRef}
        asChild={asChild}
        className={className}
      >
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        align={availableSpaceOnTheRight >= 250 ? "start" : "end"}
        className="min-w-[250px] max-h-[450px] max-w-[550px] overflow-y-hidden"
      >
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
