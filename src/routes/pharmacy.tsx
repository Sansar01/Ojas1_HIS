import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import { Section } from "@/components/hims/Kpi";

export const Route = createFileRoute("/pharmacy")({
  head: () => ({ meta: [{ title: "Pharmacy — Ojas1Cloud HIMS" }] }),
  component: Pharmacy,
});

const stock = [
  ["MED-1001", "Ecosprin AV 75 mg", "Tablet", 2450, 30, "Active"],
  ["MED-1002", "Atorvastatin 10 mg", "Tablet", 45, 15, "Low"],
  ["MED-1003", "Telma 40 mg", "Tablet", 1200, 25, "Active"],
  ["MED-1004", "Metformin 500 mg", "Tablet", 3400, 8, "Active"],
  ["MED-1005", "Amoxicillin 500 mg", "Capsule", 0, 60, "Out"],
];

function Pharmacy() {
  return (
    <AppLayout>
      <div className="mb-6"><h1 className="text-2xl font-bold">Pharmacy</h1><p className="text-sm text-muted-foreground">Inventory and dispensing</p></div>
      <Section title="Stock Register">
        <table className="w-full text-sm">
          <thead><tr className="text-left text-xs text-muted-foreground border-b">
            <th className="pb-2">Code</th><th>Medicine</th><th>Form</th><th>Stock</th><th>Rate</th><th>Status</th>
          </tr></thead>
          <tbody>{stock.map((r) => (
            <tr key={r[0] as string} className="border-b last:border-0">
              <td className="py-3 font-mono text-xs">{r[0]}</td>
              <td className="font-medium">{r[1]}</td>
              <td className="text-muted-foreground">{r[2]}</td>
              <td>{r[3]}</td>
              <td>₹{r[4]}</td>
              <td>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                  r[5] === "Active" ? "bg-success/15 text-success" :
                  r[5] === "Low" ? "bg-warning/20 text-warning-foreground" : "bg-destructive/10 text-destructive"
                }`}>{r[5]}</span>
              </td>
            </tr>
          ))}</tbody>
        </table>
      </Section>
    </AppLayout>
  );
}
