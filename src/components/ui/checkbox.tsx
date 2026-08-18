import * as React from "react";

import { cn } from "@/lib/utils";

type CheckedState = boolean | "indeterminate";

type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "checked" | "onChange"
> & {
  checked?: CheckedState;
  onCheckedChange?: (checked: boolean) => void;
};

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked = false, onCheckedChange, ...props }, ref) => (
    <input
      ref={ref}
      type="checkbox"
      checked={checked === true}
      aria-checked={checked}
      className={cn(
        "h-4 w-4 shrink-0 cursor-pointer rounded-sm border border-primary accent-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      onChange={(event) => onCheckedChange?.(event.target.checked)}
      {...props}
    />
  ),
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
