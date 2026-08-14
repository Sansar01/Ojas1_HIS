import { n as e } from "./rolldown-runtime-Bh1tDfsg.js";
import { c as t, d as n, f as r, i, n as a } from "./auth-CRzH69JE.js";
import { t as o } from "./createLucideIcon-CYyYTezv.js";
import { t as s } from "./heart-XBKJzS6v.js";
import { t as c } from "./log-in-BBeV8hIT.js";
var l = o(`loader-circle`, [
    [`path`, { d: `M21 12a9 9 0 1 1-6.219-8.56`, key: `13zald` }],
  ]),
  u = e(r()),
  d = n();
function f() {
  let e = t(),
    [n, r] = (0, u.useState)(``),
    [o, f] = (0, u.useState)(``),
    [p, m] = (0, u.useState)(``),
    [h, g] = (0, u.useState)(!1);
  return (
    (0, u.useEffect)(() => {
      a() && e({ to: `/` });
    }, [e]),
    (0, d.jsx)(`div`, {
      className: `min-h-screen flex items-center justify-center bg-linear-to-br from-primary/10 via-background to-primary/5 p-4`,
      children: (0, d.jsxs)(`div`, {
        className: `w-full max-w-md bg-card rounded-2xl shadow-xl border p-8`,
        children: [
          (0, d.jsxs)(`div`, {
            className: `flex items-center gap-3 mb-6`,
            children: [
              (0, d.jsx)(`div`, {
                className: `w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center`,
                children: (0, d.jsx)(s, {
                  className: `w-6 h-6 text-primary fill-primary`,
                }),
              }),
              (0, d.jsxs)(`div`, {
                children: [
                  (0, d.jsx)(`div`, {
                    className: `font-bold text-lg leading-tight`,
                    children: `Ojas1Cloud HIMS`,
                  }),
                  (0, d.jsx)(`div`, {
                    className: `text-xs text-muted-foreground`,
                    children: `One Patient. One Record.`,
                  }),
                ],
              }),
            ],
          }),
          (0, d.jsx)(`h1`, {
            className: `text-xl font-semibold mb-1`,
            children: `Sign in`,
          }),
          (0, d.jsx)(`p`, {
            className: `text-sm text-muted-foreground mb-6`,
            children: `Use your hospital credentials to sign in securely.`,
          }),
          (0, d.jsxs)(`form`, {
            onSubmit: async (t) => {
              if ((t.preventDefault(), !n.trim() || !o.trim())) {
                m(`Enter your email and password`);
                return;
              }
              (m(``), g(!0));
              try {
                (await i(n.trim(), o)).forcePasswordChange
                  ? e({ to: `/change-password` })
                  : e({ to: `/` });
              } catch (e) {
                m(
                  e instanceof Error
                    ? e.message
                    : `Unable to sign in right now.`,
                );
              } finally {
                g(!1);
              }
            },
            className: `space-y-4`,
            children: [
              (0, d.jsxs)(`div`, {
                children: [
                  (0, d.jsx)(`label`, {
                    className: `text-xs font-medium mb-1 block`,
                    children: `Email`,
                  }),
                  (0, d.jsx)(`input`, {
                    type: `email`,
                    value: n,
                    onChange: (e) => r(e.target.value),
                    className: `w-full px-3 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:border-primary`,
                    placeholder: `admin@abc.com`,
                  }),
                ],
              }),
              (0, d.jsxs)(`div`, {
                children: [
                  (0, d.jsx)(`label`, {
                    className: `text-xs font-medium mb-1 block`,
                    children: `Password`,
                  }),
                  (0, d.jsx)(`input`, {
                    type: `password`,
                    value: o,
                    onChange: (e) => f(e.target.value),
                    className: `w-full px-3 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:border-primary`,
                    placeholder: `Enter your password`,
                  }),
                ],
              }),
              p &&
                (0, d.jsx)(`div`, {
                  className: `text-xs text-destructive`,
                  children: p,
                }),
              (0, d.jsxs)(`button`, {
                type: `submit`,
                disabled: h,
                className: `w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70`,
                children: [
                  h
                    ? (0, d.jsx)(l, { className: `w-4 h-4 animate-spin` })
                    : (0, d.jsx)(c, { className: `w-4 h-4` }),
                  ` `,
                  `Sign in`,
                ],
              }),
            ],
          }),
          (0, d.jsxs)(`div`, {
            className: `mt-6 text-[11px] text-muted-foreground bg-muted rounded-lg p-3`,
            children: [
              (0, d.jsx)(`div`, {
                className: `font-semibold mb-1`,
                children: `Use your hospital account`,
              }),
              `Your access level will be derived from the backend response after a successful login.`,
            ],
          }),
        ],
      }),
    })
  );
}
export { f as component };
