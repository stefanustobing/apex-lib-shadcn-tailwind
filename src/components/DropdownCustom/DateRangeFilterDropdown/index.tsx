import { ReactElement, useState, useRef, ReactNode } from "react";
import { DateRange } from "react-day-picker";

import { Button } from "../../Btn/Button";
import JustifyContainer from "../../Container/JustifyContainer";
import DateRangeCalendar, {
  DateRangeCalendarRef,
} from "../../DateRangeCalendar";
import { DropdownMenuSeparator } from "../../Dropdown";
import Dropdown from "../Dropdown";

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
  presetRangesLabels,
  selectedDateRange,
  footerBtnClearLabel,
  footerBtnApplyLabel,
  onClear,
  onApply,
}: DateRangeFilterDropdownProps): ReactElement => {
  const [selectedDate, setSelectedDate] = useState<DateRange | undefined>(
    selectedDateRange ? selectedDateRange : undefined,
  );
  const dateRangeCalendarRef = useRef<DateRangeCalendarRef>(null);
  return (
    <Dropdown trigger={btnLabel} asChild>
      <DateRangeCalendar
        selectedDateProp={selectedDate}
        setSelectedDateProp={setSelectedDate}
        className="!mb-[5px]"
        ref={dateRangeCalendarRef}
        presetRangesLabels={presetRangesLabels}
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
            if (onClear) {
              onClear();
            }
          }}
        >
          {footerBtnClearLabel}
        </Button>
        <Button
          variant="dark"
          onClick={() => {
            if (onApply && selectedDate) {
              onApply(selectedDate);
            }
          }}
        >
          {footerBtnApplyLabel}
        </Button>
      </JustifyContainer>
    </Dropdown>
  );
};

export default DateRangeFilterDropdown;
