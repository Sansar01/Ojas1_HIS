import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/hims/Kpi";
import { Kpi } from "@/components/hims/Kpi";
import { useApiQuery } from "@/lib/hooks/useApiResource";
import {
  UserPlus,
  Users,
  CheckCircle2,
  Clock,
  Camera,
  Fingerprint,
  IdCard,
  QrCode,
} from "lucide-react";
import { useState } from "react";
import {
  PatientFormDTO,
  PatientsResponse,
  PatientForm,
  PayType,
  VisitType,
} from "../types/patient";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Checkbox } from "@/components/ui/checkbox";
import { showToast, ToastContainer } from "@/components/ui/toast";
import { api } from "@/lib/api";
import { PageLoader } from "@/components/ui/pageLoader";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/patients/registration")({
  head: () => ({ meta: [{ title: "Patient Registration — Ojas1Cloud HIMS" }] }),
  component: Registration,
});

const recent = [
  ["OPD123460", "Ravi Verma", "60Y Male", "10:32 AM", "Diabetes OPD"],
  ["OPD123459", "Meena Kumari", "28Y Female", "10:18 AM", "Gynecology"],
  ["OPD123458", "Imran Khan", "32Y Male", "10:04 AM", "Orthopedics"],
  ["OPD123457", "Sunita Devi", "45Y Female", "09:52 AM", "General Med"],
  ["OPD123456", "Ramesh Patel", "58Y Male", "09:40 AM", "Cardiology"],
];

