import { Meta, StoryObj } from "@storybook/react";

import LeaseCardStatus from ".";

const meta: Meta = {
  title: "Mycomponent/CustomCard/LeaseCardStatus",
  component: LeaseCardStatus,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a content",
    variant: "purple",
  },
};
