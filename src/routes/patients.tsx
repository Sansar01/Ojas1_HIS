import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import { Section } from "@/components/hims/Kpi";
import { useApiQuery } from "@/lib/hooks/useApiResource";

export const Route = createFileRoute("/patients")({
  head: () => ({ meta: [{ title: "Patients — Ojas1Cloud HIMS" }] }),
  component: Patients,
});

const rows = [
  ["OPD123456", "Ramesh Patel", "58Y", "Male", "9876543210", "A+", "Star Health", "12 May 2025"],
  ["OPD123457", "Sunita Devi", "45Y", "Female", "9812345678", "B+", "Self Pay", "18 May 2025"],
  ["OPD123458", "Imran Khan", "32Y", "Male", "9823456701", "O+", "HDFC ERGO", "15 May 2025"],
  ["OPD123459", "Meena Kumari", "28Y", "Female", "9834567012", "AB+", "Aditya Birla", "10 May 2025"],
  ["OPD123460", "Ravi Verma", "60Y", "Male", "9845670123", "O-", "Reliance", "20 May 2025"],
];

function Patients() {
  const { data, isLoading, error } = useApiQuery<{ patients: Array<{ uid: string; name: string; age: string; gender: string; mobile: string; bloodGroup: string; insurance: string; lastVisit: string }> }>(["patients"], "/patients", { staleTime: 30_000 });

  const rows = (data?.patients ?? []).map((patient) => [patient.uid, patient.name, patient.age, patient.gender, patient.mobile, patient.bloodGroup, patient.insurance, patient.lastVisit]);

  return (
    <AppLayout>
      <div className="mb-6"><h1 className="text-2xl font-bold">Patients</h1><p className="text-sm text-muted-foreground">Master patient records</p></div>
      {error ? <div className="mb-4 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">Patient list could not be loaded. Please try again.</div> : null}

      <Section title="Patient Directory" action={<button className="text-xs px-3 py-1.5 bg-primary text-primary-foreground rounded">+ New Patient</button>}>
        {isLoading ? <div className="text-sm text-muted-foreground">Loading patients…</div> : (
        <table className="w-full text-sm">
          <thead><tr className="text-left text-xs text-muted-foreground border-b">
            <th className="pb-2">UHID</th><th>Name</th><th>Age</th><th>Gender</th><th>Mobile</th><th>Blood</th><th>Insurance</th><th>Last Visit</th>
          </tr></thead>
          <tbody>{rows.map((r) => (
            <tr key={r[0]} className="border-b last:border-0 hover:bg-muted/30">
              <td className="py-3 font-mono text-xs">{r[0]}</td><td className="font-medium">{r[1]}</td>
              <td>{r[2]}</td><td>{r[3]}</td><td>{r[4]}</td><td>{r[5]}</td>
              <td className="text-muted-foreground">{r[6]}</td><td>{r[7]}</td>
            </tr>
          ))}</tbody>
        </table>
        )}
      </Section>
    </AppLayout>
  );
}
