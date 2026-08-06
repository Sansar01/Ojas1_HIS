import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Section } from "@/components/hims/Kpi";
import { Heart, Activity, Thermometer, Wind, Weight, Ruler, AlertCircle, Phone, LogIn, FileText } from "lucide-react";

export const Route = createFileRoute("/queue")({
  head: () => ({ meta: [{ title: "OPD Examination — Ojas1Cloud HIMS" }] }),
  component: Examination,
});

type QItem = { id: string; n: string; age: string; chief: string; status: string; arrived: string; active?: boolean };

const waitingList: QItem[] = [
  { id: "A-1025", n: "Sunita Devi", age: "45Y Female", chief: "Fever, Body Ache", status: "Waiting", arrived: "15 min" },
  { id: "A-1026", n: "Imran Khan", age: "32Y Male", chief: "Cough, Cold", status: "Waiting", arrived: "20 min" },
  { id: "A-1027", n: "Meena Kumari", age: "28Y Female", chief: "Back Pain", status: "Waiting", arrived: "25 min" },
  { id: "A-1028", n: "Ravi Verma", age: "60Y Male", chief: "Diabetes Followup", status: "Waiting", arrived: "30 min" },
];

const vitalsDoneList: QItem[] = [
  { id: "A-1030", n: "Karan Malhotra", age: "42Y Male", chief: "Headache, Dizziness", status: "Vitals Done", arrived: "10 min" },
  { id: "A-1031", n: "Deepa Nair", age: "36Y Female", chief: "Throat Pain", status: "Vitals Done", arrived: "12 min" },
  { id: "A-1032", n: "Farhan Qureshi", age: "29Y Male", chief: "Knee Swelling", status: "Vitals Done", arrived: "18 min" },
];

const readyForDoctorList: QItem[] = [
  { id: "A-1024", n: "Ramesh Patel", age: "58Y Male", chief: "Chest pain, Breathlessness", status: "Ready for Doctor", arrived: "10:05 AM", active: true },
  { id: "A-1029", n: "Neha Gupta", age: "50Y Female", chief: "Palpitations", status: "Ready for Doctor", arrived: "08:50 AM" },
];

const consultationList: QItem[] = [
  { id: "A-1019", n: "Anita Sharma", age: "52Y Female", chief: "Lab Report Review — Lipid", status: "In Consultation", arrived: "09:20 AM" },
  { id: "A-1021", n: "Vikram Rao", age: "40Y Male", chief: "X-Ray Review — Chest", status: "In Consultation", arrived: "09:45 AM" },
  { id: "A-1022", n: "Priya Singh", age: "35Y Female", chief: "USG Report Review", status: "In Consultation", arrived: "10:00 AM" },
];

const vitals = [
  { i: Heart, l: "BP", v: "140/90", u: "mmHg", tone: "text-destructive" },
  { i: Activity, l: "Pulse", v: "98", u: "bpm" },
  { i: Thermometer, l: "Temp", v: "99.1", u: "°F" },
  { i: Wind, l: "SpO₂", v: "98", u: "%" },
  { i: Activity, l: "Resp. Rate", v: "20", u: "/min" },
  { i: Weight, l: "Weight", v: "78", u: "kg" },
  { i: Ruler, l: "Height", v: "172", u: "cm" },
  { i: Activity, l: "BMI", v: "26.3", u: "kg/m²" },
];

