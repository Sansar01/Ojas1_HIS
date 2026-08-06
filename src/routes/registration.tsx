import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import { Section } from "@/components/hims/Kpi";
import { Kpi } from "@/components/hims/Kpi";
import { useApiQuery } from "@/lib/hooks/useApiResource";
import { UserPlus, Users, CheckCircle2, Clock, Camera, Fingerprint, IdCard, QrCode } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/registration")({
  head: () => ({ meta: [{ title: "Patient Registration — Ojas1Cloud HIMS" }] }),
  component: Registration,
});

const recent = [
  ["OPD123460", "Ravi Verma", "60Y Male", "10:32 AM", "Diabetes OPD"],
  ["OPD123459", "Meena Kumari", "28Y Female", "10:18 AM", "Gynecology"],
  ["OPD123458", "Imran Khan", "32Y Male", "10:04 AM", "Orthopedics"],
  ["OPD123457", "Sunita Devi", "45Y Female", "09:52 AM", "General Med"],
  ["OPD123456", "Ramesh Patel", "58Y Male", "09:40 AM", "Cardiology"],
];

function Registration() {
  const [visitType, setVisitType] = useState<"new" | "revisit" | "emergency">("new");
  const [payType, setPayType] = useState<"self" | "insurance" | "corporate">("self");
  const { data, isLoading, error } = useApiQuery<{ registrationMetrics: { registeredToday: number; newPatients: number; revisits: number; avgRegTimeMinutes: number } }>(["registration-metrics"], "/registration/metrics", { staleTime: 30_000 });

  const metrics = data?.registrationMetrics;

  return (
    <AppLayout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Patient Registration</h1>
          <p className="text-sm text-muted-foreground">Register new patient or search existing UHID / ABHA</p>
        </div>
        <div className="flex gap-2 text-xs">
          <button className="px-3 py-2 rounded-lg border flex items-center gap-2"><QrCode className="w-4 h-4"/> Scan ABHA</button>
          <button className="px-3 py-2 rounded-lg border flex items-center gap-2"><Fingerprint className="w-4 h-4"/> Biometric</button>
          <button className="px-3 py-2 rounded-lg border flex items-center gap-2"><IdCard className="w-4 h-4"/> Aadhaar</button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <Kpi icon={UserPlus} label="Registered Today" value={isLoading ? "—" : `${metrics?.registeredToday ?? 128}`} delta="8%" tone="primary" />
        <Kpi icon={Users} label="New Patients" value={isLoading ? "—" : `${metrics?.newPatients ?? 42}`} delta="12%" tone="info" />
        <Kpi icon={CheckCircle2} label="Revisits" value={isLoading ? "—" : `${metrics?.revisits ?? 86}`} delta="6%" tone="success" />
        <Kpi icon={Clock} label="Avg Reg. Time" value={isLoading ? "—" : `${metrics?.avgRegTimeMinutes ?? 135} min`} tone="warning" />
      </div>

      {error ? <div className="mb-6 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">Registration metrics could not be loaded. Using fallback values.</div> : null}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Section title="New Patient Registration" className="lg:col-span-3">
          {/* Search / lookup */}
          <div className="mb-5 p-3 rounded-lg bg-primary/5 border border-primary/20 flex gap-2">
            <input placeholder="Search by Mobile / UHID / ABHA ID / Aadhaar…" className="flex-1 px-3 py-2 rounded-lg border bg-card text-sm" />
            <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm">Search</button>
            <button className="px-4 py-2 rounded-lg border text-sm">Clear</button>
          </div>

          {/* Photo + basic */}
          <div className="grid grid-cols-4 gap-4 mb-5">
            <div className="col-span-1 flex flex-col items-center gap-2">
              <div className="w-full aspect-square rounded-lg border-2 border-dashed flex flex-col items-center justify-center text-muted-foreground">
                <Camera className="w-8 h-8 mb-2" />
                <div className="text-xs">Capture Photo</div>
              </div>
              <button className="text-xs text-primary">Upload from device</button>
            </div>
            <div className="col-span-3 grid grid-cols-3 gap-3">
              <Field label="Title"><select className="w-full px-2 py-2 border rounded-lg text-sm"><option>Mr.</option><option>Mrs.</option><option>Ms.</option><option>Dr.</option><option>Master</option></select></Field>
              <Field label="First Name *"><input className="w-full px-2 py-2 border rounded-lg text-sm" placeholder="First name" /></Field>
              <Field label="Last Name *"><input className="w-full px-2 py-2 border rounded-lg text-sm" placeholder="Last name" /></Field>
              <Field label="Date of Birth"><input type="date" className="w-full px-2 py-2 border rounded-lg text-sm" /></Field>
              <Field label="Age"><input className="w-full px-2 py-2 border rounded-lg text-sm" placeholder="Years" /></Field>
              <Field label="Gender *">
                <div className="flex gap-2">
                  {["Male","Female","Other"].map((g) => (
                    <button key={g} className="flex-1 px-2 py-2 border rounded-lg text-xs hover:bg-muted">{g}</button>
                  ))}
                </div>
              </Field>
              <Field label="Mobile *"><input className="w-full px-2 py-2 border rounded-lg text-sm" placeholder="+91 98xxxxxxxx" /></Field>
              <Field label="Alt Mobile"><input className="w-full px-2 py-2 border rounded-lg text-sm" /></Field>
              <Field label="Email"><input className="w-full px-2 py-2 border rounded-lg text-sm" placeholder="name@email.com" /></Field>
              <Field label="Blood Group">
                <select className="w-full px-2 py-2 border rounded-lg text-sm">
                  {["A+","A-","B+","B-","O+","O-","AB+","AB-"].map(b => <option key={b}>{b}</option>)}
                </select>
              </Field>
              <Field label="Marital Status"><select className="w-full px-2 py-2 border rounded-lg text-sm"><option>Single</option><option>Married</option><option>Widowed</option></select></Field>
              <Field label="Occupation"><input className="w-full px-2 py-2 border rounded-lg text-sm" /></Field>
            </div>
          </div>

          {/* IDs */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            <Field label="ABHA ID / Health ID"><input className="w-full px-2 py-2 border rounded-lg text-sm" placeholder="14-digit ABHA" /></Field>
            <Field label="Aadhaar Number"><input className="w-full px-2 py-2 border rounded-lg text-sm" placeholder="xxxx-xxxx-xxxx" /></Field>
            <Field label="PAN / Govt ID"><input className="w-full px-2 py-2 border rounded-lg text-sm" /></Field>
          </div>

          {/* Address */}
          <div className="grid grid-cols-4 gap-3 mb-5">
            <Field label="Address Line 1" className="col-span-2"><input className="w-full px-2 py-2 border rounded-lg text-sm" /></Field>
            <Field label="Address Line 2" className="col-span-2"><input className="w-full px-2 py-2 border rounded-lg text-sm" /></Field>
            <Field label="City"><input className="w-full px-2 py-2 border rounded-lg text-sm" /></Field>
            <Field label="State"><input className="w-full px-2 py-2 border rounded-lg text-sm" /></Field>
            <Field label="Pincode"><input className="w-full px-2 py-2 border rounded-lg text-sm" /></Field>
            <Field label="Country"><input defaultValue="India" className="w-full px-2 py-2 border rounded-lg text-sm" /></Field>
          </div>

          {/* Visit / Payment */}
          <div className="grid grid-cols-2 gap-6 mb-5">
            <div>
              <div className="text-sm font-semibold mb-2">Visit Type</div>
              <div className="grid grid-cols-3 gap-2">
                {(["new","revisit","emergency"] as const).map((v) => (
                  <button key={v} onClick={() => setVisitType(v)}
                    className={`px-3 py-2 border rounded-lg text-xs capitalize ${visitType === v ? "bg-primary text-primary-foreground border-primary" : ""}`}>
                    {v}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 mt-3">
                <Field label="Department"><select className="w-full px-2 py-2 border rounded-lg text-sm"><option>Cardiology</option><option>Orthopedics</option><option>General Medicine</option><option>Dermatology</option><option>Gynecology</option></select></Field>
                <Field label="Consulting Doctor"><select className="w-full px-2 py-2 border rounded-lg text-sm"><option>Dr. Arjun Mehta</option><option>Dr. Neha Sharma</option><option>Dr. Rajeev Kumar</option></select></Field>
                <Field label="Referred By"><input className="w-full px-2 py-2 border rounded-lg text-sm" placeholder="Self / Doctor / Hospital" /></Field>
                <Field label="Chief Complaint"><input className="w-full px-2 py-2 border rounded-lg text-sm" /></Field>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold mb-2">Payment Type</div>
              <div className="grid grid-cols-3 gap-2">
                {(["self","insurance","corporate"] as const).map((p) => (
                  <button key={p} onClick={() => setPayType(p)}
                    className={`px-3 py-2 border rounded-lg text-xs capitalize ${payType === p ? "bg-primary text-primary-foreground border-primary" : ""}`}>
                    {p === "self" ? "Self Pay" : p}
                  </button>
                ))}
              </div>
              {payType === "insurance" && (
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <Field label="Insurer"><select className="w-full px-2 py-2 border rounded-lg text-sm"><option>Star Health</option><option>Aditya Birla</option><option>HDFC ERGO</option><option>Max Bupa</option></select></Field>
                  <Field label="Policy No."><input className="w-full px-2 py-2 border rounded-lg text-sm" /></Field>
                  <Field label="Coverage"><select className="w-full px-2 py-2 border rounded-lg text-sm"><option>Cashless</option><option>Reimbursement</option></select></Field>
                  <Field label="Sum Insured"><input className="w-full px-2 py-2 border rounded-lg text-sm" placeholder="₹" /></Field>
                </div>
              )}
              {payType === "corporate" && (
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <Field label="Company"><input className="w-full px-2 py-2 border rounded-lg text-sm" /></Field>
                  <Field label="Employee ID"><input className="w-full px-2 py-2 border rounded-lg text-sm" /></Field>
                </div>
              )}
              {payType === "self" && (
                <div className="mt-3 p-3 rounded-lg bg-muted/40 text-xs text-muted-foreground">
                  Patient will pay directly. Consultation fee will apply at billing.
                </div>
              )}

              <div className="mt-4 text-sm font-semibold mb-2">Emergency Contact</div>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Name"><input className="w-full px-2 py-2 border rounded-lg text-sm" /></Field>
                <Field label="Relation"><input className="w-full px-2 py-2 border rounded-lg text-sm" /></Field>
                <Field label="Mobile"><input className="w-full px-2 py-2 border rounded-lg text-sm" /></Field>
                <Field label="Allergy / Notes"><input className="w-full px-2 py-2 border rounded-lg text-sm" placeholder="e.g. Penicillin" /></Field>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <label className="flex items-center gap-2 text-xs text-muted-foreground">
              <input type="checkbox" className="rounded" defaultChecked /> Send SMS / WhatsApp with UHID & token
            </label>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg border text-sm">Clear</button>
              <button className="px-4 py-2 rounded-lg border text-sm">Save as Draft</button>
              <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
                Register & Generate Token
              </button>
            </div>
          </div>
        </Section>

        <Section title="Recent Registrations">
          <div className="space-y-2">
            {recent.map((r) => (
              <div key={r[0]} className="p-3 border rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono px-1.5 py-0.5 bg-muted rounded">{r[0]}</span>
                  <span className="text-[10px] text-muted-foreground">{r[3]}</span>
                </div>
                <div className="font-semibold text-sm mt-1">{r[1]}</div>
                <div className="text-xs text-muted-foreground">{r[2]} · {r[4]}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-lg bg-info/10 border border-info/20 text-xs">
            <div className="font-semibold mb-1">💡 Quick Tip</div>
            Use ABHA / Mobile lookup first to avoid creating duplicate UHIDs for existing patients.
          </div>
        </Section>
      </div>
    </AppLayout>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label className="text-[11px] text-muted-foreground">{label}</label>
      <div className="mt-1">{children}</div>
    </div>
  );
}
