import { Meta, StoryObj } from "@storybook/react";
import FlexContainer from "./index";
import { Avatar, AvatarFallback } from "../../Avatar";
import { KroneIcon } from "../../../Assets/custom-svg";
import { User } from "react-feather";
import Text from "../../Typography/Text";
import JustifyContainer from "../JustifyContainer";
import HorizontalProgressBar from "../../ProgressBar/HorizontalProgressBar";

const meta: Meta = {
  title: "Mycomponent/Container/FlexContainer",
  component: FlexContainer,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Example1: Story = {
  args: {
    children: [
      <Avatar shape="square" size="s60px">
        <AvatarFallback variant="violate">
          <KroneIcon />
        </AvatarFallback>
      </Avatar>,
      <div>
        <Text as="p" variant="success" weight="medium" size="lg">
          This is text nr. 1
        </Text>
        <Text as="p" variant="gray">
          This come the explanation
        </Text>
      </div>,
    ],
    className: "gap-2",
  },
};

export const Example2: Story = {
  args: {
    children: [
      <User className="w-[16px] h-[16px]" />,
      <Text as="p">Landlord</Text>,
    ],
    className: "gap-2",
  },
};

export const Example3: Story = {
  args: {
    children: [
      <JustifyContainer justify="between" className="w-full p-0">
        <Text as="p" className="font-poppins text-gray">
          Landlord
        </Text>
        <Text as="span" variant="success" className="text-xl">
          70%
        </Text>
      </JustifyContainer>,
      <HorizontalProgressBar />,
    ],
    flexDirection: "flexCol",
    className: "gap-2",
  },
};

export const Example4: Story = {
  args: {
    children: [
      <FlexContainer flexDirection="flexCol">
        <Text as="p" className="text-gray font-medium text-lg">
          0
        </Text>
        <Text as="p" className="text-gray text-xs">
          Total Overdue
        </Text>
      </FlexContainer>,
    ],
  },
};
