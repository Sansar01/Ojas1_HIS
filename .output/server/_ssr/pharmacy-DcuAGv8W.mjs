import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as AppLayout } from "./AppLayout-TYH-YrXk.mjs";
import { n as Section } from "./Kpi-DY4t6Vll.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pharmacy-DcuAGv8W.js
var import_jsx_runtime = require_jsx_runtime();
var stock = [
	[
		"MED-1001",
		"Ecosprin AV 75 mg",
		"Tablet",
		2450,
		30,
		"Active"
	],
	[
		"MED-1002",
		"Atorvastatin 10 mg",
		"Tablet",
		45,
		15,
		"Low"
	],
	[
		"MED-1003",
		"Telma 40 mg",
		"Tablet",
		1200,
		25,
		"Active"
	],
	[
		"MED-1004",
		"Metformin 500 mg",
		"Tablet",
		3400,
		8,
		"Active"
	],
	[
		"MED-1005",
		"Amoxicillin 500 mg",
		"Capsule",
		0,
		60,
		"Out"
	]
];
function Pharmacy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-bold",
			children: "Pharmacy"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "Inventory and dispensing"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		title: "Stock Register",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "text-left text-xs text-muted-foreground border-b",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "pb-2",
						children: "Code"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Medicine" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Form" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Stock" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Rate" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Status" })
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: stock.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-b last:border-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-3 font-mono text-xs",
						children: r[0]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "font-medium",
						children: r[1]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "text-muted-foreground",
						children: r[2]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r[3] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: ["₹", r[4]] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `text-[10px] px-1.5 py-0.5 rounded ${r[5] === "Active" ? "bg-success/15 text-success" : r[5] === "Low" ? "bg-warning/20 text-warning-foreground" : "bg-destructive/10 text-destructive"}`,
						children: r[5]
					}) })
				]
			}, r[0])) })]
		})
	})] });
}
//#endregion
export { Pharmacy as component };
