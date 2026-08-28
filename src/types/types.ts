export type ConsultationMode = "physical" | "tele";
export type AppointmentStatus = "confirmed" | "cancelled" | "completed";
export type Gender = "female" | "male" | "other" | "prefer_not_to_say";

export type DepartmentDTO = {
  id: string;
  name: string;
  description: string;
};

export type DoctorDTO = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialty: string;
  bio: string;
  rating: number;
  reviewCount: number;
  experienceYears: number;
  feePhysical: number;
  feeTele: number;
  isActive: boolean;
  avatarUrl: string;
  workingDays: string[];
  department: DepartmentDTO;
};

export type SlotState = {
  time: string;
  period: "morning" | "afternoon";
  booked: boolean;
  past: boolean;
};

export type DayAvailability = {
  date: string;
  working: boolean;
  open: number;
  total: number;
};

export type PatientPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: Gender;
};

export type AppointmentDTO = {
  id: string;
  date: string;
  startTime: string;
  mode: ConsultationMode;
  status: AppointmentStatus;
  reason: string;
  notes: string | null;
  createdAt: string;
  doctor: DoctorDTO;
  patient: PatientPayload & { id: string };
};
