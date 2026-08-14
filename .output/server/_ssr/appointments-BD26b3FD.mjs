import { n as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Stethoscope, at as Clock, c as Users, lt as CircleCheck, o as Video, st as CircleX, v as Star } from "../_libs/lucide-react.mjs";
import { t as AppLayout } from "./AppLayout-Ch-U9iwL.mjs";
import { n as Section, t as Kpi } from "./Kpi-DY4t6Vll.mjs";
import { t as useApiQuery } from "./useApiResource-CCm4w06O.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/appointments-BD26b3FD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var doctors = [
	{
		n: "Dr. Arjun Mehta",
		s: "Cardiology",
		exp: "12+ Years Exp.",
		status: "Available",
		rating: 4.9
	},
	{
		n: "Dr. Neha Sharma",
		s: "Dermatology",
		exp: "8+ Years Exp.",
		status: "Available",
		rating: 4.8
	},
	{
		n: "Dr. Rajeev Kumar",
		s: "Orthopedics",
		exp: "15+ Years Exp.",
		status: "Few Slots",
		rating: 4.7
	},
	{
		n: "Dr. Priya Singh",
		s: "General Medicine",
		exp: "10+ Years Exp.",
		status: "Available",
		rating: 4.9
	},
	{
		n: "Dr. Sandeep Verma",
		s: "Neurology",
		exp: "14+ Years Exp.",
		status: "Few Slots",
		rating: 4.6
	},
	{
		n: "Dr. Anjali Desai",
		s: "Gynecology",
		exp: "9+ Years Exp.",
		status: "Available",
		rating: 4.8
	}
];
var days = [
	{
		d: "Tue",
		n: "20 May"
	},
	{
		d: "Wed",
		n: "21 May"
	},
	{
		d: "Thu",
		n: "22 May"
	},
	{
		d: "Fri",
		n: "23 May"
	},
	{
		d: "Sat",
		n: "24 May"
	},
	{
		d: "Sun",
		n: "25 May"
	},
	{
		d: "Mon",
		n: "26 May"
	}
];
var slotsMorning = [
	"10:00 AM",
	"10:20 AM",
	"10:40 AM",
	"11:00 AM",
	"11:20 AM",
	"11:40 AM",
	"12:00 PM",
	"12:20 PM",
	"12:40 PM",
	"01:00 PM",
	"01:20 PM",
	"01:40 PM"
];
var slotsAfternoon = [
	"02:00 PM",
	"02:20 PM",
	"02:40 PM",
	"03:00 PM",
	"03:20 PM",
	"03:40 PM",
	"04:00 PM",
	"04:20 PM",
	"04:40 PM",
	"05:00 PM",
	"05:20 PM",
	"05:40 PM"
];
function Appointments() {
	const [selectedDoc, setDoc] = (0, import_react.useState)(0);
	const [selectedDay, setDay] = (0, import_react.useState)(0);
	const [selectedSlot, setSlot] = (0, import_react.useState)("04:00 PM");
	const [mode, setMode] = (0, import_react.useState)("physical");
	const { data, isLoading, error } = useApiQuery(["appointment-metrics"], "/appointments/metrics", { staleTime: 3e4 });
	const metrics = data?.appointmentMetrics;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: "Appointment Booking"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Book physical visit or teleconsultation"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 md:grid-cols-6 gap-3 mb-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					icon: Users,
					label: "Today's Appointments",
					value: isLoading ? "—" : `${metrics?.todayAppointments ?? 68}`,
					delta: "15%",
					tone: "primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					icon: Stethoscope,
					label: "Physical Visits",
					value: isLoading ? "—" : `${metrics?.physicalVisits ?? 42}`,
					delta: "10%",
					tone: "info"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					icon: Video,
					label: "Teleconsultations",
					value: isLoading ? "—" : `${metrics?.teleconsultations ?? 26}`,
					delta: "20%",
					tone: "primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					icon: CircleCheck,
					label: "Completed",
					value: isLoading ? "—" : `${metrics?.completed ?? 34}`,
					delta: "12%",
					tone: "success"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					icon: CircleX,
					label: "Cancelled",
					value: isLoading ? "—" : `${metrics?.cancelled ?? 8}`,
					tone: "destructive"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					icon: Clock,
					label: "Avg Wait",
					value: isLoading ? "—" : `${metrics?.avgWaitMinutes ?? 18}m`,
					tone: "warning"
				})
			]
		}),
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive",
			children: "Appointment metrics could not be loaded. Showing fallback values."
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Book New Appointment",
				className: "lg:col-span-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-2 mb-6 text-xs",
						children: [
							"Select Doctor & Type",
							"Select Date & Time",
							"Patient Details",
							"Confirm"
						].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `w-6 h-6 rounded-full flex items-center justify-center font-semibold ${i === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`,
									children: i + 1
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: i === 0 ? "text-foreground font-medium" : "text-muted-foreground",
									children: s
								}),
								i < 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-8 h-px bg-border" })
							]
						}, s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-span-1 border rounded-lg overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								placeholder: "Search doctor...",
								className: "w-full px-3 py-2 border-b text-sm focus:outline-none"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "max-h-[500px] overflow-y-auto",
								children: doctors.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setDoc(i),
									className: `w-full text-left p-3 border-b last:border-0 hover:bg-muted ${i === selectedDoc ? "bg-primary/5 border-l-4 border-l-primary" : ""}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-9 h-9 rounded-full bg-muted flex items-center justify-center text-xs font-semibold",
												children: d.n.split(" ")[1][0]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex-1 min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-sm font-semibold truncate",
													children: d.n
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[11px] text-muted-foreground",
													children: d.s
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `text-[9px] px-1.5 py-0.5 rounded ${d.status === "Available" ? "bg-success/15 text-success" : "bg-warning/20 text-warning-foreground"}`,
												children: d.status
											})
										]
									})
								}, d.n))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-span-2 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 p-3 border rounded-lg",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold",
											children: doctors[selectedDoc].n.split(" ")[1][0]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "font-semibold",
															children: doctors[selectedDoc].n
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-3 h-3 fill-warning text-warning" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xs",
															children: doctors[selectedDoc].rating
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-xs text-muted-foreground",
													children: [
														"MBBS, MD (",
														doctors[selectedDoc].s,
														")"
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-xs text-muted-foreground",
													children: [
														doctors[selectedDoc].s,
														" • ",
														doctors[selectedDoc].exp
													]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setMode("physical"),
												className: `px-3 py-2 rounded-lg text-xs border ${mode === "physical" ? "bg-primary/10 border-primary text-primary" : ""}`,
												children: "Physical Visit"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setMode("tele"),
												className: `px-3 py-2 rounded-lg text-xs border ${mode === "tele" ? "bg-primary/10 border-primary text-primary" : ""}`,
												children: "Teleconsultation"
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-2 overflow-x-auto",
									children: days.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setDay(i),
										className: `min-w-[70px] p-2 rounded-lg border text-center ${i === selectedDay ? "bg-primary text-primary-foreground border-primary" : ""}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs",
											children: d.d
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-semibold",
											children: d.n
										})]
									}, d.n))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-semibold",
											children: "Select Time Slot"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-3 text-[10px] text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-success" }), "Available"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-muted-foreground" }), "Booked"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-primary" }), "Selected"]
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground mb-2",
										children: "Morning (10:00 AM - 02:00 PM)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-5 gap-2 mb-4",
										children: slotsMorning.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setSlot(s),
											className: `py-2 rounded-lg border text-xs ${selectedSlot === s ? "bg-primary text-primary-foreground border-primary" : "border-success/30 text-success hover:bg-success/5"}`,
											children: s
										}, s))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground mb-2",
										children: "Afternoon (02:00 PM - 06:00 PM)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-5 gap-2",
										children: slotsAfternoon.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setSlot(s),
											className: `py-2 rounded-lg border text-xs ${selectedSlot === s ? "bg-primary text-primary-foreground border-primary" : "border-success/30 text-success hover:bg-success/5"}`,
											children: s
										}, s))
									})
								] })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex justify-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "px-4 py-2 rounded-lg border text-sm",
							children: "Clear Selection"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium",
							children: "Continue to Patient Details →"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Booking Summary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3 text-sm",
					children: [
						["Doctor", doctors[selectedDoc].n],
						["Speciality", doctors[selectedDoc].s],
						["Type", mode === "physical" ? "Physical Visit" : "Teleconsultation"],
						["Date", `${days[selectedDay].n}, 2025`],
						["Time", selectedSlot],
						["Duration", "20 Minutes"],
						["Fees", "₹800"]
					].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between border-b pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-right",
							children: v
						})]
					}, k))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 p-3 rounded-lg bg-primary/5 border border-primary/20 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold mb-1",
						children: "Slot Availability"
					}), "Available: 18 (56%) · Booked: 10 (31%) · Blocked: 2 (6%)"]
				})]
			})]
		})
	] });
}
//#endregion
export { Appointments as component };
