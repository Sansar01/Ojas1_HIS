import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import { Kpi, Section } from "@/components/hims/Kpi";
import { TrendingUp, Users, Receipt, Activity } from "lucide-react";

export const Route = createFileRoute("/reports")({
  head: () => ({ meta: [{ title: "Reports — Ojas1Cloud HIMS" }] }),
  component: Reports,
});

function Reports() {
  return (
    <AppLayout>
      <div className="mb-6"><h1 className="text-2xl font-bold">Reports & Analytics</h1><p className="text-sm text-muted-foreground">Operational and financial insights</p></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <Kpi icon={Receipt} label="Monthly Revenue" value="₹1.82Cr" delta="12%" tone="primary" />
        <Kpi icon={Users} label="Patients / Month" value="24,890" delta="9%" tone="info" />
        <Kpi icon={TrendingUp} label="Avg Bill" value="₹1,240" delta="3%" tone="success" />
        <Kpi icon={Activity} label="Bed Occupancy" value="78%" tone="warning" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Section title="Top Reports">
          <ul className="text-sm space-y-2">
            {["Daily Collection Register","OPD Consultation Report","Doctor Performance","Insurance Claims Summary","Pharmacy Sales","Investigation Revenue","Discount Audit Trail"].map((r) => (
              <li key={r} className="p-3 border rounded-lg flex justify-between items-center hover:border-primary cursor-pointer">
                <span>{r}</span><span className="text-xs text-primary">Open →</span>
              </li>
            ))}
          </ul>
        </Section>
        <Section title="Statutory Reports">
          <ul className="text-sm space-y-2">
            {["GST Sales Register","TDS Report","GSTR-1 Summary","Form 26AS Reconciliation","Bio-Medical Waste Log","NABH Indicators"].map((r) => (
              <li key={r} className="p-3 border rounded-lg flex justify-between items-center hover:border-primary cursor-pointer">
                <span>{r}</span><span className="text-xs text-primary">Open →</span>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </AppLayout>
  );
}
