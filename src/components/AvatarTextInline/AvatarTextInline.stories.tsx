import { Meta, StoryObj } from "@storybook/react";
import AvatarTextInline from ".";
import { User } from "react-feather";

/**
 * AvatarTextInline component displays an avatar alongside a text paragraph.
 * It is designed to be used in inline contexts where a small avatar and text are needed.
 */

const meta: Meta<typeof AvatarTextInline> = {
  title: "Mycomponent/AvatarTextInline",
  component: AvatarTextInline,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatar: {
      type: "image",
      src: "https://uninite-local.imgix.net/assets/default-image/property-primary.png?w=25&h=25&fit=min&facepad=3",
    },
    text: "Hans Ross' gate 1, 0172, Oslo, Norge",
  },
};

export const Span: Story = {
  args: {
    avatar: {
      type: "span",
      src: <User />,
    },
    text: "Stefanus Lumban Tobing",
  },
};
