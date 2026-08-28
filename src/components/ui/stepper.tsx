"use client";

import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

type StepperContextValue = {
  value: number;
  onValueChange?: (value: number) => void;
};

const StepperContext = React.createContext<StepperContextValue | null>(null);

const StepperItemContext = React.createContext<number | null>(null);

function useStepper() {
  const context = React.useContext(StepperContext);

  if (!context) {
    throw new Error("Stepper components must be used inside <Stepper>.");
  }

  return context;
}

function useStepperItem() {
  const context = React.useContext(StepperItemContext);

  if (context === null) {
    throw new Error(
      "StepperItem components must be used inside <StepperItem>.",
    );
  }

  return context;
}

/* =========================================================
   STEPPER
========================================================= */

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  onValueChange?: (value: number) => void;
  orientation?: "horizontal" | "vertical";
}

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      value,
      onValueChange,
      orientation = "horizontal",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <StepperContext.Provider
        value={{
          value,
          onValueChange,
        }}
      >
        <div
          ref={ref}
          data-orientation={orientation}
          className={cn(
            orientation === "horizontal"
              ? "flex w-full items-start"
              : "flex flex-col",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </StepperContext.Provider>
    );
  },
);

Stepper.displayName = "Stepper";

/* =========================================================
   STEPPER ITEM
========================================================= */

export interface StepperItemProps extends React.HTMLAttributes<HTMLDivElement> {
  step: number;
}

const StepperItem = React.forwardRef<HTMLDivElement, StepperItemProps>(
  ({ step, className, children, ...props }, ref) => {
    return (
      <StepperItemContext.Provider value={step}>
        <div
          ref={ref}
          data-step={step}
          className={cn("relative flex flex-1", className)}
          {...props}
        >
          {children}
        </div>
      </StepperItemContext.Provider>
    );
  },
);

StepperItem.displayName = "StepperItem";

/* =========================================================
   STEPPER TRIGGER
========================================================= */

export interface StepperTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const StepperTrigger = React.forwardRef<HTMLButtonElement, StepperTriggerProps>(
  ({ className, children, disabled, ...props }, ref) => {
    const { value, onValueChange } = useStepper();

    const step = useStepperItem();

    const isActive = value === step;
    const isCompleted = value > step;

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        data-state={
          isCompleted ? "completed" : isActive ? "active" : "inactive"
        }
        onClick={() => {
          if (!disabled) {
            onValueChange?.(step);
          }
        }}
        className={cn(
          "relative z-10 flex cursor-pointer items-center gap-3 text-left",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

StepperTrigger.displayName = "StepperTrigger";

/* =========================================================
   STEPPER INDICATOR
========================================================= */

export interface StepperIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {}

const StepperIndicator = React.forwardRef<
  HTMLDivElement,
  StepperIndicatorProps
>(({ className, children, ...props }, ref) => {
  const { value } = useStepper();
  const step = useStepperItem();

  const isActive = value === step;
  const isCompleted = value > step;

  return (
    <div
      ref={ref}
      data-state={isCompleted ? "completed" : isActive ? "active" : "inactive"}
      className={cn(
        `
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            text-sm
            font-semibold
            transition-all
          `,
        isActive &&
          `
              border-primary
              bg-primary
              text-primary-foreground
              shadow-sm
            `,
        isCompleted &&
          `
              border-primary
              bg-primary
              text-primary-foreground
            `,
        !isActive &&
          !isCompleted &&
          `
              border-border
              bg-background
              text-muted-foreground
            `,
        className,
      )}
      {...props}
    >
      {isCompleted ? <Check className="h-4 w-4" /> : children}
    </div>
  );
});

StepperIndicator.displayName = "StepperIndicator";

/* =========================================================
   STEPPER TITLE
========================================================= */

export interface StepperTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

const StepperTitle = React.forwardRef<HTMLDivElement, StepperTitleProps>(
  ({ className, ...props }, ref) => {
    const { value } = useStepper();
    const step = useStepperItem();

    const isActive = value === step;
    const isCompleted = value > step;

    return (
      <div
        ref={ref}
        className={cn(
          "text-sm font-medium transition-colors",
          isActive || isCompleted ? "text-foreground" : "text-muted-foreground",
          className,
        )}
        {...props}
      />
    );
  },
);

StepperTitle.displayName = "StepperTitle";

/* =========================================================
   STEPPER DESCRIPTION
========================================================= */

export interface StepperDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const StepperDescription = React.forwardRef<
  HTMLParagraphElement,
  StepperDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("mt-0.5 text-xs text-muted-foreground", className)}
      {...props}
    />
  );
});

StepperDescription.displayName = "StepperDescription";

/* =========================================================
   STEPPER SEPARATOR
========================================================= */

export interface StepperSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

const StepperSeparator = React.forwardRef<
  HTMLDivElement,
  StepperSeparatorProps
>(({ className, ...props }, ref) => {
  const { value } = useStepper();
  const step = useStepperItem();

  const isCompleted = value > step;

  return (
    <div
      ref={ref}
      className={cn(
        `
            absolute
            left-[calc(50%+28px)]
            right-[calc(-50%+28px)]
            top-[18px]
            h-px
            transition-colors
          `,
        isCompleted ? "bg-primary" : "bg-border",
        className,
      )}
      {...props}
    />
  );
});

StepperSeparator.displayName = "StepperSeparator";

export {
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperTitle,
  StepperDescription,
  StepperSeparator,
};
