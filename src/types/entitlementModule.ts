export interface EntitlementFeature {
  id: number;
  name: string;
  code: string;
}

export interface EntitlementModule {
  id: number;
  name: string;
  code: string;
  route: string;
  icon: string;
  isActive: boolean;
  features: EntitlementFeature[];
}