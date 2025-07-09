import { Meta, StoryObj } from "@storybook/react";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from ".";

const meta: Meta = {
  title: "Mycomponent/Select",
  component: Select,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          height: "auto",
          minHeight: "300px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
        </SelectContent>
      </>
    ),
  },
};
