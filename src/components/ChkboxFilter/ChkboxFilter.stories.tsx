import { Meta, StoryObj } from "@storybook/react";
import { User } from "react-feather";

import ChkboxFilter from ".";

const meta: Meta<typeof ChkboxFilter> = {
  title: "Mycomponent/ChkboxFilter",
  component: ChkboxFilter,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    numOfGrids: 3,
    data: [
      { children: "test 1", checked: true, id: "test_id_1" },
      {
        children: (
          <>
            <User /> User
          </>
        ),
        id: "test_id_2",
      },
      { children: "test 3", id: "test_id_3" },
      { children: "test 4", id: "test_id_4", disabled: true },
    ],
  },
};
