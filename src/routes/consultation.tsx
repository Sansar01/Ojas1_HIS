import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import { Section } from "@/components/hims/Kpi";
import { FileText, FlaskConical, Stethoscope, Pill, Calendar, StickyNote } from "lucide-react";

export const Route = createFileRoute("/consultation")({
  head: () => ({ meta: [{ title: "Consultation — Ojas1Cloud HIMS" }] }),
  component: Consultation,
});

function Consultation() {
  const meds = [
    { n: "Tab. Ecosprin AV 75 mg", dose: "1-0-1 After Food", days: "10 Days" },
    { n: "Tab. Telma 40 mg", dose: "1-0-0 After Food", days: "30 Days" },
    { n: "Tab. Atorva 10 mg", dose: "0-0-1 After Food", days: "30 Days" },
    { n: "Tab. Metformin 500 mg", dose: "1-0-1 After Food", days: "30 Days" },
  ];

  return (
    <AppLayout>
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Doctor Consultation</h1>
          <p className="text-sm text-muted-foreground">Complete OPD consultation and prescription</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-lg bg-warning text-warning-foreground text-sm font-medium shadow-sm hover:opacity-90">
            Review
          </button>
          <button className="px-4 py-2 rounded-lg bg-success text-success-foreground text-sm font-medium shadow-sm hover:opacity-90">
            Check-out
          </button>
        </div>
      </div>

      <div className="bg-card border rounded-xl p-5 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary">RP</div>
          <div>
            <div className="flex items-center gap-2"><h2 className="text-lg font-bold">Ramesh Patel</h2><span className="text-[10px] px-1.5 py-0.5 bg-primary/10 text-primary rounded font-mono">OPD123456</span></div>
            <div className="text-xs text-muted-foreground">58Y Male · A+ · 9876543210 · ABDM: XJHGF2345K</div>
          </div>
          <div className="ml-auto flex gap-2 text-xs">
            <span className="px-2 py-1 rounded bg-destructive/10 text-destructive">Allergy: Penicillin</span>
            <span className="px-2 py-1 rounded bg-info/10 text-info">Insurance: Star Health</span>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-3 mt-4">
          {[["BP","140/90","mmHg"],["Pulse","98","/min"],["Temp","99.1","°F"],["SpO₂","98","%"],["Weight","78","kg"],["BMI","26.3","kg/m²"]].map(([l,v,u]) => (
            <div key={l} className="p-2 rounded border text-xs">
              <div className="text-muted-foreground">{l}</div>
              <div className="font-bold text-base">{v} <span className="text-[10px] text-muted-foreground">{u}</span></div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 border-b mb-6 text-sm overflow-x-auto">
        {[
          { i: Stethoscope, l: "Consultation", a: true },
          { i: FileText, l: "History" },
          { i: FileText, l: "Examination" },
          { i: FlaskConical, l: "Investigations" },
          { i: Pill, l: "Prescription" },
          { i: StickyNote, l: "Advice" },
          { i: Calendar, l: "Follow Up" },
        ].map((t) => (
          <button key={t.l} className={`flex items-center gap-2 px-4 py-2 border-b-2 ${t.a ? "border-primary text-primary font-medium" : "border-transparent text-muted-foreground"}`}>
            <t.i className="w-4 h-4" /> {t.l}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Section title="🩺 Chief Complaints & History">
          <textarea className="w-full p-2 border rounded-lg text-sm" rows={4}
            defaultValue={"Chest pain on exertion since 2 days\nBreathlessness since 1 day"} />
          <div className="mt-4 text-sm space-y-2">
            <div className="font-semibold">History</div>
            <div className="text-xs">Hypertension since 5 years</div>
            <div className="text-xs">Diabetes Mellitus Type 2 since 3 years</div>
          </div>
          <div className="mt-4 text-sm space-y-2">
            <div className="font-semibold">Examination</div>
            <div className="text-xs">CVS: S1 S2 normal, No murmur</div>
            <div className="text-xs">RS: Air entry equal both sides</div>
            <div className="text-xs">P/A: Soft, Non tender</div>
          </div>
          <div className="mt-4 text-sm">
            <div className="font-semibold">Diagnosis</div>
            <div className="text-xs mt-1">I20.8 — Other forms of Angina Pectoris</div>
            <div className="text-xs">I10 — Essential (primary) hypertension</div>
          </div>
        </Section>

        <Section title="💊 Prescription" action={<button className="text-xs text-primary">+ Favorites</button>}>
          <input placeholder="Search medicine..." className="w-full px-3 py-2 border rounded-lg text-sm mb-3" />
          <div className="space-y-2">
            {meds.map((m) => (
              <div key={m.n} className="p-3 border rounded-lg">
                <div className="flex justify-between">
                  <div className="font-semibold text-sm">{m.n}</div>
                  <span className="text-xs text-muted-foreground">{m.days}</span>
                </div>
                <div className="text-xs text-muted-foreground">{m.dose}</div>
              </div>
            ))}
            <button className="w-full py-2 border-2 border-dashed rounded-lg text-sm text-primary">+ Add Medicine</button>
          </div>
          <div className="mt-4 flex gap-2">
            <button className="flex-1 py-2 border rounded-lg text-sm">Save Draft</button>
            <button className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">Save & Print (F2)</button>
          </div>
        </Section>

        <Section title="🧪 Investigations & Advice">
          <div className="text-xs font-semibold mb-2">Investigations</div>
          <div className="space-y-1 text-sm">
            {["CBC (Complete Blood Count)","Lipid Profile","ECG","TMT"].map((t) => (
              <div key={t} className="px-3 py-2 border rounded-lg">{t}</div>
            ))}
            <button className="w-full py-2 border-2 border-dashed rounded-lg text-sm text-primary mt-1">+ Add Test</button>
          </div>
          <div className="mt-5">
            <div className="text-xs font-semibold mb-2">Advice</div>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>Avoid oily food</li>
              <li>Daily 30 min walking</li>
              <li>Monitor BP daily</li>
              <li>Follow low salt diet</li>
            </ul>
          </div>
          <div className="mt-5">
            <div className="text-xs font-semibold mb-2">Follow Up</div>
            <div className="flex gap-2">
              <select className="flex-1 border rounded-lg px-2 py-2 text-sm"><option>After 7 Days</option></select>
              <input type="date" defaultValue="2025-05-27" className="flex-1 border rounded-lg px-2 py-2 text-sm" />
            </div>
          </div>
        </Section>
      </div>
    </AppLayout>
  );
}
