import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as AppLayout } from "./AppLayout-Ch-U9iwL.mjs";
import { n as Section } from "./Kpi-DY4t6Vll.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lab-CL8-Rd3f.js
var import_jsx_runtime = require_jsx_runtime();
var orders = [
	[
		"LAB-2201",
		"Ramesh Patel",
		"CBC, Lipid Profile",
		"10:15 AM",
		"Pending"
	],
	[
		"LAB-2202",
		"Sunita Devi",
		"Thyroid Profile",
		"10:35 AM",
		"In Progress"
	],
	[
		"RAD-3305",
		"Imran Khan",
		"X-Ray Chest PA",
		"11:00 AM",
		"Reported"
	],
	[
		"LAB-2203",
		"Meena Kumari",
		"HbA1c",
		"11:20 AM",
		"Sample Collected"
	],
	[
		"RAD-3306",
		"Ravi Verma",
		"USG Abdomen",
		"12:00 PM",
		"Pending"
	]
];
function Lab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-bold",
			children: "Lab & Radiology"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "Investigation orders and reports"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		title: "Today's Orders",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "text-left text-xs text-muted-foreground border-b",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "pb-2",
						children: "Order"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Patient" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Tests" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Time" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Status" })
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: orders.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r[2] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "text-muted-foreground",
						children: r[3]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `text-[10px] px-1.5 py-0.5 rounded ${r[4] === "Reported" ? "bg-success/15 text-success" : r[4] === "In Progress" ? "bg-info/15 text-info" : r[4] === "Pending" ? "bg-warning/20 text-warning-foreground" : "bg-primary/10 text-primary"}`,
						children: r[4]
					}) })
				]
			}, r[0])) })]
		})
	})] });
}
//#endregion
export { Lab as component };
