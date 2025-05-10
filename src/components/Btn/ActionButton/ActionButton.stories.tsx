import { Meta, StoryObj } from "@storybook/react";
import ActionButton from "./index";
import { MoreHorizontal } from "react-feather";

const meta: Meta<typeof ActionButton> = {
  title: "Mycomponent/Btn/ActionButton",
  component: ActionButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <MoreHorizontal />,
  },
};
