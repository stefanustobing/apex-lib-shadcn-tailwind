import { Meta, StoryObj } from "@storybook/react";

import {
  SearchFilter,
  SearchFilterInput,
  SearchFilterList,
  SearchFilterItem,
  SearchFilterEmpty,
} from ".";

const meta: Meta = {
  title: "Mycomponent/SearchFilter2",
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
    children: (
      <>
        <SearchFilterInput />
        <SearchFilterList>
          <SearchFilterItem value="alfred" text="Alfred" />
          <SearchFilterItem
            value="bjarne"
            text="Bjarne Olsen"
            defaultSelected={true}
          />
          <SearchFilterItem value="daniel" text="Daniel Lines" />
          <SearchFilterItem
            value="egil"
            text="Egil Hanger"
            defaultSelected={true}
          />
          <SearchFilterItem
            value="marte"
            text="Marte Vrålstad"
            defaultSelected={true}
          />
          <SearchFilterItem
            value="stefanus"
            text="Stefanus Tobing"
            defaultSelected={true}
          />
          <SearchFilterEmpty />
        </SearchFilterList>
      </>
    ),
  },
};
