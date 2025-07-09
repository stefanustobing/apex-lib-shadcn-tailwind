import { Meta, StoryObj } from "@storybook/react";
import { User, Briefcase, ChevronDown, GitBranch } from "react-feather";

import { Button } from "../Btn/Button";
import ActionBtnDropdown from "../DropdownCustom/ActionBtnDropdown";
import PageHeader from "../PageHeader";
import Headline from "../Typography/Headline";

import Page from ".";


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
                                    items={[
                                        {
                                            name: 'Add User', 
                                            onClick: () => {}
                                        }, 
                                        {
                                            name: 'Edit User'
                                        }, 
                                        {
                                            name: 'Delete User'
                                        }
                                        ]} 
                                    trigger={
                                        <Button variant="white">
                                            <GitBranch />{' '}Branch{' '}<ChevronDown />
                                        </Button>
                                    }
                                />
                                <ActionBtnDropdown 
                                    items={[
                                        {name: 'Add User'}, 
                                        {name: 'Edit User'}, 
                                        {name: 'Delete User'}
                                    ]} 
                                    trigger={
                                        <Button variant="white">
                                            <User />{' '}Manager{' '}<ChevronDown />
                                        </Button>}
                                />
                                <ActionBtnDropdown 
                                    items={[
                                        {name: 'Add User'}, 
                                        {name: 'Edit User'}, 
                                        {name: 'Delete User'}
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
    header: (
      <PageHeader
        leftContent={<Headline>Dashboard</Headline>}
        rightContent={
          <>
            <ActionBtnDropdown
              trigger={
                <Button variant="white">
                  <GitBranch /> Branch <ChevronDown />
                </Button>
              }
              items={[
                { name: "Add User", onClick: () => alert("Add user") },
                { name: "Edit User" },
                { name: "Delete User" },
              ]}
            />
            <ActionBtnDropdown
              trigger={
                <Button variant="white">
                  <User /> Manager <ChevronDown />
                </Button>
              }
              items={[
                { name: "Add User" },
                { name: "Edit User" },
                { name: "Delete User" },
              ]}
            />
            <ActionBtnDropdown
              trigger={
                <Button variant="white">
                  <Briefcase /> Account <ChevronDown />
                </Button>
              }
              items={[
                { name: "Add User" },
                { name: "Edit User" },
                { name: "Delete User" },
              ]}
            />
          </>
        }
      />
    ),
    children: "Content of the page",
  },
};
