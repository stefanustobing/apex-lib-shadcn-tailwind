import { Meta, StoryObj } from "@storybook/react";
import StackedBarChart from ".";

const meta: Meta = {
  title: "Mycomponent/Chart/StackedBarChart",
  component: StackedBarChart,
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
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    chartData: [
      {
        label: "Due",
        data: [1000, 2000, 1500, 3000, 4500, 1500, 2000],
        backgroundColor: "#db700f",
      },
      {
        label: "Payment",
        data: [400, 1500, 1500, 2500, 4000, 1000, 2000],
        backgroundColor: "#219b6f",
      },
      {
        label: "Lost",
        data: [0, 0, 0, 0, 0, 0, 200],
        backgroundColor: "#74777b",
      },
    ],
  },
};
