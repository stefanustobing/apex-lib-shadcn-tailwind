import { Meta, StoryObj } from "@storybook/react";
import ChkboxAndLabel from ".";

const meta: Meta = {
  title: "Mycomponent/ChkboxAndLabel",
  component: ChkboxAndLabel,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Agree the terms and conditions",
  },
};
