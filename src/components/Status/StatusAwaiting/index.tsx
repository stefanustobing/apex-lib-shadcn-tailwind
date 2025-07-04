import { ReactElement, ReactNode } from "react";
import { cn } from "../../../utility/utils";
import Headline from "../../Typography/Headline";
import Paragraph from "../../Typography/Paragraph";
import FlexContainer from "../../Container/FlexContainer";

type StatusLeaseProps = {
  counts?: ReactNode;
  awaitingType?: ReactNode;
  statusMessage?: ReactNode;
  className?: string;
};

const StatusAwaiting = ({
  counts,
  awaitingType,
  statusMessage,
  className,
}: StatusLeaseProps): ReactElement => {
  return (
    <div
      className={cn(
        "!p-[1.337rem] rounded-[0.334rem] hover:bg-[var(--base-color)] w-full",
        className,
      )}
    >
      <FlexContainer className="items-baseline gap-2 !mb-[0.5rem]">
        <Headline>{counts}</Headline>
        <Paragraph weight="light" className="italic indent-6 !-ml-6">
          {awaitingType}
        </Paragraph>
      </FlexContainer>
      <Paragraph>{statusMessage}</Paragraph>
    </div>
  );
};

export default StatusAwaiting;
