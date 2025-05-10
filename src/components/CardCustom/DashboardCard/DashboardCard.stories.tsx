import { Meta, StoryObj } from "@storybook/react";
import DashboardCard from "./index";

const meta: Meta = {
  title: "Mycomponent/CustomCard/DashboardCard",
  component: DashboardCard,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: "This is the header content",
    children: [
      <div>this is content 1</div>,
      <div>this is content 2</div>,
      <div>this is content 3</div>,
      <div>this is content 4</div>,
      <div>this is content 5</div>,
    ],
  },
};
