// src/hooks/useUserManagement.ts

import { useState, useEffect, useCallback } from "react";
import { api } from "@/lib/api";
import type {
  HospitalRole,
  Department,
  Shift,
  EntitlementModule,
  RolePermission,
  HospitalUser,
  CreateUserPayload,
  CreateUserResponse,
} from "@/types/user-management";

// ─── Roles ───────────────────────────────────────
export function useRoles() {
  const [roles, setRoles] = useState<HospitalRole[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .get<HospitalRole[]>("/api/hospital/roles")
      .then(setRoles)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const activeRoles = roles.filter((r) => r.isActive);

  return { roles, activeRoles, loading, error };
}

// ─── Departments ─────────────────────────────────
export function useDepartments() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .get<Department[]>("/api/hospital/masters/departments", {
        params: { active: true },
      })
      .then(setDepartments)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { departments, loading, error };
}

// ─── Shifts ──────────────────────────────────────
export function useShifts() {
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .get<Shift[]>("/api/hospital/masters/shifts", {
        params: { active: true },
      })
      .then(setShifts)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { shifts, loading, error };
}

// ─── Entitlements (modules from package) ─────────
// export function useEntitlements() {
//   const [entitlements, setEntitlements] = useState<EntitlementModule[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     api
//       .get<EntitlementModule[]>("/roles/entitlements/modules")
//       .then(setEntitlements)
//       .catch((e) => setError(e.message))
//       .finally(() => setLoading(false));
//   }, []);

//   return { entitlements, loading, error };
// }

// src/hooks/useUserManagement.ts

export function useEntitlements() {
  const [entitlements, setEntitlements] = useState<EntitlementModule[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .get<any[]>("/api/hospital/roles/entitlements/modules")
      .then((data) => {
        console.log("Entitlements API response:", data);
        if (!Array.isArray(data)) {
          console.warn("Entitlements response is not an array:", data);
          setEntitlements([]);
          return;
        }
        const transformed: EntitlementModule[] = data.map((module) => ({
          id: module.id,
          name: module.name,
          code: module.code,
          route: module.route || "",
          icon: module.icon || "",
          isActive: module.isActive !== false,
          features: (module.features || []).map((mf: any) => ({
            id: mf.feature?.id || mf.id,
            name: mf.feature?.name || mf.name,
            code: mf.feature?.code || mf.code,
          })),
        }));
        console.log("Transformed entitlements:", transformed);
        setEntitlements(transformed);
      })
      .catch((e) => {
        console.error("Failed to fetch entitlements:", e);
        setError(e.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return { entitlements, loading, error };
}

// ─── Role Permissions (prefill Step 2+3) ─────────
export function useRolePermissions(roleId: string | null) {
  const [permissions, setPermissions] = useState<RolePermission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!roleId) {
      setPermissions([]);
      return;
    }

    setLoading(true);
    setError(null);

    api
      .get<RolePermission[]>(`/api/hospital/roles/${roleId}/permissions`)
      .then(setPermissions)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [roleId]);

  return { permissions, loading, error };
}

// ─── Existing Users (copy rights in Step 4) ──────
// src/hooks/useUserManagement.ts

export function useHospitalUsers() {
  const [users, setUsers] = useState<HospitalUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .get<any[]>("/api/hospital/users", {
        params: { status: "ACTIVE" },
      })
      .then((data) => {
        if (!Array.isArray(data)) {
          setUsers([]);
          return;
        }

        const transformed: HospitalUser[] = data.map((u) => ({
          id: u.id,
          employeeId: u.staffProfile?.employeeId || "",
          email: u.email || "",
          userType: u.userType || "REGULAR_USER",
          isActive: u.status === "ACTIVE",
          profile: {
            firstName: u.firstName || "",
            lastName: u.lastName || "",
            //phone: u.mobile || "",
          },
          roles: (u.roles || []).map((r: any) => ({
            roleId: r.hospitalRoleId || "",
            roleName: r.hospitalRole?.roleName?.name || "",
            isPrimary: r.isPrimary ?? false,
          })),
          departments: (u.departments || []).map((d: any) => ({
            departmentId: d.departmentId || "",
            departmentName: d.department?.name || "",
          })),
        }));

        setUsers(transformed);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { users, loading, error };
}

// ─── Create User ─────────────────────────────────
// export function useCreateUser() {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const createUser = useCallback(async (payload: CreateUserPayload) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const result = await api.post<CreateUserResponse>("/users", payload);
//       return result;
//     } catch (e: any) {
//       setError(e.message);
//       throw e;
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   return { createUser, loading, error };
// }

// src/hooks/useUserManagement.ts

export function useCreateUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createUser = useCallback(async (payload: CreateUserPayload) => {
    setLoading(true);
    setError(null);

    try {
      const result = await api.post<CreateUserResponse>("/api/hospital/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: payload,
      });
      return result;
    } catch (e: any) {
      setError(e.message);
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  return { createUser, loading, error };
}
