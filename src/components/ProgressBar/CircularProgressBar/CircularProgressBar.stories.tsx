import { Meta, StoryObj } from "@storybook/react";

import CircularProgressBar from ".";

const meta: Meta = {
  title: "Mycomponent/ProgressBar/CircularProgressBar",
  component: CircularProgressBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
