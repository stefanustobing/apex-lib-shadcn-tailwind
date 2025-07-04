import { ReactElement, useState, useRef, ReactNode } from "react";
import Dropdown from "../Dropdown";
import { Calendar } from "react-feather";
import FilterButton from "../../Btn/FilterButton";
import DateRangeCalendar, {
  DateRangeCalendarRef,
} from "../../DateRangeCalendar";
import JustifyContainer from "../../Container/JustifyContainer";
import { Button } from "../../Btn/Button";
import { DropdownMenuSeparator } from "../../Dropdown";
import { DateRange } from "react-day-picker";

type DateRangeFilterDropdownProps = {
  btnLabel: ReactNode;
  btnVariant?: "primary" | "default";
  presetRangesLabels?: string[];
  selectedDateRange?: DateRange;
  footerBtnClearLabel?: ReactNode;
  footerBtnApplyLabel?: ReactNode;
  onClear?: () => void;
  onApply?: (dateRange: DateRange) => void;
};

const DateRangeFilterDropdown = ({
  btnLabel,
  btnVariant,
  presetRangesLabels,
  selectedDateRange,
  footerBtnClearLabel,
  footerBtnApplyLabel,
  onClear,
  onApply,
}: DateRangeFilterDropdownProps): ReactElement => {
  const [selectedDate, setSelectedDate] = useState<DateRange | undefined>();
  const dateRangeCalendarRef = useRef<DateRangeCalendarRef>(null);
  return (
    <Dropdown
      trigger={
        <FilterButton className="data-[state='open']:text-[var(--sub-primary-color)]">
          <Calendar /> Create Date
        </FilterButton>
      }
      asChild
    >
      <DateRangeCalendar
        selectedDateProp={selectedDate}
        setSelectedDateProp={setSelectedDate}
        className="!mb-[5px]"
        ref={dateRangeCalendarRef}
        /*key={String(selectedDate?.from) || 1}*/
      />
      <DropdownMenuSeparator />
      <JustifyContainer justify="between" className="!px-[30px] !py-[20px]">
        <Button
          variant="ghost"
          onClick={() => {
            setSelectedDate({
              from: new Date(
                new Date().getFullYear(),
                new Date().getMonth(),
                new Date().getDate(),
              ),
            });
            dateRangeCalendarRef.current?.setValue({
              from: new Date(
                new Date().getFullYear(),
                new Date().getMonth(),
                new Date().getDate(),
              ),
            });
          }}
        >
          Clear
        </Button>
        <Button variant="dark">Apply</Button>
      </JustifyContainer>
    </Dropdown>
  );
};

export default DateRangeFilterDropdown;
