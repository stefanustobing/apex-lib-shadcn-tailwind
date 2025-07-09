import { Meta, StoryObj } from "@storybook/react";

import LoadingSpin from ".";

const meta: Meta = {
  title: "Mycomponent/Loading/LoadingSpin",
  component: LoadingSpin,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          height: "auto",
          minHeight: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
