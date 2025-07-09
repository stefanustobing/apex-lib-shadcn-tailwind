import { Meta, StoryObj } from "@storybook/react";
import { User, Briefcase, ChevronDown, GitBranch } from "react-feather";

import FilterButton from "../Btn/FilterButton";
import ActionBtnDropdown from "../DropdownCustom/ActionBtnDropdown";
import Headline from "../Typography/Headline";

import PageHeader from ".";


const meta: Meta = {
  title: "Mycomponent/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
  /*decorators: [
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
  ],*/
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
            <Page 
                header={
                    <PageHeader 
                        leftContent={<Headline>Dashboard</Headline>} 
                        rightContent={
                            <>
                                <ActionBtnDropdown 
                                    items={
                                        [
                                            {
                                                name: 'Add User', 
                                                onClick: () => {}
                                            }, 
                                            {
                                                name: 'Edit User'
                                            }
                                        ]
                                    } 
                                    trigger={
                                        <Button variant="white">
                                            <GitBranch />{' '}Branch{' '}<ChevronDown />
                                        </Button>
                                    }
                                />
                                <ActionBtnDropdown 
                                    items={[
                                        {name: 'Add User'}
                                    ]} 
                                    trigger={
                                        <Button variant="white">
                                            <User />{' '}Manager{' '}<ChevronDown />
                                        </Button>}
                                />
                                <ActionBtnDropdown 
                                    items={[
                                        {name: 'Add User'}
                                    ]} 
                                    trigger={
                                        <Button variant="white">
                                            <Briefcase />{' '}Account{' '}<ChevronDown />
                                        </Button>
                                    }
                                />
                            </>
                        }
                    />
                }
            />
                Content of the page
            </Page>
                `,
        format: true,
      },
    },
  },
  args: {
    leftContent: <Headline>Dashboard</Headline>,
    rightContent: (
      <>
        <ActionBtnDropdown
          trigger={
            <FilterButton>
              <GitBranch /> Branch <ChevronDown />
            </FilterButton>
          }
          items={[{ name: "Add User" }, { name: "Edit User" }]}
        />
        <ActionBtnDropdown
          trigger={
            <FilterButton>
              <User /> Manager <ChevronDown />
            </FilterButton>
          }
          items={[{ name: "Add User" }]}
        />
        <ActionBtnDropdown
          trigger={
            <FilterButton>
              <Briefcase /> Account <ChevronDown />
            </FilterButton>
          }
          items={[{ name: "Add User" }]}
        />
      </>
    ),
  },
};
