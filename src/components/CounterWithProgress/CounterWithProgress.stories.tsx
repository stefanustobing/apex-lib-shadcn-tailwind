import { Meta, StoryObj } from "@storybook/react";

import CounterWithProgress from ".";

const meta: Meta = {
  title: "Mycomponent/CounterWithProgress",
  component: CounterWithProgress,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    counts: 20369,
    value: 95,
    description: "Total occupied properties",
  },
};
