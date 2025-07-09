import { Meta, StoryObj } from "@storybook/react";

import Headline from "./index";

const meta: Meta = {
  title: "Mycomponent/Typography/Headline",
  component: Headline,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: ["Account"],
  },
};
