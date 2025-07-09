import { Meta, StoryObj } from "@storybook/react";

import BulletPoint from ".";

const meta: Meta = {
  title: "Mycomponent/BulletPoint",
  component: BulletPoint,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "yellow",
        "purple",
        "violate",
        "warning",
        "orange",
        "green",
        "secondary",
        "danger",
      ],
      description: "Control the color variant",
    },
    className: {
      control: "text",
      description: "Tailwind css classes",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
