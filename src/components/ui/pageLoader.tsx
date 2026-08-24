import { Loader2 } from "lucide-react";
import { useSyncExternalStore } from "react";

let loading = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return loading;
}

export const PageLoader = {
  show() {
    loading = true;
    emit();
  },

  stop() {
    loading = false;
    emit();
  },

  Component() {
    const isLoading = useSyncExternalStore(
      subscribe,
      getSnapshot,
      getSnapshot
    );

    if (!isLoading) return null;

    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/60 backdrop-blur-sm">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  },
};