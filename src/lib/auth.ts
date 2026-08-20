import { api, apiRequest } from "./api";

let accessToken: string | null = null;

export type Role =
  | "super_admin"
  | "doctor"
  | "receptionist"
  | "pharmacist"
  | "lab_tech"
  | "billing"
  | "regular";

export type AuthUser = {
  name: string;
  role: Role;
  designation: string;
  initials: string;
  email?: string;
  hospitalName?: string;
  hospitalCode?: string;
  hospitalId?: string;
  userId?: string;
  forcePasswordChange?: boolean;
};

export type BackendLoginResponse = {
  accessToken: string;
  refreshToken: string;
  forcePasswordChange: boolean;
  hospital?: {
    id?: string;
    code?: string;
    name?: string;
  };
  user?: {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    userType?: string;
  };
};

export const ROLES: {
  value: Role;
  label: string;
  designation: string;
  name: string;
  initials: string;
}[] = [
  {
    value: "super_admin",
    label: "Super Admin",
    designation: "Super Admin",
    name: "Dr. Arjun Mehta",
    initials: "AM",
  },
  {
    value: "doctor",
    label: "Doctor",
    designation: "Cardiology",
    name: "Dr. Priya Shah",
    initials: "PS",
  },
  {
    value: "receptionist",
    label: "Receptionist",
    designation: "Front Desk",
    name: "Neha Verma",
    initials: "NV",
  },
  {
    value: "pharmacist",
    label: "Pharmacist",
    designation: "Pharmacy",
    name: "Rahul Jain",
    initials: "RJ",
  },
  {
    value: "lab_tech",
    label: "Lab Technician",
    designation: "Lab & Radiology",
    name: "Suresh Kumar",
    initials: "SK",
  },
  {
    value: "billing",
    label: "Billing Executive",
    designation: "Billing",
    name: "Anita Rao",
    initials: "AR",
  },
  {
    value: "regular",
    label: "Regular User",
    designation: "Staff",
    name: "Ravi Singh",
    initials: "RS",
  },
];

// Build ROLE_ROUTES dynamically from the ROLES constant so adding/removing roles
// in ROLES automatically keeps the mapping consistent. Keep behaviour identical
// for existing role names so existing functionality is not interrupted.
function buildRoleRoutes(): Record<Role, string[] | "all"> {
  const commonForMany = ["/", "/appointments", "/patients"];
  const map: Record<Role, string[] | "all"> = {} as any;

  for (const r of ROLES) {
    switch (r.value) {
      case "super_admin":
        map[r.value] = "all";
        break;
      case "doctor":
        // Doctor should have the common routes plus queue/consultation/teleconsultation and doctorSlot
        map[r.value] = Array.from(
          new Set([
            ...commonForMany,
            "/queue",
            "/consultation",
            "/teleconsultation",
            "/doctorSlot",
          ]),
        );
        break;
      case "receptionist":
        map[r.value] = ["/", "/registration", "/appointments", "/billing", "/patients"];
        break;
      case "pharmacist":
        map[r.value] = ["/", "/pharmacy"];
        break;
      case "lab_tech":
        map[r.value] = ["/", "/lab"];
        break;
      case "billing":
        map[r.value] = ["/", "/billing"];
        break;
      default:
        map[r.value] = ["/"];
    }
  }

  return map;
}

export const ROLE_ROUTES = buildRoleRoutes();

// Backwards-compatible helper exports requested by the caller
export const Roles = ROLES;
export function Roles_Routes(): Record<Role, string[] | "all"> {
  return ROLE_ROUTES;
}
export function normalizeRoles(userType?: string): Role {
  return normalizeRole(userType);
}

const AUTH_STORAGE_KEY = "authUser";

function normalizeRole(userType?: string): Role {
  const normalized = (userType || "regular").toUpperCase();

  switch (normalized) {
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

function buildInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function getUser(KEY?: string): any | null {
  try {
    if (typeof window === "undefined") return null;

    const storageKey = KEY ?? AUTH_STORAGE_KEY;
    const raw = window.localStorage.getItem(storageKey);

    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
}

export function setUser(u: any, KEY?: string) {
  if (typeof window === "undefined") return;

  const storageKey = KEY ?? AUTH_STORAGE_KEY;
  window.localStorage.setItem(storageKey, JSON.stringify(u));
  window.dispatchEvent(new Event("authChange"));
}

export function clearUser(KEY?: string) {
  if (typeof window === "undefined") return;

  accessToken = null;

  const storageKey = KEY ?? AUTH_STORAGE_KEY;
  window.localStorage.removeItem(storageKey);
  try {
    window.localStorage.removeItem("hospital_entitlements");
  } catch {
    // ignore
  }
  window.dispatchEvent(new Event("authChange"));
}

export function getAccessToken(): string | null {
  return accessToken;
}

export function setAccessToken(token: string) {
  accessToken = token;
}

export async function loginWithBackend(
  email: string,
  password: string,
): Promise<AuthUser> {
  const response = api.post<BackendLoginResponse>("/api/hospital/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: { email, password },
  });

  const payload = (await response.catch(
    () => null,
  )) as BackendLoginResponse | null;

  if (!response || !payload) {
    throw new Error(
      payload?.accessToken
        ? "Login failed"
        : "Unable to sign in with the provided credentials.",
    );
  }

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
  } satisfies AuthUser;

  setUser(user);
  setAccessToken(payload.accessToken);
  return user;
}

export function canAccess(role: Role, path: string): boolean {
  const allowed = ROLE_ROUTES[role];
  if (allowed === "all") return true;
  if (path === "/") return true;
  return allowed.some((p) => path === p || path.startsWith(p + "/"));
}

export async function logOutFromFrontend(): Promise<boolean> {
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
