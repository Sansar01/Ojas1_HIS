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
    className: severity ? severityType[severity] : "",
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

const severityType: any = {
  error:
    "!bg-red-600 !border-red-600 !text-white [&_.p-toast-message-text]:!text-white [&_.p-toast-summary]:!text-white [&_.p-toast-detail]:!text-white [&_.p-toast-message-icon]:!text-white [&_.p-toast-icon-close]:!text-white",
  success:
    "!bg-green-600 !border-green-600 !text-white [&_.p-toast-message-text]:!text-white [&_.p-toast-summary]:!text-white [&_.p-toast-detail]:!text-white [&_.p-toast-message-icon]:!text-white [&_.p-toast-icon-close]:!text-white",
};
