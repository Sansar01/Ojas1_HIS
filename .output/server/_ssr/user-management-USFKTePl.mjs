import { n as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as Search, dt as ChevronRight, ft as Check, l as User, lt as CircleCheck, q as KeyRound, rt as Copy, ut as CircleAlert, x as Shield } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as useHospitalUsers, c as useShifts, i as useEntitlements, n as useCreateUser, o as useRolePermissions, r as useDepartments, s as useRoles, t as AppLayout } from "./AppLayout-Ch-U9iwL.mjs";
import { n as Section } from "./Kpi-DY4t6Vll.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/user-management-USFKTePl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	{
		n: 1,
		t: "User Info",
		i: User
	},
	{
		n: 2,
		t: "Module Rights",
		i: Shield
	},
	{
		n: 3,
		t: "Credentials & Mapping",
		i: KeyRound
	}
];
var days = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday"
];
function SuccessModal({ data, onClose }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	function copyAll() {
		const text = `Employee ID: ${data.employeeId}\nEmail: ${data.email}\nTemp Password: ${data.tempPassword}`;
		navigator.clipboard.writeText(text).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2e3);
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-card border rounded-2xl shadow-xl w-full max-w-md p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-12 h-12 text-success mx-auto mb-3" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-bold",
							children: "User Created Successfully"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mt-1",
							children: "Share these credentials with the staff member"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 bg-muted rounded-xl p-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Employee ID"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: data.employeeId
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Email / Username"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: data.email
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Temp Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono font-bold text-primary",
								children: data.tempPassword
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: copyAll,
						className: "flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border rounded-lg text-sm font-medium",
						children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 text-success" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-4 h-4" }), copied ? "Copied!" : "Copy Credentials"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "flex-1 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium",
						children: "Done"
					})]
				})
			]
		})
	});
}
function UserManagement() {
	const [step, setStep] = (0, import_react.useState)(1);
	const { activeRoles, loading: rolesLoading } = useRoles();
	const { departments, loading: deptsLoading } = useDepartments();
	const { shifts, loading: shiftsLoading } = useShifts();
	const { entitlements, loading: modulesLoading } = useEntitlements();
	const { users: existingUsers, loading: usersLoading } = useHospitalUsers();
	const { createUser, loading: submitting, error: submitError } = useCreateUser();
	const [userType, setUserType] = (0, import_react.useState)("regular");
	const [lockedType, setLockedType] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			if (localStorage.getItem("um_userType") === "doctor") {
				localStorage.removeItem("um_userType");
				setUserType("doctor");
				setLockedType(true);
			}
		} catch {}
	}, []);
	const [slots, setSlots] = (0, import_react.useState)(Object.fromEntries(days.map((d) => [d, {
		enabled: d !== "Sunday",
		from: "09:00",
		to: "17:00"
	}])));
	const [formData, setFormData] = (0, import_react.useState)({
		title: "Mr.",
		firstName: "",
		lastName: "",
		email: "",
		mobile: "",
		alternateMobile: "",
		gender: "MALE",
		dateOfBirth: "",
		bloodGroup: "A+",
		designation: "",
		dateOfJoining: "",
		aadhaar: "",
		pan: "",
		medicalCouncilNo: "",
		qualification: "",
		specialization: "",
		address: "",
		city: "",
		state: "",
		pincode: "",
		emergencyContact: "",
		primaryRoleId: "",
		additionalRoleIds: [],
		departmentIds: [],
		shiftId: "",
		password: "",
		loginType: "PASSWORD",
		forcePasswordChange: true,
		twoFactorEnabled: false,
		sendCredentialsViaSms: false,
		sendCredentialsViaEmail: false
	});
	const updateField = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value
		}));
		setErrors((prev) => {
			const next = { ...prev };
			delete next[field];
			return next;
		});
	};
	const [selectedPermissions, setSelectedPermissions] = (0, import_react.useState)({});
	const { permissions: rolePermissions, loading: rolePermsLoading } = useRolePermissions(formData.primaryRoleId || null);
	(0, import_react.useEffect)(() => {
		if (rolePermissions.length > 0) {
			const prefilled = {};
			rolePermissions.forEach((p) => {
				prefilled[`${p.moduleId}__${p.featureId}`] = true;
			});
			setSelectedPermissions(prefilled);
		} else setSelectedPermissions({});
	}, [rolePermissions]);
	const togglePermission = (moduleId, featureId) => {
		const key = `${moduleId}__${featureId}`;
		setSelectedPermissions((prev) => ({
			...prev,
			[key]: !prev[key]
		}));
	};
	const toggleAllModuleFeatures = (moduleId, features) => {
		const allSelected = features.every((f) => selectedPermissions[`${moduleId}__${f.id}`]);
		setSelectedPermissions((prev) => {
			const updated = { ...prev };
			features.forEach((f) => {
				updated[`${moduleId}__${f.id}`] = !allSelected;
			});
			return updated;
		});
	};
	const selectAllPermissions = () => {
		const all = {};
		entitlements.forEach((m) => {
			m.features.forEach((f) => {
				all[`${m.id}__${f.id}`] = true;
			});
		});
		setSelectedPermissions(all);
	};
	const clearAllPermissions = () => setSelectedPermissions({});
	const getPermissionsArray = () => Object.entries(selectedPermissions).filter(([, v]) => v).map(([key]) => {
		const [moduleId, featureId] = key.split("__");
		return {
			moduleId,
			featureId
		};
	});
	const totalSelectedModules = new Set(getPermissionsArray().map((p) => p.moduleId)).size;
	const totalSelectedFeatures = getPermissionsArray().length;
	const [userSearch, setUserSearch] = (0, import_react.useState)("");
	const [copyToUserIds, setCopyToUserIds] = (0, import_react.useState)([]);
	const [copyToDeptIds, setCopyToDeptIds] = (0, import_react.useState)([]);
	const [errors, setErrors] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
		if (errors.permissions && totalSelectedFeatures > 0) setErrors((prev) => {
			const next = { ...prev };
			delete next.permissions;
			return next;
		});
	}, [errors.permissions, totalSelectedFeatures]);
	const [successData, setSuccessData] = (0, import_react.useState)(null);
	const validateStep = (currentStep) => {
		const newErrors = {};
		if (currentStep === 1) {
			if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
			if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
			if (!formData.email.trim()) newErrors.email = "Email is required";
			if (!formData.designation.trim()) newErrors.designation = "Designation is required";
			if (formData.departmentIds.length === 0 || !formData.departmentIds[0]) newErrors.departmentIds = "Department is required";
			if (!formData.primaryRoleId) newErrors.primaryRoleId = "Role is required";
		}
		if (currentStep === 2) {
			if (entitlements.length > 0 && totalSelectedFeatures === 0) newErrors.permissions = "Select at least one permission";
		}
		if (currentStep === 3) {
			if (!formData.password.trim()) newErrors.password = "Password is required";
		}
		setErrors(newErrors);
		if (Object.keys(newErrors).length > 0) {
			const firstErrorField = Object.keys(newErrors)[0];
			setTimeout(() => {
				document.getElementById(`field-${firstErrorField}`)?.focus();
			}, 0);
			return false;
		}
		return true;
	};
	const handleNext = () => {
		if (validateStep(step)) setStep((prev) => prev + 1);
		else toast.error("Please fill all required fields");
	};
	const goToStep = (target) => {
		if (target > step && !validateStep(step)) {
			toast.error("Please fill all required fields");
			return;
		}
		setStep(target);
	};
	async function handleSubmit() {
		if (!validateStep(step)) {
			toast.error("Please fill all required fields");
			return;
		}
		try {
			const payload = {
				userInfo: {
					firstName: formData.firstName,
					lastName: formData.lastName || void 0,
					email: formData.email,
					mobile: formData.mobile || void 0,
					alternateMobile: formData.alternateMobile || void 0,
					userType: "REGULAR_USER"
				},
				staffProfile: {
					title: formData.title || void 0,
					dateOfBirth: formData.dateOfBirth || void 0,
					gender: formData.gender || void 0,
					bloodGroup: formData.bloodGroup || void 0,
					designation: formData.designation || void 0,
					dateOfJoining: formData.dateOfJoining || void 0,
					shiftId: formData.shiftId || void 0,
					aadhaarNumber: formData.aadhaar || void 0,
					panNumber: formData.pan || void 0,
					medicalRegNo: formData.medicalCouncilNo || void 0,
					qualification: formData.qualification || void 0,
					specialization: formData.specialization || void 0,
					address: formData.address || void 0,
					city: formData.city || void 0,
					state: formData.state || void 0,
					pincode: formData.pincode || void 0,
					emergencyContact: formData.emergencyContact || void 0
				},
				credentials: {
					password: formData.password || "TempPass@123",
					loginType: formData.loginType,
					forcePasswordChange: formData.forcePasswordChange,
					twoFactorEnabled: formData.twoFactorEnabled,
					sendCredentialsViaSms: formData.sendCredentialsViaSms,
					sendCredentialsViaEmail: formData.sendCredentialsViaEmail
				},
				roles: {
					primaryRoleId: formData.primaryRoleId ? Number(formData.primaryRoleId) : void 0,
					additionalRoleIds: formData.additionalRoleIds.length > 0 ? formData.additionalRoleIds.map((id) => Number(id)) : void 0
				},
				departmentIds: formData.departmentIds.length > 0 ? formData.departmentIds.map((id) => Number(id)) : void 0,
				permissions: getPermissionsArray().map((p) => ({
					moduleId: Number(p.moduleId),
					featureId: Number(p.featureId)
				}))
			};
			const result = await createUser(payload);
			setSuccessData(result);
		} catch {}
	}
	function IndeterminateCheckbox({ checked, indeterminate, onChange }) {
		const ref = (0, import_react.useRef)(null);
		(0, import_react.useEffect)(() => {
			if (ref.current) ref.current.indeterminate = indeterminate;
		}, [indeterminate]);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			ref,
			type: "checkbox",
			checked,
			onChange,
			className: "rounded"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLayout, { children: [
		successData && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessModal, {
			data: successData,
			onClose: () => {
				setSuccessData(null);
				setStep(1);
				setFormData({
					title: "Mr.",
					firstName: "",
					lastName: "",
					email: "",
					mobile: "",
					alternateMobile: "",
					gender: "MALE",
					dateOfBirth: "",
					bloodGroup: "A+",
					designation: "",
					dateOfJoining: "",
					aadhaar: "",
					pan: "",
					medicalCouncilNo: "",
					qualification: "",
					specialization: "",
					address: "",
					city: "",
					state: "",
					pincode: "",
					emergencyContact: "",
					primaryRoleId: "",
					additionalRoleIds: [],
					departmentIds: [],
					shiftId: "",
					password: "",
					loginType: "PASSWORD",
					forcePasswordChange: true,
					twoFactorEnabled: false,
					sendCredentialsViaSms: false,
					sendCredentialsViaEmail: false
				});
				setSelectedPermissions({});
				setCopyToUserIds([]);
				setCopyToDeptIds([]);
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: "User Management"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Register user, assign module rights and credentials"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/user-management-users",
					className: "inline-flex items-center rounded-lg border px-3 py-2 text-sm font-medium",
					children: "View Created Users"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-card border rounded-xl p-4 mb-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-between",
				children: steps.map((s, i) => {
					const Icon = s.i;
					const done = step > s.n;
					const active = step === s.n;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => goToStep(s.n),
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `w-10 h-10 rounded-full flex items-center justify-center border-2 ${done ? "bg-success text-white border-success" : active ? "bg-primary text-primary-foreground border-primary" : "bg-muted text-muted-foreground border-border"}`,
								children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-5 h-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[10px] text-muted-foreground",
									children: ["Step ", s.n]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `text-sm font-semibold ${active ? "text-primary" : ""}`,
									children: s.t
								})]
							})]
						}), i < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `flex-1 h-0.5 mx-3 ${done ? "bg-success" : "bg-border"}` })]
					}, s.n);
				})
			})
		}),
		step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: "Step 1 · User Information",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "Employee ID",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "w-full px-2 py-2 border rounded-lg text-sm bg-muted cursor-not-allowed",
							placeholder: "Auto-generated (e.g. EMP-0001)",
							disabled: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(F, {
						label: "User Type *",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: userType,
							onChange: (e) => setUserType(e.target.value),
							disabled: lockedType,
							className: "w-full px-2 py-2 border rounded-lg text-sm disabled:opacity-70 disabled:cursor-not-allowed",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "regular",
								children: "Regular User"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "doctor",
								children: "Doctor"
							})]
						}), lockedType && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] text-muted-foreground mt-1",
							children: "Locked — opened from Doctor Management"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "Title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: formData.title,
							onChange: (e) => updateField("title", e.target.value),
							className: "w-full px-2 py-2 border rounded-lg text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Mr." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Mrs." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Ms." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Dr." })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "First Name *",
						error: errors.firstName,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "field-firstName",
							value: formData.firstName,
							onChange: (e) => updateField("firstName", e.target.value),
							className: "w-full px-2 py-2 border rounded-lg text-sm",
							placeholder: "First name"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "Last Name *",
						error: errors.lastName,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "field-lastName",
							value: formData.lastName,
							onChange: (e) => updateField("lastName", e.target.value),
							className: "w-full px-2 py-2 border rounded-lg text-sm",
							placeholder: "Last name"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "Date of Birth",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "date",
							value: formData.dateOfBirth,
							onChange: (e) => updateField("dateOfBirth", e.target.value),
							className: "w-full px-2 py-2 border rounded-lg text-sm"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "Gender",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: formData.gender,
							onChange: (e) => updateField("gender", e.target.value),
							className: "w-full px-2 py-2 border rounded-lg text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "MALE",
									children: "Male"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "FEMALE",
									children: "Female"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "OTHER",
									children: "Other"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "Blood Group",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: formData.bloodGroup,
							onChange: (e) => updateField("bloodGroup", e.target.value),
							className: "w-full px-2 py-2 border rounded-lg text-sm",
							children: [
								"A+",
								"B+",
								"O+",
								"AB+",
								"A-",
								"B-",
								"O-",
								"AB-"
							].map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: g }, g))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "Alternate Mobile",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: formData.alternateMobile,
							onChange: (e) => updateField("alternatePhone", e.target.value),
							className: "w-full px-2 py-2 border rounded-lg text-sm"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "Email *",
						error: errors.email,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "field-email",
							value: formData.email,
							onChange: (e) => updateField("email", e.target.value),
							className: "w-full px-2 py-2 border rounded-lg text-sm",
							placeholder: "name@hospital.com"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "Designation *",
						error: errors.designation,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "field-designation",
							value: formData.designation,
							onChange: (e) => updateField("designation", e.target.value),
							className: "w-full px-2 py-2 border rounded-lg text-sm",
							placeholder: "e.g. Consultant"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "Department *",
						error: errors.departmentIds,
						children: deptsLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-2 py-2 text-sm text-muted-foreground border rounded-lg",
							children: "Loading departments..."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "field-departmentIds",
							value: formData.departmentIds[0] || "",
							onChange: (e) => updateField("departmentIds", [e.target.value]),
							className: "w-full px-2 py-2 border rounded-lg text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "-- Select Department --"
							}), departments.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: `${d.id}`,
								children: d.name
							}, d.id))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "Role *",
						error: errors.primaryRoleId,
						children: rolesLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-2 py-2 text-sm text-muted-foreground border rounded-lg",
							children: "Loading roles..."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "field-primaryRoleId",
							value: formData.primaryRoleId,
							onChange: (e) => updateField("primaryRoleId", e.target.value),
							className: "w-full px-2 py-2 border rounded-lg text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "-- Select Role --"
							}), activeRoles.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: `${r.id}`,
								children: r.name
							}, r.id))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "Additional Roles",
						className: "col-span-2",
						children: rolesLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-2 py-2 text-sm text-muted-foreground border rounded-lg",
							children: "Loading..."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 md:grid-cols-4 gap-2 p-2 border rounded-lg min-h-12",
							children: [activeRoles.filter((r) => r.id !== formData.primaryRoleId).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									className: "rounded",
									checked: formData.additionalRoleIds.includes(r.id),
									onChange: () => {
										const ids = formData.additionalRoleIds;
										updateField("additionalRoleIds", ids.includes(r.id) ? ids.filter((x) => x !== r.id) : [...ids, r.id]);
									}
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r.name })]
							}, r.id)), activeRoles.filter((r) => r.id !== formData.primaryRoleId).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground col-span-4",
								children: formData.primaryRoleId ? "No other roles available" : "Select primary role first"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "Date of Joining",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "date",
							value: formData.dateOfJoining,
							onChange: (e) => updateField("dateOfJoining", e.target.value),
							className: "w-full px-2 py-2 border rounded-lg text-sm"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "Shift",
						children: shiftsLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-2 py-2 text-sm text-muted-foreground border rounded-lg",
							children: "Loading shifts..."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: formData.shiftId,
							onChange: (e) => updateField("shiftId", e.target.value),
							className: "w-full px-2 py-2 border rounded-lg text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "-- Select Shift --"
							}), shifts.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: `${s.id}`,
								children: s.name
							}, s.id))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "Aadhaar Number",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: formData.aadhaar,
							onChange: (e) => updateField("aadhaar", e.target.value),
							className: "w-full px-2 py-2 border rounded-lg text-sm",
							placeholder: "xxxx-xxxx-xxxx"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "PAN Number",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: formData.pan,
							onChange: (e) => updateField("pan", e.target.value),
							className: "w-full px-2 py-2 border rounded-lg text-sm"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "Medical Council Reg. No.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: formData.medicalCouncilNo,
							onChange: (e) => updateField("medicalCouncilNo", e.target.value),
							className: "w-full px-2 py-2 border rounded-lg text-sm",
							placeholder: "If applicable"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "Qualification",
						className: "col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: formData.qualification,
							onChange: (e) => updateField("qualification", e.target.value),
							className: "w-full px-2 py-2 border rounded-lg text-sm",
							placeholder: "MBBS, MD, etc."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "Specialization",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: formData.specialization,
							onChange: (e) => updateField("specialization", e.target.value),
							className: "w-full px-2 py-2 border rounded-lg text-sm"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "Address",
						className: "col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: formData.address,
							onChange: (e) => updateField("address", e.target.value),
							className: "w-full px-2 py-2 border rounded-lg text-sm"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "City",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: formData.city,
							onChange: (e) => updateField("city", e.target.value),
							className: "w-full px-2 py-2 border rounded-lg text-sm"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "State",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: formData.state,
							onChange: (e) => updateField("state", e.target.value),
							className: "w-full px-2 py-2 border rounded-lg text-sm"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "Pincode",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: formData.pincode,
							onChange: (e) => updateField("pincode", e.target.value),
							className: "w-full px-2 py-2 border rounded-lg text-sm"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
						label: "Emergency Contact",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: formData.emergencyContact,
							onChange: (e) => updateField("emergencyContact", e.target.value),
							className: "w-full px-2 py-2 border rounded-lg text-sm"
						})
					}),
					" "
				]
			}), userType === "doctor" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 p-4 border rounded-lg bg-primary/5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold",
							children: "Doctor Slot Creation (Day-wise)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] text-muted-foreground",
							children: "Enable days and set consultation from–to time"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-12 gap-2 text-[11px] font-medium text-muted-foreground px-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-1",
									children: "Active"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-4",
									children: "Day"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-3",
									children: "From"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-3",
									children: "To"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-1 text-right",
									children: "Hrs"
								})
							]
						}), days.map((d) => {
							const sl = slots[d];
							const hrs = sl.enabled ? (() => {
								const [fh, fm] = sl.from.split(":").map(Number);
								const [th, tm] = sl.to.split(":").map(Number);
								const mins = th * 60 + tm - (fh * 60 + fm);
								return mins > 0 ? (mins / 60).toFixed(1) : "0";
							})() : "—";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-12 gap-2 items-center bg-card border rounded-lg p-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-span-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: sl.enabled,
											onChange: (e) => setSlots({
												...slots,
												[d]: {
													...sl,
													enabled: e.target.checked
												}
											}),
											className: "rounded"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-span-4 text-sm",
										children: d
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-span-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "time",
											value: sl.from,
											disabled: !sl.enabled,
											onChange: (e) => setSlots({
												...slots,
												[d]: {
													...sl,
													from: e.target.value
												}
											}),
											className: "w-full px-2 py-1.5 border rounded text-sm disabled:opacity-50"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-span-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "time",
											value: sl.to,
											disabled: !sl.enabled,
											onChange: (e) => setSlots({
												...slots,
												[d]: {
													...sl,
													to: e.target.value
												}
											}),
											className: "w-full px-2 py-1.5 border rounded text-sm disabled:opacity-50"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-span-1 text-right text-xs text-muted-foreground",
										children: hrs
									})
								]
							}, d);
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-3 mt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
								label: "Slot Duration (min)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									className: "w-full px-2 py-2 border rounded-lg text-sm",
									children: [
										"10",
										"15",
										"20",
										"30",
										"45",
										"60"
									].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: v }, v))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
								label: "Break From",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "time",
									defaultValue: "13:00",
									className: "w-full px-2 py-2 border rounded-lg text-sm"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
								label: "Break To",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "time",
									defaultValue: "14:00",
									className: "w-full px-2 py-2 border rounded-lg text-sm"
								})
							})
						]
					})
				]
			})]
		}),
		step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: "Step 2 · Module Rights & Permissions",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: selectAllPermissions,
					className: "text-xs text-primary",
					children: "Select All"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: clearAllPermissions,
					className: "text-xs text-muted-foreground",
					children: "Clear"
				})]
			}),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: "field-permissions",
					className: "sr-only"
				}),
				formData.primaryRoleId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center gap-2 p-3 bg-primary/5 border border-primary/20 rounded-lg text-xs text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 shrink-0" }), rolePermsLoading ? "Loading role permissions..." : `Permissions pre-filled from selected role. You can modify below.`]
				}),
				errors.permissions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive",
					children: errors.permissions
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mb-4",
					children: "Select modules and the specific features this user can access."
				}),
				modulesLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm text-muted-foreground py-8 text-center",
					children: "Loading modules..."
				}) : entitlements.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm text-muted-foreground py-8 text-center",
					children: "No modules available in current package."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: entitlements.map((module) => {
						const allSelected = module.features.every((f) => selectedPermissions[`${module.id}__${f.id}`]);
						const someSelected = module.features.some((f) => selectedPermissions[`${module.id}__${f.id}`]);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `border rounded-lg overflow-hidden ${someSelected ? "border-primary/30 bg-primary/5" : "border-border"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 px-4 py-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndeterminateCheckbox, {
										checked: allSelected,
										indeterminate: someSelected && !allSelected,
										onChange: () => toggleAllModuleFeatures(module.id, module.features)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-semibold",
											children: module.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[10px] text-muted-foreground",
											children: [module.features.length, " features"]
										})]
									}),
									someSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-[10px] text-primary font-medium",
										children: [
											module.features.filter((f) => selectedPermissions[`${module.id}__${f.id}`]).length,
											" ",
											"/ ",
											module.features.length,
											" selected"
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-4 pb-3",
								children: module.features.map((feature) => {
									const isOn = !!selectedPermissions[`${module.id}__${feature.id}`];
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: `flex items-center gap-2 p-2 rounded-lg text-xs cursor-pointer border ${isOn ? "bg-success/10 border-success/30 text-success" : "border-transparent hover:bg-muted"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: isOn,
											onChange: () => togglePermission(module.id, feature.id),
											className: "rounded"
										}), feature.name]
									}, feature.id);
								})
							})]
						}, module.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 p-4 rounded-lg bg-muted border text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold mb-1",
							children: "Selected Summary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary font-medium",
							children: totalSelectedModules
						}),
						" ",
						"module(s) ·",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-success font-medium",
							children: totalSelectedFeatures
						}),
						" ",
						"permission(s) selected"
					]
				})
			]
		}),
		step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Step 3 · Credentials",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(F, {
							label: "Username (Email)",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "w-full px-2 py-2 border rounded-lg text-sm bg-muted cursor-not-allowed",
								value: formData.email || "Will be set to email",
								disabled: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] text-muted-foreground mt-1",
								children: "Username is automatically set to email address"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
							label: "Password *",
							error: errors.password,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "field-password",
								type: "password",
								value: formData.password,
								onChange: (e) => updateField("password", e.target.value),
								className: "w-full px-2 py-2 border rounded-lg text-sm",
								placeholder: "Min 8 chars (leave empty for auto-generated)"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
							label: "Login Type",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: formData.loginType,
								onChange: (e) => updateField("loginType", e.target.value),
								className: "w-full px-2 py-2 border rounded-lg text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "PASSWORD",
										children: "Password"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "PASSWORD_OTP",
										children: "Password + OTP"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "BIOMETRIC",
										children: "Biometric"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "SSO",
										children: "SSO"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 pt-2 border-t",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: formData.forcePasswordChange,
										onChange: (e) => updateField("forcePasswordChange", e.target.checked),
										className: "rounded"
									}), "Force password change on first login"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: formData.twoFactorEnabled,
										onChange: (e) => updateField("twoFactorEnabled", e.target.checked),
										className: "rounded"
									}), "Enable Two-Factor Authentication"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: formData.sendCredentialsViaSms,
										onChange: (e) => updateField("sendCredentialsViaSms", e.target.checked),
										className: "rounded"
									}), "Send credentials via SMS"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: formData.sendCredentialsViaEmail,
										onChange: (e) => updateField("sendCredentialsViaEmail", e.target.checked),
										className: "rounded"
									}), "Send credentials via Email"]
								})
							]
						}),
						submitError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-4 h-4 mt-0.5 shrink-0" }), submitError]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3 bg-muted rounded-lg text-xs space-y-1.5 border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold mb-2",
									children: "Review Before Submit"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-medium",
										children: [
											formData.firstName,
											" ",
											formData.lastName
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: formData.email || "—"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Role"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: activeRoles.find((r) => r.id === formData.primaryRoleId)?.name || "—"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Permissions"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-medium text-success",
										children: [totalSelectedFeatures, " assigned"]
									})]
								})
							]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Map Same Rights To Other Users / Departments",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-4 h-4 text-primary" }),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[11px] text-muted-foreground",
								children: "Search & Select Users"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: userSearch,
									onChange: (e) => setUserSearch(e.target.value),
									placeholder: "Search by name or employee ID…",
									className: "w-full pl-8 pr-2 py-2 border rounded-lg text-sm"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 max-h-56 overflow-y-auto border rounded-lg divide-y",
								children: usersLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-4 text-sm text-muted-foreground text-center",
									children: "Loading users..."
								}) : existingUsers.filter((u) => `${u.profile.firstName} ${u.profile.lastName} ${u.employeeId}`.toLowerCase().includes(userSearch.toLowerCase())).map((u) => {
									const checked = copyToUserIds.includes(u.id);
									const primaryRole = u.roles.find((r) => r.isPrimary);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: `flex items-center gap-3 p-2.5 cursor-pointer ${checked ? "bg-primary/5" : "hover:bg-muted"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												checked,
												onChange: () => setCopyToUserIds(checked ? copyToUserIds.filter((x) => x !== u.id) : [...copyToUserIds, u.id]),
												className: "rounded"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-sm font-medium",
													children: [
														u.profile.firstName,
														" ",
														u.profile.lastName
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-[11px] text-muted-foreground",
													children: [
														u.employeeId,
														" ·",
														" ",
														primaryRole?.roleName || "No role"
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4 text-muted-foreground" })
										]
									}, u.id);
								})
							}),
							copyToUserIds.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs mt-2 text-primary",
								children: [copyToUserIds.length, " user(s) selected"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[11px] text-muted-foreground",
								children: "Map to Department(s)"
							}),
							deptsLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-muted-foreground mt-1",
								children: "Loading..."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								multiple: true,
								value: copyToDeptIds,
								onChange: (e) => setCopyToDeptIds(Array.from(e.target.selectedOptions).map((o) => o.value)),
								className: "w-full px-2 py-2 border rounded-lg text-sm mt-1 h-36",
								children: departments.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: d.id,
									children: d.name
								}, d.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] text-muted-foreground mt-1",
								children: "Hold Ctrl / Cmd to select multiple"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3 rounded-lg bg-warning/10 border border-warning/30 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold mb-1",
							children: "⚠ Note"
						}), "Selected users / departments will inherit the same module rights and permissions. Existing rights will be replaced."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						disabled: copyToUserIds.length === 0 && copyToDeptIds.length === 0,
						className: "mt-4 w-full px-4 py-2 rounded-lg border border-primary text-primary text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-4 h-4" }), " Copy Rights to Selected"]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex items-center justify-between bg-card border rounded-xl p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setStep(Math.max(1, step - 1)),
					disabled: step === 1,
					className: "px-4 py-2 rounded-lg border text-sm disabled:opacity-40",
					children: "← Previous"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs text-muted-foreground",
					children: [
						"Step ",
						step,
						" of ",
						steps.length
					]
				}),
				step < steps.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleNext,
					className: "px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium cursor-pointer",
					children: "Next →"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleSubmit,
					disabled: submitting,
					className: "px-4 py-2 rounded-lg bg-success cursor-pointer text-white text-sm font-medium disabled:opacity-50",
					children: submitting ? "Creating..." : "✓ Register User & Save Rights"
				})
			]
		})
	] });
}
function F({ label, children, className = "", error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: `text-[11px] ${error ? "text-destructive" : "text-muted-foreground"}`,
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1",
				children
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-[11px] text-destructive",
				children: error
			})
		]
	});
}
//#endregion
export { UserManagement as component };
