import { Meta, StoryObj } from "@storybook/react";
import FrameSquared from ".";
import { KroneIcon } from "../../Assets/custom-svg";

const meta: Meta = {
  title: "Mycomponent/FrameSquared",
  component: FrameSquared,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <KroneIcon />,
    variant: "yellow",
  },
};
