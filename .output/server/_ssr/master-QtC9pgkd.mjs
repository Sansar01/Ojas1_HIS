import { n as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { N as Percent, d as UserCog, it as Cog, ot as ClipboardList, t as X, x as Shield } from "../_libs/lucide-react.mjs";
import { t as AppLayout } from "./AppLayout-Ch-U9iwL.mjs";
import { n as Section } from "./Kpi-DY4t6Vll.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/master-QtC9pgkd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var cards = [
	{
		key: "doctor",
		i: UserCog,
		t: "Doctor Management",
		s: "Manage doctors & slots",
		c: "28 Doctors",
		tone: "text-primary bg-primary/10"
	},
	{
		key: "panel",
		i: Shield,
		t: "Panel Management",
		s: "Insurance & Corporate",
		c: "16 Panels",
		tone: "text-info bg-info/10"
	},
	{
		key: "item",
		i: ClipboardList,
		t: "Item Management",
		s: "Lab, Radio, Pharmacy",
		c: "1,248 Items",
		tone: "text-success bg-success/10"
	},
	{
		key: "rate",
		i: Percent,
		t: "Rate Management",
		s: "Insurance & Corporate Rates",
		c: "563 Rate Plans",
		tone: "text-warning-foreground bg-warning/20"
	},
	{
		key: "config",
		i: Cog,
		t: "Configuration",
		s: "General & System Settings",
		c: "24 Settings",
		tone: "text-destructive bg-destructive/10"
	}
];
var labItems = [
	[
		"LAB-1001",
		"Complete Blood Count (CBC)",
		"Hematology",
		"Each",
		300
	],
	[
		"LAB-1002",
		"Lipid Profile",
		"Biochemistry",
		"Each",
		800
	],
	[
		"LAB-1003",
		"Liver Function Test (LFT)",
		"Biochemistry",
		"Each",
		700
	],
	[
		"LAB-1004",
		"Thyroid Profile (T3, T4, TSH)",
		"Hormone",
		"Each",
		900
	],
	[
		"LAB-1005",
		"HbA1c",
		"Diabetes",
		"Each",
		600
	]
];
var panels = [
	[
		"Star Health Insurance",
		"Insurance",
		"Star Health",
		"Active"
	],
	[
		"Aditya Birla Health",
		"Insurance",
		"Aditya Birla",
		"Active"
	],
	[
		"HDFC ERGO General",
		"Insurance",
		"HDFC ERGO",
		"Active"
	],
	[
		"Reliance General",
		"Insurance",
		"Reliance",
		"Active"
	],
	[
		"Max Bupa Health",
		"Insurance",
		"Max Bupa",
		"Inactive"
	]
];
function Master() {
	const navigate = useNavigate();
	const [panelOpen, setPanelOpen] = (0, import_react.useState)(false);
	const [itemType, setItemType] = (0, import_react.useState)("");
	const [itemFormOpen, setItemFormOpen] = (0, import_react.useState)(null);
	const [globalOpen, setGlobalOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: "Master Configuration"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Manage all master data and system configuration"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-6",
			children: cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-left bg-card border rounded-xl p-4 hover:border-primary transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						if (c.key === "panel") setPanelOpen(true);
						if (c.key === "config") setGlobalOpen(true);
						if (c.key === "doctor") {
							try {
								localStorage.setItem("um_userType", "doctor");
							} catch {}
							navigate({ to: "/user-management" });
						}
					},
					className: "text-left w-full cursor-pointer",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `w-10 h-10 rounded-lg ${c.tone} flex items-center justify-center mb-3`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.i, { className: "w-5 h-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold text-sm",
							children: c.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: c.s
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-bold mt-2",
							children: c.c
						})
					]
				}), c.key === "item" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: itemType,
					onChange: (e) => {
						const v = e.target.value;
						setItemType(v);
						if (v) setItemFormOpen(v);
					},
					className: "mt-3 w-full h-8 px-2 border rounded text-xs bg-background focus:outline-none focus:ring-1 focus:ring-primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Select Item Type…"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "lab",
							children: "Laboratory"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "radiology",
							children: "Radiology"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "medical",
							children: "Medical Items"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "others",
							children: "Others Item"
						})
					]
				})]
			}, c.t))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Lab Items",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "text-xs text-primary",
					children: "+ Add Item"
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "text-left text-xs text-muted-foreground border-b",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-2",
								children: "Code"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Name" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Category" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Unit" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-right",
								children: "Rate"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Status" })
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: labItems.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b last:border-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2.5 font-mono text-xs",
								children: row[0]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: row[1] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "text-muted-foreground",
								children: row[2]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "text-muted-foreground",
								children: row[3]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "text-right font-semibold",
								children: ["₹", row[4]]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] px-1.5 py-0.5 bg-success/15 text-success rounded",
								children: "Active"
							}) })
						]
					}, row[0])) })]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Panel / Insurance Registration",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "text-xs text-primary",
					onClick: () => setPanelOpen(true),
					children: "+ Add Panel"
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "text-left text-xs text-muted-foreground border-b",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-2",
								children: "Panel"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Type" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Insurer" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Status" })
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: panels.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b last:border-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2.5 font-medium",
								children: p[0]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "text-muted-foreground",
								children: p[1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "text-muted-foreground",
								children: p[2]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-[10px] px-1.5 py-0.5 rounded ${p[3] === "Active" ? "bg-success/15 text-success" : "bg-destructive/10 text-destructive"}`,
								children: p[3]
							}) })
						]
					}, p[0])) })]
				})
			})]
		}),
		panelOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelMasterModal, { onClose: () => setPanelOpen(false) }),
		(itemFormOpen === "lab" || itemFormOpen === "radiology") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManageInvestigationsModal, {
			kind: itemFormOpen,
			onClose: () => {
				setItemFormOpen(null);
				setItemType("");
			}
		}),
		itemFormOpen === "medical" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MedicalItemModal, { onClose: () => {
			setItemFormOpen(null);
			setItemType("");
		} }),
		itemFormOpen === "others" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OthersItemMasterModal, { onClose: () => {
			setItemFormOpen(null);
			setItemType("");
		} }),
		globalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalMasterModal, { onClose: () => setGlobalOpen(false) })
	] });
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[130px_10px_1fr] items-center gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "text-sm text-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-muted-foreground",
				children: ":"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children })
		]
	});
}
var inputCls = "w-full h-8 px-2 border rounded text-sm bg-background focus:outline-none focus:ring-1 focus:ring-primary";
function PanelMasterModal({ onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 bg-black/50 flex items-start justify-center overflow-y-auto p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-card rounded-lg shadow-xl w-full max-w-6xl my-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-4 py-2.5 border-b bg-muted/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-bold text-center flex-1",
						children: "Panel Master"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "p-1 hover:bg-muted rounded",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-4 py-2 bg-info/10 border-b",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold text-info",
						children: "Panel Details"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "p-5 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3",
					onSubmit: (e) => {
						e.preventDefault();
						onClose();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Panel Name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: `${inputCls} border-destructive` })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Group Type",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: inputCls,
								defaultValue: "INSURANCE",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "INSURANCE" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "CORPORATE" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "GOVERNMENT" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "TPA" })
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Contact Person",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: inputCls })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Address1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: inputCls })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Address2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: inputCls })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Contact No.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: inputCls })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone No.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: inputCls })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email ID",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								className: inputCls
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Fax No.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: inputCls })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Valid From",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "date",
								className: inputCls,
								defaultValue: "2026-07-15"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Valid To",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "date",
								className: inputCls,
								defaultValue: "2026-07-15"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Payment Mode",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: `${inputCls} border-destructive`,
								defaultValue: "",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										disabled: true,
										children: "Select"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Cash" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Credit" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Cheque" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Online" })
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Refer Rate(OPD)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: inputCls,
								defaultValue: "CASH",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "CASH" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "PANEL" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Refer Rate(IPD)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: inputCls,
								defaultValue: "CASH",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "CASH" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "PANEL" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Credit Limits",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								className: inputCls
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Rate Type",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox" }), " SELF (OPD)"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox" }), " SELF (IPD)"]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Show PrintOut",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "printout",
										defaultChecked: true
									}), " Yes"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "printout"
									}), " No"]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Hide Rate",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "hiderate"
									}), " Yes"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "hiderate",
										defaultChecked: true
									}), " No"]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Co-Payment On",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "copayon",
										defaultChecked: true
									}), " On Bill"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "copayon"
									}), " On Service"]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Co-Payment In %",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								className: inputCls
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Rate Currency",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: inputCls,
								defaultValue: "TZS",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "TZS" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "USD" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "INR" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "EUR" })
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Panel Type",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "paneltype",
										defaultChecked: true
									}), " Credit"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "paneltype"
									}), " Cash"]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Bill Currency",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: inputCls,
								defaultValue: "TZS",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "TZS" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "USD" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "INR" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "EUR" })
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "CurrencyConv.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								defaultValue: 1,
								className: inputCls
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Cover Note",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "covernote",
										defaultChecked: true
									}), " No"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "covernote"
									}), " Yes"]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Panel Amount",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								className: inputCls
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Diet Type",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "diettype",
										defaultChecked: true
									}), " Normal"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "diettype"
									}), " Private"]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Is Smart Card",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "smartcard",
										defaultChecked: true
									}), " No"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "smartcard"
									}), " Yes"]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Encounter",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Is USD Based",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "USD Factor",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								className: `${inputCls} bg-muted`,
								disabled: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "IsValidation(ZHSF)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "md:col-span-2" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 pt-3 border-t mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: "Note"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mx-2",
										children: ":"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-destructive font-semibold",
										children: "Co-Payment Payable By Patient."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: "Note"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mx-2",
										children: ":"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-destructive font-semibold",
										children: "Enter the USD ($) conversion factor for 1 US Dollar cost in TZS"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-3 flex justify-center gap-3 pt-4 border-t mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "px-8 py-2 bg-primary text-primary-foreground rounded font-semibold hover:bg-primary/90",
								children: "Save"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: onClose,
								className: "px-6 py-2 border rounded font-semibold hover:bg-muted",
								children: "Cancel"
							})]
						})
					]
				})
			]
		})
	});
}
var LAB_INVESTIGATIONS = [
	"24hrs Urine Protein",
	"Acid Fast Bacilli Smear Sputum",
	"Adenosine deaminase (ADA)",
	"Adrenocorticotropic Hormone",
	"AFB Smear By ZN Stain",
	"AFP",
	"AG RATIO",
	"ALAT- GPT",
	"Albumin",
	"Alkaline Phosphatase",
	"Amylase-Pancreatic",
	"Amylase-Total",
	"ANCA",
	"ANEMIA PROFILE",
	"anti mullerian hormone",
	"Anti Streptolysin O (ASO)",
	"Anti-CCP/Citrullinated peptide",
	"Antiphospholipid Antibodies",
	"APTT"
];
var RAD_INVESTIGATIONS = [
	"X-Ray Chest PA",
	"X-Ray Abdomen",
	"X-Ray Skull",
	"X-Ray Spine (Lumbar)",
	"X-Ray Pelvis",
	"USG Abdomen",
	"USG Pelvis",
	"USG Obstetric",
	"CT Brain (Plain)",
	"CT Chest",
	"CT Abdomen",
	"MRI Brain",
	"MRI Spine",
	"MRI Knee",
	"Mammography",
	"DEXA Scan",
	"Doppler Carotid",
	"Doppler Renal",
	"ECHO 2D"
];
function ManageInvestigationsModal({ kind, onClose }) {
	const list = kind === "lab" ? LAB_INVESTIGATIONS : RAD_INVESTIGATIONS;
	const title = kind === "lab" ? "Manage Investigations — Laboratory" : "Manage Investigations — Radiology";
	const defaultSubDept = kind === "lab" ? "BIOCHEMISTRY" : "RADIOLOGY";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 bg-black/50 flex items-start justify-center overflow-y-auto p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-card rounded-lg shadow-xl w-full max-w-7xl my-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-4 py-2.5 border-b bg-primary/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-bold",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "p-1 hover:bg-muted rounded",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 flex items-center gap-6 border-b",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox" }), " New Investigation"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Department",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: inputCls,
							defaultValue: "ALL",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "ALL" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: defaultSubDept })]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border rounded p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold mb-2",
								children: "Investigations"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-xs mb-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "radio",
											name: "srch"
										}), " Code"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "radio",
											name: "srch",
											defaultChecked: true
										}), " First Name"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "radio",
											name: "srch"
										}), " InBetween"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: `${inputCls} mb-2`,
								placeholder: "Search..."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "text-xs h-72 overflow-y-auto border rounded p-2 space-y-1 bg-background",
								children: list.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "hover:bg-muted px-1 py-0.5 cursor-pointer",
									children: ["# ", n]
								}, n))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "border rounded p-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3",
						onSubmit: (e) => {
							e.preventDefault();
							onClose();
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "md:col-span-2 text-sm font-semibold text-info",
								children: "Detail"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Sub.Dept",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									className: inputCls,
									defaultValue: defaultSubDept,
									children: kind === "lab" ? [
										"BIOCHEMISTRY",
										"HEMATOLOGY",
										"MICROBIOLOGY",
										"SEROLOGY",
										"HORMONE"
									].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s)) : [
										"RADIOLOGY",
										"CT SCAN",
										"MRI",
										"USG",
										"MAMMOGRAPHY"
									].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Investigation",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: `${inputCls} border-destructive` })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Description",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: inputCls })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Method",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: inputCls })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Gender",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: inputCls,
									defaultValue: "Both",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Both" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Male" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Female" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Report Type",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: inputCls,
									defaultValue: "Path Numeric",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Path Numeric" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Path Descriptive" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Radiology" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Type",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: inputCls,
									defaultValue: "Sample Required",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Sample Required" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "No Sample" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Print Sequence",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									className: inputCls
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Sample Type",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: `${inputCls} border-destructive`,
									defaultValue: "",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Select"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Blood" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Urine" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Serum" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Sample Con.",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: inputCls,
									defaultValue: "Normal",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Normal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Fasting" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Department",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: `${inputCls} border-destructive`,
									defaultValue: "",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										disabled: true,
										children: "Select"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: defaultSubDept })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "IsDiscountable",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "radio",
											name: "isdisc"
										}), " Yes"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "radio",
											name: "isdisc",
											defaultChecked: true
										}), " No"]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "LIS Test Code",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: inputCls })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Rate Editable",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "radio",
											name: "rateedit"
										}), " Yes"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "radio",
											name: "rateedit",
											defaultChecked: true
										}), " No"]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Exam Type",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "radio",
											name: "examtype",
											defaultChecked: true
										}), " General"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "radio",
											name: "examtype"
										}), " Obstetrics"]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "TAT Time & Type",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										className: inputCls
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: inputCls,
										defaultValue: "",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												disabled: true,
												children: "Select"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Minutes" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Hours" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Days" })
										]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-2 pt-2 border-t mt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-semibold mb-2",
									children: "Other Information"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 md:grid-cols-3 gap-2 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												defaultChecked: true
											}), " Show Name in Patient Report"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												defaultChecked: true
											}), " Show in Online Report"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox" }), " Print Separate"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox" }), " PrintSampleName"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox" }), " IsCulture"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox" }), " Urgent"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												defaultChecked: true
											}), " Active"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox" }), " Outsource"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox" }), " Profile Test"]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-2 flex justify-center gap-3 pt-3 border-t mt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "px-8 py-2 bg-primary text-primary-foreground rounded font-semibold hover:bg-primary/90",
									children: "Save"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: onClose,
									className: "px-6 py-2 border rounded font-semibold hover:bg-muted",
									children: "Cancel"
								})]
							})
						]
					})]
				})
			]
		})
	});
}
function MedicalItemModal({ onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 bg-black/50 flex items-start justify-center overflow-y-auto p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-card rounded-lg shadow-xl w-full max-w-7xl my-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-4 py-2.5 border-b bg-primary/10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-base font-bold",
					children: "Medical Item Master"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "p-1 hover:bg-muted rounded",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "p-5 space-y-4",
				onSubmit: (e) => {
					e.preventDefault();
					onClose();
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3 pb-3 border-b",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Category",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: inputCls,
									defaultValue: "",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Select"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "TABLET" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "SYRUP" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "INJECTION" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "CAPSULE" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Groups",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: inputCls,
									defaultValue: "ALL",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "ALL" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "ANTIBIOTIC" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "ANALGESIC" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Search By Name",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: `${inputCls} border-destructive` })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Item Name",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: `${inputCls} border-destructive` })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Item Code",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: inputCls })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Description",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: inputCls })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Group",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: `${inputCls} border-destructive`,
									defaultValue: "",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Select"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "ANTIBIOTIC" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "ANALGESIC" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Manufacturer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: `${inputCls} border-destructive`,
									defaultValue: "",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Select"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Cipla" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Sun Pharma" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Dr. Reddy's" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Rack",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: inputCls })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Shelf",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: inputCls })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Min. Level",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									className: inputCls
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Max. Level",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									className: inputCls
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Reorder Level",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									className: inputCls
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Reorder Qty.",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									className: inputCls
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Purchase Unit",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: `${inputCls} border-destructive`,
									defaultValue: "",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Select"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Box" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Strip" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Bottle" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Sale Unit",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: `${inputCls} border-destructive`,
									defaultValue: "",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Select"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Tablet" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "ml" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Vial" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Issue Factor",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									className: `${inputCls} border-destructive`
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Drug Category",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: inputCls,
									defaultValue: "",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Select"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Schedule H" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Schedule H1" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "OTC" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Item Type",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: inputCls,
									defaultValue: "",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Select"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Medicine" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Consumable" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Surgical" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Default Pur.VAT %",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									className: inputCls
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Sale VAT Type",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: inputCls,
									defaultValue: "",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Select"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Exclusive" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Inclusive" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Sale VAT %",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									className: inputCls
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Pur. VAT Line",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: inputCls,
									defaultValue: "",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Select"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Line 1" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Line 2" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Pur.VAT Type",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: inputCls,
									defaultValue: "",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Select"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Exclusive" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Inclusive" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Stock Type",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: inputCls,
									defaultValue: "Stockable",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Stockable" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Non-Stockable" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Expirable",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Is CSSD",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Is Laundry",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Is Dose & Unit Required",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Item Dose",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: inputCls })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Unit",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: inputCls,
									defaultValue: "",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "SELECT"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "mg" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "ml" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "g" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Med.Department",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: `${inputCls} border-destructive`,
									defaultValue: "",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Select"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Pharmacy" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "OT" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Ward" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Is ZHSF PriAuthRequired",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "ZHSF ItemCode (District)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: inputCls })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "ZHSF ItemCode (Regional)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: inputCls })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Essential Medi.",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Vaccine Medi.",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-center gap-3 pt-3 border-t",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "px-8 py-2 bg-primary text-primary-foreground rounded font-semibold hover:bg-primary/90",
							children: "Save"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							className: "px-6 py-2 border rounded font-semibold hover:bg-muted",
							children: "Cancel"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-center gap-6 text-sm text-primary underline",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								children: "Create Drug Category"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								children: "Create New Manufacturer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								children: "Refresh Manufacturer List"
							})
						]
					})
				]
			})]
		})
	});
}
function OthersItemMasterModal({ onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 bg-black/50 flex items-start justify-center overflow-y-auto p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-card rounded-lg shadow-xl w-full max-w-6xl my-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-4 py-2.5 border-b bg-primary/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-bold",
						children: "Item Master"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "p-1 hover:bg-muted rounded",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-center gap-6 py-2 border-b text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "radio",
							name: "itemmode",
							defaultChecked: true
						}), " New"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "radio",
							name: "itemmode"
						}), " Edit"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "p-5 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3",
					onSubmit: (e) => {
						e.preventDefault();
						onClose();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Category",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: inputCls,
								defaultValue: "ADMINISTRATIVE CHARGES",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "ADMINISTRATIVE CHARGES" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "PROCEDURE" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "WARD CHARGES" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "SERVICE" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "MISC" })
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Sub Category",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: inputCls,
								defaultValue: "",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										disabled: true,
										children: "Select"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Registration" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Consultation" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Admission" })
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Item Name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: `${inputCls} border-destructive` })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "CPT Code",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: inputCls })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Department",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: `${inputCls} border-destructive`,
								defaultValue: "",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										disabled: true,
										children: "Select"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "OPD" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "IPD" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Ward" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "OT" })
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Rate Editable",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "oratedit"
									}), " Yes"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "oratedit",
										defaultChecked: true
									}), " No"]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Is Discountable",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "oisdisc"
									}), " Yes"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "oisdisc",
										defaultChecked: true
									}), " No"]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Measur Unit",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls,
								defaultValue: "1"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Measur Qty",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls,
								defaultValue: "1"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "IsShare Ward",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "oshareward"
									}), " Yes"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "oshareward",
										defaultChecked: true
									}), " No"]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-3 flex justify-center gap-3 pt-4 border-t mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "px-8 py-2 bg-primary text-primary-foreground rounded font-semibold hover:bg-primary/90",
								children: "Save"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: onClose,
								className: "px-6 py-2 border rounded font-semibold hover:bg-muted",
								children: "Cancel"
							})]
						})
					]
				})
			]
		})
	});
}
var MASTER_GROUPS = [
	{
		group: "Panel / Billing",
		items: [
			{
				key: "groupType",
				label: "Group Type",
				seed: [
					"INSURANCE",
					"CORPORATE",
					"GOVERNMENT",
					"TPA"
				]
			},
			{
				key: "paymentMode",
				label: "Payment Mode",
				seed: [
					"Cash",
					"Credit",
					"Cheque",
					"Online",
					"UPI",
					"Card"
				]
			},
			{
				key: "rateType",
				label: "Rate Type",
				seed: [
					"SELF",
					"PANEL",
					"CASH"
				]
			},
			{
				key: "currency",
				label: "Currency",
				seed: [
					"INR",
					"USD",
					"EUR",
					"TZS",
					"GBP"
				]
			},
			{
				key: "panelType",
				label: "Panel Type",
				seed: ["Credit", "Cash"]
			},
			{
				key: "taxType",
				label: "Tax Type",
				seed: [
					"GST 5%",
					"GST 12%",
					"GST 18%",
					"Exempt"
				]
			},
			{
				key: "discountReason",
				label: "Discount Reason",
				seed: [
					"Senior Citizen",
					"Staff",
					"Camp",
					"Goodwill"
				]
			},
			{
				key: "refundReason",
				label: "Refund Reason",
				seed: [
					"Duplicate Payment",
					"Cancelled Service",
					"Overcharge"
				]
			},
			{
				key: "cancellationReason",
				label: "Cancellation Reason",
				seed: [
					"Patient No-Show",
					"Doctor Unavailable",
					"Emergency"
				]
			}
		]
	},
	{
		group: "Clinical",
		items: [
			{
				key: "department",
				label: "Department",
				seed: [
					"Cardiology",
					"Neurology",
					"Orthopedics",
					"Pediatrics",
					"General Medicine"
				]
			},
			{
				key: "subDepartment",
				label: "Sub Department",
				seed: [
					"Biochemistry",
					"Hematology",
					"Microbiology",
					"Radiology",
					"Pathology"
				]
			},
			{
				key: "consultationType",
				label: "Consultation Type",
				seed: [
					"New",
					"Follow-up",
					"Tele",
					"Emergency"
				]
			},
			{
				key: "diagnosisType",
				label: "Diagnosis Type",
				seed: [
					"Provisional",
					"Final",
					"Differential"
				]
			},
			{
				key: "diet",
				label: "Diet Type",
				seed: [
					"Normal",
					"Diabetic",
					"Cardiac",
					"Renal",
					"Soft"
				]
			},
			{
				key: "ward",
				label: "Ward",
				seed: [
					"General",
					"Semi-Private",
					"Private",
					"Deluxe",
					"ICU"
				]
			},
			{
				key: "roomType",
				label: "Room Type",
				seed: [
					"Single",
					"Double",
					"Sharing",
					"Suite"
				]
			},
			{
				key: "appointmentStatus",
				label: "Appointment Status",
				seed: [
					"Scheduled",
					"Checked-In",
					"Completed",
					"Cancelled",
					"No-Show"
				]
			}
		]
	},
	{
		group: "Items / Pharmacy",
		items: [
			{
				key: "itemCategory",
				label: "Item Category",
				seed: [
					"Tablet",
					"Syrup",
					"Injection",
					"Surgical",
					"Consumable"
				]
			},
			{
				key: "itemSubCategory",
				label: "Item Sub Category",
				seed: [
					"Antibiotic",
					"Analgesic",
					"Antipyretic",
					"Vitamin"
				]
			},
			{
				key: "uom",
				label: "Unit of Measure",
				seed: [
					"Each",
					"Strip",
					"Bottle",
					"Vial",
					"Box",
					"ml",
					"mg"
				]
			},
			{
				key: "manufacturer",
				label: "Manufacturer",
				seed: [
					"Cipla",
					"Sun Pharma",
					"Dr. Reddy's",
					"Abbott",
					"GSK"
				]
			},
			{
				key: "stockType",
				label: "Stock Type",
				seed: [
					"Regular",
					"Cold Chain",
					"Narcotic",
					"Consignment"
				]
			}
		]
	},
	{
		group: "Patient",
		items: [
			{
				key: "title",
				label: "Title",
				seed: [
					"Mr.",
					"Mrs.",
					"Ms.",
					"Dr.",
					"Master",
					"Baby"
				]
			},
			{
				key: "gender",
				label: "Gender",
				seed: [
					"Male",
					"Female",
					"Other"
				]
			},
			{
				key: "bloodGroup",
				label: "Blood Group",
				seed: [
					"A+",
					"A-",
					"B+",
					"B-",
					"O+",
					"O-",
					"AB+",
					"AB-"
				]
			},
			{
				key: "maritalStatus",
				label: "Marital Status",
				seed: [
					"Single",
					"Married",
					"Divorced",
					"Widowed"
				]
			},
			{
				key: "idProof",
				label: "ID Proof",
				seed: [
					"Aadhaar",
					"PAN",
					"Passport",
					"Driving License",
					"Voter ID"
				]
			},
			{
				key: "relationship",
				label: "Relationship",
				seed: [
					"Self",
					"Spouse",
					"Father",
					"Mother",
					"Son",
					"Daughter",
					"Sibling"
				]
			}
		]
	},
	{
		group: "Staff / Users",
		items: [
			{
				key: "specialization",
				label: "Specialization",
				seed: [
					"MBBS",
					"MD",
					"MS",
					"DM",
					"MCh"
				]
			},
			{
				key: "qualification",
				label: "Qualification",
				seed: [
					"MBBS",
					"MD Medicine",
					"MS Surgery",
					"BDS",
					"BAMS"
				]
			},
			{
				key: "designation",
				label: "Designation",
				seed: [
					"Consultant",
					"Senior Resident",
					"Junior Resident",
					"Nurse",
					"Technician"
				]
			},
			{
				key: "role",
				label: "User Role",
				seed: [
					"Admin",
					"Doctor",
					"Nurse",
					"Receptionist",
					"Pharmacist",
					"Lab Tech",
					"Cashier"
				]
			},
			{
				key: "shift",
				label: "Shift",
				seed: [
					"Morning",
					"Evening",
					"Night",
					"General"
				]
			}
		]
	}
];
function GlobalMasterModal({ onClose }) {
	const [active, setActive] = (0, import_react.useState)("groupType");
	const [data, setData] = (0, import_react.useState)(() => {
		const d = {};
		MASTER_GROUPS.forEach((g) => g.items.forEach((i) => {
			d[i.key] = [...i.seed];
		}));
		return d;
	});
	const [newVal, setNewVal] = (0, import_react.useState)("");
	const [search, setSearch] = (0, import_react.useState)("");
	const activeMeta = MASTER_GROUPS.flatMap((g) => g.items).find((i) => i.key === active);
	const values = (data[active] || []).filter((v) => v.toLowerCase().includes(search.toLowerCase()));
	const add = () => {
		const v = newVal.trim();
		if (!v) return;
		setData((d) => ({
			...d,
			[active]: [...d[active] || [], v]
		}));
		setNewVal("");
	};
	const remove = (idx) => {
		setData((d) => ({
			...d,
			[active]: (d[active] || []).filter((_, i) => i !== idx)
		}));
	};
	const edit = (idx, v) => {
		setData((d) => ({
			...d,
			[active]: (d[active] || []).map((x, i) => i === idx ? v : x)
		}));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 bg-black/50 flex items-start justify-center overflow-y-auto p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-card rounded-lg shadow-xl w-full max-w-6xl my-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-4 py-2.5 border-b bg-primary/10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-base font-bold",
					children: "Global Master Configuration"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Manage all dropdown lists used across the application from a single screen"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "p-1 hover:bg-muted rounded",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-[260px_1fr] h-[70vh]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-r overflow-y-auto p-2 bg-muted/30",
					children: MASTER_GROUPS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-wide text-muted-foreground px-2 py-1 font-semibold",
							children: g.group
						}), g.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								setActive(i.key);
								setSearch("");
								setNewVal("");
							},
							className: `w-full text-left px-2 py-1.5 rounded text-sm flex justify-between items-center ${active === i.key ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: i.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-[10px] px-1.5 rounded ${active === i.key ? "bg-primary-foreground/20" : "bg-muted-foreground/10 text-muted-foreground"}`,
								children: (data[i.key] || []).length
							})]
						}, i.key))]
					}, g.group))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-4 py-3 border-b",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold",
								children: activeMeta.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									"Add, edit or remove options that appear in the \"",
									activeMeta.label,
									"\" dropdown."
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-4 py-3 border-b flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: newVal,
									onChange: (e) => setNewVal(e.target.value),
									onKeyDown: (e) => {
										if (e.key === "Enter") {
											e.preventDefault();
											add();
										}
									},
									placeholder: `Add new ${activeMeta.label}...`,
									className: `${inputCls} flex-1 min-w-[200px]`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: add,
									className: "h-8 px-4 bg-primary text-primary-foreground rounded text-sm font-semibold hover:bg-primary/90",
									children: "+ Add"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: search,
									onChange: (e) => setSearch(e.target.value),
									placeholder: "Search...",
									className: `${inputCls} w-48`
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 overflow-y-auto p-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "text-left text-xs text-muted-foreground border-b",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "pb-2 w-12",
											children: "#"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Value" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "w-24 text-right",
											children: "Action"
										})
									]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [values.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: 3,
									className: "py-8 text-center text-muted-foreground text-sm",
									children: "No entries. Add one above."
								}) }), values.map((v, i) => {
									const realIdx = (data[active] || []).indexOf(v);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-b last:border-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-2 text-muted-foreground",
												children: i + 1
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: v,
												onChange: (e) => edit(realIdx, e.target.value),
												className: "w-full h-8 px-2 border rounded bg-background focus:outline-none focus:ring-1 focus:ring-primary"
											}) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "text-right",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => remove(realIdx),
													className: "text-xs px-2 py-1 border border-destructive/30 text-destructive rounded hover:bg-destructive/10",
													children: "Delete"
												})
											})
										]
									}, `${v}-${i}`);
								})] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t px-4 py-3 flex justify-end gap-2 bg-muted/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: onClose,
								className: "px-4 py-1.5 border rounded text-sm hover:bg-muted",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: onClose,
								className: "px-6 py-1.5 bg-primary text-primary-foreground rounded text-sm font-semibold hover:bg-primary/90",
								children: "Save Changes"
							})]
						})
					]
				})]
			})]
		})
	});
}
//#endregion
export { Master as component };
