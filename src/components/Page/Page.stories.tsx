import { Meta, StoryObj } from "@storybook/react";
import Page from ".";
import PageHeader from "../PageHeader";
import Headline from "../Typography/Headline";
import ActionBtnDropdown from "../DropdownCustom/ActionBtnDropdown";
import { DropdownMenuItem } from "../Dropdown";
import ActionBtnItem from "../Dropdown/ActionBtnItem";
import { Button } from "../Btn/Button";
import { User, Briefcase, ChevronDown, GitBranch } from "react-feather";

const meta: Meta = {
  title: "Mycomponent/Page",
  component: Page,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          height: "auto",
          minHeight: "300px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: (
      <PageHeader
        leftContent={<Headline>Dashboard</Headline>}
        rightContent={
          <>
            <ActionBtnDropdown
              drpdownTrigger={
                <Button variant="white">
                  <GitBranch /> Branch <ChevronDown />
                </Button>
              }
              drpdownItems={[
                <DropdownMenuItem>
                  <ActionBtnItem>Add User</ActionBtnItem>
                </DropdownMenuItem>,
              ]}
            />
            <ActionBtnDropdown
              drpdownTrigger={
                <Button variant="white">
                  <User /> Manager <ChevronDown />
                </Button>
              }
              drpdownItems={[
                <DropdownMenuItem>
                  <ActionBtnItem>Add User</ActionBtnItem>
                </DropdownMenuItem>,
              ]}
            />
            <ActionBtnDropdown
              drpdownTrigger={
                <Button variant="white">
                  <Briefcase /> Account <ChevronDown />
                </Button>
              }
              drpdownItems={[
                <DropdownMenuItem>
                  <ActionBtnItem>Add User</ActionBtnItem>
                </DropdownMenuItem>,
              ]}
            />
          </>
        }
      />
    ),
    children: "test",
  },
};
