import { Meta, StoryObj } from "@storybook/react";
import Subheadline from "./index";

const meta: Meta = {
  title: "Mycomponent/Typography/Subheadline",
  component: Subheadline,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      new Intl.NumberFormat("no-NO", {
        style: "currency",
        currency: "NOK",
        currencyDisplay: "code",
      }).format(20072000),
    ],
  },
};
