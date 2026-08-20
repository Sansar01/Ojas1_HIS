import {
  LayoutDashboard,
  CalendarDays,
  Stethoscope,
  Receipt,
  Users,
  UserRound,
  UserCog,
  CircleUserRound,
  type LucideIcon,
} from "lucide-react";

const moduleIcons: Record<string, LucideIcon> = {
  dashboard: LayoutDashboard,
  calendar: CalendarDays,
  stethoscope: Stethoscope,
  medical: Stethoscope,
  receipt: Receipt,
  people: Users,
  users: UserCog,
  doctor: UserRound,
};

export function getModuleIcon(icon?: string): LucideIcon {
  return moduleIcons[icon ?? ""] ?? CircleUserRound;
}