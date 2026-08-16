export interface CreateDoctorProfile {
  hospitalUserId: string;
  specialization: string;
  qualifications: string;
  consultationFee: number;
  slotDurationMins: number;
  bufferTimeMins: number;
  maxPatientsPerDay: number;
  isActive?: boolean;
}

export interface Slot {
  enabled: boolean;
  from: string; // "HH:MM"
  to: string; // "HH:MM"
}

export interface DailyAvailability {
  dayOfWeek: number;
  isActive: boolean;
  startTime?: string;
  endTime?: string;
  breakStartTime?: string;
  breakEndTime?: string;
}

export interface AvailabilityResponse {
  schedule?: DailyAvailability[];
  slotDurationMins?: number;
  bufferTimeMins?: number;
}
