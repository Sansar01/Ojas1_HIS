import { n as __toESM } from "../_runtime.mjs";
import { i as require_react } from "./react+tanstack__react-query.mjs";
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var mergeClasses = (...classes) =>
  classes
    .filter((className, index, array) => {
      return (
        Boolean(className) &&
        className.trim() !== "" &&
        array.indexOf(className) === index
      );
    })
    .join(" ")
    .trim();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var toKebabCase = (string) =>
  string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var toCamelCase = (string) =>
  string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) =>
    p2 ? p2.toUpperCase() : p1.toLowerCase(),
  );
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
//#endregion
//#region node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var hasA11yProp = (props) => {
  for (const prop in props)
    if (prop.startsWith("aria-") || prop === "role" || prop === "title")
      return true;
  return false;
};
//#endregion
//#region node_modules/lucide-react/dist/esm/Icon.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Icon = (0, import_react.forwardRef)(
  (
    {
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      iconNode,
      ...rest
    },
    ref,
  ) =>
    (0, import_react.createElement)(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth
          ? (Number(strokeWidth) * 24) / Number(size)
          : strokeWidth,
        className: mergeClasses("lucide", className),
        ...(!children && !hasA11yProp(rest) && { "aria-hidden": "true" }),
        ...rest,
      },
      [
        ...iconNode.map(([tag, attrs]) =>
          (0, import_react.createElement)(tag, attrs),
        ),
        ...(Array.isArray(children) ? children : [children]),
      ],
    ),
);
//#endregion
//#region node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var createLucideIcon = (iconName, iconNode) => {
  const Component = (0, import_react.forwardRef)(
    ({ className, ...props }, ref) =>
      (0, import_react.createElement)(Icon, {
        ref,
        iconNode,
        className: mergeClasses(
          `lucide-${toKebabCase(toPascalCase(iconName))}`,
          `lucide-${iconName}`,
          className,
        ),
        ...props,
      }),
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Activity = createLucideIcon("activity", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ArrowLeft = createLucideIcon("arrow-left", [
  [
    "path",
    {
      d: "m12 19-7-7 7-7",
      key: "1l729n",
    },
  ],
  [
    "path",
    {
      d: "M19 12H5",
      key: "x3x0zl",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ArrowRight = createLucideIcon("arrow-right", [
  [
    "path",
    {
      d: "M5 12h14",
      key: "1ays0h",
    },
  ],
  [
    "path",
    {
      d: "m12 5 7 7-7 7",
      key: "xquz4c",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Bell = createLucideIcon("bell", [
  [
    "path",
    {
      d: "M10.268 21a2 2 0 0 0 3.464 0",
      key: "vwvbt9",
    },
  ],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var BriefcaseMedical = createLucideIcon("briefcase-medical", [
  [
    "path",
    {
      d: "M12 11v4",
      key: "a6ujw6",
    },
  ],
  [
    "path",
    {
      d: "M14 13h-4",
      key: "1pl8zg",
    },
  ],
  [
    "path",
    {
      d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",
      key: "1ksdt3",
    },
  ],
  [
    "path",
    {
      d: "M18 6v14",
      key: "1mu4gy",
    },
  ],
  [
    "path",
    {
      d: "M6 6v14",
      key: "1s15cj",
    },
  ],
  [
    "rect",
    {
      width: "20",
      height: "14",
      x: "2",
      y: "6",
      rx: "2",
      key: "i6l2r4",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Calendar = createLucideIcon("calendar", [
  [
    "path",
    {
      d: "M8 2v4",
      key: "1cmpym",
    },
  ],
  [
    "path",
    {
      d: "M16 2v4",
      key: "4m81vk",
    },
  ],
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "4",
      rx: "2",
      key: "1hopcy",
    },
  ],
  [
    "path",
    {
      d: "M3 10h18",
      key: "8toen8",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Camera = createLucideIcon("camera", [
  [
    "path",
    {
      d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
      key: "18u6gg",
    },
  ],
  [
    "circle",
    {
      cx: "12",
      cy: "13",
      r: "3",
      key: "1vg3eu",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ChartColumn = createLucideIcon("chart-column", [
  [
    "path",
    {
      d: "M3 3v16a2 2 0 0 0 2 2h16",
      key: "c24i48",
    },
  ],
  [
    "path",
    {
      d: "M18 17V9",
      key: "2bz60n",
    },
  ],
  [
    "path",
    {
      d: "M13 17V5",
      key: "1frdt8",
    },
  ],
  [
    "path",
    {
      d: "M8 17v-3",
      key: "17ska0",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Check = createLucideIcon("check", [
  [
    "path",
    {
      d: "M20 6 9 17l-5-5",
      key: "1gmf2c",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ChevronRight = createLucideIcon("chevron-right", [
  [
    "path",
    {
      d: "m9 18 6-6-6-6",
      key: "mthhwq",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var CircleAlert = createLucideIcon("circle-alert", [
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay",
    },
  ],
  [
    "line",
    {
      x1: "12",
      x2: "12",
      y1: "8",
      y2: "12",
      key: "1pkeuh",
    },
  ],
  [
    "line",
    {
      x1: "12",
      x2: "12.01",
      y1: "16",
      y2: "16",
      key: "4dfq90",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var CircleCheck = createLucideIcon("circle-check", [
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay",
    },
  ],
  [
    "path",
    {
      d: "m9 12 2 2 4-4",
      key: "dzmm74",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var CircleDollarSign = createLucideIcon("circle-dollar-sign", [
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay",
    },
  ],
  [
    "path",
    {
      d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",
      key: "1h4pet",
    },
  ],
  [
    "path",
    {
      d: "M12 18V6",
      key: "zqpxq5",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var CircleX = createLucideIcon("circle-x", [
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay",
    },
  ],
  [
    "path",
    {
      d: "m15 9-6 6",
      key: "1uzhvr",
    },
  ],
  [
    "path",
    {
      d: "m9 9 6 6",
      key: "z0biqf",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ClipboardList = createLucideIcon("clipboard-list", [
  [
    "rect",
    {
      width: "8",
      height: "4",
      x: "8",
      y: "2",
      rx: "1",
      ry: "1",
      key: "tgr4d6",
    },
  ],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196",
    },
  ],
  [
    "path",
    {
      d: "M12 11h4",
      key: "1jrz19",
    },
  ],
  [
    "path",
    {
      d: "M12 16h4",
      key: "n85exb",
    },
  ],
  [
    "path",
    {
      d: "M8 11h.01",
      key: "1dfujw",
    },
  ],
  [
    "path",
    {
      d: "M8 16h.01",
      key: "18s6g9",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Clock = createLucideIcon("clock", [
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay",
    },
  ],
  [
    "path",
    {
      d: "M12 6v6l4 2",
      key: "mmk7yg",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Cog = createLucideIcon("cog", [
  [
    "path",
    {
      d: "M11 10.27 7 3.34",
      key: "16pf9h",
    },
  ],
  [
    "path",
    {
      d: "m11 13.73-4 6.93",
      key: "794ttg",
    },
  ],
  [
    "path",
    {
      d: "M12 22v-2",
      key: "1osdcq",
    },
  ],
  [
    "path",
    {
      d: "M12 2v2",
      key: "tus03m",
    },
  ],
  [
    "path",
    {
      d: "M14 12h8",
      key: "4f43i9",
    },
  ],
  [
    "path",
    {
      d: "m17 20.66-1-1.73",
      key: "eq3orb",
    },
  ],
  [
    "path",
    {
      d: "m17 3.34-1 1.73",
      key: "2wel8s",
    },
  ],
  [
    "path",
    {
      d: "M2 12h2",
      key: "1t8f8n",
    },
  ],
  [
    "path",
    {
      d: "m20.66 17-1.73-1",
      key: "sg0v6f",
    },
  ],
  [
    "path",
    {
      d: "m20.66 7-1.73 1",
      key: "1ow05n",
    },
  ],
  [
    "path",
    {
      d: "m3.34 17 1.73-1",
      key: "nuk764",
    },
  ],
  [
    "path",
    {
      d: "m3.34 7 1.73 1",
      key: "1ulond",
    },
  ],
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "2",
      key: "1c9p78",
    },
  ],
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "8",
      key: "46899m",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Copy = createLucideIcon("copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Droplet = createLucideIcon("droplet", [
  [
    "path",
    {
      d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
      key: "c7niix",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var EyeOff = createLucideIcon("eye-off", [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f",
    },
  ],
  [
    "path",
    {
      d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
      key: "151rxh",
    },
  ],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a",
    },
  ],
  [
    "path",
    {
      d: "m2 2 20 20",
      key: "1ooewy",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Eye = createLucideIcon("eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0",
    },
  ],
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "3",
      key: "1v7zrd",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var FileText = createLucideIcon("file-text", [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6",
    },
  ],
  [
    "path",
    {
      d: "M14 2v5a1 1 0 0 0 1 1h5",
      key: "wfsgrz",
    },
  ],
  [
    "path",
    {
      d: "M10 9H8",
      key: "b1mrlr",
    },
  ],
  [
    "path",
    {
      d: "M16 13H8",
      key: "t4e002",
    },
  ],
  [
    "path",
    {
      d: "M16 17H8",
      key: "z1uh3a",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var FingerprintPattern = createLucideIcon("fingerprint-pattern", [
  [
    "path",
    {
      d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",
      key: "1nerag",
    },
  ],
  [
    "path",
    {
      d: "M14 13.12c0 2.38 0 6.38-1 8.88",
      key: "o46ks0",
    },
  ],
  [
    "path",
    {
      d: "M17.29 21.02c.12-.6.43-2.3.5-3.02",
      key: "ptglia",
    },
  ],
  [
    "path",
    {
      d: "M2 12a10 10 0 0 1 18-6",
      key: "ydlgp0",
    },
  ],
  [
    "path",
    {
      d: "M2 16h.01",
      key: "1gqxmh",
    },
  ],
  [
    "path",
    {
      d: "M21.8 16c.2-2 .131-5.354 0-6",
      key: "drycrb",
    },
  ],
  [
    "path",
    {
      d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",
      key: "1tidbn",
    },
  ],
  [
    "path",
    {
      d: "M8.65 22c.21-.66.45-1.32.57-2",
      key: "13wd9y",
    },
  ],
  [
    "path",
    {
      d: "M9 6.8a6 6 0 0 1 9 5.2v2",
      key: "1fr1j5",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var FlaskConical = createLucideIcon("flask-conical", [
  [
    "path",
    {
      d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
      key: "18mbvz",
    },
  ],
  [
    "path",
    {
      d: "M6.453 15h11.094",
      key: "3shlmq",
    },
  ],
  [
    "path",
    {
      d: "M8.5 2h7",
      key: "csnxdl",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Heart = createLucideIcon("heart", [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var History = createLucideIcon("history", [
  [
    "path",
    {
      d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
      key: "1357e3",
    },
  ],
  [
    "path",
    {
      d: "M3 3v5h5",
      key: "1xhq8a",
    },
  ],
  [
    "path",
    {
      d: "M12 7v5l4 2",
      key: "1fdv2h",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IdCard = createLucideIcon("id-card", [
  [
    "path",
    {
      d: "M16 10h2",
      key: "8sgtl7",
    },
  ],
  [
    "path",
    {
      d: "M16 14h2",
      key: "epxaof",
    },
  ],
  [
    "path",
    {
      d: "M6.17 15a3 3 0 0 1 5.66 0",
      key: "n6f512",
    },
  ],
  [
    "circle",
    {
      cx: "9",
      cy: "11",
      r: "2",
      key: "yxgjnd",
    },
  ],
  [
    "rect",
    {
      x: "2",
      y: "5",
      width: "20",
      height: "14",
      rx: "2",
      key: "qneu4z",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var KeyRound = createLucideIcon("key-round", [
  [
    "path",
    {
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      key: "1s6t7t",
    },
  ],
  [
    "circle",
    {
      cx: "16.5",
      cy: "7.5",
      r: ".5",
      fill: "currentColor",
      key: "w0ekpg",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var LayoutDashboard = createLucideIcon("layout-dashboard", [
  [
    "rect",
    {
      width: "7",
      height: "9",
      x: "3",
      y: "3",
      rx: "1",
      key: "10lvy0",
    },
  ],
  [
    "rect",
    {
      width: "7",
      height: "5",
      x: "14",
      y: "3",
      rx: "1",
      key: "16une8",
    },
  ],
  [
    "rect",
    {
      width: "7",
      height: "9",
      x: "14",
      y: "12",
      rx: "1",
      key: "1hutg5",
    },
  ],
  [
    "rect",
    {
      width: "7",
      height: "5",
      x: "3",
      y: "16",
      rx: "1",
      key: "ldoo1y",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var LayoutGrid = createLucideIcon("layout-grid", [
  [
    "rect",
    {
      width: "7",
      height: "7",
      x: "3",
      y: "3",
      rx: "1",
      key: "1g98yp",
    },
  ],
  [
    "rect",
    {
      width: "7",
      height: "7",
      x: "14",
      y: "3",
      rx: "1",
      key: "6d4xhi",
    },
  ],
  [
    "rect",
    {
      width: "7",
      height: "7",
      x: "14",
      y: "14",
      rx: "1",
      key: "nxv5o0",
    },
  ],
  [
    "rect",
    {
      width: "7",
      height: "7",
      x: "3",
      y: "14",
      rx: "1",
      key: "1bb6yr",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var LoaderCircle = createLucideIcon("loader-circle", [
  [
    "path",
    {
      d: "M21 12a9 9 0 1 1-6.219-8.56",
      key: "13zald",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var LogIn = createLucideIcon("log-in", [
  [
    "path",
    {
      d: "m10 17 5-5-5-5",
      key: "1bsop3",
    },
  ],
  [
    "path",
    {
      d: "M15 12H3",
      key: "6jk70r",
    },
  ],
  [
    "path",
    {
      d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
      key: "u53s6r",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var LogOut = createLucideIcon("log-out", [
  [
    "path",
    {
      d: "m16 17 5-5-5-5",
      key: "1bji2h",
    },
  ],
  [
    "path",
    {
      d: "M21 12H9",
      key: "dn1m92",
    },
  ],
  [
    "path",
    {
      d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
      key: "1uf3rs",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Mail = createLucideIcon("mail", [
  [
    "path",
    {
      d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
      key: "132q7q",
    },
  ],
  [
    "rect",
    {
      x: "2",
      y: "4",
      width: "20",
      height: "16",
      rx: "2",
      key: "izxlao",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var MessageCircle = createLucideIcon("message-circle", [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var MessageSquare = createLucideIcon("message-square", [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var MicOff = createLucideIcon("mic-off", [
  [
    "path",
    {
      d: "M12 19v3",
      key: "npa21l",
    },
  ],
  [
    "path",
    {
      d: "M15 9.34V5a3 3 0 0 0-5.68-1.33",
      key: "1gzdoj",
    },
  ],
  [
    "path",
    {
      d: "M16.95 16.95A7 7 0 0 1 5 12v-2",
      key: "cqa7eg",
    },
  ],
  [
    "path",
    {
      d: "M18.89 13.23A7 7 0 0 0 19 12v-2",
      key: "16hl24",
    },
  ],
  [
    "path",
    {
      d: "m2 2 20 20",
      key: "1ooewy",
    },
  ],
  [
    "path",
    {
      d: "M9 9v3a3 3 0 0 0 5.12 2.12",
      key: "r2i35w",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Mic = createLucideIcon("mic", [
  [
    "path",
    {
      d: "M12 19v3",
      key: "npa21l",
    },
  ],
  [
    "path",
    {
      d: "M19 10v2a7 7 0 0 1-14 0v-2",
      key: "1vc78b",
    },
  ],
  [
    "rect",
    {
      x: "9",
      y: "2",
      width: "6",
      height: "13",
      rx: "3",
      key: "s6n7sd",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Monitor = createLucideIcon("monitor", [
  [
    "rect",
    {
      width: "20",
      height: "14",
      x: "2",
      y: "3",
      rx: "2",
      key: "48i651",
    },
  ],
  [
    "line",
    {
      x1: "8",
      x2: "16",
      y1: "21",
      y2: "21",
      key: "1svkeh",
    },
  ],
  [
    "line",
    {
      x1: "12",
      x2: "12",
      y1: "17",
      y2: "21",
      key: "vw1qmm",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Package = createLucideIcon("package", [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw",
    },
  ],
  [
    "path",
    {
      d: "M12 22V12",
      key: "d0xqtd",
    },
  ],
  [
    "polyline",
    {
      points: "3.29 7 12 12 20.71 7",
      key: "ousv84",
    },
  ],
  [
    "path",
    {
      d: "m7.5 4.27 9 5.15",
      key: "1c824w",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Paperclip = createLucideIcon("paperclip", [
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
      key: "1miecu",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Percent = createLucideIcon("percent", [
  [
    "line",
    {
      x1: "19",
      x2: "5",
      y1: "5",
      y2: "19",
      key: "1x9vlm",
    },
  ],
  [
    "circle",
    {
      cx: "6.5",
      cy: "6.5",
      r: "2.5",
      key: "4mh3h7",
    },
  ],
  [
    "circle",
    {
      cx: "17.5",
      cy: "17.5",
      r: "2.5",
      key: "1mdrzq",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var PhoneOff = createLucideIcon("phone-off", [
  [
    "path",
    {
      d: "M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272",
      key: "1wngk7",
    },
  ],
  [
    "path",
    {
      d: "M22 2 2 22",
      key: "y4kqgn",
    },
  ],
  [
    "path",
    {
      d: "M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473",
      key: "10hv5p",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Phone = createLucideIcon("phone", [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Pill = createLucideIcon("pill", [
  [
    "path",
    {
      d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",
      key: "wa1lgi",
    },
  ],
  [
    "path",
    {
      d: "m8.5 8.5 7 7",
      key: "rvfmvr",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Printer = createLucideIcon("printer", [
  [
    "path",
    {
      d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "143wyd",
    },
  ],
  [
    "path",
    {
      d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",
      key: "1itne7",
    },
  ],
  [
    "rect",
    {
      x: "6",
      y: "14",
      width: "12",
      height: "8",
      rx: "1",
      key: "1ue0tg",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var QrCode = createLucideIcon("qr-code", [
  [
    "rect",
    {
      width: "5",
      height: "5",
      x: "3",
      y: "3",
      rx: "1",
      key: "1tu5fj",
    },
  ],
  [
    "rect",
    {
      width: "5",
      height: "5",
      x: "16",
      y: "3",
      rx: "1",
      key: "1v8r4q",
    },
  ],
  [
    "rect",
    {
      width: "5",
      height: "5",
      x: "3",
      y: "16",
      rx: "1",
      key: "1x03jg",
    },
  ],
  [
    "path",
    {
      d: "M21 16h-3a2 2 0 0 0-2 2v3",
      key: "177gqh",
    },
  ],
  [
    "path",
    {
      d: "M21 21v.01",
      key: "ents32",
    },
  ],
  [
    "path",
    {
      d: "M12 7v3a2 2 0 0 1-2 2H7",
      key: "8crl2c",
    },
  ],
  [
    "path",
    {
      d: "M3 12h.01",
      key: "nlz23k",
    },
  ],
  [
    "path",
    {
      d: "M12 3h.01",
      key: "n36tog",
    },
  ],
  [
    "path",
    {
      d: "M12 16v.01",
      key: "133mhm",
    },
  ],
  [
    "path",
    {
      d: "M16 12h1",
      key: "1slzba",
    },
  ],
  [
    "path",
    {
      d: "M21 12v.01",
      key: "1lwtk9",
    },
  ],
  [
    "path",
    {
      d: "M12 21v-1",
      key: "1880an",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Receipt = createLucideIcon("receipt", [
  [
    "path",
    {
      d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
      key: "q3az6g",
    },
  ],
  [
    "path",
    {
      d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",
      key: "1h4pet",
    },
  ],
  [
    "path",
    {
      d: "M12 17.5v-11",
      key: "1jc1ny",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ruler = createLucideIcon("ruler", [
  [
    "path",
    {
      d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
      key: "icamh8",
    },
  ],
  [
    "path",
    {
      d: "m14.5 12.5 2-2",
      key: "inckbg",
    },
  ],
  [
    "path",
    {
      d: "m11.5 9.5 2-2",
      key: "fmmyf7",
    },
  ],
  [
    "path",
    {
      d: "m8.5 6.5 2-2",
      key: "vc6u1g",
    },
  ],
  [
    "path",
    {
      d: "m17.5 15.5 2-2",
      key: "wo5hmg",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Search = createLucideIcon("search", [
  [
    "path",
    {
      d: "m21 21-4.34-4.34",
      key: "14j7rj",
    },
  ],
  [
    "circle",
    {
      cx: "11",
      cy: "11",
      r: "8",
      key: "4ej97u",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Send = createLucideIcon("send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3",
    },
  ],
  [
    "path",
    {
      d: "m21.854 2.147-10.94 10.939",
      key: "12cjpa",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Settings = createLucideIcon("settings", [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw",
    },
  ],
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "3",
      key: "1v7zrd",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ShieldCheck = createLucideIcon("shield-check", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
  [
    "path",
    {
      d: "m9 12 2 2 4-4",
      key: "dzmm74",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Shield = createLucideIcon("shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Signal = createLucideIcon("signal", [
  [
    "path",
    {
      d: "M2 20h.01",
      key: "4haj6o",
    },
  ],
  [
    "path",
    {
      d: "M7 20v-4",
      key: "j294jx",
    },
  ],
  [
    "path",
    {
      d: "M12 20v-8",
      key: "i3yub9",
    },
  ],
  [
    "path",
    {
      d: "M17 20V8",
      key: "1tkaf5",
    },
  ],
  [
    "path",
    {
      d: "M22 4v16",
      key: "sih9yq",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Soup = createLucideIcon("soup", [
  [
    "path",
    {
      d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",
      key: "4rw317",
    },
  ],
  [
    "path",
    {
      d: "M7 21h10",
      key: "1b0cd5",
    },
  ],
  [
    "path",
    {
      d: "M19.5 12 22 6",
      key: "shfsr5",
    },
  ],
  [
    "path",
    {
      d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",
      key: "rpc6vp",
    },
  ],
  [
    "path",
    {
      d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",
      key: "1lf63m",
    },
  ],
  [
    "path",
    {
      d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",
      key: "97tijn",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Star = createLucideIcon("star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Stethoscope = createLucideIcon("stethoscope", [
  [
    "path",
    {
      d: "M11 2v2",
      key: "1539x4",
    },
  ],
  [
    "path",
    {
      d: "M5 2v2",
      key: "1yf1q8",
    },
  ],
  [
    "path",
    {
      d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",
      key: "rb5t3r",
    },
  ],
  [
    "path",
    {
      d: "M8 15a6 6 0 0 0 12 0v-3",
      key: "x18d4x",
    },
  ],
  [
    "circle",
    {
      cx: "20",
      cy: "10",
      r: "2",
      key: "ts1r5v",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var StickyNote = createLucideIcon("sticky-note", [
  [
    "path",
    {
      d: "M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",
      key: "1dfntj",
    },
  ],
  [
    "path",
    {
      d: "M15 3v5a1 1 0 0 0 1 1h5",
      key: "6s6qgf",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Thermometer = createLucideIcon("thermometer", [
  [
    "path",
    {
      d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",
      key: "17jzev",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var TrendingUp = createLucideIcon("trending-up", [
  [
    "path",
    {
      d: "M16 7h6v6",
      key: "box55l",
    },
  ],
  [
    "path",
    {
      d: "m22 7-8.5 8.5-5-5L2 17",
      key: "1t1m79",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var TriangleAlert = createLucideIcon("triangle-alert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq",
    },
  ],
  [
    "path",
    {
      d: "M12 9v4",
      key: "juzpu7",
    },
  ],
  [
    "path",
    {
      d: "M12 17h.01",
      key: "p32p05",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var UserCheck = createLucideIcon("user-check", [
  [
    "path",
    {
      d: "m16 11 2 2 4-4",
      key: "9rsbq5",
    },
  ],
  [
    "path",
    {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
      key: "1yyitq",
    },
  ],
  [
    "circle",
    {
      cx: "9",
      cy: "7",
      r: "4",
      key: "nufk8",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var UserCog = createLucideIcon("user-cog", [
  [
    "path",
    {
      d: "M10 15H6a4 4 0 0 0-4 4v2",
      key: "1nfge6",
    },
  ],
  [
    "path",
    {
      d: "m14.305 16.53.923-.382",
      key: "1itpsq",
    },
  ],
  [
    "path",
    {
      d: "m15.228 13.852-.923-.383",
      key: "eplpkm",
    },
  ],
  [
    "path",
    {
      d: "m16.852 12.228-.383-.923",
      key: "13v3q0",
    },
  ],
  [
    "path",
    {
      d: "m16.852 17.772-.383.924",
      key: "1i8mnm",
    },
  ],
  [
    "path",
    {
      d: "m19.148 12.228.383-.923",
      key: "1q8j1v",
    },
  ],
  [
    "path",
    {
      d: "m19.53 18.696-.382-.924",
      key: "vk1qj3",
    },
  ],
  [
    "path",
    {
      d: "m20.772 13.852.924-.383",
      key: "n880s0",
    },
  ],
  [
    "path",
    {
      d: "m20.772 16.148.924.383",
      key: "1g6xey",
    },
  ],
  [
    "circle",
    {
      cx: "18",
      cy: "15",
      r: "3",
      key: "gjjjvw",
    },
  ],
  [
    "circle",
    {
      cx: "9",
      cy: "7",
      r: "4",
      key: "nufk8",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var UserPlus = createLucideIcon("user-plus", [
  [
    "path",
    {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
      key: "1yyitq",
    },
  ],
  [
    "circle",
    {
      cx: "9",
      cy: "7",
      r: "4",
      key: "nufk8",
    },
  ],
  [
    "line",
    {
      x1: "19",
      x2: "19",
      y1: "8",
      y2: "14",
      key: "1bvyxn",
    },
  ],
  [
    "line",
    {
      x1: "22",
      x2: "16",
      y1: "11",
      y2: "11",
      key: "1shjgl",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var User = createLucideIcon("user", [
  [
    "path",
    {
      d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
      key: "975kel",
    },
  ],
  [
    "circle",
    {
      cx: "12",
      cy: "7",
      r: "4",
      key: "17ys0d",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Users = createLucideIcon("users", [
  [
    "path",
    {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
      key: "1yyitq",
    },
  ],
  [
    "path",
    {
      d: "M16 3.128a4 4 0 0 1 0 7.744",
      key: "16gr8j",
    },
  ],
  [
    "path",
    {
      d: "M22 21v-2a4 4 0 0 0-3-3.87",
      key: "kshegd",
    },
  ],
  [
    "circle",
    {
      cx: "9",
      cy: "7",
      r: "4",
      key: "nufk8",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var VideoOff = createLucideIcon("video-off", [
  [
    "path",
    {
      d: "M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196",
      key: "w8jjjt",
    },
  ],
  [
    "path",
    {
      d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",
      key: "1xawa7",
    },
  ],
  [
    "path",
    {
      d: "m2 2 20 20",
      key: "1ooewy",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Video = createLucideIcon("video", [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec",
    },
  ],
  [
    "rect",
    {
      x: "2",
      y: "6",
      width: "14",
      height: "12",
      rx: "2",
      key: "158x01",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Volume2 = createLucideIcon("volume-2", [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw",
    },
  ],
  [
    "path",
    {
      d: "M16 9a5 5 0 0 1 0 6",
      key: "1q6k2b",
    },
  ],
  [
    "path",
    {
      d: "M19.364 18.364a9 9 0 0 0 0-12.728",
      key: "ijwkga",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Weight = createLucideIcon("weight", [
  [
    "circle",
    {
      cx: "12",
      cy: "5",
      r: "3",
      key: "rqqgnr",
    },
  ],
  [
    "path",
    {
      d: "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",
      key: "56o5sh",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Wifi = createLucideIcon("wifi", [
  [
    "path",
    {
      d: "M12 20h.01",
      key: "zekei9",
    },
  ],
  [
    "path",
    {
      d: "M2 8.82a15 15 0 0 1 20 0",
      key: "dnpr2z",
    },
  ],
  [
    "path",
    {
      d: "M5 12.859a10 10 0 0 1 14 0",
      key: "1x1e6c",
    },
  ],
  [
    "path",
    {
      d: "M8.5 16.429a5 5 0 0 1 7 0",
      key: "1bycff",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Wind = createLucideIcon("wind", [
  [
    "path",
    {
      d: "M12.8 19.6A2 2 0 1 0 14 16H2",
      key: "148xed",
    },
  ],
  [
    "path",
    {
      d: "M17.5 8a2.5 2.5 0 1 1 2 4H2",
      key: "1u4tom",
    },
  ],
  [
    "path",
    {
      d: "M9.8 4.4A2 2 0 1 1 11 8H2",
      key: "75valh",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var X = createLucideIcon("x", [
  [
    "path",
    {
      d: "M18 6 6 18",
      key: "1bl5f8",
    },
  ],
  [
    "path",
    {
      d: "m6 6 12 12",
      key: "d8bk6v",
    },
  ],
]);
//#endregion
export {
  FileText as $,
  Pill as A,
  MessageCircle as B,
  Settings as C,
  Receipt as D,
  Ruler as E,
  Package as F,
  LayoutGrid as G,
  LogOut as H,
  Monitor as I,
  IdCard as J,
  LayoutDashboard as K,
  Mic as L,
  PhoneOff as M,
  Percent as N,
  QrCode as O,
  Paperclip as P,
  FingerprintPattern as Q,
  MicOff as R,
  ShieldCheck as S,
  Search as T,
  LogIn as U,
  Mail as V,
  LoaderCircle as W,
  Heart as X,
  History as Y,
  FlaskConical as Z,
  Stethoscope as _,
  Bell as _t,
  Volume2 as a,
  Clock as at,
  Signal as b,
  Activity as bt,
  Users as c,
  CircleDollarSign as ct,
  UserCog as d,
  ChevronRight as dt,
  Eye as et,
  UserCheck as f,
  Check as ft,
  StickyNote as g,
  BriefcaseMedical as gt,
  Thermometer as h,
  Calendar as ht,
  Weight as i,
  Cog as it,
  Phone as j,
  Printer as k,
  User as l,
  CircleCheck as lt,
  TrendingUp as m,
  Camera as mt,
  Wind as n,
  Droplet as nt,
  Video as o,
  ClipboardList as ot,
  TriangleAlert as p,
  ChartColumn as pt,
  KeyRound as q,
  Wifi as r,
  Copy as rt,
  VideoOff as s,
  CircleX as st,
  X as t,
  EyeOff as tt,
  UserPlus as u,
  CircleAlert as ut,
  Star as v,
  ArrowRight as vt,
  Send as w,
  Shield as x,
  Soup as y,
  ArrowLeft as yt,
  MessageSquare as z,
};
