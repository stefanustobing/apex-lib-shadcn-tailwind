import { Meta, StoryObj } from "@storybook/react";

import SortableList from ".";

const meta: Meta = {
  title: "Mycomponent/SortableList",
  component: SortableList,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
