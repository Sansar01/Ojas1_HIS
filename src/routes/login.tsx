import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Heart, Loader2, LogIn } from "lucide-react";
import { getUser, loginWithBackend } from "@/lib/auth";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — Ojas1Cloud HIMS" },
      {
        name: "description",
        content: "Sign in to Ojas1Cloud HIMS with your role.",
      },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (getUser()) navigate({ to: "/" });
  }, [navigate]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Enter your email and password");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const user = await loginWithBackend(email.trim(), password);
      // navigate({ to: "/" });
      if (user.forcePasswordChange) {
        navigate({ to: "/change-password" }); // ← redirect here
      } else {
        navigate({ to: "/" }); // ← normal dashboard
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to sign in right now.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-primary/10 via-background to-primary/5 p-4">
      <div className="w-full max-w-md bg-card rounded-2xl shadow-xl border p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
            <Heart className="w-6 h-6 text-primary fill-primary" />
          </div>
          <div>
            <div className="font-bold text-lg leading-tight">
              Ojas1Cloud HIMS
            </div>
            <div className="text-xs text-muted-foreground">
              One Patient. One Record.
            </div>
          </div>
        </div>

        <h1 className="text-xl font-semibold mb-1">Sign in</h1>
        <p className="text-sm text-muted-foreground mb-6">
          Use your hospital credentials to sign in securely.
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-medium mb-1 block">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:border-primary"
              placeholder="admin@abc.com"
            />
          </div>
          <div>
            <label className="text-xs font-medium mb-1 block">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:border-primary"
              placeholder="Enter your password"
            />
          </div>

          {error && <div className="text-xs text-destructive">{error}</div>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <LogIn className="w-4 h-4" />
            )}{" "}
            Sign in
          </button>
        </form>

        <div className="mt-6 text-[11px] text-muted-foreground bg-muted rounded-lg p-3">
          <div className="font-semibold mb-1">Use your hospital account</div>
          Your access level will be derived from the backend response after a
          successful login.
        </div>
      </div>
    </div>
  );
}
