import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/hims/Kpi";
import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
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
  useRolePermissions,
  useHospitalUsers,
  useCreateUser,
} from "@/hooks/useUserManagement";

// Radix-based UI components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import DatePicker from "@/components/ui/date-picker";
import { showToast, ToastContainer } from "@/components/ui/toast";
import { useEntitlements } from "@/hooks/modules";
import { AppLayout } from "@/components/layout/AppLayout";
import { PageLoader } from "@/components/ui/pageLoader";
import { ApiError } from "@/lib/api";

export const Route = createFileRoute("/user-management")({
  head: () => ({ meta: [{ title: "User Management â€” Ojas1Cloud HIMS" }] }),
  component: UserManagement,
});

const PermissionPanel = lazy(
  () => import("@/components/user-management/PermissionPanel"),
);

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
          <Button
            onClick={copyAll}
            variant="outline"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium"
          >
            {copied ? (
              <Check className="w-4 h-4 text-success" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            {copied ? "Copied!" : "Copy Credentials"}
          </Button>
          <Button
            onClick={onClose}
            className="flex-1 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium"
          >
            Done
          </Button>
        </div>
      </div>
    </div>
  );
}

function UserManagement() {
  const [step, setStep] = useState(1);

  // â”€â”€â”€ API Hooks â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

  // â”€â”€â”€ User Type â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const [userType, setUserType] = useState<"REGULAR_USER" | "DOCTOR">(
    "REGULAR_USER",
  );
  const [lockedType, setLockedType] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem("um_userType");
      if (v === "DOCTOR") {
        localStorage.removeItem("um_userType");
        setUserType("DOCTOR");
        setLockedType(true);
      }
    } catch {}
  }, []);

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

  const [formData, setFormData] = useState({
    // User Info
    title: "Mr.",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    userType: "",
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

  // â”€â”€â”€ Permission State â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const [selectedPermissions, setSelectedPermissions] = useState<
    Record<string, boolean>
  >({});

  // â”€â”€â”€ Prefill from Primary Role â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const { permissions: rolePermissions, loading: rolePermsLoading } =
    useRolePermissions(formData.primaryRoleId || null);

  useEffect(() => {
    PageLoader.show();
    if (rolePermissions.length > 0) {
      const prefilled: Record<string, boolean> = {};
      rolePermissions.forEach((p) => {
        prefilled[`${p.moduleId}__${p.featureId}`] = true;
      });
      setSelectedPermissions(prefilled);
    } else {
      setSelectedPermissions({});
    }
    PageLoader.stop();
  }, [rolePermissions]);

  // â”€â”€â”€ Permission Helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

  // â”€â”€â”€ Copy Rights State â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

  // â”€â”€â”€ Success Modal â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

      if (!formData.mobile.trim()) {
        newErrors.mobile = "Mobile Number is required";
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
      showToast("error", "Please fill all required fields.");
    }
  };

  const goToStep = (target: number) => {
    if (target > step && !validateStep(step)) {
      showToast("error", "Please fill all required fields.");
      return;
    }
    setStep(target);
  };

  // â”€â”€â”€ Submit â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  async function handleSubmit() {
    if (!validateStep(step)) {
      showToast("error", "Please fill all required fields.");
      return;
    }

    try {
      PageLoader.show();
      const payload = {
        userInfo: {
          firstName: formData.firstName,
          lastName: formData.lastName || undefined,
          email: formData.email,
          mobile: formData.mobile || undefined,
          alternateMobile: formData.alternateMobile || undefined,
          userType: formData.userType || "REGULAR",
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
      showToast("success", "Details saved successfully");
      setSuccessData({
        employeeId: result.employeeId,
        email: result.email,
        tempPassword: result.tempPassword,
      });
    } catch (err) {
      showToast(
        "error",
        err instanceof ApiError
          ? err.message
          : "Unable to save details,Please try again later",
      );
      // error shown inline via submitError
    }finally{
      PageLoader.stop()
    }
  }

  // â”€â”€â”€ Render â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  return (
    <>
      <ToastContainer />

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
              userType: "",
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

      {/*Stepper Card*/}
      <div className="bg-card border  rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between">
          {steps.map((s, i) => {
            const Icon = s.i;
            const done = step > s.n;
            const active = step === s.n;
            return (
              <div key={s.n} className="flex items-center flex-1">
                <button
                  onClick={() => goToStep(s.n)}
                  className="flex cursor-pointer items-center gap-3"
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

      {/*  STEP 1- User Info*/}
      {step === 1 && (
        <Section title="Step 1 Â· User Information">
          <div className="grid grid-cols-3 gap-4">
            {/* Employee ID â€” auto generated */}
            <F label="Employee ID">
              <Input
                className="w-full px-2 py-2 border rounded-lg text-sm bg-muted cursor-not-allowed"
                placeholder="Auto-generated (e.g. EMP-0001)"
                disabled
              />
            </F>
            {/* User Type */}
            <F label="User Type *">
              <Select
                value={formData.userType}
                onValueChange={(v) =>
                  updateField("userType", v as "REGULAR_USER" | "DOCTOR")
                }
                disabled={lockedType}
              >
                <SelectTrigger className="w-full px-2 py-2 border rounded-lg text-sm disabled:opacity-70 disabled:cursor-not-allowed">
                  <SelectValue placeholder="Select User type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="REGULAR_USER">Regular User</SelectItem>
                  <SelectItem value="DOCTOR">Doctor</SelectItem>
                </SelectContent>
              </Select>
              {lockedType && (
                <div className="text-[10px] text-muted-foreground mt-1">
                  Locked â€” opened from Doctor Management
                </div>
              )}
            </F>
            {/* Title */}
            <F label="Title">
              <Select
                value={String(formData.title)}
                onValueChange={(v) => updateField("title", v)}
              >
                <SelectTrigger className="w-full px-2 py-2 border rounded-lg text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Mr.">Mr.</SelectItem>
                  <SelectItem value="Mrs.">Mrs.</SelectItem>
                  <SelectItem value="Ms.">Ms.</SelectItem>
                  <SelectItem value="Dr.">Dr.</SelectItem>
                </SelectContent>
              </Select>
            </F>
            {/* First Name */}
            <F label="First Name *" error={errors.firstName}>
              <Input
                id="field-firstName"
                value={formData.firstName}
                onChange={(e) => updateField("firstName", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
                placeholder="First name"
              />
            </F>
            {/* Last Name */}
            <F label="Last Name *" error={errors.lastName}>
              <Input
                id="field-lastName"
                value={formData.lastName}
                onChange={(e) => updateField("lastName", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
                placeholder="Last name"
              />
            </F>
            {/* Date of Birth */}
            <F label="Date of Birth">
              <DatePicker
                value={formData.dateOfBirth}
                onChange={(v) => updateField("dateOfBirth", v)}
                id="field-dateOfBirth"
                className="w-full px-2 py-2 border rounded-lg text-sm"
                placeholder="Date of birth"
              />
            </F>
            {/* Gender */}
            <F label="Gender">
              <Select
                value={String(formData.gender)}
                onValueChange={(v) => updateField("gender", v)}
              >
                <SelectTrigger className="w-full px-2 py-2 border rounded-lg text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Select Gender</SelectItem>
                  <SelectItem value="MALE">Male</SelectItem>
                  <SelectItem value="FEMALE">Female</SelectItem>
                  <SelectItem value="OTHER">Other</SelectItem>
                </SelectContent>
              </Select>
            </F>
            {/* Blood Group */}
            <F label="Blood Group">
              <Select
                value={String(formData.bloodGroup)}
                onValueChange={(v) => updateField("bloodGroup", v)}
              >
                <SelectTrigger className="w-full px-2 py-2 border rounded-lg text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {["A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"].map(
                    (g) => (
                      <SelectItem key={g} value={g}>
                        {g}
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>
            </F>
            {/* Mobile */}
            <F label="Mobile *" error={errors.mobile}>
              <Input
                id="field-mobile"
                value={formData.mobile}
                onChange={(e) =>
                  updateField("mobile", e.target.value.replace(/\D/g, ""))
                }
                className="w-full px-2 py-2 border rounded-lg text-sm"
                placeholder="10-digit mobile number"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={10}
              />
            </F>
            {/* Alternate Mobile */}
            <F label="Alternate Mobile">
              <Input
                value={formData.alternateMobile}
                onChange={(e) =>
                  updateField(
                    "alternateMobile",
                    e.target.value.replace(/\D/g, ""),
                  )
                }
                className="w-full px-2 py-2 border rounded-lg text-sm"
                placeholder="Optional â€” 10-digit mobile number"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={10}
              />
            </F>
            {/* Email */}
            <F label="Email *" error={errors.email}>
              <Input
                id="field-email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
                placeholder="name@hospital.com"
              />
            </F>
            {/* Designation */}
            <F label="Designation *" error={errors.designation}>
              <Input
                id="field-designation"
                value={formData.designation}
                onChange={(e) => updateField("designation", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
                placeholder="e.g. Consultant"
              />
            </F>
            {/* Department â€” from API */}
            <F label="Department *" error={errors.departmentIds}>
              {deptsLoading ? (
                <div className="px-2 py-2 text-sm text-muted-foreground border rounded-lg">
                  Loading departments...
                </div>
              ) : (
                <Select
                  value={String(formData.departmentIds[0] || "")}
                  onValueChange={(v) =>
                    updateField("departmentIds", v ? [Number(v)] : [])
                  }
                >
                  <SelectTrigger
                    id="field-departmentIds"
                    className="w-full px-2 py-2 border rounded-lg text-sm"
                  >
                    <SelectValue placeholder="-- Select Department --" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">-- Select Department --</SelectItem>
                    {departments.map((d) => (
                      <SelectItem key={d.id} value={String(d.id)}>
                        {d.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </F>
            {/* Primary Role â€” from API */}
            <F label="Role *" error={errors.primaryRoleId}>
              {rolesLoading ? (
                <div className="px-2 py-2 text-sm text-muted-foreground border rounded-lg">
                  Loading roles...
                </div>
              ) : (
                <Select
                  value={String(formData.primaryRoleId || "")}
                  onValueChange={(v) =>
                    updateField("primaryRoleId", v === "" ? "" : Number(v))
                  }
                >
                  <SelectTrigger
                    id="field-primaryRoleId"
                    className="w-full px-2 py-2 border rounded-lg text-sm"
                  >
                    <SelectValue placeholder="-- Select Role --" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">-- Select Role --</SelectItem>
                    {activeRoles.map((r) => (
                      <SelectItem key={r.id} value={String(r.id)}>
                        {r.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </F>
            {/* Additional Roles â€” from API */}
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
                        <Checkbox
                          className="rounded"
                          checked={formData.additionalRoleIds.includes(r.id)}
                          onCheckedChange={(v) => {
                            const ids = formData.additionalRoleIds;
                            const isChecked = !!v;
                            updateField(
                              "additionalRoleIds",
                              isChecked
                                ? [...ids, r.id]
                                : ids.filter((x) => x !== r.id),
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
              <DatePicker
                value={formData.dateOfJoining}
                onChange={(v) => updateField("dateOfJoining", v)}
                id="field-dateOfJoining"
                className="w-full max-w-52"
                placeholder="Date of joining"
              />
            </F>
            {/* Shift â€” from API */}
            <F label="Shift">
              {shiftsLoading ? (
                <div className="px-2 py-2 text-sm text-muted-foreground border rounded-lg">
                  Loading shifts...
                </div>
              ) : (
                <Select
                  value={String(formData.shiftId || "")}
                  onValueChange={(v) =>
                    updateField("shiftId", v === "" ? "" : Number(v))
                  }
                >
                  <SelectTrigger className="w-full px-2 py-2 border rounded-lg text-sm">
                    <SelectValue placeholder="-- Select Shift --" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">-- Select Shift --</SelectItem>
                    {shifts.map((s) => (
                      <SelectItem key={s.id} value={String(s.id)}>
                        {s.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </F>
            {/* Aadhaar */}
            <F label="Aadhaar Number">
              <Input
                value={formData.aadhaar}
                onChange={(e) =>
                  updateField("aadhaar", e.target.value.replace(/\D/g, ""))
                }
                className="w-full px-2 py-2 border rounded-lg text-sm"
                placeholder="12-digit Aadhaar (numbers only)"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={12}
              />
            </F>
            {/* PAN */}
            <F label="PAN Number">
              <Input
                value={formData.pan}
                onChange={(e) => updateField("pan", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
                placeholder="ABCDE1234F"
                maxLength={10}
                inputMode="text"
              />
            </F>
            {/* Medical Council */}
            <F label="Medical Council Reg. No.">
              <Input
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
              <Input
                value={formData.qualification}
                onChange={(e) => updateField("qualification", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
                placeholder="MBBS, MD, etc."
              />
            </F>
            {/* Specialization */}
            <F label="Specialization">
              <Input
                value={formData.specialization}
                onChange={(e) => updateField("specialization", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
                placeholder="e.g., Cardiology"
              />
            </F>
            {/* Address */}
            <F label="Address" className="col-span-2">
              <Input
                value={formData.address}
                onChange={(e) => updateField("address", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
                placeholder="Address
                "
              />
            </F>
            {/* City */}
            <F label="City">
              <Input
                value={formData.city}
                onChange={(e) => updateField("city", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
                placeholder="City"
              />
            </F>
            {/* State */}
            <F label="State">
              <Input
                value={formData.state}
                onChange={(e) => updateField("state", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
                placeholder="State"
              />
            </F>
            {/* Pincode */}
            <F label="Pincode">
              <Input
                value={formData.pincode}
                onChange={(e) => updateField("pincode", e.target.value)}
                className="w-full px-2 py-2 border rounded-lg text-sm"
                placeholder="Pincode"
              />
            </F>
            {/* Emergency Contact */}
            <F label="Emergency Contact">
              <Input
                value={formData.emergencyContact}
                onChange={(e) =>
                  updateField(
                    "emergencyContact",
                    e.target.value.replace(/\D/g, ""),
                  )
                }
                className="w-full px-2 py-2 border rounded-lg text-sm"
                placeholder="Emergency contact — 10-digit number"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={10}
              />
            </F>
            {/* Adjust all the fields according to the function */}
          </div>
        </Section>
      )}

      {/* Step 2 - Module Rights & Permissions */}
      {step === 2 && (
        <Section
          title="Step 2 Â· Module Rights & Permissions"
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
          <Suspense
            fallback={
              <div className="text-sm text-muted-foreground py-8 text-center">
                Loading permissions...
              </div>
            }
          >
            <PermissionPanel
              entitlements={entitlements}
              loading={modulesLoading}
              selectedPermissions={selectedPermissions}
              togglePermission={togglePermission}
              toggleAllModuleFeatures={toggleAllModuleFeatures}
              selectAllPermissions={selectAllPermissions}
              clearAllPermissions={clearAllPermissions}
              totalSelectedModules={totalSelectedModules}
              totalSelectedFeatures={totalSelectedFeatures}
              formDataPrimaryRoleId={formData.primaryRoleId}
              rolePermsLoading={rolePermsLoading}
              errors={errors}
            />
          </Suspense>
        </Section>
      )}

      {/* Step 3 - Credentials */}
      {step === 3 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Credentials */}
          <Section title="Step 3 Â· Credentials">
            <div className="space-y-4">
              {/* Username â€” auto from email */}
              <F label="Username (Email)">
                <Input
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
                <Input
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
                <Select
                  value={String(formData.loginType || "")}
                  onValueChange={(v) => updateField("loginType", v)}
                >
                  <SelectTrigger className="w-full px-2 py-2 border rounded-lg text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PASSWORD">Password</SelectItem>
                    <SelectItem value="PASSWORD_OTP">Password + OTP</SelectItem>
                    <SelectItem value="BIOMETRIC">Biometric</SelectItem>
                    <SelectItem value="SSO">SSO</SelectItem>
                  </SelectContent>
                </Select>
              </F>

              {/* Checkboxes */}
              <div className="space-y-2 pt-2 border-t">
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox
                    className="rounded"
                    checked={formData.forcePasswordChange}
                    onCheckedChange={(v) =>
                      updateField("forcePasswordChange", !!v)
                    }
                  />
                  Force password change on first login
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox
                    className="rounded"
                    checked={formData.twoFactorEnabled}
                    onCheckedChange={(v) =>
                      updateField("twoFactorEnabled", !!v)
                    }
                  />
                  Enable Two-Factor Authentication
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox
                    className="rounded"
                    checked={formData.sendCredentialsViaSms}
                    onCheckedChange={(v) =>
                      updateField("sendCredentialsViaSms", !!v)
                    }
                  />
                  Send credentials via SMS
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox
                    className="rounded"
                    checked={formData.sendCredentialsViaEmail}
                    onCheckedChange={(v) =>
                      updateField("sendCredentialsViaEmail", !!v)
                    }
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
                  <span className="font-medium">{formData.email || "â€”"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Role</span>
                  <span className="font-medium">
                    {activeRoles.find((r) => r.id === formData.primaryRoleId)
                      ?.name || "â€”"}
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
                <Input
                  value={userSearch}
                  onChange={(e) => setUserSearch(e.target.value)}
                  placeholder="Search by name or employee IDâ€¦"
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
                          <Checkbox
                            className="rounded"
                            checked={checked}
                            onCheckedChange={(v) =>
                              setCopyToUserIds(
                                !!v
                                  ? Array.from(
                                      new Set([...copyToUserIds, u.id]),
                                    )
                                  : copyToUserIds.filter((x) => x !== u.id),
                              )
                            }
                          />
                          <div className="flex-1">
                            <div className="text-sm font-medium">
                              {u.profile.firstName} {u.profile.lastName}
                            </div>
                            <div className="text-[11px] text-muted-foreground">
                              {u.employeeId} Â·{" "}
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
              <div className="font-semibold mb-1">âš  Note</div>
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

      {/* Footer nav */}
      <div className="mt-6 flex items-center justify-between bg-card border rounded-xl p-4">
        <Button
          onClick={() => setStep(Math.max(1, step - 1))}
          disabled={step === 1}
          variant="outline"
          className="px-4 py-2 rounded-lg text-sm disabled:opacity-40"
        >
          Previous
        </Button>
        <div className="text-xs text-muted-foreground">
          Step {step} of {steps.length}
        </div>
        {step < steps.length ? (
          <Button
            onClick={handleNext}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium cursor-pointer"
          >
            Next
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={submitting}
            className="px-4 py-2 rounded-lg bg-success cursor-pointer text-white text-sm font-medium disabled:opacity-50"
          >
            {submitting ? "Creating..." : "âœ“ Register User & Save Rights"}
          </Button>
        )}
      </div>
    </>
  );
}

// â”€â”€â”€ Field Wrapper â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
