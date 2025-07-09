import { Meta, StoryObj } from "@storybook/react";
import { Sliders, ChevronDown } from "react-feather";

import ActionButton from "../../Btn/ActionButton";

import ActionBtnDropdown from "./index";

const meta: Meta = {
  title: "Mycomponent/DropdownCustom/ActionBtnDropdown",
  component: ActionBtnDropdown,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: (
      <ActionButton>
        <Sliders /> Actions <ChevronDown />
      </ActionButton>
    ),
    items: [
      { name: "Add User", onClick: () => console.log("Add User clicked") },
      { name: "Edit User", onClick: () => console.log("Edit User clicked") },
      {
        name: "Delete User",
        onClick: () => console.log("Delete User clicked"),
      },
    ],
  },
};
