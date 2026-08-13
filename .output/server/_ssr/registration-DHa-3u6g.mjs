import { n as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { J as IdCard, O as QrCode, Q as FingerprintPattern, at as Clock, c as Users, lt as CircleCheck, mt as Camera, u as UserPlus } from "../_libs/lucide-react.mjs";
import { t as AppLayout } from "./AppLayout-Ch-U9iwL.mjs";
import { n as Section, t as Kpi } from "./Kpi-DY4t6Vll.mjs";
import { t as useApiQuery } from "./useApiResource-CCm4w06O.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/registration-DHa-3u6g.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var recent = [
	[
		"OPD123460",
		"Ravi Verma",
		"60Y Male",
		"10:32 AM",
		"Diabetes OPD"
	],
	[
		"OPD123459",
		"Meena Kumari",
		"28Y Female",
		"10:18 AM",
		"Gynecology"
	],
	[
		"OPD123458",
		"Imran Khan",
		"32Y Male",
		"10:04 AM",
		"Orthopedics"
	],
	[
		"OPD123457",
		"Sunita Devi",
		"45Y Female",
		"09:52 AM",
		"General Med"
	],
	[
		"OPD123456",
		"Ramesh Patel",
		"58Y Male",
		"09:40 AM",
		"Cardiology"
	]
];
function Registration() {
	const [visitType, setVisitType] = (0, import_react.useState)("new");
	const [payType, setPayType] = (0, import_react.useState)("self");
	const { data, isLoading, error } = useApiQuery(["registration-metrics"], "/registration/metrics", { staleTime: 3e4 });
	const metrics = data?.registrationMetrics;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: "Patient Registration"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Register new patient or search existing UHID / ABHA"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "px-3 py-2 rounded-lg border flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "w-4 h-4" }), " Scan ABHA"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "px-3 py-2 rounded-lg border flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FingerprintPattern, { className: "w-4 h-4" }), " Biometric"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "px-3 py-2 rounded-lg border flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdCard, { className: "w-4 h-4" }), " Aadhaar"]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					icon: UserPlus,
					label: "Registered Today",
					value: isLoading ? "—" : `${metrics?.registeredToday ?? 128}`,
					delta: "8%",
					tone: "primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					icon: Users,
					label: "New Patients",
					value: isLoading ? "—" : `${metrics?.newPatients ?? 42}`,
					delta: "12%",
					tone: "info"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					icon: CircleCheck,
					label: "Revisits",
					value: isLoading ? "—" : `${metrics?.revisits ?? 86}`,
					delta: "6%",
					tone: "success"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					icon: Clock,
					label: "Avg Reg. Time",
					value: isLoading ? "—" : `${metrics?.avgRegTimeMinutes ?? 135} min`,
					tone: "warning"
				})
			]
		}),
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive",
			children: "Registration metrics could not be loaded. Using fallback values."
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "New Patient Registration",
				className: "lg:col-span-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-5 p-3 rounded-lg bg-primary/5 border border-primary/20 flex gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								placeholder: "Search by Mobile / UHID / ABHA ID / Aadhaar…",
								className: "flex-1 px-3 py-2 rounded-lg border bg-card text-sm"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm",
								children: "Search"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "px-4 py-2 rounded-lg border text-sm",
								children: "Clear"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-4 gap-4 mb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-span-1 flex flex-col items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "w-full aspect-square rounded-lg border-2 border-dashed flex flex-col items-center justify-center text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "w-8 h-8 mb-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs",
									children: "Capture Photo"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "text-xs text-primary",
								children: "Upload from device"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-span-3 grid grid-cols-3 gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Title",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "w-full px-2 py-2 border rounded-lg text-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Mr." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Mrs." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Ms." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Dr." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Master" })
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "First Name *",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "w-full px-2 py-2 border rounded-lg text-sm",
										placeholder: "First name"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Last Name *",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "w-full px-2 py-2 border rounded-lg text-sm",
										placeholder: "Last name"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Date of Birth",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "date",
										className: "w-full px-2 py-2 border rounded-lg text-sm"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Age",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "w-full px-2 py-2 border rounded-lg text-sm",
										placeholder: "Years"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Gender *",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex gap-2",
										children: [
											"Male",
											"Female",
											"Other"
										].map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "flex-1 px-2 py-2 border rounded-lg text-xs hover:bg-muted",
											children: g
										}, g))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Mobile *",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "w-full px-2 py-2 border rounded-lg text-sm",
										placeholder: "+91 98xxxxxxxx"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Alt Mobile",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "w-full px-2 py-2 border rounded-lg text-sm" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "w-full px-2 py-2 border rounded-lg text-sm",
										placeholder: "name@email.com"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Blood Group",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										className: "w-full px-2 py-2 border rounded-lg text-sm",
										children: [
											"A+",
											"A-",
											"B+",
											"B-",
											"O+",
											"O-",
											"AB+",
											"AB-"
										].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: b }, b))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Marital Status",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "w-full px-2 py-2 border rounded-lg text-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Single" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Married" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Widowed" })
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Occupation",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "w-full px-2 py-2 border rounded-lg text-sm" })
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-3 mb-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "ABHA ID / Health ID",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "w-full px-2 py-2 border rounded-lg text-sm",
									placeholder: "14-digit ABHA"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Aadhaar Number",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "w-full px-2 py-2 border rounded-lg text-sm",
									placeholder: "xxxx-xxxx-xxxx"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "PAN / Govt ID",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "w-full px-2 py-2 border rounded-lg text-sm" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-4 gap-3 mb-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Address Line 1",
								className: "col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "w-full px-2 py-2 border rounded-lg text-sm" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Address Line 2",
								className: "col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "w-full px-2 py-2 border rounded-lg text-sm" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "City",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "w-full px-2 py-2 border rounded-lg text-sm" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "State",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "w-full px-2 py-2 border rounded-lg text-sm" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Pincode",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "w-full px-2 py-2 border rounded-lg text-sm" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Country",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									defaultValue: "India",
									className: "w-full px-2 py-2 border rounded-lg text-sm"
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-6 mb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold mb-2",
								children: "Visit Type"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-3 gap-2",
								children: [
									"new",
									"revisit",
									"emergency"
								].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setVisitType(v),
									className: `px-3 py-2 border rounded-lg text-xs capitalize ${visitType === v ? "bg-primary text-primary-foreground border-primary" : ""}`,
									children: v
								}, v))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3 mt-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Department",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											className: "w-full px-2 py-2 border rounded-lg text-sm",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Cardiology" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Orthopedics" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "General Medicine" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Dermatology" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Gynecology" })
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Consulting Doctor",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											className: "w-full px-2 py-2 border rounded-lg text-sm",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Dr. Arjun Mehta" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Dr. Neha Sharma" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Dr. Rajeev Kumar" })
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Referred By",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											className: "w-full px-2 py-2 border rounded-lg text-sm",
											placeholder: "Self / Doctor / Hospital"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Chief Complaint",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "w-full px-2 py-2 border rounded-lg text-sm" })
									})
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold mb-2",
								children: "Payment Type"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-3 gap-2",
								children: [
									"self",
									"insurance",
									"corporate"
								].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setPayType(p),
									className: `px-3 py-2 border rounded-lg text-xs capitalize ${payType === p ? "bg-primary text-primary-foreground border-primary" : ""}`,
									children: p === "self" ? "Self Pay" : p
								}, p))
							}),
							payType === "insurance" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3 mt-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Insurer",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											className: "w-full px-2 py-2 border rounded-lg text-sm",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Star Health" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Aditya Birla" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "HDFC ERGO" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Max Bupa" })
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Policy No.",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "w-full px-2 py-2 border rounded-lg text-sm" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Coverage",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											className: "w-full px-2 py-2 border rounded-lg text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Cashless" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Reimbursement" })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Sum Insured",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											className: "w-full px-2 py-2 border rounded-lg text-sm",
											placeholder: "₹"
										})
									})
								]
							}),
							payType === "corporate" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3 mt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Company",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "w-full px-2 py-2 border rounded-lg text-sm" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Employee ID",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "w-full px-2 py-2 border rounded-lg text-sm" })
								})]
							}),
							payType === "self" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 p-3 rounded-lg bg-muted/40 text-xs text-muted-foreground",
								children: "Patient will pay directly. Consultation fee will apply at billing."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 text-sm font-semibold mb-2",
								children: "Emergency Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Name",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "w-full px-2 py-2 border rounded-lg text-sm" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Relation",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "w-full px-2 py-2 border rounded-lg text-sm" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Mobile",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "w-full px-2 py-2 border rounded-lg text-sm" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Allergy / Notes",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											className: "w-full px-2 py-2 border rounded-lg text-sm",
											placeholder: "e.g. Penicillin"
										})
									})
								]
							})
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pt-4 border-t",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center gap-2 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								className: "rounded",
								defaultChecked: true
							}), " Send SMS / WhatsApp with UHID & token"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "px-4 py-2 rounded-lg border text-sm",
									children: "Clear"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "px-4 py-2 rounded-lg border text-sm",
									children: "Save as Draft"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium",
									children: "Register & Generate Token"
								})
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Recent Registrations",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: recent.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3 border rounded-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-mono px-1.5 py-0.5 bg-muted rounded",
									children: r[0]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-muted-foreground",
									children: r[3]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold text-sm mt-1",
								children: r[1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-muted-foreground",
								children: [
									r[2],
									" · ",
									r[4]
								]
							})
						]
					}, r[0]))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 p-3 rounded-lg bg-info/10 border border-info/20 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold mb-1",
						children: "💡 Quick Tip"
					}), "Use ABHA / Mobile lookup first to avoid creating duplicate UHIDs for existing patients."]
				})]
			})]
		})
	] });
}
function Field({ label, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-[11px] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1",
			children
		})]
	});
}
//#endregion
export { Registration as component };
