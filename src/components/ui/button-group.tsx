import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// ── Context ───────────────────────────────────────────────────────────────────

type ButtonGroupContextValue = {
  color: "white" | "gray"
  size:  "xs" | "sm" | "base" | "lg"
  value?: string
  onValueChange?: (value: string) => void
}

const ButtonGroupContext = React.createContext<ButtonGroupContextValue>({
  color: "white",
  size:  "sm",
})

// ── Item ──────────────────────────────────────────────────────────────────────

const sizeMap = {
  xs:   "xs",
  sm:   "sm",
  base: "default",
  lg:   "lg",
} as const

// Tamanhos quadrados (sem padding) usados quando o item contém só ícone
const iconSizeMap = {
  xs:   "icon-xs",
  sm:   "icon-sm",
  base: "icon",
  lg:   "icon-lg",
} as const

interface ButtonGroupItemProps
  extends Omit<React.ComponentProps<typeof Button>, "size" | "color"> {
  /** Identificador único do item — necessário para o estado ativo. */
  value?: string
  color?: "white" | "gray"
  size?:  "xs" | "sm" | "base" | "lg"
  /**
   * Quando true, usa tamanho quadrado sem padding (ex: sm → 36×36 px).
   * Use em itens que contêm apenas um ícone.
   */
  iconOnly?: boolean
}

function ButtonGroupItem({
  className,
  color,
  size,
  variant,
  value,
  iconOnly = false,
  onClick,
  ...props
}: ButtonGroupItemProps) {
  const ctx = React.useContext(ButtonGroupContext)

  const resolvedColor   = color   ?? ctx.color
  const resolvedSize    = size    ?? ctx.size
  // white → tertiary (fundo branco + borda default)
  // gray  → secondary (fundo cinza + borda default-medium)
  const resolvedVariant = variant ?? (resolvedColor === "white" ? "tertiary" : "secondary")

  const isActive = value !== undefined && value === ctx.value

  return (
    <Button
      variant={resolvedVariant}
      size={iconOnly ? iconSizeMap[resolvedSize] : sizeMap[resolvedSize]}
      active={isActive}
      aria-pressed={isActive ? true : undefined}
      onClick={(e) => {
        if (value !== undefined) ctx.onValueChange?.(value)
        onClick?.(e)
      }}
      data-icon-only={iconOnly || undefined}
      className={cn(className)}
      {...props}
    />
  )
}
ButtonGroupItem.displayName = "ButtonGroupItem"

// ── Root ──────────────────────────────────────────────────────────────────────

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: "white" | "gray"
  size?:  "xs" | "sm" | "base" | "lg"
  /**
   * Valor do item ativo (padrão radio-group: só um ativo por vez).
   * Omita para grupos sem seleção (ex: navegação, contador).
   */
  value?: string
  /** Chamado com o novo valor quando o usuário clica num item com value. */
  onValueChange?: (value: string) => void
  /** Direção de empilhamento dos itens. @default "horizontal" */
  orientation?: "horizontal" | "vertical"
}

function ButtonGroup({
  color = "white",
  size  = "sm",
  value,
  onValueChange,
  orientation = "horizontal",
  className,
  children,
  ...props
}: ButtonGroupProps) {
  const isVertical = orientation === "vertical"

  return (
    <ButtonGroupContext.Provider value={{ color, size, value, onValueChange }}>
      <div
        role="group"
        className={cn(
          "inline-flex shadow-[0px_1px_0.5px_0px_rgba(29,41,61,0.02)]",
          isVertical && "flex-col",

          // ── Border radius ──────────────────────────────────────────────────
          // Seletores no container têm especificidade maior que as classes CVA
          // do Button — o rounded-fig é sobrescrito com segurança.
          "[&>[data-slot=button]]:rounded-none",
          isVertical
            ? "[&>[data-slot=button]:first-child]:rounded-t-fig-base"  // 12 px topo
            : "[&>[data-slot=button]:first-child]:rounded-l-fig",      // 8 px esq.
          isVertical
            ? "[&>[data-slot=button]:last-child]:rounded-b-fig-base"   // 12 px baixo
            : "[&>[data-slot=button]:last-child]:rounded-r-fig-base",  // 12 px dir.

          // ── Border collapse ────────────────────────────────────────────────
          isVertical
            ? "[&>[data-slot=button]:not(:last-child)]:-mb-px"
            : "[&>[data-slot=button]:not(:last-child)]:-mr-px",

          // Garante que o anel de foco apareça por cima do vizinho.
          "[&>[data-slot=button]:focus-visible]:z-10",

          // Itens ocupam a largura total do container no modo vertical.
          isVertical && "[&>[data-slot=button]:not([data-icon-only])]:w-full",

          className
        )}
        {...props}
      >
        {children}
      </div>
    </ButtonGroupContext.Provider>
  )
}
ButtonGroup.displayName = "ButtonGroup"

export { ButtonGroup, ButtonGroupItem }
