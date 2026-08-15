import { n as __toESM } from "../_runtime.mjs";
import {
  i as require_react,
  r as require_jsx_runtime,
} from "../_libs/react+tanstack__react-query.mjs";
import {
  $ as FileText,
  E as Ruler,
  U as LogIn,
  X as Heart,
  bt as Activity,
  h as Thermometer,
  i as Weight,
  j as Phone,
  n as Wind,
  ut as CircleAlert,
} from "../_libs/lucide-react.mjs";
import { t as AppLayout } from "./AppLayout-Ch-U9iwL.mjs";
import { n as Section } from "./Kpi-DY4t6Vll.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/queue-DXDlgii8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var waitingList = [
  {
    id: "A-1025",
    n: "Sunita Devi",
    age: "45Y Female",
    chief: "Fever, Body Ache",
    status: "Waiting",
    arrived: "15 min",
  },
  {
    id: "A-1026",
    n: "Imran Khan",
    age: "32Y Male",
    chief: "Cough, Cold",
    status: "Waiting",
    arrived: "20 min",
  },
  {
    id: "A-1027",
    n: "Meena Kumari",
    age: "28Y Female",
    chief: "Back Pain",
    status: "Waiting",
    arrived: "25 min",
  },
  {
    id: "A-1028",
    n: "Ravi Verma",
    age: "60Y Male",
    chief: "Diabetes Followup",
    status: "Waiting",
    arrived: "30 min",
  },
];
var vitalsDoneList = [
  {
    id: "A-1030",
    n: "Karan Malhotra",
    age: "42Y Male",
    chief: "Headache, Dizziness",
    status: "Vitals Done",
    arrived: "10 min",
  },
  {
    id: "A-1031",
    n: "Deepa Nair",
    age: "36Y Female",
    chief: "Throat Pain",
    status: "Vitals Done",
    arrived: "12 min",
  },
  {
    id: "A-1032",
    n: "Farhan Qureshi",
    age: "29Y Male",
    chief: "Knee Swelling",
    status: "Vitals Done",
    arrived: "18 min",
  },
];
var readyForDoctorList = [
  {
    id: "A-1024",
    n: "Ramesh Patel",
    age: "58Y Male",
    chief: "Chest pain, Breathlessness",
    status: "Ready for Doctor",
    arrived: "10:05 AM",
    active: true,
  },
  {
    id: "A-1029",
    n: "Neha Gupta",
    age: "50Y Female",
    chief: "Palpitations",
    status: "Ready for Doctor",
    arrived: "08:50 AM",
  },
];
var consultationList = [
  {
    id: "A-1019",
    n: "Anita Sharma",
    age: "52Y Female",
    chief: "Lab Report Review — Lipid",
    status: "In Consultation",
    arrived: "09:20 AM",
  },
  {
    id: "A-1021",
    n: "Vikram Rao",
    age: "40Y Male",
    chief: "X-Ray Review — Chest",
    status: "In Consultation",
    arrived: "09:45 AM",
  },
  {
    id: "A-1022",
    n: "Priya Singh",
    age: "35Y Female",
    chief: "USG Report Review",
    status: "In Consultation",
    arrived: "10:00 AM",
  },
];
var vitals = [
  {
    i: Heart,
    l: "BP",
    v: "140/90",
    u: "mmHg",
    tone: "text-destructive",
  },
  {
    i: Activity,
    l: "Pulse",
    v: "98",
    u: "bpm",
  },
  {
    i: Thermometer,
    l: "Temp",
    v: "99.1",
    u: "°F",
  },
  {
    i: Wind,
    l: "SpO₂",
    v: "98",
    u: "%",
  },
  {
    i: Activity,
    l: "Resp. Rate",
    v: "20",
    u: "/min",
  },
  {
    i: Weight,
    l: "Weight",
    v: "78",
    u: "kg",
  },
  {
    i: Ruler,
    l: "Height",
    v: "172",
    u: "cm",
  },
  {
    i: Activity,
    l: "BMI",
    v: "26.3",
    u: "kg/m²",
  },
];
function Examination() {
  const [tab, setTab] = (0, import_react.useState)("waiting");
  const lists = {
    waiting: waitingList,
    vitalsDone: vitalsDoneList,
    readyForDoctor: readyForDoctorList,
    consultation: consultationList,
  };
  const tabs = [
    {
      k: "waiting",
      label: "Waiting",
      count: waitingList.length,
    },
    {
      k: "vitalsDone",
      label: "Vitals Done",
      count: vitalsDoneList.length,
    },
    {
      k: "readyForDoctor",
      label: "Ready for Doctor",
      count: readyForDoctorList.length,
    },
    {
      k: "consultation",
      label: "Consultation",
      count: consultationList.length,
    },
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLayout, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mb-6 flex items-center justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                className: "text-2xl font-bold",
                children: "OPD Examination Room",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-sm text-muted-foreground",
                children: "Nursing Assessment Before Consultation",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex gap-2 text-xs",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className:
                  "px-3 py-2 rounded-lg bg-success/10 text-success flex items-center gap-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "w-2 h-2 rounded-full bg-success",
                  }),
                  " Under Assessment",
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "px-3 py-2 rounded-lg border",
                children: "Avg 06:45 min",
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
            title: "Patients Queue",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "flex gap-1 mb-3 p-1 bg-muted rounded-lg",
                children: tabs.map((t) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "button",
                    {
                      onClick: () => setTab(t.k),
                      className: `flex-1 text-[11px] px-2 py-1.5 rounded-md font-medium transition-colors ${tab === t.k ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
                      children: [t.label, " (", t.count, ")"],
                    },
                    t.k,
                  ),
                ),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "space-y-2 max-h-[560px] overflow-y-auto pr-1",
                children: lists[tab].map((q) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "div",
                    {
                      className: `p-3 rounded-lg border ${q.active ? "border-primary bg-primary/5" : ""}`,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "flex items-center justify-between",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "span",
                              {
                                className:
                                  "text-[10px] font-mono px-1.5 py-0.5 bg-muted rounded",
                                children: q.id,
                              },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "span",
                              {
                                className: `text-[10px] px-1.5 py-0.5 rounded ${q.status === "Ready for Doctor" ? "bg-success/15 text-success" : q.status === "Vitals Done" ? "bg-warning/20 text-warning-foreground" : q.status === "In Consultation" ? "bg-info/15 text-info" : "bg-muted-foreground/10 text-muted-foreground"}`,
                                children: q.status,
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "font-semibold text-sm mt-1",
                          children: q.n,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "text-xs text-muted-foreground",
                          children: q.age,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "text-xs mt-1",
                          children: q.chief,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "text-[10px] text-muted-foreground mt-1",
                          children: ["Arrived / Waiting: ", q.arrived],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "flex gap-2 mt-2",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "button",
                              {
                                className:
                                  "flex-1 flex items-center justify-center gap-1 text-[11px] px-2 py-1.5 rounded-md border hover:bg-muted",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    Phone,
                                    { className: "w-3 h-3" },
                                  ),
                                  " Call",
                                ],
                              },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "button",
                              {
                                className:
                                  "flex-1 flex items-center justify-center gap-1 text-[11px] px-2 py-1.5 rounded-md bg-primary text-primary-foreground hover:opacity-90",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    LogIn,
                                    { className: "w-3 h-3" },
                                  ),
                                  " Check-in",
                                ],
                              },
                            ),
                          ],
                        }),
                      ],
                    },
                    q.id,
                  ),
                ),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "lg:col-span-2 space-y-6",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "bg-card border rounded-xl p-5",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex items-center gap-4 mb-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className:
                        "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary",
                      children: "RP",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "flex-1",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                              className: "text-xl font-bold",
                              children: "Ramesh Patel",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "span",
                              {
                                className:
                                  "text-[10px] font-mono px-1.5 py-0.5 bg-primary/10 text-primary rounded",
                                children: "A-1024",
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "grid grid-cols-4 gap-4 text-xs mt-2",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    {
                                      className: "text-muted-foreground",
                                      children: "Age/Gender",
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    {
                                      className: "font-semibold",
                                      children: "58Y, Male",
                                    },
                                  ),
                                ],
                              },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    {
                                      className: "text-muted-foreground",
                                      children: "Mobile",
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    {
                                      className: "font-semibold",
                                      children: "9876543210",
                                    },
                                  ),
                                ],
                              },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    {
                                      className: "text-muted-foreground",
                                      children: "Blood",
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    {
                                      className: "font-semibold",
                                      children: "A+",
                                    },
                                  ),
                                ],
                              },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    {
                                      className: "text-muted-foreground",
                                      children: "ABDM ID",
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    {
                                      className: "font-semibold",
                                      children: "XJHGF2345K",
                                    },
                                  ),
                                ],
                              },
                            ),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "flex items-center gap-2 text-xs mb-6",
                  children: [
                    "Registration",
                    "Vitals & Assessment",
                    "Medical History",
                    "Nursing Notes",
                    "Ready for Doctor",
                  ].map((s, i) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "div",
                      {
                        className: "flex items-center gap-2",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className: `w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-semibold ${i === 0 ? "bg-success text-success-foreground" : i === 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`,
                            children: i + 1,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className:
                              i <= 1 ? "font-medium" : "text-muted-foreground",
                            children: s,
                          }),
                          i < 4 &&
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className: "w-6 h-px bg-border",
                            }),
                        ],
                      },
                      s,
                    ),
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                  className: "font-semibold mb-3",
                  children: "🩺 Nursing Assessment",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "grid grid-cols-2 gap-4 mb-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                          className: "text-xs text-muted-foreground",
                          children: "Chief Complaint",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          "textarea",
                          {
                            className:
                              "w-full mt-1 p-2 border rounded-lg text-sm",
                            rows: 3,
                            defaultValue:
                              "Chest pain on exertion since 2 days\nBreathlessness since 1 day",
                          },
                        ),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                          className: "text-xs text-muted-foreground",
                          children: "Pain Assessment (0-10)",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "flex gap-1 mt-1",
                          children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                            (n) =>
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "button",
                                {
                                  className: `w-8 h-8 rounded border text-xs ${n === 6 ? "bg-primary text-primary-foreground" : ""}`,
                                  children: n,
                                },
                                n,
                              ),
                          ),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "text-xs text-muted-foreground mt-1",
                          children: "😐 Moderate Pain",
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                  className: "font-semibold mb-3",
                  children: "Vital Signs",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "grid grid-cols-4 gap-3 mb-4",
                  children: vitals.map((v) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "div",
                      {
                        className: "p-3 border rounded-lg",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className:
                              "flex items-center gap-1 text-xs text-muted-foreground",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.i, {
                                className: `w-3 h-3 ${v.tone ?? ""}`,
                              }),
                              " ",
                              v.l,
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className: `text-lg font-bold ${v.tone ?? ""}`,
                            children: v.v,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className: "text-[10px] text-muted-foreground",
                            children: v.u,
                          }),
                        ],
                      },
                      v.l,
                    ),
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex justify-end gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                      className: "px-4 py-2 rounded-lg border text-sm",
                      children: "Save as Draft",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                      className:
                        "px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium",
                      children: "✓ Mark as Ready for Doctor",
                    }),
                  ],
                }),
              ],
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "space-y-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
                title: "Risk & Alerts",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "space-y-3",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className:
                        "p-3 rounded-lg bg-destructive/10 border border-destructive/20",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className:
                            "flex items-center gap-2 text-destructive text-sm font-semibold",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              CircleAlert,
                              { className: "w-4 h-4" },
                            ),
                            " High BP",
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "text-xs mt-1",
                          children: "140/90 mmHg",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className:
                        "p-3 rounded-lg bg-warning/15 border border-warning/30",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "text-sm font-semibold",
                          children: "Low Grade Fever",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "text-xs",
                          children: "99.1 °F",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className:
                        "p-3 rounded-lg bg-info/10 border border-info/20",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "text-sm font-semibold",
                          children: "Allergy",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "text-xs",
                          children: "Penicillin",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
                title: "Previous Visit History — Ramesh Patel",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "space-y-3",
                  children: [
                    {
                      d: "12 May 2025",
                      dr: "Dr. Arjun Mehta — Cardiology",
                      dx: "Angina Pectoris, HTN",
                      rx: "Ecosprin AV 75, Telma 40",
                      note: "BP 138/88, follow-up in 2 weeks",
                    },
                    {
                      d: "05 Apr 2025",
                      dr: "Dr. Neha Kapoor — Pathology",
                      dx: "Lab: CBC, Lipid Profile",
                      rx: "LDL 168 mg/dL (High)",
                      note: "Advised statin therapy",
                    },
                    {
                      d: "18 Mar 2025",
                      dr: "Dr. Arjun Mehta — Cardiology",
                      dx: "Essential Hypertension",
                      rx: "5 Medicines dispensed",
                      note: "Diet & exercise counselling",
                    },
                    {
                      d: "02 Feb 2025",
                      dr: "Dr. S. Iyer — General Med.",
                      dx: "Viral Fever",
                      rx: "Paracetamol, Rest 3 days",
                      note: "Recovered fully",
                    },
                  ].map((v) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "div",
                      {
                        className:
                          "p-3 rounded-lg border hover:border-primary/40 transition-colors",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "div",
                                {
                                  className: "text-xs font-semibold",
                                  children: v.d,
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "button",
                                {
                                  className:
                                    "flex items-center gap-1 text-[10px] text-primary hover:underline",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      FileText,
                                      { className: "w-3 h-3" },
                                    ),
                                    " View",
                                  ],
                                },
                              ),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className: "text-xs text-muted-foreground mt-0.5",
                            children: v.dr,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "text-xs mt-2",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "span",
                                {
                                  className: "text-muted-foreground",
                                  children: "Dx:",
                                },
                              ),
                              " ",
                              v.dx,
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "text-xs",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "span",
                                {
                                  className: "text-muted-foreground",
                                  children: "Rx:",
                                },
                              ),
                              " ",
                              v.rx,
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className:
                              "text-[10px] text-muted-foreground mt-1 italic",
                            children: v.note,
                          }),
                        ],
                      },
                      v.d,
                    ),
                  ),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
//#endregion
export { Examination as component };
