import * as React from "react"
import { cn } from "@/lib/utils"

export interface FieldLabelProps extends React.ComponentProps<"label"> {
  /** Mostra o asterisco vermelho de obrigatório */
  required?: boolean
  /** Ícone informativo à direita do texto (qualquer ReactNode — ex: <QuestionIcon />) */
  icon?: React.ReactNode
  /** Texto secundário */
  subtext?: string
  /** Layout do subtext em relação ao label. Padrão: "row" */
  subtextLayout?: "row" | "col"
}

function FieldLabel({
  required,
  icon,
  subtext,
  subtextLayout = "row",
  className,
  children,
  ...props
}: FieldLabelProps) {
  const labelGroup = (
    <span className="flex items-center gap-1">
      <span className="text-sm leading-5 font-medium text-text-heading">
        {children}
      </span>

      {required && (
        <span className="text-sm leading-5 font-medium text-text-fg-danger">
          *
        </span>
      )}

      {icon && (
        <span className="shrink-0 size-4 text-text-body-subtle">
          {icon}
        </span>
      )}
    </span>
  )

  return (
    <label
      className={cn(
        subtextLayout === "col" ? "flex flex-col gap-0.5" : "flex items-center gap-2",
        className
      )}
      {...props}
    >
      {labelGroup}

      {subtext && (
        <span className="text-xs leading-4 font-normal text-text-body-subtle">
          {subtext}
        </span>
      )}
    </label>
  )
}

export { FieldLabel }
