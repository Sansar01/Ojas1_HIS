import { n as api } from "./api-DWw3pQC_.mjs";
import { t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/useApiResource-CHwVuAPQ.js
function useApiQuery(key, path, options) {
	return useQuery({
		queryKey: key,
		queryFn: () => api.get(path, { params: options?.params }),
		enabled: options?.enabled,
		staleTime: options?.staleTime,
		select: options?.select
	});
}
//#endregion
export { useApiQuery as t };
