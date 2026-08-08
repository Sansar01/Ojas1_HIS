import { n as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { $ as FileText, A as Pill, C as Settings, I as Monitor, L as Mic, M as PhoneOff, P as Paperclip, R as MicOff, Z as FlaskConical, a as Volume2, at as Clock, b as Signal, c as Users, ht as Calendar, mt as Camera, o as Video, r as Wifi, s as VideoOff, w as Send, z as MessageSquare } from "../_libs/lucide-react.mjs";
import { t as AppLayout } from "./AppLayout-TYH-YrXk.mjs";
import { n as Section, t as Kpi } from "./Kpi-DY4t6Vll.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/teleconsultation-C0unBwwr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var queue = [
	{
		id: "TC-201",
		n: "Anita Roy",
		age: "34Y Female",
		complaint: "Fever, throat pain",
		waiting: "02:15",
		status: "In Call",
		active: true
	},
	{
		id: "TC-202",
		n: "Vikram Singh",
		age: "48Y Male",
		complaint: "BP follow-up",
		waiting: "05:40",
		status: "Waiting"
	},
	{
		id: "TC-203",
		n: "Priya Menon",
		age: "29Y Female",
		complaint: "Skin rash",
		waiting: "08:12",
		status: "Waiting"
	},
	{
		id: "TC-204",
		n: "Mohammed Iqbal",
		age: "55Y Male",
		complaint: "Diabetes review",
		waiting: "12:05",
		status: "Waiting"
	},
	{
		id: "TC-205",
		n: "Kavita Nair",
		age: "41Y Female",
		complaint: "Migraine",
		waiting: "15:30",
		status: "Waiting"
	}
];
var chat = [
	{
		who: "patient",
		msg: "Good morning doctor",
		t: "10:42 AM"
	},
	{
		who: "doctor",
		msg: "Good morning Anita. How are you feeling today?",
		t: "10:42 AM"
	},
	{
		who: "patient",
		msg: "Fever since yesterday, 101°F. Sore throat.",
		t: "10:43 AM"
	},
	{
		who: "patient",
		msg: "Sending my thermometer reading photo.",
		t: "10:43 AM"
	},
	{
		who: "doctor",
		msg: "Received. Any cough or breathing difficulty?",
		t: "10:44 AM"
	}
];
function Teleconsultation() {
	const [muted, setMuted] = (0, import_react.useState)(false);
	const [video, setVideo] = (0, import_react.useState)(true);
	const [tab, setTab] = (0, import_react.useState)("notes");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: "Teleconsultation"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Live video consultation with patient"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-3 py-2 rounded-lg bg-success/10 text-success flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signal, { className: "w-3 h-3" }), " Connection: Excellent"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-3 py-2 rounded-lg border flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3 h-3" }), " Call: 04:22"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "px-3 py-2 rounded-lg border flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "w-3 h-3" }), " Settings"]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 md:grid-cols-5 gap-3 mb-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					icon: Video,
					label: "In Call Now",
					value: "1",
					tone: "primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					icon: Users,
					label: "Waiting",
					value: "8",
					tone: "warning"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					icon: Clock,
					label: "Avg Wait",
					value: "6 min",
					tone: "info"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					icon: Video,
					label: "Completed Today",
					value: "14",
					tone: "success"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					icon: Wifi,
					label: "No-Shows",
					value: "2",
					tone: "destructive"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "Video Queue (9)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: queue.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `p-3 rounded-lg border ${q.active ? "border-primary bg-primary/5" : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-[10px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono px-1.5 py-0.5 bg-muted rounded",
											children: q.id
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `px-1.5 py-0.5 rounded ${q.status === "In Call" ? "bg-success/15 text-success" : "bg-warning/20 text-warning-foreground"}`,
											children: q.status
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold text-sm mt-1",
										children: q.n
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: q.age
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs mt-1",
										children: q.complaint
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-[10px] text-muted-foreground mt-1 flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3 h-3" }),
											" Waiting: ",
											q.waiting
										]
									})
								]
							}, q.id))
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6 space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card border rounded-xl overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3 border-b bg-muted/30 flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary",
										children: "AR"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-semibold text-sm",
												children: "Anita Roy"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-mono px-1.5 py-0.5 bg-primary/10 text-primary rounded",
												children: "TC-201"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: "34Y Female · O+ · Star Health · Fever, throat pain"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] px-2 py-1 rounded bg-destructive/10 text-destructive",
										children: "Allergy: Sulpha"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative bg-gradient-to-br from-slate-900 to-slate-800 aspect-video flex items-center justify-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-center text-white/90",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-24 h-24 rounded-full bg-white/10 mx-auto flex items-center justify-center text-3xl font-bold mb-3",
												children: "AR"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-semibold",
												children: "Anita Roy"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs text-white/60 mt-1",
												children: "📹 Video connected · 720p HD"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute bottom-4 right-4 w-40 aspect-video rounded-lg bg-slate-700 border-2 border-white/20 flex items-center justify-center text-white/70 text-xs",
										children: video ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "👨‍⚕️ Dr. Arjun (You)" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoOff, { className: "w-6 h-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute top-4 left-4 flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "px-2 py-1 rounded bg-destructive text-destructive-foreground text-[10px] font-semibold flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-white animate-pulse" }), " REC"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "px-2 py-1 rounded bg-black/40 text-white text-[10px]",
											children: "04:22"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 flex items-center justify-center gap-3 bg-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setMuted(!muted),
										className: `w-11 h-11 rounded-full flex items-center justify-center ${muted ? "bg-destructive text-destructive-foreground" : "bg-muted"}`,
										children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MicOff, { className: "w-5 h-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "w-5 h-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setVideo(!video),
										className: `w-11 h-11 rounded-full flex items-center justify-center ${!video ? "bg-destructive text-destructive-foreground" : "bg-muted"}`,
										children: video ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "w-5 h-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoOff, { className: "w-5 h-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "w-11 h-11 rounded-full bg-muted flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "w-5 h-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "w-11 h-11 rounded-full bg-muted flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "w-5 h-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "w-11 h-11 rounded-full bg-muted flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "w-5 h-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "w-14 h-11 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center gap-1 text-xs font-medium px-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneOff, { className: "w-4 h-4" }), " End"]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card border rounded-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex border-b text-sm",
							children: [
								{
									id: "notes",
									l: "Consultation Notes",
									i: FileText
								},
								{
									id: "rx",
									l: "e-Prescription",
									i: Pill
								},
								{
									id: "invest",
									l: "Investigations",
									i: FlaskConical
								}
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setTab(t.id),
								className: `flex items-center gap-2 px-4 py-3 border-b-2 ${tab === t.id ? "border-primary text-primary font-medium" : "border-transparent text-muted-foreground"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.i, { className: "w-4 h-4" }),
									" ",
									t.l
								]
							}, t.id))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4",
							children: [
								tab === "notes" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs text-muted-foreground",
											children: "Chief Complaint"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											rows: 3,
											className: "w-full mt-1 p-2 border rounded-lg text-sm",
											defaultValue: "Fever 101°F since yesterday, sore throat, mild body ache."
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs text-muted-foreground",
											children: "Assessment"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											rows: 3,
											className: "w-full mt-1 p-2 border rounded-lg text-sm",
											defaultValue: "Acute pharyngitis, likely viral. Advise symptomatic management."
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs text-muted-foreground",
											children: "Diagnosis (ICD-10)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											className: "w-full mt-1 p-2 border rounded-lg text-sm",
											defaultValue: "J02.9 — Acute pharyngitis, unspecified"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs text-muted-foreground",
											children: "Follow-up"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-2 mt-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												className: "flex-1 p-2 border rounded-lg text-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "In-person after 3 days" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Video after 5 days" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "date",
												defaultValue: "2025-05-23",
												className: "p-2 border rounded-lg text-sm"
											})]
										})] })
									]
								}),
								tab === "rx" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [
										[
											[
												"Tab. Paracetamol 650 mg",
												"1-1-1 After Food",
												"3 Days"
											],
											[
												"Tab. Levocetirizine 5 mg",
												"0-0-1 Bedtime",
												"5 Days"
											],
											[
												"Syp. Betadine Gargle",
												"3 times/day",
												"5 Days"
											]
										].map(([n, d, days]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 border rounded-lg",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-semibold text-sm",
													children: n
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs text-muted-foreground",
													children: days
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs text-muted-foreground",
												children: d
											})]
										}, n)),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "w-full py-2 border-2 border-dashed rounded-lg text-sm text-primary",
											children: "+ Add Medicine"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-2 pt-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "flex-1 py-2 border rounded-lg text-sm",
												children: "Save Draft"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "flex-1 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium",
												children: "Send e-Rx via WhatsApp"
											})]
										})
									]
								}),
								tab === "invest" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 text-sm",
									children: [
										[
											"CBC (Complete Blood Count)",
											"CRP",
											"Throat Swab Culture"
										].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 border rounded-lg flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "text-xs text-destructive",
												children: "Remove"
											})]
										}, t)),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "w-full py-2 border-2 border-dashed rounded-lg text-sm text-primary",
											children: "+ Add Test"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "p-3 rounded-lg bg-info/10 border border-info/20 text-xs mt-2",
											children: "Home sample collection available — patient will be notified via SMS."
										})
									]
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-3 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
							title: "Doctor On Call",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary",
										children: "AM"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-sm",
											children: "Dr. Arjun Mehta"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: "MBBS, MD (Cardiology)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: "Reg. No: MCI-45231"
										})
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-2 mt-4 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-2 border rounded-lg",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-muted-foreground",
												children: "Experience"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-semibold",
												children: "12+ Years"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-2 border rounded-lg",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-muted-foreground",
												children: "Fee"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-semibold",
												children: "₹800"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-2 border rounded-lg",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-muted-foreground",
												children: "Language"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-semibold",
												children: "EN, HI, MR"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-2 border rounded-lg",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-muted-foreground",
												children: "Rating"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-semibold",
												children: "⭐ 4.9"
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 p-2 rounded-lg bg-success/10 text-success text-xs flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-success animate-pulse" }), " Available for Video Consult"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
							title: "In-Call Chat",
							action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "w-4 h-4 text-muted-foreground" }),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2 max-h-64 overflow-y-auto pr-1",
								children: chat.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `flex ${m.who === "doctor" ? "justify-end" : "justify-start"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `max-w-[80%] px-3 py-2 rounded-lg text-xs ${m.who === "doctor" ? "bg-primary text-primary-foreground" : "bg-muted"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: m.msg }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `text-[9px] mt-0.5 ${m.who === "doctor" ? "text-primary-foreground/70" : "text-muted-foreground"}`,
											children: m.t
										})]
									})
								}, i))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center gap-2 border rounded-lg px-2 py-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "p-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paperclip, { className: "w-4 h-4 text-muted-foreground" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										placeholder: "Type a message…",
										className: "flex-1 py-1.5 text-sm focus:outline-none bg-transparent"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "p-1.5 bg-primary text-primary-foreground rounded",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-3.5 h-3.5" })
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Upcoming Video Slots",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2 text-xs",
								children: [
									[
										"11:00 AM",
										"Vikram Singh",
										"BP follow-up"
									],
									[
										"11:20 AM",
										"Priya Menon",
										"Skin rash"
									],
									[
										"11:40 AM",
										"Mohammed Iqbal",
										"Diabetes review"
									]
								].map(([t, n, c]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 p-2 border rounded-lg",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-4 h-4 text-primary" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "font-semibold",
												children: [
													t,
													" · ",
													n
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-muted-foreground",
												children: c
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "text-primary",
											children: "→"
										})
									]
								}, t))
							})
						})
					]
				})
			]
		})
	] });
}
//#endregion
export { Teleconsultation as component };
