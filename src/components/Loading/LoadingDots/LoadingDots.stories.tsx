import { Meta, StoryObj } from "@storybook/react";
import LoadingDots from ".";

const meta: Meta = {
  title: "Mycomponent/Loading/LoadingDots",
  component: LoadingDots,
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
