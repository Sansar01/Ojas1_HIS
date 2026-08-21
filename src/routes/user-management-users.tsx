import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/hims/Kpi";
import { useHospitalUsers } from "@/hooks/useUserManagement";
import { ArrowLeft, Search, UserCog } from "lucide-react";

export const Route = createFileRoute("/user-management-users")({
  head: () => ({ meta: [{ title: "Created Users — Ojas1Cloud HIMS" }] }),
  component: CreatedUsersPage,
});

function CreatedUsersPage() {
  const { users, loading, error } = useHospitalUsers();

  return (
    <>
 
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Created Users</h1>
          <p className="text-sm text-muted-foreground">
            View all users created through the user management flow.
          </p>
        </div>
        <Link
          to="/user-management"
          className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm"
        >
          <ArrowLeft className="h-4 w-4" /> Back to User Management
        </Link>
      </div>

      <Section title="User List">
        <div className="mb-4 flex items-center gap-2 rounded-lg border bg-muted/30 px-3 py-2 text-sm">
          <Search className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">
            Showing created users from the hospital directory
          </span>
        </div>

        {loading ? (
          <div className="text-sm text-muted-foreground">Loading users…</div>
        ) : error ? (
          <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
            {error}
          </div>
        ) : users.length === 0 ? (
          <div className="rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
            No users created yet.
          </div>
        ) : (
          <div className="space-y-3">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <UserCog className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">
                      {user.profile.firstName} {user.profile.lastName}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {user.email}
                    </div>
                  </div>
                </div>
                <div className="text-right text-sm">
                  <div className="font-medium">{user.employeeId || "—"}</div>
                  <div className="text-muted-foreground">{user.userType}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>

         </>
  );
}
