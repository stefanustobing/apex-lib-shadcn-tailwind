import { ReactElement, ReactNode } from "react";

import FlexContainer from "../Container/FlexContainer";
import PageHeader from "../PageHeader";

type PageProps = {
  header: ReactElement<typeof PageHeader>;
  children: ReactNode;
};

const Page = ({ header, children }: PageProps): ReactElement => {
  return (
    <FlexContainer flexDirection="flexCol">
      <div className="!mb-[1.337rem] w-full">{header}</div>
      <div className="w-full">{children}</div>
    </FlexContainer>
  );
};

export default Page;
