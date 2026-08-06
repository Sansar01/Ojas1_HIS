import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import { Section, Kpi } from "@/components/hims/Kpi";
import {
  Video, Mic, MicOff, VideoOff, PhoneOff, MessageSquare, Monitor, FileText,
  Paperclip, Send, Users, Clock, Wifi, Volume2, Settings, Camera, Pill,
  FlaskConical, Calendar, Signal,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/teleconsultation")({
  head: () => ({ meta: [{ title: "Teleconsultation — Ojas1Cloud HIMS" }] }),
  component: Teleconsultation,
});

const queue = [
  { id: "TC-201", n: "Anita Roy", age: "34Y Female", complaint: "Fever, throat pain", waiting: "02:15", status: "In Call", active: true },
  { id: "TC-202", n: "Vikram Singh", age: "48Y Male", complaint: "BP follow-up", waiting: "05:40", status: "Waiting" },
  { id: "TC-203", n: "Priya Menon", age: "29Y Female", complaint: "Skin rash", waiting: "08:12", status: "Waiting" },
  { id: "TC-204", n: "Mohammed Iqbal", age: "55Y Male", complaint: "Diabetes review", waiting: "12:05", status: "Waiting" },
  { id: "TC-205", n: "Kavita Nair", age: "41Y Female", complaint: "Migraine", waiting: "15:30", status: "Waiting" },
];

const chat = [
  { who: "patient", msg: "Good morning doctor", t: "10:42 AM" },
  { who: "doctor", msg: "Good morning Anita. How are you feeling today?", t: "10:42 AM" },
  { who: "patient", msg: "Fever since yesterday, 101°F. Sore throat.", t: "10:43 AM" },
  { who: "patient", msg: "Sending my thermometer reading photo.", t: "10:43 AM" },
  { who: "doctor", msg: "Received. Any cough or breathing difficulty?", t: "10:44 AM" },
];

