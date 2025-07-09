import {
  ReactElement,
  ReactNode,
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  UIEvent,
} from "react";
import { XCircle } from "react-feather";

import FilterButton from "../../Btn/FilterButton";
import ScrollContainer from "../../Container/ScrollContainer";
import { DropdownMenuItem } from "../../Dropdown";
import { Input } from "../../Input";
import LoadingDots from "../../Loading/LoadingDots";
import Dropdown from "../Dropdown";

type selectFilterDropdownProps = {
  btnLabel: ReactNode;
  btnVariant?: "primary" | "default";
  searchInputPlaceholder?: string;
  searchNotFoundText?: string;
  onOpenChange?: () => void;
  data?: {
    title: ReactNode;
    id?: string;
    onClick?: () => void;
    selected?: boolean;
    onDeselect?: () => void;
  }[];
  open?: boolean;
  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onScroll?: (e: UIEvent) => void;
  isLoading?: boolean;
};

const SelectFilterDropdown = ({
  btnLabel,
  btnVariant,
  searchInputPlaceholder = "Search",
  searchNotFoundText = "Not Found",
  onOpenChange,
  data,
  open,
  onInputChange,
  onScroll,
  isLoading = false,
}: selectFilterDropdownProps): ReactElement => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });
  return (
    <Dropdown
      trigger={
        <FilterButton
          className="data-[state='open']:text-[var(--sub-primary-color)]"
          variant={btnVariant}
        >
          {btnLabel}
        </FilterButton>
      }
      asChild
      onOpenChange={onOpenChange}
      open={open}
    >
      <div className="!px-0 !py-4 !border-b-1 !border-[var(--default-border-color)] flex items-center w-[311px]">
        <Input
          ref={inputRef}
          type="text"
          placeholder={searchInputPlaceholder}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            onInputChange?.(e);
          }}
          onKeyDown={(e) => {
            e.stopPropagation();
          }}
          aria-autocomplete="list"
          aria-controls="search-listbox"
          className="w-full focus-visible:ring-0 border-none shadow-none rounded-none !pl-[2.2rem] !py-2 !pr-[1rem] text-[var(--gray)] placeholder:text-[var(--mute-color)] md:text-base"
        />
        {searchTerm && (
          <button
            type="button"
            className="!mr-5 inline-flex [&_svg]:size-5 [&_svg]:cursor-pointer bg-transparent"
            onClick={() => {
              setSearchTerm("");
              onInputChange?.({
                target: { value: "" },
              } as ChangeEvent<HTMLInputElement>);
            }}
            aria-label="Clear search"
          >
            <XCircle />
          </button>
        )}
      </div>

      {(() => {
        if (isLoading) {
          return (
            <div className="!my-3">
              <LoadingDots />
            </div>
          );
        } else if (data && data.length > 0 && data.length < 7) {
          return (
            <div>
              {data.map((item, index) => (
                <DropdownMenuItem
                  variant={item.selected ? "selected" : "default"}
                  key={index}
                  id={item.id}
                  onClick={item.onClick}
                  onDeselect={item.onDeselect}
                >
                  <span>{item.title}</span>
                </DropdownMenuItem>
              ))}
            </div>
          );
        } else if (data && data.length >= 7) {
          return (
            <ScrollContainer className="max-h-[280px]" onScroll={onScroll}>
              {data.map((item, index) => (
                <DropdownMenuItem
                  variant={item.selected ? "selected" : "default"}
                  key={index}
                  id={item.id}
                  onClick={item.onClick}
                  onDeselect={item.onDeselect}
                >
                  <span>{item.title}</span>
                </DropdownMenuItem>
              ))}
            </ScrollContainer>
          );
        } else {
          return (
            <p className="text-gray-500 text-center py-4">
              {searchNotFoundText}
            </p>
          );
        }
      })()}

      {/*<ScrollContainer className="w-[311px] max-h-[280px]" onScroll={onScroll}>
        {(() => {
          if (isLoading) {
            return (
              <div className="!my-3">
                <LoadingDots />
              </div>
            );
          } else if (data && data.length > 0) {
            return data.map((item, index) => (
              <DropdownMenuItem
                variant={item.selected ? "selected" : "default"}
                key={index}
                id={item.id}
                onClick={item.onClick}
                onDeselect={item.onDeselect}
              >
                <span>{item.title}</span>
              </DropdownMenuItem>
            ));
          } else {
            return (
              <p className="text-gray-500 text-center py-4">
                {searchNotFoundText}
              </p>
            );
          }
        })()}
      </ScrollContainer>*/}
    </Dropdown>
  );
};

export default SelectFilterDropdown;
