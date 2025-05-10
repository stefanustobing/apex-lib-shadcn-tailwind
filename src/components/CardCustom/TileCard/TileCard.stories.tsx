import { Meta, StoryObj } from "@storybook/react";
import TileCard from ".";
import FlexContainer from "../../Container/FlexContainer";
import SvgLogo from "../../SvgLogo";
import { Home } from "react-feather";
import DollarSign from "../../../Assets/custom-svg/DollarSign";
import Text from "../../Typography/Text";
import BulletPoint from "../../BulletPoint";
import CircularProgressBar from "../../ProgressBar/CircularProgressBar";

const meta: Meta = {
  title: "Mycomponent/CustomCard/TileCard",
  component: TileCard,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is the content of tile card",
  },
};

export const Example1: Story = {
  args: {
    className: "p-[34px]",
    children: [
      <FlexContainer className="gap-4">
        <SvgLogo variant="danger">
          <DollarSign />
        </SvgLogo>
        <FlexContainer className="flex-col items-start">
          <Text as="h5" variant="danger" size="lg" weight="medium">
            0
          </Text>
          <Text as="p" variant="gray">
            Number of unspecified payments
          </Text>
        </FlexContainer>
      </FlexContainer>,
    ],
  },
};

export const Example2: Story = {
  args: {
    children: [
      <FlexContainer className="flex-col items-start">
        <FlexContainer className="gap-4 mb-6">
          <SvgLogo variant="success">
            <Home />
          </SvgLogo>
          <FlexContainer className="flex-col items-start">
            <Text as="h4" variant="gray" size="2xl" weight="medium">
              203
            </Text>
            <Text as="p" variant="gray" size="sm">
              Total Occupied properties
            </Text>
          </FlexContainer>
        </FlexContainer>

        <FlexContainer className="mb-2">
          <BulletPoint size="sm" className="mr-2" />
          <Text as="p" variant="gray" size="sm">
            Having new release <span className="font-semibold">1</span>
          </Text>
        </FlexContainer>

        <FlexContainer className="mb-2">
          <BulletPoint size="sm" className="mr-2" />
          <Text as="p" variant="gray" size="sm">
            Without new lease <span className="font-semibold">200</span>
          </Text>
        </FlexContainer>
      </FlexContainer>,
    ],
  },
};

export const Example3: Story = {
  args: {
    className: "p-[30px]",
    children: [
      <FlexContainer className="gap-4">
        <CircularProgressBar variant="warning" value={97} />
        <FlexContainer className="flex-col items-start">
          <Text as="p" variant="warning" size="lg" weight="medium">
            20.006.609
          </Text>
          <Text as="p" variant="gray">
            Total due
          </Text>
        </FlexContainer>
      </FlexContainer>,
    ],
  },
};
