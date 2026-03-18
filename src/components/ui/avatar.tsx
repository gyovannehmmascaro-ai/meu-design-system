import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cn } from "@/lib/utils"

// ── Contexto para passar size do Avatar para os filhos ─────────────────────
const AvatarContext = React.createContext<{ size: AvatarSize }>({ size: "base" })

// ── Tipos ──────────────────────────────────────────────────────────────────
type AvatarSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl"
type AvatarStatus = "online" | "away" | "busy" | "offline"
type AvatarGroupSize = "sm" | "base" | "lg"

// ── Mapeamentos de tamanho ─────────────────────────────────────────────────

// Tamanho do container — spacing tokens do Figma (xs usa valor fixo pois não há token exato)
const avatarSizeClass: Record<AvatarSize, string> = {
  "xs":  "size-[18px]",
  "sm":  "size-6",   // spacing-6 = 24px
  "base":"size-8",   // spacing-8 = 32px — padrão
  "lg":  "size-11",  // spacing-11 = 44px
  "xl":  "size-14",  // spacing-14 = 56px
  "2xl": "size-16",  // spacing-16 = 64px
}

// Tamanho do texto das iniciais/contador — tokens do Figma
const avatarTextSize: Record<AvatarSize, string> = {
  "xs":  "text-xxs",  // 8px
  "sm":  "text-xs",   // 12px
  "base":"text-sm",   // 14px
  "lg":  "text-lg",   // 18px
  "xl":  "text-2xl",  // 24px
  "2xl": "text-2xl",  // 24px
}

// Tamanho do dot de status — spacing tokens do Figma
const badgeDotSize: Record<AvatarSize, string> = {
  "xs":  "size-1.5", // 6px
  "sm":  "size-2",   // 8px
  "base":"size-2.5", // 10px
  "lg":  "size-3",   // 12px
  "xl":  "size-4",   // 16px
  "2xl": "size-4",   // 16px
}

// Posição do dot — centro do dot alinhado com a borda da circunferência (Figma)
// right negativo = elemento ultrapassa o container para fora
const badgeDotPosition: Record<AvatarSize, { top: string; right: string }> = {
  "xs":  { top: "0px",  right: "-1px" },
  "sm":  { top: "1px",  right: "-2px" },
  "base":{ top: "1px",  right: "-1px" },
  "lg":  { top: "4px",  right: "-3px" },
  "xl":  { top: "2px",  right: "-2px" },
  "2xl": { top: "4px",  right: "-1px" },
}

// Posição do botão remover — ultrapassa ~6px à direita (Figma)
const removeButtonPosition: Record<AvatarSize, { top: string; right: string }> = {
  "xs":  { top: "-2px", right: "-6px" },
  "sm":  { top: "-2px", right: "-6px" },
  "base":{ top: "0px",  right: "-6px" },
  "lg":  { top: "3px",  right: "-6px" },
  "xl":  { top: "1px",  right: "-6px" },
  "2xl": { top: "3px",  right: "-5px" },
}

// Tamanho do botão de remover — spacing tokens do Figma
const removeButtonSize: Record<AvatarSize, string> = {
  "xs":  "size-3",   // 12px
  "sm":  "size-3.5", // 14px
  "base":"size-4",   // 16px
  "lg":  "size-4",   // 16px — mesmo que base
  "xl":  "size-5",   // 20px
  "2xl": "size-5",   // 20px — mesmo que xl
}

// Cor do dot por status — tokens semânticos
const badgeStatusColor: Record<AvatarStatus, string> = {
  online:  "bg-bg-success", // verde
  away:    "bg-bg-danger",  // vermelho
  busy:    "bg-bg-warning", // laranja
  offline: "bg-bg-gray",    // cinza (Alternative no Figma)
}

// ── Avatar — container raiz ────────────────────────────────────────────────
// Usa AvatarPrimitive.Root do Radix para coordenar o estado de carregamento
// da imagem entre AvatarImage e AvatarFallback automaticamente.
function Avatar({
  size = "base",
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & { size?: AvatarSize }) {
  return (
    <AvatarContext.Provider value={{ size }}>
      <AvatarPrimitive.Root
        data-slot="avatar"
        className={cn(
          "relative block rounded-full shrink-0",
          avatarSizeClass[size],
          className
        )}
        {...props}
      >
        {children}
      </AvatarPrimitive.Root>
    </AvatarContext.Provider>
  )
}

// ── AvatarImage — foto ─────────────────────────────────────────────────────
// AvatarPrimitive.Image monitora o carregamento da imagem.
// Quando a imagem carrega com sucesso → AvatarFallback some automaticamente.
// Quando falha ou ainda está carregando → AvatarFallback aparece no lugar.
function AvatarImage({
  className,
  alt = "",
  ...props
}: React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      alt={alt}
      className={cn(
        "absolute inset-0 size-full object-cover rounded-full pointer-events-none",
        className
      )}
      {...props}
    />
  )
}

// ── AvatarFallback — iniciais ou placeholder genérico ──────────────────────
// AvatarPrimitive.Fallback só renderiza quando a imagem ainda não carregou
// ou falhou. O Radix gerencia essa visibilidade automaticamente via contexto.
function AvatarFallback({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>) {
  const { size } = React.useContext(AvatarContext)

  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "absolute inset-0 rounded-full flex items-center justify-center size-full overflow-hidden",
        "bg-bg-neutral-quaternary",
        className
      )}
      {...props}
    >
      {children ? (
        // Iniciais — text-text-body, font-base, font-semibold
        <span className={cn("text-text-body font-base font-semibold", avatarTextSize[size])}>
          {children}
        </span>
      ) : (
        // Placeholder genérico — ícone de pessoa
        <svg
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-[60%] text-text-fg-disabled"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5 6a5 5 0 0 1 10 0H3Z" />
        </svg>
      )}
    </AvatarPrimitive.Fallback>
  )
}

