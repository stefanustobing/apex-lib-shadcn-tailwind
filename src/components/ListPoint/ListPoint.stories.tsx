import { Meta, StoryObj } from "@storybook/react";
import ListPoint from ".";

const meta: Meta = {
  title: "Mycomponent/ListPoint",
  component: ListPoint,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Occupied",
    variant: "danger",
  },
};
