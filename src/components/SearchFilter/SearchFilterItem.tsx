import { ReactElement, ComponentProps } from "react";

import { cn } from "../../utility/utils";

type SearchFilterItemProps = {
  index?: number;
  isSelected?: boolean;
  isFocused?: boolean;
} & ComponentProps<"div">;

const SearchFilterItem = ({
  className,
  index,
  isSelected,
  isFocused,
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...props
}: SearchFilterItemProps): ReactElement => {
  return (
    <div
      className={cn(
        "px-[30px] py-[12px] cursor-pointer flex justify-between items-center font-poppins",
        className,
      )}
      role="option"
      id={`option-${index}`}
      aria-selected={isSelected ? "true" : "false"}
      aria-current={isFocused ? "true" : "false"}
      data-selected={isSelected ? "true" : "false"}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.(e as any);
        }
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    />
  );
};

export default SearchFilterItem;
