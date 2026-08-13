import { n as __toESM } from "../_runtime.mjs";
import { i as getUser } from "./auth-Bp511B8q.mjs";
import { i as require_react, n as QueryClientProvider, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, j as redirect, m as createFileRoute, p as lazyRouteComponent, s as Scripts, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B_GwZJRF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C6_M6R2-.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$17 = createRootRouteWithContext()({
	beforeLoad: ({ location }) => {
		if (typeof window === "undefined") return;
		if (!getUser() && location.pathname !== "/login") throw redirect({ to: "/login" });
	},
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Dashboard —ojas1hims" },
			{
				name: "description",
				content: "Real-time overview of hospital operations."
			},
			{
				property: "og:title",
				content: "Dashboard —ojas1hims"
			},
			{
				property: "og:description",
				content: "Real-time overview of hospital operations."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Dashboard —ojas1hims"
			},
			{
				name: "twitter:description",
				content: "Real-time overview of hospital operations."
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/4p7Xi69T4YZHW0E2nZ8RKLOkxGq2/social-images/social-1783457782651-Ojas1_Brand_Logo.webp"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/4p7Xi69T4YZHW0E2nZ8RKLOkxGq2/social-images/social-1783457782651-Ojas1_Brand_Logo.webp"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.ico",
			type: "image/x-icon"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$17.useRouteContext();
	const [isCheckingAuth, setIsCheckingAuth] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const timer = window.setTimeout(() => setIsCheckingAuth(false), 250);
		return () => window.clearTimeout(timer);
	}, []);
	if (isCheckingAuth) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_55%)] px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm rounded-2xl border border-border/70 bg-card p-8 text-center shadow-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-7 w-7 animate-spin rounded-full border-3 border-primary border-t-transparent" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-base font-semibold text-foreground",
					children: "Verifying session"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Please wait a moment while we restore your workspace."
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$16 = () => import("./routes-Ck_7AsbV.mjs");
var Route$16 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Dashboard —ojas1hims" }, {
		name: "description",
		content: "Real-time overview of hospital operations."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./appointments-BD26b3FD.mjs");
var Route$15 = createFileRoute("/appointments")({
	head: () => ({ meta: [{ title: "Appointments — Ojas1Cloud HIMS" }] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./billing-CLnEgZVI.mjs");
var Route$14 = createFileRoute("/billing")({
	head: () => ({ meta: [{ title: "Billing — Ojas1Cloud HIMS" }] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./change-password-DKZHuZL_.mjs");
var Route$13 = createFileRoute("/change-password")({
	head: () => ({ meta: [{ title: "Change Password — HIMS" }] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./configurations-CctG3qu9.mjs");
var Route$12 = createFileRoute("/configurations")({
	head: () => ({ meta: [{ title: "Get Modules — Ojas1Cloud HIMS" }] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./consultation-ByWt08Hh.mjs");
var Route$11 = createFileRoute("/consultation")({
	head: () => ({ meta: [{ title: "Consultation — Ojas1Cloud HIMS" }] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./lab-CL8-Rd3f.mjs");
var Route$10 = createFileRoute("/lab")({
	head: () => ({ meta: [{ title: "Lab & Radiology — Ojas1Cloud HIMS" }] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./login-BTu4NVO6.mjs");
var Route$9 = createFileRoute("/login")({
	head: () => ({ meta: [{ title: "Sign in — Ojas1Cloud HIMS" }, {
		name: "description",
		content: "Sign in to Ojas1Cloud HIMS with your role."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./master-QtC9pgkd.mjs");
var Route$8 = createFileRoute("/master")({
	head: () => ({ meta: [{ title: "Master Configuration — Ojas1Cloud HIMS" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./patients-sdPTEe9m.mjs");
var Route$7 = createFileRoute("/patients")({
	head: () => ({ meta: [{ title: "Patients — Ojas1Cloud HIMS" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./pharmacy-CX04C6e7.mjs");
var Route$6 = createFileRoute("/pharmacy")({
	head: () => ({ meta: [{ title: "Pharmacy — Ojas1Cloud HIMS" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./queue-DXDlgii8.mjs");
var Route$5 = createFileRoute("/queue")({
	head: () => ({ meta: [{ title: "OPD Examination — Ojas1Cloud HIMS" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./registration-DHa-3u6g.mjs");
var Route$4 = createFileRoute("/registration")({
	head: () => ({ meta: [{ title: "Patient Registration — Ojas1Cloud HIMS" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./reports-DIWOU4lC.mjs");
var Route$3 = createFileRoute("/reports")({
	head: () => ({ meta: [{ title: "Reports — Ojas1Cloud HIMS" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./teleconsultation-DRFF3ozT.mjs");
var Route$2 = createFileRoute("/teleconsultation")({
	head: () => ({ meta: [{ title: "Teleconsultation — Ojas1Cloud HIMS" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./user-management-USFKTePl.mjs");
var Route$1 = createFileRoute("/user-management")({
	head: () => ({ meta: [{ title: "User Management — Ojas1Cloud HIMS" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./user-management-users-kX0RwVsE.mjs");
var Route = createFileRoute("/user-management-users")({
	head: () => ({ meta: [{ title: "Created Users — Ojas1Cloud HIMS" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$16.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$17
	}),
	AppointmentsRoute: Route$15.update({
		id: "/appointments",
		path: "/appointments",
		getParentRoute: () => Route$17
	}),
	BillingRoute: Route$14.update({
		id: "/billing",
		path: "/billing",
		getParentRoute: () => Route$17
	}),
	ChangePasswordRoute: Route$13.update({
		id: "/change-password",
		path: "/change-password",
		getParentRoute: () => Route$17
	}),
	ConfigurationsRoute: Route$12.update({
		id: "/configurations",
		path: "/configurations",
		getParentRoute: () => Route$17
	}),
	ConsultationRoute: Route$11.update({
		id: "/consultation",
		path: "/consultation",
		getParentRoute: () => Route$17
	}),
	LabRoute: Route$10.update({
		id: "/lab",
		path: "/lab",
		getParentRoute: () => Route$17
	}),
	LoginRoute: Route$9.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$17
	}),
	MasterRoute: Route$8.update({
		id: "/master",
		path: "/master",
		getParentRoute: () => Route$17
	}),
	PatientsRoute: Route$7.update({
		id: "/patients",
		path: "/patients",
		getParentRoute: () => Route$17
	}),
	PharmacyRoute: Route$6.update({
		id: "/pharmacy",
		path: "/pharmacy",
		getParentRoute: () => Route$17
	}),
	QueueRoute: Route$5.update({
		id: "/queue",
		path: "/queue",
		getParentRoute: () => Route$17
	}),
	RegistrationRoute: Route$4.update({
		id: "/registration",
		path: "/registration",
		getParentRoute: () => Route$17
	}),
	ReportsRoute: Route$3.update({
		id: "/reports",
		path: "/reports",
		getParentRoute: () => Route$17
	}),
	TeleconsultationRoute: Route$2.update({
		id: "/teleconsultation",
		path: "/teleconsultation",
		getParentRoute: () => Route$17
	}),
	UserManagementRoute: Route$1.update({
		id: "/user-management",
		path: "/user-management",
		getParentRoute: () => Route$17
	}),
	UserManagementUsersRoute: Route.update({
		id: "/user-management-users",
		path: "/user-management-users",
		getParentRoute: () => Route$17
	})
};
var routeTree = Route$17._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
