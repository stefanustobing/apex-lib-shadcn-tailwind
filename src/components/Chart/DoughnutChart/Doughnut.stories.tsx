import { Meta, StoryObj } from "@storybook/react";
import DoughnutChart from ".";

const meta: Meta = {
  title: "Mycomponent/Chart/DoughnutChart",
  component: DoughnutChart,
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
    labels: ["Occupied", "Vacant", "Upcoming", "Maintenance"],
    chartData: [205, 4, 1, 1],
    backgroundColors: ["primary", "warning", "success", "danger"],
  },
};
