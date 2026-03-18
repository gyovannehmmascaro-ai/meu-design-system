import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Spinner } from "@/components/ui/spinner"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

// ── Variantes base (badges com texto) ─────────────────────────────────────
const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1 border border-solid font-medium whitespace-nowrap rounded-fig-sm leading-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 shrink-0",
  {
    variants: {
      theme: {
        gray:    "bg-bg-neutral-secondary    text-text-heading          border-border-default-medium",
        white:   "bg-bg-neutral-primary-soft text-text-heading          border-border-default",
        brand:   "bg-bg-brand-softer         text-text-fg-brand         border-border-brand-subtle",
        danger:  "bg-bg-danger-soft          text-text-fg-danger-strong border-border-danger-subtle",
        warning: "bg-bg-warning-soft         text-text-fg-warning       border-border-warning-subtle",
        success: "bg-bg-success-soft         text-text-fg-success-strong border-border-success-subtle",
        info:    "bg-bg-info-softer          text-text-fg-infos-strong   border-border-blue-subtle",
      },
      size: {
        sm: "px-1 py-0.5 text-xs [&_svg:not([class*='size-'])]:size-3",
        lg: "px-1.5 py-1 text-sm [&_svg:not([class*='size-'])]:size-3.5",
      },
    },
    defaultVariants: { theme: "gray", size: "sm" },
  }
)

// ── Variante redonda (icon-only e number) ──────────────────────────────────
const roundBadgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border border-solid font-medium shrink-0 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      theme: {
        gray:    "bg-bg-neutral-secondary    text-text-heading          border-border-default-medium",
        white:   "bg-bg-neutral-primary-soft text-text-heading          border-border-default",
        brand:   "bg-bg-brand-softer         text-text-fg-brand         border-border-brand-subtle",
        danger:  "bg-bg-danger-soft          text-text-fg-danger-strong border-border-danger-subtle",
        warning: "bg-bg-warning-soft         text-text-fg-warning       border-border-warning-subtle",
        success: "bg-bg-success-soft         text-text-fg-success-strong border-border-success-subtle",
        info:    "bg-bg-info-softer          text-text-fg-infos-strong   border-border-blue-subtle",
      },
      size: {
        // spacing/5 = 20px (sm) | spacing/6 = 24px (lg) — tokens do Figma
        sm: "size-5 text-xs [&_svg:not([class*='size-'])]:size-3",
        lg: "size-6 text-xs [&_svg:not([class*='size-'])]:size-3.5",
      },
    },
    defaultVariants: { theme: "gray", size: "sm" },
  }
)

// ── Variante pílula (rounded — só texto, sem borda, rounded-full) ──────────
// Tipo "New" badge do Figma — apenas Size=sm (lg não existe no Figma)
const roundedBadgeVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap leading-4 shrink-0 px-2 py-0.5 text-xs",
  {
    variants: {
      theme: {
        gray:    "bg-bg-neutral-secondary    text-text-heading",
        white:   "bg-bg-neutral-primary-soft text-text-heading",
        brand:   "bg-bg-brand-softer         text-text-fg-brand",
        danger:  "bg-bg-danger-medium        text-text-fg-danger-strong",
        warning: "bg-bg-warning-soft         text-text-fg-warning",
        success: "bg-bg-success-soft         text-text-fg-success-strong",
        info:    "bg-bg-info-softer          text-text-fg-infos-strong",
      },
    },
    defaultVariants: { theme: "gray" },
  }
)


const dotVariants = cva("rounded-full shrink-0", {
  variants: {
    theme: {
      // Cor do dot = mesmo token de texto do badge (extraído do Figma)
      gray:    "bg-text-heading",
      white:   "bg-text-heading",
      brand:   "bg-text-fg-brand",
      danger:  "bg-text-fg-danger-strong",
      warning: "bg-text-fg-warning",
      success: "bg-bg-success-strong",
      info:    "bg-bg-info-strong",
    },
    size: {
      sm: "size-1.5",
      lg: "size-1.5",
    },
  },
  defaultVariants: { theme: "gray", size: "sm" },
})

// ── Tokens do texto secundário por tema ────────────────────────────────────
// Extraídos do Figma — cada tema tem sua própria cor para o texto secundário
const secondaryTextColor: Record<string, string> = {
  gray:    "text-text-body",
  white:   "text-text-body",
  brand:   "text-text-fg-brand",
  danger:  "text-text-fg-danger-strong",
  warning: "text-text-fg-warning",
  success: "text-text-fg-success-strong",
  info:    "text-text-fg-infos-strong",
}

