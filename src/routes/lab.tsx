import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import { Section } from "@/components/hims/Kpi";

export const Route = createFileRoute("/lab")({
  head: () => ({ meta: [{ title: "Lab & Radiology — Ojas1Cloud HIMS" }] }),
  component: Lab,
});

const orders = [
  ["LAB-2201", "Ramesh Patel", "CBC, Lipid Profile", "10:15 AM", "Pending"],
  ["LAB-2202", "Sunita Devi", "Thyroid Profile", "10:35 AM", "In Progress"],
  ["RAD-3305", "Imran Khan", "X-Ray Chest PA", "11:00 AM", "Reported"],
  ["LAB-2203", "Meena Kumari", "HbA1c", "11:20 AM", "Sample Collected"],
  ["RAD-3306", "Ravi Verma", "USG Abdomen", "12:00 PM", "Pending"],
];

function Lab() {
  return (
    <AppLayout>
      <div className="mb-6"><h1 className="text-2xl font-bold">Lab & Radiology</h1><p className="text-sm text-muted-foreground">Investigation orders and reports</p></div>
      <Section title="Today's Orders">
        <table className="w-full text-sm">
          <thead><tr className="text-left text-xs text-muted-foreground border-b">
            <th className="pb-2">Order</th><th>Patient</th><th>Tests</th><th>Time</th><th>Status</th>
          </tr></thead>
          <tbody>{orders.map((r) => (
            <tr key={r[0]} className="border-b last:border-0">
              <td className="py-3 font-mono text-xs">{r[0]}</td>
              <td className="font-medium">{r[1]}</td>
              <td>{r[2]}</td>
              <td className="text-muted-foreground">{r[3]}</td>
              <td>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                  r[4] === "Reported" ? "bg-success/15 text-success" :
                  r[4] === "In Progress" ? "bg-info/15 text-info" :
                  r[4] === "Pending" ? "bg-warning/20 text-warning-foreground" : "bg-primary/10 text-primary"
                }`}>{r[4]}</span>
              </td>
            </tr>
          ))}</tbody>
        </table>
      </Section>
    </AppLayout>
  );
}
