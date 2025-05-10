import { FunctionComponent, ReactNode, ReactElement } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../Dropdown";

type ActionBtnDropdownProps = {
  drpdownTrigger: ReactNode;
  drpdownItems: ReactElement<typeof DropdownMenuItem>[];
};

const ActionBtnDropdown: FunctionComponent<ActionBtnDropdownProps> = ({
  drpdownTrigger,
  drpdownItems,
}): ReactNode => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{drpdownTrigger}</DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="start" className="w-64 ">
        {drpdownItems.map((item) => item as unknown as ReactNode)}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionBtnDropdown;
