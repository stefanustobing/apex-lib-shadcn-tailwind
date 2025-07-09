import { Meta, StoryObj } from "@storybook/react";
import { DateRange } from "react-day-picker";
import { Calendar } from "react-feather";

import FilterButton from "../../Btn/FilterButton";

import DateRangeFilterDropdown from ".";

const meta: Meta = {
  title: "Mycomponent/DropdownCustom/DateRangeFilterDropdown",
  component: DateRangeFilterDropdown,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    btnLabel: (
      <FilterButton className="data-[state='open']:text-[var(--sub-primary-color)]">
        <Calendar /> Create Date
      </FilterButton>
    ),
    footerBtnClearLabel: "Clear",
    footerBtnApplyLabel: "Apply",
    onClear: () => {
      console.log("Clear button clicked");
    },
    onApply: (date: DateRange) => {
      console.log("Apply button clicked with date:", date);
    },
  },
};
