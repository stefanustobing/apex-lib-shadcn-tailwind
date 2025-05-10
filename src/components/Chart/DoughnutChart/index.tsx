import { ReactElement } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import BulletPoint from "../../BulletPoint";
import { getCSSVar } from "../../../utility/utils";

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
    <div className="grid grid-cols-1 xl:grid-cols-2">
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
        className="!w-full !h-full mt-4 px-3"
      />
      <div className="mt-4 px-3 flex flex-col justify-center">
        {labels.map((label, index) => (
          <div
            className={`py-2 flex items-center gap-2 text-sm font-poppins font-light`}
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
