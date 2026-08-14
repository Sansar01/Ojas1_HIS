import { n as __toESM } from "../_runtime.mjs";
import { i as getUser, o as loginWithBackend } from "./auth-Bp511B8q.mjs";
import {
  i as require_react,
  r as require_jsx_runtime,
} from "../_libs/react+tanstack__react-query.mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import {
  U as LogIn,
  W as LoaderCircle,
  X as Heart,
} from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-BTu4NVO6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = (0, import_react.useState)("");
  const [password, setPassword] = (0, import_react.useState)("");
  const [error, setError] = (0, import_react.useState)("");
  const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    if (getUser()) navigate({ to: "/" });
  }, [navigate]);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Enter your email and password");
      return;
    }
    setError("");
    setIsSubmitting(true);
    try {
      if ((await loginWithBackend(email.trim(), password)).forcePasswordChange)
        navigate({ to: "/change-password" });
      else navigate({ to: "/" });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to sign in right now.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className:
      "min-h-screen flex items-center justify-center bg-linear-to-br from-primary/10 via-background to-primary/5 p-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "w-full max-w-md bg-card rounded-2xl shadow-xl border p-8",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "flex items-center gap-3 mb-6",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className:
                "w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
                className: "w-6 h-6 text-primary fill-primary",
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "font-bold text-lg leading-tight",
                  children: "Ojas1Cloud HIMS",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "text-xs text-muted-foreground",
                  children: "One Patient. One Record.",
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
          className: "text-xl font-semibold mb-1",
          children: "Sign in",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className: "text-sm text-muted-foreground mb-6",
          children: "Use your hospital credentials to sign in securely.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
          onSubmit,
          className: "space-y-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                  className: "text-xs font-medium mb-1 block",
                  children: "Email",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                  type: "email",
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  className:
                    "w-full px-3 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:border-primary",
                  placeholder: "admin@abc.com",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                  className: "text-xs font-medium mb-1 block",
                  children: "Password",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                  type: "password",
                  value: password,
                  onChange: (e) => setPassword(e.target.value),
                  className:
                    "w-full px-3 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:border-primary",
                  placeholder: "Enter your password",
                }),
              ],
            }),
            error &&
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "text-xs text-destructive",
                children: error,
              }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
              type: "submit",
              disabled: isSubmitting,
              className:
                "w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70",
              children: [
                isSubmitting
                  ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
                      className: "w-4 h-4 animate-spin",
                    })
                  : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, {
                      className: "w-4 h-4",
                    }),
                " ",
                "Sign in",
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className:
            "mt-6 text-[11px] text-muted-foreground bg-muted rounded-lg p-3",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "font-semibold mb-1",
              children: "Use your hospital account",
            }),
            "Your access level will be derived from the backend response after a successful login.",
          ],
        }),
      ],
    }),
  });
}
//#endregion
export { LoginPage as component };
