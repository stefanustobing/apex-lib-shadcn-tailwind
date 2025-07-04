import { Meta, StoryObj } from "@storybook/react";
import SelectFilterDropdwon from ".";
import { User, ChevronDown } from "react-feather";
import { ChangeEvent } from "react";

const meta: Meta = {
  title: "Mycomponent/DropdownCustom/SelectFilterDropdwon",
  component: SelectFilterDropdwon,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    btnLabel: (
      <>
        <User />
        Manager
        <ChevronDown />
      </>
    ),
    data: [
      {
        title: "manager1",
        id: "manager 1234",
        onClick: () => console.log("Manager 1 clicked"),
        onDeselect: () => console.log("Manager 1 deselected"),
      },
      {
        title: "manager2",
        onClick: () => console.log("Manager 2 clicked"),
        selected: true,
      },
    ],
    isLoading: true,
    onOpenChange: () => {
      console.log("fetch data!");
    },
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
  },
};
