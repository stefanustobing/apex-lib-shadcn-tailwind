import { Meta, StoryObj } from "@storybook/react";
import StatusLease from ".";

const meta: Meta = {
  title: "Mycomponent/Status/StatusLease",
  component: StatusLease,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    counts: "20",
    leaseStatus: "Upcoming lease",
    additionalInfo: "(In next 7 days)",
  },
};
