import { FunctionComponent, ReactElement, ReactNode } from "react";
import { Card } from "../../Card";
import MetricPanelGrid from "../../MetricPanelGrid";
import PropertyProfile from "../../PropertyProfile";
import ActionBtnDropdown from "../../DropdownCustom/ActionBtnDropdown";
import { MoreHorizontal } from "react-feather";
import useMediaQuery from "../../../utility/customHook/useMediaQuery";
import { Separator } from "../../Separator";

type EntityCardProps = {
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
};

const EntityCard: FunctionComponent<EntityCardProps> = ({
  header,
  footer,
}): ReactElement => {
  const min768 = useMediaQuery("(min-width: 768px)");
  return (
    <Card>
      <div className="p-[30px]">
        <div className="flex flex-row">
          <div className="w-10/12">
            <PropertyProfile
              address="Levangergata 2, 7068, Trondheim, Norway"
              infoText="Entire place in a Apartment - Apt: H0101"
              badge={[
                {
                  text: "#24",
                  color: "red",
                },
                {
                  text: "Occupied",
                  color: "green",
                },
                {
                  text: "Soon ending lease",
                  color: "yellow",
                },
                {
                  text: "upcoming",
                  color: "yellow",
                },
              ]}
            />
          </div>
          <div
            className={`w-2/12 flex justify-end ${min768 ? "" : "absolute top-5 right-5"}`}
          >
            {/*            <ActionBtnDropdown
              drpdownTrigger={<MoreHorizontal />}
              drpdownBtnClass="p-0 w-[calc(2.25rem-1px)] h-[calc(2.25rem-1px)] rounded-full border-0 shadow-none focus-visible:ring-0"
              btnLabel={[
                "Profile",
                "Billing",
                "Team",
                "Subscription",
                "Add Services",
              ]}
            />*/}
          </div>
        </div>
        This is content
        <Separator className="ml-[-30px] mr-[-30px]" />
        {footer}
      </div>
    </Card>
  );
};

export default EntityCard;
