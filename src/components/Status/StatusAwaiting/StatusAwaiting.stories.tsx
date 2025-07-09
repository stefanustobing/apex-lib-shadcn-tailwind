import { Meta, StoryObj } from "@storybook/react";

import StatusAwaiting from ".";

const meta: Meta = {
  title: "Mycomponent/Status/StatusAwaiting",
  component: StatusAwaiting,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    counts: "20",
    awaitingType: "Leases",
    statusMessage: "Awaiting e-sign from Landlord",
  },
};
