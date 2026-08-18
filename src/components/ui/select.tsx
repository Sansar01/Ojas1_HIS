"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

type SelectContextValue = {
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
  options: Record<string, React.ReactNode>;
  registerOption: (value: string, label: React.ReactNode) => void;
};

const SelectContext = React.createContext<SelectContextValue | null>(null);

function useSelectContext() {
  const context = React.useContext(SelectContext);
  if (!context) throw new Error("Select components must be used within Select.");
  return context;
}

function Select({ value, onValueChange, disabled = false, children }: { value?: string; onValueChange?: (value: string) => void; disabled?: boolean; children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<Record<string, React.ReactNode>>({});
  const registerOption = React.useCallback((optionValue: string, label: React.ReactNode) => {
    setOptions((current) => current[optionValue] === label ? current : { ...current, [optionValue]: label });
  }, []);

  return (
    <SelectContext.Provider value={{ value, onValueChange, disabled, open, setOpen, options, registerOption }}>
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  );
}

function SelectValue({ placeholder }: { placeholder?: string }) {
  const { value, options } = useSelectContext();
  return <span className="truncate">{(value && options[value]) || value || placeholder}</span>;
}

const SelectTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, disabled, ...props }, ref) => {
    const { open, setOpen, disabled: selectDisabled } = useSelectContext();
    return (
      <button ref={ref} type="button" disabled={disabled || selectDisabled} aria-expanded={open}
        className={cn("flex h-9 w-full cursor-pointer items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm disabled:cursor-not-allowed disabled:opacity-50", className)}
        onClick={() => setOpen(!open)} {...props}>
        {children}<ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </button>
    );
  },
);
SelectTrigger.displayName = "SelectTrigger";

function SelectContent({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  const { open } = useSelectContext();
  return <div hidden={!open} className={cn("absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md", className)}>{children}</div>;
}

function SelectItem({ value, className, children }: { value: string; className?: string; children: React.ReactNode }) {
  const { value: selectedValue, onValueChange, setOpen, registerOption } = useSelectContext();
  React.useEffect(() => registerOption(value, children), [children, registerOption, value]);
  return <button type="button" className={cn("flex w-full cursor-pointer items-center justify-between rounded-sm px-2 py-1.5 text-left text-sm hover:bg-accent", className)} onClick={() => { onValueChange?.(value); setOpen(false); }}>
    {children}{selectedValue === value && <Check className="h-4 w-4" />}
  </button>;
}

const SelectGroup = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const SelectLabel = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("px-2 py-1.5 text-sm font-semibold", className)} {...props} />;
const SelectSeparator = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />;
const SelectScrollUpButton = () => null;
const SelectScrollDownButton = () => null;

export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton };
