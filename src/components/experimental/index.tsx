import { FunctionComponent, ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../@/components/ui/dropdown-menu";
import ChkboxFilterDropdown from "../DropdownCustom/ChkboxFilterDropdown";
import { Button } from "../Btn/Button";
import ChkboxFilter from "../ChkboxFilter";
import ChkboxAndLabel from "../ChkboxAndLabel";

type ActionBtnDropdownProps = {
  drpdownTrigger: ReactNode;
  drpdownItems: (typeof DropdownMenuItem)[];
};

const ActionBtnDropdown: FunctionComponent<ActionBtnDropdownProps> = ({
  drpdownTrigger,
  drpdownItems,
}): ReactNode => {
  return (
    /*<DropdownMenu>
      <DropdownMenuTrigger asChild>{drpdownTrigger}</DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        align="start"
        className="w-64 border-0 my-2 px-0 py-2 rounded-[0.334rem] shadow-[0_5px_15px_rgba(0,0,0,0.35)]"
      >
        {drpdownItems.map((item) => item as unknown as ReactNode)}
      </DropdownMenuContent>
    </DropdownMenu>*/
    <ChkboxFilterDropdown
      triggerBtn={<Button>Sorting</Button>}
      footerBtn={<Button>Apply</Button>}
    >
      <ChkboxFilter
        /* numOfGrids={3}
        data={[
          { component: ChkboxAndLabel, chkData: { children: "Occupied" } },
          {
            component: ChkboxAndLabel,
            chkData: { children: "Vacant", checked: true },
          },
        ]}*/
        numOfGrids={3}
        data={[
          { children: "test 1", checked: true, id: "test_id_1" },
          { children: "test 2", disabled: true },
        ]}
      />
    </ChkboxFilterDropdown>
  );
};

export default ActionBtnDropdown;
