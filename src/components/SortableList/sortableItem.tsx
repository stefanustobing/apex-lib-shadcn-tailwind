import { ReactElement } from "react";
import FlexContainer from "../Container/FlexContainer";
import { Menu } from "react-feather";
import { Switch } from "../Switch";
import JustifyContainer from "../Container/JustifyContainer";

const SortableList = (): ReactElement => {
  return (
    <JustifyContainer justify="between">
      <FlexContainer className="!gap-2 text-[var(--muted)]">
        <div className="!border-1 !border-primary text-primary flex items-center [&_svg]:!h-[18px] [&_svg]:!w-[18px] !py-[0.3rem] !px-[0.3rem] !rounded-[0.334rem] cursor-grabbing">
          <Menu />
        </div>
        Account
      </FlexContainer>
      <Switch />
    </JustifyContainer>
  );
};

export default SortableList;
