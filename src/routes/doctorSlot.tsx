import { createFileRoute } from "@tanstack/react-router";
import React, { useState, useRef, useEffect } from "react";
import { api } from "@/lib/api";
import { getUser, setUser } from "@/lib/auth";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as Select from "@radix-ui/react-select";
import { AppLayout } from "@/components/layout/AppLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CreateDoctorProfile } from "@/types/doctorSlot";

export const Route = createFileRoute("/doctorSlot")({
  head: () => ({ meta: [{ title: "Doctor Slot Management Ojas1Cloud HIMS" }] }),
  component: DoctorSlot,
});

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
  { name: "Sunday", dayOfWeek: 0 },
  { name: "Monday", dayOfWeek: 1 },
  { name: "Tuesday", dayOfWeek: 2 },
  { name: "Wednesday", dayOfWeek: 3 },
  { name: "Thursday", dayOfWeek: 4 },
  { name: "Friday", dayOfWeek: 5 },
  { name: "Saturday", dayOfWeek: 6 },
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

function DoctorSlot() {
  const initialSlots: Record<string, Slot> = days.reduce(
    (acc, d) => {
      acc[String(d.dayOfWeek)] = { enabled: false, from: "09:00", to: "17:00" };
      return acc;
    },
    {} as Record<string, Slot>,
  );

  const [slots, setSlots] = useState<Record<string, Slot>>(initialSlots);
  const [slotDuration, setSlotDuration] = useState("15");
  const breakFromDefault = "13:00";
  const breakToDefault = "14:00";
  const [response, setResponse] = useState<any>(null);

  const [saving, setSaving] = useState(false);

  async function handleSave() {
    try {
      setSaving(true);
      const user = getUser();
      const doctorId = user?.userId;
      if (!doctorId) {
        toast.error("Could not determine current doctor id.", {
          position: "top-right",
          className:
            "bg-destructive text-destructive-foreground border-destructive",
        });
        setSaving(false);
        return;
      }

      const payload = {
        schedule: Object.entries(slots).map(([day, s]) => ({
          dayOfWeek: Number(day),
          isActive: true,
          startTime: s.from,
          endTime: s.to,
        })),
      };

      await api.post(`/api/opd/doctors/${doctorId}/availability`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: payload,
      });

      toast.success("Availability saved successfully", {
        position: "top-right",
        className: "bg-success text-success-foreground border-success",
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to save availability slot", {
        position: "top-right",
        className:
          "bg-destructive text-destructive-foreground border-destructive",
      });
    } finally {
      setSaving(false);
    }
  }

  // View toggle: 'profile' or 'slots'
  const [view, setView] = useState<"profile" | "slots">("profile");

  // Doctor profile form state
  const [doctorProfile, setDoctorProfile] = useState<CreateDoctorProfile>({
    hospitalUserId: getUser()?.userId ?? "",
    specialization: "",
    qualifications: "",
    consultationFee: 0,
    slotDurationMins: Number(slotDuration) || 10,
    bufferTimeMins: 0,
    maxPatientsPerDay: 0,
  });

  useEffect(() => {
    const user = getUser("doctorProfile");
    if (user?.userId) {
      setDoctorProfile((p) => ({ ...p, hospitalUserId: user.userId ?? "" }));
    }
  }, []);

  const [savingProfile, setSavingProfile] = useState(false);
  async function saveProfile() {
    try {
      setSavingProfile(true);
      const user = getUser("doctorProfile");
      const doctorId = user?.id;
      if (!doctorId) {
        toast.error("Could not determine doctor id.", {
          position: "top-right",
        });
        setSavingProfile(false);
        return;
      }

      // Post to a profile endpoint (adjust if backend differs)
      const res = await api.post(`/api/opd/doctors/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: doctorProfile,
      });

      setUser(res, "doctorProfile");

      toast.success("Profile saved", { position: "top-right" });
      setView("slots");
    } catch (err) {
      console.error(err);
      toast.error("Failed to save profile", { position: "top-right" });
    } finally {
      setSavingProfile(false);
    }
  }

  return (
    <AppLayout>
      <div>
        {/* View toggle */}
        <div className="flex items-center gap-2 mb-4">
          <button
            type="button"
            onClick={() => setView("profile")}
            className={`px-3 py-1 rounded ${view === "profile" ? "bg-primary text-white" : "bg-transparent border"}`}
          >
            Profile
          </button>

          <button
            type="button"
            onClick={() => setView("slots")}
            className={`px-3 py-1 rounded ${view === "slots" ? "bg-primary text-white" : "bg-transparent border"}`}
          >
            Doctor Slot
          </button>
        </div>

        {view === "profile" ? (
          <div className="mt-2 p-4 border rounded-lg bg-primary/5">
            <div className="mb-3">
              <div className="text-sm font-semibold">Doctor Profile</div>
              <div className="text-[11px] text-muted-foreground">
                Fill doctor profile details
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-medium text-muted-foreground mb-1">
                  Hospital User ID
                </div>
                <Input
                  value={doctorProfile.hospitalUserId}
                  disabled
                  className="w-full"
                />
              </div>

              <div>
                <div className="text-xs font-medium text-muted-foreground mb-1">
                  Specialization
                </div>
                <Input
                  value={doctorProfile.specialization}
                  onChange={(e) =>
                    setDoctorProfile({
                      ...doctorProfile,
                      specialization: e.target.value,
                    })
                  }
                  className="w-full"
                />
              </div>

              <div className="col-span-2">
                <div className="text-xs font-medium text-muted-foreground mb-1">
                  Qualifications
                </div>
                <Input
                  value={doctorProfile.qualifications}
                  onChange={(e) =>
                    setDoctorProfile({
                      ...doctorProfile,
                      qualifications: e.target.value,
                    })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <div className="text-xs font-medium text-muted-foreground mb-1">
                  Consultation Fee
                </div>
                <Input
                  type="number"
                  value={doctorProfile.consultationFee}
                  onChange={(e) =>
                    setDoctorProfile({
                      ...doctorProfile,
                      consultationFee: Number(e.target.value),
                    })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <div className="text-xs font-medium text-muted-foreground mb-1">
                  Slot Duration (mins)
                </div>
                <Input
                  type="number"
                  value={doctorProfile.slotDurationMins}
                  onChange={(e) => {
                    const v = Number(e.target.value);
                    setDoctorProfile({ ...doctorProfile, slotDurationMins: v });
                    setSlotDuration(String(v));
                  }}
                  className="w-full"
                />
              </div>

              <div>
                <div className="text-xs font-medium text-muted-foreground mb-1">
                  Buffer Time (mins)
                </div>
                <Input
                  type="number"
                  value={doctorProfile.bufferTimeMins}
                  onChange={(e) =>
                    setDoctorProfile({
                      ...doctorProfile,
                      bufferTimeMins: Number(e.target.value),
                    })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <div className="text-xs font-medium text-muted-foreground mb-1">
                  Max Patients Per Day
                </div>
                <Input
                  type="number"
                  value={doctorProfile.maxPatientsPerDay}
                  onChange={(e) =>
                    setDoctorProfile({
                      ...doctorProfile,
                      maxPatientsPerDay: Number(e.target.value),
                    })
                  }
                  className="w-full"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  id="isActive"
                  type="checkbox"
                  checked={doctorProfile.isActive}
                  onChange={(e) =>
                    setDoctorProfile({
                      ...doctorProfile,
                      isActive: e.target.checked,
                    })
                  }
                />
                <label htmlFor="isActive" className="text-sm">
                  Is Active
                </label>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <Button
                onClick={saveProfile}
                disabled={savingProfile}
                className="px-4 py-2 bg-primary text-white rounded"
              >
                {savingProfile ? "Saving..." : "Save Profile"}
              </Button>
            </div>
          </div>
        ) : (
          // Existing Doctor Slot UI
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

              {days.map((dayObj) => {
                const key = String(dayObj.dayOfWeek);
                const sl = slots[key] ?? {
                  enabled: false,
                  from: "09:00",
                  to: "17:00",
                };
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
                    key={key}
                    className="grid grid-cols-12 gap-2 items-center bg-card border rounded-lg p-2"
                  >
                    <div className="col-span-1">
                      <Checkbox.Root
                        className="inline-flex items-center justify-center cursor-pointer h-5 w-5 rounded border focus:ring-2"
                        checked={sl.enabled}
                        onCheckedChange={(v) =>
                          setSlots({ ...slots, [key]: { ...sl, enabled: !!v } })
                        }
                        aria-label={`Enable ${dayObj.name}`}
                      >
                        <Checkbox.Indicator>
                          <span className="text-[10px]">
                            <CheckSvg />
                          </span>
                        </Checkbox.Indicator>
                      </Checkbox.Root>
                    </div>

                    <div className="col-span-4 text-sm">{dayObj.name}</div>

                    <div className="col-span-3">
                      <input
                        id={`from-${key}`}
                        type="time"
                        value={sl.from}
                        disabled={!sl.enabled}
                        onChange={(e) =>
                          setSlots({
                            ...slots,
                            [key]: { ...sl, from: e.target.value },
                          })
                        }
                        className="w-full px-2 py-1.5 border rounded text-sm disabled:opacity-50"
                      />
                    </div>

                    <div className="col-span-3">
                      <input
                        id={`to-${key}`}
                        type="time"
                        value={sl.to}
                        disabled={!sl.enabled}
                        onChange={(e) =>
                          setSlots({
                            ...slots,
                            [key]: { ...sl, to: e.target.value },
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
                <Input
                  type="time"
                  defaultValue={breakFromDefault}
                  className="w-full px-2 py-2 border rounded-lg text-sm"
                />
              </F>

              <F label="Break To">
                <Input
                  type="time"
                  defaultValue={breakToDefault}
                  className="w-full px-2 py-2 border rounded-lg text-sm"
                />
              </F>

              <div className="mt-4 flex justify-end">
                <Button
                  onClick={handleSave}
                  disabled={saving}
                  className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
                >
                  {saving ? "Saving..." : "Save"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
