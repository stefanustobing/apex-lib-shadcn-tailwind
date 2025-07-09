import { ReactElement, ReactNode } from "react";

import Counter from "../../Counter";
import TileCard from "../TileCard";

type tileCounterCard = {
  avatar: ReactNode;
  textTop: ReactNode;
  textBottom: ReactNode;
  className: string;
};

const TileCounterCard = ({
  avatar,
  textTop,
  textBottom,
  className,
}: tileCounterCard): ReactElement => {
  return (
    <TileCard className={className}>
      <Counter avatar={avatar} textTop={textTop} textBottom={textBottom} />
    </TileCard>
  );
};

export default TileCounterCard;
