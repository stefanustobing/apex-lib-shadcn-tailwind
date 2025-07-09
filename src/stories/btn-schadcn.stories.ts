import { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../@/components/ui/button";

const meta: Meta<typeof Button> = {
  title: "Example/BtnSchadcn",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click me",
    variant: "ghost",
  },
};
