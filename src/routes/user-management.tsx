import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import { Section } from "@/components/hims/Kpi";
import { useState, useEffect, useRef } from "react";
import {
  User,
  Shield,
  KeyRound,
  Check,
  Copy,
  Search,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import {
  useRoles,
  useDepartments,
  useShifts,
  useEntitlements,
  useRolePermissions,
  useHospitalUsers,
  useCreateUser,
} from "@/hooks/useUserManagement";
import { toast } from "sonner";

export const Route = createFileRoute("/user-management")({
  head: () => ({ meta: [{ title: "User Management — Ojas1Cloud HIMS" }] }),
  component: UserManagement,
});

const steps = [
  { n: 1, t: "User Info", i: User },
  { n: 2, t: "Module Rights", i: Shield },
  { n: 3, t: "Credentials & Mapping", i: KeyRound },
];

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// ─── Success Modal ────────────────────────────────────────────────────────────
function SuccessModal({ data, onClose }: { data: any; onClose: any }) {
  const [copied, setCopied] = useState(false);

  function copyAll() {
    const text = `Employee ID: ${data.employeeId}\nEmail: ${data.email}\nTemp Password: ${data.tempPassword}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-card border rounded-2xl shadow-xl w-full max-w-md p-6">
        <div className="text-center mb-5">
          <CheckCircle2 className="w-12 h-12 text-success mx-auto mb-3" />
          <h2 className="text-lg font-bold">User Created Successfully</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Share these credentials with the staff member
          </p>
        </div>

        <div className="space-y-3 bg-muted rounded-xl p-4 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Employee ID</span>
            <span className="font-semibold">{data.employeeId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Email / Username</span>
            <span className="font-semibold">{data.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Temp Password</span>
            <span className="font-mono font-bold text-primary">
              {data.tempPassword}
            </span>
          </div>
        </div>

        <div className="mt-4 flex gap-3">
          <button
            onClick={copyAll}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border rounded-lg text-sm font-medium"
          >
            {copied ? (
              <Check className="w-4 h-4 text-success" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            {copied ? "Copied!" : "Copy Credentials"}
          </button>
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
function UserManagement() {
  const [step, setStep] = useState(1);

  // ─── API Hooks ──────────────────────────────────────────────────────────────
  const { activeRoles, loading: rolesLoading } = useRoles();
  const { departments, loading: deptsLoading } = useDepartments();
  const { shifts, loading: shiftsLoading } = useShifts();
  const { entitlements, loading: modulesLoading } = useEntitlements();
  const { users: existingUsers, loading: usersLoading } = useHospitalUsers();
  const {
    createUser,
    loading: submitting,
    error: submitError,
  } = useCreateUser();

  // ─── User Type ──────────────────────────────────────────────────────────────
  const [userType, setUserType] = useState<"regular" | "doctor">("regular");
  const [lockedType, setLockedType] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem("um_userType");
      if (v === "doctor") {
        localStorage.removeItem("um_userType");
        setUserType("doctor");
        setLockedType(true);
      }
    } catch {}
  }, []);

  // ─── Doctor Slots ───────────────────────────────────────────────────────────
  const [slots, setSlots] = useState<
    Record<string, { enabled: boolean; from: string; to: string }>
  >(
    Object.fromEntries(
      days.map((d) => [
        d,
        { enabled: d !== "Sunday", from: "09:00", to: "17:00" },
      ]),
    ),
  );

  // ─── Form State ─────────────────────────────────────────────────────────────

  const [formData, setFormData] = useState({
    // User Info
    title: "Mr.",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    alternateMobile: "",
    gender: "MALE" as "MALE" | "FEMALE" | "OTHER",
    dateOfBirth: "",
    bloodGroup: "A+",
    reportingManagerId: "",
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

    // Roles
    primaryRoleId: "",
    additionalRoleIds: [] as string[],

    // Department + Shift
    departmentIds: [],
    shiftId: "",

    // Credentials
    tempPassword: "",
    loginType: "PASSWORD" as string,
    forcePasswordChange: true,
    twoFactorEnabled: false,
    sendCredentialsViaSms: false,
    sendCredentialsViaEmail: false,
  });

  const updateField = (field: string, value: unknown) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  // ─── Permission State ───────────────────────────────────────────────────────
  const [selectedPermissions, setSelectedPermissions] = useState<
    Record<string, boolean>
  >({});

  // ─── Prefill from Primary Role ──────────────────────────────────────────────
  const { permissions: rolePermissions, loading: rolePermsLoading } =
    useRolePermissions(formData.primaryRoleId || null);

  useEffect(() => {
    if (rolePermissions.length > 0) {
      const prefilled: Record<string, boolean> = {};
      rolePermissions.forEach((p) => {
        prefilled[`${p.moduleId}__${p.featureId}`] = true;
      });
      setSelectedPermissions(prefilled);
    } else {
      setSelectedPermissions({});
    }
  }, [rolePermissions]);

  // ─── Permission Helpers ─────────────────────────────────────────────────────
  const togglePermission = (moduleId: Number, featureId: Number) => {
    const key = `${moduleId}__${featureId}`;
    setSelectedPermissions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleAllModuleFeatures = (
    moduleId: Number,
    features: { id: Number }[],
  ) => {
    const allSelected = features.every(
      (f) => selectedPermissions[`${moduleId}__${f.id}`],
    );
    setSelectedPermissions((prev) => {
      const updated = { ...prev };
      features.forEach((f) => {
        updated[`${moduleId}__${f.id}`] = !allSelected;
      });
      return updated;
    });
  };

  const selectAllPermissions = () => {
    const all: Record<string, boolean> = {};
    entitlements.forEach((m) => {
      m.features.forEach((f) => {
        all[`${m.id}__${f.id}`] = true;
      });
    });
    setSelectedPermissions(all);
  };

  const clearAllPermissions = () => setSelectedPermissions({});

  const getPermissionsArray = () =>
    Object.entries(selectedPermissions)
      .filter(([, v]) => v)
      .map(([key]) => {
        const [moduleId, featureId] = key.split("__").map(Number);
        return { moduleId, featureId };
      });

  const totalSelectedModules = new Set(
    getPermissionsArray().map((p) => p.moduleId),
  ).size;
  const totalSelectedFeatures = getPermissionsArray().length;

  // ─── Copy Rights State ──────────────────────────────────────────────────────
  const [userSearch, setUserSearch] = useState("");
  const [copyToUserIds, setCopyToUserIds] = useState<string[]>([]);
  const [copyToDeptIds, setCopyToDeptIds] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (errors.permissions && totalSelectedFeatures > 0) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.permissions;
        return next;
      });
    }
  }, [errors.permissions, totalSelectedFeatures]);

  // ─── Success Modal ──────────────────────────────────────────────────────────
  const [successData, setSuccessData] = useState<{
    employeeId: string;
    email: string;
    tempPassword: string;
  } | null>(null);

  //----------------Validation---------------------

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.firstName.trim()) {
        newErrors.firstName = "First Name is required";
      }

      if (!formData.lastName.trim()) {
        newErrors.lastName = "Last Name is required";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      }

      if (!formData.designation.trim()) {
        newErrors.designation = "Designation is required";
      }

      if (formData.departmentIds.length === 0 || !formData.departmentIds[0]) {
        newErrors.departmentIds = "Department is required";
      }

      if (!formData.primaryRoleId) {
        newErrors.primaryRoleId = "Role is required";
      }
    }

    if (currentStep === 2) {
      if (entitlements.length > 0 && totalSelectedFeatures === 0) {
        newErrors.permissions = "Select at least one permission";
      }
    }

    if (currentStep === 3) {
      if (!formData.tempPassword?.trim()) {
        newErrors.tempPassword = "Temporary Password is required";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // Focus first invalid field
      const firstErrorField = Object.keys(newErrors)[0];

      setTimeout(() => {
        document.getElementById(`field-${firstErrorField}`)?.focus();
      }, 0);

      return false;
    }

    return true;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    } else {
      toast.error("Please fill all required fields", {
        position: "top-right",
        className:
          "bg-destructive text-destructive-foreground border-destructive",
      });
    }
  };

  const goToStep = (target: number) => {
    if (target > step && !validateStep(step)) {
      toast.error("Please fill all required fields", {
        position: "top-right",
        className: "bg-destructive text-destructive-foreground border-destructive",
      });
      return;
    }
    setStep(target);
  };

  // ─── Submit ─────────────────────────────────────────────────────────────────

  async function handleSubmit() {
    if (!validateStep(step)) {
      toast.error("Please fill all required fields", {
        position: "top-right",
        className: "bg-destructive text-destructive-foreground border-destructive",
      });
      return;
    }

    try {
      const payload = {
        userInfo: {
          firstName: formData.firstName,
          lastName: formData.lastName || undefined,
          email: formData.email,
          mobile: formData.mobile || undefined,
          alternateMobile: formData.alternateMobile || undefined,
          userType: "REGULAR_USER" as const,
        },
        staffProfile: {
          title: formData.title || undefined,
          dateOfBirth: formData.dateOfBirth || undefined,
          gender: formData.gender || undefined,
          bloodGroup: formData.bloodGroup || undefined,
          designation: formData.designation || undefined,
          dateOfJoining: formData.dateOfJoining || undefined,
          shiftId: formData.shiftId || undefined,
          aadhaarNumber: formData.aadhaar || undefined,
          panNumber: formData.pan || undefined,
          reportingManagerId: formData.reportingManagerId || undefined,
          medicalRegNo: formData.medicalCouncilNo || undefined,
          qualification: formData.qualification || undefined,
          specialization: formData.specialization || undefined,
          address: formData.address || undefined,
          city: formData.city || undefined,
          state: formData.state || undefined,
          pincode: formData.pincode || undefined,
          emergencyContact: formData.emergencyContact || undefined,
        },
        credentials: {
          password: formData.tempPassword || "TempPass@123",
          loginType: formData.loginType as "PASSWORD",
          forcePasswordChange: formData.forcePasswordChange,
          twoFactorEnabled: formData.twoFactorEnabled,
          sendCredentialsViaSms: formData.sendCredentialsViaSms,
          sendCredentialsViaEmail: formData.sendCredentialsViaEmail,
        },
        roles: {
          primaryRoleId: formData.primaryRoleId,
          additionalRoleIds:
            formData.additionalRoleIds.length > 0
              ? formData.additionalRoleIds
              : undefined,
        },
        departmentIds:
          formData.departmentIds.length > 0
            ? formData.departmentIds
            : undefined,
        permissions: getPermissionsArray(),
      };

      const result = await createUser(payload);
      setSuccessData({
        employeeId: result.employeeId,
        email: result.email,
        tempPassword: result.tempPassword,
      });
    } catch {
      // error shown inline via submitError
    }
  }
  // ─── Indeterminate checkbox ref helper ─────────────────────────────────────
  function IndeterminateCheckbox({
    checked,
    indeterminate,
    onChange,
  }: {
    checked: boolean;
    indeterminate: boolean;
    onChange: () => void;
  }) {
    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
      if (ref.current) ref.current.indeterminate = indeterminate;
    }, [indeterminate]);
    return (
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="rounded"
      />
    );
  }

  // ─── Render ─────────────────────────────────────────────────────────────────
  return (
    <AppLayout>
      {/* Success Modal */}
      {successData && (
        <SuccessModal
          data={successData}
          onClose={() => {
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
              reportingManagerId: "",
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
              tempPassword: "",
              loginType: "PASSWORD",
              forcePasswordChange: true,
              twoFactorEnabled: false,
              sendCredentialsViaSms: false,
              sendCredentialsViaEmail: false,
            });
            setSelectedPermissions({});
            setCopyToUserIds([]);
            setCopyToDeptIds([]);
          }}
        />
      )}

      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold">User Management</h1>
          <p className="text-sm text-muted-foreground">
            Register user, assign module rights and credentials
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            to="/user-management-users"
            className="inline-flex items-center rounded-lg border px-3 py-2 text-sm font-medium"
          >
            View Created Users
          </Link>
        </div>
      </div>

      {/* ── Stepper ── */}
      <div className="bg-card border rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between">
          {steps.map((s, i) => {
            const Icon = s.i;
            const done = step > s.n;
            const active = step === s.n;
            return (
              <div key={s.n} className="flex items-center flex-1">
                <button
                  onClick={() => goToStep(s.n)}
                  className="flex items-center gap-3"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      done
                        ? "bg-success text-white border-success"
                        : active
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-muted text-muted-foreground border-border"
                    }`}
                  >
                    {done ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-muted-foreground">
                      Step {s.n}
                    </div>
                    <div
                      className={`text-sm font-semibold ${
                        active ? "text-primary" : ""
                      }`}
                    >
                      {s.t}
                    </div>
                  </div>
                </button>
                {i < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-3 ${
                      done ? "bg-success" : "bg-border"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          STEP 1 — User Info
      ════════════════════════════════════════════════════════════ */}
      {step === 1 && (
        <Section title="Step 1 · User Information">
          <div className="grid grid-cols-3 gap-4">
            {/* Employee ID — auto generated */}
            <F label="Employee ID">
              <input
                className="w-full px-2 py-2 border rounded-lg text-sm bg-muted cursor-not-allowed"
                placeholder="Auto-generated (e.g. EMP-0001)"
                disabled
              />
            </F>
            {/* User Type */}
            <F label="User Type *">
              <select
                value={userType}
                onChange={(e) =>
                  setUserType(e.target.value as "regular" | "doctor")
                }
                disabled={lockedType}
                className="w-full px-2 py-2 border rounded-lg text-sm disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <option value="regular">Regular User</option>
                <option value="doctor">Doctor</option>
              </select>
              {lockedType && (
                <div className="text-[10px] text-muted-foreground mt-1">
                  Locked — opened from Doctor Management
                </div>
              )}
            </F>
            {/* Title */}
            <F label="Title">
              <select
                value={formData.title}
                onChange={(e) => updateField("title", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
              >
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Ms.">Ms.</option>
                <option value="Dr.">Dr.</option>
              </select>
            </F>
            {/* First Name */}
            <F label="First Name *" error={errors.firstName}>
              <input
                id="field-firstName"
                value={formData.firstName}
                onChange={(e) => updateField("firstName", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
                placeholder="First name"
              />
            </F>
            {/* Last Name */}
            <F label="Last Name *" error={errors.lastName}>
              <input
                id="field-lastName"
                value={formData.lastName}
                onChange={(e) => updateField("lastName", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
                placeholder="Last name"
              />
            </F>
            {/* Date of Birth */}
            <F label="Date of Birth">
              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => updateField("dateOfBirth", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
              />
            </F>
            {/* Gender */}
            <F label="Gender">
              <select
                value={formData.gender}
                onChange={(e) => updateField("gender", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
              >
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHER">Other</option>
              </select>
            </F>
            {/* Blood Group */}
            <F label="Blood Group">
              <select
                value={formData.bloodGroup}
                onChange={(e) => updateField("bloodGroup", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
              >
                {["A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"].map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </F>
            {/* Mobile */}
            <F label="Mobile *" error={errors.mobile}>
              <input
                id="field-mobile"
                value={formData.mobile}
                onChange={(e) => updateField("mobile", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
                placeholder="+91 98xxxxxxxx"
              />
            </F>
            {/* Alternate Mobile */}
            <F label="Alternate Mobile">
              <input
                value={formData.alternateMobile}
                onChange={(e) => updateField("alternateMobile", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
                placeholder="+91 98xxxxxxxx"
              />
            </F>
            {/* Email */}
            <F label="Email *" error={errors.email}>
              <input
                id="field-email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
                placeholder="name@hospital.com"
              />
            </F>
            {/* Designation */}
            <F label="Designation *" error={errors.designation}>
              <input
                id="field-designation"
                value={formData.designation}
                onChange={(e) => updateField("designation", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
                placeholder="e.g. Consultant"
              />
            </F>
            {/* Department — from API */}
            <F label="Department *" error={errors.departmentIds}>
              {deptsLoading ? (
                <div className="px-2 py-2 text-sm text-muted-foreground border rounded-lg">
                  Loading departments...
                </div>
              ) : (
                <select
                  id="field-departmentIds"
                  value={formData.departmentIds[0] || ""}
                  onChange={(e) =>
                    updateField("departmentIds", [Number(e.target.value)])
                  }
                  className="w-full px-2 py-2 border rounded-lg text-sm"
                >
                  <option value="">-- Select Department --</option>
                  {departments.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name}
                    </option>
                  ))}
                </select>
              )}
            </F>
            {/* Primary Role — from API */}
            <F label="Role *" error={errors.primaryRoleId}>
              {rolesLoading ? (
                <div className="px-2 py-2 text-sm text-muted-foreground border rounded-lg">
                  Loading roles...
                </div>
              ) : (
                <select
                  id="field-primaryRoleId"
                  value={formData.primaryRoleId}
                  onChange={(e) =>
                    updateField("primaryRoleId", Number(e.target.value))
                  }
                  className="w-full px-2 py-2 border rounded-lg text-sm"
                >
                  <option value="">-- Select Role --</option>
                  {activeRoles.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name}
                    </option>
                  ))}
                </select>
              )}
            </F>
            {/* Additional Roles — from API */}
            <F label="Additional Roles" className="col-span-2">
              {rolesLoading ? (
                <div className="px-2 py-2 text-sm text-muted-foreground border rounded-lg">
                  Loading...
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2 border rounded-lg min-h-12">
                  {activeRoles
                    .filter((r) => r.id !== formData.primaryRoleId)
                    .map((r) => (
                      <label
                        key={r.id}
                        className="flex items-center gap-2 text-sm"
                      >
                        <input
                          type="checkbox"
                          className="rounded"
                          checked={formData.additionalRoleIds.includes(r.id)}
                          onChange={() => {
                            const ids = formData.additionalRoleIds;
                            updateField(
                              "additionalRoleIds",
                              ids.includes(r.id)
                                ? ids.filter((x) => x !== r.id)
                                : [...ids, r.id],
                            );
                          }}
                        />
                        <span>{r.name}</span>
                      </label>
                    ))}
                  {activeRoles.filter((r) => r.id !== formData.primaryRoleId)
                    .length === 0 && (
                    <div className="text-xs text-muted-foreground col-span-4">
                      {formData.primaryRoleId
                        ? "No other roles available"
                        : "Select primary role first"}
                    </div>
                  )}
                </div>
              )}
            </F>
            {/* Date of Joining */}
            <F label="Date of Joining">
              <input
                type="date"
                value={formData.dateOfJoining}
                onChange={(e) => updateField("dateOfJoining", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
              />
            </F>
            {/* Shift — from API */}
            <F label="Shift">
              {shiftsLoading ? (
                <div className="px-2 py-2 text-sm text-muted-foreground border rounded-lg">
                  Loading shifts...
                </div>
              ) : (
                <select
                  value={formData.shiftId}
                  onChange={(e) =>
                    updateField("shiftId", Number(e.target.value))
                  }
                  className="w-full px-2 py-2 border rounded-lg text-sm"
                >
                  <option value="">-- Select Shift --</option>
                  {shifts.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              )}
            </F>
            {/* Aadhaar */}
            <F label="Aadhaar Number">
              <input
                value={formData.aadhaar}
                onChange={(e) => updateField("aadhaar", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
                placeholder="xxxx-xxxx-xxxx"
              />
            </F>
            {/* PAN */}
            <F label="PAN Number">
              <input
                value={formData.pan}
                onChange={(e) => updateField("pan", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
              />
            </F>
            {/* Medical Council */}
            <F label="Medical Council Reg. No.">
              <input
                value={formData.medicalCouncilNo}
                onChange={(e) =>
                  updateField("medicalCouncilNo", e.target.value)
                }
                className="w-full px-2 py-2 border rounded-lg text-sm"
                placeholder="If applicable"
              />
            </F>
            {/* Qualification */}
            <F label="Qualification" className="col-span-2">
              <input
                value={formData.qualification}
                onChange={(e) => updateField("qualification", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
                placeholder="MBBS, MD, etc."
              />
            </F>
            {/* Specialization */}
            <F label="Specialization">
              <input
                value={formData.specialization}
                onChange={(e) => updateField("specialization", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
              />
            </F>
            {/* Address */}
            <F label="Address" className="col-span-2">
              <input
                value={formData.address}
                onChange={(e) => updateField("address", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
              />
            </F>
            {/* City */}
            <F label="City">
              <input
                value={formData.city}
                onChange={(e) => updateField("city", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
              />
            </F>
            {/* State */}
            <F label="State">
              <input
                value={formData.state}
                onChange={(e) => updateField("state", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
              />
            </F>
            {/* Pincode */}
            <F label="Pincode">
              <input
                value={formData.pincode}
                onChange={(e) => updateField("pincode", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
              />
            </F>
            {/* Emergency Contact */}
            <F label="Emergency Contact">
              <input
                value={formData.emergencyContact}
                onChange={(e) =>
                  updateField("emergencyContact", e.target.value)
                }
                className="w-full px-2 py-2 border rounded-lg text-sm"
              />
            </F>{" "}
            {/* Adjust all the fields according to the function */}
          </div>

          {/* Doctor Slots */}
          {userType === "doctor" && (
            <div className="mt-6 p-4 border rounded-lg bg-primary/5">
              <div className="mb-3">
                <div className="text-sm font-semibold">
                  Doctor Slot Creation (Day-wise)
                </div>
                <div className="text-[11px] text-muted-foreground">
                  Enable days and set consultation from–to time
                </div>
              </div>
              <div className="space-y-2">
                <div className="grid grid-cols-12 gap-2 text-[11px] font-medium text-muted-foreground px-2">
                  <div className="col-span-1">Active</div>
                  <div className="col-span-4">Day</div>
                  <div className="col-span-3">From</div>
                  <div className="col-span-3">To</div>
                  <div className="col-span-1 text-right">Hrs</div>
                </div>
                {days.map((d) => {
                  const sl = slots[d];
                  const hrs = sl.enabled
                    ? (() => {
                        const [fh, fm] = sl.from.split(":").map(Number);
                        const [th, tm] = sl.to.split(":").map(Number);
                        const mins = th * 60 + tm - (fh * 60 + fm);
                        return mins > 0 ? (mins / 60).toFixed(1) : "0";
                      })()
                    : "—";
                  return (
                    <div
                      key={d}
                      className="grid grid-cols-12 gap-2 items-center bg-card border rounded-lg p-2"
                    >
                      <div className="col-span-1">
                        <input
                          type="checkbox"
                          checked={sl.enabled}
                          onChange={(e) =>
                            setSlots({
                              ...slots,
                              [d]: { ...sl, enabled: e.target.checked },
                            })
                          }
                          className="rounded"
                        />
                      </div>
                      <div className="col-span-4 text-sm">{d}</div>
                      <div className="col-span-3">
                        <input
                          type="time"
                          value={sl.from}
                          disabled={!sl.enabled}
                          onChange={(e) =>
                            setSlots({
                              ...slots,
                              [d]: { ...sl, from: e.target.value },
                            })
                          }
                          className="w-full px-2 py-1.5 border rounded text-sm disabled:opacity-50"
                        />
                      </div>
                      <div className="col-span-3">
                        <input
                          type="time"
                          value={sl.to}
                          disabled={!sl.enabled}
                          onChange={(e) =>
                            setSlots({
                              ...slots,
                              [d]: { ...sl, to: e.target.value },
                            })
                          }
                          className="w-full px-2 py-1.5 border rounded text-sm disabled:opacity-50"
                        />
                      </div>
                      <div className="col-span-1 text-right text-xs text-muted-foreground">
                        {hrs}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-cols-3 gap-3 mt-4">
                <F label="Slot Duration (min)">
                  <select className="w-full px-2 py-2 border rounded-lg text-sm">
                    {["10", "15", "20", "30", "45", "60"].map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                </F>
                <F label="Break From">
                  <input
                    type="time"
                    defaultValue="13:00"
                    className="w-full px-2 py-2 border rounded-lg text-sm"
                  />
                </F>
                <F label="Break To">
                  <input
                    type="time"
                    defaultValue="14:00"
                    className="w-full px-2 py-2 border rounded-lg text-sm"
                  />
                </F>
              </div>
            </div>
          )}
        </Section>
      )}

      {/* ════════════════════════════════════════════════════════════
          STEP 2 — Module Rights + Permissions (combined)
      ════════════════════════════════════════════════════════════ */}
      {step === 2 && (
        <Section
          title="Step 2 · Module Rights & Permissions"
          action={
            <div className="flex gap-2">
              <button
                onClick={selectAllPermissions}
                className="text-xs text-primary"
              >
                Select All
              </button>
              <button
                onClick={clearAllPermissions}
                className="text-xs text-muted-foreground"
              >
                Clear
              </button>
            </div>
          }
        >
          <div id="field-permissions" className="sr-only" />
          {/* Prefill notice */}
          {formData.primaryRoleId && (
            <div className="mb-4 flex items-center gap-2 p-3 bg-primary/5 border border-primary/20 rounded-lg text-xs text-primary">
              <Check className="w-4 h-4 shrink-0" />
              {rolePermsLoading
                ? "Loading role permissions..."
                : `Permissions pre-filled from selected role. You can modify below.`}
            </div>
          )}

          {errors.permissions && (
            <div className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive">
              {errors.permissions}
            </div>
          )}

          <p className="text-xs text-muted-foreground mb-4">
            Select modules and the specific features this user can access.
          </p>

          {modulesLoading ? (
            <div className="text-sm text-muted-foreground py-8 text-center">
              Loading modules...
            </div>
          ) : entitlements.length === 0 ? (
            <div className="text-sm text-muted-foreground py-8 text-center">
              No modules available in current package.
            </div>
          ) : (
            <div className="space-y-3">
              {entitlements.map((module) => {
                const allSelected = module.features.every(
                  (f) => selectedPermissions[`${module.id}__${f.id}`],
                );
                const someSelected = module.features.some(
                  (f) => selectedPermissions[`${module.id}__${f.id}`],
                );

                return (
                  <div
                    key={module.id}
                    className={`border rounded-lg overflow-hidden ${
                      someSelected
                        ? "border-primary/30 bg-primary/5"
                        : "border-border"
                    }`}
                  >
                    {/* Module header row */}
                    <div className="flex items-center gap-3 px-4 py-3">
                      <IndeterminateCheckbox
                        checked={allSelected}
                        indeterminate={someSelected && !allSelected}
                        onChange={() =>
                          toggleAllModuleFeatures(
                            Number(module.id),
                            module.features,
                          )
                        }
                      />
                      <div className="flex-1">
                        <div className="text-sm font-semibold">
                          {module.name}
                        </div>
                        <div className="text-[10px] text-muted-foreground">
                          {module.features.length} features
                        </div>
                      </div>
                      {someSelected && (
                        <div className="text-[10px] text-primary font-medium">
                          {
                            module.features.filter(
                              (f) =>
                                selectedPermissions[`${module.id}__${f.id}`],
                            ).length
                          }{" "}
                          / {module.features.length} selected
                        </div>
                      )}
                    </div>

                    {/* Features grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-4 pb-3">
                      {module.features.map((feature) => {
                        const isOn =
                          !!selectedPermissions[`${module.id}__${feature.id}`];
                        return (
                          <label
                            key={feature.id}
                            className={`flex items-center gap-2 p-2 rounded-lg text-xs cursor-pointer border ${
                              isOn
                                ? "bg-success/10 border-success/30 text-success"
                                : "border-transparent hover:bg-muted"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isOn}
                              onChange={() =>
                                togglePermission(
                                  Number(module.id),
                                  Number(feature.id),
                                )
                              }
                              className="rounded"
                            />
                            {feature.name}
                          </label>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Summary */}
          <div className="mt-6 p-4 rounded-lg bg-muted border text-xs">
            <div className="font-semibold mb-1">Selected Summary</div>
            <span className="text-primary font-medium">
              {totalSelectedModules}
            </span>{" "}
            module(s) ·{" "}
            <span className="text-success font-medium">
              {totalSelectedFeatures}
            </span>{" "}
            permission(s) selected
          </div>
        </Section>
      )}

      {/* ════════════════════════════════════════════════════════════
          STEP 3 — Credentials & Copy Rights
      ════════════════════════════════════════════════════════════ */}
      {step === 3 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Credentials */}
          <Section title="Step 3 · Credentials">
            <div className="space-y-4">
              {/* Username — auto from email */}
              <F label="Username (Email)">
                <input
                  className="w-full px-2 py-2 border rounded-lg text-sm bg-muted cursor-not-allowed"
                  value={formData.email || "Will be set to email"}
                  disabled
                />
                <div className="text-[10px] text-muted-foreground mt-1">
                  Username is automatically set to email address
                </div>
              </F>

              {/* Temporary Password */}
              <F label="Temporary Password *" error={errors.tempPassword}>
                <input
                  id="field-tempPassword"
                  type="password"
                  value={formData.tempPassword}
                  onChange={(e) => updateField("tempPassword", e.target.value)}
                  className="w-full px-2 py-2 border rounded-lg text-sm"
                  placeholder="Min 8 chars (leave empty for auto-generated)"
                />
              </F>

              {/* Login Type */}
              <F label="Login Type">
                <select
                  value={formData.loginType}
                  onChange={(e) => updateField("loginType", e.target.value)}
                  className="w-full px-2 py-2 border rounded-lg text-sm"
                >
                  <option value="PASSWORD">Password</option>
                  <option value="PASSWORD_OTP">Password + OTP</option>
                  <option value="BIOMETRIC">Biometric</option>
                  <option value="SSO">SSO</option>
                </select>
              </F>

              {/* Checkboxes */}
              <div className="space-y-2 pt-2 border-t">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={formData.forcePasswordChange}
                    onChange={(e) =>
                      updateField("forcePasswordChange", e.target.checked)
                    }
                    className="rounded"
                  />
                  Force password change on first login
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={formData.twoFactorEnabled}
                    onChange={(e) =>
                      updateField("twoFactorEnabled", e.target.checked)
                    }
                    className="rounded"
                  />
                  Enable Two-Factor Authentication
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={formData.sendCredentialsViaSms}
                    onChange={(e) =>
                      updateField("sendCredentialsViaSms", e.target.checked)
                    }
                    className="rounded"
                  />
                  Send credentials via SMS
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={formData.sendCredentialsViaEmail}
                    onChange={(e) =>
                      updateField("sendCredentialsViaEmail", e.target.checked)
                    }
                    className="rounded"
                  />
                  Send credentials via Email
                </label>
              </div>

              {/* Submit error */}
              {submitError && (
                <div className="flex items-start gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  {submitError}
                </div>
              )}

              {/* Review Summary */}
              <div className="p-3 bg-muted rounded-lg text-xs space-y-1.5 border">
                <div className="font-semibold mb-2">Review Before Submit</div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Name</span>
                  <span className="font-medium">
                    {formData.firstName} {formData.lastName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email</span>
                  <span className="font-medium">{formData.email || "—"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Role</span>
                  <span className="font-medium">
                    {activeRoles.find((r) => r.id === formData.primaryRoleId)
                      ?.name || "—"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Permissions</span>
                  <span className="font-medium text-success">
                    {totalSelectedFeatures} assigned
                  </span>
                </div>
              </div>
            </div>
          </Section>
          {/* Copy Rights */}
          <Section
            title="Map Same Rights To Other Users / Departments"
            action={<Copy className="w-4 h-4 text-primary" />}
          >
            {/* User search */}
            <div className="mb-4">
              <label className="text-[11px] text-muted-foreground">
                Search & Select Users
              </label>
              <div className="relative mt-1">
                <Search className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={userSearch}
                  onChange={(e) => setUserSearch(e.target.value)}
                  placeholder="Search by name or employee ID…"
                  className="w-full pl-8 pr-2 py-2 border rounded-lg text-sm"
                />
              </div>

              <div className="mt-2 max-h-56 overflow-y-auto border rounded-lg divide-y">
                {usersLoading ? (
                  <div className="p-4 text-sm text-muted-foreground text-center">
                    Loading users...
                  </div>
                ) : (
                  existingUsers
                    .filter((u) =>
                      `${u.profile.firstName} ${u.profile.lastName} ${u.employeeId}`
                        .toLowerCase()
                        .includes(userSearch.toLowerCase()),
                    )
                    .map((u) => {
                      const checked = copyToUserIds.includes(u.id);
                      const primaryRole = u.roles.find((r) => r.isPrimary);
                      return (
                        <label
                          key={u.id}
                          className={`flex items-center gap-3 p-2.5 cursor-pointer ${
                            checked ? "bg-primary/5" : "hover:bg-muted"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() =>
                              setCopyToUserIds(
                                checked
                                  ? copyToUserIds.filter((x) => x !== u.id)
                                  : [...copyToUserIds, u.id],
                              )
                            }
                            className="rounded"
                          />
                          <div className="flex-1">
                            <div className="text-sm font-medium">
                              {u.profile.firstName} {u.profile.lastName}
                            </div>
                            <div className="text-[11px] text-muted-foreground">
                              {u.employeeId} ·{" "}
                              {primaryRole?.roleName || "No role"}
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        </label>
                      );
                    })
                )}
              </div>

              {copyToUserIds.length > 0 && (
                <div className="text-xs mt-2 text-primary">
                  {copyToUserIds.length} user(s) selected
                </div>
              )}
            </div>

            {/* Department mapping */}
            <div className="mb-4">
              <label className="text-[11px] text-muted-foreground">
                Map to Department(s)
              </label>
              {deptsLoading ? (
                <div className="text-sm text-muted-foreground mt-1">
                  Loading...
                </div>
              ) : (
                <select
                  multiple
                  value={copyToDeptIds}
                  onChange={(e) =>
                    setCopyToDeptIds(
                      Array.from(e.target.selectedOptions).map((o) => o.value),
                    )
                  }
                  className="w-full px-2 py-2 border rounded-lg text-sm mt-1 h-36"
                >
                  {departments.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name}
                    </option>
                  ))}
                </select>
              )}
              <div className="text-[11px] text-muted-foreground mt-1">
                Hold Ctrl / Cmd to select multiple
              </div>
            </div>

            {/* Warning note */}
            <div className="p-3 rounded-lg bg-warning/10 border border-warning/30 text-xs">
              <div className="font-semibold mb-1">⚠ Note</div>
              Selected users / departments will inherit the same module rights
              and permissions. Existing rights will be replaced.
            </div>

            <button
              disabled={
                copyToUserIds.length === 0 && copyToDeptIds.length === 0
              }
              className="mt-4 w-full px-4 py-2 rounded-lg border border-primary text-primary text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Copy className="w-4 h-4" /> Copy Rights to Selected
            </button>
          </Section>
        </div>
      )}

      {/* ── Footer nav ── */}
      <div className="mt-6 flex items-center justify-between bg-card border rounded-xl p-4">
        <button
          onClick={() => setStep(Math.max(1, step - 1))}
          disabled={step === 1}
          className="px-4 py-2 rounded-lg border text-sm disabled:opacity-40"
        >
          ← Previous
        </button>
        <div className="text-xs text-muted-foreground">
          Step {step} of {steps.length}
        </div>
        {step < steps.length ? (
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium cursor-pointer"
          >
            Next →
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="px-4 py-2 rounded-lg bg-success cursor-pointer text-white text-sm font-medium disabled:opacity-50"
          >
            {submitting ? "Creating..." : "✓ Register User & Save Rights"}
          </button>
        )}
      </div>
    </AppLayout>
  );
}

// ─── Field Wrapper ────────────────────────────────────────────────────────────
function F({
  label,
  children,
  className = "",
  error,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
  error?: string;
}) {
  return (
    <div className={className}>
      <label
        className={`text-[11px] ${
          error ? "text-destructive" : "text-muted-foreground"
        }`}
      >
        {label}
      </label>

      <div className="mt-1">{children}</div>

      {error && <p className="mt-1 text-[11px] text-destructive">{error}</p>}
    </div>
  );
}

// ─── Indeterminate Checkbox ───────────────────────────────────────────────────
function IndeterminateCheckbox({
  checked,
  indeterminate,
  onChange,
}: {
  checked: boolean;
  indeterminate: boolean;
  onChange: () => void;
}) {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  return (
    <input
      ref={ref}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="rounded"
    />
  );
}
