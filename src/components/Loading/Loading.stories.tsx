import { Meta, StoryObj } from "@storybook/react";
import Loading from ".";

const meta: Meta = {
  title: "Mycomponent/Loading",
  component: Loading,
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

export const Default: Story = {};
