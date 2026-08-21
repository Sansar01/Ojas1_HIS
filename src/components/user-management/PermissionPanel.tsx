import { Check } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import type { EntitlementModule } from "@/types/user-management";

function IndeterminateCheckbox({
  checked,
  indeterminate,
  onChange,
}: {
  checked: boolean;
  indeterminate: boolean;
  onChange: () => void;
}) {
  return (
    <Checkbox
      className="rounded"
      checked={indeterminate ? "indeterminate" : checked}
      onCheckedChange={() => onChange()}
    />
  );
}

type PermissionPanelProps = {
  entitlements: EntitlementModule[];
  loading: boolean;
  selectedPermissions: Record<string, boolean>;
  togglePermission: (moduleId: number, featureId: number) => void;
  toggleAllModuleFeatures: (
    moduleId: number,
    features: { id: number | string }[],
  ) => void;
  selectAllPermissions: () => void;
  clearAllPermissions: () => void;
  totalSelectedModules: number;
  totalSelectedFeatures: number;
  formDataPrimaryRoleId: string | number;
  rolePermsLoading: boolean;
  errors: Record<string, string>;
};

export default function PermissionPanel({
  entitlements,
  loading,
  selectedPermissions,
  togglePermission,
  toggleAllModuleFeatures,
  selectAllPermissions,
  clearAllPermissions,
  totalSelectedModules,
  totalSelectedFeatures,
  formDataPrimaryRoleId,
  rolePermsLoading,
  errors,
}: PermissionPanelProps) {
  if (loading) {
    return (
      <div className="text-sm text-muted-foreground py-8 text-center">
        Loading modules...
      </div>
    );
  }

  return (
    <>
      <div id="field-permissions" className="sr-only" />
      {formDataPrimaryRoleId && (
        <div className="mb-4 flex items-center gap-2 p-3 bg-primary/5 border border-primary/20 rounded-lg text-xs text-primary">
          <Check className="w-4 h-4 shrink-0" />
          {rolePermsLoading
            ? "Loading role permissions..."
            : "Permissions pre-filled from selected role. You can modify below."}
        </div>
      )}

      {errors.permissions && (
        <div className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive">
          {errors.permissions}
        </div>
      )}

      <div className="mb-4 flex items-center justify-between gap-2">
        <p className="text-xs text-muted-foreground">
          Select modules and the specific features this user can access.
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={selectAllPermissions}
            className="text-xs text-primary"
          >
            Select All
          </button>
          <button
            type="button"
            onClick={clearAllPermissions}
            className="text-xs text-muted-foreground"
          >
            Clear
          </button>
        </div>
      </div>

      {entitlements.length === 0 ? (
        <div className="text-sm text-muted-foreground py-8 text-center">
          No modules available in current package.
        </div>
      ) : (
        <div className="space-y-3">
          {entitlements.map((module) => {
            const allSelected = module.features.every(
              (f) => selectedPermissions[`${module.id}__${f.id}`],
            );
            const someSelected = module.features.some(
              (f) => selectedPermissions[`${module.id}__${f.id}`],
            );

            return (
              <div
                key={module.id}
                className={`border rounded-lg overflow-hidden ${
                  someSelected ? "border-primary/30 bg-primary/5" : "border-border"
                }`}
              >
                <div className="flex items-center gap-3 px-4 py-3">
                  <IndeterminateCheckbox
                    checked={allSelected}
                    indeterminate={someSelected && !allSelected}
                    onChange={() =>
                      toggleAllModuleFeatures(Number(module.id), module.features)
                    }
                  />
                  <div className="flex-1">
                    <div className="text-sm font-semibold">{module.name}</div>
                    <div className="text-[10px] text-muted-foreground">
                      {module.features.length} features
                    </div>
                  </div>
                  {someSelected && (
                    <div className="text-[10px] text-primary font-medium">
                      {
                        module.features.filter(
                          (f) => selectedPermissions[`${module.id}__${f.id}`],
                        ).length
                      } / {module.features.length} selected
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-4 pb-3">
                  {module.features.map((feature) => {
                    const isOn = !!selectedPermissions[`${module.id}__${feature.id}`];
                    return (
                      <label
                        key={feature.id}
                        className={`flex items-center gap-2 p-2 rounded-lg text-xs cursor-pointer border ${
                          isOn
                            ? "bg-success/10 border-success/30 text-success"
                            : "border-transparent hover:bg-muted"
                        }`}
                      >
                        <Checkbox
                          className="rounded"
                          checked={isOn}
                          onCheckedChange={() =>
                            togglePermission(Number(module.id), Number(feature.id))
                          }
                        />
                        {feature.name}
                      </label>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="mt-6 p-4 rounded-lg bg-muted border text-xs">
        <div className="font-semibold mb-1">Selected Summary</div>
        <span className="text-primary font-medium">{totalSelectedModules}</span>{" "}
        module(s) ·{" "}
        <span className="text-success font-medium">{totalSelectedFeatures}</span>{" "}
        permission(s) selected
      </div>
    </>
  );
}
