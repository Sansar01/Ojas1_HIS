import { useEffect, useRef } from "react";
import { getUser, logOutFromFrontend } from "@/lib/auth";

const LAST_ACTIVITY_KEY = "lastActivityAt";
const INACTIVITY_LIMIT_MS = 6 * 60 * 60 * 1000;
const CHECK_INTERVAL_MS = 60 * 1000;

const ACTIVITY_EVENTS = [
  "click",
  "keydown",
  "mousemove",
  "pointerdown",
  "scroll",
  "touchstart",
] as const;

function getLastActivityAt() {
  const storedValue = localStorage.getItem(LAST_ACTIVITY_KEY);
  const timestamp = storedValue ? Number(storedValue) : NaN;
  return Number.isFinite(timestamp) ? timestamp : 0;
}

function saveActivity() {
  localStorage.setItem(LAST_ACTIVITY_KEY, String(Date.now()));
}

export function clearLastActivity() {
  localStorage.removeItem(LAST_ACTIVITY_KEY);
}

export function useInactivityLogout(onLogout: () => void) {
  const logoutStarted = useRef(false);

  useEffect(() => {
    if (!getUser()) {
      return;
    }

    let activityWriteScheduled = false;

    const logoutForInactivity = () => {
      if (logoutStarted.current) {
        return;
      }

      logoutStarted.current = true;
      void logOutFromFrontend().finally(onLogout);
    };

    const updateActivity = () => {
      if (activityWriteScheduled || logoutStarted.current) {
        return;
      }

      activityWriteScheduled = true;
      window.setTimeout(() => {
        activityWriteScheduled = false;
        if (getUser()) {
          saveActivity();
        }
      }, 250);
    };

    const checkActivity = () => {
      if (!getUser()) {
        return;
      }

      const lastActivityAt = getLastActivityAt();
      if (!lastActivityAt) {
        saveActivity();
        return;
      }

      if (Date.now() - lastActivityAt >= INACTIVITY_LIMIT_MS) {
        logoutForInactivity();
      }
    };

    const initialLastActivityAt = getLastActivityAt();
    if (
      initialLastActivityAt > 0 &&
      Date.now() - initialLastActivityAt >= INACTIVITY_LIMIT_MS
    ) {
      logoutForInactivity();
    } else if (!initialLastActivityAt) {
      saveActivity();
    }

    const intervalId = window.setInterval(checkActivity, CHECK_INTERVAL_MS);
    ACTIVITY_EVENTS.forEach((eventName) =>
      window.addEventListener(eventName, updateActivity, { passive: true }),
    );

    const handleStorage = (event: StorageEvent) => {
      if (event.key === LAST_ACTIVITY_KEY) {
        checkActivity();
      }
    };
    window.addEventListener("storage", handleStorage);

    return () => {
      window.clearInterval(intervalId);
      ACTIVITY_EVENTS.forEach((eventName) =>
        window.removeEventListener(eventName, updateActivity),
      );
      window.removeEventListener("storage", handleStorage);
    };
  }, [onLogout]);
}