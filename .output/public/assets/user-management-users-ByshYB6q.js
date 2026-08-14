import { d as e } from "./auth-CRzH69JE.js";
import { i as t } from "./Match-D3SkUO7z.js";
import { g as n, o as r, p as i, t as a } from "./AppLayout-x7TZ9xUn.js";
import { t as o } from "./createLucideIcon-CYyYTezv.js";
import { n as s } from "./Kpi-B7fzN02H.js";
var c = o(`arrow-left`, [
    [`path`, { d: `m12 19-7-7 7-7`, key: `1l729n` }],
    [`path`, { d: `M19 12H5`, key: `x3x0zl` }],
  ]),
  l = e();
function u() {
  let { users: e, loading: o, error: u } = r();
  return (0, l.jsxs)(a, {
    children: [
      (0, l.jsxs)(`div`, {
        className: `mb-6 flex items-center justify-between gap-3`,
        children: [
          (0, l.jsxs)(`div`, {
            children: [
              (0, l.jsx)(`h1`, {
                className: `text-2xl font-bold`,
                children: `Created Users`,
              }),
              (0, l.jsx)(`p`, {
                className: `text-sm text-muted-foreground`,
                children: `View all users created through the user management flow.`,
              }),
            ],
          }),
          (0, l.jsxs)(t, {
            to: `/user-management`,
            className: `inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm`,
            children: [
              (0, l.jsx)(c, { className: `h-4 w-4` }),
              ` Back to User Management`,
            ],
          }),
        ],
      }),
      (0, l.jsxs)(s, {
        title: `User List`,
        children: [
          (0, l.jsxs)(`div`, {
            className: `mb-4 flex items-center gap-2 rounded-lg border bg-muted/30 px-3 py-2 text-sm`,
            children: [
              (0, l.jsx)(n, { className: `h-4 w-4 text-muted-foreground` }),
              (0, l.jsx)(`span`, {
                className: `text-muted-foreground`,
                children: `Showing created users from the hospital directory`,
              }),
            ],
          }),
          o
            ? (0, l.jsx)(`div`, {
                className: `text-sm text-muted-foreground`,
                children: `Loading users…`,
              })
            : u
              ? (0, l.jsx)(`div`, {
                  className: `rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive`,
                  children: u,
                })
              : e.length === 0
                ? (0, l.jsx)(`div`, {
                    className: `rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground`,
                    children: `No users created yet.`,
                  })
                : (0, l.jsx)(`div`, {
                    className: `space-y-3`,
                    children: e.map((e) =>
                      (0, l.jsxs)(
                        `div`,
                        {
                          className: `flex items-center justify-between rounded-lg border p-4`,
                          children: [
                            (0, l.jsxs)(`div`, {
                              className: `flex items-center gap-3`,
                              children: [
                                (0, l.jsx)(`div`, {
                                  className: `flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary`,
                                  children: (0, l.jsx)(i, {
                                    className: `h-5 w-5`,
                                  }),
                                }),
                                (0, l.jsxs)(`div`, {
                                  children: [
                                    (0, l.jsxs)(`div`, {
                                      className: `font-semibold`,
                                      children: [
                                        e.profile.firstName,
                                        ` `,
                                        e.profile.lastName,
                                      ],
                                    }),
                                    (0, l.jsx)(`div`, {
                                      className: `text-sm text-muted-foreground`,
                                      children: e.email,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, l.jsxs)(`div`, {
                              className: `text-right text-sm`,
                              children: [
                                (0, l.jsx)(`div`, {
                                  className: `font-medium`,
                                  children: e.employeeId || `—`,
                                }),
                                (0, l.jsx)(`div`, {
                                  className: `text-muted-foreground`,
                                  children: e.userType,
                                }),
                              ],
                            }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  }),
        ],
      }),
    ],
  });
}
export { u as component };
