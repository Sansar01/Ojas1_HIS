import {
  clearUser,
  getAccessToken,
  setAccessToken,
} from "./auth";

export type ApiOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
  params?: Record<string, string | number | boolean | undefined>;
  auth?: boolean;
};

export class ApiError extends Error {
  status: number;
  payload?: unknown;

  constructor(message: string, status: number, payload?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.payload = payload;
  }
}

const DEFAULT_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "https://cloud-his-backend.onrender.com"
).replace(/\/$/, "");

function buildUrl(
  path: string,
  params?: Record<string, string | number | boolean | undefined>,
) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (!params) return `${DEFAULT_BASE_URL}${normalizedPath}`;

  const search = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined) return;
    search.set(key, String(value));
  });

  const query = search.toString();
  return `${DEFAULT_BASE_URL}${normalizedPath}${query ? `?${query}` : ""}`;
}

async function parsePayload(response: Response) {
  const text = await response.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

export async function apiRequest<T>(
  path: string,
  options: ApiOptions = {},
  forRefreshToken: boolean = false,
): Promise<T> {
  const { body, params, auth = true, headers, ...rest } = options;

  const makeRequest = async (token?: string | null) => {
    const requestHeaders = new Headers(headers);

    if (token) {
      requestHeaders.set("Authorization", `Bearer ${token}`);
    }

    if (body !== undefined && !(body instanceof FormData)) {
      requestHeaders.set("Content-Type", "application/json");
    }

    if (forRefreshToken) {
      return fetch(buildUrl(path, params), {
        ...rest,
      });
    } else {
      return fetch(buildUrl(path, params), {
        ...rest,
        headers: requestHeaders,
        credentials: "include",
        body:
          body !== undefined && !(body instanceof FormData)
            ? JSON.stringify(body)
            : (body as BodyInit | null | undefined),
      });
    }
  };

  let token = auth ? getAccessToken() : null;

  let response = await makeRequest(token);

  // Access token expired
  if (response.status === 401 && auth) {
    token = await refreshAccessToken();

    // Refresh token/session also expired
    if (!token) {
      clearUser();

      window.location.href = "/login";

      throw new ApiError("Your session has expired. Please login again.", 401);
    }

    // Retry original request with new access token
    response = await makeRequest(token);
  }

  const payload = await parsePayload(response);

  if (!response.ok) {
    throw new ApiError(
      `Request failed with status ${response.status}`,
      response.status,
      payload,
    );
  }

  return payload as T;
}

export const api = {
  get: <T>(path: string, options?: Omit<ApiOptions, "method" | "body">) =>
    apiRequest<T>(path, { ...options, method: "GET" }),
  post: <T>(path: string, body?: {}, forRefreshToken?: boolean) =>
    apiRequest<T>(path, body, forRefreshToken),
  put: <T>(path: string, body?: {}) => apiRequest<T>(path, body),
  patch: <T>(path: string, body?: {}) => apiRequest<T>(path, body),
  delete: <T>(path: string, options?: Omit<ApiOptions, "method" | "body">) =>
    apiRequest<T>(path, { ...options, method: "DELETE" }),
};

/**
 * Gets a new access token using the refresh token
 * stored in an HttpOnly cookie.
 */
async function refreshAccessToken(): Promise<string | null> {
  try {
    const response = await api.post(
      `/api/hospital/auth/refresh`,
      {
        method: "POST",
        credentials: "include",
      },
      true,
    );

    if (!response) {
      clearUser();
      return null;
    }

    const data: { accessToken?: string } = await response;

    if (!data.accessToken) {
      clearUser();
      return null;
    }

    setAccessToken(data.accessToken);

    return data.accessToken;
  } catch {
    clearUser();
    return null;
  }
}
