import {
  createContext,
  useContext,
  useRef,
  type ReactNode,
} from "react";
import { Toast } from "primereact/toast";

type ToastSeverity = "success" | "error" | "info" | "warn";

interface ToastContextType {
  showToast: (
    severity: ToastSeverity,
    summary: string,
    detail?: string,
  ) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(
  undefined,
);

export const ToastProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const toastRef = useRef<Toast>(null);

  const showToast = (
    severity: ToastSeverity,
    summary: string,
    detail = summary,
  ) => {
    toastRef.current?.show({
      severity,
      summary,
      detail,
      life: 3000,
    });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toast ref={toastRef} />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(
      "useToast must be used inside ToastProvider",
    );
  }

  return context;
}; 