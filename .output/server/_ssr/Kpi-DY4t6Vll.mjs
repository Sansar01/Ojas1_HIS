import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Kpi-DY4t6Vll.js
var import_jsx_runtime = require_jsx_runtime();
function Kpi({ icon: Icon, label, value, delta, tone = "info" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "bg-card rounded-xl border p-4 flex items-start gap-3",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: `w-10 h-10 rounded-lg flex items-center justify-center ${
          {
            info: "bg-info/10 text-info",
            success: "bg-success/10 text-success",
            warning: "bg-warning/15 text-warning-foreground",
            destructive: "bg-destructive/10 text-destructive",
            primary: "bg-primary/10 text-primary",
          }[tone]
        }`,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
          className: "w-5 h-5",
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex-1 min-w-0",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "text-xs text-muted-foreground",
            children: label,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "text-2xl font-bold",
            children: value,
          }),
          delta &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "text-[11px] text-success mt-0.5",
              children: ["↑ ", delta],
            }),
        ],
      }),
    ],
  });
}
function Section({ title, action, children, className = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: `bg-card rounded-xl border ${className}`,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex items-center justify-between px-5 py-4 border-b",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
            className: "font-semibold",
            children: title,
          }),
          action,
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "p-5",
        children,
      }),
    ],
  });
}
//#endregion
export { Section as n, Kpi as t };
