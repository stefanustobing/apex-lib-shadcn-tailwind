import { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../Btn/Button";

import BtnFooterRow from "./index";

const meta: Meta = {
  title: "Mycomponent/Container/JustifyContainer",
  component: BtnFooterRow,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Button>Clear</Button>
        <Button>Apply</Button>
      </>
    ),
    justify: "between",
    className: "!mb-5",
  },
};
