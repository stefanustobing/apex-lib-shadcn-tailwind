import { Meta, StoryObj } from "@storybook/react";
import { User } from "react-feather";

import { Badge } from ".";

const meta: Meta<typeof Badge> = {
  title: "Mycomponent/Badge",
  component: Badge,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <User />
        test
      </>
    ),
  },
};

export const Variance: Story = {
  args: {
    ...Default.args,
    size: "sm",
    variant: "blue",
    square: true,
  },
};
