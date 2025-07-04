import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";
import { CheckCircle, ChevronDown } from "react-feather";

const meta: Meta<typeof Button> = {
  title: "Mycomponent/Btn/Button",
  component: Button,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [<CheckCircle />, "Apply", <ChevronDown />],
  },
};
