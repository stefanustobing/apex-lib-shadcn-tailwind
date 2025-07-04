import { Meta, StoryObj } from "@storybook/react";
import TileCounterCard from ".";
const meta: Meta = {
  title: "Mycomponent/CustomCard/TileCounterCard",
  component: TileCounterCard,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatar: "ASLT",
    textTop: "90",
    textBottom: "Total Case",
  },
};
