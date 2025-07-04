import { Meta, StoryObj } from "@storybook/react";
import CounterWithAvatar from ".";
import { Home } from "react-feather";

const meta: Meta = {
  title: "Mycomponent/CounterWithAvatar",
  component: CounterWithAvatar,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatar: <Home />,
    counts: 90,
    description: "Total occupied properties",
  },
};
