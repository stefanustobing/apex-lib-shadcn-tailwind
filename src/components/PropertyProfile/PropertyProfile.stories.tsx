import { Meta, StoryObj } from "@storybook/react";
import PropertyProfile from ".";

const meta: Meta<typeof PropertyProfile> = {
  title: "Mycomponent/PropertyProfile",
  component: PropertyProfile,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    address: "Levangergata 2, 7068, Trondheim, Norway",
    avatarUrl:
      "https://uninite-local.imgix.net/listings/m4qmuhvbbj2nd46cu/e49b95a603a.png?w=70&h=70&fit=min&facepad=3",
    detailInfoUrl:
      "https://apexit.app.local.uniteliving.com/property/properties/nzx88dmvan5y7mdnk",
    infoText: "Entire place in a Apartment - Apt: H0101",
    badge: [
      { text: "#24", color: "red" },
      { text: "Occupied", color: "green" },
      { text: "Soon ending lease", color: "yellow" },
      { text: "upcoming", color: "yellow" },
    ],
  },
};
