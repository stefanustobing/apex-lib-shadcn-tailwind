import { Meta, StoryObj } from "@storybook/react";
import ActionBtnDropdown from "./index";
import ActionButton from "../../Btn/ActionButton";
import { MoreHorizontal } from "react-feather";
import { DropdownMenuItem } from "../../Dropdown";
import ActionBtnItem from "../../Dropdown/ActionBtnItem";

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
    drpdownTrigger: (
      <ActionButton>
        <MoreHorizontal />
      </ActionButton>
    ),
    drpdownItems: [
      <DropdownMenuItem>
        <ActionBtnItem>Add User</ActionBtnItem>
      </DropdownMenuItem>,
      <DropdownMenuItem>
        <ActionBtnItem>Edit User</ActionBtnItem>
      </DropdownMenuItem>,
      <DropdownMenuItem>
        <ActionBtnItem>Delete User</ActionBtnItem>
      </DropdownMenuItem>,
    ],
  },
};
