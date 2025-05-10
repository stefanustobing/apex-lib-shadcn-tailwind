import { Meta, StoryObj } from "@storybook/react";
import Text from "./index";

const meta: Meta = {
  title: "Mycomponent/Typography/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: "p",
    children: "Typography 1",
    variant: "gray",
    size: "5xl",
  },
};
