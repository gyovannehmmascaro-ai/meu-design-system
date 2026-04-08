import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const trackVariants = cva(
  "relative w-full overflow-hidden rounded-full bg-bg-neutral-quaternary",
  {
    variants: {
      size: {
        base: "h-1.5",
        lg:   "h-2.5",
      },
    },
    defaultVariants: {
      size: "base",
    },
  }
)

const fillVariants = cva(
  "h-full rounded-full transition-[width] duration-300 ease-in-out",
  {
    variants: {
      color: {
        primary: "bg-bg-brand",
        success: "bg-bg-success",
        warning: "bg-bg-warning",
        danger:  "bg-bg-danger",
        gray:    "bg-bg-gray",
        dark:    "bg-bg-dark",
      },
    },
    defaultVariants: {
      color: "primary",
    },
  }
)

const labelTextClass = "text-xs leading-4 font-medium text-text-body-subtle"

export interface ProgressBarProps
  extends Omit<React.ComponentProps<"div">, "color"> {
  /** Valor de 0 a 100 */
  value: number
  size?:  VariantProps<typeof trackVariants>["size"]
  color?: VariantProps<typeof fillVariants>["color"]
  /** Posição dos labels. Omitir = sem labels */
  labelPosition?: "top" | "side" | "bottom"
  /** Texto ou elemento à esquerda do label */
  leftLabel?: React.ReactNode
  /** Texto ou elemento à direita do label */
  rightLabel?: React.ReactNode
}

function ProgressBar({
  value,
  size,
  color,
  labelPosition,
  leftLabel,
  rightLabel,
  className,
  ...props
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value))
  const hasLabels = labelPosition && (leftLabel != null || rightLabel != null)

  const labelRow = hasLabels && (
    <div className="flex items-center justify-between gap-2">
      {leftLabel  != null && <span className={labelTextClass}>{leftLabel}</span>}
      {rightLabel != null && <span className={labelTextClass}>{rightLabel}</span>}
    </div>
  )

  const track = (
    <div className={cn(trackVariants({ size }))}>
      <div
        className={cn(fillVariants({ color }))}
        style={{ width: `${clamped}%` }}
      />
    </div>
  )

  if (!hasLabels) {
    return (
      <div className={cn("w-full", className)} {...props}>
        {track}
      </div>
    )
  }

  if (labelPosition === "side") {
    return (
      <div className={cn("flex items-center gap-2 w-full", className)} {...props}>
        {leftLabel  != null && <span className={cn(labelTextClass, "shrink-0")}>{leftLabel}</span>}
        <div className="flex-1">{track}</div>
        {rightLabel != null && <span className={cn(labelTextClass, "shrink-0")}>{rightLabel}</span>}
      </div>
    )
  }

  return (
    <div className={cn("flex flex-col gap-1 w-full", className)} {...props}>
      {labelPosition === "top"    && labelRow}
      {track}
      {labelPosition === "bottom" && labelRow}
    </div>
  )
}

export { ProgressBar }
