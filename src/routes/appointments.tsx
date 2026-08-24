import { createFileRoute } from "@tanstack/react-router";
import { Kpi, Section } from "@/components/hims/Kpi";
import { useApiQuery } from "@/lib/hooks/useApiResource";
import {
  Users,
  Video,
  CheckCircle2,
  XCircle,
  Clock,
  Stethoscope,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { HospitalUser } from "@/types/user-management";
import { showToast } from "@/components/ui/toast";
import { PageLoader } from "@/components/ui/pageLoader";

export const Route = createFileRoute("/appointments")({
  head: () => ({ meta: [{ title: "Appointments — Ojas1Cloud HIMS" }] }),
  component: Appointments,
});

const doctors = [
  {
    n: "Dr. Arjun Mehta",
    s: "Cardiology",
    exp: "12+ Years Exp.",
    status: "Available",
    rating: 4.9,
  },
  {
    n: "Dr. Neha Sharma",
    s: "Dermatology",
    exp: "8+ Years Exp.",
    status: "Available",
    rating: 4.8,
  },
  {
    n: "Dr. Rajeev Kumar",
    s: "Orthopedics",
    exp: "15+ Years Exp.",
    status: "Few Slots",
    rating: 4.7,
  },
  {
    n: "Dr. Priya Singh",
    s: "General Medicine",
    exp: "10+ Years Exp.",
    status: "Available",
    rating: 4.9,
  },
  {
    n: "Dr. Sandeep Verma",
    s: "Neurology",
    exp: "14+ Years Exp.",
    status: "Few Slots",
    rating: 4.6,
  },
  {
    n: "Dr. Anjali Desai",
    s: "Gynecology",
    exp: "9+ Years Exp.",
    status: "Available",
    rating: 4.8,
  },
];

const days = [
  { d: "Tue", n: "20 May" },
  { d: "Wed", n: "21 May" },
  { d: "Thu", n: "22 May" },
  { d: "Fri", n: "23 May" },
  { d: "Sat", n: "24 May" },
  { d: "Sun", n: "25 May" },
  { d: "Mon", n: "26 May" },
];

const slotsMorning = [
  "10:00 AM",
  "10:20 AM",
  "10:40 AM",
  "11:00 AM",
  "11:20 AM",
  "11:40 AM",
  "12:00 PM",
  "12:20 PM",
  "12:40 PM",
  "01:00 PM",
  "01:20 PM",
  "01:40 PM",
];
const slotsAfternoon = [
  "02:00 PM",
  "02:20 PM",
  "02:40 PM",
  "03:00 PM",
  "03:20 PM",
  "03:40 PM",
  "04:00 PM",
  "04:20 PM",
  "04:40 PM",
  "05:00 PM",
  "05:20 PM",
  "05:40 PM",
];

function Appointments() {
  const [selectedDoc, setDoc] = useState(0);
  const [selectedDay, setDay] = useState(0);
  const [selectedSlot, setSlot] = useState("04:00 PM");
  const [mode, setMode] = useState<"physical" | "tele">("physical");
  const [users, setUsers] = useState<HospitalUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    PageLoader.show();
    api
      .get<any[]>("/api/hospital/users", {
        params: { status: "ACTIVE", userType: "DOCTOR" },
      })
      .then((data) => {
        if (!Array.isArray(data)) {
          setUsers([]);
          return;
        }

        const transformed: HospitalUser[] = data.map((u) => ({
          id: u.id,
          employeeId: u.staffProfile?.employeeId || "",
          email: u.email || "",
          userType: u.userType || "REGULAR_USER",
          isActive: u.status === "ACTIVE",
          profile: {
            firstName: u.firstName || "",
            lastName: u.lastName || "",
            //phone: u.mobile || "",
          },
          roles: (u.roles || []).map((r: any) => ({
            roleId: r.hospitalRoleId || "",
            roleName: r.hospitalRole?.roleName?.name || "",
            isPrimary: r.isPrimary ?? false,
          })),
          departments: (u.departments || []).map((d: any) => ({
            departmentId: d.departmentId || "",
            departmentName: d.department?.name || "",
          })),
        }));

        setUsers(transformed);
      })
      .catch((e) => showToast("error", e.message))
      .finally(() => PageLoader.stop());
  }, []);

  const { data, isLoading, error } = useApiQuery<{
    appointmentMetrics: {
      todayAppointments: number;
      physicalVisits: number;
      teleconsultations: number;
      completed: number;
      cancelled: number;
      avgWaitMinutes: number;
    };
  }>(["appointment-metrics"], "/appointments/metrics", { staleTime: 30_000 });

  const metrics = data?.appointmentMetrics;

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Appointment Booking</h1>
        <p className="text-sm text-muted-foreground">
          Book physical visit or teleconsultation
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-6">
        <Kpi
          icon={Users}
          label="Today's Appointments"
          value={isLoading ? "—" : `${metrics?.todayAppointments ?? 68}`}
          delta="15%"
          tone="primary"
        />
        <Kpi
          icon={Stethoscope}
          label="Physical Visits"
          value={isLoading ? "—" : `${metrics?.physicalVisits ?? 42}`}
          delta="10%"
          tone="info"
        />
        <Kpi
          icon={Video}
          label="Teleconsultations"
          value={isLoading ? "—" : `${metrics?.teleconsultations ?? 26}`}
          delta="20%"
          tone="primary"
        />
        <Kpi
          icon={CheckCircle2}
          label="Completed"
          value={isLoading ? "—" : `${metrics?.completed ?? 34}`}
          delta="12%"
          tone="success"
        />
        <Kpi
          icon={XCircle}
          label="Cancelled"
          value={isLoading ? "—" : `${metrics?.cancelled ?? 8}`}
          tone="destructive"
        />
        <Kpi
          icon={Clock}
          label="Avg Wait"
          value={isLoading ? "—" : `${metrics?.avgWaitMinutes ?? 18}m`}
          tone="warning"
        />
      </div>

      {error ? (
        <div className="mb-6 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
          Appointment metrics could not be loaded. Showing fallback values.
        </div>
      ) : null}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Section title="Book New Appointment" className="lg:col-span-3">
          {/* stepper */}
          <div className="flex items-center gap-2 mb-6 text-xs">
            {[
              "Select Doctor & Type",
              "Select Date & Time",
              "Patient Details",
              "Confirm",
            ].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center font-semibold ${i === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                >
                  {i + 1}
                </div>
                <span
                  className={
                    i === 0
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  }
                >
                  {s}
                </span>
                {i < 3 && <div className="w-8 h-px bg-border" />}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 border rounded-lg overflow-hidden">
              <input
                placeholder="Search doctor..."
                className="w-full px-3 py-2 border-b text-sm focus:outline-none"
              />
              <div className="max-h-[500px] overflow-y-auto">
                {users.map((d, i) => (
                  <button
                    key={d.id}
                    onClick={() => setDoc(i)}
                    className={`w-full text-left p-3 border-b last:border-0 hover:bg-muted ${i === selectedDoc ? "bg-primary/5 border-l-4 border-l-primary" : ""}`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-xs font-semibold">
                        {/* {d.n.split(" ")[1][0]} */}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold truncate">
                          {d.profile.firstName} {d.profile.lastName}
                        </div>
                        <div className="text-[11px] text-muted-foreground">
                          {d.profile.firstName}
                        </div>
                      </div>
                      <span
                        className={`text-[9px] px-1.5 py-0.5 rounded ${d.isActive === true ? "bg-success/15 text-success" : "bg-warning/20 text-warning-foreground"}`}
                      >
                        {d.isActive ? "Available" : ""}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="col-span-2 space-y-4">
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {doctors[selectedDoc].n.split(" ")[1][0]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">
                      {doctors[selectedDoc].n}
                    </div>
                    <Star className="w-3 h-3 fill-warning text-warning" />
                    <span className="text-xs">
                      {doctors[selectedDoc].rating}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    MBBS, MD ({doctors[selectedDoc].s})
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {doctors[selectedDoc].s} • {doctors[selectedDoc].exp}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setMode("physical")}
                    className={`px-3 py-2 rounded-lg text-xs border ${mode === "physical" ? "bg-primary/10 border-primary text-primary" : ""}`}
                  >
                    Physical Visit
                  </button>
                  <button
                    onClick={() => setMode("tele")}
                    className={`px-3 py-2 rounded-lg text-xs border ${mode === "tele" ? "bg-primary/10 border-primary text-primary" : ""}`}
                  >
                    Teleconsultation
                  </button>
                </div>
              </div>

              <div className="flex gap-2 overflow-x-auto">
                {days.map((d, i) => (
                  <button
                    key={d.n}
                    onClick={() => setDay(i)}
                    className={`min-w-[70px] p-2 rounded-lg border text-center ${i === selectedDay ? "bg-primary text-primary-foreground border-primary" : ""}`}
                  >
                    <div className="text-xs">{d.d}</div>
                    <div className="text-sm font-semibold">{d.n}</div>
                  </button>
                ))}
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-semibold">Select Time Slot</div>
                  <div className="flex gap-3 text-[10px] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-success" />
                      Available
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-muted-foreground" />
                      Booked
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Selected
                    </span>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mb-2">
                  Morning (10:00 AM - 02:00 PM)
                </div>
                <div className="grid grid-cols-5 gap-2 mb-4">
                  {slotsMorning.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSlot(s)}
                      className={`py-2 rounded-lg border text-xs ${selectedSlot === s ? "bg-primary text-primary-foreground border-primary" : "border-success/30 text-success hover:bg-success/5"}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground mb-2">
                  Afternoon (02:00 PM - 06:00 PM)
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {slotsAfternoon.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSlot(s)}
                      className={`py-2 rounded-lg border text-xs ${selectedSlot === s ? "bg-primary text-primary-foreground border-primary" : "border-success/30 text-success hover:bg-success/5"}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-2">
            <button className="px-4 py-2 rounded-lg border text-sm">
              Clear Selection
            </button>
            <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
              Continue to Patient Details →
            </button>
          </div>
        </Section>

        <Section title="Booking Summary">
          <div className="space-y-3 text-sm">
            {[
              ["Doctor", doctors[selectedDoc].n],
              ["Speciality", doctors[selectedDoc].s],
              [
                "Type",
                mode === "physical" ? "Physical Visit" : "Teleconsultation",
              ],
              ["Date", `${days[selectedDay].n}, 2025`],
              ["Time", selectedSlot],
              ["Duration", "20 Minutes"],
              ["Fees", "₹800"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">{k}</span>
                <span className="font-medium text-right">{v}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/20 text-xs">
            <div className="font-semibold mb-1">Slot Availability</div>
            Available: 18 (56%) · Booked: 10 (31%) · Blocked: 2 (6%)
          </div>
        </Section>
      </div>
    </>
  );
}
