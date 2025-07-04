import { FunctionComponent, ReactElement, ReactNode } from "react";
import useMediaQuery from "../../utility/customHook/useMediaQuery";
import { generateClassName } from "../../utility/utils";

export type MetricPanelGridProps = {
  contents: ReactNode[];
};

const MetricPanelGrid: FunctionComponent<MetricPanelGridProps> = ({
  contents,
}): ReactElement => {
  const min768 = useMediaQuery("(min-width: 768px)");
  const total = contents.length;
  const col = min768 ? 3 : 2;

  return (
    <div className="flex flex-wrap">
      {contents.map((content, i) => (
        <div
          key={i}
          className={`w-1/2 md:w-1/3 !py-[calc(0.75rem-2px)] ${generateClassName(i, total, col)}`}
        >
          {content}
        </div>
      ))}
    </div>
  );
};

export default MetricPanelGrid;
