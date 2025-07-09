import { Meta, StoryObj } from "@storybook/react";
import { Award } from "react-feather";

import ChkboxFilter from "../../ChkboxFilter";

import ChkboxFilterDropdown from "./index";

const meta: Meta = {
  title: "Mycomponent/DropdownCustom/ChkboxFilterDropdown",
  component: ChkboxFilterDropdown,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    triggerBtn: {
      children: (
        <>
          <Award />
          Status
        </>
      ),
      variant: "",
    },
    footerBtn: [
      {
        children: "Clear",
        variant: "text",
        onClick: () => alert("clear being clicked"),
        className: "font-medium",
      },
      {
        children: "Apply",
        variant: "dark",
      },
    ],
    children: (
      <ChkboxFilter
        numOfGrids={3}
        data={[
          {
            children: "vacant",
            id: "test_id_1",
            onCheckedChange: () => alert("vacant being clicked"),
          },
          {
            children: "suspended",
            id: "test_id_2",
          },
          {
            children: "in progress",
            id: "test_id_3",
          },
          {
            children: "Occupied",
            id: "test_id_4",
          },
          {
            children: "Maintenance",
            id: "test_id_5",
          },
          {
            children: "upcoming",
            id: "test_id_6",
          },
        ]}
      />
    ),
  },
};
