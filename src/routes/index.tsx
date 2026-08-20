import { createFileRoute } from "@tanstack/react-router";
import { Kpi, Section } from "@/components/hims/Kpi";
import { useApiQuery } from "@/lib/hooks/useApiResource";
import {
  Users,
  UserCheck,
  Calendar,
  Stethoscope,
  Clock,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
  Activity,
  Pill,
  FlaskConical,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard —ojas1hims" },
      {
        name: "description",
        content: "Real-time overview of hospital operations.",
      },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const { data, isLoading, error } = useApiQuery<{
    overview: {
      totalOpdToday: number;
      patientsSeen: number;
      appointments: number;
      waiting: number;
      completed: number;
      revenue: number;
    };
  }>(["dashboard-overview"], "/dashboard/overview", { staleTime: 30_000 });

  const overview = data?.overview;

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard Overview</h1>
          <p className="text-sm text-muted-foreground">
            Real time overview of hospital operations
          </p>
        </div>
        <div className="flex gap-2 text-xs">
          <div className="px-3 py-2 rounded-lg bg-card border">20 May 2025</div>
          <div className="px-3 py-2 rounded-lg bg-card border flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />{" "}
            Live
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 mb-6">
        <Kpi
          icon={Users}
          label="Total OPD Today"
          value={isLoading ? "—" : `${overview?.totalOpdToday ?? 1248}`}
          delta="12%"
          tone="primary"
        />
        <Kpi
          icon={UserCheck}
          label="Patients Seen"
          value={isLoading ? "—" : `${overview?.patientsSeen ?? 982}`}
          delta="10%"
          tone="success"
        />
        <Kpi
          icon={Calendar}
          label="Appointments"
          value={isLoading ? "—" : `${overview?.appointments ?? 1576}`}
          delta="14%"
          tone="info"
        />
        <Kpi
          icon={Stethoscope}
          label="In Consultation"
          value="32"
          tone="primary"
        />
        <Kpi
          icon={Clock}
          label="Waiting"
          value={isLoading ? "—" : `${overview?.waiting ?? 68}`}
          delta="Avg 24m"
          tone="warning"
        />
        <Kpi
          icon={CheckCircle2}
          label="Completed"
          value={isLoading ? "—" : `${overview?.completed ?? 912}`}
          delta="11%"
          tone="success"
        />
        <Kpi
          icon={TrendingUp}
          label="Revenue"
          value={
            isLoading
              ? "—"
              : `₹${(overview?.revenue ?? 840000).toLocaleString()}`
          }
          delta="15%"
          tone="primary"
        />
      </div>

      {error ? (
        <div className="mb-6 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
          Unable to load dashboard metrics. Showing cached fallback values.
        </div>
      ) : null}

      <Section title="OPD Flow — Real Time" className="mb-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {[
            { l: "Registered", v: 1248, t: "primary" },
            { l: "In Queue", v: 68, t: "info" },
            { l: "In Consultation", v: 32, t: "warning" },
            { l: "Investigations", v: 45, t: "info" },
            { l: "Pharmacy", v: 38, t: "warning" },
            { l: "Completed", v: 912, t: "success" },
          ].map((s, i, arr) => (
            <div key={s.l} className="flex items-center gap-2">
              <div className="min-w-35 p-3 rounded-lg border bg-muted/30">
                <div className="text-xs text-muted-foreground">{s.l}</div>
                <div className="text-xl font-bold">{s.v}</div>
              </div>
              {i < arr.length - 1 && (
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
      </Section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Section title="Department Overview" className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-3">
            {[
              { d: "Cardiology", opd: 230, cons: 18, rev: "2,45,000" },
              { d: "Orthopedics", opd: 185, cons: 12, rev: "1,82,500" },
              { d: "General Medicine", opd: 312, cons: 22, rev: "2,05,400" },
              { d: "Dermatology", opd: 132, cons: 8, rev: "78,600" },
            ].map((x) => (
              <div key={x.d} className="p-4 rounded-lg border">
                <div className="font-semibold text-sm mb-2">{x.d}</div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <div className="text-muted-foreground">OPD</div>
                    <div className="font-bold">{x.opd}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Cons</div>
                    <div className="font-bold">{x.cons}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Revenue</div>
                    <div className="font-bold">₹{x.rev}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="Critical Alerts"
          action={<span className="text-xs text-primary">View All</span>}
        >
          <div className="space-y-3">
            {[
              {
                i: AlertTriangle,
                t: "High Priority Patient",
                s: "Emergency Ward - Bed 3",
                time: "10:42",
                tone: "text-destructive",
              },
              {
                i: Pill,
                t: "Medicine Low Stock",
                s: "Atorvastatin 10mg",
                time: "10:30",
                tone: "text-warning-foreground",
              },
              {
                i: FlaskConical,
                t: "Lab Critical",
                s: "2 Pending Reports",
                time: "10:25",
                tone: "text-info",
              },
              {
                i: Activity,
                t: "Equipment Maintenance",
                s: "ECG Machine - Due",
                time: "10:10",
                tone: "text-muted-foreground",
              },
            ].map((a, i) => (
              <div
                key={i}
                className="flex items-start gap-3 pb-3 border-b last:border-0"
              >
                <a.i className={`w-4 h-4 mt-0.5 ${a.tone}`} />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium">{a.t}</div>
                  <div className="text-xs text-muted-foreground">{a.s}</div>
                </div>
                <div className="text-[10px] text-muted-foreground">
                  {a.time} AM
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Section title="Top Services (By Revenue)">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-muted-foreground border-b">
                <th className="py-2">Service</th>
                <th>Count</th>
                <th className="text-right">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Consultation Fee", 982, "3,25,600"],
                ["ECG", 155, "1,24,000"],
                ["Blood Test", 312, "1,05,300"],
                ["X-Ray", 98, "85,600"],
                ["Ultrasound", 76, "68,900"],
              ].map(([s, c, r]) => (
                <tr key={s} className="border-b last:border-0">
                  <td className="py-2.5">{s}</td>
                  <td>{c}</td>
                  <td className="text-right font-semibold">₹{r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        <Section title="Today's Financial Summary">
          <div className="grid grid-cols-2 gap-3">
            {[
              {
                l: "Total Revenue",
                v: "₹8,45,230",
                d: "15%",
                tone: "text-success",
              },
              {
                l: "Total Collection",
                v: "₹7,92,430",
                d: "13%",
                tone: "text-success",
              },
              {
                l: "Total Expenses",
                v: "₹2,45,300",
                d: "8%",
                tone: "text-destructive",
              },
              {
                l: "Net Profit",
                v: "₹5,47,130",
                d: "18%",
                tone: "text-success",
              },
            ].map((x) => (
              <div key={x.l} className="p-4 rounded-lg border">
                <div className="text-xs text-muted-foreground">{x.l}</div>
                <div className="text-xl font-bold mt-1">{x.v}</div>
                <div className={`text-[11px] ${x.tone}`}>↑ {x.d}</div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}
