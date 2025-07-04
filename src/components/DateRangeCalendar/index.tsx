import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DateRange } from "react-day-picker";

import { Button } from "../Btn/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../Select/";
import { cn } from "../../utility/utils";

export interface DateRangeCalendarRef {
  getValue: () => DateRange | undefined;
  setValue: (date: DateRange | undefined) => void;
  clear: () => void;
}

type DateRangeCalendarProps = {
  selectedDateProp?: DateRange | undefined;
  setSelectedDateProp?: (date: DateRange) => void;
  presetRangesLabels?: string[];
  className?: string;
};

const DateRangeCalendar = React.forwardRef<
  DateRangeCalendarRef,
  DateRangeCalendarProps
>(
  (
    { presetRangesLabels, selectedDateProp, setSelectedDateProp, className },
    ref,
  ) => {
    // Create a normalized date (without time) for consistent comparisons
    const today = React.useMemo(() => {
      const now = new Date();
      return new Date(now.getFullYear(), now.getMonth(), now.getDate());
    }, []);

    // Initialize state based on prop or default to "Today"
    const getInitialSelectedDate = () => {
      if (selectedDateProp !== undefined) {
        return selectedDateProp;
      }
      return { from: today, to: today };
    };

    const getInitialMonth = () => {
      const initialDate = getInitialSelectedDate();
      if (initialDate?.from) return initialDate.from.getMonth();
      return today.getMonth();
    };

    const getInitialYear = () => {
      const initialDate = getInitialSelectedDate();
      if (initialDate?.from) return initialDate.from.getFullYear();
      return today.getFullYear();
    };

    // Initialize with "Today" as default
    const [selectedDate, setSelectedDate] = React.useState<
      DateRange | undefined
    >(getInitialSelectedDate);
    const [currentMonth, setCurrentMonth] = React.useState(getInitialMonth);
    const [currentYear, setCurrentYear] = React.useState(getInitialYear);
    const [hoveredPreset, setHoveredPreset] = React.useState<DateRange | null>(
      null,
    );
    const [hoveredDay, setHoveredDay] = React.useState<number | null>(null);

    // Expose methods to parent components
    React.useImperativeHandle(
      ref,
      () => ({
        getValue: () => selectedDate,
        setValue: (date: DateRange | undefined) => {
          setSelectedDate(date);
          if (date?.from) {
            setCurrentMonth(date.from.getMonth());
            setCurrentYear(date.from.getFullYear());
          }
        },
        clear: () => setSelectedDate(undefined),
      }),
      [selectedDate],
    );

    // Helper functions for date calculations - all return normalized dates
    const getYesterday = React.useCallback(() => {
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);
      return yesterday;
    }, [today]);

    const getStartOfWeek = React.useCallback(() => {
      const start = new Date(today);
      const day = start.getDay();
      const diff = start.getDate() - day;
      start.setDate(diff);
      return start;
    }, [today]);

    const getEndOfWeek = React.useCallback(() => {
      const end = new Date(today);
      const day = end.getDay();
      const diff = end.getDate() + (6 - day);
      end.setDate(diff);
      return end;
    }, [today]);

    const getLastWeekStart = React.useCallback(() => {
      const start = new Date(today);
      const day = start.getDay();
      const diff = start.getDate() - day - 7;
      start.setDate(diff);
      return start;
    }, [today]);

    const getLastWeekEnd = React.useCallback(() => {
      const end = new Date(today);
      const day = end.getDay();
      const diff = end.getDate() - day - 1;
      end.setDate(diff);
      return end;
    }, [today]);

    const getStartOfMonth = React.useCallback(() => {
      return new Date(today.getFullYear(), today.getMonth(), 1);
    }, [today]);

    const getEndOfMonth = React.useCallback(() => {
      return new Date(today.getFullYear(), today.getMonth() + 1, 0);
    }, [today]);

    const getLastMonthStart = React.useCallback(() => {
      return new Date(today.getFullYear(), today.getMonth() - 1, 1);
    }, [today]);

    const getLastMonthEnd = React.useCallback(() => {
      return new Date(today.getFullYear(), today.getMonth(), 0);
    }, [today]);

    const getStartOfYear = React.useCallback(() => {
      return new Date(today.getFullYear(), 0, 1);
    }, [today]);

    const getEndOfYear = React.useCallback(() => {
      return new Date(today.getFullYear(), 11, 31);
    }, [today]);

    const presetRanges = React.useMemo(
      () => [
        {
          label: presetRangesLabels?.[0] || "Today",
          range: { from: today, to: today },
        },
        {
          label: presetRangesLabels?.[1] || "Yesterday",
          range: { from: getYesterday(), to: getYesterday() },
        },
        {
          label: presetRangesLabels?.[2] || "This week",
          range: { from: getStartOfWeek(), to: getEndOfWeek() },
        },
        {
          label: presetRangesLabels?.[3] || "Last week",
          range: { from: getLastWeekStart(), to: getLastWeekEnd() },
        },
        {
          label: presetRangesLabels?.[4] || "This month",
          range: { from: getStartOfMonth(), to: getEndOfMonth() },
        },
        {
          label: presetRangesLabels?.[5] || "Last month",
          range: { from: getLastMonthStart(), to: getLastMonthEnd() },
        },
        {
          label: presetRangesLabels?.[6] || "This year",
          range: { from: getStartOfYear(), to: getEndOfYear() },
        },
      ],
      [
        today,
        getYesterday,
        getStartOfWeek,
        getEndOfWeek,
        getLastWeekStart,
        getLastWeekEnd,
        getStartOfMonth,
        getEndOfMonth,
        getLastMonthStart,
        getLastMonthEnd,
        getStartOfYear,
        getEndOfYear,
      ],
    );

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const years = Array.from({ length: 21 }, (_, i) => currentYear - 10 + i);

    // Function to check if a preset range matches the current selectedDate
    const isPresetActive = (presetRange: DateRange) => {
      if (!selectedDate?.from || !presetRange.from) return false;

      // Compare dates by their components (year, month, day) instead of timestamps
      const isSameDate = (date1: Date, date2: Date) => {
        return (
          date1.getFullYear() === date2.getFullYear() &&
          date1.getMonth() === date2.getMonth() &&
          date1.getDate() === date2.getDate()
        );
      };

      // Compare start dates
      if (!isSameDate(selectedDate.from, presetRange.from)) return false;

      // Compare end dates
      const selectedTo = selectedDate.to;
      const presetTo = presetRange.to;

      // Both should be undefined or both should be defined
      if (!selectedTo && !presetTo) return true;
      if (!selectedTo || !presetTo) return false;

      return isSameDate(selectedTo, presetTo);
    };

    const handlePresetClick = (range: DateRange) => {
      setSelectedDate(range);
      setSelectedDateProp && setSelectedDateProp(range);
      setHoveredPreset(null); // Clear hover state when clicking
      // Update current month/year to match the selected range
      if (range.from) {
        setCurrentMonth(range.from.getMonth());
        setCurrentYear(range.from.getFullYear());
      }
    };

    const handlePresetHover = (range: DateRange) => {
      setHoveredPreset(range);
    };

    const handlePresetLeave = () => {
      setHoveredPreset(null);
    };

    const handlePreviousMonth = () => {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    };

    const handleNextMonth = () => {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    };

    const handleDateClick = (day: number) => {
      const clickedDate = new Date(currentYear, currentMonth, day);

      if (!selectedDate?.from || (selectedDate.from && selectedDate.to)) {
        // Start new selection
        setSelectedDate({ from: clickedDate, to: undefined });
        setSelectedDateProp &&
          setSelectedDateProp({ from: clickedDate, to: undefined });
      } else {
        // Complete the range
        if (clickedDate < selectedDate.from) {
          setSelectedDate({ from: clickedDate, to: selectedDate.from });
          setSelectedDateProp &&
            setSelectedDateProp({ from: clickedDate, to: selectedDate.from });
        } else {
          setSelectedDate({ from: selectedDate.from, to: clickedDate });
          setSelectedDateProp &&
            setSelectedDateProp({ from: selectedDate.from, to: clickedDate });
        }
      }
    };

    const handleDayHover = (day: number) => {
      setHoveredDay(day);
    };

    const handleDayLeave = () => {
      setHoveredDay(null);
    };

    // Calendar grid functions
    const getDaysInMonth = (month: number, year: number) => {
      return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (month: number, year: number) => {
      return new Date(year, month, 1).getDay();
    };

    const isDateInRange = (day: number) => {
      const date = new Date(currentYear, currentMonth, day);

      // Check if date is in selected range
      if (selectedDate?.from) {
        if (!selectedDate.to) {
          if (date.getTime() === selectedDate.from.getTime()) return true;
        } else {
          if (date >= selectedDate.from && date <= selectedDate.to) return true;
        }
      }

      return false;
    };

    const isDateInHoveredRange = (day: number) => {
      if (!hoveredPreset?.from) return false;

      const date = new Date(currentYear, currentMonth, day);

      if (!hoveredPreset.to) {
        return date.getTime() === hoveredPreset.from.getTime();
      }

      return date >= hoveredPreset.from && date <= hoveredPreset.to;
    };

    const isDateRangeStart = (day: number) => {
      if (!selectedDate?.from) return false;
      const date = new Date(currentYear, currentMonth, day);
      return date.getTime() === selectedDate.from.getTime();
    };

    const isDateRangeEnd = (day: number) => {
      if (!selectedDate?.to) return false;
      const date = new Date(currentYear, currentMonth, day);
      return date.getTime() === selectedDate.to.getTime();
    };

    // Check if we're in range selection mode (start date selected but no end date)
    const isInRangeSelectionMode = () => {
      return selectedDate?.from && !selectedDate?.to;
    };

    // Check if current date should show outline during range selection preview
    const shouldShowRangeSelectionOutline = (day: number) => {
      if (!isInRangeSelectionMode() || hoveredDay === null) return false;

      const currentDate = new Date(currentYear, currentMonth, day);
      const startDate = selectedDate!.from!;
      const hoveredDate = new Date(currentYear, currentMonth, hoveredDay);

      // Determine the actual range (start could be before or after hovered date)
      const rangeStart = startDate < hoveredDate ? startDate : hoveredDate;
      const rangeEnd = startDate < hoveredDate ? hoveredDate : startDate;

      // Show outline on all dates within the potential range
      return currentDate >= rangeStart && currentDate <= rangeEnd;
    };

    const renderCalendarGrid = () => {
      const daysInMonth = getDaysInMonth(currentMonth, currentYear);
      const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
      const days: React.ReactElement[] = [];

      // Add empty cells for days before the first day of the month
      for (let i = 0; i < firstDay; i++) {
        days.push(<div key={`empty-${i}`} className="w-8 h-8" />);
      }

      // Add days of the month
      for (let day = 1; day <= daysInMonth; day++) {
        const isToday =
          currentYear === today.getFullYear() &&
          currentMonth === today.getMonth() &&
          day === today.getDate();
        const inRange = isDateInRange(day);
        const inHoveredRange = isDateInHoveredRange(day);
        const isStart = isDateRangeStart(day);
        const isEnd = isDateRangeEnd(day);
        const isHovered = hoveredDay === day;
        const showRangeSelectionOutline = shouldShowRangeSelectionOutline(day);

        // Get styles for all dates including today
        const getDateStyles = () => {
          const baseStyle: React.CSSProperties = {};

          // Apply hover outline to any date OR during range selection mode OR during preset hover
          if (isHovered || showRangeSelectionOutline || inHoveredRange) {
            baseStyle.outline = "2px solid #1c2e45";
            baseStyle.outlineOffset = "1px";
          }

          // Special styling for today
          if (isToday) {
            if (inRange) {
              // Today is selected: background #1c2e45, underline #fff
              return {
                ...baseStyle,
                backgroundColor: "#1c2e45",
                color: "#fff",
                textDecoration: "underline",
                textDecorationColor: "#fff",
              };
            } else {
              // Today is not selected: transparent background, underline #1c2e45
              return {
                ...baseStyle,
                backgroundColor: "transparent",
                textDecoration: "underline",
                textDecorationColor: "#1c2e45",
              };
            }
          }

          return baseStyle;
        };

        days.push(
          <button
            key={day}
            onClick={() => handleDateClick(day)}
            onMouseEnter={() => handleDayHover(day)}
            onMouseLeave={() => handleDayLeave()}
            className={cn(
              "w-8 h-8 text-sm rounded-md transition-colors ml-[2px] bg-transparent text-[var(--default-font-color)]",
              // Base styles
              !inRange && !inHoveredRange && !isToday && "hover:bg-transparent",
              // Selected range styling (highest priority) - but not for today
              inRange && !isToday && "bg-[var(--dark)] text-white",
              (isStart || isEnd) && !isToday && "bg-[var(--dark)] text-white",
            )}
            style={getDateStyles()}
          >
            {day}
          </button>,
        );
      }

      return days;
    };

    return (
      <div className={cn("flex gap-4", className)}>
        {/* Left sidebar with presets */}
        <div className="w-40 border-r border-gray-200 flex flex-col">
          <div className="max-h-[400px] overflow-y-auto space-y-1">
            {presetRanges.map((preset) => {
              const isActive = isPresetActive(preset.range);
              return (
                <button
                  key={preset.label}
                  className={cn(
                    "w-full justify-start !px-[20px] !py-[10px] bg-transparent text-sm text-left border-0 rounded-none !border-b !border-[var(--default-border-color)]",
                    isActive
                      ? "bg-[var(--dark)] text-white"
                      : "text-gray-700 hover:bg-gray-100",
                  )}
                  onClick={() => handlePresetClick(preset.range)}
                  onMouseEnter={() => handlePresetHover(preset.range)}
                  onMouseLeave={handlePresetLeave}
                >
                  {preset.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right side with custom calendar */}
        <div className="flex flex-col overflow-hidden">
          <div className="!py-2.5 !px-5 overflow-hidden">
            {/* Month and Year selectors */}
            <div className="flex items-center gap-2 !mb-4">
              <Button
                variant="ghost"
                onClick={handlePreviousMonth}
                className="h-8 w-8 p-0 hover:bg-gray-100"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Select
                value={currentMonth.toString()}
                onValueChange={(value: string) =>
                  setCurrentMonth(parseInt(value))
                }
              >
                <SelectTrigger className="w-[140px] bg-[var(--base-color)]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month, index) => (
                    <SelectItem key={month} value={index.toString()}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={currentYear.toString()}
                onValueChange={(value: string) =>
                  setCurrentYear(parseInt(value))
                }
              >
                <SelectTrigger className="w-[100px] bg-[var(--base-color)]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                variant="ghost"
                onClick={handleNextMonth}
                className="h-8 w-8 p-0 hover:bg-gray-100"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Calendar grid */}
            <div className="space-y-2">
              {/* Week day headers */}
              <div className="grid grid-cols-7 gap-1 text-xs text-muted-foreground !mb-2">
                <div className="w-8 text-center">Su</div>
                <div className="w-8 text-center">Mo</div>
                <div className="w-8 text-center">Tu</div>
                <div className="w-8 text-center">We</div>
                <div className="w-8 text-center">Th</div>
                <div className="w-8 text-center">Fr</div>
                <div className="w-8 text-center">Sa</div>
              </div>

              {/* Calendar days */}
              <div className="grid grid-cols-7 gap-x-1 gap-y-3">
                {renderCalendarGrid()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

DateRangeCalendar.displayName = "DateRangeCalendar";

export default DateRangeCalendar;
