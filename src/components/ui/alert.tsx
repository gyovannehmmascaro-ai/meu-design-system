import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { InfoIcon, XIcon, CaretRightIcon } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge, badgeVariants } from "@/components/ui/badge"

// ── Variantes do container — cor + layout por tipo (Figma) ─────────────────
// text-{cor} fica no container → ícones e textos herdam via currentColor
const alertVariants = cva("", {
  variants: {
    theme: {
      // bg: fundo | text: cor herdada por todos os filhos | border: borda
      default: "bg-bg-neutral-secondary-medium text-text-heading           border-border-default-medium",
      success: "bg-bg-success-soft            text-text-fg-success-strong  border-border-success-subtle",
      danger:  "bg-bg-danger-soft             text-text-fg-danger-strong   border-border-danger-subtle",
      warning: "bg-bg-warning-soft            text-text-fg-warning         border-border-warning-subtle",
      info:    "bg-bg-info-softer             text-text-fg-infos-strong    border-border-blue-subtle",
      brand:   "bg-bg-brand-softer            text-text-fg-brand-strong    border-border-brand-subtle",
    },
    type: {
      default:      "flex items-center gap-2 p-4 rounded-fig border",
      complex:      "flex flex-col gap-4 p-4 rounded-fig border",
      small:        "inline-flex items-center gap-2 rounded-full border pl-1 pr-2 py-1",
      "border-top": "flex items-center gap-2 p-4 border-t-4",
    },
  },
  defaultVariants: { theme: "default", type: "default" },
})

// ── Variante do Button no tipo Complex (Figma: botão sólido com cor do tema) ──
const complexButtonVariant: Record<string, string> = {
  default: "secondary",
  success: "success",
  danger:  "danger",
  warning: "warning",
  info:    "info",
  brand:   "brand",
}

// ── Theme do Badge rounded no tipo Small (Figma: Badge rounded com cor do tema) ──
type BadgeTheme = NonNullable<VariantProps<typeof badgeVariants>["theme"]>
const smallBadgeTheme: Record<string, BadgeTheme> = {
  default: "gray",
  success: "success",
  danger:  "danger",
  warning: "warning",
  info:    "info",
  brand:   "brand",
}

// ── Cor do texto por tema — usada para sobrescrever text-text-heading do Button ghost ──
// O ghost tem text-text-heading fixo; precisamos passar a cor do tema explicitamente
const dismissTextColor: Record<string, string> = {
  default: "text-text-heading",
  success: "text-text-fg-success-strong",
  danger:  "text-text-fg-danger-strong",
  warning: "text-text-fg-warning",
  info:    "text-text-fg-infos-strong",
  brand:   "text-text-fg-brand-strong",
}

// ── Props ───────────────────────────────────────────────────────────────────
export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  /**
   * type  → default | complex | small | border-top  (via VariantProps)
   * theme → default | success | danger | warning | info | brand  (via VariantProps)
   */

  /** Texto principal (default/border-top) ou título do heading (complex) */
  title?: string

  /** Parágrafo abaixo do heading — apenas tipo complex */
  description?: string

  /** Ícone esquerdo — padrão: InfoIcon (Phosphor, bold, 16px) */
  icon?: React.ReactNode

  /** Rótulo do botão de ação — apenas tipo complex (padrão: "Learn more") */
  actionLabel?: string

  /** Callback do botão de ação — exibe o botão quando fornecido */
  onAction?: () => void

  /** Callback de fechar — exibe o botão X quando fornecido (default/complex/border-top) */
  onDismiss?: () => void

  /** Rótulo do badge pílula — apenas tipo small (padrão: "New") */
  badgeLabel?: string
}