// ── Cores do Spinner por tema — extraídas do Figma ────────────────────────
// track = trilha | arc = arco girando
const spinnerColors: Record<string, { showTrack: boolean; track: string; arc: string }> = {
  gray:    { showTrack: true, track: "text-bg-neutral-quaternary", arc: "text-bg-brand"    },
  white:   { showTrack: true, track: "text-bg-neutral-quaternary", arc: "text-bg-brand"    },
  brand:   { showTrack: true, track: "text-bg-brand-soft",         arc: "text-bg-brand"    },
  danger:  { showTrack: true, track: "text-bg-danger-medium",      arc: "text-bg-danger"   },
  warning: { showTrack: true, track: "text-bg-warning-medium",     arc: "text-bg-warning"  },
  success: { showTrack: true, track: "text-bg-success-medium",     arc: "text-bg-success"  },
  info:    { showTrack: true, track: "text-bg-info-medium",        arc: "text-bg-info"     },
}


// ── Tipos ──────────────────────────────────────────────────────────────────
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * default         → ícone leading + texto + ícone trailing
   * dot             → bolinha colorida + texto
   * avatar          → avatar + texto
   * loader          → spinner + texto
   * secondary-text  → texto principal | texto secundário
   * icon-only       → badge redondo com ícone (sem texto)
   * number          → badge redondo com número (sem texto)
   */
  variant?: "default" | "dot" | "avatar" | "loader" | "secondary-text" | "icon-only" | "number" | "rounded"

  // Ícones (default / secondary-text / dot / avatar)
  iconLeading?: React.ReactNode
  iconTrailing?: React.ReactNode

  // Texto secundário (secondary-text)
  secondaryText?: string

  // Avatar — substitui o placeholder quando o componente Avatar estiver pronto
  avatar?: React.ReactNode

  // Spinner customizado — sobrescreve o Spinner padrão do Badge
  spinner?: React.ReactNode

  // Ícone para a variante redonda (icon-only)
  icon?: React.ReactNode

  // Número para a variante redonda (number)
  number?: number | string
}

// ── Componente ─────────────────────────────────────────────────────────────
function Badge({
  className,
  theme = "gray",
  size = "sm",
  variant = "default",
  iconLeading,
  iconTrailing,
  secondaryText,
  avatar,
  spinner,
  icon,
  number,
  children,
  ...props
}: BadgeProps) {

  // ── Variante pílula ──
  if (variant === "rounded") {
    return (
      <div
        data-slot="badge"
        data-theme={theme}
        data-size={size}
        data-variant={variant}
        className={cn(roundedBadgeVariants({ theme }), className)}
        {...props}
      >
        {children}
      </div>
    )
  }

  // ── Variantes redondas — layout diferente ──
  if (variant === "icon-only" || variant === "number") {
    return (
      <div
        data-slot="badge"
        data-theme={theme}
        data-size={size}
        data-variant={variant}
        className={cn(roundBadgeVariants({ theme, size }), className)}
        {...props}
      >
        {variant === "icon-only"
          ? icon
          : <span>{number ?? children}</span>
        }
      </div>
    )
  }

  // ── Variantes normais ──
  return (
    <div
      data-slot="badge"
      data-theme={theme}
      data-size={size}
      data-variant={variant}
      className={cn(badgeVariants({ theme, size }), className)}
      {...props}
    >
      {/* Dot */}
      {variant === "dot" && (
        <span className={dotVariants({ theme, size })} />
      )}

      {/* Avatar */}
      {variant === "avatar" && (
        avatar
          ? <span className={cn("rounded-full overflow-hidden shrink-0", size === "lg" ? "size-5" : "size-4")}>{avatar}</span>
          : <Avatar className={size === "lg" ? "size-5" : "size-4"}><AvatarFallback /></Avatar>
      )}

      {/* Loader — Spinner real com cores do tema */}
      {variant === "loader" && (
        spinner ?? <Spinner
          size={size === "lg" ? "small" : "xs"}
          track={spinnerColors[theme ?? "gray"].showTrack}
          arcColor={spinnerColors[theme ?? "gray"].arc}
          trackColor={spinnerColors[theme ?? "gray"].track}
        />
      )}

      {/* Ícone leading (default / secondary-text) */}
      {(variant === "default" || variant === "secondary-text") && iconLeading && (
        <span className="shrink-0 flex items-center">{iconLeading}</span>
      )}

      {/* Texto principal */}
      {children && children}

      {/* Texto secundário — cor e peso variam por tema e tamanho (Figma) */}
      {variant === "secondary-text" && secondaryText && (
        <>
          {/* Separador — linha vertical, igual ao Figma */}
          <span className={cn(
            "shrink-0 border-l border-current opacity-30",
            size === "lg" ? "h-3" : "h-2.5"
          )} />
          <span className={cn(
            secondaryTextColor[theme ?? "gray"],
            size === "lg" ? "font-medium" : "font-normal"
          )}>
            {secondaryText}
          </span>
        </>
      )}

      {/* Ícone trailing — disponível em default, secondary-text, dot e avatar */}
      {(variant === "default" || variant === "secondary-text" || variant === "dot" || variant === "avatar") && iconTrailing && (
        <span className="shrink-0 flex items-center">{iconTrailing}</span>
      )}
    </div>
  )
}

export { Badge, badgeVariants }