// ── AvatarBadge — dot de status ────────────────────────────────────────────
function AvatarBadge({
  status,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { status: AvatarStatus }) {
  const { size } = React.useContext(AvatarContext)

  return (
    <div
      data-slot="avatar-badge"
      className={cn(
        "absolute rounded-full shrink-0",
        badgeDotSize[size],
        badgeStatusColor[status],
        className
      )}
      style={badgeDotPosition[size]}
      {...props}
    />
  )
}

// ── AvatarRemoveButton — botão X ───────────────────────────────────────────
function AvatarRemoveButton({
  onRemove,
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement> & { onRemove?: () => void }) {
  const { size } = React.useContext(AvatarContext)

  return (
    <button
      data-slot="avatar-remove"
      type="button"
      onClick={onRemove}
      className={cn(
        "absolute rounded-full flex items-center justify-center shrink-0 cursor-pointer",
        "bg-bg-neutral-tertiary-medium",
        removeButtonSize[size],
        className
      )}
      style={removeButtonPosition[size]}
      {...props}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-[55%] text-text-body"
      >
        <path d="M18 6 6 18M6 6l12 12" />
      </svg>
    </button>
  )
}

// ── AvatarGroup — avatares sobrepostos ────────────────────────────────────
const groupConfig: Record<AvatarGroupSize, {
  avatarSize: AvatarSize
  overlap: string   // margem negativa em cada item para sobreposição
  padding: string   // padding-right no container para compensar o overlap do último item
  border: string
  textSize: string
}> = {
  sm:   { avatarSize: "sm",   overlap: "-mr-2",   padding: "pr-2",   border: "border",   textSize: "text-xxs" },
  base: { avatarSize: "base", overlap: "-mr-3.5", padding: "pr-3.5", border: "border-2", textSize: "text-xs"  },
  lg:   { avatarSize: "lg",   overlap: "-mr-4",   padding: "pr-4",   border: "border-2", textSize: "text-sm"  },
}

function AvatarGroup({
  size = "base",
  max,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  size?: AvatarGroupSize
  max?: number
}) {
  const config = groupConfig[size]
  const childArray = React.Children.toArray(children)
  const visible = max ? childArray.slice(0, max) : childArray
  const overflow = max ? Math.max(0, childArray.length - max) : 0

  return (
    <div
      data-slot="avatar-group"
      className={cn("relative flex items-center", config.padding, className)}
      {...props}
    >
      {visible.map((child, i) => (
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ size?: AvatarSize; className?: string }>, {
              key: i,
              size: config.avatarSize,
              className: cn(config.overlap, config.border, "border-border-buffer border-solid"),
            })
          : child
      ))}

      {overflow > 0 && (
        <div
          className={cn(
            "relative shrink-0 rounded-full flex items-center justify-center",
            "bg-bg-neutral-quaternary",
            config.border, "border-border-buffer",
            config.overlap,
            groupConfig[size].avatarSize === "sm" ? "size-6" :
            groupConfig[size].avatarSize === "base" ? "size-8" : "size-11",
          )}
        >
          <span className={cn(
            "text-text-body font-base font-semibold",
            config.textSize
          )}>
            +{overflow}
          </span>
        </div>
      )}
    </div>
  )
}

// ── AvatarGroupLabel — avatar + nome + helper opcional ────────────────────
function AvatarGroupLabel({
  name,
  helper,
  size = "base",
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  name: string
  helper?: string
  size?: "sm" | "base" | "lg" | "xl"
}) {
  const labelConfig = {
    sm:   { avatarSize: "sm" as AvatarSize, gap: "gap-1.5", innerGap: "gap-0.5", nameSize: "text-xs",  helperSize: "text-xs"  },
    base: { avatarSize: "base"as AvatarSize, gap: "gap-2",   innerGap: "gap-1.5", nameSize: "text-base", helperSize: "text-sm"  },
    lg:   { avatarSize: "lg" as AvatarSize, gap: "gap-2.5", innerGap: "gap-1.5", nameSize: "text-base", helperSize: "text-base"},
    xl:   { avatarSize: "xl" as AvatarSize, gap: "gap-2.5", innerGap: "gap-1.5", nameSize: "text-xl",  helperSize: "text-lg"  },
  }
  const cfg = labelConfig[size]

  return (
    <div
      data-slot="avatar-group-label"
      className={cn("flex items-center", cfg.gap, className)}
      {...props}
    >
      <Avatar size={cfg.avatarSize}>
        {children}
      </Avatar>
      <div className={cn("flex flex-col", cfg.innerGap)}>
        <span className={cn("font-base font-medium text-text-heading leading-tight", cfg.nameSize)}>
          {name}
        </span>
        {helper && (
          <span className={cn("font-base font-normal text-text-body leading-tight", cfg.helperSize)}>
            {helper}
          </span>
        )}
      </div>
    </div>
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarRemoveButton,
  AvatarGroup,
  AvatarGroupLabel,
}
