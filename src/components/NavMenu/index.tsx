import { ReactElement, ReactNode, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "../NavigationMenu";

type navItem = {
  label: ReactNode;
  onClick?: () => void;
};

type navMenuProps = {
  navItems: navItem[];
  options?: ReactNode[];
  defaultSelectedItem?: number;
  className?: string;
  justify?: "start" | "center" | "end";
};

const NavMenu = ({
  navItems,
  options,
  defaultSelectedItem = 0,
  className,
  justify = "start",
}: navMenuProps): ReactElement => {
  const [activeItem, setActiveItem] = useState(defaultSelectedItem);
  const justifyClasses = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  };
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList className={justifyClasses[justify]}>
        {navItems.map((item, index) => (
          <NavigationMenuItem
            key={index}
            onClick={() => {
              setActiveItem(index);
              if (item.onClick) {
                item.onClick();
              }
            }}
            className={
              activeItem === index ? "text-[var(--sub-primary-color)]" : ""
            }
          >
            {item.label}
          </NavigationMenuItem>
        ))}
        {options &&
          options.map((option, index) => <div key={index}>{option}</div>)}
        {/*<ActionBtnDropdown
          trigger={<IconFocusRingButton>{<SortIcon />}</IconFocusRingButton>}
          items={["Add User", "Edit User"]}
        />*/}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