// ── Componente ───────────────────────────────────────────────────────────────
function Alert({
  className,
  type = "default",
  theme = "default",
  title,
  description,
  icon,
  actionLabel = "Learn more",
  onAction,
  onDismiss,
  badgeLabel = "New",
  children,
  ...props
}: AlertProps) {
  // VariantProps inclui null | undefined — narrowamos para garantir string válida como chave
  const thm = theme ?? "default"
  const t   = type  ?? "default"

  // Ícone esquerdo padrão: InfoIcon (Phosphor, bold, 16px) — igual ao Figma para todos os temas
  // Herda a cor do container via currentColor — sem classe de cor explícita
  const leftIcon = icon ?? <InfoIcon weight="bold" className="size-4 shrink-0" />

  // ── Small — pílula: badge + texto + seta ──────────────────────────────────
  if (type === "small") {
    return (
      <div
        data-slot="alert"
        data-type={type}
        data-theme={theme}
        className={cn(alertVariants({ theme: thm, type: t }), className)}
        {...props}
      >
        {/* Badge pílula com tema do color (Figma: Badge rounded, bg-{color}-medium) */}
        <Badge variant="rounded" theme={smallBadgeTheme[thm]}>
          {badgeLabel}
        </Badge>

        {/* Herda cor do container via currentColor */}
        <span className="text-sm font-normal whitespace-nowrap">
          {title ?? children}
        </span>

        {/* CaretRightIcon herda cor do container via currentColor */}
        <CaretRightIcon weight="bold" className="size-4 shrink-0" />
      </div>
    )
  }

  // ── Border top — borda somente no topo (4px), sem radius ──────────────────
  // Figma: border-t-4 apenas, sem rounded, sem borda lateral/inferior
  if (type === "border-top") {
    return (
      <div
        data-slot="alert"
        data-type={type}
        data-theme={theme}
        className={cn(alertVariants({ theme: thm, type: t }), className)}
        {...props}
      >
        {/* InfoIcon herda cor do container via currentColor */}
        {leftIcon}

        {/* Herda cor do container via currentColor */}
        <p className="flex-1 text-sm font-normal leading-5">
          {title ?? children}
        </p>

        {/* Botão fechar — className passa a cor do tema para sobrescrever text-text-heading do ghost */}
        {onDismiss && (
          <Button
            variant="ghost"
            size="icon-xs"
            onClick={onDismiss}
            aria-label="Fechar alerta"
            className={cn("shrink-0 -mr-1", dismissTextColor[thm])}
          >
            <XIcon weight="bold" />
          </Button>
        )}
      </div>
    )
  }

  // ── Complex — heading + descrição + botão de ação ─────────────────────────
  // Figma: flex-col gap-4 | título (text-base medium) + body (text-sm) + Button xs
  if (type === "complex") {
    return (
      <div
        data-slot="alert"
        data-type={type}
        data-theme={theme}
        className={cn(alertVariants({ theme: thm, type: t }), className)}
        {...props}
      >
        {/* Seção de texto: heading + parágrafo de descrição */}
        <div className="flex flex-col gap-2">
          {/* Linha do título */}
          <div className="flex items-center gap-2">
            {/* InfoIcon herda cor do container via currentColor */}
            {leftIcon}

            {/* Herda cor do container via currentColor */}
            <p className="flex-1 text-base font-medium leading-4">
              {title ?? children}
            </p>

            {/* Botão fechar — className passa a cor do tema para sobrescrever text-text-heading do ghost */}
            {onDismiss && (
              <Button
                variant="ghost"
                size="icon-xs"
                onClick={onDismiss}
                aria-label="Fechar alerta"
                className={cn("shrink-0 -mr-1", dismissTextColor[thm])}
              >
                <XIcon weight="bold" />
              </Button>
            )}
          </div>

          {/* Parágrafo de descrição — herda cor do container */}
          {description && (
            <p className="text-sm font-normal leading-5">
              {description}
            </p>
          )}
        </div>

        {/* Botão de ação — exibido apenas quando onAction é fornecido */}
        {onAction && (
          <Button
            variant={complexButtonVariant[thm] as React.ComponentProps<typeof Button>["variant"]}
            size="xs"
            onClick={onAction}
            className="self-start"
          >
            {actionLabel}
          </Button>
        )}
      </div>
    )
  }

  // ── Default — ícone + texto + fechar ──────────────────────────────────────
  return (
    <div
      data-slot="alert"
      data-type={type}
      data-theme={theme}
      className={cn(alertVariants({ theme: thm, type: t }), className)}
      {...props}
    >
      {/* InfoIcon herda cor do container via currentColor */}
      {leftIcon}

      {/* Herda cor do container via currentColor */}
      <p className="flex-1 text-sm font-normal leading-5">
        {title ?? children}
      </p>

      {/* Botão fechar — className passa a cor do tema para sobrescrever text-text-heading do ghost */}
      {onDismiss && (
        <Button
          variant="ghost"
          size="icon-xs"
          onClick={onDismiss}
          aria-label="Fechar alerta"
          className={cn("shrink-0 -mr-1", dismissTextColor[thm])}
        >
          <XIcon weight="bold" />
        </Button>
      )}
    </div>
  )
}

export { Alert, alertVariants }
