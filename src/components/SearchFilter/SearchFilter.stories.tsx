import { Meta, StoryObj } from "@storybook/react";

import SearchFilter from ".";

const meta: Meta = {
  title: "Mycomponent/SearchFilter",
  component: SearchFilter,
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
    data: [
      { text: "Alfred" },
      { text: "Bjarne Olsen", selected: true },
      { text: "Daniel Lines" },
      { text: "Egil Hanger", selected: true },
      { text: "Marte Vrålstad", selected: true },
      { text: "Ole Rabanal" },
    ],
    multiselect: true,
    placeholder: "Search and select",
    onSelect: (item: string) => console.log("Selected: ", item),
    onDeselect: (item: string) => console.log("Deselected: ", item),
  },
};
