import { n as e } from "./rolldown-runtime-Bh1tDfsg.js";
import { d as t, f as n } from "./auth-CRzH69JE.js";
import { d as r, f as i, t as a } from "./AppLayout-x7TZ9xUn.js";
import { t as o } from "./useApiResource-B4231qiR.js";
import { t as s } from "./createLucideIcon-CYyYTezv.js";
import { t as c } from "./camera-B63Cru7O.js";
import { t as l } from "./circle-check-B8_KDfYz.js";
import { t as u } from "./clock-cvWCFENs.js";
import { t as d } from "./id-card-DYUaZK19.js";
import { n as f, t as p } from "./Kpi-B7fzN02H.js";
var m = s(`fingerprint-pattern`, [
    [`path`, { d: `M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4`, key: `1nerag` }],
    [`path`, { d: `M14 13.12c0 2.38 0 6.38-1 8.88`, key: `o46ks0` }],
    [`path`, { d: `M17.29 21.02c.12-.6.43-2.3.5-3.02`, key: `ptglia` }],
    [`path`, { d: `M2 12a10 10 0 0 1 18-6`, key: `ydlgp0` }],
    [`path`, { d: `M2 16h.01`, key: `1gqxmh` }],
    [`path`, { d: `M21.8 16c.2-2 .131-5.354 0-6`, key: `drycrb` }],
    [`path`, { d: `M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2`, key: `1tidbn` }],
    [`path`, { d: `M8.65 22c.21-.66.45-1.32.57-2`, key: `13wd9y` }],
    [`path`, { d: `M9 6.8a6 6 0 0 1 9 5.2v2`, key: `1fr1j5` }],
  ]),
  h = s(`qr-code`, [
    [
      `rect`,
      { width: `5`, height: `5`, x: `3`, y: `3`, rx: `1`, key: `1tu5fj` },
    ],
    [
      `rect`,
      { width: `5`, height: `5`, x: `16`, y: `3`, rx: `1`, key: `1v8r4q` },
    ],
    [
      `rect`,
      { width: `5`, height: `5`, x: `3`, y: `16`, rx: `1`, key: `1x03jg` },
    ],
    [`path`, { d: `M21 16h-3a2 2 0 0 0-2 2v3`, key: `177gqh` }],
    [`path`, { d: `M21 21v.01`, key: `ents32` }],
    [`path`, { d: `M12 7v3a2 2 0 0 1-2 2H7`, key: `8crl2c` }],
    [`path`, { d: `M3 12h.01`, key: `nlz23k` }],
    [`path`, { d: `M12 3h.01`, key: `n36tog` }],
    [`path`, { d: `M12 16v.01`, key: `133mhm` }],
    [`path`, { d: `M16 12h1`, key: `1slzba` }],
    [`path`, { d: `M21 12v.01`, key: `1lwtk9` }],
    [`path`, { d: `M12 21v-1`, key: `1880an` }],
  ]),
  g = e(n()),
  _ = t(),
  v = [
    [`OPD123460`, `Ravi Verma`, `60Y Male`, `10:32 AM`, `Diabetes OPD`],
    [`OPD123459`, `Meena Kumari`, `28Y Female`, `10:18 AM`, `Gynecology`],
    [`OPD123458`, `Imran Khan`, `32Y Male`, `10:04 AM`, `Orthopedics`],
    [`OPD123457`, `Sunita Devi`, `45Y Female`, `09:52 AM`, `General Med`],
    [`OPD123456`, `Ramesh Patel`, `58Y Male`, `09:40 AM`, `Cardiology`],
  ];
