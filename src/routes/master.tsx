import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Section } from "@/components/hims/Kpi";
import { UserCog, Shield, ClipboardList, Percent, Cog, X } from "lucide-react";

export const Route = createFileRoute("/master")({
  head: () => ({ meta: [{ title: "Master Configuration — Ojas1Cloud HIMS" }] }),
  component: Master,
});

const cards = [
  {
    key: "doctor",
    i: UserCog,
    t: "Doctor Management",
    s: "Manage doctors & slots",
    c: "28 Doctors",
    tone: "text-primary bg-primary/10",
  },
  {
    key: "panel",
    i: Shield,
    t: "Panel Management",
    s: "Insurance & Corporate",
    c: "16 Panels",
    tone: "text-info bg-info/10",
  },
  {
    key: "item",
    i: ClipboardList,
    t: "Item Management",
    s: "Lab, Radio, Pharmacy",
    c: "1,248 Items",
    tone: "text-success bg-success/10",
  },
  {
    key: "rate",
    i: Percent,
    t: "Rate Management",
    s: "Insurance & Corporate Rates",
    c: "563 Rate Plans",
    tone: "text-warning-foreground bg-warning/20",
  },
  {
    key: "config",
    i: Cog,
    t: "Configuration",
    s: "General & System Settings",
    c: "24 Settings",
    tone: "text-destructive bg-destructive/10",
  },
];

const labItems = [
  ["LAB-1001", "Complete Blood Count (CBC)", "Hematology", "Each", 300],
  ["LAB-1002", "Lipid Profile", "Biochemistry", "Each", 800],
  ["LAB-1003", "Liver Function Test (LFT)", "Biochemistry", "Each", 700],
  ["LAB-1004", "Thyroid Profile (T3, T4, TSH)", "Hormone", "Each", 900],
  ["LAB-1005", "HbA1c", "Diabetes", "Each", 600],
];

const panels = [
  ["Star Health Insurance", "Insurance", "Star Health", "Active"],
  ["Aditya Birla Health", "Insurance", "Aditya Birla", "Active"],
  ["HDFC ERGO General", "Insurance", "HDFC ERGO", "Active"],
  ["Reliance General", "Insurance", "Reliance", "Active"],
  ["Max Bupa Health", "Insurance", "Max Bupa", "Inactive"],
];

type ItemType = "lab" | "radiology" | "medical" | "others";

