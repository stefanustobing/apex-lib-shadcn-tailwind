import { Meta, StoryObj } from "@storybook/react";
import NavMenu from "./index";
import { Separator } from "../Separator";
import { SortIcon } from "../../Assets/custom-svg";
import IconFocusRingButton from "../Btn/IconFocusRingButton";
import ActionBtnDropdown from "../DropdownCustom/ActionBtnDropdown";

const meta: Meta = {
  title: "Mycomponent/NavMenu",
  component: NavMenu,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Example1: Story = {
  args: {
    navItems: [
      {
        label: "Lease",
        onClick: () => {
          console.log("clicked");
          console.log(1 + 1);
        },
      },
      { label: "Moving in" },
      { label: "Moving out" },
      { label: "Payments" },
      { label: "Financials" },
      { label: "Checking" },
    ],
    defaultSelectedItem: 3,
  },
};

export const Example2: Story = {
  parameters: {
    docs: {
      source: {
        code: `
          <NavMenu
            defaultSelectedItem={0}
            navItems={[
              {
                label: 'Lease',
                onClick: () => {}
              },
              {
                label: 'Moving in'
              },
              {
                label: 'Moving out'
              },
              {
                label: 'Payments'
              },
              {
                label: 'Financials'
              },
              {
                label: 'Checking'
              }
            ]}
            options={[
              <Separator 
                className="!mr-2 bg-[var(--gray)]" 
                orientation="vertical"
              />,
              <ActionBtnDropdown 
                items={[
                    { name: "Created Date"}, 
                    { name: "Due Date"}
                ]} 
                trigger={<IconFocusRingButton><SortIcon /></IconFocusRingButton>}
              />
            ]}
          />
        `,
        format: true,
      },
    },
  },
  args: {
    ...Example1.args,
    defaultSelectedItem: 0,
    options: [
      <Separator orientation="vertical" className="!mr-2 bg-[var(--gray)]" />,
      <ActionBtnDropdown
        trigger={
          <IconFocusRingButton>
            <SortIcon />
          </IconFocusRingButton>
        }
        items={[{ name: "Created Date" }, { name: "Due Date" }]}
      />,
    ],
  },
};
