import { Meta, StoryObj } from "@storybook/react";
import IconButton from "./index";
import { Settings } from "react-feather";

const meta: Meta<typeof IconButton> = {
  title: "Mycomponent/Btn/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Settings color="var(--primary)" />,
  },
};
