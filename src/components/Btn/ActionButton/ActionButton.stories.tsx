import { Meta, StoryObj } from "@storybook/react";
import { Sliders, ChevronDown } from "react-feather";

import ActionButton from "./index";

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
    children: (
      <>
        <Sliders />
        Actions
        <ChevronDown />
      </>
    ),
  },
};
