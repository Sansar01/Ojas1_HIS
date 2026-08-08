//#region node_modules/.nitro/vite/services/ssr/assets/auth-BmroyoyF.js
var ROLE_ROUTES = {
	super_admin: "all",
	doctor: [
		"/",
		"/appointments",
		"/queue",
		"/consultation",
		"/teleconsultation",
		"/patients"
	],
	receptionist: [
		"/",
		"/registration",
		"/appointments",
		"/billing",
		"/patients"
	],
	pharmacist: ["/", "/pharmacy"],
	lab_tech: ["/", "/lab"],
	billing: ["/", "/billing"],
	regular: ["/"]
};
var KEY = "authUser";
function normalizeRole(userType) {
	switch ((userType || "regular").toUpperCase()) {
		case "SUPER_ADMIN":
		case "ADMIN": return "super_admin";
		case "DOCTOR": return "doctor";
		case "RECEPTIONIST": return "receptionist";
		case "PHARMACIST": return "pharmacist";
		case "LAB_TECH":
		case "LABTECH": return "lab_tech";
		case "BILLING": return "billing";
		default: return "regular";
	}
}
function buildInitials(name) {
	return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}
function getUser() {
	try {
		if (typeof window === "undefined") return null;
		const raw = window.localStorage.getItem(KEY);
		return raw ? JSON.parse(raw) : null;
	} catch {
		return null;
	}
}
function setUser(u) {
	if (typeof window === "undefined") return;
	window.localStorage.setItem(KEY, JSON.stringify(u));
	window.dispatchEvent(new Event("authChange"));
}
function clearUser() {
	if (typeof window === "undefined") return;
	window.localStorage.removeItem(KEY);
	window.dispatchEvent(new Event("authChange"));
}
function getAccessToken() {
	return getUser()?.accessToken ?? null;
}
async function loginWithBackend(email, password) {
	const response = await fetch("/api/hospital/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json"
		},
		body: JSON.stringify({
			email,
			password
		})
	});
	const payload = await response.json().catch(() => null);
	if (!response.ok || !payload) throw new Error(payload?.accessToken ? "Login failed" : "Unable to sign in with the provided credentials.");
	const user = {
		name: [payload.user?.firstName, payload.user?.lastName].filter(Boolean).join(" ") || payload.user?.email || "Hospital User",
		role: normalizeRole(payload.user?.userType),
		designation: payload.hospital?.name ? `${payload.hospital.name} User` : "Hospital User",
		initials: buildInitials([payload.user?.firstName, payload.user?.lastName].filter(Boolean).join(" ") || payload.user?.email || "Hospital User"),
		email: payload.user?.email,
		hospitalName: payload.hospital?.name,
		hospitalCode: payload.hospital?.code,
		hospitalId: payload.hospital?.id,
		userId: payload.user?.id,
		accessToken: payload.accessToken,
		refreshToken: payload.refreshToken,
		forcePasswordChange: payload.forcePasswordChange
	};
	setUser(user);
	return user;
}
function canAccess(role, path) {
	const allowed = ROLE_ROUTES[role];
	if (allowed === "all") return true;
	if (path === "/") return true;
	return allowed.some((p) => path === p || path.startsWith(p + "/"));
}
//#endregion
export { loginWithBackend as a, getUser as i, clearUser as n, setUser as o, getAccessToken as r, canAccess as t };
