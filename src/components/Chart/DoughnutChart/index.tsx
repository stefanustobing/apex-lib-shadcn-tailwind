import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ReactElement } from "react";
import { Doughnut } from "react-chartjs-2";

import { getCSSVar } from "../../../utility/utils";
import BulletPoint from "../../BulletPoint";

ChartJS.register(ArcElement, Tooltip, Legend);

type backgroundColor =
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
  | "brown";

type DoughnutChartProps = {
  labels: string[];
  chartData: number[];
  backgroundColors: backgroundColor[];
};

const DoughnutChart = ({
  labels,
  chartData,
  backgroundColors,
}: DoughnutChartProps): ReactElement => {
  const chartProperties = {
    labels,
    datasets: [
      {
        data: chartData,
        backgroundColor: backgroundColors.map((color) =>
          getCSSVar(`--${color}`),
        ),
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-row flex-wrap ">
      <div className="w-full 2xl:basis-1/2 !px-[calc(1.5rem*0.5)] !mt-[1.5rem]">
        <Doughnut
          data={chartProperties}
          options={{
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                callbacks: {
                  label: (tooltipItem) => {
                    return `${tooltipItem.label}: ${tooltipItem.raw}`;
                  },
                  title: () => "",
                },
              },
            },
          }}
          className="!w-full !h-full"
        />
      </div>
      <div className="w-full 2xl:basis-1/2 flex flex-col justify-center !px-[calc(1.5rem*0.5)] !mt-[1.5rem]">
        {labels.map((label, index) => (
          <div
            key={index}
            className={`!py-2 flex items-center gap-2 text-sm font-poppins font-light`}
            style={{ color: `var(--${backgroundColors[index]})` }}
          >
            <BulletPoint variant={backgroundColors[index]} />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoughnutChart;
