import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import { Section } from "@/components/hims/Kpi";
import { useApiQuery } from "@/lib/hooks/useApiResource";
import { useState } from "react";

import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputMask } from "primereact/inputmask";
import { Button } from "primereact/button";
import {
  PatientFormDTO,
  genderOptions,
  ageUnitOptions,
  relationOptions,
  bloodGroupOptions,
  maritalStatusOptions,
} from "../types/patient";

export const Route = createFileRoute("/patients")({
  head: () => ({ meta: [{ title: "Patients — Ojas1Cloud HIMS" }] }),
  component: Patients,
});

const rows = [
  [
    "OPD123456",
    "Ramesh Patel",
    "58Y",
    "Male",
    "9876543210",
    "A+",
    "Star Health",
    "12 May 2025",
  ],
  [
    "OPD123457",
    "Sunita Devi",
    "45Y",
    "Female",
    "9812345678",
    "B+",
    "Self Pay",
    "18 May 2025",
  ],
  [
    "OPD123458",
    "Imran Khan",
    "32Y",
    "Male",
    "9823456701",
    "O+",
    "HDFC ERGO",
    "15 May 2025",
  ],
  [
    "OPD123459",
    "Meena Kumari",
    "28Y",
    "Female",
    "9834567012",
    "AB+",
    "Aditya Birla",
    "10 May 2025",
  ],
  [
    "OPD123460",
    "Ravi Verma",
    "60Y",
    "Male",
    "9845670123",
    "O-",
    "Reliance",
    "20 May 2025",
  ],
];

