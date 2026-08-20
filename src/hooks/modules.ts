import { api } from "@/lib/api";
import { EntitlementModule } from "@/types/user-management";
import { useQuery } from "@tanstack/react-query";

export function useEntitlements() {
  const query = useQuery({
    queryKey: ["user-entitlements"],
    queryFn: async () => {
      const data = await api.get<any[]>(
        "/api/hospital/roles/entitlements/modules",
      );

      if (!Array.isArray(data)) {
        console.warn("Entitlements response is not an array:", data);

        return [];
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

      return transformed;
    },

    // Don't refetch while navigating between pages
    staleTime: 5 * 60 * 1000,

    // Keep cached data available
    gcTime: 30 * 60 * 1000,

    // Optional: don't refetch automatically when browser regains focus
    refetchOnWindowFocus: false,
  });

  return {
    entitlements: query.data ?? [],
    loading: query.isLoading,
    error: query.error
      ? query.error instanceof Error
        ? query.error.message
        : "Failed to fetch entitlements"
      : null,
  };
}
