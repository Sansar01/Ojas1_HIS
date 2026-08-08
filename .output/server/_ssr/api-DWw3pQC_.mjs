import { r as getAccessToken } from "./auth-BmroyoyF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-DWw3pQC_.js
var ApiError = class extends Error {
	status;
	payload;
	constructor(message, status, payload) {
		super(message);
		this.name = "ApiError";
		this.status = status;
		this.payload = payload;
	}
};
var DEFAULT_BASE_URL = "http://127.0.0.1:8000".replace(/\/$/, "");
function buildUrl(path, params) {
	console.log(DEFAULT_BASE_URL);
	const normalizedPath = path.startsWith("/") ? path : `/${path}`;
	if (!params) return `${DEFAULT_BASE_URL}${normalizedPath}`;
	const search = new URLSearchParams();
	Object.entries(params).forEach(([key, value]) => {
		if (value === void 0) return;
		search.set(key, String(value));
	});
	const query = search.toString();
	return `${DEFAULT_BASE_URL}${normalizedPath}${query ? `?${query}` : ""}`;
}
async function parsePayload(response) {
	const text = await response.text();
	if (!text) return null;
	try {
		return JSON.parse(text);
	} catch {
		return text;
	}
}
async function apiRequest(path, options = {}) {
	const { body, params, auth = true, headers, ...rest } = options;
	const requestHeaders = new Headers(headers);
	const token = auth ? getAccessToken() : null;
	if (token) requestHeaders.set("Authorization", `Bearer ${token}`);
	if (body !== void 0 && !(body instanceof FormData)) requestHeaders.set("Content-Type", "application/json");
	const response = await fetch(buildUrl(path, params), {
		...rest,
		headers: requestHeaders,
		body: body === void 0 ? void 0 : body instanceof FormData ? body : JSON.stringify(body)
	});
	const payload = await parsePayload(response);
	if (!response.ok) throw new ApiError(typeof payload === "object" && payload && "message" in payload && typeof payload.message === "string" ? payload.message : "Request failed", response.status, payload);
	return payload;
}
var api = {
	get: (path, options) => apiRequest(path, {
		...options,
		method: "GET"
	}),
	post: (path, body, options) => apiRequest(path, {
		...options,
		method: "POST",
		body
	}),
	put: (path, body, options) => apiRequest(path, {
		...options,
		method: "PUT",
		body
	}),
	patch: (path, body, options) => apiRequest(path, {
		...options,
		method: "PATCH",
		body
	}),
	delete: (path, options) => apiRequest(path, {
		...options,
		method: "DELETE"
	})
};
//#endregion
export { api as n, ApiError as t };
