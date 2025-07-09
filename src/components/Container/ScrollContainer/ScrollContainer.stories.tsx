import { Meta, StoryObj } from "@storybook/react";

import ScrollContainer from "./index";

const meta: Meta = {
  title: "Mycomponent/Container/ScrollContainer",
  component: ScrollContainer,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    ),
    className: "w-[50%]",
    id: "test",
    role: "listbox",
  },
};
