import { d as e } from "./auth-CRzH69JE.js";
import { T as t, _ as n, d as r, t as i } from "./AppLayout-x7TZ9xUn.js";
import { t as a } from "./trending-up-U9UA98WF.js";
import { n as o, t as s } from "./Kpi-B7fzN02H.js";
var c = e();
function l() {
  return (0, c.jsxs)(i, {
    children: [
      (0, c.jsxs)(`div`, {
        className: `mb-6`,
        children: [
          (0, c.jsx)(`h1`, {
            className: `text-2xl font-bold`,
            children: `Reports & Analytics`,
          }),
          (0, c.jsx)(`p`, {
            className: `text-sm text-muted-foreground`,
            children: `Operational and financial insights`,
          }),
        ],
      }),
      (0, c.jsxs)(`div`, {
        className: `grid grid-cols-2 md:grid-cols-4 gap-3 mb-6`,
        children: [
          (0, c.jsx)(s, {
            icon: n,
            label: `Monthly Revenue`,
            value: `₹1.82Cr`,
            delta: `12%`,
            tone: `primary`,
          }),
          (0, c.jsx)(s, {
            icon: r,
            label: `Patients / Month`,
            value: `24,890`,
            delta: `9%`,
            tone: `info`,
          }),
          (0, c.jsx)(s, {
            icon: a,
            label: `Avg Bill`,
            value: `₹1,240`,
            delta: `3%`,
            tone: `success`,
          }),
          (0, c.jsx)(s, {
            icon: t,
            label: `Bed Occupancy`,
            value: `78%`,
            tone: `warning`,
          }),
        ],
      }),
      (0, c.jsxs)(`div`, {
        className: `grid grid-cols-1 lg:grid-cols-2 gap-6`,
        children: [
          (0, c.jsx)(o, {
            title: `Top Reports`,
            children: (0, c.jsx)(`ul`, {
              className: `text-sm space-y-2`,
              children: [
                `Daily Collection Register`,
                `OPD Consultation Report`,
                `Doctor Performance`,
                `Insurance Claims Summary`,
                `Pharmacy Sales`,
                `Investigation Revenue`,
                `Discount Audit Trail`,
              ].map((e) =>
                (0, c.jsxs)(
                  `li`,
                  {
                    className: `p-3 border rounded-lg flex justify-between items-center hover:border-primary cursor-pointer`,
                    children: [
                      (0, c.jsx)(`span`, { children: e }),
                      (0, c.jsx)(`span`, {
                        className: `text-xs text-primary`,
                        children: `Open →`,
                      }),
                    ],
                  },
                  e,
                ),
              ),
            }),
          }),
          (0, c.jsx)(o, {
            title: `Statutory Reports`,
            children: (0, c.jsx)(`ul`, {
              className: `text-sm space-y-2`,
              children: [
                `GST Sales Register`,
                `TDS Report`,
                `GSTR-1 Summary`,
                `Form 26AS Reconciliation`,
                `Bio-Medical Waste Log`,
                `NABH Indicators`,
              ].map((e) =>
                (0, c.jsxs)(
                  `li`,
                  {
                    className: `p-3 border rounded-lg flex justify-between items-center hover:border-primary cursor-pointer`,
                    children: [
                      (0, c.jsx)(`span`, { children: e }),
                      (0, c.jsx)(`span`, {
                        className: `text-xs text-primary`,
                        children: `Open →`,
                      }),
                    ],
                  },
                  e,
                ),
              ),
            }),
          }),
        ],
      }),
    ],
  });
}
export { l as component };
