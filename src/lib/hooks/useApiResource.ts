import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type ApiError } from "@/lib/api";

export function useApiQuery<TData>(key: readonly unknown[], path: string, options?: { enabled?: boolean; params?: Record<string, string | number | boolean | undefined>; staleTime?: number; select?: (data: TData) => TData }) {
  return useQuery({
    queryKey: key,
    queryFn: () => api.get<TData>(path, { params: options?.params }),
    enabled: options?.enabled,
    staleTime: options?.staleTime,
    select: options?.select,
  });
}

export function useApiMutation<TData, TVariables>(key: readonly unknown[], path: string, method: "post" | "put" | "patch" | "delete" = "post") {
  const queryClient = useQueryClient();

  return useMutation<TData, ApiError, TVariables>({
    mutationFn: async (variables) => {
      if (method === "post") return api.post<TData>(path, variables);
      if (method === "put") return api.put<TData>(path, variables);
      if (method === "patch") return api.patch<TData>(path, variables);
      return api.delete<TData>(path, { body: variables });
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: key });
    },
  });
}
