import { ReactElement, ReactNode } from "react";

type PageHeaderProps = {
  leftContent: ReactNode;
  rightContent: ReactNode;
};

const PageHeader = ({
  leftContent,
  rightContent,
}: PageHeaderProps): ReactElement => {
  return (
    <div className="grid grid-cols-12 w-full">
      <div className="col-span-4 px-3">{leftContent}</div>
      <div className="col-span-8 px-3 flex justify-end items-center [&>*]:ml-[10px]">
        {rightContent}
      </div>
    </div>
  );
};

export default PageHeader;
