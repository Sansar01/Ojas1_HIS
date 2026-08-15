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

export interface DoctorAvailability{
  
}