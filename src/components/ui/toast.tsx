import { Toast, type ToastMessage } from "primereact/toast";
import { useEffect, useRef } from "react";

let toastRef: Toast | null = null;

export const showToast = (
  severity: ToastMessage["severity"],
  summary: string,
) => {
  toastRef?.show({
    severity,
    summary,
    life: 3000,
  });
};

export const ToastContainer = () => {
  const ref = useRef<Toast>(null);

  useEffect(() => {
    toastRef = ref.current;

    return () => {
      toastRef = null;
    };
  }, []);

  return <Toast ref={ref} />;
};