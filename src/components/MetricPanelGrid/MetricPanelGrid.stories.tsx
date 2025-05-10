import { Meta, StoryObj } from "@storybook/react";
import MetricPanelGrid from ".";

const meta: Meta<typeof MetricPanelGrid> = {
  title: "Mycomponent/MetricPanelGrid",
  component: MetricPanelGrid,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  /*args: {
        data: [
            {value: 0, text: "active"},
            {value: 50, text: "In progress"},
            {value: 10, text: "interested"},
            {value: 30, text: "upcoming lease"},
            {value: 50, text: "going"},
            {value: 0, text: "bla-bla"},
            {value: 2, text: "total-sold"}
        ],
    }*/
  args: {
    contents: [
      <>
        <div className="flex flex-col">
          <div className="text-center font-poppins font-medium text-lg text-gray">
            {0}
          </div>
          <div className="text-center font-poppins font-normal text-xs text-gray capitalize">
            in progress
          </div>
        </div>
      </>,
      <>
        <div className="flex flex-col">
          <div className="text-center font-poppins font-medium text-lg text-gray">
            {0}
          </div>
          <div className="text-center font-poppins font-normal text-xs text-gray capitalize">
            in progress
          </div>
        </div>
      </>,
      <>
        <div className="flex flex-col">
          <div className="text-center font-poppins font-medium text-lg text-gray">
            {0}
          </div>
          <div className="text-center font-poppins font-normal text-xs text-gray capitalize">
            in progress
          </div>
        </div>
      </>,
      <>
        <div className="flex flex-col">
          <div className="text-center font-poppins font-medium text-lg text-gray">
            {0}
          </div>
          <div className="text-center font-poppins font-normal text-xs text-gray capitalize">
            in progress
          </div>
        </div>
      </>,
    ],
  },
};
