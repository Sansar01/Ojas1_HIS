import { n as __toESM } from "../_runtime.mjs";
import { i as getUser, n as clearUser, t as canAccess } from "./auth-BmroyoyF.mjs";
import { n as api } from "./api-DWw3pQC_.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as FileText, A as Pill, C as Settings, D as Receipt, F as Package, G as LayoutGrid, H as LogOut, I as Monitor, K as LayoutDashboard, S as ShieldCheck, T as Search, X as Heart, Z as FlaskConical, _ as Stethoscope, _t as Bell, bt as Activity, c as Users, ct as CircleDollarSign, d as UserCog, gt as BriefcaseMedical, ht as Calendar, o as Video, ot as ClipboardList, pt as ChartColumn, u as UserPlus, y as Soup } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AppLayout-TYH-YrXk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useRoles() {
	const [roles, setRoles] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		api.get("/roles").then(setRoles).catch((e) => setError(e.message)).finally(() => setLoading(false));
	}, []);
	return {
		roles,
		activeRoles: roles.filter((r) => r.isActive),
		loading,
		error
	};
}
function useDepartments() {
	const [departments, setDepartments] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		api.get("/masters/departments", { params: { active: true } }).then(setDepartments).catch((e) => setError(e.message)).finally(() => setLoading(false));
	}, []);
	return {
		departments,
		loading,
		error
	};
}
function useShifts() {
	const [shifts, setShifts] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		api.get("/masters/shifts", { params: { active: true } }).then(setShifts).catch((e) => setError(e.message)).finally(() => setLoading(false));
	}, []);
	return {
		shifts,
		loading,
		error
	};
}
function useEntitlements() {
	const [entitlements, setEntitlements] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		api.get("/api/hospital/roles/entitlements/modules").then((data) => {
			console.log("Entitlements API response:", data);
			if (!Array.isArray(data)) {
				console.warn("Entitlements response is not an array:", data);
				setEntitlements([]);
				return;
			}
			const transformed = data.map((module) => ({
				id: module.id,
				name: module.name,
				code: module.code,
				route: module.route || "",
				icon: module.icon || "",
				isActive: module.isActive !== false,
				features: (module.features || []).map((mf) => ({
					id: mf.feature?.id || mf.id,
					name: mf.feature?.name || mf.name,
					code: mf.feature?.code || mf.code
				}))
			}));
			console.log("Transformed entitlements:", transformed);
			setEntitlements(transformed);
		}).catch((e) => {
			console.error("Failed to fetch entitlements:", e);
			setError(e.message);
		}).finally(() => setLoading(false));
	}, []);
	return {
		entitlements,
		loading,
		error
	};
}
function useRolePermissions(roleId) {
	const [permissions, setPermissions] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!roleId) {
			setPermissions([]);
			return;
		}
		setLoading(true);
		setError(null);
		api.get(`/roles/${roleId}/permissions`).then(setPermissions).catch((e) => setError(e.message)).finally(() => setLoading(false));
	}, [roleId]);
	return {
		permissions,
		loading,
		error
	};
}
function useHospitalUsers() {
	const [users, setUsers] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		api.get("/users", { params: { status: "ACTIVE" } }).then((data) => {
			if (!Array.isArray(data)) {
				setUsers([]);
				return;
			}
			const transformed = data.map((u) => ({
				id: u.id,
				employeeId: u.staffProfile?.employeeId || "",
				email: u.email || "",
				userType: u.userType || "REGULAR_USER",
				isActive: u.status === "ACTIVE",
				profile: {
					firstName: u.firstName || "",
					lastName: u.lastName || "",
					phone: u.mobile || ""
				},
				roles: (u.roles || []).map((r) => ({
					roleId: r.hospitalRoleId || "",
					roleName: r.hospitalRole?.roleName?.name || "",
					isPrimary: r.isPrimary ?? false
				})),
				departments: (u.departments || []).map((d) => ({
					departmentId: d.departmentId || "",
					departmentName: d.department?.name || ""
				}))
			}));
			setUsers(transformed);
		}).catch((e) => setError(e.message)).finally(() => setLoading(false));
	}, []);
	return {
		users,
		loading,
		error
	};
}
function useCreateUser() {
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	return {
		createUser: (0, import_react.useCallback)(async (payload) => {
			setLoading(true);
			setError(null);
			try {
				return await api.post("/users", payload);
			} catch (e) {
				setError(e.message);
				throw e;
			} finally {
				setLoading(false);
			}
		}, []),
		loading,
		error
	};
}
var ALWAYS_VISIBLE = /* @__PURE__ */ new Set(["/", "/configurations"]);
function mapIcon(iconName) {
	switch ((iconName || "").toLowerCase()) {
		case "dashboard":
		case "home": return LayoutDashboard;
		case "users":
		case "user": return Users;
		case "appointments":
		case "calendar": return Calendar;
		case "consultation":
		case "stethoscope": return Stethoscope;
		case "queue":
		case "clipboard": return ClipboardList;
		case "billing":
		case "receipt":
		case "money": return Receipt;
		case "settings":
		case "config": return Settings;
		case "pharmacy":
		case "pill": return Pill;
		case "lab":
		case "radiology": return FlaskConical;
		case "reports":
		case "graph": return ChartColumn;
		case "patient":
		case "patients": return UserPlus;
		case "teleconsultation":
		case "video": return Video;
		case "user-management":
		case "user": return UserCog;
		case "module":
		case "grid": return LayoutGrid;
		case "file": return FileText;
		case "shield": return ShieldCheck;
		case "dollar": return CircleDollarSign;
		case "activity": return Activity;
		case "medical": return BriefcaseMedical;
		case "package": return Package;
		case "monitor": return Monitor;
		case "soup": return Soup;
		default: return LayoutGrid;
	}
}
function buildNavItems(entitlements, isLoading) {
	if (isLoading) return [];
	if (entitlements.length === 0) return [];
	return entitlements.filter((module) => module.isActive !== false).map((module) => ({
		to: module.route || "/",
		label: module.name,
		icon: mapIcon(module.icon)
	}));
}
function AppLayout({ children }) {
	const path = useRouterState({ select: (s) => s.location.pathname });
	const navigate = useNavigate();
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [user, setUserState] = (0, import_react.useState)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	const { entitlements, loading: entitlementsLoading } = useEntitlements();
	(0, import_react.useEffect)(() => {
		const readAuth = () => setUserState(getUser());
		const readSel = () => {
			try {
				setSelected(localStorage.getItem("selectedModule"));
			} catch {
				setSelected(null);
			}
		};
		readAuth();
		readSel();
		setReady(true);
		window.addEventListener("selectedModuleChange", readSel);
		window.addEventListener("storage", readSel);
		window.addEventListener("authChange", readAuth);
		window.addEventListener("storage", readAuth);
		return () => {
			window.removeEventListener("selectedModuleChange", readSel);
			window.removeEventListener("storage", readSel);
			window.removeEventListener("authChange", readAuth);
			window.removeEventListener("storage", readAuth);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (ready && !user) navigate({ to: "/login" });
	}, [
		ready,
		user,
		navigate
	]);
	(0, import_react.useEffect)(() => {
		if (ready && user && !canAccess(user.role, path)) navigate({ to: "/" });
	}, [
		ready,
		user,
		path,
		navigate
	]);
	if (!ready || !user) return null;
	const nav = buildNavItems(entitlements, entitlementsLoading);
	const visibleNav = selected ? nav.filter((n) => ALWAYS_VISIBLE.has(n.to) || n.to === selected) : nav;
	console.log("Sidebar nav:", {
		entitlements,
		entitlementsLoading,
		navLength: nav.length
	});
	const onLogout = () => {
		clearUser();
		navigate({ to: "/login" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "w-64 shrink-0 bg-sidebar text-sidebar-foreground flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5 flex items-center gap-3 border-b border-sidebar-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "w-5 h-5 text-primary-foreground fill-primary" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-bold text-base leading-tight",
						children: "Ojas1Cloud HIMS"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] text-sidebar-foreground/60",
						children: "One Patient. One Record."
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "p-3 flex-1 overflow-y-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-wider text-sidebar-foreground/50 px-3 py-2",
						children: entitlementsLoading ? "Loading modules..." : "Navigation"
					}), visibleNav.length > 0 ? visibleNav.map((item) => {
						const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: `flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 text-sm transition-colors ${active ? "bg-primary text-primary-foreground shadow" : "hover:bg-sidebar-accent text-sidebar-foreground/85"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-4 h-4" }), item.label]
						}, item.to);
					}) : !entitlementsLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] text-sidebar-foreground/60 px-3 py-4 text-center",
						children: "No modules available"
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 border-t border-sidebar-border flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-9 h-9 rounded-full bg-primary/30 flex items-center justify-center text-xs font-semibold",
							children: user.initials
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs flex-1 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold truncate",
								children: user.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sidebar-foreground/60 truncate",
								children: user.designation
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onLogout,
							title: "Sign out",
							className: "p-2 rounded-lg hover:bg-sidebar-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "w-4 h-4" })
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 flex flex-col min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "h-16 bg-card border-b flex items-center px-6 gap-4 sticky top-0 z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 max-w-xl relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							placeholder: "Search patient, doctor, appointment...",
							className: "w-full pl-9 pr-16 py-2 rounded-lg bg-muted border border-transparent focus:border-primary focus:outline-none text-sm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
							className: "absolute right-3 top-1/2 -translate-y-1/2 text-[10px] px-1.5 py-0.5 rounded bg-background border",
							children: "Ctrl+K"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold",
								children: "10:45 AM"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-muted-foreground",
								children: "20 May 2025, Tue"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "relative p-2 rounded-lg hover:bg-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "w-5 h-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-1 right-1 w-4 h-4 bg-destructive text-destructive-foreground text-[9px] rounded-full flex items-center justify-center",
								children: "12"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold text-primary",
									children: user.initials
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold",
										children: user.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-muted-foreground capitalize",
										children: user.role.replace("_", " ")
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: onLogout,
									title: "Sign out",
									className: "p-2 rounded-lg hover:bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "w-4 h-4" })
								})
							]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "p-6 flex-1",
				children: children ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			})]
		})]
	});
}
//#endregion
export { useHospitalUsers as a, useShifts as c, useEntitlements as i, useCreateUser as n, useRolePermissions as o, useDepartments as r, useRoles as s, AppLayout as t };
