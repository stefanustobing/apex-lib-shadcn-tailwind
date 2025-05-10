import { ReactElement, Fragment } from "react";
import BoxGrid from "../BoxGrid";
import ChkboxAndLabel, { ChkboxAndLabelProps } from "../ChkboxAndLabel";

export type ChkboxFilterProps = {
  numOfGrids: number;
  data: ChkboxAndLabelProps[];
};

const ChkboxFilter = ({
  numOfGrids,
  data,
}: ChkboxFilterProps): ReactElement => {
  /*  if (
    !Array.isArray(data) ||
    data.some((item) => item.type !== ChkboxAndLabel) ||
    data.length === 0
  ) {
    throw new Error(
      "ChkboxFilter component only accepts props data with type an array of ChkboxAndLabel JSX",
    );
  }*/
  return (
    <BoxGrid numOfGrids={numOfGrids}>
      {data.map(({ children, ...props }, index) => (
        <Fragment key={index}>
          {/*          {
            <item.component checked={item.chkData.checked}>
              {item.chkData.children}
            </item.component>
          }*/}
          {/*{item}*/}
          <ChkboxAndLabel {...props}>{children}</ChkboxAndLabel>
        </Fragment>
      ))}
    </BoxGrid>
  );
};

export default ChkboxFilter;
