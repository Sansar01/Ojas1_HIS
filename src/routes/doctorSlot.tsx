import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect, useRef, useState } from "react";
import { api } from "@/lib/api";
import { getUser, setUser } from "@/lib/auth";
import { CalendarClock, Check, UserRound } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toast } from "primereact/toast";
import { Checkbox as PrimeCheckbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import {
  AvailabilityResponse,
  CreateDoctorProfile,
  Slot,
} from "@/types/doctorSlot";

export const Route = createFileRoute("/doctorSlot")({
  head: () => ({ meta: [{ title: "Doctor Slot Management Ojas1Cloud HIMS" }] }),
  component: DoctorSlot,
});

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
  const toastRef = useRef<Toast>(null);
  const showToast = (
    severity: "success" | "error",
    summary: string,
    detail = summary,
  ) => {
    toastRef.current?.show({ severity, summary, detail, life: 3000 });
  };

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

  async function handleSave() {
    try {
      setSaving(true);
      const doctorId = getUser("doctorProfileTenantId");
      if (!doctorId) {
        showToast(
          "error",
          "Doctor not found",
          "Could not determine current doctor ID.",
        );
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

      await api.post(`/api/opd/doctors/${doctorId}/availability`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: payload,
      });

      showToast(
        "success",
        "Availability saved",
        "Availability saved successfully.",
      );
    } catch (err) {
      console.error(err);
      showToast("error", "Save failed", "Failed to save availability slot.");
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
  const user = getUser("authUser");
  // Resolve the doctor profile first, then hydrate the availability form.
  useEffect(() => {
    async function fetchDoctorAvailability() {
      try {
        const user = getUser("authUser");
        const doctorsResponse = await api.get<any>(`/api/opd/doctors/list`);

        const doctorProfileTenantId = doctorsResponse?.data?.find(
          (x: any) => x.hospitalUserId === user?.userId,
        )?.id;

        if (!doctorProfileTenantId) {
          return;
        }

        setUser(doctorProfileTenantId, "doctorProfileTenantId");

        const availabilityResponse = await api.get<
          AvailabilityResponse | { data: AvailabilityResponse }
        >(`/api/opd/doctors/${doctorProfileTenantId}/availability`);
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
        console.error("Failed to fetch doctor availability:", err);
        // Silently fail - use default slots if fetch fails
      }
    }

    fetchDoctorAvailability();
  }, []);

  async function saveProfile() {
    try {
      setSavingProfile(true);
      const user = getUser("doctorProfile");
      const doctorId = user?.id;
      if (!doctorId) {
        showToast(
          "error",
          "Doctor not found",
          "Could not determine doctor ID.",
        );
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

      showToast("success", "Profile saved");
      setView("slots");
    } catch (err) {
      console.error(err);
      showToast("error", "Save failed", "Failed to save profile.");
    } finally {
      setSavingProfile(false);
    }
  }

  return (
    <AppLayout>
      <div>
        <Toast ref={toastRef} position="top-right" />
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
                      <PrimeCheckbox
                        inputId={`active-${key}`}
                        checked={sl.enabled}
                        className="scale-90"
                        onChange={(event) =>
                          setSlots({
                            ...slots,
                            [key]: { ...sl, enabled: Boolean(event.checked) },
                          })
                        }
                      />
                    </div>

                    <div className="col-span-4 text-sm">{dayObj.name}</div>

                    <div className="col-span-3">
                      <InputText
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
                        className="w-full p-inputtext-sm"
                      />
                    </div>

                    <div className="col-span-3">
                      <InputText
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
                        className="w-full p-inputtext-sm"
                      />
                    </div>

                    <div className="col-span-1 text-right text-xs text-muted-foreground">
                      {hrs}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-3">
              <F label="Slot Duration (min)">
                <Dropdown
                  value={slotDuration}
                  onChange={(event) => setSlotDuration(event.value)}
                  options={["10", "15", "20", "30", "45", "60"]}
                  className="w-full p-inputtext-sm"
                />
              </F>

              <F label="Break From">
                <InputText
                  type="time"
                  value={breakStartTime}
                  onChange={(e) => setBreakStartTime(e.target.value)}
                  className="w-full p-inputtext-sm"
                />
              </F>

              <F label="Break To">
                <InputText
                  type="time"
                  value={breakEndTime}
                  onChange={(e) => setBreakEndTime(e.target.value)}
                  className="w-full p-inputtext-sm"
                />
              </F>

              <div className="mt-4 flex justify-end sm:col-span-3">
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
