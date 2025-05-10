import { Meta, StoryObj } from "@storybook/react";
import FilterButton from "./index";
import { User } from "react-feather";

const meta: Meta<typeof FilterButton> = {
  title: "Mycomponent/Btn/FilterButton",
  component: FilterButton,
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
        <User /> Manager
      </>
    ),
    variant: "primary",
  },
};
