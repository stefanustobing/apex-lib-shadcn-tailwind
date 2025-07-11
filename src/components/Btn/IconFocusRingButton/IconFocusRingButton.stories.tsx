import { Meta, StoryObj } from "@storybook/react";
import { MoreHorizontal, X } from "react-feather";

import IconFocusRingButton from "./index";

const meta: Meta<typeof IconFocusRingButton> = {
  title: "Mycomponent/Btn/IconFocusRingButton",
  component: IconFocusRingButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Settings: Story = {
  args: {
    children: <MoreHorizontal />,
  },
};

export const Close: Story = {
  args: {
    children: <X />,
  },
};
