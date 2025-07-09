import { Meta, StoryObj } from "@storybook/react";
import { User, ChevronDown } from "react-feather";

import FilterButton from "../../Btn/FilterButton";

import Dropdown from ".";

const meta: Meta = {
  title: "Mycomponent/DropdownCustom/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
            <Dropdown 
                trigger={
                    <FilterButton>
                        <User />Manager<ChevronDown />
                    </FilterButton>
                }
                asChild
            >
                <div className="!px-4 !py-4">
                    This is the place where you can put the content of a dropdown with type ReactNode.
                </div>
            </Dropdown>`,
        format: true,
      },
    },
  },
  args: {
    trigger: (
      <FilterButton>
        <User /> Manager <ChevronDown />
      </FilterButton>
    ),
    children: (
      <div className="!px-4 !py-4">
        This is the place where you can put the content of a dropdown with type
        ReactNode.
      </div>
    ),
    asChild: true,
  },
};