function y() {
  let [e, t] = (0, g.useState)(`new`),
    [n, s] = (0, g.useState)(`self`),
    {
      data: y,
      isLoading: x,
      error: S,
    } = o([`registration-metrics`], `/registration/metrics`, {
      staleTime: 3e4,
    }),
    C = y?.registrationMetrics;
  return (0, _.jsxs)(a, {
    children: [
      (0, _.jsxs)(`div`, {
        className: `mb-6 flex items-center justify-between`,
        children: [
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsx)(`h1`, {
                className: `text-2xl font-bold`,
                children: `Patient Registration`,
              }),
              (0, _.jsx)(`p`, {
                className: `text-sm text-muted-foreground`,
                children: `Register new patient or search existing UHID / ABHA`,
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: `flex gap-2 text-xs`,
            children: [
              (0, _.jsxs)(`button`, {
                className: `px-3 py-2 rounded-lg border flex items-center gap-2`,
                children: [
                  (0, _.jsx)(h, { className: `w-4 h-4` }),
                  ` Scan ABHA`,
                ],
              }),
              (0, _.jsxs)(`button`, {
                className: `px-3 py-2 rounded-lg border flex items-center gap-2`,
                children: [
                  (0, _.jsx)(m, { className: `w-4 h-4` }),
                  ` Biometric`,
                ],
              }),
              (0, _.jsxs)(`button`, {
                className: `px-3 py-2 rounded-lg border flex items-center gap-2`,
                children: [(0, _.jsx)(d, { className: `w-4 h-4` }), ` Aadhaar`],
              }),
            ],
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: `grid grid-cols-2 md:grid-cols-4 gap-3 mb-6`,
        children: [
          (0, _.jsx)(p, {
            icon: i,
            label: `Registered Today`,
            value: x ? `—` : `${C?.registeredToday ?? 128}`,
            delta: `8%`,
            tone: `primary`,
          }),
          (0, _.jsx)(p, {
            icon: r,
            label: `New Patients`,
            value: x ? `—` : `${C?.newPatients ?? 42}`,
            delta: `12%`,
            tone: `info`,
          }),
          (0, _.jsx)(p, {
            icon: l,
            label: `Revisits`,
            value: x ? `—` : `${C?.revisits ?? 86}`,
            delta: `6%`,
            tone: `success`,
          }),
          (0, _.jsx)(p, {
            icon: u,
            label: `Avg Reg. Time`,
            value: x ? `—` : `${C?.avgRegTimeMinutes ?? 135} min`,
            tone: `warning`,
          }),
        ],
      }),
      S
        ? (0, _.jsx)(`div`, {
            className: `mb-6 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive`,
            children: `Registration metrics could not be loaded. Using fallback values.`,
          })
        : null,
      (0, _.jsxs)(`div`, {
        className: `grid grid-cols-1 lg:grid-cols-4 gap-6`,
        children: [
          (0, _.jsxs)(f, {
            title: `New Patient Registration`,
            className: `lg:col-span-3`,
            children: [
              (0, _.jsxs)(`div`, {
                className: `mb-5 p-3 rounded-lg bg-primary/5 border border-primary/20 flex gap-2`,
                children: [
                  (0, _.jsx)(`input`, {
                    placeholder: `Search by Mobile / UHID / ABHA ID / Aadhaar…`,
                    className: `flex-1 px-3 py-2 rounded-lg border bg-card text-sm`,
                  }),
                  (0, _.jsx)(`button`, {
                    className: `px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm`,
                    children: `Search`,
                  }),
                  (0, _.jsx)(`button`, {
                    className: `px-4 py-2 rounded-lg border text-sm`,
                    children: `Clear`,
                  }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: `grid grid-cols-4 gap-4 mb-5`,
                children: [
                  (0, _.jsxs)(`div`, {
                    className: `col-span-1 flex flex-col items-center gap-2`,
                    children: [
                      (0, _.jsxs)(`div`, {
                        className: `w-full aspect-square rounded-lg border-2 border-dashed flex flex-col items-center justify-center text-muted-foreground`,
                        children: [
                          (0, _.jsx)(c, { className: `w-8 h-8 mb-2` }),
                          (0, _.jsx)(`div`, {
                            className: `text-xs`,
                            children: `Capture Photo`,
                          }),
                        ],
                      }),
                      (0, _.jsx)(`button`, {
                        className: `text-xs text-primary`,
                        children: `Upload from device`,
                      }),
                    ],
                  }),
                  (0, _.jsxs)(`div`, {
                    className: `col-span-3 grid grid-cols-3 gap-3`,
                    children: [
                      (0, _.jsx)(b, {
                        label: `Title`,
                        children: (0, _.jsxs)(`select`, {
                          className: `w-full px-2 py-2 border rounded-lg text-sm`,
                          children: [
                            (0, _.jsx)(`option`, { children: `Mr.` }),
                            (0, _.jsx)(`option`, { children: `Mrs.` }),
                            (0, _.jsx)(`option`, { children: `Ms.` }),
                            (0, _.jsx)(`option`, { children: `Dr.` }),
                            (0, _.jsx)(`option`, { children: `Master` }),
                          ],
                        }),
                      }),
                      (0, _.jsx)(b, {
                        label: `First Name *`,
                        children: (0, _.jsx)(`input`, {
                          className: `w-full px-2 py-2 border rounded-lg text-sm`,
                          placeholder: `First name`,
                        }),
                      }),
                      (0, _.jsx)(b, {
                        label: `Last Name *`,
                        children: (0, _.jsx)(`input`, {
                          className: `w-full px-2 py-2 border rounded-lg text-sm`,
                          placeholder: `Last name`,
                        }),
                      }),
                      (0, _.jsx)(b, {
                        label: `Date of Birth`,
                        children: (0, _.jsx)(`input`, {
                          type: `date`,
                          className: `w-full px-2 py-2 border rounded-lg text-sm`,
                        }),
                      }),
                      (0, _.jsx)(b, {
                        label: `Age`,
                        children: (0, _.jsx)(`input`, {
                          className: `w-full px-2 py-2 border rounded-lg text-sm`,
                          placeholder: `Years`,
                        }),
                      }),
                      (0, _.jsx)(b, {
                        label: `Gender *`,
                        children: (0, _.jsx)(`div`, {
                          className: `flex gap-2`,
                          children: [`Male`, `Female`, `Other`].map((e) =>
                            (0, _.jsx)(
                              `button`,
                              {
                                className: `flex-1 px-2 py-2 border rounded-lg text-xs hover:bg-muted`,
                                children: e,
                              },
                              e,
                            ),
                          ),
                        }),
                      }),
                      (0, _.jsx)(b, {
                        label: `Mobile *`,
                        children: (0, _.jsx)(`input`, {
                          className: `w-full px-2 py-2 border rounded-lg text-sm`,
                          placeholder: `+91 98xxxxxxxx`,
                        }),
                      }),
                      (0, _.jsx)(b, {
                        label: `Alt Mobile`,
                        children: (0, _.jsx)(`input`, {
                          className: `w-full px-2 py-2 border rounded-lg text-sm`,
                        }),
                      }),
                      (0, _.jsx)(b, {
                        label: `Email`,
                        children: (0, _.jsx)(`input`, {
                          className: `w-full px-2 py-2 border rounded-lg text-sm`,
                          placeholder: `name@email.com`,
                        }),
                      }),
                      (0, _.jsx)(b, {
                        label: `Blood Group`,
                        children: (0, _.jsx)(`select`, {
                          className: `w-full px-2 py-2 border rounded-lg text-sm`,
                          children: [
                            `A+`,
                            `A-`,
                            `B+`,
                            `B-`,
                            `O+`,
                            `O-`,
                            `AB+`,
                            `AB-`,
                          ].map((e) =>
                            (0, _.jsx)(`option`, { children: e }, e),
                          ),
                        }),
                      }),
                      (0, _.jsx)(b, {
                        label: `Marital Status`,
                        children: (0, _.jsxs)(`select`, {
                          className: `w-full px-2 py-2 border rounded-lg text-sm`,
                          children: [
                            (0, _.jsx)(`option`, { children: `Single` }),
                            (0, _.jsx)(`option`, { children: `Married` }),
                            (0, _.jsx)(`option`, { children: `Widowed` }),
                          ],
                        }),
                      }),
                      (0, _.jsx)(b, {
                        label: `Occupation`,
                        children: (0, _.jsx)(`input`, {
                          className: `w-full px-2 py-2 border rounded-lg text-sm`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: `grid grid-cols-3 gap-3 mb-5`,
                children: [
                  (0, _.jsx)(b, {
                    label: `ABHA ID / Health ID`,
                    children: (0, _.jsx)(`input`, {
                      className: `w-full px-2 py-2 border rounded-lg text-sm`,
                      placeholder: `14-digit ABHA`,
                    }),
                  }),
                  (0, _.jsx)(b, {
                    label: `Aadhaar Number`,
                    children: (0, _.jsx)(`input`, {
                      className: `w-full px-2 py-2 border rounded-lg text-sm`,
                      placeholder: `xxxx-xxxx-xxxx`,
                    }),
                  }),
                  (0, _.jsx)(b, {
                    label: `PAN / Govt ID`,
                    children: (0, _.jsx)(`input`, {
                      className: `w-full px-2 py-2 border rounded-lg text-sm`,
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: `grid grid-cols-4 gap-3 mb-5`,
                children: [
                  (0, _.jsx)(b, {
                    label: `Address Line 1`,
                    className: `col-span-2`,
                    children: (0, _.jsx)(`input`, {
                      className: `w-full px-2 py-2 border rounded-lg text-sm`,
                    }),
                  }),
                  (0, _.jsx)(b, {
                    label: `Address Line 2`,
                    className: `col-span-2`,
                    children: (0, _.jsx)(`input`, {
                      className: `w-full px-2 py-2 border rounded-lg text-sm`,
                    }),
                  }),
                  (0, _.jsx)(b, {
                    label: `City`,
                    children: (0, _.jsx)(`input`, {
                      className: `w-full px-2 py-2 border rounded-lg text-sm`,
                    }),
                  }),
                  (0, _.jsx)(b, {
                    label: `State`,
                    children: (0, _.jsx)(`input`, {
                      className: `w-full px-2 py-2 border rounded-lg text-sm`,
                    }),
                  }),
                  (0, _.jsx)(b, {
                    label: `Pincode`,
                    children: (0, _.jsx)(`input`, {
                      className: `w-full px-2 py-2 border rounded-lg text-sm`,
                    }),
                  }),
                  (0, _.jsx)(b, {
                    label: `Country`,
                    children: (0, _.jsx)(`input`, {
                      defaultValue: `India`,
                      className: `w-full px-2 py-2 border rounded-lg text-sm`,
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: `grid grid-cols-2 gap-6 mb-5`,
                children: [
                  (0, _.jsxs)(`div`, {
                    children: [
                      (0, _.jsx)(`div`, {
                        className: `text-sm font-semibold mb-2`,
                        children: `Visit Type`,
                      }),
                      (0, _.jsx)(`div`, {
                        className: `grid grid-cols-3 gap-2`,
                        children: [`new`, `revisit`, `emergency`].map((n) =>
                          (0, _.jsx)(
                            `button`,
                            {
                              onClick: () => t(n),
                              className: `px-3 py-2 border rounded-lg text-xs capitalize ${e === n ? `bg-primary text-primary-foreground border-primary` : ``}`,
                              children: n,
                            },
                            n,
                          ),
                        ),
                      }),
                      (0, _.jsxs)(`div`, {
                        className: `grid grid-cols-2 gap-3 mt-3`,
                        children: [
                          (0, _.jsx)(b, {
                            label: `Department`,
                            children: (0, _.jsxs)(`select`, {
                              className: `w-full px-2 py-2 border rounded-lg text-sm`,
                              children: [
                                (0, _.jsx)(`option`, {
                                  children: `Cardiology`,
                                }),
                                (0, _.jsx)(`option`, {
                                  children: `Orthopedics`,
                                }),
                                (0, _.jsx)(`option`, {
                                  children: `General Medicine`,
                                }),
                                (0, _.jsx)(`option`, {
                                  children: `Dermatology`,
                                }),
                                (0, _.jsx)(`option`, {
                                  children: `Gynecology`,
                                }),
                              ],
                            }),
                          }),
                          (0, _.jsx)(b, {
                            label: `Consulting Doctor`,
                            children: (0, _.jsxs)(`select`, {
                              className: `w-full px-2 py-2 border rounded-lg text-sm`,
                              children: [
                                (0, _.jsx)(`option`, {
                                  children: `Dr. Arjun Mehta`,
                                }),
                                (0, _.jsx)(`option`, {
                                  children: `Dr. Neha Sharma`,
                                }),
                                (0, _.jsx)(`option`, {
                                  children: `Dr. Rajeev Kumar`,
                                }),
                              ],
                            }),
                          }),
                          (0, _.jsx)(b, {
                            label: `Referred By`,
                            children: (0, _.jsx)(`input`, {
                              className: `w-full px-2 py-2 border rounded-lg text-sm`,
                              placeholder: `Self / Doctor / Hospital`,
                            }),
                          }),
                          (0, _.jsx)(b, {
                            label: `Chief Complaint`,
                            children: (0, _.jsx)(`input`, {
                              className: `w-full px-2 py-2 border rounded-lg text-sm`,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, _.jsxs)(`div`, {
                    children: [
                      (0, _.jsx)(`div`, {
                        className: `text-sm font-semibold mb-2`,
                        children: `Payment Type`,
                      }),
                      (0, _.jsx)(`div`, {
                        className: `grid grid-cols-3 gap-2`,
                        children: [`self`, `insurance`, `corporate`].map((e) =>
                          (0, _.jsx)(
                            `button`,
                            {
                              onClick: () => s(e),
                              className: `px-3 py-2 border rounded-lg text-xs capitalize ${n === e ? `bg-primary text-primary-foreground border-primary` : ``}`,
                              children: e === `self` ? `Self Pay` : e,
                            },
                            e,
                          ),
                        ),
                      }),
                      n === `insurance` &&
                        (0, _.jsxs)(`div`, {
                          className: `grid grid-cols-2 gap-3 mt-3`,
                          children: [
                            (0, _.jsx)(b, {
                              label: `Insurer`,
                              children: (0, _.jsxs)(`select`, {
                                className: `w-full px-2 py-2 border rounded-lg text-sm`,
                                children: [
                                  (0, _.jsx)(`option`, {
                                    children: `Star Health`,
                                  }),
                                  (0, _.jsx)(`option`, {
                                    children: `Aditya Birla`,
                                  }),
                                  (0, _.jsx)(`option`, {
                                    children: `HDFC ERGO`,
                                  }),
                                  (0, _.jsx)(`option`, {
                                    children: `Max Bupa`,
                                  }),
                                ],
                              }),
                            }),
                            (0, _.jsx)(b, {
                              label: `Policy No.`,
                              children: (0, _.jsx)(`input`, {
                                className: `w-full px-2 py-2 border rounded-lg text-sm`,
                              }),
                            }),
                            (0, _.jsx)(b, {
                              label: `Coverage`,
                              children: (0, _.jsxs)(`select`, {
                                className: `w-full px-2 py-2 border rounded-lg text-sm`,
                                children: [
                                  (0, _.jsx)(`option`, {
                                    children: `Cashless`,
                                  }),
                                  (0, _.jsx)(`option`, {
                                    children: `Reimbursement`,
                                  }),
                                ],
                              }),
                            }),
                            (0, _.jsx)(b, {
                              label: `Sum Insured`,
                              children: (0, _.jsx)(`input`, {
                                className: `w-full px-2 py-2 border rounded-lg text-sm`,
                                placeholder: `₹`,
                              }),
                            }),
                          ],
                        }),
                      n === `corporate` &&
                        (0, _.jsxs)(`div`, {
                          className: `grid grid-cols-2 gap-3 mt-3`,
                          children: [
                            (0, _.jsx)(b, {
                              label: `Company`,
                              children: (0, _.jsx)(`input`, {
                                className: `w-full px-2 py-2 border rounded-lg text-sm`,
                              }),
                            }),
                            (0, _.jsx)(b, {
                              label: `Employee ID`,
                              children: (0, _.jsx)(`input`, {
                                className: `w-full px-2 py-2 border rounded-lg text-sm`,
                              }),
                            }),
                          ],
                        }),
                      n === `self` &&
                        (0, _.jsx)(`div`, {
                          className: `mt-3 p-3 rounded-lg bg-muted/40 text-xs text-muted-foreground`,
                          children: `Patient will pay directly. Consultation fee will apply at billing.`,
                        }),
                      (0, _.jsx)(`div`, {
                        className: `mt-4 text-sm font-semibold mb-2`,
                        children: `Emergency Contact`,
                      }),
                      (0, _.jsxs)(`div`, {
                        className: `grid grid-cols-2 gap-3`,
                        children: [
                          (0, _.jsx)(b, {
                            label: `Name`,
                            children: (0, _.jsx)(`input`, {
                              className: `w-full px-2 py-2 border rounded-lg text-sm`,
                            }),
                          }),
                          (0, _.jsx)(b, {
                            label: `Relation`,
                            children: (0, _.jsx)(`input`, {
                              className: `w-full px-2 py-2 border rounded-lg text-sm`,
                            }),
                          }),
                          (0, _.jsx)(b, {
                            label: `Mobile`,
                            children: (0, _.jsx)(`input`, {
                              className: `w-full px-2 py-2 border rounded-lg text-sm`,
                            }),
                          }),
                          (0, _.jsx)(b, {
                            label: `Allergy / Notes`,
                            children: (0, _.jsx)(`input`, {
                              className: `w-full px-2 py-2 border rounded-lg text-sm`,
                              placeholder: `e.g. Penicillin`,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: `flex items-center justify-between pt-4 border-t`,
                children: [
                  (0, _.jsxs)(`label`, {
                    className: `flex items-center gap-2 text-xs text-muted-foreground`,
                    children: [
                      (0, _.jsx)(`input`, {
                        type: `checkbox`,
                        className: `rounded`,
                        defaultChecked: !0,
                      }),
                      ` Send SMS / WhatsApp with UHID & token`,
                    ],
                  }),
                  (0, _.jsxs)(`div`, {
                    className: `flex gap-2`,
                    children: [
                      (0, _.jsx)(`button`, {
                        className: `px-4 py-2 rounded-lg border text-sm`,
                        children: `Clear`,
                      }),
                      (0, _.jsx)(`button`, {
                        className: `px-4 py-2 rounded-lg border text-sm`,
                        children: `Save as Draft`,
                      }),
                      (0, _.jsx)(`button`, {
                        className: `px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium`,
                        children: `Register & Generate Token`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, _.jsxs)(f, {
            title: `Recent Registrations`,
            children: [
              (0, _.jsx)(`div`, {
                className: `space-y-2`,
                children: v.map((e) =>
                  (0, _.jsxs)(
                    `div`,
                    {
                      className: `p-3 border rounded-lg`,
                      children: [
                        (0, _.jsxs)(`div`, {
                          className: `flex justify-between items-center`,
                          children: [
                            (0, _.jsx)(`span`, {
                              className: `text-[10px] font-mono px-1.5 py-0.5 bg-muted rounded`,
                              children: e[0],
                            }),
                            (0, _.jsx)(`span`, {
                              className: `text-[10px] text-muted-foreground`,
                              children: e[3],
                            }),
                          ],
                        }),
                        (0, _.jsx)(`div`, {
                          className: `font-semibold text-sm mt-1`,
                          children: e[1],
                        }),
                        (0, _.jsxs)(`div`, {
                          className: `text-xs text-muted-foreground`,
                          children: [e[2], ` · `, e[4]],
                        }),
                      ],
                    },
                    e[0],
                  ),
                ),
              }),
              (0, _.jsxs)(`div`, {
                className: `mt-4 p-3 rounded-lg bg-info/10 border border-info/20 text-xs`,
                children: [
                  (0, _.jsx)(`div`, {
                    className: `font-semibold mb-1`,
                    children: `💡 Quick Tip`,
                  }),
                  `Use ABHA / Mobile lookup first to avoid creating duplicate UHIDs for existing patients.`,
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function b({ label: e, children: t, className: n = `` }) {
  return (0, _.jsxs)(`div`, {
    className: n,
    children: [
      (0, _.jsx)(`label`, {
        className: `text-[11px] text-muted-foreground`,
        children: e,
      }),
      (0, _.jsx)(`div`, { className: `mt-1`, children: t }),
    ],
  });
}
export { y as component };
