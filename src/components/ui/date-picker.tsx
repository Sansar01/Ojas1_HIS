"use client";

import * as React from "react";
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns/format";

export function DatePicker({
  value,
  onChange,
  id,
  className,
  placeholder = "Select date",
}: {
  value?: string; // expected in YYYY-MM-DD format
  onChange: (iso: string) => void;
  id?: string;
  className?: string;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const selected = value ? new Date(value) : undefined;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          id={id}
          className={className + " justify-start font-normal"}
        >
          {selected ? format(selected, "yyyy/MM/dd").toString() : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
        <Calendar
          mode="single"
          selected={selected}
          defaultMonth={selected}
          captionLayout="dropdown"
          onSelect={(date) => {
            const iso = date
              ? new Date(date.getTime() - date.getTimezoneOffset() * 60000)
                  .toISOString()
                  .slice(0, 10)
              : "";
            onChange(iso);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}

export default DatePicker;