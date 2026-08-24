import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect, useRef, useState } from "react";
import { api, ApiError } from "@/lib/api";
import { getUser, setUser } from "@/lib/auth";
import { CalendarClock, Check, UserRound } from "lucide-react";
import * as Checkbox from "@radix-ui/react-checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toast } from "primereact/toast";
import {
  AvailabilityResponse,
  CreateDoctorProfile,
  Slot,
} from "@/types/doctorSlot";
import { showToast, ToastContainer } from "@/components/ui/toast";
import { PageLoader } from "@/components/ui/pageLoader";

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

const doctorSlotSteps = [
  {
    view: "profile" as const,
    number: 1,
    title: "Doctor Profile",
    icon: UserRound,
  },
  {
    view: "slots" as const,
    number: 2,
    title: "Doctor Slots",
    icon: CalendarClock,
  },
];

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
  const [breakStartTime, setBreakStartTime] = useState("13:00");
  const [breakEndTime, setBreakEndTime] = useState("14:00");
  const [saving, setSaving] = useState(false);

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
  const user = getUser("authUser");

  // Resolve the doctor profile first, then hydrate the availability form.
  useEffect(() => {
    async function fetchDoctorAvailability() {
      try {
        PageLoader.show();
        const user = getUser("authUser");
        const doctorsResponse = await api.get<any>(
          `/api/hospital/users/${user.userId}`,
        );

        const availabilityResponse = await api.get<
          AvailabilityResponse | { data: AvailabilityResponse }
        >(`/api/opd/doctors/${doctorsResponse.id}/availability`);
        const availability =
          "data" in availabilityResponse
            ? availabilityResponse.data
            : availabilityResponse;

        const schedule = availability.schedule;
        if (Array.isArray(schedule)) {
          setSlots((currentSlots) => {
            const nextSlots = { ...currentSlots };

            schedule.forEach((day) => {
              if (day.dayOfWeek < 0 || day.dayOfWeek > 6) return;

              const key = String(day.dayOfWeek);
              nextSlots[key] = {
                enabled: day.isActive,
                from: day.startTime ?? currentSlots[key].from,
                to: day.endTime ?? currentSlots[key].to,
              };
            });

            return nextSlots;
          });

          const breakDay = schedule.find(
            (day) => day.breakStartTime && day.breakEndTime,
          );
          if (breakDay?.breakStartTime && breakDay.breakEndTime) {
            setBreakStartTime(breakDay.breakStartTime);
            setBreakEndTime(breakDay.breakEndTime);
          }
        }

        if (typeof availability.slotDurationMins === "number") {
          setSlotDuration(String(availability.slotDurationMins));
        }

        const bufferTimeMins = availability.bufferTimeMins;
        if (typeof bufferTimeMins === "number") {
          setDoctorProfile((currentProfile) => ({
            ...currentProfile,
            bufferTimeMins,
          }));
        }
      } catch (err) {
        showToast("error", "Failed to fetch doctor availability");
        // Silently fail - use default slots if fetch fails
      } finally {
        PageLoader.stop();
      }
    }

    fetchDoctorAvailability();
  }, []);

  // update doctor profile first

  async function saveProfile() {
    try {
      PageLoader.show();
      setSavingProfile(true);
      const doctorId = getUser("doctorProfileTenantId");
      if (!doctorId) {
        showToast("error", "Could not determine current doctor Id");
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

      showToast("success", "Details saved successfully");
      setView("slots");
    } catch (err) {
      showToast(
        "error",
        err instanceof ApiError ? err.message : "Failed to save details.",
      );
    } finally {
      PageLoader.stop();
      setSavingProfile(false);
    }
  }

  // Save doctor availability slot

  async function handleSave() {
    try {
      setSaving(true);
      const doctorId = getUser("doctorProfile");
      if (!doctorId.id) {
        showToast("error", "Could not determine current doctor Id");
        setSaving(false);
        return;
      }

      const payload = {
        schedule: Object.entries(slots).map(([day, s]) => ({
          dayOfWeek: Number(day),
          isActive: s.enabled,
          ...(s.enabled
            ? {
                startTime: s.from,
                endTime: s.to,
                breakStartTime,
                breakEndTime,
              }
            : {}),
        })),
        slotDurationMins: Number(slotDuration),
        bufferTimeMins: doctorProfile.bufferTimeMins,
      };

      await api.post(`/api/opd/doctors/${doctorId.id}/availability`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: payload,
      });

      showToast("success", "Availability saved successfully.");
    } catch (err) {
      showToast(
        "error",
        err instanceof ApiError
          ? err.message
          : "Failed to save availability slot.",
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <div>
        <div className="mb-6 overflow-x-auto rounded-xl border p-4">
          <div className="flex min-w-[500px] items-center justify-between">
            {doctorSlotSteps.map((step, index) => {
              const Icon = step.icon;
              const active = view === step.view;
              const done = view === "slots" && step.number === 1;

              return (
                <div
                  key={step.view}
                  className="flex flex-1 items-center last:flex-none"
                >
                  <button
                    type="button"
                    onClick={() => setView(step.view)}
                    className="flex cursor-pointer items-center gap-3 text-left"
                    aria-current={active ? "step" : undefined}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                        done
                          ? "border-success bg-success text-white"
                          : active
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-muted text-muted-foreground"
                      }`}
                    >
                      {done ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <Icon className="h-5 w-5" />
                      )}
                    </div>
                    <div>
                      <div className="text-[10px] text-muted-foreground">
                        Step {step.number}
                      </div>
                      <div
                        className={`text-sm font-semibold ${active ? "text-primary" : ""}`}
                      >
                        {step.title}
                      </div>
                    </div>
                  </button>
                  {index < doctorSlotSteps.length - 1 && (
                    <div
                      className={`mx-3 h-0.5 flex-1 ${done ? "bg-success" : "bg-border"}`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {view === "profile" ? (
          <div className="mt-2 p-4 ">
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
          <div className="mt-6 p-4">
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
                    className={`grid grid-cols-12 gap-2 items-center border rounded-lg p-1.5 transition-colors ${
                      sl.enabled
                        ? "bg-emerald-50 border-emerald-300"
                        : "bg-card"
                    }`}
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

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <F label="Slot Duration (min)">
                <Select value={slotDuration} onValueChange={setSlotDuration}>
                  <SelectTrigger className="h-9 w-full">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>

                  <SelectContent>
                    {["10", "15", "20", "30", "45", "60"].map((duration) => (
                      <SelectItem key={duration} value={duration}>
                        {duration} min
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </F>

              <F label="Break From">
                <input
                  type="time"
                  value={breakStartTime}
                  onChange={(e) => setBreakStartTime(e.target.value)}
                  className="w-full px-2 py-2 border rounded-lg text-sm"
                />
              </F>

              <F label="Break To">
                <input
                  type="time"
                  value={breakEndTime}
                  onChange={(e) => setBreakEndTime(e.target.value)}
                  className="w-full px-2 py-2 border rounded-lg text-sm"
                />
              </F>

              <div className="mt-4 flex justify-end sm:col-span-3">
                <Button
                  type="button"
                  onClick={handleSave}
                  disabled={saving}
                  className="h-9 px-4"
                >
                  {saving ? "Saving..." : "Save"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