function Registration() {
  const initialForm: PatientFormDTO = {
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: null,
    age: "",
    ageUnit: "years",
    bloodGroup: "",
    maritalStatus: "",

    mobile: "",
    alternateMobile: "",
    email: "",

    address: "",
    city: "",
    district: "",
    state: "",
    country: "",
    pincode: "",
    consultingDoctor: "",

    aadhaarNumber: "",
    abhaId: "",

    guardianName: "",
    guardianRelation: "",
    guardianMobile: "",

    insuranceProvider: "",
    insurancePolicyNo: "",
    insuranceValidTill: null,

    allergies: "",
    chronicDiseases: "",
  };

  const [form, setForm] = useState<PatientFormDTO>(initialForm);
  type PatientFieldErrors = Partial<Record<keyof PatientFormDTO, string>>;

  const [errors, setErrors] = useState<PatientFieldErrors>({});

  const [visitType, setVisitType] = useState<VisitType>("new");

  const [payType, setPayType] = useState<PayType>("self");

  const updatePatientField = <K extends keyof PatientFormDTO>(
    field: K,
    value: PatientFormDTO[K],
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: undefined,
    }));
  };

  const validateField = (
    field: keyof PatientFormDTO,
    value: PatientFormDTO[keyof PatientFormDTO],
  ) => {
    let error = "";

    switch (field) {
      case "firstName":
        if (!String(value).trim()) {
          error = "First name is required";
        }

        break;

      case "lastName":
        if (!String(value).trim()) {
          error = "Last name is required";
        }

        break;

      case "gender":
        if (!value) {
          error = "Gender is required";
        }

        break;

      case "mobile": {
        const mobile = String(value).replace(/\D/g, "");

        if (!mobile) {
          error = "Mobile number is required";
        } else if (!/^[6-9]\d{9}$/.test(mobile)) {
          error = "Enter a valid 10-digit mobile number";
        }

        break;
      }

      case "alternateMobile": {
        const mobile = Number(value);

        if (mobile) {
          error = "Enter a valid mobile number";
        }

        break;
      }

      case "email":
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value))) {
          error = "Enter a valid email address";
        }

        break;

      case "pincode":
        if (value && !/^\d{6}$/.test(String(value))) {
          error = "Enter a valid 6-digit pincode";
        }

        break;

      case "aadhaarNumber": {
        const aadhaar = String(value).replace(/\D/g, "");

        if (aadhaar && !/^\d{12}$/.test(aadhaar)) {
          error = "Aadhaar number must contain 12 digits";
        }

        break;
      }

      case "abhaId": {
        const abha = String(value).replace(/\D/g, "");

        if (abha && !/^\d{14}$/.test(abha)) {
          error = "ABHA ID must contain 14 digits";
        }

        break;
      }

      case "age":
        if (value && (!/^\d+$/.test(String(value)) || Number(value) < 0)) {
          error = "Enter a valid age";
        }

        break;

      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [field]: error || undefined,
    }));

    return !error;
  };

  const validateForm = () => {
    const requiredFields: (keyof PatientFormDTO)[] = [
      "firstName",
      "lastName",
      "gender",
      "mobile",
    ];

    let valid = true;

    requiredFields.forEach((field) => {
      const result = validateField(field, form[field]);

      if (!result) {
        valid = false;
      }
    });

    if (form.email) {
      if (!validateField("email", form.email)) {
        valid = false;
      }
    }

    if (form.pincode) {
      if (!validateField("pincode", form.pincode)) {
        valid = false;
      }
    }

    if (form.aadhaarNumber) {
      if (!validateField("aadhaarNumber", form.aadhaarNumber)) {
        valid = false;
      }
    }

    if (form.abhaId) {
      if (!validateField("abhaId", form.abhaId)) {
        valid = false;
      }
    }

    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      if (!validateForm()) {
        showToast("error", "Please fill all required fields");
        return;
      }
      PageLoader.show();
      const payload = {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim() || undefined,
        gender: form.gender,

        dateOfBirth: form.dateOfBirth
          ? form.dateOfBirth.toISOString().split("T")[0]
          : undefined,

        age: form.age ? Number(form.age) : undefined,

        ageUnit: form.ageUnit || undefined,
        bloodGroup: form.bloodGroup || undefined,
        maritalStatus: form.maritalStatus || undefined,

        mobile: form.mobile,
        alternateMobile: Number(form.alternateMobile) || undefined,

        email: form.email.trim().toLowerCase() || undefined,

        address: form.address.trim() || undefined,
        city: form.city.trim() || undefined,
        district: form.district.trim() || undefined,
        state: form.state.trim() || undefined,
        pincode: form.pincode || undefined,
        country: form.country?.trim() || undefined,
        consultingDoctor: form.consultingDoctor?.trim() || undefined,
        department: form.department?.trim() || undefined,

        aadhaarNumber: form.aadhaarNumber || undefined,
        abhaId: form.abhaId.trim() || undefined,

        guardianName: form.guardianName.trim() || undefined,
        guardianRelation: form.guardianRelation || undefined,
        guardianMobile: Number(form.guardianMobile) || undefined,

        insuranceProvider: form.insuranceProvider.trim() || undefined,

        insurancePolicyNo: form.insurancePolicyNo.trim() || undefined,

        insuranceValidTill: form.insuranceValidTill
          ? form.insuranceValidTill.toISOString().split("T")[0]
          : undefined,

        allergies: form.allergies.trim() || undefined,
        chronicDiseases: form.chronicDiseases.trim() || undefined,
      };

      await api.post("/api/opd/patients/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: payload,
      });

      showToast("success", "Details saved successfully");
    } catch (error) {
      showToast("error", "Unable to save details,Please try again");
    } finally {
      PageLoader.stop();
    }
  };

  const handleClear = () => {
    setForm(initialForm);
    setErrors({});
    setVisitType("new");
    setPayType("self");
  };

  const { data, isLoading, error } = useApiQuery<{
    registrationMetrics: {
      registeredToday: number;
      newPatients: number;
      revisits: number;
      avgRegTimeMinutes: number;
    };
  }>(["registration-metrics"], "/registration/metrics", { staleTime: 30_000 });

  const metrics = data?.registrationMetrics;

  return (
    <>
      <PageLoader.Component />

      <ToastContainer />
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Patient Registration</h1>
          <p className="text-sm text-muted-foreground">
            Register new patient or search existing UHID / ABHA
          </p>
        </div>
        <div className="flex gap-2 text-xs">
          <button className="px-3 py-2 rounded-lg border flex items-center gap-2">
            <QrCode className="w-4 h-4" /> Scan ABHA
          </button>
          <button className="px-3 py-2 rounded-lg border flex items-center gap-2">
            <Fingerprint className="w-4 h-4" /> Biometric
          </button>
          <button className="px-3 py-2 rounded-lg border flex items-center gap-2">
            <IdCard className="w-4 h-4" /> Aadhaar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <Kpi
          icon={UserPlus}
          label="Registered Today"
          value={isLoading ? "—" : `${metrics?.registeredToday ?? 128}`}
          delta="8%"
          tone="primary"
        />
        <Kpi
          icon={Users}
          label="New Patients"
          value={isLoading ? "—" : `${metrics?.newPatients ?? 42}`}
          delta="12%"
          tone="info"
        />
        <Kpi
          icon={CheckCircle2}
          label="Revisits"
          value={isLoading ? "—" : `${metrics?.revisits ?? 86}`}
          delta="6%"
          tone="success"
        />
        <Kpi
          icon={Clock}
          label="Avg Reg. Time"
          value={isLoading ? "—" : `${metrics?.avgRegTimeMinutes ?? 135} min`}
          tone="warning"
        />
      </div>

      {error ? (
        <div className="mb-6 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
          Registration metrics could not be loaded. Using fallback values.
        </div>
      ) : null}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Section title="New Patient Registration" className="lg:col-span-3">
          {/* Photo + Basic */}
          <div className="mb-5 grid grid-cols-4 gap-4">
            <div className="col-span-1 flex flex-col items-center gap-2">
              <div className="flex aspect-square w-full flex-col items-center justify-center rounded-lg border-2 border-dashed text-muted-foreground">
                <Camera className="mb-2 h-8 w-8" />

                <div className="text-xs">Capture Photo</div>
              </div>

              <button type="button" className="text-xs text-primary">
                Upload from device
              </button>
            </div>

            <div className="col-span-3 grid grid-cols-3 gap-3">
              {/* Title */}
              <Field label="Title">
                <Select
                  value={form.title}
                  onValueChange={(value) => updatePatientField("title", value)}
                >
                  <SelectTrigger className="w-full px-2 py-2 border rounded-lg text-sm disabled:opacity-70 disabled:cursor-not-allowed">
                    <SelectValue placeholder="Select title" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="Mr.">Mr.</SelectItem>

                    <SelectItem value="Mrs.">Mrs.</SelectItem>

                    <SelectItem value="Ms.">Ms.</SelectItem>

                    <SelectItem value="Dr.">Dr.</SelectItem>

                    <SelectItem value="Master">Master</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              {/* First Name */}
              <Field label="First Name *">
                <Input
                  value={form.firstName}
                  placeholder="First name"
                  onChange={(e) =>
                    updatePatientField("firstName", e.target.value)
                  }
                  onBlur={() => validateField("firstName", form.firstName)}
                  className={errors.firstName ? "border-destructive" : ""}
                />

                {errors.firstName && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.firstName}
                  </p>
                )}
              </Field>

              {/* Last Name */}
              <Field label="Last Name *">
                <Input
                  value={form.lastName}
                  placeholder="Last name"
                  onChange={(e) =>
                    updatePatientField("lastName", e.target.value)
                  }
                  onBlur={() => validateField("lastName", form.lastName)}
                  className={errors.lastName ? "border-destructive" : ""}
                />

                {errors.lastName && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.lastName}
                  </p>
                )}
              </Field>

              {/* Date of Birth */}
              <Field label="Date of Birth">
                <Input
                  type="date"
                  value={
                    form.dateOfBirth
                      ? form.dateOfBirth.toISOString().split("T")[0]
                      : ""
                  }
                  onChange={(e) =>
                    updatePatientField(
                      "dateOfBirth",
                      e.target.value
                        ? new Date(`${e.target.value}T00:00:00`)
                        : null,
                    )
                  }
                />
              </Field>

              {/* Age */}
              <Field label="Age">
                <Input
                  type="number"
                  min={0}
                  value={form.age}
                  placeholder="Years"
                  onChange={(e) => updatePatientField("age", e.target.value)}
                  onBlur={() => validateField("age", form.age)}
                  className={errors.age ? "border-destructive" : ""}
                />

                {errors.age && (
                  <p className="mt-1 text-xs text-destructive">{errors.age}</p>
                )}
              </Field>

              {/* Gender */}
              <Field label="Gender *">
                <Select
                  value={form.gender}
                  onValueChange={(value) => {
                    updatePatientField("gender", value);
                    validateField("gender", value);
                  }}
                >
                  <SelectTrigger
                    className={`w-full ${
                      errors.gender ? "border-destructive" : ""
                    }`}
                  >
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="MALE">Male</SelectItem>
                    <SelectItem value="FEMATE">Female</SelectItem>
                    <SelectItem value="OTHER">Other</SelectItem>
                  </SelectContent>
                </Select>

                {errors.gender && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.gender}
                  </p>
                )}
              </Field>

              {/* Mobile */}
              <Field label="Mobile *">
                <Input
                  type="tel"
                  maxLength={10}
                  value={form.mobile}
                  placeholder="98xxxxxxxx"
                  onChange={(e) =>
                    updatePatientField(
                      "mobile",
                      e.target.value.replace(/\D/g, ""),
                    )
                  }
                  onBlur={() => validateField("mobile", form.mobile)}
                  className={errors.mobile ? "border-destructive" : ""}
                />

                {errors.mobile && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.mobile}
                  </p>
                )}
              </Field>

              {/* Alternate Mobile */}
              <Field label="Alt Mobile">
                <Input
                  type="tel"
                  maxLength={10}
                  value={form.alternateMobile}
                  onChange={(e) =>
                    updatePatientField("alternateMobile", e.target.value)
                  }
                  onBlur={() =>
                    validateField("alternateMobile", form.alternateMobile)
                  }
                  className={errors.alternateMobile ? "border-destructive" : ""}
                />

                {errors.alternateMobile && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.alternateMobile}
                  </p>
                )}
              </Field>

              {/* Email */}
              <Field label="Email">
                <Input
                  type="email"
                  value={form.email}
                  placeholder="name@email.com"
                  onChange={(e) => updatePatientField("email", e.target.value)}
                  onBlur={() => validateField("email", form.email)}
                  className={errors.email ? "border-destructive" : ""}
                />

                {errors.email && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.email}
                  </p>
                )}
              </Field>

              {/* Department */}
              <Field label="Department">
                <Select
                  value={form.department}
                  onValueChange={(value) =>
                    updatePatientField("department", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="Cardiology">Cardiology</SelectItem>

                    <SelectItem value="Orthopedics">Orthopedics</SelectItem>

                    <SelectItem value="General Medicine">
                      General Medicine
                    </SelectItem>

                    <SelectItem value="Dermatology">Dermatology</SelectItem>

                    <SelectItem value="Gynecology">Gynecology</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              {/* Consulting Doctor */}
              <Field label="Consulting Doctor">
                <Select
                  value={form.consultingDoctor}
                  onValueChange={(value) =>
                    updatePatientField("consultingDoctor", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select doctor" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="Dr. Arjun Mehta">
                      Dr. Arjun Mehta
                    </SelectItem>

                    <SelectItem value="Dr. Neha Sharma">
                      Dr. Neha Sharma
                    </SelectItem>

                    <SelectItem value="Dr. Rajeev Kumar">
                      Dr. Rajeev Kumar
                    </SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              {/* Blood Group */}
              <Field label="Blood Group">
                <Select
                  value={form.bloodGroup}
                  onValueChange={(value) =>
                    updatePatientField("bloodGroup", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select blood group" />
                  </SelectTrigger>

                  <SelectContent>
                    {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(
                      (group) => (
                        <SelectItem key={group} value={group}>
                          {group}
                        </SelectItem>
                      ),
                    )}
                  </SelectContent>
                </Select>
              </Field>

              {/* Marital Status */}
              <Field label="Marital Status">
                <Select
                  value={form.maritalStatus}
                  onValueChange={(value) =>
                    updatePatientField("maritalStatus", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="Single">Single</SelectItem>

                    <SelectItem value="Married">Married</SelectItem>

                    <SelectItem value="Widowed">Widowed</SelectItem>

                    <SelectItem value="Divorced">Divorced</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>
          </div>

          {/* IDs */}
          <div className="mb-5 grid grid-cols-3 gap-3">
            <Field label="ABHA ID / Health ID">
              <Input
                value={form.abhaId}
                maxLength={14}
                placeholder="14-digit ABHA"
                onChange={(e) =>
                  updatePatientField(
                    "abhaId",
                    e.target.value.replace(/\D/g, ""),
                  )
                }
                onBlur={() => validateField("abhaId", form.abhaId)}
                className={errors.abhaId ? "border-destructive" : ""}
              />

              {errors.abhaId && (
                <p className="mt-1 text-xs text-destructive">{errors.abhaId}</p>
              )}
            </Field>

            <Field label="Aadhaar Number">
              <Input
                value={form.aadhaarNumber}
                maxLength={12}
                placeholder="xxxx-xxxx-xxxx"
                onChange={(e) =>
                  updatePatientField(
                    "aadhaarNumber",
                    e.target.value.replace(/\D/g, ""),
                  )
                }
                onBlur={() =>
                  validateField("aadhaarNumber", form.aadhaarNumber)
                }
                className={errors.aadhaarNumber ? "border-destructive" : ""}
              />

              {errors.aadhaarNumber && (
                <p className="mt-1 text-xs text-destructive">
                  {errors.aadhaarNumber}
                </p>
              )}
            </Field>
          </div>

          {/* Address */}
          <div className="mb-5 grid grid-cols-2 gap-3">
            <Field label="Address Line 1" className="col-span-2">
              <Input
                value={form.address}
                placeholder="Address line 1"
                onChange={(e) => updatePatientField("address", e.target.value)}
              />
            </Field>

            <Field label="City">
              <Input
                value={form.city}
                placeholder="City"
                onChange={(e) => updatePatientField("city", e.target.value)}
              />
            </Field>

            <Field label="State">
              <Input
                value={form.state}
                placeholder="State"
                onChange={(e) => updatePatientField("state", e.target.value)}
              />
            </Field>

            <Field label="Pincode">
              <Input
                value={form.pincode}
                maxLength={6}
                inputMode="numeric"
                placeholder="Pincode"
                onChange={(e) =>
                  updatePatientField(
                    "pincode",
                    e.target.value.replace(/\D/g, ""),
                  )
                }
                onBlur={() => validateField("pincode", form.pincode)}
                className={errors.pincode ? "border-destructive" : ""}
              />

              {errors.pincode && (
                <p className="mt-1 text-xs text-destructive">
                  {errors.pincode}
                </p>
              )}
            </Field>

            <Field label="Country">
              <Input
                value={form.country}
                placeholder="Country"
                onChange={(e) => updatePatientField("country", e.target.value)}
              />
            </Field>
          </div>

          {/* Visit / Payment */}
          <div className="mb-5 grid grid-cols-2 gap-6">
            {/* Visit */}
            <div>
              <div className="mb-2 text-sm font-semibold">Visit Type</div>

              <RadioGroup
                value={visitType}
                onValueChange={(value) => setVisitType(value as VisitType)}
                className="grid grid-cols-3 gap-2"
              >
                {[
                  {
                    label: "New",
                    value: "new",
                  },
                  {
                    label: "Revisit",
                    value: "revisit",
                  },
                  {
                    label: "Emergency",
                    value: "emergency",
                  },
                ].map((item) => (
                  <label
                    key={item.value}
                    className={`cursor-pointer rounded-lg border px-3 py-2 text-center text-xs capitalize ${
                      visitType === item.value
                        ? "border-primary bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    <RadioGroupItem value={item.value} className="sr-only" />

                    {item.label}
                  </label>
                ))}
              </RadioGroup>
            </div>

            {/* Payment */}
            <div>
              <div className="mb-2 text-sm font-semibold">Payment Type</div>

              <RadioGroup
                value={payType}
                onValueChange={(value) => setPayType(value as PayType)}
                className="grid grid-cols-3 gap-2"
              >
                {[
                  {
                    label: "Self Pay",
                    value: "self",
                  },
                  {
                    label: "Insurance",
                    value: "insuranceProvider",
                  },
                  {
                    label: "Corporate",
                    value: "corporate",
                  },
                ].map((item) => (
                  <label
                    key={item.value}
                    className={`cursor-pointer rounded-lg border px-3 py-2 text-center text-xs capitalize ${
                      payType === item.value
                        ? "border-primary bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    <RadioGroupItem value={item.value} className="sr-only" />

                    {item.label}
                  </label>
                ))}
              </RadioGroup>
              {/* Self Pay */}
              {payType === "self" && (
                <div className="mt-3 p-3 rounded-lg bg-muted/40 text-xs text-muted-foreground">
                  Patient will pay directly. Consultation fee will apply at
                  billing.
                </div>
              )}

              {/* coorporate */}

              {payType === "corporate" && (
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <Field label="Company">
                    <Input
                      value={form.insurancePolicyNo}
                      placeholder="Company Name"
                      onChange={(e) =>
                        updatePatientField("companyName", e.target.value)
                      }
                    />
                  </Field>
                  <Field label="Employee ID">
                    <Input
                      value={form.insurancePolicyNo}
                      placeholder="Employee Id"
                      onChange={(e) =>
                        updatePatientField("empId", e.target.value)
                      }
                    />
                  </Field>
                </div>
              )}

              {/* Insurance */}
              {payType === "insuranceProvider" && (
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <Field label="Insurer">
                    <Select
                      value={form.insuranceProvider}
                      onValueChange={(value) =>
                        updatePatientField("insuranceProvider", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select insurer" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="Star Health">Star Health</SelectItem>

                        <SelectItem value="Aditya Birla">
                          Aditya Birla
                        </SelectItem>

                        <SelectItem value="HDFC ERGO">HDFC ERGO</SelectItem>

                        <SelectItem value="Max Bupa">Max Bupa</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>

                  <Field label="Policy No.">
                    <Input
                      value={form.insurancePolicyNo}
                      placeholder="Policy No"
                      onChange={(e) =>
                        updatePatientField("insurancePolicyNo", e.target.value)
                      }
                    />
                  </Field>

                  <Field label="Coverage">
                    <Select
                      value={form.coverage}
                      onValueChange={(value) =>
                        updatePatientField("coverage", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select coverage" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="Cashless">Cashless</SelectItem>

                        <SelectItem value="Reimbursement">
                          Reimbursement
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t pt-4">
            {/* Radix Checkbox */}
            <label className="flex cursor-pointer items-center gap-2 text-xs text-muted-foreground">
              <Checkbox
                checked={form.sendNotification}
                onCheckedChange={(checked) =>
                  updatePatientField("sendNotification", checked === true)
                }
              />

              <span>Send SMS / WhatsApp with UHID & token</span>
            </label>

            <div className="flex gap-2">
              <Button
                type="button"
                onClick={handleClear}
                className="rounded-lg border px-4 py-2 text-sm"
              >
                Clear
              </Button>

              <Button
                type="submit"
                onClick={handleSubmit}
                className="rounded-lg bg-primary cursor-pointer px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                Save
              </Button>
            </div>
          </div>
        </Section>

        <Section title="Recent Registrations">
          <div className="space-y-2">
            {recent.map((r) => (
              <div key={r[0]} className="p-3 border rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono px-1.5 py-0.5 bg-muted rounded">
                    {r[0]}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {r[3]}
                  </span>
                </div>
                <div className="font-semibold text-sm mt-1">{r[1]}</div>
                <div className="text-xs text-muted-foreground">
                  {r[2]} · {r[4]}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-lg bg-info/10 border border-info/20 text-xs">
            <div className="font-semibold mb-1">💡 Quick Tip</div>
            Use ABHA / Mobile lookup first to avoid creating duplicate UHIDs for
            existing patients.
          </div>
        </Section>
      </div>
    </>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-[11px] text-muted-foreground">{label}</label>
      <div className="mt-1">{children}</div>
    </div>
  );
}
