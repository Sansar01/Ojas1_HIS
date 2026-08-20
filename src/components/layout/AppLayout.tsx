import {
  Link,
  Outlet,
  useNavigate,
  useRouterState,
} from "@tanstack/react-router";
import { Bell, Search, Heart, LogOut, PanelLeftClose } from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { getUser, logOutFromFrontend, type AuthUser } from "@/lib/auth";
import type { EntitlementModule } from "@/types/user-management";
import { Toaster } from "@/components/ui/sonner";
import { getModuleIcon } from "@/types/mapIcon";
import { useEntitlements } from "@/hooks/modules";

const ALWAYS_VISIBLE = new Set(["/", "/configurations"]);

export function AppLayout({ children }: { children?: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);
  const [user, setUserState] = useState<AuthUser | null>(null);
  const [ready, setReady] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
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

  const visibleNav = useMemo(() => {
    if (entitlementsLoading) return [];

    return entitlements
      .filter((module) => module.isActive)
      .filter((module) => module.route)
      .sort((a, b) => {
        // If you have sortOrder in your type
        return (a.sortOrder ?? 0) - (b.sortOrder ?? 0);
      })
      .map((module) => ({
        label: module.name,
        to: module.route,
        icon: getModuleIcon(module.icon),
      }));
  }, [entitlements, entitlementsLoading]);

  if (!ready || !user) return null;
  // Don't filter by role here—route protection in __root.tsx handles access control.
  // Show all available modules in the sidebar; the router will prevent unauthorized navigation.
  // When sidebar is collapsed, show all nav items; when expanded, apply selected filter

  const onLogout = async () => {
    const response = await logOutFromFrontend();

    if (!response) {
      return;
    }

    navigate({ to: "/login" });
  };

  return (
    <div className="flex min-h-screen bg-background">
      <aside
        className={`${sidebarCollapsed ? "w-20" : "w-64"} shrink-0 bg-sidebar text-sidebar-foreground flex flex-col transition-all duration-300`}
      >
        <div
          className={`p-5 flex items-center gap-3 border-b border-sidebar-border ${sidebarCollapsed ? "justify-center" : ""}`}
        >
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Heart className="w-5 h-5 text-primary-foreground fill-primary" />
          </div>
          {!sidebarCollapsed && (
            <div>
              <div className="font-bold text-base leading-tight">
                Ojas1Cloud HIMS
              </div>
              <div className="text-[10px] text-sidebar-foreground/60">
                One Patient. One Record.
              </div>
            </div>
          )}
        </div>
        <nav className="flex-1 overflow-y-auto p-3">
          <div
            className={`px-3 py-2 text-[10px] uppercase tracking-wider text-sidebar-foreground/50 ${
              sidebarCollapsed ? "text-center" : ""
            }`}
          >
            {entitlementsLoading
              ? sidebarCollapsed
                ? "..."
                : "Loading modules..."
              : sidebarCollapsed
                ? "•"
                : "Navigation"}
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
                  title={sidebarCollapsed ? item.label : ""}
                  className={`mb-1 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    sidebarCollapsed ? "justify-center" : ""
                  } ${
                    active
                      ? "bg-primary text-primary-foreground shadow"
                      : "text-sidebar-foreground/85 hover:bg-sidebar-accent"
                  }`}
                >
                  <Icon className="h-4 w-4" />

                  {!sidebarCollapsed && item.label}
                </Link>
              );
            })
          ) : !entitlementsLoading ? (
            <div
              className={`px-3 py-4 text-center text-[11px] text-sidebar-foreground/60 ${
                sidebarCollapsed ? "hidden" : ""
              }`}
            >
              No modules available
            </div>
          ) : null}
        </nav>
        <div
          className={`p-4 border-t border-sidebar-border flex items-center gap-3 flex-shrink-0 ${sidebarCollapsed ? "flex-col" : ""}`}
        >
          <div className="w-9 h-9 rounded-full bg-primary/30 flex items-center justify-center text-xs font-semibold flex-shrink-0">
            {user.initials}
          </div>
          {!sidebarCollapsed && (
            <div className="text-xs flex-1 min-w-0">
              <div className="font-semibold truncate">{user.name}</div>
              <div className="text-sidebar-foreground/60 truncate">
                {user.designation}
              </div>
            </div>
          )}
          {!sidebarCollapsed && (
            <button
              onClick={onLogout}
              title="Sign out"
              className="p-2 rounded-lg hover:bg-sidebar-accent flex-shrink-0"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
        <div className="px-3 py-2 border-t border-sidebar-border flex-shrink-0">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="w-full p-2 rounded-lg hover:bg-sidebar-accent flex items-center justify-center"
          >
            <PanelLeftClose
              className={`w-4 h-4 transition-transform duration-300 ${sidebarCollapsed ? "rotate-180" : ""}`}
            />
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
      <Toaster />
    </div>
  );
}
