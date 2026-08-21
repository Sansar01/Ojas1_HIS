import { Loader2 } from "lucide-react";

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/60 backdrop-blur-sm">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>
  );
}