import { ReactElement, ReactNode } from "react";

import { cn } from "../../../utility/utils";
import JustifyContainer from "../../Container/JustifyContainer";
import Headline from "../../Typography/Headline";
import Paragraph from "../../Typography/Paragraph";

type statusFailedProps = {
  failedType: ReactNode;
  counts: ReactNode;
  className?: string;
};

const StatusFailed = ({
  failedType,
  counts,
  className,
}: statusFailedProps): ReactElement => {
  return (
    <JustifyContainer
      className={cn(
        "bg-[rgba(219,112,15,0.1)] hover:bg-[rgba(219,112,15,0.3)] !p-[20px]",
        className,
      )}
      justify="between"
    >
      <Paragraph>{failedType}</Paragraph>
      <Headline variant="warning">{counts}</Headline>
    </JustifyContainer>
  );
};

export default StatusFailed;
