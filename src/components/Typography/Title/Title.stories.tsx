import { Meta, StoryObj } from "@storybook/react";
import Title from "./index";

const meta: Meta = {
  title: "Mycomponent/Typography/Title",
  component: Title,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: ["Stefanus Lumban Tobing"],
  },
};
