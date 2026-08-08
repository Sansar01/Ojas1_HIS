import { n as __toESM } from "../_runtime.mjs";
import { i as getUser, o as setUser } from "./auth-BmroyoyF.mjs";
import { n as api, t as ApiError } from "./api-DWw3pQC_.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { et as Eye, lt as CircleCheck, q as KeyRound, tt as EyeOff, ut as CircleAlert } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/change-password-BtrJvOqR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ChangePassword() {
	const navigate = useNavigate();
	const user = getUser();
	const [form, setForm] = (0, import_react.useState)({
		currentPassword: "",
		newPassword: "",
		confirmPassword: ""
	});
	const [showCurrent, setShowCurrent] = (0, import_react.useState)(false);
	const [showNew, setShowNew] = (0, import_react.useState)(false);
	const [showConfirm, setShowConfirm] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [success, setSuccess] = (0, import_react.useState)(false);
	const checks = {
		length: form.newPassword.length >= 8,
		upper: /[A-Z]/.test(form.newPassword),
		number: /[0-9]/.test(form.newPassword),
		match: form.newPassword === form.confirmPassword && form.confirmPassword !== ""
	};
	const allValid = Object.values(checks).every(Boolean);
	async function handleSubmit(e) {
		e.preventDefault();
		if (!allValid) return;
		setLoading(true);
		setError(null);
		try {
			await api.post("/auth/change-password", {
				oldPassword: form.currentPassword,
				newPassword: form.newPassword
			});
			if (user) setUser({
				...user,
				forcePasswordChange: false
			});
			setSuccess(true);
			setTimeout(() => navigate({ to: "/" }), 1500);
		} catch (err) {
			if (err instanceof ApiError) setError(err.message);
			else setError("Something went wrong. Please try again.");
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-muted flex items-center justify-center p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "w-7 h-7 text-primary" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold",
						children: "Change Password"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: "You must set a new password before continuing"
					}),
					user?.email && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 text-xs text-muted-foreground bg-muted-foreground/10 rounded-lg px-3 py-1.5 inline-block",
						children: ["Logged in as ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: user.email
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-card border rounded-2xl p-6 shadow-sm",
				children: success ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center py-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-12 h-12 text-success mx-auto mb-3" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold text-success",
							children: "Password Changed Successfully"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted-foreground mt-1",
							children: "Redirecting to dashboard..."
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-4",
					children: [
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-4 h-4 mt-0.5 shrink-0" }), error]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs text-muted-foreground",
							children: "Current Password (Temporary)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: showCurrent ? "text" : "password",
								value: form.currentPassword,
								onChange: (e) => setForm({
									...form,
									currentPassword: e.target.value
								}),
								placeholder: "Enter temporary password",
								required: true,
								className: "w-full px-3 py-2.5 pr-10 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setShowCurrent(!showCurrent),
								className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground",
								children: showCurrent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-4 h-4" })
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs text-muted-foreground",
							children: "New Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: showNew ? "text" : "password",
								value: form.newPassword,
								onChange: (e) => setForm({
									...form,
									newPassword: e.target.value
								}),
								placeholder: "Min 8 chars, 1 uppercase, 1 number",
								required: true,
								className: "w-full px-3 py-2.5 pr-10 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setShowNew(!showNew),
								className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground",
								children: showNew ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-4 h-4" })
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs text-muted-foreground",
							children: "Confirm New Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: showConfirm ? "text" : "password",
								value: form.confirmPassword,
								onChange: (e) => setForm({
									...form,
									confirmPassword: e.target.value
								}),
								placeholder: "Re-enter new password",
								required: true,
								className: "w-full px-3 py-2.5 pr-10 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setShowConfirm(!showConfirm),
								className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground",
								children: showConfirm ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-4 h-4" })
							})]
						})] }),
						form.newPassword && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5 p-3 bg-muted rounded-lg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check$1, {
									label: "At least 8 characters",
									ok: checks.length
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check$1, {
									label: "One uppercase letter",
									ok: checks.upper
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check$1, {
									label: "One number",
									ok: checks.number
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check$1, {
									label: "Passwords match",
									ok: checks.match
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: !allValid || loading,
							className: "w-full py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed mt-2",
							children: loading ? "Changing Password..." : "Set New Password"
						})
					]
				})
			})]
		})
	});
}
function Check$1({ label, ok }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-center gap-2 text-xs ${ok ? "text-success" : "text-muted-foreground"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `w-3.5 h-3.5 rounded-full border flex items-center justify-center ${ok ? "bg-success border-success" : "border-muted-foreground"}`,
			children: ok && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 10 10",
				className: "w-2 h-2 text-white fill-none stroke-white stroke-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "1.5,5 4,7.5 8.5,2.5" })
			})
		}), label]
	});
}
//#endregion
export { ChangePassword as component };
