import { ReactElement, ReactNode } from "react";

import { cn } from "../../utility/utils";
import { Avatar, AvatarImage, AvatarFallback } from "../Avatar";
import FlexContainer from "../Container/FlexContainer";
import Paragraph from "../Typography/Paragraph";

type avatarTextInlineProps = {
  avatar: { type: "image" | "span"; src: ReactNode | string };
  text: ReactNode;
  className?: string;
};

const AvatarTextInline = ({
  avatar,
  text,
  className,
}: avatarTextInlineProps): ReactElement => {
  return (
    <FlexContainer className={cn("gap-1", className)}>
      <Avatar size="s25px">
        {avatar?.type === "image" && typeof avatar.src === "string" ? (
          <AvatarImage src={avatar.src} alt="User Avatar" />
        ) : (
          <AvatarFallback>{avatar.src}</AvatarFallback>
        )}
      </Avatar>
      <Paragraph>{text}</Paragraph>
    </FlexContainer>
  );
};

export default AvatarTextInline;
