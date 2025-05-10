"use client";

import * as React from "react";
import { XCircle } from "react-feather";
import { cn } from "../../utility/utils";

/* ---------------------------------- Types --------------------------------- */
export interface SearchFilterOption {
  value: string;
  text: string;
  selected?: boolean;
}

/* -------------------------------- Context --------------------------------- */
type SearchFilterContextValue = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  selectedValues: Set<string>;
  setSelectedValues: React.Dispatch<React.SetStateAction<Set<string>>>;
  focusedValue: string | null;
  setFocusedValue: React.Dispatch<React.SetStateAction<string | null>>;
  multiselect: boolean;
  onSelect?: (value: string, text: string) => void;
  onDeselect?: (value: string, text: string) => void;
  registerItem: (value: string) => void;
  unregisterItem: (value: string) => void;
  registerDefaultSelected: (value: string) => void;
  itemsRef: React.MutableRefObject<Map<string, HTMLDivElement>>;
};

const SearchFilterContext = React.createContext<
  SearchFilterContextValue | undefined
>(undefined);

function useSearchFilterContext() {
  const context = React.useContext(SearchFilterContext);
  if (!context) {
    throw new Error(
      "useSearchFilterContext must be used within a SearchFilterProvider",
    );
  }
  return context;
}

/* ----------------------------- Root Component ----------------------------- */
interface SearchFilterProps extends React.HTMLAttributes<HTMLDivElement> {
  multiselect?: boolean;
  onSelect?: (value: string, text: string) => void;
  onDeselect?: (value: string, text: string) => void;
  children?: React.ReactNode;
}

const SearchFilter = React.forwardRef<HTMLDivElement, SearchFilterProps>(
  (
    {
      multiselect = false,
      onSelect,
      onDeselect,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [selectedValues, setSelectedValues] = React.useState<Set<string>>(
      new Set(),
    );
    const [focusedValue, setFocusedValue] = React.useState<string | null>(null);
    const itemsRef = React.useRef<Map<string, HTMLDivElement>>(new Map());
    const [itemValues, setItemValues] = React.useState<string[]>([]);
    const firstSelectedItemRef = React.useRef<string | null>(null);
    const initializedRef = React.useRef(false);

    const registerItem = React.useCallback((value: string) => {
      setItemValues((prev) => [...prev, value]);
    }, []);

    const unregisterItem = React.useCallback((value: string) => {
      setItemValues((prev) => prev.filter((v) => v !== value));
    }, []);

    // Function to register a default selected item
    const registerDefaultSelected = React.useCallback(
      (value: string) => {
        if (!multiselect && firstSelectedItemRef.current === null) {
          firstSelectedItemRef.current = value;
        }
      },
      [multiselect],
    );

    // Initialize selected values once all items are registered
    React.useEffect(() => {
      if (!initializedRef.current && firstSelectedItemRef.current !== null) {
        if (!multiselect) {
          setSelectedValues(new Set([firstSelectedItemRef.current]));
        }
        initializedRef.current = true;
      }
    }, [multiselect, itemValues]);

    const contextValue = React.useMemo(
      () => ({
        searchTerm,
        setSearchTerm,
        selectedValues,
        setSelectedValues,
        focusedValue,
        setFocusedValue,
        multiselect,
        onSelect,
        onDeselect,
        registerItem,
        unregisterItem,
        registerDefaultSelected,
        itemsRef,
      }),
      [
        searchTerm,
        selectedValues,
        focusedValue,
        multiselect,
        onSelect,
        onDeselect,
        registerItem,
        unregisterItem,
        registerDefaultSelected,
      ],
    );

    return (
      <SearchFilterContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn("relative w-full", className)}
          role="combobox"
          aria-expanded="true"
          aria-haspopup="listbox"
          {...props}
        >
          {children}
        </div>
      </SearchFilterContext.Provider>
    );
  },
);
SearchFilter.displayName = "SearchFilter";

/* ---------------------------------- Input --------------------------------- */
interface SearchFilterInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

const SearchFilterInput = React.forwardRef<
  HTMLInputElement,
  SearchFilterInputProps
