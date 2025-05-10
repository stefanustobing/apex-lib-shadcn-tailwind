import { FunctionComponent, ReactElement, ComponentProps } from "react";

const ActionBtnItem: FunctionComponent<ComponentProps<"div">> = ({
  children,
  ...props
}: ComponentProps<"div">): ReactElement => {
  return (
    <div
      role="button"
      className="cursor-pointer px-[calc(2rem-2px)] py-3 rounded-none w-full hover:bg-[var(--sub-primary-color)] text-[var(--gray)] font-poppins font-normal "
      {...props}
    >
      {children}
    </div>
  );
};

export default ActionBtnItem;
