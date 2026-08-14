//#region node_modules/.nitro/vite/services/ssr/assets/auth-Bp511B8q.js
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
var DEFAULT_BASE_URL = "http://localhost:8000".replace(/\/$/, "");
function buildUrl(path, params) {
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
  const makeRequest = async (token) => {
    const requestHeaders = new Headers(headers);
    if (token) requestHeaders.set("Authorization", `Bearer ${token}`);
    if (body !== void 0 && !(body instanceof FormData))
      requestHeaders.set("Content-Type", "application/json");
    return fetch(buildUrl(path, params), {
      ...rest,
      headers: requestHeaders,
      credentials: "include",
      body:
        body !== void 0 && !(body instanceof FormData)
          ? JSON.stringify(body)
          : body,
    });
  };
  let token = auth ? getAccessToken() : null;
  let response = await makeRequest(token);
  if (response.status === 401 && auth) {
    token = await refreshAccessToken();
    if (!token) {
      clearUser();
      window.location.href = "/login";
      throw new ApiError("Your session has expired. Please login again.", 401);
    }
    response = await makeRequest(token);
  }
  const payload = await parsePayload(response);
  if (!response.ok)
    throw new ApiError(
      `Request failed with status ${response.status}`,
      response.status,
      payload,
    );
  return payload;
}
var api = {
  get: (path, options) =>
    apiRequest(path, {
      ...options,
      method: "GET",
    }),
  post: (path, body) => apiRequest(path, body),
  put: (path, body) => apiRequest(path, body),
  patch: (path, body) => apiRequest(path, body),
  delete: (path, options) =>
    apiRequest(path, {
      ...options,
      method: "DELETE",
    }),
};
/**
 * Gets a new access token using the refresh token
 * stored in an HttpOnly cookie.
 */
var refreshPromise = null;
async function refreshAccessToken() {
  if (refreshPromise) return refreshPromise;
  refreshPromise = (async () => {
    try {
      const response = await fetch(
        `${DEFAULT_BASE_URL}/api/hospital/auth/refresh`,
        {
          method: "POST",
          credentials: "include",
        },
      );
      if (!response.ok) return null;
      const data = await response.json();
      if (!data.accessToken) return null;
      setAccessToken(data.accessToken);
      return data.accessToken;
    } catch {
      return null;
    } finally {
      refreshPromise = null;
    }
  })();
  return refreshPromise;
}
var accessToken = null;
var ROLE_ROUTES = {
  super_admin: "all",
  doctor: [
    "/",
    "/appointments",
    "/queue",
    "/consultation",
    "/teleconsultation",
    "/patients",
  ],
  receptionist: [
    "/",
    "/registration",
    "/appointments",
    "/billing",
    "/patients",
  ],
  pharmacist: ["/", "/pharmacy"],
  lab_tech: ["/", "/lab"],
  billing: ["/", "/billing"],
  regular: ["/"],
};
var KEY = "authUser";
function normalizeRole(userType) {
  switch ((userType || "regular").toUpperCase()) {
    case "SUPER_ADMIN":
    case "ADMIN":
      return "super_admin";
    case "DOCTOR":
      return "doctor";
    case "RECEPTIONIST":
      return "receptionist";
    case "PHARMACIST":
      return "pharmacist";
    case "LAB_TECH":
    case "LABTECH":
      return "lab_tech";
    case "BILLING":
      return "billing";
    default:
      return "regular";
  }
}
function buildInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
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
  accessToken = null;
  window.localStorage.removeItem(KEY);
  window.dispatchEvent(new Event("authChange"));
}
function getAccessToken() {
  return accessToken;
}
function setAccessToken(token) {
  accessToken = token;
}
async function loginWithBackend(email, password) {
  const response = api.post("/api/hospital/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: {
      email,
      password,
    },
  });
  const payload = await response.catch(() => null);
  if (!response || !payload)
    throw new Error(
      payload?.accessToken
        ? "Login failed"
        : "Unable to sign in with the provided credentials.",
    );
  const user = {
    name:
      [payload.user?.firstName, payload.user?.lastName]
        .filter(Boolean)
        .join(" ") ||
      payload.user?.email ||
      "Hospital User",
    role: normalizeRole(payload.user?.userType),
    designation: payload.hospital?.name
      ? `${payload.hospital.name} User`
      : "Hospital User",
    initials: buildInitials(
      [payload.user?.firstName, payload.user?.lastName]
        .filter(Boolean)
        .join(" ") ||
        payload.user?.email ||
        "Hospital User",
    ),
    email: payload.user?.email,
    hospitalName: payload.hospital?.name,
    hospitalCode: payload.hospital?.code,
    hospitalId: payload.hospital?.id,
    userId: payload.user?.id,
    forcePasswordChange: payload.forcePasswordChange,
  };
  setUser(user);
  setAccessToken(payload.accessToken);
  return user;
}
function canAccess(role, path) {
  const allowed = ROLE_ROUTES[role];
  if (allowed === "all") return true;
  if (path === "/") return true;
  return allowed.some((p) => path === p || path.startsWith(p + "/"));
}
async function logOutFromFrontend() {
  try {
    await api.post("/api/hospital/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    return true;
  } catch (error) {
    console.error("Logout API failed:", error);
    return false;
  } finally {
    clearUser();
  }
}
//#endregion
export {
  logOutFromFrontend as a,
  getUser as i,
  api as n,
  loginWithBackend as o,
  canAccess as r,
  setUser as s,
  ApiError as t,
};
