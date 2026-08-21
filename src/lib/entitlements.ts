import { api } from "@/lib/api";
import type { EntitlementModule } from "@/types/user-management";

export const ENTITLEMENTS_CACHE_KEY = "hospital_entitlements";
export const ENTITLEMENTS_CACHE_TTL_MS = 1000 * 60 * 60;

export function normalizeEntitlements(data: any[]): EntitlementModule[] {
  if (!Array.isArray(data)) {
    return [];
  }

  return data.map((module) => ({
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
}

export function getCachedEntitlements(): EntitlementModule[] {
  try {
    const raw = localStorage.getItem(ENTITLEMENTS_CACHE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw) as {
      cachedAt: number;
      data: EntitlementModule[];
    };

    if (!parsed?.data || !Array.isArray(parsed.data)) {
      return [];
    }

    if (Date.now() - parsed.cachedAt > ENTITLEMENTS_CACHE_TTL_MS) {
      localStorage.removeItem(ENTITLEMENTS_CACHE_KEY);
      return [];
    }

    return parsed.data;
  } catch {
    return [];
  }
}

export function setCachedEntitlements(data: EntitlementModule[]) {
  try {
    localStorage.setItem(
      ENTITLEMENTS_CACHE_KEY,
      JSON.stringify({
        cachedAt: Date.now(),
        data,
      }),
    );
  } catch {
    // ignore storage issues
  }
}

export function clearEntitlementsCache() {
  try {
    localStorage.removeItem(ENTITLEMENTS_CACHE_KEY);
  } catch {
    // ignore
  }
}

export async function fetchEntitlements(
  force = false,
): Promise<EntitlementModule[]> {
  const cached = getCachedEntitlements();
  if (!force && cached.length > 0) {
    return cached;
  }

  const data = await api.get<any[]>("/api/hospital/roles/entitlements/modules");
  const transformed = normalizeEntitlements(data);
  setCachedEntitlements(transformed);
  return transformed;
}
