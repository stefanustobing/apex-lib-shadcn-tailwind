import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateClassName = (
  i: number,
  total: number,
  cols: number,
): string => {
  if (cols === 3) {
    const rows = Math.ceil(total / cols); // Total rows
    const currentRow = Math.ceil((i + 1) / cols); // Current row number

    // Apply "border-b border-r" for first and second items in each row (except last row)
    if ([1, 2].includes((i % cols) + 1) && currentRow < rows)
      return "border-b border-r border-[var(--default-border-color)]";

    // Apply only "border-b" for every third item in a row (except last row)
    if ((i % cols) + 1 === 3 && currentRow < rows)
      return "border-b border-[var(--default-border-color)]";

    // Apply only "border-r" for first two items in last row
    if ([1, 2].includes((i % cols) + 1) && currentRow === rows)
      return "border-r border-[var(--default-border-color)]";

    return "";
  }
  if (cols === 2) {
    const rows = Math.ceil(total / 2); // Total rows (since we have 2 columns)
    const currentRow = Math.ceil((i + 1) / 2); // Current row number

    // Apply "border-b border-r" for first item in a row (except last row)
    if (i % 2 === 0 && currentRow < rows)
      return "border-b border-r border-[var(--default-border-color)]";

    // Apply only "border-b" for second item in a row (except last row)
    if (i % 2 === 1 && currentRow < rows)
      return "border-b border-[var(--default-border-color)]";

    // Apply only "border-r" for first item in last row
    if (i % 2 === 0 && currentRow === rows)
      return "border-r border-[var(--default-border-color)]";

    return "";
  }
  return "";
};

export const getCSSVar = (variable: string) => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
};
