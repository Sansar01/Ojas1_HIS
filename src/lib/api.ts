import { getAccessToken } from "./auth";

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
  import.meta.env.VITE_API_BASE_URL ||
  "https://cloud-his-backend.onrender.com"
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
): Promise<T> {
  const { body, params, auth = true, headers, ...rest } = options;
  const requestHeaders = new Headers(headers);
  const token = auth ? getAccessToken() : null;

  if (token) {
    requestHeaders.set("Authorization", `Bearer ${token}`);
  }

  if (body !== undefined && !(body instanceof FormData)) {
    requestHeaders.set("Content-Type", "application/json");
  }

  const response = await fetch(buildUrl(path, params), {
    ...rest,
    headers: requestHeaders,
    body:
      body === undefined
        ? undefined
        : body instanceof FormData
          ? body
          : JSON.stringify(body),
  });

  const payload = await parsePayload(response);

  if (!response.ok) {
    throw new ApiError(
      typeof payload === "object" &&
        payload &&
        "message" in payload &&
        typeof payload.message === "string"
        ? payload.message
        : "Request failed",
      response.status,
      payload,
    );
  }

  return payload as T;
}

export const api = {
  get: <T>(path: string, options?: Omit<ApiOptions, "method" | "body">) =>
    apiRequest<T>(path, { ...options, method: "GET" }),
  post: <T>(path: string, body?: {}) => apiRequest<T>(path, body),
  put: <T>(path: string, body?: {}) => apiRequest<T>(path, body),
  patch: <T>(path: string, body?: {}) => apiRequest<T>(path, body),
  delete: <T>(path: string, options?: Omit<ApiOptions, "method" | "body">) =>
    apiRequest<T>(path, { ...options, method: "DELETE" }),
};
