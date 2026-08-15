import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import {
  $ as FileText,
  A as Pill,
  Z as FlaskConical,
  _ as Stethoscope,
  g as StickyNote,
  ht as Calendar,
} from "../_libs/lucide-react.mjs";
import { t as AppLayout } from "./AppLayout-Ch-U9iwL.mjs";
import { n as Section } from "./Kpi-DY4t6Vll.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/consultation-ByWt08Hh.js
var import_jsx_runtime = require_jsx_runtime();
function Consultation() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLayout, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mb-6 flex items-start justify-between gap-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                className: "text-2xl font-bold",
                children: "Doctor Consultation",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-sm text-muted-foreground",
                children: "Complete OPD consultation and prescription",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex gap-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                className:
                  "px-4 py-2 rounded-lg bg-warning text-warning-foreground text-sm font-medium shadow-sm hover:opacity-90",
                children: "Review",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                className:
                  "px-4 py-2 rounded-lg bg-success text-success-foreground text-sm font-medium shadow-sm hover:opacity-90",
                children: "Check-out",
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "bg-card border rounded-xl p-5 mb-6",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex items-center gap-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className:
                  "w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary",
                children: "RP",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                        className: "text-lg font-bold",
                        children: "Ramesh Patel",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className:
                          "text-[10px] px-1.5 py-0.5 bg-primary/10 text-primary rounded font-mono",
                        children: "OPD123456",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "text-xs text-muted-foreground",
                    children: "58Y Male · A+ · 9876543210 · ABDM: XJHGF2345K",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "ml-auto flex gap-2 text-xs",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className:
                      "px-2 py-1 rounded bg-destructive/10 text-destructive",
                    children: "Allergy: Penicillin",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "px-2 py-1 rounded bg-info/10 text-info",
                    children: "Insurance: Star Health",
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "grid grid-cols-6 gap-3 mt-4",
            children: [
              ["BP", "140/90", "mmHg"],
              ["Pulse", "98", "/min"],
              ["Temp", "99.1", "°F"],
              ["SpO₂", "98", "%"],
              ["Weight", "78", "kg"],
              ["BMI", "26.3", "kg/m²"],
            ].map(([l, v, u]) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "div",
                {
                  className: "p-2 rounded border text-xs",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "text-muted-foreground",
                      children: l,
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "font-bold text-base",
                      children: [
                        v,
                        " ",
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "text-[10px] text-muted-foreground",
                          children: u,
                        }),
                      ],
                    }),
                  ],
                },
                l,
              ),
            ),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "flex gap-2 border-b mb-6 text-sm overflow-x-auto",
        children: [
          {
            i: Stethoscope,
            l: "Consultation",
            a: true,
          },
          {
            i: FileText,
            l: "History",
          },
          {
            i: FileText,
            l: "Examination",
          },
          {
            i: FlaskConical,
            l: "Investigations",
          },
          {
            i: Pill,
            l: "Prescription",
          },
          {
            i: StickyNote,
            l: "Advice",
          },
          {
            i: Calendar,
            l: "Follow Up",
          },
        ].map((t) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "button",
            {
              className: `flex items-center gap-2 px-4 py-2 border-b-2 ${t.a ? "border-primary text-primary font-medium" : "border-transparent text-muted-foreground"}`,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.i, {
                  className: "w-4 h-4",
                }),
                " ",
                t.l,
              ],
            },
            t.l,
          ),
        ),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "grid grid-cols-3 gap-6",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
            title: "🩺 Chief Complaints & History",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
                className: "w-full p-2 border rounded-lg text-sm",
                rows: 4,
                defaultValue:
                  "Chest pain on exertion since 2 days\nBreathlessness since 1 day",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "mt-4 text-sm space-y-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "font-semibold",
                    children: "History",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "text-xs",
                    children: "Hypertension since 5 years",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "text-xs",
                    children: "Diabetes Mellitus Type 2 since 3 years",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "mt-4 text-sm space-y-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "font-semibold",
                    children: "Examination",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "text-xs",
                    children: "CVS: S1 S2 normal, No murmur",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "text-xs",
                    children: "RS: Air entry equal both sides",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "text-xs",
                    children: "P/A: Soft, Non tender",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "mt-4 text-sm",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "font-semibold",
                    children: "Diagnosis",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "text-xs mt-1",
                    children: "I20.8 — Other forms of Angina Pectoris",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "text-xs",
                    children: "I10 — Essential (primary) hypertension",
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
            title: "💊 Prescription",
            action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
              className: "text-xs text-primary",
              children: "+ Favorites",
            }),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                placeholder: "Search medicine...",
                className: "w-full px-3 py-2 border rounded-lg text-sm mb-3",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "space-y-2",
                children: [
                  [
                    {
                      n: "Tab. Ecosprin AV 75 mg",
                      dose: "1-0-1 After Food",
                      days: "10 Days",
                    },
                    {
                      n: "Tab. Telma 40 mg",
                      dose: "1-0-0 After Food",
                      days: "30 Days",
                    },
                    {
                      n: "Tab. Atorva 10 mg",
                      dose: "0-0-1 After Food",
                      days: "30 Days",
                    },
                    {
                      n: "Tab. Metformin 500 mg",
                      dose: "1-0-1 After Food",
                      days: "30 Days",
                    },
                  ].map((m) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "div",
                      {
                        className: "p-3 border rounded-lg",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "flex justify-between",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "div",
                                {
                                  className: "font-semibold text-sm",
                                  children: m.n,
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "span",
                                {
                                  className: "text-xs text-muted-foreground",
                                  children: m.days,
                                },
                              ),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className: "text-xs text-muted-foreground",
                            children: m.dose,
                          }),
                        ],
                      },
                      m.n,
                    ),
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    className:
                      "w-full py-2 border-2 border-dashed rounded-lg text-sm text-primary",
                    children: "+ Add Medicine",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "mt-4 flex gap-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    className: "flex-1 py-2 border rounded-lg text-sm",
                    children: "Save Draft",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    className:
                      "flex-1 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium",
                    children: "Save & Print (F2)",
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
            title: "🧪 Investigations & Advice",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "text-xs font-semibold mb-2",
                children: "Investigations",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "space-y-1 text-sm",
                children: [
                  [
                    "CBC (Complete Blood Count)",
                    "Lipid Profile",
                    "ECG",
                    "TMT",
                  ].map((t) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "div",
                      {
                        className: "px-3 py-2 border rounded-lg",
                        children: t,
                      },
                      t,
                    ),
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    className:
                      "w-full py-2 border-2 border-dashed rounded-lg text-sm text-primary mt-1",
                    children: "+ Add Test",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "mt-5",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "text-xs font-semibold mb-2",
                    children: "Advice",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
                    className: "text-sm space-y-1 list-disc list-inside",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                        children: "Avoid oily food",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                        children: "Daily 30 min walking",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                        children: "Monitor BP daily",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                        children: "Follow low salt diet",
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "mt-5",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "text-xs font-semibold mb-2",
                    children: "Follow Up",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "flex gap-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
                        className: "flex-1 border rounded-lg px-2 py-2 text-sm",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "option",
                          { children: "After 7 Days" },
                        ),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                        type: "date",
                        defaultValue: "2025-05-27",
                        className: "flex-1 border rounded-lg px-2 py-2 text-sm",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
//#endregion
export { Consultation as component };
