import { c as e, d as t } from "./auth-CRzH69JE.js";
import { i as n } from "./Match-D3SkUO7z.js";
import {
  C as r,
  S as i,
  _ as a,
  b as o,
  d as s,
  f as c,
  h as l,
  m as u,
  p as d,
  t as f,
  u as p,
  v as m,
  w as h,
} from "./AppLayout-x7TZ9xUn.js";
var g = t(),
  _ = [
    {
      to: `/registration`,
      label: `Registration`,
      desc: `Patient registration & UHID`,
      icon: c,
      tone: `text-primary bg-primary/10`,
    },
    {
      to: `/appointments`,
      label: `Appointment`,
      desc: `Slot booking & scheduling`,
      icon: h,
      tone: `text-info bg-info/10`,
    },
    {
      to: `/queue`,
      label: `OPD Examination`,
      desc: `Nursing queue & vitals`,
      icon: i,
      tone: `text-warning-foreground bg-warning/20`,
    },
    {
      to: `/consultation`,
      label: `Doctor`,
      desc: `Consultation & prescription`,
      icon: u,
      tone: `text-destructive bg-destructive/10`,
    },
    {
      to: `/teleconsultation`,
      label: `Teleconsultation`,
      desc: `Video consults & remote care`,
      icon: p,
      tone: `text-info bg-info/10`,
    },
    {
      to: `/billing`,
      label: `Billing`,
      desc: `Invoices, payments & refunds`,
      icon: a,
      tone: `text-success bg-success/10`,
    },
    {
      to: `/pharmacy`,
      label: `Pharmacy`,
      desc: `Stock & dispensing`,
      icon: m,
      tone: `text-warning-foreground bg-warning/20`,
    },
    {
      to: `/lab`,
      label: `Lab & Radiology`,
      desc: `Investigations & reports`,
      icon: o,
      tone: `text-info bg-info/10`,
    },
    {
      to: `/patients`,
      label: `Patients`,
      desc: `Master patient directory`,
      icon: s,
      tone: `text-primary bg-primary/10`,
    },
    {
      to: `/reports`,
      label: `Reports`,
      desc: `Analytics & MIS reports`,
      icon: r,
      tone: `text-destructive bg-destructive/10`,
    },
    {
      to: `/master`,
      label: `Master Configurations`,
      desc: `Doctors, panels, items, rates`,
      icon: l,
      tone: `text-primary bg-primary/10`,
    },
    {
      to: `/user-management`,
      label: `User Management`,
      desc: `Users, roles & permissions`,
      icon: d,
      tone: `text-success bg-success/10`,
    },
  ];
function v() {
  let t = e(),
    r = (e) => {
      try {
        (localStorage.setItem(`selectedModule`, e),
          window.dispatchEvent(new Event(`selectedModuleChange`)));
      } catch {}
      t({ to: e });
    };
  return (0, g.jsxs)(f, {
    children: [
      (0, g.jsxs)(`div`, {
        className: `mb-6 flex items-center justify-between`,
        children: [
          (0, g.jsxs)(`div`, {
            children: [
              (0, g.jsx)(`h1`, {
                className: `text-2xl font-bold`,
                children: `Get Modules`,
              }),
              (0, g.jsx)(`p`, {
                className: `text-sm text-muted-foreground`,
                children: `Select a module to open — only that page will appear in the sidebar`,
              }),
            ],
          }),
          (0, g.jsx)(`button`, {
            onClick: () => {
              try {
                (localStorage.removeItem(`selectedModule`),
                  window.dispatchEvent(new Event(`selectedModuleChange`)));
              } catch {}
            },
            className: `text-xs px-3 py-1.5 border rounded hover:bg-muted`,
            children: `Show all modules in sidebar`,
          }),
        ],
      }),
      (0, g.jsx)(`div`, {
        className: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`,
        children: _.map((e) => {
          let t = e.icon;
          return (0, g.jsxs)(
            `button`,
            {
              onClick: () => r(e.to),
              className: `group text-left bg-card border rounded-xl p-5 hover:border-primary hover:shadow-md transition-all`,
              children: [
                (0, g.jsx)(`div`, {
                  className: `w-12 h-12 rounded-lg ${e.tone} flex items-center justify-center mb-4`,
                  children: (0, g.jsx)(t, { className: `w-6 h-6` }),
                }),
                (0, g.jsx)(`div`, {
                  className: `font-semibold text-sm group-hover:text-primary`,
                  children: e.label,
                }),
                (0, g.jsx)(`div`, {
                  className: `text-xs text-muted-foreground mt-1`,
                  children: e.desc,
                }),
                (0, g.jsx)(`div`, {
                  className: `text-xs font-medium text-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity`,
                  children: `Open module →`,
                }),
              ],
            },
            e.to,
          );
        }),
      }),
      (0, g.jsx)(`div`, {
        className: `mt-6 hidden`,
        children: (0, g.jsx)(n, { to: `/`, children: `home` }),
      }),
    ],
  });
}
export { v as component };
