import {
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
  useRef,
} from "react";
import {
  DropdownMenu,
  DropdownMenuActionItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../Dropdown";
import ScrollContainer from "../../ScrollContainer";

type ActionBtnDropdownProps = {
  trigger: ReactNode;
  /*items: ReactElement<typeof DropdownMenuActionItem>[];*/
  items: {
    name: ReactNode;
    onClick?: () => void;
    variant?: "default" | "selected";
  }[];
};

const ActionBtnDropdown: FunctionComponent<ActionBtnDropdownProps> = ({
  trigger,
  items,
}) => {
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
    <DropdownMenu>
      <DropdownMenuTrigger ref={triggerRef} asChild>
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        align={availableSpaceOnTheRight >= 240 ? "start" : "end"}
      >
        {items.length < 6 ? (
          <div className="min-w-[250px] max-h-[280px]">
            {items.map((item, index) => (
              <DropdownMenuActionItem
                variant={item.variant}
                key={index}
                onClick={item.onClick}
              >
                {item.name}
              </DropdownMenuActionItem>
            ))}
          </div>
        ) : (
          <ScrollContainer className="min-w-[250px] max-h-[280px]">
            {items.map((item, index) => (
              <DropdownMenuActionItem
                variant={item.variant}
                key={index}
                onClick={item.onClick}
              >
                {item.name}
              </DropdownMenuActionItem>
            ))}
          </ScrollContainer>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionBtnDropdown;
