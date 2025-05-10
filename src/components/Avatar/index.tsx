import { FunctionComponent, ReactNode } from "react";
import {
  Avatar as AvatarUI,
  AvatarImage as AvatarImageUI,
  AvatarFallback as AvatarFallbackUI,
} from "../../../@/components/ui/avatar";

type AvatarProps = {
  imageUrl?: string;
  shape?: "circle" | "square";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
};

const Avatar: FunctionComponent = (props): ReactNode => {
  return (
    <AvatarUI>
      <AvatarImageUI src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallbackUI>CN</AvatarFallbackUI>
    </AvatarUI>
  );
};
export default Avatar;