const initialPatientForm: PatientFormDTO = {
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
  pincode: "",

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

function Patients() {
  const [showPatientDialog, setShowPatientDialog] = useState(false);
  const [patientForm, setPatientForm] =
    useState<PatientFormDTO>(initialPatientForm);

  const [submitted, setSubmitted] = useState(false);

  const updatePatientField = <K extends keyof PatientFormDTO>(
    field: K,
    value: PatientFormDTO[K],
  ) => {
    setPatientForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const openNewPatient = () => {
    setPatientForm(initialPatientForm);
    setSubmitted(false);
    setShowPatientDialog(true);
  };

  const closePatientDialog = () => {
    setShowPatientDialog(false);
    setSubmitted(false);
  };

  const handlePatientSubmit = async () => {
    setSubmitted(true);

    if (
      !patientForm.firstName.trim() ||
      !patientForm.gender ||
      !patientForm.mobile
    ) {
      return;
    }

    const payload = {
      firstName: patientForm.firstName.trim(),
      lastName: patientForm.lastName.trim() || undefined,
      gender: patientForm.gender,

      dateOfBirth: patientForm.dateOfBirth
        ? patientForm.dateOfBirth.toISOString().split("T")[0]
        : undefined,

      age: patientForm.age ? Number(patientForm.age) : undefined,

      ageUnit: patientForm.ageUnit || undefined,
      bloodGroup: patientForm.bloodGroup || undefined,
      maritalStatus: patientForm.maritalStatus || undefined,

      mobile: patientForm.mobile.replace(/\s/g, ""),
      alternateMobile:
        patientForm.alternateMobile.replace(/\s/g, "") || undefined,

      email: patientForm.email.trim().toLowerCase() || undefined,

      address: patientForm.address.trim() || undefined,
      city: patientForm.city.trim() || undefined,
      district: patientForm.district.trim() || undefined,
      state: patientForm.state.trim() || undefined,
      pincode: patientForm.pincode || undefined,

      aadhaarNumber: patientForm.aadhaarNumber || undefined,
      abhaId: patientForm.abhaId.trim() || undefined,

      guardianName: patientForm.guardianName.trim() || undefined,
      guardianRelation: patientForm.guardianRelation || undefined,
      guardianMobile:
        patientForm.guardianMobile.replace(/\s/g, "") || undefined,

      insuranceProvider: patientForm.insuranceProvider.trim() || undefined,

      insurancePolicyNo: patientForm.insurancePolicyNo.trim() || undefined,

      insuranceValidTill: patientForm.insuranceValidTill
        ? patientForm.insuranceValidTill.toISOString().split("T")[0]
        : undefined,

      allergies: patientForm.allergies.trim() || undefined,
      chronicDiseases: patientForm.chronicDiseases.trim() || undefined,
    };

    console.log("Create Patient Payload:", payload);

    // Example:
    // await patientService.createPatient(payload);

    setShowPatientDialog(false);
    setSubmitted(false);

    // Reload patients here
    // await loadPatients();
  };

  const { data, isLoading, error } = useApiQuery<{
    patients: Array<{
      uid: string;
      name: string;
      age: string;
      gender: string;
      mobile: string;
      bloodGroup: string;
      insurance: string;
      lastVisit: string;
    }>;
  }>(["patients"], "/patients", { staleTime: 30_000 });

  const rows = (data?.patients ?? []).map((patient) => [
    patient.uid,
    patient.name,
    patient.age,
    patient.gender,
    patient.mobile,
    patient.bloodGroup,
    patient.insurance,
    patient.lastVisit,
  ]);

  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Patients</h1>
        <p className="text-sm text-muted-foreground">Master patient records</p>
      </div>
      {error ? (
        <div className="mb-4 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
          Patient list could not be loaded. Please try again.
        </div>
      ) : null}

      {/* New Patients */}

      <Section
        title="Patient Directory"
        action={
          <button
            type="button"
            onClick={openNewPatient}
            className="text-xs px-3 py-1.5 bg-primary text-primary-foreground rounded"
          >
            + New Patient
          </button>
        }
      >
        {isLoading ? (
          <div className="text-sm text-muted-foreground">Loading patients…</div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-muted-foreground border-b">
                <th className="pb-2">UHID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Mobile</th>
                <th>Blood</th>
                <th>Insurance</th>
                <th>Last Visit</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((r) => (
                <tr
                  key={r[0]}
                  className="border-b last:border-0 hover:bg-muted/30"
                >
                  <td className="py-3 font-mono text-xs">{r[0]}</td>
                  <td className="font-medium">{r[1]}</td>
                  <td>{r[2]}</td>
                  <td>{r[3]}</td>
                  <td>{r[4]}</td>
                  <td>{r[5]}</td>
                  <td className="text-muted-foreground">{r[6]}</td>
                  <td>{r[7]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Section>

      {/* Patient Form */}

      <Dialog
        header="Register New Patient"
        visible={showPatientDialog}
        onHide={closePatientDialog}
        modal
        className="w-[95vw] md:w-[85vw] lg:w-[75vw]"
        breakpoints={{
          "960px": "90vw",
          "640px": "95vw",
        }}
        footer={
          <div className="flex justify-end gap-2">
            <Button
              label="Cancel"
              severity="secondary"
              outlined
              onClick={closePatientDialog}
            />

            <Button
              label="Create Patient"
              icon="pi pi-check"
              onClick={handlePatientSubmit}
            />
          </div>
        }
      >
        <div className="space-y-6">
          {/* ========================================================= */}
          {/* PERSONAL DETAILS */}
          {/* ========================================================= */}

          <div>
            <h3 className="text-sm font-semibold mb-4">Personal Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>

                <InputText
                  value={patientForm.firstName}
                  onChange={(e) =>
                    updatePatientField("firstName", e.target.value)
                  }
                  className={`w-full ${
                    submitted && !patientForm.firstName.trim()
                      ? "p-invalid"
                      : ""
                  }`}
                  size="small"
                  placeholder="Enter first name"
                />

                {submitted && !patientForm.firstName.trim() && (
                  <small className="text-red-500">First name is required</small>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name
                </label>

                <InputText
                  value={patientForm.lastName}
                  onChange={(e) =>
                    updatePatientField("lastName", e.target.value)
                  }
                  className="w-full"
                  placeholder="Enter last name"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Gender <span className="text-red-500">*</span>
                </label>

                <Dropdown
                  value={patientForm.gender}
                  options={genderOptions}
                  onChange={(e) => updatePatientField("gender", e.value)}
                  optionLabel="label"
                  optionValue="value"
                  placeholder="Select gender"
                  className={`w-full ${
                    submitted && !patientForm.gender ? "p-invalid" : ""
                  }`}
                />

                {submitted && !patientForm.gender && (
                  <small className="text-red-500">Gender is required</small>
                )}
              </div>

              {/* DOB */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Date of Birth
                </label>

                <Calendar
                  value={patientForm.dateOfBirth}
                  onChange={(e) =>
                    updatePatientField("dateOfBirth", e.value ?? null)
                  }
                  dateFormat="yy-mm-dd"
                  showIcon
                  className="w-full"
                  inputClassName="w-full"
                  maxDate={new Date()}
                  placeholder="Select date"
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-medium mb-1">Age</label>

                <InputText
                  keyfilter="int"
                  value={patientForm.age}
                  onChange={(e) => updatePatientField("age", e.target.value)}
                  className="w-full"
                  placeholder="Age"
                />
              </div>

              {/* Age Unit */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Age Unit
                </label>

                <Dropdown
                  value={patientForm.ageUnit}
                  options={ageUnitOptions}
                  onChange={(e) => updatePatientField("ageUnit", e.value)}
                  optionLabel="label"
                  optionValue="value"
                  className="w-full"
                />
              </div>

              {/* Blood Group */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Blood Group
                </label>

                <Dropdown
                  value={patientForm.bloodGroup}
                  options={bloodGroupOptions}
                  onChange={(e) => updatePatientField("bloodGroup", e.value)}
                  optionLabel="label"
                  optionValue="value"
                  placeholder="Select blood group"
                  className="w-full"
                />
              </div>

              {/* Marital Status */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Marital Status
                </label>

                <Dropdown
                  value={patientForm.maritalStatus}
                  options={maritalStatusOptions}
                  onChange={(e) => updatePatientField("maritalStatus", e.value)}
                  optionLabel="label"
                  optionValue="value"
                  placeholder="Select status"
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* CONTACT */}
          {/* ========================================================= */}

          <div>
            <h3 className="text-sm font-semibold mb-4">Contact Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Mobile */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Mobile <span className="text-red-500">*</span>
                </label>

                <InputMask
                  mask="99999 99999"
                  value={patientForm.mobile}
                  onChange={(e) => updatePatientField("mobile", e.value ?? "")}
                  className={`w-full ${
                    submitted && !patientForm.mobile ? "p-invalid" : ""
                  }`}
                  placeholder="99999 99999"
                />

                {submitted && !patientForm.mobile && (
                  <small className="text-red-500">
                    Mobile number is required
                  </small>
                )}
              </div>

              {/* Alternate Mobile */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Alternate Mobile
                </label>

                <InputMask
                  mask="99999 99999"
                  value={patientForm.alternateMobile}
                  onChange={(e) =>
                    updatePatientField("alternateMobile", e.value ?? "")
                  }
                  className="w-full"
                  placeholder="99999 99999"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>

                <InputText
                  type="email"
                  value={patientForm.email}
                  onChange={(e) => updatePatientField("email", e.target.value)}
                  className="w-full"
                  placeholder="patient@example.com"
                />
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* ADDRESS */}
          {/* ========================================================= */}

          <div>
            <h3 className="text-sm font-semibold mb-4">Address</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Address
                </label>

                <InputTextarea
                  value={patientForm.address}
                  onChange={(e) =>
                    updatePatientField("address", e.target.value)
                  }
                  rows={2}
                  className="w-full"
                  placeholder="Enter address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">City</label>

                <InputText
                  value={patientForm.city}
                  onChange={(e) => updatePatientField("city", e.target.value)}
                  className="w-full"
                  placeholder="City"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  District
                </label>

                <InputText
                  value={patientForm.district}
                  onChange={(e) =>
                    updatePatientField("district", e.target.value)
                  }
                  className="w-full"
                  placeholder="District"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">State</label>

                <InputText
                  value={patientForm.state}
                  onChange={(e) => updatePatientField("state", e.target.value)}
                  className="w-full"
                  placeholder="State"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Pincode
                </label>

                <InputText
                  keyfilter="int"
                  maxLength={6}
                  value={patientForm.pincode}
                  onChange={(e) =>
                    updatePatientField("pincode", e.target.value)
                  }
                  className="w-full"
                  placeholder="6-digit pincode"
                />
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* IDENTITY DOCUMENTS */}
          {/* ========================================================= */}

          <div>
            <h3 className="text-sm font-semibold mb-4">Identity Documents</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Aadhaar Number
                </label>

                <InputMask
                  mask="9999 9999 9999"
                  value={patientForm.aadhaarNumber}
                  onChange={(e) =>
                    updatePatientField("aadhaarNumber", e.value ?? "")
                  }
                  className="w-full"
                  placeholder="XXXX XXXX XXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  ABHA ID
                </label>

                <InputText
                  value={patientForm.abhaId}
                  onChange={(e) => updatePatientField("abhaId", e.target.value)}
                  className="w-full"
                  placeholder="Enter ABHA ID"
                />
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* GUARDIAN / NOK */}
          {/* ========================================================= */}

          <div>
            <h3 className="text-sm font-semibold mb-4">
              Guardian / Next of Kin
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Guardian Name
                </label>

                <InputText
                  value={patientForm.guardianName}
                  onChange={(e) =>
                    updatePatientField("guardianName", e.target.value)
                  }
                  className="w-full"
                  placeholder="Guardian name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Relation
                </label>

                <Dropdown
                  value={patientForm.guardianRelation}
                  options={relationOptions}
                  onChange={(e) =>
                    updatePatientField("guardianRelation", e.value)
                  }
                  optionLabel="label"
                  optionValue="value"
                  placeholder="Select relation"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Guardian Mobile
                </label>

                <InputMask
                  mask="99999 99999"
                  value={patientForm.guardianMobile}
                  onChange={(e) =>
                    updatePatientField("guardianMobile", e.value ?? "")
                  }
                  className="w-full"
                  placeholder="99999 99999"
                />
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* INSURANCE */}
          {/* ========================================================= */}

          <div>
            <h3 className="text-sm font-semibold mb-4">Insurance</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Insurance Provider
                </label>

                <InputText
                  value={patientForm.insuranceProvider}
                  onChange={(e) =>
                    updatePatientField("insuranceProvider", e.target.value)
                  }
                  className="w-full"
                  placeholder="Insurance provider"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Policy Number
                </label>

                <InputText
                  value={patientForm.insurancePolicyNo}
                  onChange={(e) =>
                    updatePatientField("insurancePolicyNo", e.target.value)
                  }
                  className="w-full"
                  placeholder="Policy number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Valid Till
                </label>

                <Calendar
                  value={patientForm.insuranceValidTill}
                  onChange={(e) =>
                    updatePatientField("insuranceValidTill", e.value ?? null)
                  }
                  dateFormat="yy-mm-dd"
                  showIcon
                  minDate={new Date()}
                  className="w-full"
                  inputClassName="w-full"
                  placeholder="Valid till"
                />
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* MEDICAL BASICS */}
          {/* ========================================================= */}

          <div>
            <h3 className="text-sm font-semibold mb-4">Medical Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Allergies
                </label>

                <InputTextarea
                  value={patientForm.allergies}
                  onChange={(e) =>
                    updatePatientField("allergies", e.target.value)
                  }
                  rows={3}
                  maxLength={500}
                  className="w-full"
                  placeholder="Enter known allergies"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Chronic Diseases
                </label>

                <InputTextarea
                  value={patientForm.chronicDiseases}
                  onChange={(e) =>
                    updatePatientField("chronicDiseases", e.target.value)
                  }
                  rows={3}
                  maxLength={500}
                  className="w-full"
                  placeholder="Enter chronic diseases"
                />
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </AppLayout>
  );
}
