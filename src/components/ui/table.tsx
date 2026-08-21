import * as React from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { TableSkeletonProps } from "@/types/Skeleton";
import { Skeleton } from "@/components/ui/skeleton";

const TableLoader = ({
  colSpan,
  rows = 5,
}: {
  colSpan: number;
  rows?: number;
}) => {
  return (
    <TableBody>
      {Array.from({ length: rows }).map((_, index) => (
        <TableRow key={index}>
          <TableCell colSpan={colSpan + 1} className="p-0">
            <div className="flex items-center gap-4 px-4 py-4">
              <div className="h-4 w-4 animate-pulse rounded bg-muted" />

              <div className="h-4 w-28 animate-pulse rounded bg-muted" />

              <div className="h-4 w-40 animate-pulse rounded bg-muted" />

              <div className="h-4 w-20 animate-pulse rounded bg-muted" />

              <div className="h-4 w-16 animate-pulse rounded bg-muted" />

              <div className="h-4 w-24 animate-pulse rounded bg-muted" />

              <div className="h-5 w-16 animate-pulse rounded-full bg-muted" />
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

TableLoader.displayName = "TableLoader";

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto rounded-lg border">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
));

Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn("bg-muted/50 [&_tr]:border-b", className)}
    {...props}
  />
));

TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));

TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("border-t bg-muted/50 font-medium", className)}
    {...props}
  />
));

TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors",
      "hover:bg-muted/50",
      "data-[state=selected]:bg-muted",
      className,
    )}
    {...props}
  />
));

TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-11 px-4 text-left align-middle",
      "text-xs font-semibold uppercase tracking-wide",
      "text-muted-foreground",
      "[&:has([role=checkbox])]:pr-0",
      className,
    )}
    {...props}
  />
));

TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "px-4 py-3 align-middle",
      "[&:has([role=checkbox])]:pr-0",
      className,
    )}
    {...props}
  />
));

TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));

TableCaption.displayName = "TableCaption";

/* -------------------------------------------------------------------------- */
/* Expandable Row                                                             */
/* -------------------------------------------------------------------------- */

interface TableExpandableRowProps {
  expanded: boolean;
  onExpandedChange: () => void;
  children: React.ReactNode;
  expandedContent: React.ReactNode;
  colSpan: number;
  className?: string;
  expandedClassName?: string;
}

const TableExpandableRow = ({
  expanded,
  onExpandedChange,
  children,
  expandedContent,
  colSpan,
  className,
  expandedClassName,
}: TableExpandableRowProps) => {
  return (
    <>
      {/* Main Row */}
      <TableRow
        className={cn(
          "group cursor-pointer",
          expanded && "bg-muted/30",
          className,
        )}
        onClick={onExpandedChange}
      >
        <TableCell className="w-10 px-2">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className={cn(
              "h-8 w-8 shrink-0",
              "text-muted-foreground",
              "hover:bg-background hover:text-foreground",
            )}
            onClick={(event) => {
              event.stopPropagation();
              onExpandedChange();
            }}
            aria-label={expanded ? "Collapse row" : "Expand row"}
            aria-expanded={expanded}
          >
            {expanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        </TableCell>

        {children}
      </TableRow>

      {/* Expanded Row */}
      {expanded && (
        <TableRow
          className={cn("bg-muted/20 hover:bg-muted/20", expandedClassName)}
        >
          <TableCell colSpan={colSpan + 1} className="p-0">
            <div className="border-t bg-background/60">
              <div className="p-5">{expandedContent}</div>
            </div>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

TableExpandableRow.displayName = "TableExpandableRow";

const TableSkeleton = ({
  rows = 5,
  columns = 7,
  className,
}: TableSkeletonProps) => {
  return (
    <TableBody className={className}>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <TableRow key={rowIndex}>
          {Array.from({ length: columns }).map((_, columnIndex) => (
            <TableCell key={columnIndex}>
              <Skeleton
                className={cn(
                  "h-4",
                  columnIndex === 0 && "w-5",
                  columnIndex === 1 && "w-28",
                  columnIndex === 2 && "w-32",
                  columnIndex === 3 && "w-32",
                  columnIndex === 4 && "w-16",
                  columnIndex === 5 && "w-16",
                  columnIndex === 6 && "w-24",
                  columnIndex === 7 && "w-16",
                )}
              />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

TableSkeleton.displayName = "TableSkeleton";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  TableExpandableRow,
  TableLoader,
  TableSkeleton
};
