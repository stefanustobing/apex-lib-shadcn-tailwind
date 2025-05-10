import { Meta, StoryObj } from "@storybook/react";
import BtnFooterRow from "./index";
import { Button } from "../../Btn/Button";

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
  },
};
