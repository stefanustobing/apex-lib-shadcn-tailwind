import { Meta, StoryObj } from "@storybook/react";

import { KroneIcon } from "../../Assets/custom-svg";

import { Avatar, AvatarImage, AvatarFallback } from ".";

const meta: Meta<typeof Avatar> = {
  title: "Mycomponent/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
        <AvatarFallback>SLT</AvatarFallback>
      </>
    ),
  },
};

/**
 * We can customize the Avatar by its shape and shape. And if don't want to use the AvatarImage, we can use the AvatarFallback. The AvatarFallback has a variant prop that can be used to change the background color. The default variant in the AvatarFallback is "primary", but we can also use "warning", "danger", "purple", "green", "violate", "cyan", "success", and "yellow".
 */
export const squareAvatar: Story = {
  args: {
    shape: "square",
    size: "s60px",
    children: (
      <AvatarFallback variant="danger">
        <KroneIcon />
      </AvatarFallback>
    ),
  },
};
