"use client";

import * as React from "react";
import { Calendar } from "primereact/calendar";

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
  const selected = value ? new Date(value) : undefined;

  return (
    <Calendar
      id={id}
      value={selected}
      onChange={(event) => {
        const date = event.value;
        const iso = date instanceof Date
          ? new Date(date.getTime() - date.getTimezoneOffset() * 60000)
              .toISOString()
              .slice(0, 10)
          : "";
        onChange(iso);
      }}
      dateFormat="yy/mm/dd"
      placeholder={placeholder}
      showIcon
      className={`date-picker ${className ?? ""}`}
      inputClassName="h-9 w-full py-1.5 text-sm"
    />
  );
}

export default DatePicker;
