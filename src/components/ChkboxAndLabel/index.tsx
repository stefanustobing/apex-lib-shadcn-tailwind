import { ReactNode, forwardRef, ReactElement } from "react";

import { Checkbox } from "../Checkbox";
import { Label } from "../Label";

export type ChkboxAndLabelProps = {
  children: ReactNode;
  checked?: boolean;
  onCheckedChange?: () => void;
  id?: string;
  disabled?: boolean;
};

const ChkboxAndLabel = forwardRef<HTMLDivElement, ChkboxAndLabelProps>(
  function ChkboxAndLabel(
    { children, checked, onCheckedChange, id, disabled }: ChkboxAndLabelProps,
    ref,
  ): ReactElement {
    return (
      <div ref={ref} className="flex items-center">
        <Checkbox
          id={id}
          checked={checked}
          onCheckedChange={onCheckedChange}
          className="!mr-[10px]"
          disabled={disabled}
        />
        <Label className="[&>svg]:size-4 gap-1" htmlFor={id}>
          {children}
        </Label>
      </div>
    );
  },
);

export default ChkboxAndLabel;
