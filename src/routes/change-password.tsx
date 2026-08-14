// src/routes/change-password.tsx

import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { getUser, setUser } from "@/lib/auth";
import { api, ApiError } from "@/lib/api";
import { KeyRound, Eye, EyeOff, AlertCircle, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/change-password")({
  head: () => ({ meta: [{ title: "Change Password — HIMS" }] }),
  component: ChangePassword,
});

function ChangePassword() {
  const navigate = useNavigate();
  const user = getUser();

  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Password strength check
  const checks = {
    length: form.newPassword.length >= 8,
    upper: /[A-Z]/.test(form.newPassword),
    number: /[0-9]/.test(form.newPassword),
    match:
      form.newPassword === form.confirmPassword && form.confirmPassword !== "",
  };

  const allValid = Object.values(checks).every(Boolean);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!allValid) return;

    setLoading(true);
    setError(null);

    try {
      await api.post("/api/hospital/auth/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: {
          oldPassword: form.currentPassword,
          newPassword: form.newPassword,
        },
      });

      // Update localStorage — forcePasswordChange = false
      if (user) {
        setUser({ ...user, forcePasswordChange: false });
      }

      setSuccess(true);

      // Redirect to dashboard after 1.5s
      setTimeout(() => navigate({ to: "/" }), 1500);
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <KeyRound className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">Change Password</h1>
          <p className="text-sm text-muted-foreground mt-1">
            You must set a new password before continuing
          </p>
          {user?.email && (
            <div className="mt-2 text-xs text-muted-foreground bg-muted-foreground/10 rounded-lg px-3 py-1.5 inline-block">
              Logged in as <span className="font-medium">{user.email}</span>
            </div>
          )}
        </div>

        {/* Card */}
        <div className="bg-card border rounded-2xl p-6 shadow-sm">
          {/* Success State */}
          {success ? (
            <div className="text-center py-6">
              <CheckCircle2 className="w-12 h-12 text-success mx-auto mb-3" />
              <div className="font-semibold text-success">
                Password Changed Successfully
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Redirecting to dashboard...
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Error */}
              {error && (
                <div className="flex items-start gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  {error}
                </div>
              )}

              {/* Current Password */}
              <div>
                <label className="text-xs text-muted-foreground">
                  Current Password (Temporary)
                </label>
                <div className="relative mt-1">
                  <input
                    type={showCurrent ? "text" : "password"}
                    value={form.currentPassword}
                    onChange={(e) =>
                      setForm({ ...form, currentPassword: e.target.value })
                    }
                    placeholder="Enter temporary password"
                    required
                    className="w-full px-3 py-2.5 pr-10 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrent(!showCurrent)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  >
                    {showCurrent ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div>
                <label className="text-xs text-muted-foreground">
                  New Password
                </label>
                <div className="relative mt-1">
                  <input
                    type={showNew ? "text" : "password"}
                    value={form.newPassword}
                    onChange={(e) =>
                      setForm({ ...form, newPassword: e.target.value })
                    }
                    placeholder="Min 8 chars, 1 uppercase, 1 number"
                    required
                    className="w-full px-3 py-2.5 pr-10 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNew(!showNew)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  >
                    {showNew ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-xs text-muted-foreground">
                  Confirm New Password
                </label>
                <div className="relative mt-1">
                  <input
                    type={showConfirm ? "text" : "password"}
                    value={form.confirmPassword}
                    onChange={(e) =>
                      setForm({ ...form, confirmPassword: e.target.value })
                    }
                    placeholder="Re-enter new password"
                    required
                    className="w-full px-3 py-2.5 pr-10 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  >
                    {showConfirm ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Password Strength Checklist */}
              {form.newPassword && (
                <div className="space-y-1.5 p-3 bg-muted rounded-lg">
                  <Check label="At least 8 characters" ok={checks.length} />
                  <Check label="One uppercase letter" ok={checks.upper} />
                  <Check label="One number" ok={checks.number} />
                  <Check label="Passwords match" ok={checks.match} />
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={!allValid || loading}
                className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {loading ? "Changing Password..." : "Set New Password"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Check({ label, ok }: { label: string; ok: boolean }) {
  return (
    <div
      className={`flex items-center gap-2 text-xs ${ok ? "text-success" : "text-muted-foreground"}`}
    >
      <div
        className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${ok ? "bg-success border-success" : "border-muted-foreground"}`}
      >
        {ok && (
          <svg
            viewBox="0 0 10 10"
            className="w-2 h-2 text-white fill-none stroke-white stroke-2"
          >
            <polyline points="1.5,5 4,7.5 8.5,2.5" />
          </svg>
        )}
      </div>
      {label}
    </div>
  );
}
