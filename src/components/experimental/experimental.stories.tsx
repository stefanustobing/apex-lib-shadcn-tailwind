import { Meta, StoryObj } from "@storybook/react";
import Experimental from "./index";
import { DropdownMenuItem } from "../../../@/components/ui/dropdown-menu";
import { Button } from "../../../@/components/ui/button";

const meta: Meta<typeof Experimental> = {
  title: "Experimental",
  component: Experimental,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    drpdownTrigger: <Button>Click Me</Button>,
    drpdownItems: [
      <DropdownMenuItem
        onSelect={() => alert("Profile being clicked")}
        className="px-[calc(2rem-2px)] py-3 rounded-none"
      >
        Profile
      </DropdownMenuItem>,
      <DropdownMenuItem>Billing</DropdownMenuItem>,
      <DropdownMenuItem className="px-[calc(2rem-2px)] py-3 rounded-none">
        <Button>Test button</Button>
      </DropdownMenuItem>,
      <DropdownMenuItem
        onSelect={() => alert("Keyboard shortcut")}
        className="px-[calc(2rem-2px)] py-3 rounded-none"
      >
        Keyboard shortcuts
      </DropdownMenuItem>,
    ],
  },
};
