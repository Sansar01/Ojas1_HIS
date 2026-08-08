import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { B as MessageCircle, J as IdCard, T as Search, V as Mail, Y as History, _ as Stethoscope, ht as Calendar, j as Phone, k as Printer, l as User, nt as Droplet } from "../_libs/lucide-react.mjs";
import { t as AppLayout } from "./AppLayout-TYH-YrXk.mjs";
import { n as Section } from "./Kpi-DY4t6Vll.mjs";
import { t as useApiQuery } from "./useApiResource-CHwVuAPQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/billing-BcWsa2N-.js
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		cat: "Consultation",
		n: "Consultation Fee — Dr. Arjun Mehta",
		r: 800,
		q: 1
	},
	{
		cat: "Investigations",
		n: "ECG",
		r: 500,
		q: 1
	},
	{
		cat: "Investigations",
		n: "2D Echo",
		r: 2e3,
		q: 1
	},
	{
		cat: "Investigations",
		n: "CBC (Complete Blood Count)",
		r: 300,
		q: 1
	},
	{
		cat: "Medications",
		n: "Ecosprin AV 75 mg",
		r: 30,
		q: 10
	},
	{
		cat: "Medications",
		n: "Atorva 10 mg",
		r: 15,
		q: 10
	},
	{
		cat: "Medications",
		n: "Metformin 500 mg",
		r: 8,
		q: 10
	}
];
function Billing() {
	const { data, isLoading, error } = useApiQuery(["billing-summary"], "/billing/summary", { staleTime: 3e4 });
	const total = items.reduce((s, i) => s + i.r * i.q, 0);
	const discount = data?.billSummary?.discount ?? 301.5;
	const net = (data?.billSummary?.total ?? total) - discount;
	const insurance = data?.billSummary?.insurancePaid ?? 3445.65;
	const payable = data?.billSummary?.payableByPatient ?? 382.85;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-4 flex items-center justify-between",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: "OPD & Pharmacy Billing"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Selected patient details"
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6 rounded-xl border bg-card p-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg",
					children: "RP"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[10px] uppercase text-muted-foreground flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "w-3 h-3" }), "Patient"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold text-sm",
								children: "Ramesh Patel"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: "Male · 52 yrs"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[10px] uppercase text-muted-foreground flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdCard, { className: "w-3 h-3" }), "UHID / MRN"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-sm",
								children: "A-1045"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: "OPD No: OPD-2025-3421"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[10px] uppercase text-muted-foreground flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-3 h-3" }), "Contact"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm",
								children: "+91 98765 43210"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: "Ahmedabad, GJ"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[10px] uppercase text-muted-foreground flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplet, { className: "w-3 h-3" }), "Blood / Allergy"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm",
								children: "B+ve"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-destructive",
								children: "Penicillin"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[10px] uppercase text-muted-foreground flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, { className: "w-3 h-3" }), "Consultant"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm",
								children: "Dr. Arjun Mehta"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: "Cardiology"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[10px] uppercase text-muted-foreground flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-3 h-3" }), "Visit Date"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm",
								children: "20 May 2025"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-success",
								children: "Insurance · Star Health"
							})
						] })
					]
				})]
			})
		}),
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive",
			children: "Billing summary could not be loaded. Using fallback values."
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "Today's Billing Queue",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1 text-xs mb-3 border-b",
						children: [
							"All 24",
							"Pending 16",
							"Billing 5",
							"Done 3"
						].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `px-2 py-1 border-b-2 ${i === 0 ? "border-primary text-primary" : "border-transparent text-muted-foreground"}`,
							children: t
						}, t))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [[
							{
								id: "A-1045",
								n: "Ramesh Patel",
								d: "Cardiology",
								a: 3250,
								s: "Billing",
								active: true
							},
							{
								id: "A-1046",
								n: "Sunita Devi",
								d: "General Med",
								a: 1850
							},
							{
								id: "A-1047",
								n: "Imran Khan",
								d: "Orthopedics",
								a: 5420
							},
							{
								id: "A-1048",
								n: "Meena Kumari",
								d: "Gynecology",
								a: 2950
							},
							{
								id: "A-1049",
								n: "Ravi Verma",
								d: "Diabetes",
								a: 1200
							}
						].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `p-3 rounded-lg border ${p.active ? "border-primary bg-primary/5" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-[10px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono px-1.5 py-0.5 bg-muted rounded",
										children: p.id
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-warning-foreground",
										children: p.s ?? "Pending"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-sm mt-1",
									children: p.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: p.d
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-sm font-bold mt-1",
									children: ["₹", p.a.toLocaleString()]
								})
							]
						}, p.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "w-full py-2 border-2 border-dashed rounded-lg text-sm text-primary",
							children: "+ Add New Bill"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: "Bill Items",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 grid grid-cols-1 md:grid-cols-12 gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: "md:col-span-3 border rounded-lg px-2 py-2 text-sm bg-background",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "All Categories"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Consultation" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Investigations" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Medications" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Procedures" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Consumables" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: "md:col-span-3 border rounded-lg px-2 py-2 text-sm bg-background",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "All Sub-categories"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Cardiology" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Radiology" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Pathology" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Tablet" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Injection" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Syrup" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "md:col-span-6 relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-4 h-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										placeholder: "Search item, medicine, test or service…",
										className: "w-full border rounded-lg pl-8 pr-3 py-2 text-sm bg-background"
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "text-left text-xs text-muted-foreground border-b",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "pb-2",
										children: "Item"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Rate" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Qty" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-right",
										children: "Amount"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b last:border-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "py-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] text-muted-foreground uppercase",
											children: it.cat
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-medium",
											children: it.n
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: it.r.toFixed(2) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: it.q }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "text-right font-semibold",
										children: ["₹", (it.r * it.q).toFixed(2)]
									})
								]
							}, i)) })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "p-3 rounded-lg border flex flex-col items-center gap-1 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "w-4 h-4" }), "Print Bill"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "p-3 rounded-lg border flex flex-col items-center gap-1 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-4 h-4" }), "Email / SMS"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "p-3 rounded-lg border flex flex-col items-center gap-1 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-4 h-4" }), "WhatsApp"]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "Bill Summary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Total"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-semibold",
										children: ["₹", total.toFixed(2)]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-destructive",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Discount (5%)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["- ₹", discount.toFixed(2)] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tax (GST 0%)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "₹0.00" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between font-bold text-lg pt-2 border-t",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Net Amount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-primary",
										children: ["₹", net.toFixed(2)]
									})]
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: "Insurance & Payment",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-semibold",
										children: "Star Health Insurance"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: "Policy: 123456789012 · Cashless"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between pt-2 border-t",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Approved Limit"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "₹10,000" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Available"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "₹8,000" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-warning-foreground pt-2 border-t",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Payable by Patient" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-bold",
											children: ["₹", payable.toFixed(2)]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-success",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Insurance Paid" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-bold",
											children: ["₹", insurance.toFixed(2)]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "w-full mt-4 py-2.5 bg-success text-success-foreground rounded-lg font-medium text-sm",
								children: "Collect Payment (F9)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "w-full mt-2 py-2 border rounded-lg text-sm flex items-center justify-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "w-4 h-4" }), "Bill History"]
							})
						]
					})]
				})
			]
		})
	] });
}
//#endregion
export { Billing as component };
