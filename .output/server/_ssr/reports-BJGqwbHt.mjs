import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { D as Receipt, bt as Activity, c as Users, m as TrendingUp } from "../_libs/lucide-react.mjs";
import { t as AppLayout } from "./AppLayout-TYH-YrXk.mjs";
import { n as Section, t as Kpi } from "./Kpi-DY4t6Vll.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reports-BJGqwbHt.js
var import_jsx_runtime = require_jsx_runtime();
function Reports() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: "Reports & Analytics"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Operational and financial insights"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					icon: Receipt,
					label: "Monthly Revenue",
					value: "₹1.82Cr",
					delta: "12%",
					tone: "primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					icon: Users,
					label: "Patients / Month",
					value: "24,890",
					delta: "9%",
					tone: "info"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					icon: TrendingUp,
					label: "Avg Bill",
					value: "₹1,240",
					delta: "3%",
					tone: "success"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					icon: Activity,
					label: "Bed Occupancy",
					value: "78%",
					tone: "warning"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Top Reports",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "text-sm space-y-2",
					children: [
						"Daily Collection Register",
						"OPD Consultation Report",
						"Doctor Performance",
						"Insurance Claims Summary",
						"Pharmacy Sales",
						"Investigation Revenue",
						"Discount Audit Trail"
					].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "p-3 border rounded-lg flex justify-between items-center hover:border-primary cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-primary",
							children: "Open →"
						})]
					}, r))
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Statutory Reports",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "text-sm space-y-2",
					children: [
						"GST Sales Register",
						"TDS Report",
						"GSTR-1 Summary",
						"Form 26AS Reconciliation",
						"Bio-Medical Waste Log",
						"NABH Indicators"
					].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "p-3 border rounded-lg flex justify-between items-center hover:border-primary cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-primary",
							children: "Open →"
						})]
					}, r))
				})
			})]
		})
	] });
}
//#endregion
export { Reports as component };
