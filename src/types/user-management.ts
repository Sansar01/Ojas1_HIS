// src/types/user-management.ts

// GET /hospital/roles
export interface HospitalRole {
  id: string;
  name: string;
  description: string;
  isSystem: boolean;
  isActive: boolean;
  permissionCount: number;
  createdAt: string;
}

// GET /hospital/masters/departments
export interface Department {
  id: string;
  name: string;
  description?: string;
  isActive: boolean;
}

// GET /hospital/masters/shifts
export interface Shift {
  id: string;
  name: string;
  startTime?: string;
  endTime?: string;
  isActive: boolean;
}

// GET /hospital/roles/entitlements/modules
export interface EntitlementModule {
  id: string;
  name: string;
  code: string;
  route: string;
  icon?: string;
  isActive?: boolean;
  parentId?: string | null;
  sortOrder?: number;
  features: EntitlementFeature[];
}

export interface EntitlementFeature {
  id: string;
  name: string;
  code: string;
}

// GET /hospital/roles/:id/permissions
export interface RolePermission {
  moduleId: string;
  moduleName: string;
  moduleCode: string;
  featureId: string;
  featureName: string;
  featureCode: string;
}

// GET /hospital/users (list)
export interface HospitalUser {
  id: string;
  employeeId: string;
  email: string;
  userType: "SUPER_ADMIN" | "REGULAR_USER";
  isActive: boolean;
  profile: {
    firstName: string;
    lastName: string;
    phone?: string;
  };
  roles: {
    roleId: string;
    roleName: string;
    isPrimary: boolean;
  }[];
  departments: {
    departmentId: string;
    departmentName: string;
  }[];
}

// POST /hospital/users — request

// src/types/user-management.ts

// POST /hospital/users — request body
export interface CreateUserPayload {
  userInfo: {
    firstName: string;
    lastName?: string;
    email: string;
    mobile?: string;
    alternateMobile?: string;
    userType: "REGULAR_USER" | "SUPER_ADMIN";
  };
  staffProfile: {
    title?: string;
    dateOfBirth?: string;
    gender?: "MALE" | "FEMALE" | "OTHER";
    bloodGroup?: string;
    designation?: string;
    dateOfJoining?: string;
    shiftId?: string;
    reportingManagerId?: string;
    aadhaarNumber?: string;
    panNumber?: string;
    medicalRegNo?: string;
    qualification?: string;
    specialization?: string;
    address?: string;
    city?: string;
    state?: string;
    pincode?: string;
    emergencyContact?: string;
  };
  credentials: {
    password: string;
    loginType: "PASSWORD" | "PASSWORD_OTP" | "BIOMETRIC" | "SSO";
    accountValidTill?: string;
    forcePasswordChange: boolean;
    twoFactorEnabled: boolean;
    sendCredentialsViaSms: boolean;
    sendCredentialsViaEmail: boolean;
  };
  roles: {
    primaryRoleId: string;
    additionalRoleIds?: string[];
  };
  departmentIds?: number[];
  permissions: { moduleId: number; featureId: number }[];
}

// POST /hospital/users — response
export interface CreateUserResponse {
  id: string;
  employeeId: string;
  email: string;
  tempPassword: string;
}

// POST /hospital/users — response