function Teleconsultation() {
  const [muted, setMuted] = useState(false);
  const [video, setVideo] = useState(true);
  const [tab, setTab] = useState<"notes" | "rx" | "invest">("notes");

  return (
    <AppLayout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Teleconsultation</h1>
          <p className="text-sm text-muted-foreground">Live video consultation with patient</p>
        </div>
        <div className="flex gap-2 text-xs">
          <div className="px-3 py-2 rounded-lg bg-success/10 text-success flex items-center gap-2">
            <Signal className="w-3 h-3" /> Connection: Excellent
          </div>
          <div className="px-3 py-2 rounded-lg border flex items-center gap-2">
            <Clock className="w-3 h-3" /> Call: 04:22
          </div>
          <button className="px-3 py-2 rounded-lg border flex items-center gap-2">
            <Settings className="w-3 h-3" /> Settings
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
        <Kpi icon={Video} label="In Call Now" value="1" tone="primary" />
        <Kpi icon={Users} label="Waiting" value="8" tone="warning" />
        <Kpi icon={Clock} label="Avg Wait" value="6 min" tone="info" />
        <Kpi icon={Video} label="Completed Today" value="14" tone="success" />
        <Kpi icon={Wifi} label="No-Shows" value="2" tone="destructive" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Queue */}
        <div className="lg:col-span-3">
          <Section title="Video Queue (9)">
            <div className="space-y-2">
              {queue.map((q) => (
                <div key={q.id} className={`p-3 rounded-lg border ${q.active ? "border-primary bg-primary/5" : ""}`}>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-mono px-1.5 py-0.5 bg-muted rounded">{q.id}</span>
                    <span className={`px-1.5 py-0.5 rounded ${q.status === "In Call" ? "bg-success/15 text-success" : "bg-warning/20 text-warning-foreground"}`}>
                      {q.status}
                    </span>
                  </div>
                  <div className="font-semibold text-sm mt-1">{q.n}</div>
                  <div className="text-xs text-muted-foreground">{q.age}</div>
                  <div className="text-xs mt-1">{q.complaint}</div>
                  <div className="text-[10px] text-muted-foreground mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Waiting: {q.waiting}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* Video area */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-card border rounded-xl overflow-hidden">
            {/* Patient info bar */}
            <div className="p-3 border-b bg-muted/30 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">AR</div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className="font-semibold text-sm">Anita Roy</div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 bg-primary/10 text-primary rounded">TC-201</span>
                </div>
                <div className="text-xs text-muted-foreground">34Y Female · O+ · Star Health · Fever, throat pain</div>
              </div>
              <span className="text-[10px] px-2 py-1 rounded bg-destructive/10 text-destructive">Allergy: Sulpha</span>
            </div>

            {/* Main video */}
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 aspect-video flex items-center justify-center">
              <div className="text-center text-white/90">
                <div className="w-24 h-24 rounded-full bg-white/10 mx-auto flex items-center justify-center text-3xl font-bold mb-3">AR</div>
                <div className="font-semibold">Anita Roy</div>
                <div className="text-xs text-white/60 mt-1">📹 Video connected · 720p HD</div>
              </div>

              {/* Self view */}
              <div className="absolute bottom-4 right-4 w-40 aspect-video rounded-lg bg-slate-700 border-2 border-white/20 flex items-center justify-center text-white/70 text-xs">
                {video ? <>👨‍⚕️ Dr. Arjun (You)</> : <VideoOff className="w-6 h-6" />}
              </div>

              {/* Top-left status */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-2 py-1 rounded bg-destructive text-destructive-foreground text-[10px] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> REC
                </span>
                <span className="px-2 py-1 rounded bg-black/40 text-white text-[10px]">04:22</span>
              </div>
            </div>

            {/* Call controls */}
            <div className="p-4 flex items-center justify-center gap-3 bg-card">
              <button onClick={() => setMuted(!muted)}
                className={`w-11 h-11 rounded-full flex items-center justify-center ${muted ? "bg-destructive text-destructive-foreground" : "bg-muted"}`}>
                {muted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>
              <button onClick={() => setVideo(!video)}
                className={`w-11 h-11 rounded-full flex items-center justify-center ${!video ? "bg-destructive text-destructive-foreground" : "bg-muted"}`}>
                {video ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
              </button>
              <button className="w-11 h-11 rounded-full bg-muted flex items-center justify-center"><Monitor className="w-5 h-5" /></button>
              <button className="w-11 h-11 rounded-full bg-muted flex items-center justify-center"><Volume2 className="w-5 h-5" /></button>
              <button className="w-11 h-11 rounded-full bg-muted flex items-center justify-center"><Camera className="w-5 h-5" /></button>
              <button className="w-14 h-11 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center gap-1 text-xs font-medium px-3">
                <PhoneOff className="w-4 h-4" /> End
              </button>
            </div>
          </div>

          {/* Clinical notes tabs */}
          <div className="bg-card border rounded-xl">
            <div className="flex border-b text-sm">
              {[
                { id: "notes", l: "Consultation Notes", i: FileText },
                { id: "rx", l: "e-Prescription", i: Pill },
                { id: "invest", l: "Investigations", i: FlaskConical },
              ].map((t) => (
                <button key={t.id} onClick={() => setTab(t.id as typeof tab)}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 ${tab === t.id ? "border-primary text-primary font-medium" : "border-transparent text-muted-foreground"}`}>
                  <t.i className="w-4 h-4" /> {t.l}
                </button>
              ))}
            </div>
            <div className="p-4">
              {tab === "notes" && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground">Chief Complaint</label>
                    <textarea rows={3} className="w-full mt-1 p-2 border rounded-lg text-sm" defaultValue="Fever 101°F since yesterday, sore throat, mild body ache." />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground">Assessment</label>
                    <textarea rows={3} className="w-full mt-1 p-2 border rounded-lg text-sm" defaultValue="Acute pharyngitis, likely viral. Advise symptomatic management." />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground">Diagnosis (ICD-10)</label>
                    <input className="w-full mt-1 p-2 border rounded-lg text-sm" defaultValue="J02.9 — Acute pharyngitis, unspecified" />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground">Follow-up</label>
                    <div className="flex gap-2 mt-1">
                      <select className="flex-1 p-2 border rounded-lg text-sm"><option>In-person after 3 days</option><option>Video after 5 days</option></select>
                      <input type="date" defaultValue="2025-05-23" className="p-2 border rounded-lg text-sm" />
                    </div>
                  </div>
                </div>
              )}
              {tab === "rx" && (
                <div className="space-y-2">
                  {[
                    ["Tab. Paracetamol 650 mg", "1-1-1 After Food", "3 Days"],
                    ["Tab. Levocetirizine 5 mg", "0-0-1 Bedtime", "5 Days"],
                    ["Syp. Betadine Gargle", "3 times/day", "5 Days"],
                  ].map(([n, d, days]) => (
                    <div key={n} className="p-3 border rounded-lg">
                      <div className="flex justify-between">
                        <div className="font-semibold text-sm">{n}</div>
                        <span className="text-xs text-muted-foreground">{days}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">{d}</div>
                    </div>
                  ))}
                  <button className="w-full py-2 border-2 border-dashed rounded-lg text-sm text-primary">+ Add Medicine</button>
                  <div className="flex gap-2 pt-2">
                    <button className="flex-1 py-2 border rounded-lg text-sm">Save Draft</button>
                    <button className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
                      Send e-Rx via WhatsApp
                    </button>
                  </div>
                </div>
              )}
              {tab === "invest" && (
                <div className="space-y-2 text-sm">
                  {["CBC (Complete Blood Count)","CRP", "Throat Swab Culture"].map((t) => (
                    <div key={t} className="p-3 border rounded-lg flex justify-between">
                      <span>{t}</span>
                      <button className="text-xs text-destructive">Remove</button>
                    </div>
                  ))}
                  <button className="w-full py-2 border-2 border-dashed rounded-lg text-sm text-primary">+ Add Test</button>
                  <div className="p-3 rounded-lg bg-info/10 border border-info/20 text-xs mt-2">
                    Home sample collection available — patient will be notified via SMS.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right — Doctor panel + Chat */}
        <div className="lg:col-span-3 space-y-6">
          <Section title="Doctor On Call">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary">AM</div>
              <div>
                <div className="font-semibold text-sm">Dr. Arjun Mehta</div>
                <div className="text-xs text-muted-foreground">MBBS, MD (Cardiology)</div>
                <div className="text-xs text-muted-foreground">Reg. No: MCI-45231</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
              <div className="p-2 border rounded-lg"><div className="text-muted-foreground">Experience</div><div className="font-semibold">12+ Years</div></div>
              <div className="p-2 border rounded-lg"><div className="text-muted-foreground">Fee</div><div className="font-semibold">₹800</div></div>
              <div className="p-2 border rounded-lg"><div className="text-muted-foreground">Language</div><div className="font-semibold">EN, HI, MR</div></div>
              <div className="p-2 border rounded-lg"><div className="text-muted-foreground">Rating</div><div className="font-semibold">⭐ 4.9</div></div>
            </div>
            <div className="mt-3 p-2 rounded-lg bg-success/10 text-success text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" /> Available for Video Consult
            </div>
          </Section>

          <Section title="In-Call Chat" action={<MessageSquare className="w-4 h-4 text-muted-foreground" />}>
            <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
              {chat.map((m, i) => (
                <div key={i} className={`flex ${m.who === "doctor" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] px-3 py-2 rounded-lg text-xs ${m.who === "doctor" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                    <div>{m.msg}</div>
                    <div className={`text-[9px] mt-0.5 ${m.who === "doctor" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{m.t}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2 border rounded-lg px-2 py-1">
              <button className="p-1"><Paperclip className="w-4 h-4 text-muted-foreground" /></button>
              <input placeholder="Type a message…" className="flex-1 py-1.5 text-sm focus:outline-none bg-transparent" />
              <button className="p-1.5 bg-primary text-primary-foreground rounded"><Send className="w-3.5 h-3.5" /></button>
            </div>
          </Section>

          <Section title="Upcoming Video Slots">
            <div className="space-y-2 text-xs">
              {[
                ["11:00 AM", "Vikram Singh", "BP follow-up"],
                ["11:20 AM", "Priya Menon", "Skin rash"],
                ["11:40 AM", "Mohammed Iqbal", "Diabetes review"],
              ].map(([t, n, c]) => (
                <div key={t} className="flex items-center gap-2 p-2 border rounded-lg">
                  <Calendar className="w-4 h-4 text-primary" />
                  <div className="flex-1">
                    <div className="font-semibold">{t} · {n}</div>
                    <div className="text-muted-foreground">{c}</div>
                  </div>
                  <button className="text-primary">→</button>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </AppLayout>
  );
}
