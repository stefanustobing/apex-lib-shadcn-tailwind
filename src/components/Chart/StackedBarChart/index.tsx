import { ReactElement, ReactNode } from "react";
/*import ListPoint from "../../ListPoint";*/

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
/*import { getCSSVar } from "../../../utility/utils";*/
import FlexContainer from "../../Container/FlexContainer";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  plugins: {
    legend: { display: false },
    title: {
      display: false,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

/*type backgroundColor =
  | "primary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "secondary"
  | "tertiary"
  | "green"
  | "teal"
  | "yellow"
  | "purple"
  | "violate"
  | "blue"
  | "cyan"
  | "skyblue"
  | "brown";*/

type dataSet = {
  label: string;
  data: number[];
  backgroundColor: string;
};

type stackedBarChartProps = {
  labels: ReactNode[];
  chartData: dataSet[];
};

const StackedBarChart = ({
  labels,
  chartData,
}: stackedBarChartProps): ReactElement => {
  const chartProperties = {
    labels,
    datasets: chartData.map((data) => ({
      label: data.label,
      data: data.data,
      backgroundColor: data.backgroundColor,
    })),
  };
  console.log(chartProperties);
  return (
    <FlexContainer flexDirection="flexCol" className="gap-10">
      <Bar
        options={options}
        data={chartProperties}
        className="!w-full !h-full"
      />
      {/*<FlexContainer flexDirection="flexRow" className="justify-center gap-3">
        {chartData.map((data) => (
          <ListPoint variant={data.backgroundColor} className="w-auto">
            {data.label}
          </ListPoint>
        ))}
      </FlexContainer>*/}
    </FlexContainer>
  );
};

export default StackedBarChart;
