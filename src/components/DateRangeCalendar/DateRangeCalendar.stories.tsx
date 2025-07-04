import { Meta, StoryObj } from "@storybook/react";
import DateRangeCalendar from ".";

const meta: Meta = {
  title: "Mycomponent/DateRangeCalendar",
  component: DateRangeCalendar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default appearance of the DateRangeCalendar with no props. It will select today's date as selected date and It will render presetRangesLabels in english.
 */

export const Default: Story = {};

/**
 * We can provide props for presetRangesLabels as an array of strings e.g. from useTranslation hook, and we can also set the selected date by providing and object with keys `from` and `to` with Date values.
 *
 * This component will expose a method to parent component to get its internal state like selected date, and it will also expose a method to set the selected date and reset date through `useImperativeHandle` hook. The only thing we need to do is to pass the `ref` prop from parent (`useRef`) hook to the component. And  in the parent component we can access the methods using `ref.current.getValue()`, `ref.current.setValue()` and `ref.current.clear()`. The `setValue` method will accept an argument of object with keys `from` and `to` with Date values (`new Date()`), and the `clear` and `getValue` method do not need argument. The type for the `ref` prop is `DateRangeCalendarRef`, which is exported from the component file.
 */
export const WithProps: Story = {
  parameters: {
    docs: {
      source: {
        code: `
            <DateRangeCalendar
              presetRangesLabels={[
                'I dag',
                'I går',
                'Denne uken',
                'Forrige uke',
                'Denne måndeden',
                'Forrige måned',
                'I år',
                'I fjor'
              ]}
              selectedDateProp={{
                from: new Date(2025, 1, 2),
                to: new Date(2025, 1, 5)
              }}
            />
                `,
        format: true,
      },
    },
  },
  args: {
    presetRangesLabels: [
      "I dag",
      "I går",
      "Denne uken",
      "Forrige uke",
      "Denne måndeden",
      "Forrige måned",
      "I år",
      "I fjor",
    ],
    selectedDateProp: {
      from: new Date(2025, 1, 2),
      to: new Date(2025, 1, 5),
    },
  },
};
