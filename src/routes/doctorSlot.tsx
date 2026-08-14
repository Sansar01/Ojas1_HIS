but import React, { useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as Select from "@radix-ui/react-select";

// Small inline SVGs so there is no additional dependency on @radix-ui/react-icons
const CheckSvg = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 6L9 17L4 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronDown = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

type Slot = {
  enabled: boolean;
  from: string; // "HH:MM"
  to: string; // "HH:MM"
};

const F: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <div>
    <div className="text-xs font-medium text-muted-foreground mb-2">
      {label}
    </div>
    {children}
  </div>
);

export default function DoctorSlotRoute() {
  const initialSlots: Record<string, Slot> = days.reduce(
    (acc, d) => {
      acc[d] = { enabled: false, from: "09:00", to: "17:00" };
      return acc;
    },
    {} as Record<string, Slot>,
  );

  const [formData] = useState({ userType: "DOCTOR" as const });
  const [slots, setSlots] = useState<Record<string, Slot>>(initialSlots);
  const [slotDuration, setSlotDuration] = useState("15");
  const breakFromDefault = "13:00";
  const breakToDefault = "14:00";

  return (
    <div>
      {/* Doctor Slots */}
      {formData.userType === "DOCTOR" && (
        <div className="mt-6 p-4 border rounded-lg bg-primary/5">
          <div className="mb-3">
            <div className="text-sm font-semibold">
              Doctor Slot Creation (Day-wise)
            </div>
            <div className="text-[11px] text-muted-foreground">
              Enable days and set consultation from 6to time
            </div>
          </div>

          <div className="space-y-2">
            <div className="grid grid-cols-12 gap-2 text-[11px] font-medium text-muted-foreground px-2">
              <div className="col-span-1">Active</div>
              <div className="col-span-4">Day</div>
              <div className="col-span-3">From</div>
              <div className="col-span-3">To</div>
              <div className="col-span-1 text-right">Hrs</div>
            </div>

            {days.map((d) => {
              const sl = slots[d];
              const hrs = sl.enabled
                ? (() => {
                    const [fh, fm] = sl.from.split(":").map(Number);
                    const [th, tm] = sl.to.split(":").map(Number);
                    const mins = th * 60 + tm - (fh * 60 + fm);
                    return mins > 0 ? (mins / 60).toFixed(1) : "0";
                  })()
                : "—";

              return (
                <div
                  key={d}
                  className="grid grid-cols-12 gap-2 items-center bg-card border rounded-lg p-2"
                >
                  <div className="col-span-1">
                    <Checkbox.Root
                      className="inline-flex items-center justify-center h-5 w-5 rounded border focus:ring-2"
                      checked={sl.enabled}
                      onCheckedChange={(v) =>
                        setSlots({
                          ...slots,
                          [d]: { ...sl, enabled: !!v },
                        })
                      }
                      aria-label={`Enable ${d}`}
                    >
                      <Checkbox.Indicator>
                        <span className="text-[10px]">
                          <CheckSvg />
                        </span>
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                  </div>

                  <div className="col-span-4 text-sm">{d}</div>

                  <div className="col-span-3">
                    <input
                      type="time"
                      value={sl.from}
                      disabled={!sl.enabled}
                      onChange={(e) =>
                        setSlots({
                          ...slots,
                          [d]: { ...sl, from: e.target.value },
                        })
                      }
                      className="w-full px-2 py-1.5 border rounded text-sm disabled:opacity-50"
                    />
                  </div>

                  <div className="col-span-3">
                    <input
                      type="time"
                      value={sl.to}
                      disabled={!sl.enabled}
                      onChange={(e) =>
                        setSlots({
                          ...slots,
                          [d]: { ...sl, to: e.target.value },
                        })
                      }
                      className="w-full px-2 py-1.5 border rounded text-sm disabled:opacity-50"
                    />
                  </div>

                  <div className="col-span-1 text-right text-xs text-muted-foreground">
                    {hrs}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-3 gap-3 mt-4">
            <F label="Slot Duration (min)">
              <Select.Root
                value={slotDuration}
                onValueChange={(v) => setSlotDuration(v)}
              >
                <Select.Trigger className="w-full px-2 py-2 border rounded-lg text-sm inline-flex items-center justify-between">
                  <Select.Value />
                  <Select.Icon>
                    <span className="ml-2">
                      <ChevronDown />
                    </span>
                  </Select.Icon>
                </Select.Trigger>

                <Select.Portal>
                  <Select.Content className="bg-white border rounded shadow-md mt-1">
                    <Select.Viewport>
                      {["10", "15", "20", "30", "45", "60"].map((v) => (
                        <Select.Item
                          key={v}
                          value={v}
                          className="px-3 py-2 cursor-pointer flex items-center justify-between"
                        >
                          <Select.ItemText>{v}</Select.ItemText>
                          <Select.ItemIndicator>
                            <span className="text-[12px]">
                              <CheckSvg />
                            </span>
                          </Select.ItemIndicator>
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </F>

            <F label="Break From">
              <input
                type="time"
                defaultValue={breakFromDefault}
                className="w-full px-2 py-2 border rounded-lg text-sm"
              />
            </F>

            <F label="Break To">
              <input
                type="time"
                defaultValue={breakToDefault}
                className="w-full px-2 py-2 border rounded-lg text-sm"
              />
            </F>
          </div>
        </div>
      )}
    </div>
  );
}
