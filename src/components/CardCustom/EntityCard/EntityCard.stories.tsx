import { Meta, StoryObj } from "@storybook/react";
import EntityCard from "./index";
import PropertyProfile from "../../PropertyProfile";
import PropertyInfo from "../../PropertyInfo";
import ActionBtnDropdown from "../../DropdownCustom/ActionBtnDropdown";
import { MoreHorizontal } from "react-feather";

const meta: Meta<typeof EntityCard> = {
  title: "Mycomponent/CustomCard/EntityCard",
  component: EntityCard,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: (
      <>
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
        <div className="w-2/12 flex justify-end">
          <ActionBtnDropdown
            drpdownBtnLabel={<MoreHorizontal />}
            drpdownBtnClass="p-0 w-[calc(2.25rem-1px)] h-[calc(2.25rem-1px)] rounded-full border-0 shadow-none focus-visible:ring-0"
            btnLabel={[
              "Profile",
              "Billing",
              "Team",
              "Subscription",
              "Add Services",
            ]}
          />
        </div>
      </>
    ),
    footer: (
      <PropertyInfo
        leaseDate="30.04.2024-30-04.2030"
        account={{
          avatarUrl: "https://github.com/shadcn.png",
          accountName: "Apex IT",
        }}
        manager={{ managerName: "Marte Vrålstad" }}
        tenant={{
          avatarUrl:
            "https://uninite-local.imgix.net/listings/oxl89va3pz7p8dwxd/0727f9210fc.jpg?w=70&h=70&fit=min&facepad=3",
          tenantName: "Stefanus Tobing",
        }}
      />
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `
                    <EntityCard
                        header = (
                            <>
                                <div className="w-10/12">
                                    <PropertyProfile
                                        address="Levangergata 2, 7068, Trondheim, Norway"
                                        infoText="Entire place in an Apartment - Apt: H0101"
                                        badge={[
                                            { text: "#24", color: "red" },
                                            { text: "Occupied", color: "green" },
                                            { text: "Soon ending lease", color: "yellow" },
                                            { text: "upcoming", color: "yellow" },
                                        ]}
                                    />
                                </div>
                                <div className="w-2/12 flex justify-end">
                                    <ActionBtnDropdown
                                        drpdownBtnLabel={<MoreHorizontal />}
                                        drpdownBtnClass="p-0 w-[calc(2.25rem-1px)] h-[calc(2.25rem-1px)] rounded-full border-0 shadow-none focus-visible:ring-0"
                                        btnLabel={["Profile", "Billing", "Team", "Subscription", "Add Services"]}
                                    />
                                </div>
                            </>
                        )
                        footer = (
                            <PropertyInfo 
                                leaseDate="30.04.2024-30-04.2030"
                                account= {{avatarUrl: "https://github.com/shadcn.png", accountName:"Apex IT"}}
                                manager= {{managerName: "Marte Vrålstad"}}
                                tenant= {{avatarUrl:"https://uninite-local.imgix.net/listings/oxl89va3pz7p8dwxd/0727f9210fc.jpg?w=70&h=70&fit=min&facepad=3", tenantName:"Stefanus Tobing"}}
                            />
                        )
                    />
                `,
        format: true,
      },
    },
  },
};
