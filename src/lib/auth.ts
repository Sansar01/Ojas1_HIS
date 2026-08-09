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

// Allowed routes per role. Super admin gets everything.
export const ROLE_ROUTES: Record<Role, string[] | "all"> = {
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

const KEY = "authUser";

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

export function getUser(): AuthUser | null {
  try {
    if (typeof window === "undefined") return null;

    const raw = window.localStorage.getItem(KEY);

    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
}

export function setUser(u: AuthUser) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(u));
  window.dispatchEvent(new Event("authChange"));
}

export function clearUser() {
  if (typeof window === "undefined") return;

  accessToken = null;

  window.localStorage.removeItem(KEY);
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
    await api.post(
      "/api/hospital/auth/logout",
      {
        method: "POST",
        credentials: "include",
      },
      true,
    );

    return true;
  } catch (error) {
    console.error("Logout API failed:", error);

    return false;
  } finally {
    clearUser();
  }
}
