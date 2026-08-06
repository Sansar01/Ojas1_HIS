import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import { UserPlus, Calendar, Receipt, Stethoscope, Pill, FlaskConical, Settings, UserCog, Video, Users, BarChart3, ClipboardList } from "lucide-react";

export const Route = createFileRoute("/configurations")({
  head: () => ({ meta: [{ title: "Get Modules — Ojas1Cloud HIMS" }] }),
  component: Configurations,
});

const modules = [
  { to: "/registration", label: "Registration", desc: "Patient registration & UHID", icon: UserPlus, tone: "text-primary bg-primary/10" },
  { to: "/appointments", label: "Appointment", desc: "Slot booking & scheduling", icon: Calendar, tone: "text-info bg-info/10" },
  { to: "/queue", label: "OPD Examination", desc: "Nursing queue & vitals", icon: ClipboardList, tone: "text-warning-foreground bg-warning/20" },
  { to: "/consultation", label: "Doctor", desc: "Consultation & prescription", icon: Stethoscope, tone: "text-destructive bg-destructive/10" },
  { to: "/teleconsultation", label: "Teleconsultation", desc: "Video consults & remote care", icon: Video, tone: "text-info bg-info/10" },
  { to: "/billing", label: "Billing", desc: "Invoices, payments & refunds", icon: Receipt, tone: "text-success bg-success/10" },
  { to: "/pharmacy", label: "Pharmacy", desc: "Stock & dispensing", icon: Pill, tone: "text-warning-foreground bg-warning/20" },
  { to: "/lab", label: "Lab & Radiology", desc: "Investigations & reports", icon: FlaskConical, tone: "text-info bg-info/10" },
  { to: "/patients", label: "Patients", desc: "Master patient directory", icon: Users, tone: "text-primary bg-primary/10" },
  { to: "/reports", label: "Reports", desc: "Analytics & MIS reports", icon: BarChart3, tone: "text-destructive bg-destructive/10" },
  { to: "/master", label: "Master Configurations", desc: "Doctors, panels, items, rates", icon: Settings, tone: "text-primary bg-primary/10" },
  { to: "/user-management", label: "User Management", desc: "Users, roles & permissions", icon: UserCog, tone: "text-success bg-success/10" },
] as const;

function Configurations() {
  const navigate = useNavigate();

  const selectModule = (to: string) => {
    try {
      localStorage.setItem("selectedModule", to);
      window.dispatchEvent(new Event("selectedModuleChange"));
    } catch {}
    navigate({ to });
  };

  return (
    <AppLayout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Get Modules</h1>
          <p className="text-sm text-muted-foreground">Select a module to open — only that page will appear in the sidebar</p>
        </div>
        <button
          onClick={() => { try { localStorage.removeItem("selectedModule"); window.dispatchEvent(new Event("selectedModuleChange")); } catch {} }}
          className="text-xs px-3 py-1.5 border rounded hover:bg-muted"
        >
          Show all modules in sidebar
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {modules.map((m) => {
          const Icon = m.icon;
          return (
            <button
              key={m.to}
              onClick={() => selectModule(m.to)}
              className="group text-left bg-card border rounded-xl p-5 hover:border-primary hover:shadow-md transition-all"
            >
              <div className={`w-12 h-12 rounded-lg ${m.tone} flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="font-semibold text-sm group-hover:text-primary">{m.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{m.desc}</div>
              <div className="text-xs font-medium text-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                Open module →
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 hidden">
        <Link to="/">home</Link>
      </div>
    </AppLayout>
  );
}
