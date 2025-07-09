import { Meta, StoryObj } from "@storybook/react";

import PropertyInfo from ".";

const meta: Meta<typeof PropertyInfo> = {
  title: "Mycomponent/PropertyInfo",
  component: PropertyInfo,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    leaseDate: "30.04.2024-30-04.2030",
    account: {
      avatarUrl: "https://github.com/shadcn.png",
      accountName: "Apex IT",
    },
    manager: { managerName: "Marte Vrålstad" },
    tenant: {
      avatarUrl:
        "https://uninite-local.imgix.net/listings/oxl89va3pz7p8dwxd/0727f9210fc.jpg?w=70&h=70&fit=min&facepad=3",
      tenantName: "Stefanus Tobing",
    },
  },
};
