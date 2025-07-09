import { Meta, StoryObj } from "@storybook/react";

import Counter from ".";

const meta: Meta = {
  title: "Mycomponent/Counter",
  component: Counter,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    counts: 90,
    description: "Total occupied properties",
  },
};
