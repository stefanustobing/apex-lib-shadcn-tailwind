import {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent,
  ReactNode,
} from "react";
import { Input } from "../Input";
import { XCircle } from "react-feather";
import ScrollContainer from "../ScrollContainer";

interface Options {
  text: string;
  selected?: boolean;
}

interface SearchableDropdownProps {
  data: Options[];
  multiselect?: boolean;
  placeholder?: ReactNode;
  onSelect?: (item: string) => void;
  onDeselect?: (item: string) => void;
}

export default function SearchFilter({
  data,
  placeholder = "Search & Select...",
  onSelect,
  onDeselect,
  multiselect = false,
}: SearchableDropdownProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState<Options[]>(data);
  const [selectedIndex, setSelectedIndex] = useState<number[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  console.log(listRef.current);

  useEffect(() => {
    const initialSelectedOption: number[] = [];
    if (multiselect) {
      data.forEach((item, index) => {
        if (item.selected) {
          initialSelectedOption.push(index);
        }
      });
    } else {
      const foundIndex = data.findIndex((item) => item.selected);
      if (foundIndex !== -1) {
        initialSelectedOption.push(foundIndex);
      }
    }

    if (initialSelectedOption.length > 0) {
      setSelectedIndex((prev) => [...prev, ...initialSelectedOption]);
    }
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredItems(data);
    } else {
      const filtered = data.filter((item) =>
        item.text.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setFilteredItems(filtered);
    }
  }, [searchTerm, data]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // Reset focus but keep selection
    setFocusedIndex(null);
  };

  const handleItemClick = (item: Options, index: number) => {
    if (onSelect && !selectedIndex.includes(index)) {
      onSelect(item.text);
    }
    if (multiselect) {
      !selectedIndex.includes(index) &&
        setSelectedIndex((prev) => [...prev, index]);
    } else {
      !selectedIndex.includes(index) && setSelectedIndex([index]);
    }
    /*setFocusedIndex(index);*/
    /*setSearchTerm(item.name);*/
  };

  const handleItemMouseEnter = (index: number) => {
    setFocusedIndex(index);
  };

  const handleItemMouseLeave = () => {
    setFocusedIndex(null);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((prev) =>
        prev === null || prev >= filteredItems.length - 1 ? 0 : prev + 1,
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((prev) =>
        prev === null || prev <= 0 ? filteredItems.length - 1 : prev - 1,
      );
    } else if (e.key === "Enter" && focusedIndex !== null) {
      const selectedItem = filteredItems[focusedIndex];
      if (selectedItem) {
        handleItemClick(selectedItem, focusedIndex);
      }
    }
  };

  return (
    <div
      className="relative w-full"
      role="combobox"
      aria-expanded="true"
      aria-haspopup="listbox"
    >
      <div className="px-0 py-4">
        <Input
          type="text"
          placeholder={
            typeof placeholder === "string" ? placeholder : String(placeholder)
          }
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          aria-autocomplete="list"
          aria-controls="search-listbox"
          className="w-full focus-visible:ring-0 border-none shadow-none border-gray-200 rounded-none pl-[2.2rem] py-2 pr-[1rem] text-[var(--gray)] placeholder:text-[var(--mute-color)] md:text-base"
        />
      </div>

      <ScrollContainer
        id="search-listbox"
        ref={listRef}
        role="listbox"
        className="border-t border-[var(--default-border-color)] max-h-60"
      >
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => {
            const isSelected = selectedIndex.includes(index);
            const isFocused = index === focusedIndex;

            return (
              <div
                key={index}
                role="option"
                id={`option-${index}`}
                aria-selected={isSelected ? "true" : "false"}
                aria-current={isFocused ? "true" : "false"}
                data-selected={isSelected ? "true" : "false"}
                className={`!px-[30px] !py-[12px] cursor-pointer ${isFocused ? "bg-[var(--base-color)] [&>*]:text-[var(--sub-primary-color)]" : ""} ${isSelected ? "bg-[var(--base-color)] [&>*]:text-[var(--sub-primary-color)]" : ""} flex justify-between items-center font-poppins`}
                onClick={() => handleItemClick(item, index)}
                onMouseEnter={() => handleItemMouseEnter(index)}
                onMouseLeave={handleItemMouseLeave}
              >
                <span className="text-gray">{item.text}</span>
                {isSelected && (
                  <XCircle
                    onClick={(e) => {
                      e.stopPropagation();
                      if (multiselect) {
                        setSelectedIndex((prev) =>
                          prev.filter((i) => i !== index),
                        );
                      } else {
                        setSelectedIndex([]);
                      }
                      if (onDeselect) {
                        onDeselect(item.text);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setSelectedIndex([]);
                      }
                    }}
                    tabIndex={0}
                  />
                )}
              </div>
            );
          })
        ) : (
          <div className="px-0 py-2 text-gray-500" role="status">
            Nothing found on your search
          </div>
        )}
      </ScrollContainer>
    </div>
  );
}
