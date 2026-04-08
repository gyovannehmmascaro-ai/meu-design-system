import * as React from "react"
import { cn } from "@/lib/utils"

export interface HelperTextProps extends React.ComponentProps<"div"> {
  /** Ícone à direita (ex: <ArrowsClockwiseIcon weight="bold" />) */
  rightIcon?: React.ReactNode
  /** Texto ou elemento à direita */
  rightLabel?: React.ReactNode
}

function HelperText({
  rightIcon,
  rightLabel,
  className,
  children,
  ...props
}: HelperTextProps) {
  const hasRight = rightIcon != null || rightLabel != null

  const textClass = "text-xs leading-5 font-normal text-text-body"

  if (!hasRight) {
    return (
      <div className={cn(textClass, className)} {...props}>
        {children}
      </div>
    )
  }

  return (
    <div className={cn("flex items-center justify-between gap-2.5", className)} {...props}>
      <span className={textClass}>{children}</span>
      <span className="flex items-center gap-1 shrink-0 text-xs leading-5 font-normal text-text-fg-brand">
        {rightIcon && <span className="size-4">{rightIcon}</span>}
        {rightLabel}
      </span>
    </div>
  )
}

export { HelperText }
