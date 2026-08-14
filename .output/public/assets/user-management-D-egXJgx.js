import { n as e } from "./rolldown-runtime-Bh1tDfsg.js";
import { d as t, f as n } from "./auth-CRzH69JE.js";
import { i as r } from "./Match-D3SkUO7z.js";
import {
  a as i,
  c as a,
  g as ee,
  i as te,
  l as ne,
  n as o,
  o as re,
  r as ie,
  s as ae,
  t as oe,
} from "./AppLayout-x7TZ9xUn.js";
import { t as s } from "./createLucideIcon-CYyYTezv.js";
import { t as se } from "./circle-alert-DaPe1FjS.js";
import { t as c } from "./circle-check-B8_KDfYz.js";
import { t as l } from "./key-round-DQf7ineL.js";
import { t as u } from "./shield-C5OnjqqB.js";
import { t as d } from "./user-uWaBTeu7.js";
import { n as f } from "./Kpi-B7fzN02H.js";
var p = s(`check`, [[`path`, { d: `M20 6 9 17l-5-5`, key: `1gmf2c` }]]),
  ce = s(`chevron-right`, [[`path`, { d: `m9 18 6-6-6-6`, key: `mthhwq` }]]),
  m = s(`copy`, [
    [
      `rect`,
      {
        width: `14`,
        height: `14`,
        x: `8`,
        y: `8`,
        rx: `2`,
        ry: `2`,
        key: `17jyea`,
      },
    ],
    [
      `path`,
      {
        d: `M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,
        key: `zix9uf`,
      },
    ],
  ]),
  h = e(n()),
  g = t(),
  _ = [
    { n: 1, t: `User Info`, i: d },
    { n: 2, t: `Module Rights`, i: u },
    { n: 3, t: `Credentials & Mapping`, i: l },
  ],
  v = [
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
    `Sunday`,
  ];
function le({ data: e, onClose: t }) {
  let [n, r] = (0, h.useState)(!1);
  function i() {
    let t = `Employee ID: ${e.employeeId}\nEmail: ${e.email}\nTemp Password: ${e.tempPassword}`;
    navigator.clipboard.writeText(t).then(() => {
      (r(!0), setTimeout(() => r(!1), 2e3));
    });
  }
  return (0, g.jsx)(`div`, {
    className: `fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4`,
    children: (0, g.jsxs)(`div`, {
      className: `bg-card border rounded-2xl shadow-xl w-full max-w-md p-6`,
      children: [
        (0, g.jsxs)(`div`, {
          className: `text-center mb-5`,
          children: [
            (0, g.jsx)(c, { className: `w-12 h-12 text-success mx-auto mb-3` }),
            (0, g.jsx)(`h2`, {
              className: `text-lg font-bold`,
              children: `User Created Successfully`,
            }),
            (0, g.jsx)(`p`, {
              className: `text-sm text-muted-foreground mt-1`,
              children: `Share these credentials with the staff member`,
            }),
          ],
        }),
        (0, g.jsxs)(`div`, {
          className: `space-y-3 bg-muted rounded-xl p-4 text-sm`,
          children: [
            (0, g.jsxs)(`div`, {
              className: `flex justify-between`,
              children: [
                (0, g.jsx)(`span`, {
                  className: `text-muted-foreground`,
                  children: `Employee ID`,
                }),
                (0, g.jsx)(`span`, {
                  className: `font-semibold`,
                  children: e.employeeId,
                }),
              ],
            }),
            (0, g.jsxs)(`div`, {
              className: `flex justify-between`,
              children: [
                (0, g.jsx)(`span`, {
                  className: `text-muted-foreground`,
                  children: `Email / Username`,
                }),
                (0, g.jsx)(`span`, {
                  className: `font-semibold`,
                  children: e.email,
                }),
              ],
            }),
            (0, g.jsxs)(`div`, {
              className: `flex justify-between`,
              children: [
                (0, g.jsx)(`span`, {
                  className: `text-muted-foreground`,
                  children: `Temp Password`,
                }),
                (0, g.jsx)(`span`, {
                  className: `font-mono font-bold text-primary`,
                  children: e.tempPassword,
                }),
              ],
            }),
          ],
        }),
        (0, g.jsxs)(`div`, {
          className: `mt-4 flex gap-3`,
          children: [
            (0, g.jsxs)(`button`, {
              onClick: i,
              className: `flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border rounded-lg text-sm font-medium`,
              children: [
                n
                  ? (0, g.jsx)(p, { className: `w-4 h-4 text-success` })
                  : (0, g.jsx)(m, { className: `w-4 h-4` }),
                n ? `Copied!` : `Copy Credentials`,
              ],
            }),
            (0, g.jsx)(`button`, {
              onClick: t,
              className: `flex-1 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium`,
              children: `Done`,
            }),
          ],
        }),
      ],
    }),
  });
}
function y() {
  let [e, t] = (0, h.useState)(1),
    { activeRoles: n, loading: s } = a(),
    { departments: c, loading: l } = te(),
    { shifts: u, loading: d } = ne(),
    { entitlements: y, loading: x } = i(),
    { users: S, loading: C } = re(),
    { createUser: ue, loading: w, error: T } = ie(),
    [E, D] = (0, h.useState)(`regular`),
    [O, de] = (0, h.useState)(!1);
  (0, h.useEffect)(() => {
    try {
      localStorage.getItem(`um_userType`) === `doctor` &&
        (localStorage.removeItem(`um_userType`), D(`doctor`), de(!0));
    } catch {}
  }, []);
  let [k, A] = (0, h.useState)(
      Object.fromEntries(
        v.map((e) => [
          e,
          { enabled: e !== `Sunday`, from: `09:00`, to: `17:00` },
        ]),
      ),
    ),
    [j, M] = (0, h.useState)({
      title: `Mr.`,
      firstName: ``,
      lastName: ``,
      email: ``,
      mobile: ``,
      alternateMobile: ``,
      gender: `MALE`,
      dateOfBirth: ``,
      bloodGroup: `A+`,
      designation: ``,
      dateOfJoining: ``,
      aadhaar: ``,
      pan: ``,
      medicalCouncilNo: ``,
      qualification: ``,
      specialization: ``,
      address: ``,
      city: ``,
      state: ``,
      pincode: ``,
      emergencyContact: ``,
      primaryRoleId: ``,
      additionalRoleIds: [],
      departmentIds: [],
      shiftId: ``,
      password: ``,
      loginType: `PASSWORD`,
      forcePasswordChange: !0,
      twoFactorEnabled: !1,
      sendCredentialsViaSms: !1,
      sendCredentialsViaEmail: !1,
    }),
    N = (e, t) => {
      (M((n) => ({ ...n, [e]: t })),
        X((t) => {
          let n = { ...t };
          return (delete n[e], n);
        }));
    },
    [P, F] = (0, h.useState)({}),
    { permissions: I, loading: L } = ae(j.primaryRoleId || null);
  (0, h.useEffect)(() => {
    if (I.length > 0) {
      let e = {};
      (I.forEach((t) => {
        e[`${t.moduleId}__${t.featureId}`] = !0;
      }),
        F(e));
    } else F({});
  }, [I]);
  let R = (e, t) => {
      let n = `${e}__${t}`;
      F((e) => ({ ...e, [n]: !e[n] }));
    },
    z = (e, t) => {
      let n = t.every((t) => P[`${e}__${t.id}`]);
      F((r) => {
        let i = { ...r };
        return (
          t.forEach((t) => {
            i[`${e}__${t.id}`] = !n;
          }),
          i
        );
      });
    },
    B = () => {
      let e = {};
      (y.forEach((t) => {
        t.features.forEach((n) => {
          e[`${t.id}__${n.id}`] = !0;
        });
      }),
        F(e));
    },
    V = () => F({}),
    H = () =>
      Object.entries(P)
        .filter(([, e]) => e)
        .map(([e]) => {
          let [t, n] = e.split(`__`);
          return { moduleId: t, featureId: n };
        }),
    fe = new Set(H().map((e) => e.moduleId)).size,
    U = H().length,
    [W, pe] = (0, h.useState)(``),
    [G, K] = (0, h.useState)([]),
    [q, J] = (0, h.useState)([]),
    [Y, X] = (0, h.useState)({});
  (0, h.useEffect)(() => {
    Y.permissions &&
      U > 0 &&
      X((e) => {
        let t = { ...e };
        return (delete t.permissions, t);
      });
  }, [Y.permissions, U]);
  let [Z, Q] = (0, h.useState)(null),
    $ = (e) => {
      let t = {};
      if (
        (e === 1 &&
          (j.firstName.trim() || (t.firstName = `First Name is required`),
          j.lastName.trim() || (t.lastName = `Last Name is required`),
          j.email.trim() || (t.email = `Email is required`),
          j.designation.trim() || (t.designation = `Designation is required`),
          (j.departmentIds.length === 0 || !j.departmentIds[0]) &&
            (t.departmentIds = `Department is required`),
          j.primaryRoleId || (t.primaryRoleId = `Role is required`)),
        e === 2 &&
          y.length > 0 &&
          U === 0 &&
          (t.permissions = `Select at least one permission`),
        e === 3 && (j.password.trim() || (t.password = `Password is required`)),
        X(t),
        Object.keys(t).length > 0)
      ) {
        let e = Object.keys(t)[0];
        return (
          setTimeout(() => {
            document.getElementById(`field-${e}`)?.focus();
          }, 0),
          !1
        );
      }
      return !0;
    },
    me = () => {
      $(e) ? t((e) => e + 1) : o.error(`Please fill all required fields`);
    },
    he = (n) => {
      if (n > e && !$(e)) {
        o.error(`Please fill all required fields`);
        return;
      }
      t(n);
    };
  async function ge() {
    if (!$(e)) {
      o.error(`Please fill all required fields`);
      return;
    }
    try {
      let e = {
          userInfo: {
            firstName: j.firstName,
            lastName: j.lastName || void 0,
            email: j.email,
            mobile: j.mobile || void 0,
            alternateMobile: j.alternateMobile || void 0,
            userType: `REGULAR_USER`,
          },
          staffProfile: {
            title: j.title || void 0,
            dateOfBirth: j.dateOfBirth || void 0,
            gender: j.gender || void 0,
            bloodGroup: j.bloodGroup || void 0,
            designation: j.designation || void 0,
            dateOfJoining: j.dateOfJoining || void 0,
            shiftId: j.shiftId || void 0,
            aadhaarNumber: j.aadhaar || void 0,
            panNumber: j.pan || void 0,
            medicalRegNo: j.medicalCouncilNo || void 0,
            qualification: j.qualification || void 0,
            specialization: j.specialization || void 0,
            address: j.address || void 0,
            city: j.city || void 0,
            state: j.state || void 0,
            pincode: j.pincode || void 0,
            emergencyContact: j.emergencyContact || void 0,
          },
          credentials: {
            password: j.password || `TempPass@123`,
            loginType: j.loginType,
            forcePasswordChange: j.forcePasswordChange,
            twoFactorEnabled: j.twoFactorEnabled,
            sendCredentialsViaSms: j.sendCredentialsViaSms,
            sendCredentialsViaEmail: j.sendCredentialsViaEmail,
          },
          roles: {
            primaryRoleId: j.primaryRoleId ? Number(j.primaryRoleId) : void 0,
            additionalRoleIds:
              j.additionalRoleIds.length > 0
                ? j.additionalRoleIds.map((e) => Number(e))
                : void 0,
          },
          departmentIds:
            j.departmentIds.length > 0
              ? j.departmentIds.map((e) => Number(e))
              : void 0,
          permissions: H().map((e) => ({
            moduleId: Number(e.moduleId),
            featureId: Number(e.featureId),
          })),
        },
        t = await ue(e);
      Q(t);
    } catch {}
  }
  function _e({ checked: e, indeterminate: t, onChange: n }) {
    let r = (0, h.useRef)(null);
    return (
      (0, h.useEffect)(() => {
        r.current && (r.current.indeterminate = t);
      }, [t]),
      (0, g.jsx)(`input`, {
        ref: r,
        type: `checkbox`,
        checked: e,
        onChange: n,
        className: `rounded`,
      })
    );
  }
  return (0, g.jsxs)(oe, {
    children: [
      Z &&
        (0, g.jsx)(le, {
          data: Z,
          onClose: () => {
            (Q(null),
              t(1),
              M({
                title: `Mr.`,
                firstName: ``,
                lastName: ``,
                email: ``,
                mobile: ``,
                alternateMobile: ``,
                gender: `MALE`,
                dateOfBirth: ``,
                bloodGroup: `A+`,
                designation: ``,
                dateOfJoining: ``,
                aadhaar: ``,
                pan: ``,
                medicalCouncilNo: ``,
                qualification: ``,
                specialization: ``,
                address: ``,
                city: ``,
                state: ``,
                pincode: ``,
                emergencyContact: ``,
                primaryRoleId: ``,
                additionalRoleIds: [],
                departmentIds: [],
                shiftId: ``,
                password: ``,
                loginType: `PASSWORD`,
                forcePasswordChange: !0,
                twoFactorEnabled: !1,
                sendCredentialsViaSms: !1,
                sendCredentialsViaEmail: !1,
              }),
              F({}),
              K([]),
              J([]));
          },
        }),
      (0, g.jsxs)(`div`, {
        className: `mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between`,
        children: [
          (0, g.jsxs)(`div`, {
            children: [
              (0, g.jsx)(`h1`, {
                className: `text-2xl font-bold`,
                children: `User Management`,
              }),
              (0, g.jsx)(`p`, {
                className: `text-sm text-muted-foreground`,
                children: `Register user, assign module rights and credentials`,
              }),
            ],
          }),
          (0, g.jsx)(`div`, {
            className: `flex gap-2`,
            children: (0, g.jsx)(r, {
              to: `/user-management-users`,
              className: `inline-flex items-center rounded-lg border px-3 py-2 text-sm font-medium`,
              children: `View Created Users`,
            }),
          }),
        ],
      }),
      (0, g.jsx)(`div`, {
        className: `bg-card border rounded-xl p-4 mb-6`,
        children: (0, g.jsx)(`div`, {
          className: `flex items-center justify-between`,
          children: _.map((t, n) => {
            let r = t.i,
              i = e > t.n,
              a = e === t.n;
            return (0, g.jsxs)(
              `div`,
              {
                className: `flex items-center flex-1`,
                children: [
                  (0, g.jsxs)(`button`, {
                    onClick: () => he(t.n),
                    className: `flex items-center gap-3`,
                    children: [
                      (0, g.jsx)(`div`, {
                        className: `w-10 h-10 rounded-full flex items-center justify-center border-2 ${i ? `bg-success text-white border-success` : a ? `bg-primary text-primary-foreground border-primary` : `bg-muted text-muted-foreground border-border`}`,
                        children: i
                          ? (0, g.jsx)(p, { className: `w-5 h-5` })
                          : (0, g.jsx)(r, { className: `w-5 h-5` }),
                      }),
                      (0, g.jsxs)(`div`, {
                        className: `text-left`,
                        children: [
                          (0, g.jsxs)(`div`, {
                            className: `text-[10px] text-muted-foreground`,
                            children: [`Step `, t.n],
                          }),
                          (0, g.jsx)(`div`, {
                            className: `text-sm font-semibold ${a ? `text-primary` : ``}`,
                            children: t.t,
                          }),
                        ],
                      }),
                    ],
                  }),
                  n < _.length - 1 &&
                    (0, g.jsx)(`div`, {
                      className: `flex-1 h-0.5 mx-3 ${i ? `bg-success` : `bg-border`}`,
                    }),
                ],
              },
              t.n,
            );
          }),
        }),
      }),
      e === 1 &&
        (0, g.jsxs)(f, {
          title: `Step 1 · User Information`,
          children: [
            (0, g.jsxs)(`div`, {
              className: `grid grid-cols-3 gap-4`,
              children: [
                (0, g.jsx)(b, {
                  label: `Employee ID`,
                  children: (0, g.jsx)(`input`, {
                    className: `w-full px-2 py-2 border rounded-lg text-sm bg-muted cursor-not-allowed`,
                    placeholder: `Auto-generated (e.g. EMP-0001)`,
                    disabled: !0,
                  }),
                }),
                (0, g.jsxs)(b, {
                  label: `User Type *`,
                  children: [
                    (0, g.jsxs)(`select`, {
                      value: E,
                      onChange: (e) => D(e.target.value),
                      disabled: O,
                      className: `w-full px-2 py-2 border rounded-lg text-sm disabled:opacity-70 disabled:cursor-not-allowed`,
                      children: [
                        (0, g.jsx)(`option`, {
                          value: `regular`,
                          children: `Regular User`,
                        }),
                        (0, g.jsx)(`option`, {
                          value: `doctor`,
                          children: `Doctor`,
                        }),
                      ],
                    }),
                    O &&
                      (0, g.jsx)(`div`, {
                        className: `text-[10px] text-muted-foreground mt-1`,
                        children: `Locked — opened from Doctor Management`,
                      }),
                  ],
                }),
                (0, g.jsx)(b, {
                  label: `Title`,
                  children: (0, g.jsxs)(`select`, {
                    value: j.title,
                    onChange: (e) => N(`title`, e.target.value),
                    className: `w-full px-2 py-2 border rounded-lg text-sm`,
                    children: [
                      (0, g.jsx)(`option`, { children: `Mr.` }),
                      (0, g.jsx)(`option`, { children: `Mrs.` }),
                      (0, g.jsx)(`option`, { children: `Ms.` }),
                      (0, g.jsx)(`option`, { children: `Dr.` }),
                    ],
                  }),
                }),
                (0, g.jsx)(b, {
                  label: `First Name *`,
                  error: Y.firstName,
                  children: (0, g.jsx)(`input`, {
                    id: `field-firstName`,
                    value: j.firstName,
                    onChange: (e) => N(`firstName`, e.target.value),
                    className: `w-full px-2 py-2 border rounded-lg text-sm`,
                    placeholder: `First name`,
                  }),
                }),
                (0, g.jsx)(b, {
                  label: `Last Name *`,
                  error: Y.lastName,
                  children: (0, g.jsx)(`input`, {
                    id: `field-lastName`,
                    value: j.lastName,
                    onChange: (e) => N(`lastName`, e.target.value),
                    className: `w-full px-2 py-2 border rounded-lg text-sm`,
                    placeholder: `Last name`,
                  }),
                }),
                (0, g.jsx)(b, {
                  label: `Date of Birth`,
                  children: (0, g.jsx)(`input`, {
                    type: `date`,
                    value: j.dateOfBirth,
                    onChange: (e) => N(`dateOfBirth`, e.target.value),
                    className: `w-full px-2 py-2 border rounded-lg text-sm`,
                  }),
                }),
                (0, g.jsx)(b, {
                  label: `Gender`,
                  children: (0, g.jsxs)(`select`, {
                    value: j.gender,
                    onChange: (e) => N(`gender`, e.target.value),
                    className: `w-full px-2 py-2 border rounded-lg text-sm`,
                    children: [
                      (0, g.jsx)(`option`, { value: `MALE`, children: `Male` }),
                      (0, g.jsx)(`option`, {
                        value: `FEMALE`,
                        children: `Female`,
                      }),
                      (0, g.jsx)(`option`, {
                        value: `OTHER`,
                        children: `Other`,
                      }),
                    ],
                  }),
                }),
                (0, g.jsx)(b, {
                  label: `Blood Group`,
                  children: (0, g.jsx)(`select`, {
                    value: j.bloodGroup,
                    onChange: (e) => N(`bloodGroup`, e.target.value),
                    className: `w-full px-2 py-2 border rounded-lg text-sm`,
                    children: [
                      `A+`,
                      `B+`,
                      `O+`,
                      `AB+`,
                      `A-`,
                      `B-`,
                      `O-`,
                      `AB-`,
                    ].map((e) => (0, g.jsx)(`option`, { children: e }, e)),
                  }),
                }),
                (0, g.jsx)(b, {
                  label: `Alternate Mobile`,
                  children: (0, g.jsx)(`input`, {
                    value: j.alternateMobile,
                    onChange: (e) => N(`alternatePhone`, e.target.value),
                    className: `w-full px-2 py-2 border rounded-lg text-sm`,
                  }),
                }),
                (0, g.jsx)(b, {
                  label: `Email *`,
                  error: Y.email,
                  children: (0, g.jsx)(`input`, {
                    id: `field-email`,
                    value: j.email,
                    onChange: (e) => N(`email`, e.target.value),
                    className: `w-full px-2 py-2 border rounded-lg text-sm`,
                    placeholder: `name@hospital.com`,
                  }),
                }),
                (0, g.jsx)(b, {
                  label: `Designation *`,
                  error: Y.designation,
                  children: (0, g.jsx)(`input`, {
                    id: `field-designation`,
                    value: j.designation,
                    onChange: (e) => N(`designation`, e.target.value),
                    className: `w-full px-2 py-2 border rounded-lg text-sm`,
                    placeholder: `e.g. Consultant`,
                  }),
                }),
                (0, g.jsx)(b, {
                  label: `Department *`,
                  error: Y.departmentIds,
                  children: l
                    ? (0, g.jsx)(`div`, {
                        className: `px-2 py-2 text-sm text-muted-foreground border rounded-lg`,
                        children: `Loading departments...`,
                      })
                    : (0, g.jsxs)(`select`, {
                        id: `field-departmentIds`,
                        value: j.departmentIds[0] || ``,
                        onChange: (e) => N(`departmentIds`, [e.target.value]),
                        className: `w-full px-2 py-2 border rounded-lg text-sm`,
                        children: [
                          (0, g.jsx)(`option`, {
                            value: ``,
                            children: `-- Select Department --`,
                          }),
                          c.map((e) =>
                            (0, g.jsx)(
                              `option`,
                              { value: `${e.id}`, children: e.name },
                              e.id,
                            ),
                          ),
                        ],
                      }),
                }),
                (0, g.jsx)(b, {
                  label: `Role *`,
                  error: Y.primaryRoleId,
                  children: s
                    ? (0, g.jsx)(`div`, {
                        className: `px-2 py-2 text-sm text-muted-foreground border rounded-lg`,
                        children: `Loading roles...`,
                      })
                    : (0, g.jsxs)(`select`, {
                        id: `field-primaryRoleId`,
                        value: j.primaryRoleId,
                        onChange: (e) => N(`primaryRoleId`, e.target.value),
                        className: `w-full px-2 py-2 border rounded-lg text-sm`,
                        children: [
                          (0, g.jsx)(`option`, {
                            value: ``,
                            children: `-- Select Role --`,
                          }),
                          n.map((e) =>
                            (0, g.jsx)(
                              `option`,
                              { value: `${e.id}`, children: e.name },
                              e.id,
                            ),
                          ),
                        ],
                      }),
                }),
                (0, g.jsx)(b, {
                  label: `Additional Roles`,
                  className: `col-span-2`,
                  children: s
                    ? (0, g.jsx)(`div`, {
                        className: `px-2 py-2 text-sm text-muted-foreground border rounded-lg`,
                        children: `Loading...`,
                      })
                    : (0, g.jsxs)(`div`, {
                        className: `grid grid-cols-2 md:grid-cols-4 gap-2 p-2 border rounded-lg min-h-12`,
                        children: [
                          n
                            .filter((e) => e.id !== j.primaryRoleId)
                            .map((e) =>
                              (0, g.jsxs)(
                                `label`,
                                {
                                  className: `flex items-center gap-2 text-sm`,
                                  children: [
                                    (0, g.jsx)(`input`, {
                                      type: `checkbox`,
                                      className: `rounded`,
                                      checked: j.additionalRoleIds.includes(
                                        e.id,
                                      ),
                                      onChange: () => {
                                        let t = j.additionalRoleIds;
                                        N(
                                          `additionalRoleIds`,
                                          t.includes(e.id)
                                            ? t.filter((t) => t !== e.id)
                                            : [...t, e.id],
                                        );
                                      },
                                    }),
                                    (0, g.jsx)(`span`, { children: e.name }),
                                  ],
                                },
                                e.id,
                              ),
                            ),
                          n.filter((e) => e.id !== j.primaryRoleId).length ===
                            0 &&
                            (0, g.jsx)(`div`, {
                              className: `text-xs text-muted-foreground col-span-4`,
                              children: j.primaryRoleId
                                ? `No other roles available`
                                : `Select primary role first`,
                            }),
                        ],
                      }),
                }),
                (0, g.jsx)(b, {
                  label: `Date of Joining`,
                  children: (0, g.jsx)(`input`, {
                    type: `date`,
                    value: j.dateOfJoining,
                    onChange: (e) => N(`dateOfJoining`, e.target.value),
                    className: `w-full px-2 py-2 border rounded-lg text-sm`,
                  }),
                }),
                (0, g.jsx)(b, {
                  label: `Shift`,
                  children: d
                    ? (0, g.jsx)(`div`, {
                        className: `px-2 py-2 text-sm text-muted-foreground border rounded-lg`,
                        children: `Loading shifts...`,
                      })
                    : (0, g.jsxs)(`select`, {
                        value: j.shiftId,
                        onChange: (e) => N(`shiftId`, e.target.value),
                        className: `w-full px-2 py-2 border rounded-lg text-sm`,
                        children: [
                          (0, g.jsx)(`option`, {
                            value: ``,
                            children: `-- Select Shift --`,
                          }),
                          u.map((e) =>
                            (0, g.jsx)(
                              `option`,
                              { value: `${e.id}`, children: e.name },
                              e.id,
                            ),
                          ),
                        ],
                      }),
                }),
                (0, g.jsx)(b, {
                  label: `Aadhaar Number`,
                  children: (0, g.jsx)(`input`, {
                    value: j.aadhaar,
                    onChange: (e) => N(`aadhaar`, e.target.value),
                    className: `w-full px-2 py-2 border rounded-lg text-sm`,
                    placeholder: `xxxx-xxxx-xxxx`,
                  }),
                }),
                (0, g.jsx)(b, {
                  label: `PAN Number`,
                  children: (0, g.jsx)(`input`, {
                    value: j.pan,
                    onChange: (e) => N(`pan`, e.target.value),
                    className: `w-full px-2 py-2 border rounded-lg text-sm`,
                  }),
                }),
                (0, g.jsx)(b, {
                  label: `Medical Council Reg. No.`,
                  children: (0, g.jsx)(`input`, {
                    value: j.medicalCouncilNo,
                    onChange: (e) => N(`medicalCouncilNo`, e.target.value),
                    className: `w-full px-2 py-2 border rounded-lg text-sm`,
                    placeholder: `If applicable`,
                  }),
                }),
                (0, g.jsx)(b, {
                  label: `Qualification`,
                  className: `col-span-2`,
                  children: (0, g.jsx)(`input`, {
                    value: j.qualification,
                    onChange: (e) => N(`qualification`, e.target.value),
                    className: `w-full px-2 py-2 border rounded-lg text-sm`,
                    placeholder: `MBBS, MD, etc.`,
                  }),
                }),
                (0, g.jsx)(b, {
                  label: `Specialization`,
                  children: (0, g.jsx)(`input`, {
                    value: j.specialization,
                    onChange: (e) => N(`specialization`, e.target.value),
                    className: `w-full px-2 py-2 border rounded-lg text-sm`,
                  }),
                }),
                (0, g.jsx)(b, {
                  label: `Address`,
                  className: `col-span-2`,
                  children: (0, g.jsx)(`input`, {
                    value: j.address,
                    onChange: (e) => N(`address`, e.target.value),
                    className: `w-full px-2 py-2 border rounded-lg text-sm`,
                  }),
                }),
                (0, g.jsx)(b, {
                  label: `City`,
                  children: (0, g.jsx)(`input`, {
                    value: j.city,
                    onChange: (e) => N(`city`, e.target.value),
                    className: `w-full px-2 py-2 border rounded-lg text-sm`,
                  }),
                }),
                (0, g.jsx)(b, {
                  label: `State`,
                  children: (0, g.jsx)(`input`, {
                    value: j.state,
                    onChange: (e) => N(`state`, e.target.value),
                    className: `w-full px-2 py-2 border rounded-lg text-sm`,
                  }),
                }),
                (0, g.jsx)(b, {
                  label: `Pincode`,
                  children: (0, g.jsx)(`input`, {
                    value: j.pincode,
                    onChange: (e) => N(`pincode`, e.target.value),
                    className: `w-full px-2 py-2 border rounded-lg text-sm`,
                  }),
                }),
                (0, g.jsx)(b, {
                  label: `Emergency Contact`,
                  children: (0, g.jsx)(`input`, {
                    value: j.emergencyContact,
                    onChange: (e) => N(`emergencyContact`, e.target.value),
                    className: `w-full px-2 py-2 border rounded-lg text-sm`,
                  }),
                }),
                ` `,
              ],
            }),
            E === `doctor` &&
              (0, g.jsxs)(`div`, {
                className: `mt-6 p-4 border rounded-lg bg-primary/5`,
                children: [
                  (0, g.jsxs)(`div`, {
                    className: `mb-3`,
                    children: [
                      (0, g.jsx)(`div`, {
                        className: `text-sm font-semibold`,
                        children: `Doctor Slot Creation (Day-wise)`,
                      }),
                      (0, g.jsx)(`div`, {
                        className: `text-[11px] text-muted-foreground`,
                        children: `Enable days and set consultation from–to time`,
                      }),
                    ],
                  }),
                  (0, g.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, g.jsxs)(`div`, {
                        className: `grid grid-cols-12 gap-2 text-[11px] font-medium text-muted-foreground px-2`,
                        children: [
                          (0, g.jsx)(`div`, {
                            className: `col-span-1`,
                            children: `Active`,
                          }),
                          (0, g.jsx)(`div`, {
                            className: `col-span-4`,
                            children: `Day`,
                          }),
                          (0, g.jsx)(`div`, {
                            className: `col-span-3`,
                            children: `From`,
                          }),
                          (0, g.jsx)(`div`, {
                            className: `col-span-3`,
                            children: `To`,
                          }),
                          (0, g.jsx)(`div`, {
                            className: `col-span-1 text-right`,
                            children: `Hrs`,
                          }),
                        ],
                      }),
                      v.map((e) => {
                        let t = k[e],
                          n = t.enabled
                            ? (() => {
                                let [e, n] = t.from.split(`:`).map(Number),
                                  [r, i] = t.to.split(`:`).map(Number),
                                  a = r * 60 + i - (e * 60 + n);
                                return a > 0 ? (a / 60).toFixed(1) : `0`;
                              })()
                            : `—`;
                        return (0, g.jsxs)(
                          `div`,
                          {
                            className: `grid grid-cols-12 gap-2 items-center bg-card border rounded-lg p-2`,
                            children: [
                              (0, g.jsx)(`div`, {
                                className: `col-span-1`,
                                children: (0, g.jsx)(`input`, {
                                  type: `checkbox`,
                                  checked: t.enabled,
                                  onChange: (n) =>
                                    A({
                                      ...k,
                                      [e]: { ...t, enabled: n.target.checked },
                                    }),
                                  className: `rounded`,
                                }),
                              }),
                              (0, g.jsx)(`div`, {
                                className: `col-span-4 text-sm`,
                                children: e,
                              }),
                              (0, g.jsx)(`div`, {
                                className: `col-span-3`,
                                children: (0, g.jsx)(`input`, {
                                  type: `time`,
                                  value: t.from,
                                  disabled: !t.enabled,
                                  onChange: (n) =>
                                    A({
                                      ...k,
                                      [e]: { ...t, from: n.target.value },
                                    }),
                                  className: `w-full px-2 py-1.5 border rounded text-sm disabled:opacity-50`,
                                }),
                              }),
                              (0, g.jsx)(`div`, {
                                className: `col-span-3`,
                                children: (0, g.jsx)(`input`, {
                                  type: `time`,
                                  value: t.to,
                                  disabled: !t.enabled,
                                  onChange: (n) =>
                                    A({
                                      ...k,
                                      [e]: { ...t, to: n.target.value },
                                    }),
                                  className: `w-full px-2 py-1.5 border rounded text-sm disabled:opacity-50`,
                                }),
                              }),
                              (0, g.jsx)(`div`, {
                                className: `col-span-1 text-right text-xs text-muted-foreground`,
                                children: n,
                              }),
                            ],
                          },
                          e,
                        );
                      }),
                    ],
                  }),
                  (0, g.jsxs)(`div`, {
                    className: `grid grid-cols-3 gap-3 mt-4`,
                    children: [
                      (0, g.jsx)(b, {
                        label: `Slot Duration (min)`,
                        children: (0, g.jsx)(`select`, {
                          className: `w-full px-2 py-2 border rounded-lg text-sm`,
                          children: [`10`, `15`, `20`, `30`, `45`, `60`].map(
                            (e) => (0, g.jsx)(`option`, { children: e }, e),
                          ),
                        }),
                      }),
                      (0, g.jsx)(b, {
                        label: `Break From`,
                        children: (0, g.jsx)(`input`, {
                          type: `time`,
                          defaultValue: `13:00`,
                          className: `w-full px-2 py-2 border rounded-lg text-sm`,
                        }),
                      }),
                      (0, g.jsx)(b, {
                        label: `Break To`,
                        children: (0, g.jsx)(`input`, {
                          type: `time`,
                          defaultValue: `14:00`,
                          className: `w-full px-2 py-2 border rounded-lg text-sm`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
      e === 2 &&
        (0, g.jsxs)(f, {
          title: `Step 2 · Module Rights & Permissions`,
          action: (0, g.jsxs)(`div`, {
            className: `flex gap-2`,
            children: [
              (0, g.jsx)(`button`, {
                onClick: B,
                className: `text-xs text-primary`,
                children: `Select All`,
              }),
              (0, g.jsx)(`button`, {
                onClick: V,
                className: `text-xs text-muted-foreground`,
                children: `Clear`,
              }),
            ],
          }),
          children: [
            (0, g.jsx)(`div`, {
              id: `field-permissions`,
              className: `sr-only`,
            }),
            j.primaryRoleId &&
              (0, g.jsxs)(`div`, {
                className: `mb-4 flex items-center gap-2 p-3 bg-primary/5 border border-primary/20 rounded-lg text-xs text-primary`,
                children: [
                  (0, g.jsx)(p, { className: `w-4 h-4 shrink-0` }),
                  L
                    ? `Loading role permissions...`
                    : `Permissions pre-filled from selected role. You can modify below.`,
                ],
              }),
            Y.permissions &&
              (0, g.jsx)(`div`, {
                className: `mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive`,
                children: Y.permissions,
              }),
            (0, g.jsx)(`p`, {
              className: `text-xs text-muted-foreground mb-4`,
              children: `Select modules and the specific features this user can access.`,
            }),
            x
              ? (0, g.jsx)(`div`, {
                  className: `text-sm text-muted-foreground py-8 text-center`,
                  children: `Loading modules...`,
                })
              : y.length === 0
                ? (0, g.jsx)(`div`, {
                    className: `text-sm text-muted-foreground py-8 text-center`,
                    children: `No modules available in current package.`,
                  })
                : (0, g.jsx)(`div`, {
                    className: `space-y-3`,
                    children: y.map((e) => {
                      let t = e.features.every((t) => P[`${e.id}__${t.id}`]),
                        n = e.features.some((t) => P[`${e.id}__${t.id}`]);
                      return (0, g.jsxs)(
                        `div`,
                        {
                          className: `border rounded-lg overflow-hidden ${n ? `border-primary/30 bg-primary/5` : `border-border`}`,
                          children: [
                            (0, g.jsxs)(`div`, {
                              className: `flex items-center gap-3 px-4 py-3`,
                              children: [
                                (0, g.jsx)(_e, {
                                  checked: t,
                                  indeterminate: n && !t,
                                  onChange: () => z(e.id, e.features),
                                }),
                                (0, g.jsxs)(`div`, {
                                  className: `flex-1`,
                                  children: [
                                    (0, g.jsx)(`div`, {
                                      className: `text-sm font-semibold`,
                                      children: e.name,
                                    }),
                                    (0, g.jsxs)(`div`, {
                                      className: `text-[10px] text-muted-foreground`,
                                      children: [
                                        e.features.length,
                                        ` features`,
                                      ],
                                    }),
                                  ],
                                }),
                                n &&
                                  (0, g.jsxs)(`div`, {
                                    className: `text-[10px] text-primary font-medium`,
                                    children: [
                                      e.features.filter(
                                        (t) => P[`${e.id}__${t.id}`],
                                      ).length,
                                      ` `,
                                      `/ `,
                                      e.features.length,
                                      ` selected`,
                                    ],
                                  }),
                              ],
                            }),
                            (0, g.jsx)(`div`, {
                              className: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-4 pb-3`,
                              children: e.features.map((t) => {
                                let n = !!P[`${e.id}__${t.id}`];
                                return (0, g.jsxs)(
                                  `label`,
                                  {
                                    className: `flex items-center gap-2 p-2 rounded-lg text-xs cursor-pointer border ${n ? `bg-success/10 border-success/30 text-success` : `border-transparent hover:bg-muted`}`,
                                    children: [
                                      (0, g.jsx)(`input`, {
                                        type: `checkbox`,
                                        checked: n,
                                        onChange: () => R(e.id, t.id),
                                        className: `rounded`,
                                      }),
                                      t.name,
                                    ],
                                  },
                                  t.id,
                                );
                              }),
                            }),
                          ],
                        },
                        e.id,
                      );
                    }),
                  }),
            (0, g.jsxs)(`div`, {
              className: `mt-6 p-4 rounded-lg bg-muted border text-xs`,
              children: [
                (0, g.jsx)(`div`, {
                  className: `font-semibold mb-1`,
                  children: `Selected Summary`,
                }),
                (0, g.jsx)(`span`, {
                  className: `text-primary font-medium`,
                  children: fe,
                }),
                ` `,
                `module(s) ·`,
                ` `,
                (0, g.jsx)(`span`, {
                  className: `text-success font-medium`,
                  children: U,
                }),
                ` `,
                `permission(s) selected`,
              ],
            }),
          ],
        }),
      e === 3 &&
        (0, g.jsxs)(`div`, {
          className: `grid grid-cols-1 lg:grid-cols-2 gap-6`,
          children: [
            (0, g.jsx)(f, {
              title: `Step 3 · Credentials`,
              children: (0, g.jsxs)(`div`, {
                className: `space-y-4`,
                children: [
                  (0, g.jsxs)(b, {
                    label: `Username (Email)`,
                    children: [
                      (0, g.jsx)(`input`, {
                        className: `w-full px-2 py-2 border rounded-lg text-sm bg-muted cursor-not-allowed`,
                        value: j.email || `Will be set to email`,
                        disabled: !0,
                      }),
                      (0, g.jsx)(`div`, {
                        className: `text-[10px] text-muted-foreground mt-1`,
                        children: `Username is automatically set to email address`,
                      }),
                    ],
                  }),
                  (0, g.jsx)(b, {
                    label: `Password *`,
                    error: Y.password,
                    children: (0, g.jsx)(`input`, {
                      id: `field-password`,
                      type: `password`,
                      value: j.password,
                      onChange: (e) => N(`password`, e.target.value),
                      className: `w-full px-2 py-2 border rounded-lg text-sm`,
                      placeholder: `Min 8 chars (leave empty for auto-generated)`,
                    }),
                  }),
                  (0, g.jsx)(b, {
                    label: `Login Type`,
                    children: (0, g.jsxs)(`select`, {
                      value: j.loginType,
                      onChange: (e) => N(`loginType`, e.target.value),
                      className: `w-full px-2 py-2 border rounded-lg text-sm`,
                      children: [
                        (0, g.jsx)(`option`, {
                          value: `PASSWORD`,
                          children: `Password`,
                        }),
                        (0, g.jsx)(`option`, {
                          value: `PASSWORD_OTP`,
                          children: `Password + OTP`,
                        }),
                        (0, g.jsx)(`option`, {
                          value: `BIOMETRIC`,
                          children: `Biometric`,
                        }),
                        (0, g.jsx)(`option`, { value: `SSO`, children: `SSO` }),
                      ],
                    }),
                  }),
                  (0, g.jsxs)(`div`, {
                    className: `space-y-2 pt-2 border-t`,
                    children: [
                      (0, g.jsxs)(`label`, {
                        className: `flex items-center gap-2 text-sm`,
                        children: [
                          (0, g.jsx)(`input`, {
                            type: `checkbox`,
                            checked: j.forcePasswordChange,
                            onChange: (e) =>
                              N(`forcePasswordChange`, e.target.checked),
                            className: `rounded`,
                          }),
                          `Force password change on first login`,
                        ],
                      }),
                      (0, g.jsxs)(`label`, {
                        className: `flex items-center gap-2 text-sm`,
                        children: [
                          (0, g.jsx)(`input`, {
                            type: `checkbox`,
                            checked: j.twoFactorEnabled,
                            onChange: (e) =>
                              N(`twoFactorEnabled`, e.target.checked),
                            className: `rounded`,
                          }),
                          `Enable Two-Factor Authentication`,
                        ],
                      }),
                      (0, g.jsxs)(`label`, {
                        className: `flex items-center gap-2 text-sm`,
                        children: [
                          (0, g.jsx)(`input`, {
                            type: `checkbox`,
                            checked: j.sendCredentialsViaSms,
                            onChange: (e) =>
                              N(`sendCredentialsViaSms`, e.target.checked),
                            className: `rounded`,
                          }),
                          `Send credentials via SMS`,
                        ],
                      }),
                      (0, g.jsxs)(`label`, {
                        className: `flex items-center gap-2 text-sm`,
                        children: [
                          (0, g.jsx)(`input`, {
                            type: `checkbox`,
                            checked: j.sendCredentialsViaEmail,
                            onChange: (e) =>
                              N(`sendCredentialsViaEmail`, e.target.checked),
                            className: `rounded`,
                          }),
                          `Send credentials via Email`,
                        ],
                      }),
                    ],
                  }),
                  T &&
                    (0, g.jsxs)(`div`, {
                      className: `flex items-start gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive`,
                      children: [
                        (0, g.jsx)(se, {
                          className: `w-4 h-4 mt-0.5 shrink-0`,
                        }),
                        T,
                      ],
                    }),
                  (0, g.jsxs)(`div`, {
                    className: `p-3 bg-muted rounded-lg text-xs space-y-1.5 border`,
                    children: [
                      (0, g.jsx)(`div`, {
                        className: `font-semibold mb-2`,
                        children: `Review Before Submit`,
                      }),
                      (0, g.jsxs)(`div`, {
                        className: `flex justify-between`,
                        children: [
                          (0, g.jsx)(`span`, {
                            className: `text-muted-foreground`,
                            children: `Name`,
                          }),
                          (0, g.jsxs)(`span`, {
                            className: `font-medium`,
                            children: [j.firstName, ` `, j.lastName],
                          }),
                        ],
                      }),
                      (0, g.jsxs)(`div`, {
                        className: `flex justify-between`,
                        children: [
                          (0, g.jsx)(`span`, {
                            className: `text-muted-foreground`,
                            children: `Email`,
                          }),
                          (0, g.jsx)(`span`, {
                            className: `font-medium`,
                            children: j.email || `—`,
                          }),
                        ],
                      }),
                      (0, g.jsxs)(`div`, {
                        className: `flex justify-between`,
                        children: [
                          (0, g.jsx)(`span`, {
                            className: `text-muted-foreground`,
                            children: `Role`,
                          }),
                          (0, g.jsx)(`span`, {
                            className: `font-medium`,
                            children:
                              n.find((e) => e.id === j.primaryRoleId)?.name ||
                              `—`,
                          }),
                        ],
                      }),
                      (0, g.jsxs)(`div`, {
                        className: `flex justify-between`,
                        children: [
                          (0, g.jsx)(`span`, {
                            className: `text-muted-foreground`,
                            children: `Permissions`,
                          }),
                          (0, g.jsxs)(`span`, {
                            className: `font-medium text-success`,
                            children: [U, ` assigned`],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, g.jsxs)(f, {
              title: `Map Same Rights To Other Users / Departments`,
              action: (0, g.jsx)(m, { className: `w-4 h-4 text-primary` }),
              children: [
                (0, g.jsxs)(`div`, {
                  className: `mb-4`,
                  children: [
                    (0, g.jsx)(`label`, {
                      className: `text-[11px] text-muted-foreground`,
                      children: `Search & Select Users`,
                    }),
                    (0, g.jsxs)(`div`, {
                      className: `relative mt-1`,
                      children: [
                        (0, g.jsx)(ee, {
                          className: `w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground`,
                        }),
                        (0, g.jsx)(`input`, {
                          value: W,
                          onChange: (e) => pe(e.target.value),
                          placeholder: `Search by name or employee ID…`,
                          className: `w-full pl-8 pr-2 py-2 border rounded-lg text-sm`,
                        }),
                      ],
                    }),
                    (0, g.jsx)(`div`, {
                      className: `mt-2 max-h-56 overflow-y-auto border rounded-lg divide-y`,
                      children: C
                        ? (0, g.jsx)(`div`, {
                            className: `p-4 text-sm text-muted-foreground text-center`,
                            children: `Loading users...`,
                          })
                        : S.filter((e) =>
                            `${e.profile.firstName} ${e.profile.lastName} ${e.employeeId}`
                              .toLowerCase()
                              .includes(W.toLowerCase()),
                          ).map((e) => {
                            let t = G.includes(e.id),
                              n = e.roles.find((e) => e.isPrimary);
                            return (0, g.jsxs)(
                              `label`,
                              {
                                className: `flex items-center gap-3 p-2.5 cursor-pointer ${t ? `bg-primary/5` : `hover:bg-muted`}`,
                                children: [
                                  (0, g.jsx)(`input`, {
                                    type: `checkbox`,
                                    checked: t,
                                    onChange: () =>
                                      K(
                                        t
                                          ? G.filter((t) => t !== e.id)
                                          : [...G, e.id],
                                      ),
                                    className: `rounded`,
                                  }),
                                  (0, g.jsxs)(`div`, {
                                    className: `flex-1`,
                                    children: [
                                      (0, g.jsxs)(`div`, {
                                        className: `text-sm font-medium`,
                                        children: [
                                          e.profile.firstName,
                                          ` `,
                                          e.profile.lastName,
                                        ],
                                      }),
                                      (0, g.jsxs)(`div`, {
                                        className: `text-[11px] text-muted-foreground`,
                                        children: [
                                          e.employeeId,
                                          ` ·`,
                                          ` `,
                                          n?.roleName || `No role`,
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, g.jsx)(ce, {
                                    className: `w-4 h-4 text-muted-foreground`,
                                  }),
                                ],
                              },
                              e.id,
                            );
                          }),
                    }),
                    G.length > 0 &&
                      (0, g.jsxs)(`div`, {
                        className: `text-xs mt-2 text-primary`,
                        children: [G.length, ` user(s) selected`],
                      }),
                  ],
                }),
                (0, g.jsxs)(`div`, {
                  className: `mb-4`,
                  children: [
                    (0, g.jsx)(`label`, {
                      className: `text-[11px] text-muted-foreground`,
                      children: `Map to Department(s)`,
                    }),
                    l
                      ? (0, g.jsx)(`div`, {
                          className: `text-sm text-muted-foreground mt-1`,
                          children: `Loading...`,
                        })
                      : (0, g.jsx)(`select`, {
                          multiple: !0,
                          value: q,
                          onChange: (e) =>
                            J(
                              Array.from(e.target.selectedOptions).map(
                                (e) => e.value,
                              ),
                            ),
                          className: `w-full px-2 py-2 border rounded-lg text-sm mt-1 h-36`,
                          children: c.map((e) =>
                            (0, g.jsx)(
                              `option`,
                              { value: e.id, children: e.name },
                              e.id,
                            ),
                          ),
                        }),
                    (0, g.jsx)(`div`, {
                      className: `text-[11px] text-muted-foreground mt-1`,
                      children: `Hold Ctrl / Cmd to select multiple`,
                    }),
                  ],
                }),
                (0, g.jsxs)(`div`, {
                  className: `p-3 rounded-lg bg-warning/10 border border-warning/30 text-xs`,
                  children: [
                    (0, g.jsx)(`div`, {
                      className: `font-semibold mb-1`,
                      children: `⚠ Note`,
                    }),
                    `Selected users / departments will inherit the same module rights and permissions. Existing rights will be replaced.`,
                  ],
                }),
                (0, g.jsxs)(`button`, {
                  disabled: G.length === 0 && q.length === 0,
                  className: `mt-4 w-full px-4 py-2 rounded-lg border border-primary text-primary text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed`,
                  children: [
                    (0, g.jsx)(m, { className: `w-4 h-4` }),
                    ` Copy Rights to Selected`,
                  ],
                }),
              ],
            }),
          ],
        }),
      (0, g.jsxs)(`div`, {
        className: `mt-6 flex items-center justify-between bg-card border rounded-xl p-4`,
        children: [
          (0, g.jsx)(`button`, {
            onClick: () => t(Math.max(1, e - 1)),
            disabled: e === 1,
            className: `px-4 py-2 rounded-lg border text-sm disabled:opacity-40`,
            children: `← Previous`,
          }),
          (0, g.jsxs)(`div`, {
            className: `text-xs text-muted-foreground`,
            children: [`Step `, e, ` of `, _.length],
          }),
          e < _.length
            ? (0, g.jsx)(`button`, {
                onClick: me,
                className: `px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium cursor-pointer`,
                children: `Next →`,
              })
            : (0, g.jsx)(`button`, {
                onClick: ge,
                disabled: w,
                className: `px-4 py-2 rounded-lg bg-success cursor-pointer text-white text-sm font-medium disabled:opacity-50`,
                children: w ? `Creating...` : `✓ Register User & Save Rights`,
              }),
        ],
      }),
    ],
  });
}
function b({ label: e, children: t, className: n = ``, error: r }) {
  return (0, g.jsxs)(`div`, {
    className: n,
    children: [
      (0, g.jsx)(`label`, {
        className: `text-[11px] ${r ? `text-destructive` : `text-muted-foreground`}`,
        children: e,
      }),
      (0, g.jsx)(`div`, { className: `mt-1`, children: t }),
      r &&
        (0, g.jsx)(`p`, {
          className: `mt-1 text-[11px] text-destructive`,
          children: r,
        }),
    ],
  });
}
export { y as component };
