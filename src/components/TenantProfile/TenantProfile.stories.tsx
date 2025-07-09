import { Meta, StoryObj } from "@storybook/react";

import TenantProfile from ".";

const meta: Meta<typeof TenantProfile> = {
  title: "Mycomponent/TenantProfile",
  component: TenantProfile,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Mariane Vrålstad",
    avatarUrl:
      "https://uninite-local.imgix.net/listings/oxl89va3pz7p8dwxd/0727f9210fc.jpg?w=70&h=70&fit=min&facepad=3",
    detailInfoUrl:
      "https://apexit.app.local.uniteliving.com/tenants/ifkvwqmwfrzpfgd55",
    phone: "94131564",
    email: "test@gmail.com",
    badge: [
      { text: "#24", color: "red" },
      { text: "#25", color: "orange" },
      { text: "Good Tenant", color: "yellow" },
    ],
  },
};
