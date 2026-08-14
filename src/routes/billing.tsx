import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import { Section } from "@/components/hims/Kpi";
import { useApiQuery } from "@/lib/hooks/useApiResource";
import {
  Printer,
  Mail,
  MessageCircle,
  History,
  User,
  Phone,
  Calendar,
  Droplet,
  IdCard,
  Stethoscope,
  Search,
} from "lucide-react";

export const Route = createFileRoute("/billing")({
  head: () => ({ meta: [{ title: "Billing — Ojas1Cloud HIMS" }] }),
  component: Billing,
});

const items = [
  {
    cat: "Consultation",
    n: "Consultation Fee — Dr. Arjun Mehta",
    r: 800,
    q: 1,
  },
  { cat: "Investigations", n: "ECG", r: 500, q: 1 },
  { cat: "Investigations", n: "2D Echo", r: 2000, q: 1 },
  { cat: "Investigations", n: "CBC (Complete Blood Count)", r: 300, q: 1 },
  { cat: "Medications", n: "Ecosprin AV 75 mg", r: 30, q: 10 },
  { cat: "Medications", n: "Atorva 10 mg", r: 15, q: 10 },
  { cat: "Medications", n: "Metformin 500 mg", r: 8, q: 10 },
];

function Billing() {
  const { data, isLoading, error } = useApiQuery<{
    billSummary: {
      total: number;
      discount: number;
      insurancePaid: number;
      payableByPatient: number;
    };
  }>(["billing-summary"], "/billing/summary", { staleTime: 30_000 });

  const total = items.reduce((s, i) => s + i.r * i.q, 0);
  const discount = data?.billSummary?.discount ?? 301.5;
  const net = (data?.billSummary?.total ?? total) - discount;
  const insurance = data?.billSummary?.insurancePaid ?? 3445.65;
  const payable = data?.billSummary?.payableByPatient ?? 382.85;

  return (
    <AppLayout>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">OPD & Pharmacy Billing</h1>
          <p className="text-sm text-muted-foreground">
            Selected patient details
          </p>
        </div>
      </div>

      {/* Patient Basic Info — appears after patient selection */}
      <div className="mb-6 rounded-xl border bg-card p-4">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
            RP
          </div>
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div>
              <div className="text-[10px] uppercase text-muted-foreground flex items-center gap-1">
                <User className="w-3 h-3" />
                Patient
              </div>
              <div className="font-semibold text-sm">Ramesh Patel</div>
              <div className="text-xs text-muted-foreground">Male · 52 yrs</div>
            </div>
            <div>
              <div className="text-[10px] uppercase text-muted-foreground flex items-center gap-1">
                <IdCard className="w-3 h-3" />
                UHID / MRN
              </div>
              <div className="font-mono text-sm">A-1045</div>
              <div className="text-xs text-muted-foreground">
                OPD No: OPD-2025-3421
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase text-muted-foreground flex items-center gap-1">
                <Phone className="w-3 h-3" />
                Contact
              </div>
              <div className="text-sm">+91 98765 43210</div>
              <div className="text-xs text-muted-foreground">Ahmedabad, GJ</div>
            </div>
            <div>
              <div className="text-[10px] uppercase text-muted-foreground flex items-center gap-1">
                <Droplet className="w-3 h-3" />
                Blood / Allergy
              </div>
              <div className="text-sm">B+ve</div>
              <div className="text-xs text-destructive">Penicillin</div>
            </div>
            <div>
              <div className="text-[10px] uppercase text-muted-foreground flex items-center gap-1">
                <Stethoscope className="w-3 h-3" />
                Consultant
              </div>
              <div className="text-sm">Dr. Arjun Mehta</div>
              <div className="text-xs text-muted-foreground">Cardiology</div>
            </div>
            <div>
              <div className="text-[10px] uppercase text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                Visit Date
              </div>
              <div className="text-sm">20 May 2025</div>
              <div className="text-xs text-success">
                Insurance · Star Health
              </div>
            </div>
          </div>
        </div>
      </div>

      {error ? (
        <div className="mb-6 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
          Billing summary could not be loaded. Using fallback values.
        </div>
      ) : null}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Section title="Today's Billing Queue">
          <div className="flex gap-1 text-xs mb-3 border-b">
            {["All 24", "Pending 16", "Billing 5", "Done 3"].map((t, i) => (
              <button
                key={t}
                className={`px-2 py-1 border-b-2 ${i === 0 ? "border-primary text-primary" : "border-transparent text-muted-foreground"}`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="space-y-2">
            {[
              {
                id: "A-1045",
                n: "Ramesh Patel",
                d: "Cardiology",
                a: 3250,
                s: "Billing",
                active: true,
              },
              { id: "A-1046", n: "Sunita Devi", d: "General Med", a: 1850 },
              { id: "A-1047", n: "Imran Khan", d: "Orthopedics", a: 5420 },
              { id: "A-1048", n: "Meena Kumari", d: "Gynecology", a: 2950 },
              { id: "A-1049", n: "Ravi Verma", d: "Diabetes", a: 1200 },
            ].map((p) => (
              <div
                key={p.id}
                className={`p-3 rounded-lg border ${p.active ? "border-primary bg-primary/5" : ""}`}
              >
                <div className="flex justify-between text-[10px]">
                  <span className="font-mono px-1.5 py-0.5 bg-muted rounded">
                    {p.id}
                  </span>
                  <span className="text-warning-foreground">
                    {p.s ?? "Pending"}
                  </span>
                </div>
                <div className="font-semibold text-sm mt-1">{p.n}</div>
                <div className="text-xs text-muted-foreground">{p.d}</div>
                <div className="text-sm font-bold mt-1">
                  ₹{p.a.toLocaleString()}
                </div>
              </div>
            ))}
            <button className="w-full py-2 border-2 border-dashed rounded-lg text-sm text-primary">
              + Add New Bill
            </button>
          </div>
        </Section>

        <div className="lg:col-span-2 space-y-6">
          <Section title="Bill Items">
            <div className="mb-3 grid grid-cols-1 md:grid-cols-12 gap-2">
              <select className="md:col-span-3 border rounded-lg px-2 py-2 text-sm bg-background">
                <option value="">All Categories</option>
                <option>Consultation</option>
                <option>Investigations</option>
                <option>Medications</option>
                <option>Procedures</option>
                <option>Consumables</option>
              </select>
              <select className="md:col-span-3 border rounded-lg px-2 py-2 text-sm bg-background">
                <option value="">All Sub-categories</option>
                <option>Cardiology</option>
                <option>Radiology</option>
                <option>Pathology</option>
                <option>Tablet</option>
                <option>Injection</option>
                <option>Syrup</option>
              </select>
              <div className="md:col-span-6 relative">
                <Search className="w-4 h-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search item, medicine, test or service…"
                  className="w-full border rounded-lg pl-8 pr-3 py-2 text-sm bg-background"
                />
              </div>
            </div>

            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs text-muted-foreground border-b">
                  <th className="pb-2">Item</th>
                  <th>Rate</th>
                  <th>Qty</th>
                  <th className="text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {items.map((it, i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="py-2.5">
                      <div className="text-[10px] text-muted-foreground uppercase">
                        {it.cat}
                      </div>
                      <div className="font-medium">{it.n}</div>
                    </td>
                    <td>{it.r.toFixed(2)}</td>
                    <td>{it.q}</td>
                    <td className="text-right font-semibold">
                      ₹{(it.r * it.q).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>
          <div className="grid grid-cols-3 gap-3">
            <button className="p-3 rounded-lg border flex flex-col items-center gap-1 text-xs">
              <Printer className="w-4 h-4" />
              Print Bill
            </button>
            <button className="p-3 rounded-lg border flex flex-col items-center gap-1 text-xs">
              <Mail className="w-4 h-4" />
              Email / SMS
            </button>
            <button className="p-3 rounded-lg border flex flex-col items-center gap-1 text-xs">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <Section title="Bill Summary">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total</span>
                <span className="font-semibold">₹{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-destructive">
                <span>Discount (5%)</span>
                <span>- ₹{discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Tax (GST 0%)</span>
                <span>₹0.00</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t">
                <span>Net Amount</span>
                <span className="text-primary">₹{net.toFixed(2)}</span>
              </div>
            </div>
          </Section>
          <Section title="Insurance & Payment">
            <div className="space-y-2 text-sm">
              <div className="text-xs font-semibold">Star Health Insurance</div>
              <div className="text-xs text-muted-foreground">
                Policy: 123456789012 · Cashless
              </div>
              <div className="flex justify-between pt-2 border-t">
                <span className="text-muted-foreground">Approved Limit</span>
                <span>₹10,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Available</span>
                <span>₹8,000</span>
              </div>
              <div className="flex justify-between text-warning-foreground pt-2 border-t">
                <span>Payable by Patient</span>
                <span className="font-bold">₹{payable.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-success">
                <span>Insurance Paid</span>
                <span className="font-bold">₹{insurance.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full mt-4 py-2.5 bg-success text-success-foreground rounded-lg font-medium text-sm">
              Collect Payment (F9)
            </button>
            <button className="w-full mt-2 py-2 border rounded-lg text-sm flex items-center justify-center gap-2">
              <History className="w-4 h-4" />
              Bill History
            </button>
          </Section>
        </div>
      </div>
    </AppLayout>
  );
}