>(({ placeholder = "Search & Select...", className, ...props }, ref) => {
  const { searchTerm, setSearchTerm, setFocusedValue, itemsRef } =
    useSearchFilterContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // Reset focus but keep selection
    setFocusedValue(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const visibleItems = Array.from(itemsRef.current.entries())
      .filter(([_, element]) => !element.hidden)
      .map(([value]) => value);

    if (visibleItems.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedValue((current) => {
        const currentIndex = current ? visibleItems.indexOf(current) : -1;
        const nextIndex =
          currentIndex >= visibleItems.length - 1 ? 0 : currentIndex + 1;
        return visibleItems[nextIndex];
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedValue((current) => {
        const currentIndex = current ? visibleItems.indexOf(current) : 0;
        const prevIndex =
          currentIndex <= 0 ? visibleItems.length - 1 : currentIndex - 1;
        return visibleItems[prevIndex];
      });
    } else if (e.key === "Enter" && e.currentTarget.value === "") {
      e.preventDefault();
      const focusedElement = document.querySelector(
        '[data-focused="true"]',
      ) as HTMLDivElement;
      if (focusedElement) {
        focusedElement.click();
      }
    }
  };

  return (
    <div className="px-0 py-4">
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        aria-autocomplete="list"
        aria-controls="search-listbox"
        className={cn(
          "w-full focus-visible:ring-0 border-none shadow-none border-gray-200 rounded-none pl-[2.2rem] py-2 pr-[1rem] text-[var(--gray)] placeholder:text-[var(--mute-color)] md:text-base",
          className,
        )}
        {...props}
      />
    </div>
  );
});
SearchFilterInput.displayName = "SearchFilterInput";

/* ---------------------------------- List ---------------------------------- */
interface SearchFilterListProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const SearchFilterList = React.forwardRef<
  HTMLDivElement,
  SearchFilterListProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      id="search-listbox"
      role="listbox"
      className={cn(
        "border-t border-[var(--default-border-color)] max-h-60 overflow-auto",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});
SearchFilterList.displayName = "SearchFilterList";

/* ---------------------------------- Item ---------------------------------- */
interface SearchFilterItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  text: string;
  defaultSelected?: boolean;
}

const SearchFilterItem = React.forwardRef<
  HTMLDivElement,
  SearchFilterItemProps
>(({ value, text, defaultSelected = false, className, ...props }, ref) => {
  const {
    searchTerm,
    selectedValues,
    setSelectedValues,
    focusedValue,
    setFocusedValue,
    multiselect,
    onSelect,
    onDeselect,
    registerItem,
    unregisterItem,
    registerDefaultSelected,
    itemsRef,
  } = useSearchFilterContext();

  const innerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (innerRef.current) {
      itemsRef.current.set(value, innerRef.current);
    }

    registerItem(value);

    return () => {
      itemsRef.current.delete(value);
      unregisterItem(value);
    };
  }, [value, registerItem, unregisterItem, itemsRef]);

  // Register this item as default selected if needed
  React.useEffect(() => {
    if (defaultSelected) {
      registerDefaultSelected(value);

      if (multiselect) {
        setSelectedValues((prev) => new Set(prev).add(value));
      }
    }
  }, [
    defaultSelected,
    value,
    registerDefaultSelected,
    multiselect,
    setSelectedValues,
  ]);

  const isSelected = selectedValues.has(value);
  const isFocused = focusedValue === value;

  // Check if this item should be visible based on search term
  const isVisible =
    searchTerm === "" || text.toLowerCase().includes(searchTerm.toLowerCase());

  if (!isVisible) {
    return null;
  }

  const handleItemClick = () => {
    if (!isSelected && onSelect) {
      onSelect(value, text);
    }

    if (multiselect) {
      if (!isSelected) {
        setSelectedValues((prev) => new Set(prev).add(value));
      }
    } else {
      if (!isSelected) {
        setSelectedValues(new Set([value]));
      }
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();

    setSelectedValues((prev) => {
      const newSet = new Set(prev);
      newSet.delete(value);
      return newSet;
    });

    if (onDeselect) {
      onDeselect(value, text);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      setSelectedValues((prev) => {
        const newSet = new Set(prev);
        newSet.delete(value);
        return newSet;
      });
    }
  };

  return (
    <div
      ref={innerRef}
      role="option"
      id={`option-${value}`}
      aria-selected={isSelected ? "true" : "false"}
      aria-current={isFocused ? "true" : "false"}
      data-selected={isSelected ? "true" : "false"}
      data-focused={isFocused ? "true" : "false"}
      className={cn(
        "px-[30px] py-[12px] cursor-pointer flex justify-between items-center font-poppins",
        isFocused &&
          "bg-[var(--base-color)] [&>*]:text-[var(--sub-primary-color)]",
        isSelected &&
          "bg-[var(--base-color)] [&>*]:text-[var(--sub-primary-color)]",
        className,
      )}
      onClick={handleItemClick}
      onMouseEnter={() => setFocusedValue(value)}
      onMouseLeave={() => setFocusedValue(null)}
      {...props}
    >
      <span className="text-gray">{text}</span>
      {isSelected && (
        <XCircle
          onClick={handleRemove}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        />
      )}
    </div>
  );
});
SearchFilterItem.displayName = "SearchFilterItem";

/* ---------------------------------- Empty --------------------------------- */
interface SearchFilterEmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const SearchFilterEmpty = React.forwardRef<
  HTMLDivElement,
  SearchFilterEmptyProps
>(({ className, children, ...props }, ref) => {
  const { searchTerm } = useSearchFilterContext();
  const [hasVisibleItems, setHasVisibleItems] = React.useState(true);

  // This effect will run on the client side to check if there are any visible items
  React.useEffect(() => {
    const visibleItems = document.querySelectorAll(
      '[role="option"]:not([hidden])',
    );
    setHasVisibleItems(visibleItems.length > 0);
  }, [searchTerm]);

  if (hasVisibleItems) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn("px-0 py-2 text-gray-500", className)}
      role="status"
      {...props}
    >
      {children || "Nothing found on your search"}
    </div>
  );
});
SearchFilterEmpty.displayName = "SearchFilterEmpty";

export {
  SearchFilter,
  SearchFilterInput,
  SearchFilterList,
  SearchFilterItem,
  SearchFilterEmpty,
  useSearchFilterContext,
};
