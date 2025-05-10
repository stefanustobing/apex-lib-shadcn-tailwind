import { Meta, StoryObj } from "@storybook/react";
import BoxGrid from ".";
import ChkboxAndLabel from "../ChkboxAndLabel";

const meta: Meta = {
  title: "Mycomponent/BoxGrid",
  component: BoxGrid,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    numOfGrids: 4,
    children: [
      <ChkboxAndLabel checked={true}>On radar</ChkboxAndLabel>,
      <ChkboxAndLabel>Vacant</ChkboxAndLabel>,
      <ChkboxAndLabel>In Progress</ChkboxAndLabel>,
      <ChkboxAndLabel>Occupied</ChkboxAndLabel>,
      <ChkboxAndLabel>Upcoming</ChkboxAndLabel>,
      <ChkboxAndLabel>Maintanace</ChkboxAndLabel>,
      <ChkboxAndLabel>Archive</ChkboxAndLabel>,
    ],
  },
};
