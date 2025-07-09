import { Meta, StoryObj } from "@storybook/react";

import StatusFailed from ".";

const meta: Meta = {
  title: "Mycomponent/Status/StatusFailed",
  component: StatusFailed,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    failedType: "Failed sms",
    counts: "20",
  },
};