function Master() {
  const navigate = useNavigate();
  const [panelOpen, setPanelOpen] = useState(false);
  const [itemType, setItemType] = useState<ItemType | "">("");
  const [itemFormOpen, setItemFormOpen] = useState<ItemType | null>(null);
  const [globalOpen, setGlobalOpen] = useState(false);
  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Master Configuration</h1>
        <p className="text-sm text-muted-foreground">
          Manage all master data and system configuration
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
        {cards.map((c) => (
          <div
            key={c.t}
            className="text-left bg-card border rounded-xl p-4 hover:border-primary transition-colors"
          >
            <button
              type="button"
              onClick={() => {
                if (c.key === "panel") setPanelOpen(true);
                if (c.key === "config") setGlobalOpen(true);
                if (c.key === "doctor") {
                  try {
                    localStorage.setItem("um_userType", "doctor");
                  } catch {}
                  navigate({ to: "/user-management" });
                }
              }}
              className="text-left w-full cursor-pointer"
            >
              <div
                className={`w-10 h-10 rounded-lg ${c.tone} flex items-center justify-center mb-3`}
              >
                <c.i className="w-5 h-5" />
              </div>
              <div className="font-semibold text-sm">{c.t}</div>
              <div className="text-xs text-muted-foreground">{c.s}</div>
              <div className="text-xs font-bold mt-2">{c.c}</div>
            </button>
            {c.key === "item" && (
              <select
                value={itemType}
                onChange={(e) => {
                  const v = e.target.value as ItemType;
                  setItemType(v);
                  if (v) setItemFormOpen(v);
                }}
                className="mt-3 w-full h-8 px-2 border rounded text-xs bg-background focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="">Select Item Type…</option>
                <option value="lab">Laboratory</option>
                <option value="radiology">Radiology</option>
                <option value="medical">Medical Items</option>
                <option value="others">Others Item</option>
              </select>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Section
          title="Lab Items"
          action={<button className="text-xs text-primary">+ Add Item</button>}
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-muted-foreground border-b">
                <th className="pb-2">Code</th>
                <th>Name</th>
                <th>Category</th>
                <th>Unit</th>
                <th className="text-right">Rate</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {labItems.map((row) => (
                <tr key={row[0] as string} className="border-b last:border-0">
                  <td className="py-2.5 font-mono text-xs">{row[0]}</td>
                  <td>{row[1]}</td>
                  <td className="text-muted-foreground">{row[2]}</td>
                  <td className="text-muted-foreground">{row[3]}</td>
                  <td className="text-right font-semibold">₹{row[4]}</td>
                  <td>
                    <span className="text-[10px] px-1.5 py-0.5 bg-success/15 text-success rounded">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        <Section
          title="Panel / Insurance Registration"
          action={
            <button
              className="text-xs text-primary"
              onClick={() => setPanelOpen(true)}
            >
              + Add Panel
            </button>
          }
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-muted-foreground border-b">
                <th className="pb-2">Panel</th>
                <th>Type</th>
                <th>Insurer</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {panels.map((p) => (
                <tr key={p[0]} className="border-b last:border-0">
                  <td className="py-2.5 font-medium">{p[0]}</td>
                  <td className="text-muted-foreground">{p[1]}</td>
                  <td className="text-muted-foreground">{p[2]}</td>
                  <td>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded ${p[3] === "Active" ? "bg-success/15 text-success" : "bg-destructive/10 text-destructive"}`}
                    >
                      {p[3]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
      </div>

      {panelOpen && <PanelMasterModal onClose={() => setPanelOpen(false)} />}
      {(itemFormOpen === "lab" || itemFormOpen === "radiology") && (
        <ManageInvestigationsModal
          kind={itemFormOpen}
          onClose={() => {
            setItemFormOpen(null);
            setItemType("");
          }}
        />
      )}
      {itemFormOpen === "medical" && (
        <MedicalItemModal
          onClose={() => {
            setItemFormOpen(null);
            setItemType("");
          }}
        />
      )}
      {itemFormOpen === "others" && (
        <OthersItemMasterModal
          onClose={() => {
            setItemFormOpen(null);
            setItemType("");
          }}
        />
      )}
      {globalOpen && <GlobalMasterModal onClose={() => setGlobalOpen(false)} />}
    </AppLayout>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[130px_10px_1fr] items-center gap-2">
      <label className="text-sm text-foreground">{label}</label>
      <span className="text-sm text-muted-foreground">:</span>
      <div>{children}</div>
    </div>
  );
}

const inputCls =
  "w-full h-8 px-2 border rounded text-sm bg-background focus:outline-none focus:ring-1 focus:ring-primary";

function PanelMasterModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center overflow-y-auto p-4">
      <div className="bg-card rounded-lg shadow-xl w-full max-w-6xl my-4">
        <div className="flex items-center justify-between px-4 py-2.5 border-b bg-muted/50">
          <h2 className="text-base font-bold text-center flex-1">
            Panel Master
          </h2>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-4 py-2 bg-info/10 border-b">
          <h3 className="text-sm font-semibold text-info">Panel Details</h3>
        </div>

        <form
          className="p-5 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <Field label="Panel Name">
            <input className={`${inputCls} border-destructive`} />
          </Field>
          <Field label="Group Type">
            <select className={inputCls} defaultValue="INSURANCE">
              <option>INSURANCE</option>
              <option>CORPORATE</option>
              <option>GOVERNMENT</option>
              <option>TPA</option>
            </select>
          </Field>
          <Field label="Contact Person">
            <input className={inputCls} />
          </Field>

          <Field label="Address1">
            <input className={inputCls} />
          </Field>
          <Field label="Address2">
            <input className={inputCls} />
          </Field>
          <Field label="Contact No.">
            <input className={inputCls} />
          </Field>

          <Field label="Phone No.">
            <input className={inputCls} />
          </Field>
          <Field label="Email ID">
            <input type="email" className={inputCls} />
          </Field>
          <Field label="Fax No.">
            <input className={inputCls} />
          </Field>

          <Field label="Valid From">
            <input type="date" className={inputCls} defaultValue="2026-07-15" />
          </Field>
          <Field label="Valid To">
            <input type="date" className={inputCls} defaultValue="2026-07-15" />
          </Field>
          <Field label="Payment Mode">
            <select
              className={`${inputCls} border-destructive`}
              defaultValue=""
            >
              <option value="" disabled>
                Select
              </option>
              <option>Cash</option>
              <option>Credit</option>
              <option>Cheque</option>
              <option>Online</option>
            </select>
          </Field>

          <Field label="Refer Rate(OPD)">
            <select className={inputCls} defaultValue="CASH">
              <option>CASH</option>
              <option>PANEL</option>
            </select>
          </Field>
          <Field label="Refer Rate(IPD)">
            <select className={inputCls} defaultValue="CASH">
              <option>CASH</option>
              <option>PANEL</option>
            </select>
          </Field>
          <Field label="Credit Limits">
            <input type="number" className={inputCls} />
          </Field>

          <Field label="Rate Type">
            <div className="flex items-center gap-4 text-sm">
              <label className="flex items-center gap-1.5">
                <input type="checkbox" /> SELF (OPD)
              </label>
              <label className="flex items-center gap-1.5">
                <input type="checkbox" /> SELF (IPD)
              </label>
            </div>
          </Field>
          <Field label="Show PrintOut">
            <div className="flex items-center gap-4 text-sm">
              <label className="flex items-center gap-1.5">
                <input type="radio" name="printout" defaultChecked /> Yes
              </label>
              <label className="flex items-center gap-1.5">
                <input type="radio" name="printout" /> No
              </label>
            </div>
          </Field>
          <Field label="Hide Rate">
            <div className="flex items-center gap-4 text-sm">
              <label className="flex items-center gap-1.5">
                <input type="radio" name="hiderate" /> Yes
              </label>
              <label className="flex items-center gap-1.5">
                <input type="radio" name="hiderate" defaultChecked /> No
              </label>
            </div>
          </Field>

          <Field label="Co-Payment On">
            <div className="flex items-center gap-4 text-sm">
              <label className="flex items-center gap-1.5">
                <input type="radio" name="copayon" defaultChecked /> On Bill
              </label>
              <label className="flex items-center gap-1.5">
                <input type="radio" name="copayon" /> On Service
              </label>
            </div>
          </Field>
          <Field label="Co-Payment In %">
            <input type="number" className={inputCls} />
          </Field>
          <Field label="Rate Currency">
            <select className={inputCls} defaultValue="TZS">
              <option>TZS</option>
              <option>USD</option>
              <option>INR</option>
              <option>EUR</option>
            </select>
          </Field>

          <Field label="Panel Type">
            <div className="flex items-center gap-4 text-sm">
              <label className="flex items-center gap-1.5">
                <input type="radio" name="paneltype" defaultChecked /> Credit
              </label>
              <label className="flex items-center gap-1.5">
                <input type="radio" name="paneltype" /> Cash
              </label>
            </div>
          </Field>
          <Field label="Bill Currency">
            <select className={inputCls} defaultValue="TZS">
              <option>TZS</option>
              <option>USD</option>
              <option>INR</option>
              <option>EUR</option>
            </select>
          </Field>
          <Field label="CurrencyConv.">
            <input type="number" defaultValue={1} className={inputCls} />
          </Field>

          <Field label="Cover Note">
            <div className="flex items-center gap-4 text-sm">
              <label className="flex items-center gap-1.5">
                <input type="radio" name="covernote" defaultChecked /> No
              </label>
              <label className="flex items-center gap-1.5">
                <input type="radio" name="covernote" /> Yes
              </label>
            </div>
          </Field>
          <Field label="Panel Amount">
            <input type="number" className={inputCls} />
          </Field>
          <Field label="Diet Type">
            <div className="flex items-center gap-4 text-sm">
              <label className="flex items-center gap-1.5">
                <input type="radio" name="diettype" defaultChecked /> Normal
              </label>
              <label className="flex items-center gap-1.5">
                <input type="radio" name="diettype" /> Private
              </label>
            </div>
          </Field>

          <Field label="Is Smart Card">
            <div className="flex items-center gap-4 text-sm">
              <label className="flex items-center gap-1.5">
                <input type="radio" name="smartcard" defaultChecked /> No
              </label>
              <label className="flex items-center gap-1.5">
                <input type="radio" name="smartcard" /> Yes
              </label>
            </div>
          </Field>
          <Field label="Encounter">
            <input type="checkbox" />
          </Field>
          <Field label="Is USD Based">
            <input type="checkbox" />
          </Field>

          <div />
          <div />
          <Field label="USD Factor">
            <input type="number" className={`${inputCls} bg-muted`} disabled />
          </Field>

          <Field label="IsValidation(ZHSF)">
            <input type="checkbox" />
          </Field>
          <div className="md:col-span-2" />

          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 pt-3 border-t mt-2">
            <div className="text-sm">
              <span className="font-semibold">Note</span>
              <span className="mx-2">:</span>
              <span className="text-destructive font-semibold">
                Co-Payment Payable By Patient.
              </span>
            </div>
            <div className="text-sm">
              <span className="font-semibold">Note</span>
              <span className="mx-2">:</span>
              <span className="text-destructive font-semibold">
                Enter the USD ($) conversion factor for 1 US Dollar cost in TZS
              </span>
            </div>
          </div>

          <div className="md:col-span-3 flex justify-center gap-3 pt-4 border-t mt-2">
            <button
              type="submit"
              className="px-8 py-2 bg-primary text-primary-foreground rounded font-semibold hover:bg-primary/90"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border rounded font-semibold hover:bg-muted"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ----------------------- Manage Investigations (Lab / Radiology) ----------------------- */

const LAB_INVESTIGATIONS = [
  "24hrs Urine Protein",
  "Acid Fast Bacilli Smear Sputum",
  "Adenosine deaminase (ADA)",
  "Adrenocorticotropic Hormone",
  "AFB Smear By ZN Stain",
  "AFP",
  "AG RATIO",
  "ALAT- GPT",
  "Albumin",
  "Alkaline Phosphatase",
  "Amylase-Pancreatic",
  "Amylase-Total",
  "ANCA",
  "ANEMIA PROFILE",
  "anti mullerian hormone",
  "Anti Streptolysin O (ASO)",
  "Anti-CCP/Citrullinated peptide",
  "Antiphospholipid Antibodies",
  "APTT",
];

const RAD_INVESTIGATIONS = [
  "X-Ray Chest PA",
  "X-Ray Abdomen",
  "X-Ray Skull",
  "X-Ray Spine (Lumbar)",
  "X-Ray Pelvis",
  "USG Abdomen",
  "USG Pelvis",
  "USG Obstetric",
  "CT Brain (Plain)",
  "CT Chest",
  "CT Abdomen",
  "MRI Brain",
  "MRI Spine",
  "MRI Knee",
  "Mammography",
  "DEXA Scan",
  "Doppler Carotid",
  "Doppler Renal",
  "ECHO 2D",
];

function ManageInvestigationsModal({
  kind,
  onClose,
}: {
  kind: "lab" | "radiology";
  onClose: () => void;
}) {
  const list = kind === "lab" ? LAB_INVESTIGATIONS : RAD_INVESTIGATIONS;
  const title =
    kind === "lab"
      ? "Manage Investigations — Laboratory"
      : "Manage Investigations — Radiology";
  const defaultSubDept = kind === "lab" ? "BIOCHEMISTRY" : "RADIOLOGY";
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center overflow-y-auto p-4">
      <div className="bg-card rounded-lg shadow-xl w-full max-w-7xl my-4">
        <div className="flex items-center justify-between px-4 py-2.5 border-b bg-primary/10">
          <h2 className="text-base font-bold">{title}</h2>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 flex items-center gap-6 border-b">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" /> New Investigation
          </label>
          <Field label="Department">
            <select className={inputCls} defaultValue="ALL">
              <option>ALL</option>
              <option>{defaultSubDept}</option>
            </select>
          </Field>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 p-4">
          <div className="border rounded p-3">
            <div className="text-sm font-semibold mb-2">Investigations</div>
            <div className="flex items-center gap-3 text-xs mb-2">
              <label className="flex items-center gap-1">
                <input type="radio" name="srch" /> Code
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="srch" defaultChecked /> First Name
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="srch" /> InBetween
              </label>
            </div>
            <input className={`${inputCls} mb-2`} placeholder="Search..." />
            <ul className="text-xs h-72 overflow-y-auto border rounded p-2 space-y-1 bg-background">
              {list.map((n) => (
                <li
                  key={n}
                  className="hover:bg-muted px-1 py-0.5 cursor-pointer"
                >
                  # {n}
                </li>
              ))}
            </ul>
          </div>

          <form
            className="border rounded p-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              onClose();
            }}
          >
            <div className="md:col-span-2 text-sm font-semibold text-info">
              Detail
            </div>
            <Field label="Sub.Dept">
              <select className={inputCls} defaultValue={defaultSubDept}>
                {kind === "lab"
                  ? [
                      "BIOCHEMISTRY",
                      "HEMATOLOGY",
                      "MICROBIOLOGY",
                      "SEROLOGY",
                      "HORMONE",
                    ].map((s) => <option key={s}>{s}</option>)
                  : ["RADIOLOGY", "CT SCAN", "MRI", "USG", "MAMMOGRAPHY"].map(
                      (s) => <option key={s}>{s}</option>,
                    )}
              </select>
            </Field>
            <Field label="Investigation">
              <input className={`${inputCls} border-destructive`} />
            </Field>
            <Field label="Description">
              <input className={inputCls} />
            </Field>
            <Field label="Method">
              <input className={inputCls} />
            </Field>
            <Field label="Gender">
              <select className={inputCls} defaultValue="Both">
                <option>Both</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </Field>
            <Field label="Report Type">
              <select className={inputCls} defaultValue="Path Numeric">
                <option>Path Numeric</option>
                <option>Path Descriptive</option>
                <option>Radiology</option>
              </select>
            </Field>
            <Field label="Type">
              <select className={inputCls} defaultValue="Sample Required">
                <option>Sample Required</option>
                <option>No Sample</option>
              </select>
            </Field>
            <Field label="Print Sequence">
              <input type="number" className={inputCls} />
            </Field>
            <Field label="Sample Type">
              <select
                className={`${inputCls} border-destructive`}
                defaultValue=""
              >
                <option value="" disabled>
                  Select
                </option>
                <option>Blood</option>
                <option>Urine</option>
                <option>Serum</option>
              </select>
            </Field>
            <Field label="Sample Con.">
              <select className={inputCls} defaultValue="Normal">
                <option>Normal</option>
                <option>Fasting</option>
              </select>
            </Field>
            <Field label="Department">
              <select
                className={`${inputCls} border-destructive`}
                defaultValue=""
              >
                <option value="" disabled>
                  Select
                </option>
                <option>{defaultSubDept}</option>
              </select>
            </Field>
            <Field label="IsDiscountable">
              <div className="flex items-center gap-4 text-sm">
                <label className="flex items-center gap-1.5">
                  <input type="radio" name="isdisc" /> Yes
                </label>
                <label className="flex items-center gap-1.5">
                  <input type="radio" name="isdisc" defaultChecked /> No
                </label>
              </div>
            </Field>
            <Field label="LIS Test Code">
              <input className={inputCls} />
            </Field>
            <Field label="Rate Editable">
              <div className="flex items-center gap-4 text-sm">
                <label className="flex items-center gap-1.5">
                  <input type="radio" name="rateedit" /> Yes
                </label>
                <label className="flex items-center gap-1.5">
                  <input type="radio" name="rateedit" defaultChecked /> No
                </label>
              </div>
            </Field>
            <Field label="Exam Type">
              <div className="flex items-center gap-4 text-sm">
                <label className="flex items-center gap-1.5">
                  <input type="radio" name="examtype" defaultChecked /> General
                </label>
                <label className="flex items-center gap-1.5">
                  <input type="radio" name="examtype" /> Obstetrics
                </label>
              </div>
            </Field>
            <Field label="TAT Time & Type">
              <div className="flex gap-2">
                <input type="number" className={inputCls} />
                <select className={inputCls} defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option>Minutes</option>
                  <option>Hours</option>
                  <option>Days</option>
                </select>
              </div>
            </Field>

            <div className="md:col-span-2 pt-2 border-t mt-1">
              <div className="text-sm font-semibold mb-2">
                Other Information
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked /> Show Name in Patient
                  Report
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked /> Show in Online Report
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Print Separate
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> PrintSampleName
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> IsCulture
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Urgent
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked /> Active
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Outsource
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Profile Test
                </label>
              </div>
            </div>

            <div className="md:col-span-2 flex justify-center gap-3 pt-3 border-t mt-1">
              <button
                type="submit"
                className="px-8 py-2 bg-primary text-primary-foreground rounded font-semibold hover:bg-primary/90"
              >
                Save
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border rounded font-semibold hover:bg-muted"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ----------------------- Medical Item Master (Pharmacy) ----------------------- */

function MedicalItemModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center overflow-y-auto p-4">
      <div className="bg-card rounded-lg shadow-xl w-full max-w-7xl my-4">
        <div className="flex items-center justify-between px-4 py-2.5 border-b bg-primary/10">
          <h2 className="text-base font-bold">Medical Item Master</h2>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded">
            <X className="w-4 h-4" />
          </button>
        </div>

        <form
          className="p-5 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3 pb-3 border-b">
            <Field label="Category">
              <select className={inputCls} defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                <option>TABLET</option>
                <option>SYRUP</option>
                <option>INJECTION</option>
                <option>CAPSULE</option>
              </select>
            </Field>
            <Field label="Groups">
              <select className={inputCls} defaultValue="ALL">
                <option>ALL</option>
                <option>ANTIBIOTIC</option>
                <option>ANALGESIC</option>
              </select>
            </Field>
            <Field label="Search By Name">
              <input className={`${inputCls} border-destructive`} />
            </Field>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3">
            <Field label="Item Name">
              <input className={`${inputCls} border-destructive`} />
            </Field>
            <Field label="Item Code">
              <input className={inputCls} />
            </Field>
            <Field label="Description">
              <input className={inputCls} />
            </Field>

            <Field label="Group">
              <select
                className={`${inputCls} border-destructive`}
                defaultValue=""
              >
                <option value="" disabled>
                  Select
                </option>
                <option>ANTIBIOTIC</option>
                <option>ANALGESIC</option>
              </select>
            </Field>
            <Field label="Manufacturer">
              <select
                className={`${inputCls} border-destructive`}
                defaultValue=""
              >
                <option value="" disabled>
                  Select
                </option>
                <option>Cipla</option>
                <option>Sun Pharma</option>
                <option>Dr. Reddy's</option>
              </select>
            </Field>
            <Field label="Rack">
              <input className={inputCls} />
            </Field>

            <Field label="Shelf">
              <input className={inputCls} />
            </Field>
            <Field label="Min. Level">
              <input type="number" className={inputCls} />
            </Field>
            <Field label="Max. Level">
              <input type="number" className={inputCls} />
            </Field>

            <Field label="Reorder Level">
              <input type="number" className={inputCls} />
            </Field>
            <Field label="Reorder Qty.">
              <input type="number" className={inputCls} />
            </Field>
            <Field label="Purchase Unit">
              <select
                className={`${inputCls} border-destructive`}
                defaultValue=""
              >
                <option value="" disabled>
                  Select
                </option>
                <option>Box</option>
                <option>Strip</option>
                <option>Bottle</option>
              </select>
            </Field>

            <Field label="Sale Unit">
              <select
                className={`${inputCls} border-destructive`}
                defaultValue=""
              >
                <option value="" disabled>
                  Select
                </option>
                <option>Tablet</option>
                <option>ml</option>
                <option>Vial</option>
              </select>
            </Field>
            <Field label="Issue Factor">
              <input
                type="number"
                className={`${inputCls} border-destructive`}
              />
            </Field>
            <Field label="Drug Category">
              <select className={inputCls} defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                <option>Schedule H</option>
                <option>Schedule H1</option>
                <option>OTC</option>
              </select>
            </Field>

            <Field label="Item Type">
              <select className={inputCls} defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                <option>Medicine</option>
                <option>Consumable</option>
                <option>Surgical</option>
              </select>
            </Field>
            <Field label="Default Pur.VAT %">
              <input type="number" className={inputCls} />
            </Field>
            <Field label="Sale VAT Type">
              <select className={inputCls} defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                <option>Exclusive</option>
                <option>Inclusive</option>
              </select>
            </Field>

            <Field label="Sale VAT %">
              <input type="number" className={inputCls} />
            </Field>
            <Field label="Pur. VAT Line">
              <select className={inputCls} defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                <option>Line 1</option>
                <option>Line 2</option>
              </select>
            </Field>
            <Field label="Pur.VAT Type">
              <select className={inputCls} defaultValue="">
                <option value="" disabled>
                  Select
                </option>
                <option>Exclusive</option>
                <option>Inclusive</option>
              </select>
            </Field>

            <Field label="Stock Type">
              <select className={inputCls} defaultValue="Stockable">
                <option>Stockable</option>
                <option>Non-Stockable</option>
              </select>
            </Field>
            <Field label="Expirable">
              <input type="checkbox" />
            </Field>
            <Field label="Is CSSD">
              <input type="checkbox" />
            </Field>

            <Field label="Is Laundry">
              <input type="checkbox" />
            </Field>
            <Field label="Is Dose & Unit Required">
              <input type="checkbox" />
            </Field>
            <Field label="Item Dose">
              <input className={inputCls} />
            </Field>

            <Field label="Unit">
              <select className={inputCls} defaultValue="">
                <option value="" disabled>
                  SELECT
                </option>
                <option>mg</option>
                <option>ml</option>
                <option>g</option>
              </select>
            </Field>
            <Field label="Med.Department">
              <select
                className={`${inputCls} border-destructive`}
                defaultValue=""
              >
                <option value="" disabled>
                  Select
                </option>
                <option>Pharmacy</option>
                <option>OT</option>
                <option>Ward</option>
              </select>
            </Field>
            <Field label="Is ZHSF PriAuthRequired">
              <input type="checkbox" />
            </Field>

            <Field label="ZHSF ItemCode (District)">
              <input className={inputCls} />
            </Field>
            <Field label="ZHSF ItemCode (Regional)">
              <input className={inputCls} />
            </Field>
            <Field label="Essential Medi.">
              <input type="checkbox" />
            </Field>

            <Field label="Vaccine Medi.">
              <input type="checkbox" />
            </Field>
          </div>

          <div className="flex justify-center gap-3 pt-3 border-t">
            <button
              type="submit"
              className="px-8 py-2 bg-primary text-primary-foreground rounded font-semibold hover:bg-primary/90"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border rounded font-semibold hover:bg-muted"
            >
              Cancel
            </button>
          </div>
          <div className="flex justify-center gap-6 text-sm text-primary underline">
            <a href="#">Create Drug Category</a>
            <a href="#">Create New Manufacturer</a>
            <a href="#">Refresh Manufacturer List</a>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ----------------------- Others Item Master ----------------------- */

function OthersItemMasterModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center overflow-y-auto p-4">
      <div className="bg-card rounded-lg shadow-xl w-full max-w-6xl my-4">
        <div className="flex items-center justify-between px-4 py-2.5 border-b bg-primary/10">
          <h2 className="text-base font-bold">Item Master</h2>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex justify-center gap-6 py-2 border-b text-sm">
          <label className="flex items-center gap-2">
            <input type="radio" name="itemmode" defaultChecked /> New
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="itemmode" /> Edit
          </label>
        </div>

        <form
          className="p-5 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <Field label="Category">
            <select className={inputCls} defaultValue="ADMINISTRATIVE CHARGES">
              <option>ADMINISTRATIVE CHARGES</option>
              <option>PROCEDURE</option>
              <option>WARD CHARGES</option>
              <option>SERVICE</option>
              <option>MISC</option>
            </select>
          </Field>
          <Field label="Sub Category">
            <select className={inputCls} defaultValue="">
              <option value="" disabled>
                Select
              </option>
              <option>Registration</option>
              <option>Consultation</option>
              <option>Admission</option>
            </select>
          </Field>
          <Field label="Item Name">
            <input className={`${inputCls} border-destructive`} />
          </Field>

          <Field label="CPT Code">
            <input className={inputCls} />
          </Field>
          <Field label="Department">
            <select
              className={`${inputCls} border-destructive`}
              defaultValue=""
            >
              <option value="" disabled>
                Select
              </option>
              <option>OPD</option>
              <option>IPD</option>
              <option>Ward</option>
              <option>OT</option>
            </select>
          </Field>
          <Field label="Rate Editable">
            <div className="flex items-center gap-4 text-sm">
              <label className="flex items-center gap-1.5">
                <input type="radio" name="oratedit" /> Yes
              </label>
              <label className="flex items-center gap-1.5">
                <input type="radio" name="oratedit" defaultChecked /> No
              </label>
            </div>
          </Field>

          <Field label="Is Discountable">
            <div className="flex items-center gap-4 text-sm">
              <label className="flex items-center gap-1.5">
                <input type="radio" name="oisdisc" /> Yes
              </label>
              <label className="flex items-center gap-1.5">
                <input type="radio" name="oisdisc" defaultChecked /> No
              </label>
            </div>
          </Field>
          <Field label="Measur Unit">
            <input className={inputCls} defaultValue="1" />
          </Field>
          <Field label="Measur Qty">
            <input className={inputCls} defaultValue="1" />
          </Field>

          <Field label="IsShare Ward">
            <div className="flex items-center gap-4 text-sm">
              <label className="flex items-center gap-1.5">
                <input type="radio" name="oshareward" /> Yes
              </label>
              <label className="flex items-center gap-1.5">
                <input type="radio" name="oshareward" defaultChecked /> No
              </label>
            </div>
          </Field>

          <div className="md:col-span-3 flex justify-center gap-3 pt-4 border-t mt-2">
            <button
              type="submit"
              className="px-8 py-2 bg-primary text-primary-foreground rounded font-semibold hover:bg-primary/90"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border rounded font-semibold hover:bg-muted"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ----------------------- Global Master (all dropdown data) ----------------------- */

type MasterKey =
  | "groupType"
  | "paymentMode"
  | "rateType"
  | "currency"
  | "panelType"
  | "department"
  | "subDepartment"
  | "itemCategory"
  | "itemSubCategory"
  | "uom"
  | "manufacturer"
  | "stockType"
  | "gender"
  | "title"
  | "bloodGroup"
  | "maritalStatus"
  | "idProof"
  | "relationship"
  | "appointmentStatus"
  | "consultationType"
  | "diagnosisType"
  | "diet"
  | "ward"
  | "roomType"
  | "specialization"
  | "qualification"
  | "designation"
  | "role"
  | "shift"
  | "taxType"
  | "discountReason"
  | "refundReason"
  | "cancellationReason";

const MASTER_GROUPS: {
  group: string;
  items: { key: MasterKey; label: string; seed: string[] }[];
}[] = [
  {
    group: "Panel / Billing",
    items: [
      {
        key: "groupType",
        label: "Group Type",
        seed: ["INSURANCE", "CORPORATE", "GOVERNMENT", "TPA"],
      },
      {
        key: "paymentMode",
        label: "Payment Mode",
        seed: ["Cash", "Credit", "Cheque", "Online", "UPI", "Card"],
      },
      { key: "rateType", label: "Rate Type", seed: ["SELF", "PANEL", "CASH"] },
      {
        key: "currency",
        label: "Currency",
        seed: ["INR", "USD", "EUR", "TZS", "GBP"],
      },
      { key: "panelType", label: "Panel Type", seed: ["Credit", "Cash"] },
      {
        key: "taxType",
        label: "Tax Type",
        seed: ["GST 5%", "GST 12%", "GST 18%", "Exempt"],
      },
      {
        key: "discountReason",
        label: "Discount Reason",
        seed: ["Senior Citizen", "Staff", "Camp", "Goodwill"],
      },
      {
        key: "refundReason",
        label: "Refund Reason",
        seed: ["Duplicate Payment", "Cancelled Service", "Overcharge"],
      },
      {
        key: "cancellationReason",
        label: "Cancellation Reason",
        seed: ["Patient No-Show", "Doctor Unavailable", "Emergency"],
      },
    ],
  },
  {
    group: "Clinical",
    items: [
      {
        key: "department",
        label: "Department",
        seed: [
          "Cardiology",
          "Neurology",
          "Orthopedics",
          "Pediatrics",
          "General Medicine",
        ],
      },
      {
        key: "subDepartment",
        label: "Sub Department",
        seed: [
          "Biochemistry",
          "Hematology",
          "Microbiology",
          "Radiology",
          "Pathology",
        ],
      },
      {
        key: "consultationType",
        label: "Consultation Type",
        seed: ["New", "Follow-up", "Tele", "Emergency"],
      },
      {
        key: "diagnosisType",
        label: "Diagnosis Type",
        seed: ["Provisional", "Final", "Differential"],
      },
      {
        key: "diet",
        label: "Diet Type",
        seed: ["Normal", "Diabetic", "Cardiac", "Renal", "Soft"],
      },
      {
        key: "ward",
        label: "Ward",
        seed: ["General", "Semi-Private", "Private", "Deluxe", "ICU"],
      },
      {
        key: "roomType",
        label: "Room Type",
        seed: ["Single", "Double", "Sharing", "Suite"],
      },
      {
        key: "appointmentStatus",
        label: "Appointment Status",
        seed: ["Scheduled", "Checked-In", "Completed", "Cancelled", "No-Show"],
      },
    ],
  },
  {
    group: "Items / Pharmacy",
    items: [
      {
        key: "itemCategory",
        label: "Item Category",
        seed: ["Tablet", "Syrup", "Injection", "Surgical", "Consumable"],
      },
      {
        key: "itemSubCategory",
        label: "Item Sub Category",
        seed: ["Antibiotic", "Analgesic", "Antipyretic", "Vitamin"],
      },
      {
        key: "uom",
        label: "Unit of Measure",
        seed: ["Each", "Strip", "Bottle", "Vial", "Box", "ml", "mg"],
      },
      {
        key: "manufacturer",
        label: "Manufacturer",
        seed: ["Cipla", "Sun Pharma", "Dr. Reddy's", "Abbott", "GSK"],
      },
      {
        key: "stockType",
        label: "Stock Type",
        seed: ["Regular", "Cold Chain", "Narcotic", "Consignment"],
      },
    ],
  },
  {
    group: "Patient",
    items: [
      {
        key: "title",
        label: "Title",
        seed: ["Mr.", "Mrs.", "Ms.", "Dr.", "Master", "Baby"],
      },
      { key: "gender", label: "Gender", seed: ["Male", "Female", "Other"] },
      {
        key: "bloodGroup",
        label: "Blood Group",
        seed: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
      },
      {
        key: "maritalStatus",
        label: "Marital Status",
        seed: ["Single", "Married", "Divorced", "Widowed"],
      },
      {
        key: "idProof",
        label: "ID Proof",
        seed: ["Aadhaar", "PAN", "Passport", "Driving License", "Voter ID"],
      },
      {
        key: "relationship",
        label: "Relationship",
        seed: [
          "Self",
          "Spouse",
          "Father",
          "Mother",
          "Son",
          "Daughter",
          "Sibling",
        ],
      },
    ],
  },
  {
    group: "Staff / Users",
    items: [
      {
        key: "specialization",
        label: "Specialization",
        seed: ["MBBS", "MD", "MS", "DM", "MCh"],
      },
      {
        key: "qualification",
        label: "Qualification",
        seed: ["MBBS", "MD Medicine", "MS Surgery", "BDS", "BAMS"],
      },
      {
        key: "designation",
        label: "Designation",
        seed: [
          "Consultant",
          "Senior Resident",
          "Junior Resident",
          "Nurse",
          "Technician",
        ],
      },
      {
        key: "role",
        label: "User Role",
        seed: [
          "Admin",
          "Doctor",
          "Nurse",
          "Receptionist",
          "Pharmacist",
          "Lab Tech",
          "Cashier",
        ],
      },
      {
        key: "shift",
        label: "Shift",
        seed: ["Morning", "Evening", "Night", "General"],
      },
    ],
  },
];

function GlobalMasterModal({ onClose }: { onClose: () => void }) {
  const [active, setActive] = useState<MasterKey>("groupType");
  const [data, setData] = useState<Record<string, string[]>>(() => {
    const d: Record<string, string[]> = {};
    MASTER_GROUPS.forEach((g) =>
      g.items.forEach((i) => {
        d[i.key] = [...i.seed];
      }),
    );
    return d;
  });
  const [newVal, setNewVal] = useState("");
  const [search, setSearch] = useState("");

  const activeMeta = MASTER_GROUPS.flatMap((g) => g.items).find(
    (i) => i.key === active,
  )!;
  const values = (data[active] || []).filter((v) =>
    v.toLowerCase().includes(search.toLowerCase()),
  );

  const add = () => {
    const v = newVal.trim();
    if (!v) return;
    setData((d) => ({ ...d, [active]: [...(d[active] || []), v] }));
    setNewVal("");
  };
  const remove = (idx: number) => {
    setData((d) => ({
      ...d,
      [active]: (d[active] || []).filter((_, i) => i !== idx),
    }));
  };
  const edit = (idx: number, v: string) => {
    setData((d) => ({
      ...d,
      [active]: (d[active] || []).map((x, i) => (i === idx ? v : x)),
    }));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center overflow-y-auto p-4">
      <div className="bg-card rounded-lg shadow-xl w-full max-w-6xl my-4">
        <div className="flex items-center justify-between px-4 py-2.5 border-b bg-primary/10">
          <div>
            <h2 className="text-base font-bold">Global Master Configuration</h2>
            <p className="text-xs text-muted-foreground">
              Manage all dropdown lists used across the application from a
              single screen
            </p>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] h-[70vh]">
          {/* Sidebar list of masters */}
          <div className="border-r overflow-y-auto p-2 bg-muted/30">
            {MASTER_GROUPS.map((g) => (
              <div key={g.group} className="mb-3">
                <div className="text-[10px] uppercase tracking-wide text-muted-foreground px-2 py-1 font-semibold">
                  {g.group}
                </div>
                {g.items.map((i) => (
                  <button
                    key={i.key}
                    onClick={() => {
                      setActive(i.key);
                      setSearch("");
                      setNewVal("");
                    }}
                    className={`w-full text-left px-2 py-1.5 rounded text-sm flex justify-between items-center ${
                      active === i.key
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    <span>{i.label}</span>
                    <span
                      className={`text-[10px] px-1.5 rounded ${active === i.key ? "bg-primary-foreground/20" : "bg-muted-foreground/10 text-muted-foreground"}`}
                    >
                      {(data[i.key] || []).length}
                    </span>
                  </button>
                ))}
              </div>
            ))}
          </div>

          {/* Right pane: editor */}
          <div className="flex flex-col overflow-hidden">
            <div className="px-4 py-3 border-b">
              <h3 className="font-semibold">{activeMeta.label}</h3>
              <p className="text-xs text-muted-foreground">
                Add, edit or remove options that appear in the "
                {activeMeta.label}" dropdown.
              </p>
            </div>

            <div className="px-4 py-3 border-b flex flex-wrap items-center gap-2">
              <input
                value={newVal}
                onChange={(e) => setNewVal(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    add();
                  }
                }}
                placeholder={`Add new ${activeMeta.label}...`}
                className={`${inputCls} flex-1 min-w-[200px]`}
              />
              <button
                onClick={add}
                className="h-8 px-4 bg-primary text-primary-foreground rounded text-sm font-semibold hover:bg-primary/90"
              >
                + Add
              </button>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className={`${inputCls} w-48`}
              />
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs text-muted-foreground border-b">
                    <th className="pb-2 w-12">#</th>
                    <th>Value</th>
                    <th className="w-24 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {values.length === 0 && (
                    <tr>
                      <td
                        colSpan={3}
                        className="py-8 text-center text-muted-foreground text-sm"
                      >
                        No entries. Add one above.
                      </td>
                    </tr>
                  )}
                  {values.map((v, i) => {
                    const realIdx = (data[active] || []).indexOf(v);
                    return (
                      <tr key={`${v}-${i}`} className="border-b last:border-0">
                        <td className="py-2 text-muted-foreground">{i + 1}</td>
                        <td>
                          <input
                            value={v}
                            onChange={(e) => edit(realIdx, e.target.value)}
                            className="w-full h-8 px-2 border rounded bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                          />
                        </td>
                        <td className="text-right">
                          <button
                            onClick={() => remove(realIdx)}
                            className="text-xs px-2 py-1 border border-destructive/30 text-destructive rounded hover:bg-destructive/10"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="border-t px-4 py-3 flex justify-end gap-2 bg-muted/30">
              <button
                onClick={onClose}
                className="px-4 py-1.5 border rounded text-sm hover:bg-muted"
              >
                Cancel
              </button>
              <button
                onClick={onClose}
                className="px-6 py-1.5 bg-primary text-primary-foreground rounded text-sm font-semibold hover:bg-primary/90"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
