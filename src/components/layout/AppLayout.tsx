import {
  Link,
  Outlet,
  useNavigate,
  useRouterState,
} from "@tanstack/react-router";
import {
  LayoutDashboard,
  Users,
  Calendar,
  Stethoscope,
  ClipboardList,
  Receipt,
  Settings,
  Pill,
  FlaskConical,
  BarChart3,
  Bell,
  Search,
  Heart,
  LogOut,
  UserPlus,
  Video,
  UserCog,
  LayoutGrid,
  Home,
  FileText,
  ShieldCheck,
  CircleDollarSign,
  Activity,
  BriefcaseMedical,
  PanelLeftClose,
  Package,
  Monitor,
  Soup,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import {
  canAccess,
  getUser,
  logOutFromFrontend,
  type AuthUser,
} from "@/lib/auth";
import { useEntitlements } from "@/hooks/useUserManagement";
import type { EntitlementModule } from "@/types/user-management";

const ALWAYS_VISIBLE = new Set(["/", "/configurations"]);

function mapIcon(iconName?: string) {
  const normalized = (iconName || "").toLowerCase();
  switch (normalized) {
    case "dashboard":
    case "home":
      return LayoutDashboard;
    case "users":
    case "user":
      return Users;
    case "appointments":
    case "calendar":
      return Calendar;
    case "consultation":
    case "stethoscope":
      return Stethoscope;
    case "queue":
    case "clipboard":
      return ClipboardList;
    case "billing":
    case "receipt":
    case "money":
      return Receipt;
    case "settings":
    case "config":
      return Settings;
    case "pharmacy":
    case "pill":
      return Pill;
    case "lab":
    case "radiology":
      return FlaskConical;
    case "reports":
    case "graph":
      return BarChart3;
    case "patient":
    case "patients":
      return UserPlus;
    case "teleconsultation":
    case "video":
      return Video;
    case "user-management":
    case "user":
      return UserCog;
    case "module":
    case "grid":
      return LayoutGrid;
    case "file":
      return FileText;
    case "shield":
      return ShieldCheck;
    case "dollar":
      return CircleDollarSign;
    case "activity":
      return Activity;
    case "medical":
      return BriefcaseMedical;
    case "package":
      return Package;
    case "monitor":
      return Monitor;
    case "soup":
      return Soup;
    default:
      return LayoutGrid;
  }
}

function buildNavItems(entitlements: EntitlementModule[], isLoading: boolean) {
  // While loading, return empty
  if (isLoading) {
    return [];
  }

  if (entitlements.length === 0) {
    return [];
  }

  const mapped = entitlements
    .filter((module) => module.isActive !== false)
    .map((module) => ({
      to: module.route || "/",
      label: module.name,
      icon: mapIcon(module.icon),
    }));

  // Return mapped entitlements or empty array
  return mapped;
}

export function AppLayout({ children }: { children?: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);
  const [user, setUserState] = useState<AuthUser | null>(null);
  const [ready, setReady] = useState(false);
  const { entitlements, loading: entitlementsLoading } = useEntitlements();

  useEffect(() => {
    const readAuth = () => setUserState(getUser());
    const readSel = () => {
      try {
        setSelected(localStorage.getItem("selectedModule"));
      } catch {
        setSelected(null);
      }
    };
    readAuth();
    readSel();
    setReady(true);
    window.addEventListener("selectedModuleChange", readSel);
    window.addEventListener("storage", readSel);
    window.addEventListener("authChange", readAuth);
    window.addEventListener("storage", readAuth);
    return () => {
      window.removeEventListener("selectedModuleChange", readSel);
      window.removeEventListener("storage", readSel);
      window.removeEventListener("authChange", readAuth);
      window.removeEventListener("storage", readAuth);
    };
  }, []);

  // Redirect if not authed
  useEffect(() => {
    if (ready && !user) navigate({ to: "/login" });
  }, [ready, user, navigate]);

  // Redirect if role can't access the current route
  useEffect(() => {
    if (ready && user && !canAccess(user.role, path)) navigate({ to: "/" });
  }, [ready, user, path, navigate]);

  if (!ready || !user) return null;

  const nav = buildNavItems(entitlements, entitlementsLoading);
  // Don't filter by role here—route protection in __root.tsx handles access control.
  // Show all available modules in the sidebar; the router will prevent unauthorized navigation.
  const visibleNav = selected
    ? nav.filter((n) => ALWAYS_VISIBLE.has(n.to) || n.to === selected)
    : nav;

  const onLogout = async () => {
    const response = await logOutFromFrontend();

    if (!response) {
      return;
    }

    navigate({ to: "/login" });
  };

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="w-64 shrink-0 bg-sidebar text-sidebar-foreground flex flex-col">
        <div className="p-5 flex items-center gap-3 border-b border-sidebar-border">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Heart className="w-5 h-5 text-primary-foreground fill-primary" />
          </div>
          <div>
            <div className="font-bold text-base leading-tight">
              Ojas1Cloud HIMS
            </div>
            <div className="text-[10px] text-sidebar-foreground/60">
              One Patient. One Record.
            </div>
          </div>
        </div>
        <nav className="p-3 flex-1 overflow-y-auto">
          <div className="text-[10px] uppercase tracking-wider text-sidebar-foreground/50 px-3 py-2">
            {entitlementsLoading ? "Loading modules..." : "Navigation"}
          </div>
          {visibleNav.length > 0 ? (
            visibleNav.map((item) => {
              const active =
                item.to === "/" ? path === "/" : path.startsWith(item.to);
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 text-sm transition-colors ${
                    active
                      ? "bg-primary text-primary-foreground shadow"
                      : "hover:bg-sidebar-accent text-sidebar-foreground/85"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })
          ) : !entitlementsLoading ? (
            <div className="text-[11px] text-sidebar-foreground/60 px-3 py-4 text-center">
              No modules available
            </div>
          ) : null}
        </nav>
        <div className="p-4 border-t border-sidebar-border flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-primary/30 flex items-center justify-center text-xs font-semibold">
            {user.initials}
          </div>
          <div className="text-xs flex-1 min-w-0">
            <div className="font-semibold truncate">{user.name}</div>
            <div className="text-sidebar-foreground/60 truncate">
              {user.designation}
            </div>
          </div>
          <button
            onClick={onLogout}
            title="Sign out"
            className="p-2 rounded-lg hover:bg-sidebar-accent"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-card border-b flex items-center px-6 gap-4 sticky top-0 z-10">
          <div className="flex-1 max-w-xl relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Search patient, doctor, appointment..."
              className="w-full pl-9 pr-16 py-2 rounded-lg bg-muted border border-transparent focus:border-primary focus:outline-none text-sm"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] px-1.5 py-0.5 rounded bg-background border">
              Ctrl+K
            </kbd>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right text-xs">
              <div className="font-semibold">10:45 AM</div>
              <div className="text-muted-foreground">20 May 2025, Tue</div>
            </div>
            <button className="relative p-2 rounded-lg hover:bg-muted">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-destructive text-destructive-foreground text-[9px] rounded-full flex items-center justify-center">
                12
              </span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold text-primary">
                {user.initials}
              </div>
              <div className="text-xs">
                <div className="font-semibold">{user.name}</div>
                <div className="text-muted-foreground capitalize">
                  {user.role.replace("_", " ")}
                </div>
              </div>
              <button
                onClick={onLogout}
                title="Sign out"
                className="p-2 rounded-lg hover:bg-muted"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>
        <main className="p-6 flex-1">{children ?? <Outlet />}</main>
      </div>
    </div>
  );
}
