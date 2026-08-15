import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as AppLayout } from "./AppLayout-Ch-U9iwL.mjs";
import { n as Section } from "./Kpi-DY4t6Vll.mjs";
import { t as useApiQuery } from "./useApiResource-CCm4w06O.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/patients-sdPTEe9m.js
var import_jsx_runtime = require_jsx_runtime();
function Patients() {
  const { data, isLoading, error } = useApiQuery(["patients"], "/patients", {
    staleTime: 3e4,
  });
  const rows = (data?.patients ?? []).map((patient) => [
    patient.uid,
    patient.name,
    patient.age,
    patient.gender,
    patient.mobile,
    patient.bloodGroup,
    patient.insurance,
    patient.lastVisit,
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLayout, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mb-6",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
            className: "text-2xl font-bold",
            children: "Patients",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className: "text-sm text-muted-foreground",
            children: "Master patient records",
          }),
        ],
      }),
      error
        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className:
              "mb-4 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive",
            children: "Patient list could not be loaded. Please try again.",
          })
        : null,
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
        title: "Patient Directory",
        action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
          className:
            "text-xs px-3 py-1.5 bg-primary text-primary-foreground rounded",
          children: "+ New Patient",
        }),
        children: isLoading
          ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "text-sm text-muted-foreground",
              children: "Loading patients…",
            })
          : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
              className: "w-full text-sm",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
                    className:
                      "text-left text-xs text-muted-foreground border-b",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
                        className: "pb-2",
                        children: "UHID",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
                        children: "Name",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
                        children: "Age",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
                        children: "Gender",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
                        children: "Mobile",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
                        children: "Blood",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
                        children: "Insurance",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
                        children: "Last Visit",
                      }),
                    ],
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
                  children: rows.map((r) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "tr",
                      {
                        className: "border-b last:border-0 hover:bg-muted/30",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
                            className: "py-3 font-mono text-xs",
                            children: r[0],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
                            className: "font-medium",
                            children: r[1],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
                            children: r[2],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
                            children: r[3],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
                            children: r[4],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
                            children: r[5],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
                            className: "text-muted-foreground",
                            children: r[6],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
                            children: r[7],
                          }),
                        ],
                      },
                      r[0],
                    ),
                  ),
                }),
              ],
            }),
      }),
    ],
  });
}
//#endregion
export { Patients as component };
