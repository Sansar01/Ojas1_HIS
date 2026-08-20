import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import { Section } from "@/components/hims/Kpi";
import { useApiQuery } from "@/lib/hooks/useApiResource";
import { useRef, useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
// Radix-based UI components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  PatientFormDTO,
  genderOptions,
  ageUnitOptions,
  relationOptions,
  bloodGroupOptions,
  maritalStatusOptions,
  PatientsResponse,
} from "../types/patient";
import { api } from "@/lib/api";
import { showToast, ToastContainer } from "@/components/ui/toast";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  TableExpandableRow,
  TableLoader,
  TableSkeleton,
} from "@/components/ui/table";
import React from "react";
import { cn } from "@/lib/utils";
import { RefreshCw } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { PageLoader } from "@/components/ui/pageLoader";

export const Route = createFileRoute("/patients")({
  head: () => ({ meta: [{ title: "Patients — Ojas1Cloud HIMS" }] }),
  component: Patients,
});

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
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    try {
      setSubmitted(true);
      setIsSubmitting(true);

      if (
        !patientForm.firstName.trim() ||
        !patientForm.lastName.trim() ||
        !patientForm.age ||
        !patientForm.gender ||
        !patientForm.mobile
      ) {
        showToast("error", "Please fill all the required fields");
        return;
      }

      if (isSubmitting) return;

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

        mobile: patientForm.mobile,
        alternateMobile: Number(patientForm.alternateMobile) || undefined,

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
        guardianMobile: Number(patientForm.guardianMobile) || undefined,

        insuranceProvider: patientForm.insuranceProvider.trim() || undefined,

        insurancePolicyNo: patientForm.insurancePolicyNo.trim() || undefined,

        insuranceValidTill: patientForm.insuranceValidTill
          ? patientForm.insuranceValidTill.toISOString().split("T")[0]
          : undefined,

        allergies: patientForm.allergies.trim() || undefined,
        chronicDiseases: patientForm.chronicDiseases.trim() || undefined,
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

      setShowPatientDialog(false);
      setSubmitted(false);
    } catch {
      showToast("error", "Failed to save patient details");
    } finally {
      setShowPatientDialog(false);
      setSubmitted(false);
      setIsSubmitting(false);
    }
  };

  const { data, error, isPending, isFetching, refetch } =
    useApiQuery<PatientsResponse>(["patient"], "/api/opd/patients", {
      staleTime: 30_000,
    });

  const [expandedPatient, setExpandedPatient] = React.useState<string | null>(
    null,
  );

  const togglePatient = (patientId: string) => {
    setExpandedPatient((current) => (current === patientId ? null : patientId));
  };

  return (
    <AppLayout>
      <ToastContainer />

      {/* Success Modal */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Patients</h1>
        <p className="text-sm text-muted-foreground">Master patient records</p>
      </div>
      {error ? (
        <div className="mb-4 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
          Patient list could not be loaded. Please try again.
        </div>
      ) : null}

      <Section
        title="Patient Directory"
        action={
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => void refetch()}
              disabled={isFetching}
              className="cursor-pointer"
              title="Refresh patients"
            >
              <RefreshCw
                className={cn(!isFetching ? "h-4 w-4" : "animate-spin")}
              />
              <span className="sr-only">Refresh patients</span>
            </Button>

            <Button
              type="button"
              onClick={openNewPatient}
              className="cursor-pointer"
            >
              + New Patient
            </Button>
          </div>
        }
      >
        {isFetching ? (
          <TableSkeleton rows={5} columns={8} />
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-10" />
                <TableHead>UHID</TableHead>
                <TableHead>First Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Mobile</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>

            {isFetching ? (
              <TableLoader colSpan={6} rows={5} />
            ) : (
              <TableBody>
                {data?.data.map((patient: any) => {
                  const isExpanded = expandedPatient === patient.id;

                  return (
                    <TableExpandableRow
                      key={patient.id}
                      expanded={isExpanded}
                      onExpandedChange={() => togglePatient(patient.id)}
                      colSpan={6}
                      expandedContent={
                        <div className="space-y-5">
                          {/* Header */}
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold">Patient Details</h3>

                              <p className="text-sm text-muted-foreground">
                                Additional patient information
                              </p>
                            </div>

                            <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                              {patient.status}
                            </span>
                          </div>

                          {/* Details */}
                          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            <div>
                              <p className="text-xs font-medium text-muted-foreground">
                                Email
                              </p>

                              <p className="mt-1 text-sm">
                                {patient.email || "-"}
                              </p>
                            </div>

                            <div>
                              <p className="text-xs font-medium text-muted-foreground">
                                Blood Group
                              </p>

                              <p className="mt-1 text-sm">
                                {patient.bloodGroup || "-"}
                              </p>
                            </div>

                            <div>
                              <p className="text-xs font-medium text-muted-foreground">
                                ABHA ID
                              </p>

                              <p className="mt-1 text-sm">
                                {patient.abhaId || "-"}
                              </p>
                            </div>

                            <div>
                              <p className="text-xs font-medium text-muted-foreground">
                                Patient Type
                              </p>

                              <p className="mt-1 text-sm">
                                {patient.patientType || "-"}
                              </p>
                            </div>

                            <div>
                              <p className="text-xs font-medium text-muted-foreground">
                                Address
                              </p>

                              <p className="mt-1 text-sm">
                                {patient.address || "-"}
                              </p>
                            </div>

                            <div>
                              <p className="text-xs font-medium text-muted-foreground">
                                City
                              </p>

                              <p className="mt-1 text-sm">
                                {patient.city || "-"}
                              </p>
                            </div>

                            <div>
                              <p className="text-xs font-medium text-muted-foreground">
                                District
                              </p>

                              <p className="mt-1 text-sm">
                                {patient.district || "-"}
                              </p>
                            </div>

                            <div>
                              <p className="text-xs font-medium text-muted-foreground">
                                State
                              </p>

                              <p className="mt-1 text-sm">
                                {patient.state || "-"}
                              </p>
                            </div>
                          </div>
                        </div>
                      }
                    >
                      <TableCell className="font-medium">
                        {patient.uhid}
                      </TableCell>

                      <TableCell>{patient.firstName}</TableCell>

                      <TableCell>{patient.lastName}</TableCell>

                      <TableCell>{patient.gender}</TableCell>

                      <TableCell>
                        {patient.age
                          ? `${patient.age} ${patient.ageUnit}`
                          : "-"}
                      </TableCell>

                      <TableCell>{patient.mobile}</TableCell>

                      <TableCell>
                        <span
                          className={cn(
                            "inline-flex rounded-full px-2.5 py-1 text-xs font-medium",
                            patient.status === "ACTIVE"
                              ? "bg-green-100 text-green-700"
                              : "bg-muted text-muted-foreground",
                          )}
                        >
                          {patient.status}
                        </span>
                      </TableCell>
                    </TableExpandableRow>
                  );
                })}
              </TableBody>
            )}
          </Table>
        )}
      </Section>

      {isSubmitting && <PageLoader />}

      {/* Patient Form */}
      <Dialog
        open={showPatientDialog}
        onOpenChange={(open) => {
          if (!open) {
            closePatientDialog();
          }
        }}
      >
        <DialogContent
          className="
      w-[95vw]
      max-w-6xl
      max-h-[100vh]
      overflow-hidden
      p-0
    "
        >
          {/* Header */}
          <DialogHeader className="border-b px-6 py-3">
            <DialogTitle>Register New Patient</DialogTitle>

            <DialogDescription>
              Enter the patient's information below to create a new patient
              record.
            </DialogDescription>
          </DialogHeader>

          {/* Scrollable Form */}
          <div className="max-h-[calc(90vh-145px)] overflow-y-auto px-6 py-5">
            <div className="space-y-6">
              {/* PERSONAL DETAILS */}
              <div className="rounded-lg border bg-background">
                {/* Section Header */}
                <div className="border-b bg-muted/30 px-4 py-3">
                  <h3 className="text-sm font-semibold">Personal Details</h3>
                </div>

                {/* Section Content */}
                <div className="p-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {/* First Name */}
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        First Name <span className="text-red-500">*</span>
                      </label>

                      <Input
                        value={patientForm.firstName}
                        onChange={(e) =>
                          updatePatientField("firstName", e.target.value)
                        }
                        placeholder="Enter first name"
                        className={
                          submitted && !patientForm.firstName.trim()
                            ? "border-red-500"
                            : ""
                        }
                      />

                      {submitted && !patientForm.firstName.trim() && (
                        <small className="mt-1 block text-red-500">
                          First name is required
                        </small>
                      )}
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Last Name <span className="text-red-500">*</span>
                      </label>

                      <Input
                        value={patientForm.lastName}
                        onChange={(e) =>
                          updatePatientField("lastName", e.target.value)
                        }
                        placeholder="Enter last name"
                        className={
                          submitted && !patientForm.lastName.trim()
                            ? "border-red-500"
                            : ""
                        }
                      />

                      {submitted && !patientForm.lastName.trim() && (
                        <small className="mt-1 block text-red-500">
                          Last name is required
                        </small>
                      )}
                    </div>

                    {/* Gender */}
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Gender <span className="text-red-500">*</span>
                      </label>

                      <Select
                        value={patientForm.gender}
                        onValueChange={(value) =>
                          updatePatientField("gender", value)
                        }
                      >
                        <SelectTrigger
                          className={
                            submitted && !patientForm.gender
                              ? "border-red-500"
                              : ""
                          }
                        >
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>

                        <SelectContent>
                          {genderOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      {submitted && !patientForm.gender && (
                        <small className="mt-1 block text-red-500">
                          Gender is required
                        </small>
                      )}
                    </div>

                    {/* Date of Birth */}
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Date of Birth
                      </label>

                      <Input
                        type="date"
                        value={
                          patientForm.dateOfBirth
                            ? patientForm.dateOfBirth
                                .toISOString()
                                .split("T")[0]
                            : ""
                        }
                        max={new Date().toISOString().split("T")[0]}
                        onChange={(e) =>
                          updatePatientField(
                            "dateOfBirth",
                            e.target.value
                              ? new Date(`${e.target.value}T00:00:00`)
                              : null,
                          )
                        }
                      />
                    </div>

                    {/* Age */}
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Age <span className="text-red-500">*</span>
                      </label>

                      <Input
                        inputMode="numeric"
                        value={patientForm.age}
                        onChange={(e) =>
                          updatePatientField(
                            "age",
                            e.target.value.replace(/\D/g, ""),
                          )
                        }
                        placeholder="Age"
                        className={
                          submitted && !patientForm.age ? "border-red-500" : ""
                        }
                      />

                      {submitted && !patientForm.age && (
                        <small className="mt-1 block text-red-500">
                          Age is required
                        </small>
                      )}
                    </div>

                    {/* Age Unit */}
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Age Unit
                      </label>

                      <Select
                        value={patientForm.ageUnit}
                        onValueChange={(value) =>
                          updatePatientField(
                            "ageUnit",
                            value as "years" | "months" | "days",
                          )
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select age unit" />
                        </SelectTrigger>

                        <SelectContent>
                          {ageUnitOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Blood Group */}
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Blood Group
                      </label>

                      <Select
                        value={patientForm.bloodGroup}
                        onValueChange={(value) =>
                          updatePatientField("bloodGroup", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select blood group" />
                        </SelectTrigger>

                        <SelectContent>
                          {bloodGroupOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Marital Status */}
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Marital Status
                      </label>

                      <Select
                        value={patientForm.maritalStatus}
                        onValueChange={(value) =>
                          updatePatientField("maritalStatus", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>

                        <SelectContent>
                          {maritalStatusOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>

              {/* ========================================================= */}
              {/* CONTACT */}
              {/* ========================================================= */}

              <div className="rounded-lg border bg-background">
                <div className="border-b bg-muted/30 px-4 py-3">
                  <h3 className="text-sm font-semibold">Contact Information</h3>
                </div>

                <div className="p-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {/* Mobile */}
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Mobile <span className="text-red-500">*</span>
                      </label>

                      <Input
                        value={patientForm.mobile}
                        maxLength={10}
                        inputMode="numeric"
                        onChange={(e) =>
                          updatePatientField(
                            "mobile",
                            e.target.value.replace(/\D/g, ""),
                          )
                        }
                        placeholder="99999 99999"
                        className={
                          submitted && !patientForm.mobile
                            ? "border-red-500"
                            : ""
                        }
                      />

                      {submitted && !patientForm.mobile && (
                        <small className="mt-1 block text-red-500">
                          Mobile number is required
                        </small>
                      )}
                    </div>

                    {/* Alternate Mobile */}
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Alternate Mobile
                      </label>

                      <Input
                        value={patientForm.alternateMobile}
                        maxLength={10}
                        inputMode="numeric"
                        onChange={(e) =>
                          updatePatientField(
                            "alternateMobile",
                            e.target.value.replace(/\D/g, ""),
                          )
                        }
                        placeholder="99999 99999"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Email
                      </label>

                      <Input
                        type="email"
                        value={patientForm.email}
                        onChange={(e) =>
                          updatePatientField("email", e.target.value)
                        }
                        placeholder="patient@example.com"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ========================================================= */}
              {/* ADDRESS */}
              {/* ========================================================= */}

              <div className="rounded-lg border bg-background">
                <div className="border-b bg-muted/30 px-4 py-3">
                  <h3 className="text-sm font-semibold">Address</h3>
                </div>

                <div className="p-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {/* Address */}
                    <div className="md:col-span-2">
                      <label className="mb-1 block text-sm font-medium">
                        Address
                      </label>

                      <Textarea
                        value={patientForm.address}
                        onChange={(e) =>
                          updatePatientField("address", e.target.value)
                        }
                        rows={2}
                        placeholder="Enter address"
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        City
                      </label>

                      <Input
                        value={patientForm.city}
                        onChange={(e) =>
                          updatePatientField("city", e.target.value)
                        }
                        placeholder="City"
                      />
                    </div>

                    {/* District */}
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        District
                      </label>

                      <Input
                        value={patientForm.district}
                        onChange={(e) =>
                          updatePatientField("district", e.target.value)
                        }
                        placeholder="District"
                      />
                    </div>

                    {/* State */}
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        State
                      </label>

                      <Input
                        value={patientForm.state}
                        onChange={(e) =>
                          updatePatientField("state", e.target.value)
                        }
                        placeholder="State"
                      />
                    </div>

                    {/* Pincode */}
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Pincode
                      </label>

                      <Input
                        inputMode="numeric"
                        maxLength={6}
                        value={patientForm.pincode}
                        onChange={(e) =>
                          updatePatientField(
                            "pincode",
                            e.target.value.replace(/\D/g, ""),
                          )
                        }
                        placeholder="6-digit pincode"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ========================================================= */}
              {/* IDENTITY DOCUMENTS */}
              {/* ========================================================= */}

              <div className="rounded-lg border bg-background">
                <div className="border-b bg-muted/30 px-4 py-3">
                  <h3 className="text-sm font-semibold">Identity Documents</h3>
                </div>

                <div className="p-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {/* Aadhaar */}
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Aadhaar Number
                      </label>

                      <Input
                        value={patientForm.aadhaarNumber}
                        maxLength={12}
                        inputMode="numeric"
                        onChange={(e) =>
                          updatePatientField(
                            "aadhaarNumber",
                            e.target.value.replace(/\D/g, ""),
                          )
                        }
                        placeholder="XXXX XXXX XXXX"
                      />
                    </div>

                    {/* ABHA */}
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        ABHA ID
                      </label>

                      <Input
                        value={patientForm.abhaId}
                        onChange={(e) =>
                          updatePatientField("abhaId", e.target.value)
                        }
                        placeholder="Enter ABHA ID"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ========================================================= */}
              {/* GUARDIAN / NOK */}
              {/* ========================================================= */}

              <div className="rounded-lg border bg-background">
                <div className="border-b bg-muted/30 px-4 py-3">
                  <h3 className="text-sm font-semibold">Guardian</h3>
                </div>

                <div className="p-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {/* Guardian Name */}
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Guardian Name
                      </label>

                      <Input
                        value={patientForm.guardianName}
                        onChange={(e) =>
                          updatePatientField("guardianName", e.target.value)
                        }
                        placeholder="Guardian name"
                      />
                    </div>

                    {/* Relation */}
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Relation
                      </label>

                      <Select
                        value={patientForm.guardianRelation}
                        onValueChange={(value) =>
                          updatePatientField("guardianRelation", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select relation" />
                        </SelectTrigger>

                        <SelectContent>
                          {relationOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Guardian Mobile */}
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Guardian Mobile
                      </label>

                      <Input
                        value={patientForm.guardianMobile}
                        maxLength={10}
                        inputMode="numeric"
                        onChange={(e) =>
                          updatePatientField(
                            "guardianMobile",
                            e.target.value.replace(/\D/g, ""),
                          )
                        }
                        placeholder="99999 99999"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ========================================================= */}
              {/* INSURANCE */}
              {/* ========================================================= */}

              <div className="rounded-lg border bg-background">
                <div className="border-b bg-muted/30 px-4 py-3">
                  <h3 className="text-sm font-semibold">Insurance</h3>
                </div>

                <div className="p-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {/* Insurance Provider */}
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Insurance Provider
                      </label>

                      <Input
                        value={patientForm.insuranceProvider}
                        onChange={(e) =>
                          updatePatientField(
                            "insuranceProvider",
                            e.target.value,
                          )
                        }
                        placeholder="Insurance provider"
                      />
                    </div>

                    {/* Policy Number */}
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Policy Number
                      </label>

                      <Input
                        value={patientForm.insurancePolicyNo}
                        onChange={(e) =>
                          updatePatientField(
                            "insurancePolicyNo",
                            e.target.value,
                          )
                        }
                        placeholder="Policy number"
                      />
                    </div>

                    {/* Valid Till */}
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Valid Till
                      </label>

                      <Input
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        value={
                          patientForm.insuranceValidTill
                            ? patientForm.insuranceValidTill
                                .toISOString()
                                .split("T")[0]
                            : ""
                        }
                        onChange={(e) =>
                          updatePatientField(
                            "insuranceValidTill",
                            e.target.value
                              ? new Date(`${e.target.value}T00:00:00`)
                              : null,
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ========================================================= */}
              {/* MEDICAL INFORMATION */}
              {/* ========================================================= */}

              <div className="rounded-lg border bg-background">
                <div className="border-b bg-muted/30 px-4 py-3">
                  <h3 className="text-sm font-semibold">Medical Information</h3>
                </div>

                <div className="p-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* Allergies */}
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Allergies
                      </label>

                      <Textarea
                        value={patientForm.allergies}
                        onChange={(e) =>
                          updatePatientField("allergies", e.target.value)
                        }
                        rows={3}
                        maxLength={500}
                        placeholder="Enter known allergies"
                      />
                    </div>

                    {/* Chronic Diseases */}
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Chronic Diseases
                      </label>

                      <Textarea
                        value={patientForm.chronicDiseases}
                        onChange={(e) =>
                          updatePatientField("chronicDiseases", e.target.value)
                        }
                        rows={3}
                        maxLength={500}
                        placeholder="Enter chronic diseases"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <DialogFooter className="border-t px-6 py-3">
            <Button
              type="button"
              variant="outline"
              onClick={closePatientDialog}
            >
              Cancel
            </Button>

            <Button type="button" onClick={handlePatientSubmit}>
              Create Patient
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AppLayout>
  );
}
