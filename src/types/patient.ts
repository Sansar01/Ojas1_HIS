export interface PatientFormDTO {
  // Personal Details
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
  pincode: string;

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

  // Medical Basics
  allergies: string;
  chronicDiseases: string;
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