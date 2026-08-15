import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import {
  A as Pill,
  Z as FlaskConical,
  _ as Stethoscope,
  at as Clock,
  bt as Activity,
  c as Users,
  f as UserCheck,
  ht as Calendar,
  lt as CircleCheck,
  m as TrendingUp,
  p as TriangleAlert,
  vt as ArrowRight,
} from "../_libs/lucide-react.mjs";
import { t as AppLayout } from "./AppLayout-Ch-U9iwL.mjs";
import { n as Section, t as Kpi } from "./Kpi-DY4t6Vll.mjs";
import { t as useApiQuery } from "./useApiResource-CCm4w06O.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Ck_7AsbV.js
var import_jsx_runtime = require_jsx_runtime();
function Dashboard() {
  const { data, isLoading, error } = useApiQuery(
    ["dashboard-overview"],
    "/dashboard/overview",
    { staleTime: 3e4 },
  );
  const overview = data?.overview;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLayout, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mb-6 flex items-center justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                className: "text-2xl font-bold",
                children: "Dashboard Overview",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-sm text-muted-foreground",
                children: "Real time overview of hospital operations",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex gap-2 text-xs",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "px-3 py-2 rounded-lg bg-card border",
                children: "20 May 2025",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className:
                  "px-3 py-2 rounded-lg bg-card border flex items-center gap-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "w-2 h-2 rounded-full bg-success animate-pulse",
                  }),
                  " ",
                  "Live",
                ],
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-6",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
            icon: Users,
            label: "Total OPD Today",
            value: isLoading ? "—" : `${overview?.totalOpdToday ?? 1248}`,
            delta: "12%",
            tone: "primary",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
            icon: UserCheck,
            label: "Patients Seen",
            value: isLoading ? "—" : `${overview?.patientsSeen ?? 982}`,
            delta: "10%",
            tone: "success",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
            icon: Calendar,
            label: "Appointments",
            value: isLoading ? "—" : `${overview?.appointments ?? 1576}`,
            delta: "14%",
            tone: "info",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
            icon: Stethoscope,
            label: "In Consultation",
            value: "32",
            tone: "primary",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
            icon: Clock,
            label: "Waiting",
            value: isLoading ? "—" : `${overview?.waiting ?? 68}`,
            delta: "Avg 24m",
            tone: "warning",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
            icon: CircleCheck,
            label: "Completed",
            value: isLoading ? "—" : `${overview?.completed ?? 912}`,
            delta: "11%",
            tone: "success",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
            icon: TrendingUp,
            label: "Revenue",
            value: isLoading
              ? "—"
              : `₹${(overview?.revenue ?? 84e4).toLocaleString()}`,
            delta: "15%",
            tone: "primary",
          }),
        ],
      }),
      error
        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className:
              "mb-6 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive",
            children:
              "Unable to load dashboard metrics. Showing cached fallback values.",
          })
        : null,
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
        title: "OPD Flow — Real Time",
        className: "mb-6",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "flex items-center gap-2 overflow-x-auto pb-2",
          children: [
            {
              l: "Registered",
              v: 1248,
              t: "primary",
            },
            {
              l: "In Queue",
              v: 68,
              t: "info",
            },
            {
              l: "In Consultation",
              v: 32,
              t: "warning",
            },
            {
              l: "Investigations",
              v: 45,
              t: "info",
            },
            {
              l: "Pharmacy",
              v: 38,
              t: "warning",
            },
            {
              l: "Completed",
              v: 912,
              t: "success",
            },
          ].map((s, i, arr) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "div",
              {
                className: "flex items-center gap-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "min-w-35 p-3 rounded-lg border bg-muted/30",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "text-xs text-muted-foreground",
                        children: s.l,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "text-xl font-bold",
                        children: s.v,
                      }),
                    ],
                  }),
                  i < arr.length - 1 &&
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
                      className: "w-4 h-4 text-muted-foreground",
                    }),
                ],
              },
              s.l,
            ),
          ),
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
            title: "Department Overview",
            className: "lg:col-span-2",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "grid grid-cols-2 gap-3",
              children: [
                {
                  d: "Cardiology",
                  opd: 230,
                  cons: 18,
                  rev: "2,45,000",
                },
                {
                  d: "Orthopedics",
                  opd: 185,
                  cons: 12,
                  rev: "1,82,500",
                },
                {
                  d: "General Medicine",
                  opd: 312,
                  cons: 22,
                  rev: "2,05,400",
                },
                {
                  d: "Dermatology",
                  opd: 132,
                  cons: 8,
                  rev: "78,600",
                },
              ].map((x) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "div",
                  {
                    className: "p-4 rounded-lg border",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "font-semibold text-sm mb-2",
                        children: x.d,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "grid grid-cols-3 gap-2 text-xs",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "div",
                                {
                                  className: "text-muted-foreground",
                                  children: "OPD",
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "div",
                                {
                                  className: "font-bold",
                                  children: x.opd,
                                },
                              ),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "div",
                                {
                                  className: "text-muted-foreground",
                                  children: "Cons",
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "div",
                                {
                                  className: "font-bold",
                                  children: x.cons,
                                },
                              ),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "div",
                                {
                                  className: "text-muted-foreground",
                                  children: "Revenue",
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className: "font-bold",
                                  children: ["₹", x.rev],
                                },
                              ),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  x.d,
                ),
              ),
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
            title: "Critical Alerts",
            action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              className: "text-xs text-primary",
              children: "View All",
            }),
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "space-y-3",
              children: [
                {
                  i: TriangleAlert,
                  t: "High Priority Patient",
                  s: "Emergency Ward - Bed 3",
                  time: "10:42",
                  tone: "text-destructive",
                },
                {
                  i: Pill,
                  t: "Medicine Low Stock",
                  s: "Atorvastatin 10mg",
                  time: "10:30",
                  tone: "text-warning-foreground",
                },
                {
                  i: FlaskConical,
                  t: "Lab Critical",
                  s: "2 Pending Reports",
                  time: "10:25",
                  tone: "text-info",
                },
                {
                  i: Activity,
                  t: "Equipment Maintenance",
                  s: "ECG Machine - Due",
                  time: "10:10",
                  tone: "text-muted-foreground",
                },
              ].map((a, i) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "div",
                  {
                    className:
                      "flex items-start gap-3 pb-3 border-b last:border-0",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a.i, {
                        className: `w-4 h-4 mt-0.5 ${a.tone}`,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "flex-1 min-w-0",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className: "text-sm font-medium",
                            children: a.t,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className: "text-xs text-muted-foreground",
                            children: a.s,
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "text-[10px] text-muted-foreground",
                        children: [a.time, " AM"],
                      }),
                    ],
                  },
                  i,
                ),
              ),
            }),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
            title: "Top Services (By Revenue)",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
              className: "w-full text-sm",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
                    className:
                      "text-left text-xs text-muted-foreground border-b",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
                        className: "py-2",
                        children: "Service",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
                        children: "Count",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
                        className: "text-right",
                        children: "Revenue",
                      }),
                    ],
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
                  children: [
                    ["Consultation Fee", 982, "3,25,600"],
                    ["ECG", 155, "1,24,000"],
                    ["Blood Test", 312, "1,05,300"],
                    ["X-Ray", 98, "85,600"],
                    ["Ultrasound", 76, "68,900"],
                  ].map(([s, c, r]) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "tr",
                      {
                        className: "border-b last:border-0",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
                            className: "py-2.5",
                            children: s,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
                            children: c,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
                            className: "text-right font-semibold",
                            children: ["₹", r],
                          }),
                        ],
                      },
                      s,
                    ),
                  ),
                }),
              ],
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
            title: "Today's Financial Summary",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "grid grid-cols-2 gap-3",
              children: [
                {
                  l: "Total Revenue",
                  v: "₹8,45,230",
                  d: "15%",
                  tone: "text-success",
                },
                {
                  l: "Total Collection",
                  v: "₹7,92,430",
                  d: "13%",
                  tone: "text-success",
                },
                {
                  l: "Total Expenses",
                  v: "₹2,45,300",
                  d: "8%",
                  tone: "text-destructive",
                },
                {
                  l: "Net Profit",
                  v: "₹5,47,130",
                  d: "18%",
                  tone: "text-success",
                },
              ].map((x) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "div",
                  {
                    className: "p-4 rounded-lg border",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "text-xs text-muted-foreground",
                        children: x.l,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "text-xl font-bold mt-1",
                        children: x.v,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: `text-[11px] ${x.tone}`,
                        children: ["↑ ", x.d],
                      }),
                    ],
                  },
                  x.l,
                ),
              ),
            }),
          }),
        ],
      }),
    ],
  });
}
//#endregion
export { Dashboard as component };
