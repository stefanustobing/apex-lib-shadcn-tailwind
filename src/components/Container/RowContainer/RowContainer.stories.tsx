import { Meta, StoryObj } from "@storybook/react";

import RowContainer from ".";
const meta: Meta = {
  title: "Mycomponent/Container/RowContainer",
  component: RowContainer,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
