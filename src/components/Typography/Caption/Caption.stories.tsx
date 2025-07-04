import { Meta, StoryObj } from "@storybook/react";
import Caption from "./index";

const meta: Meta = {
  title: "Mycomponent/Typography/Caption",
  component: Caption,
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
