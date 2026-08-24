export interface PatientForm {
  title: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  age: string;
  gender: string;
  mobile: string;
  altMobile: string;
  email: string;
  bloodGroup: string;
  maritalStatus: string;
  occupation: string;

  abhaId: string;
  aadhaarNumber: string;
  panId: string;

  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  country: string;

  department: string;
  consultingDoctor: string;
  referredBy: string;
  chiefComplaint: string;

  insurer: string;
  policyNo: string;
  coverage: string;
  sumInsured: string;

  company: string;
  employeeId: string;

  emergencyName: string;
  emergencyRelation: string;
  emergencyMobile: string;
  allergyNotes: string;

  sendNotification: boolean;
}

export interface PatientsResponse {
  data: PatientFormDTO[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface PatientFormDTO {
  // Personal Details
  title?: string;
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: Date | null;
  age: string;
  ageUnit: "years" | "months" | "days";
  bloodGroup: string;
  maritalStatus: string;

  // Contact
  mobile: string;
  alternateMobile: string;
  email: string;

  // Address
  address: string;
  city: string;
  district: string;
  state: string;
  country?: string;
  pincode: string;
  department?: string;
  consultingDoctor: string;

  // Identity Documents
  aadhaarNumber: string;
  abhaId: string;

  // Guardian / Next of Kin
  guardianName: string;
  guardianRelation: string;
  guardianMobile: string;

  // Insurance
  insuranceProvider: string;
  insurancePolicyNo: string;
  insuranceValidTill: Date | null;
  coverage?: string;
  companyName?: string;
  empId?: string;

  // Medical Basics
  allergies: string;
  chronicDiseases: string;
  sendNotification?: boolean;
}

// dropdown options
export const genderOptions = [
  { label: "Male", value: "MALE" },
  { label: "Female", value: "FEMALE" },
  { label: "Other", value: "OTHER" },
];

export const ageUnitOptions = [
  { label: "Years", value: "years" },
  { label: "Months", value: "months" },
  { label: "Days", value: "days" },
];

export const bloodGroupOptions = [
  { label: "A+", value: "A_POSITIVE" },
  { label: "A-", value: "A_NEGATIVE" },
  { label: "B+", value: "B_POSITIVE" },
  { label: "B-", value: "B_NEGATIVE" },
  { label: "AB+", value: "AB_POSITIVE" },
  { label: "AB-", value: "AB_NEGATIVE" },
  { label: "O+", value: "O_POSITIVE" },
  { label: "O-", value: "O_NEGATIVE" },
];

export const maritalStatusOptions = [
  { label: "Single", value: "SINGLE" },
  { label: "Married", value: "MARRIED" },
  { label: "Divorced", value: "DIVORCED" },
  { label: "Widowed", value: "WIDOWED" },
];

export const relationOptions = [
  { label: "Father", value: "FATHER" },
  { label: "Mother", value: "MOTHER" },
  { label: "Spouse", value: "SPOUSE" },
  { label: "Brother", value: "BROTHER" },
  { label: "Sister", value: "SISTER" },
  { label: "Son", value: "SON" },
  { label: "Daughter", value: "DAUGHTER" },
  { label: "Other", value: "OTHER" },
];

export type VisitType = "new" | "revisit" | "emergency";
export type PayType = "self" | "insuranceProvider" | "corporate";
