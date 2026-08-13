import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Pill, C as Settings, D as Receipt, Z as FlaskConical, _ as Stethoscope, c as Users, d as UserCog, ht as Calendar, o as Video, ot as ClipboardList, pt as ChartColumn, u as UserPlus } from "../_libs/lucide-react.mjs";
import { t as AppLayout } from "./AppLayout-Ch-U9iwL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/configurations-CctG3qu9.js
var import_jsx_runtime = require_jsx_runtime();
var modules = [
	{
		to: "/registration",
		label: "Registration",
		desc: "Patient registration & UHID",
		icon: UserPlus,
		tone: "text-primary bg-primary/10"
	},
	{
		to: "/appointments",
		label: "Appointment",
		desc: "Slot booking & scheduling",
		icon: Calendar,
		tone: "text-info bg-info/10"
	},
	{
		to: "/queue",
		label: "OPD Examination",
		desc: "Nursing queue & vitals",
		icon: ClipboardList,
		tone: "text-warning-foreground bg-warning/20"
	},
	{
		to: "/consultation",
		label: "Doctor",
		desc: "Consultation & prescription",
		icon: Stethoscope,
		tone: "text-destructive bg-destructive/10"
	},
	{
		to: "/teleconsultation",
		label: "Teleconsultation",
		desc: "Video consults & remote care",
		icon: Video,
		tone: "text-info bg-info/10"
	},
	{
		to: "/billing",
		label: "Billing",
		desc: "Invoices, payments & refunds",
		icon: Receipt,
		tone: "text-success bg-success/10"
	},
	{
		to: "/pharmacy",
		label: "Pharmacy",
		desc: "Stock & dispensing",
		icon: Pill,
		tone: "text-warning-foreground bg-warning/20"
	},
	{
		to: "/lab",
		label: "Lab & Radiology",
		desc: "Investigations & reports",
		icon: FlaskConical,
		tone: "text-info bg-info/10"
	},
	{
		to: "/patients",
		label: "Patients",
		desc: "Master patient directory",
		icon: Users,
		tone: "text-primary bg-primary/10"
	},
	{
		to: "/reports",
		label: "Reports",
		desc: "Analytics & MIS reports",
		icon: ChartColumn,
		tone: "text-destructive bg-destructive/10"
	},
	{
		to: "/master",
		label: "Master Configurations",
		desc: "Doctors, panels, items, rates",
		icon: Settings,
		tone: "text-primary bg-primary/10"
	},
	{
		to: "/user-management",
		label: "User Management",
		desc: "Users, roles & permissions",
		icon: UserCog,
		tone: "text-success bg-success/10"
	}
];
function Configurations() {
	const navigate = useNavigate();
	const selectModule = (to) => {
		try {
			localStorage.setItem("selectedModule", to);
			window.dispatchEvent(new Event("selectedModuleChange"));
		} catch {}
		navigate({ to });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: "Get Modules"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Select a module to open — only that page will appear in the sidebar"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => {
					try {
						localStorage.removeItem("selectedModule");
						window.dispatchEvent(new Event("selectedModuleChange"));
					} catch {}
				},
				className: "text-xs px-3 py-1.5 border rounded hover:bg-muted",
				children: "Show all modules in sidebar"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
			children: modules.map((m) => {
				const Icon = m.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => selectModule(m.to),
					className: "group text-left bg-card border rounded-xl p-5 hover:border-primary hover:shadow-md transition-all",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `w-12 h-12 rounded-lg ${m.tone} flex items-center justify-center mb-4`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-6 h-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold text-sm group-hover:text-primary",
							children: m.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground mt-1",
							children: m.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-medium text-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity",
							children: "Open module →"
						})
					]
				}, m.to);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				children: "home"
			})
		})
	] });
}
//#endregion
export { Configurations as component };
