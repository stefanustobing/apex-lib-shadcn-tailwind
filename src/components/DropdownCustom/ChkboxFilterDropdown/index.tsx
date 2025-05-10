import { FunctionComponent, ReactElement } from "react";
import FilterButton, { FilterButtonProps } from "../../Btn/FilterButton";
import { Button, ButtonProps } from "../../Btn/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../Dropdown";
import JustifyContainer from "../../Container/JustifyContainer";
import ChkboxFilter from "../../ChkboxFilter";

type ChkboxFilterDropdownProps = {
  triggerBtn: FilterButtonProps;
  children: ReactElement<typeof ChkboxFilter>;
  footerBtn: ButtonProps[];
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const ChkboxFilterDropdown: FunctionComponent<ChkboxFilterDropdownProps> = ({
  footerBtn,
  children,
  triggerBtn,
  isOpen,
  onOpenChange,
}): ReactElement => {
  const { children: triggerBtnChildren, ...restTriggerBtnProps } = triggerBtn;

  return (
    <DropdownMenu open={isOpen} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger
        asChild
        className="data-[state=open]:text-[var(--sub-primary-color)]"
      >
        <FilterButton {...restTriggerBtnProps}>
          {triggerBtnChildren}
        </FilterButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        align="start"
        className="max-w-[600px] min-w-[250px]"
      >
        {children}
        <DropdownMenuSeparator />
        <JustifyContainer justify="between">
          {footerBtn.map((btn, index) => {
            const { children, ...restBtnProps } = btn;
            return (
              <Button key={index} {...restBtnProps}>
                {children}
              </Button>
            );
          })}
        </JustifyContainer>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ChkboxFilterDropdown;
