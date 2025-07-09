import { Meta, StoryObj } from "@storybook/react";

import { Switch } from ".";

const meta: Meta = {
  title: "Mycomponent/Switch",
  component: Switch,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithProps: Story = {
  args: {
    checked: true,
    onCheckedChange: () => alert("Checked changed"),
  },
};