function Examination() {
  const [tab, setTab] = useState<"waiting" | "vitalsDone" | "readyForDoctor" | "consultation">("waiting");
  const lists: Record<typeof tab, QItem[]> = {
    waiting: waitingList,
    vitalsDone: vitalsDoneList,
    readyForDoctor: readyForDoctorList,
    consultation: consultationList,
  };
  const tabs: { k: typeof tab; label: string; count: number }[] = [
    { k: "waiting", label: "Waiting", count: waitingList.length },
    { k: "vitalsDone", label: "Vitals Done", count: vitalsDoneList.length },
    { k: "readyForDoctor", label: "Ready for Doctor", count: readyForDoctorList.length },
    { k: "consultation", label: "Consultation", count: consultationList.length },
  ];

  return (
    <AppLayout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">OPD Examination Room</h1>
          <p className="text-sm text-muted-foreground">Nursing Assessment Before Consultation</p>
        </div>
        <div className="flex gap-2 text-xs">
          <div className="px-3 py-2 rounded-lg bg-success/10 text-success flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success" /> Under Assessment
          </div>
          <div className="px-3 py-2 rounded-lg border">Avg 06:45 min</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Section title="Patients Queue">
          <div className="flex gap-1 mb-3 p-1 bg-muted rounded-lg">
            {tabs.map((t) => (
              <button
                key={t.k}
                onClick={() => setTab(t.k)}
                className={`flex-1 text-[11px] px-2 py-1.5 rounded-md font-medium transition-colors ${
                  tab === t.k ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label} ({t.count})
              </button>
            ))}
          </div>
          <div className="space-y-2 max-h-[560px] overflow-y-auto pr-1">
            {lists[tab].map((q) => (
              <div key={q.id} className={`p-3 rounded-lg border ${q.active ? "border-primary bg-primary/5" : ""}`}>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-1.5 py-0.5 bg-muted rounded">{q.id}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                    q.status === "Ready for Doctor" ? "bg-success/15 text-success"
                    : q.status === "Vitals Done" ? "bg-warning/20 text-warning-foreground"
                    : q.status === "In Consultation" ? "bg-info/15 text-info"
                    : "bg-muted-foreground/10 text-muted-foreground"
                  }`}>
                    {q.status}
                  </span>
                </div>
                <div className="font-semibold text-sm mt-1">{q.n}</div>
                <div className="text-xs text-muted-foreground">{q.age}</div>
                <div className="text-xs mt-1">{q.chief}</div>
                <div className="text-[10px] text-muted-foreground mt-1">Arrived / Waiting: {q.arrived}</div>
                <div className="flex gap-2 mt-2">
                  <button className="flex-1 flex items-center justify-center gap-1 text-[11px] px-2 py-1.5 rounded-md border hover:bg-muted">
                    <Phone className="w-3 h-3" /> Call
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1 text-[11px] px-2 py-1.5 rounded-md bg-primary text-primary-foreground hover:opacity-90">
                    <LogIn className="w-3 h-3" /> Check-in
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card border rounded-xl p-5">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary">RP</div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold">Ramesh Patel</h2>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 bg-primary/10 text-primary rounded">A-1024</span>
                </div>
                <div className="grid grid-cols-4 gap-4 text-xs mt-2">
                  <div><div className="text-muted-foreground">Age/Gender</div><div className="font-semibold">58Y, Male</div></div>
                  <div><div className="text-muted-foreground">Mobile</div><div className="font-semibold">9876543210</div></div>
                  <div><div className="text-muted-foreground">Blood</div><div className="font-semibold">A+</div></div>
                  <div><div className="text-muted-foreground">ABDM ID</div><div className="font-semibold">XJHGF2345K</div></div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs mb-6">
              {["Registration", "Vitals & Assessment", "Medical History", "Nursing Notes", "Ready for Doctor"].map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-semibold ${i === 0 ? "bg-success text-success-foreground" : i === 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{i + 1}</div>
                  <span className={i <= 1 ? "font-medium" : "text-muted-foreground"}>{s}</span>
                  {i < 4 && <div className="w-6 h-px bg-border" />}
                </div>
              ))}
            </div>

            <h3 className="font-semibold mb-3">🩺 Nursing Assessment</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs text-muted-foreground">Chief Complaint</label>
                <textarea className="w-full mt-1 p-2 border rounded-lg text-sm" rows={3}
                  defaultValue="Chest pain on exertion since 2 days&#10;Breathlessness since 1 day" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Pain Assessment (0-10)</label>
                <div className="flex gap-1 mt-1">
                  {[0,1,2,3,4,5,6,7,8,9,10].map((n) => (
                    <button key={n} className={`w-8 h-8 rounded border text-xs ${n === 6 ? "bg-primary text-primary-foreground" : ""}`}>{n}</button>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground mt-1">😐 Moderate Pain</div>
              </div>
            </div>

            <h3 className="font-semibold mb-3">Vital Signs</h3>
            <div className="grid grid-cols-4 gap-3 mb-4">
              {vitals.map((v) => (
                <div key={v.l} className="p-3 border rounded-lg">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <v.i className={`w-3 h-3 ${v.tone ?? ""}`} /> {v.l}
                  </div>
                  <div className={`text-lg font-bold ${v.tone ?? ""}`}>{v.v}</div>
                  <div className="text-[10px] text-muted-foreground">{v.u}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-2">
              <button className="px-4 py-2 rounded-lg border text-sm">Save as Draft</button>
              <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
                ✓ Mark as Ready for Doctor
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Section title="Risk & Alerts">
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                <div className="flex items-center gap-2 text-destructive text-sm font-semibold">
                  <AlertCircle className="w-4 h-4" /> High BP
                </div>
                <div className="text-xs mt-1">140/90 mmHg</div>
              </div>
              <div className="p-3 rounded-lg bg-warning/15 border border-warning/30">
                <div className="text-sm font-semibold">Low Grade Fever</div>
                <div className="text-xs">99.1 °F</div>
              </div>
              <div className="p-3 rounded-lg bg-info/10 border border-info/20">
                <div className="text-sm font-semibold">Allergy</div>
                <div className="text-xs">Penicillin</div>
              </div>
            </div>
          </Section>

          <Section title="Previous Visit History — Ramesh Patel">
            <div className="space-y-3">
              {[
                { d: "12 May 2025", dr: "Dr. Arjun Mehta — Cardiology", dx: "Angina Pectoris, HTN", rx: "Ecosprin AV 75, Telma 40", note: "BP 138/88, follow-up in 2 weeks" },
                { d: "05 Apr 2025", dr: "Dr. Neha Kapoor — Pathology", dx: "Lab: CBC, Lipid Profile", rx: "LDL 168 mg/dL (High)", note: "Advised statin therapy" },
                { d: "18 Mar 2025", dr: "Dr. Arjun Mehta — Cardiology", dx: "Essential Hypertension", rx: "5 Medicines dispensed", note: "Diet & exercise counselling" },
                { d: "02 Feb 2025", dr: "Dr. S. Iyer — General Med.", dx: "Viral Fever", rx: "Paracetamol, Rest 3 days", note: "Recovered fully" },
              ].map((v) => (
                <div key={v.d} className="p-3 rounded-lg border hover:border-primary/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold">{v.d}</div>
                    <button className="flex items-center gap-1 text-[10px] text-primary hover:underline">
                      <FileText className="w-3 h-3" /> View
                    </button>
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">{v.dr}</div>
                  <div className="text-xs mt-2"><span className="text-muted-foreground">Dx:</span> {v.dx}</div>
                  <div className="text-xs"><span className="text-muted-foreground">Rx:</span> {v.rx}</div>
                  <div className="text-[10px] text-muted-foreground mt-1 italic">{v.note}</div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </AppLayout>
  );
}
