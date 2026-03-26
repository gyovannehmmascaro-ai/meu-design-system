import * as React from "react"
import { XIcon, MegaphoneIcon, PercentIcon, ArrowRightIcon, EnvelopeIcon } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Logo, type LogoProps } from "@/components/ui/logo"

// ── Tipos ──────────────────────────────────────────────────────────────────
export type BannerType =
  | "default"
  | "heading-description"
  | "icon-link"
  | "logo-button"
  | "newsletter"

export interface BannerProps {
  type?: BannerType
  onClose?: () => void
  className?: string

  // ── default ──────────────────────────────────────────────────────────────
  /** Ícone exibido dentro do shape circular. Padrão: Megaphone */
  icon?: React.ReactNode
  /** Conteúdo de texto — aceita JSX para incluir links inline */
  text?: React.ReactNode

  // ── heading-description ──────────────────────────────────────────────────
  heading?: string
  description?: string
  primaryAction?: { label: string; onClick?: () => void; icon?: React.ReactNode }
  secondaryAction?: { label: string; onClick?: () => void; icon?: React.ReactNode }

  // ── icon-link ────────────────────────────────────────────────────────────
  /** Ícone exibido dentro do shape quadrado brand. Padrão: Percent */
  linkIcon?: React.ReactNode
  linkLabel?: string
  linkHref?: string

  // ── logo-button ──────────────────────────────────────────────────────────
  /** Props repassadas ao componente Logo. Ex: { size: "xs", src: "/logo.svg" } */
  logoProps?: LogoProps
  logoText?: string

  // ── newsletter ───────────────────────────────────────────────────────────
  emailPlaceholder?: string
  subscribeLabel?: string
  onSubscribe?: (email: string) => void
}

// ── Botão de fechar — usa Button ghost da biblioteca (Figma: ghost, icon-xs, Phosphor X bold 14px) ──
function CloseButton({ onClick }: { onClick?: () => void }) {
  return (
    <Button variant="ghost" size="icon-xs" onClick={onClick} aria-label="Fechar banner" className="shrink-0">
      <XIcon weight="bold" className="size-3.5" />
    </Button>
  )
}

// ── Componente ─────────────────────────────────────────────────────────────
export function Banner({
  type = "default",
  onClose,
  className,

  // default
  icon,
  text,

  // heading-description
  heading,
  description,
  primaryAction,
  secondaryAction,

  // icon-link
  linkIcon,
  linkLabel,
  linkHref,

  // logo-button
  logoProps,
  logoText,

  // newsletter
  emailPlaceholder = "Enter your email",
  subscribeLabel = "Subscribe",
  onSubscribe,
}: BannerProps) {

  const [email, setEmail] = React.useState("")

  // ── Default ───────────────────────────────────────────────────────────────
  if (type === "default") {
    return (
      <div className={cn("@container w-full bg-bg-neutral-primary-soft border-b border-border-default", className)}>
        <div className="flex items-center gap-3 px-4 py-4 relative">
          <div className="flex flex-1 items-center @sm:justify-center gap-2.5 pr-8 @sm:pr-0">
            <span className="size-6 rounded-full bg-bg-neutral-tertiary flex items-center justify-center shrink-0">
              {icon ?? <MegaphoneIcon className="size-4 text-text-body" />}
            </span>
            <span className="text-sm text-text-body">
              {text ?? "New brand identity has been launched."}
            </span>
          </div>
          <div className="absolute top-2 right-2 @sm:static">
            <CloseButton onClick={onClose} />
          </div>
        </div>
      </div>
    )
  }

  // ── Heading & Description ─────────────────────────────────────────────────
  if (type === "heading-description") {
    return (
      <div className={cn("@container w-full bg-bg-neutral-primary-soft border-b border-border-default", className)}>
        <div className="flex items-start gap-4 px-4 py-4">
          {/* Conteúdo: texto + botões (empilhados em mobile/tablet, lado a lado em desktop) */}
          <div className="flex flex-1 flex-col @4xl:flex-row @4xl:items-center @4xl:justify-between gap-3 @4xl:gap-4 min-w-0">
            <div className="flex flex-col gap-1 min-w-0">
              {heading && (
                <p className="text-lg font-medium text-text-heading leading-6">{heading}</p>
              )}
              {description && (
                <p className="text-sm text-text-body leading-5">{description}</p>
              )}
            </div>
            <div className="flex items-center gap-3 @4xl:shrink-0">
              {secondaryAction && (
                <Button variant="tertiary" size="xs" onClick={secondaryAction.onClick}>
                  {secondaryAction.icon}
                  {secondaryAction.label}
                </Button>
              )}
              {primaryAction && (
                <Button variant="brand" size="xs" onClick={primaryAction.onClick}>
                  {primaryAction.label}
                  {primaryAction.icon}
                </Button>
              )}
            </div>
          </div>
          {/* Close button sempre inline à direita */}
          <CloseButton onClick={onClose} />
        </div>
      </div>
    )
  }

  // ── Icon & Link ───────────────────────────────────────────────────────────
  if (type === "icon-link") {
    return (
      <div className={cn("@container w-full bg-bg-neutral-primary-soft border-t border-border-default", className)}>
        <div className="flex items-center gap-3 px-4 py-4 relative">
          <div className="flex flex-1 flex-col @sm:flex-row @sm:items-center @sm:justify-center gap-1.5 pr-8 @sm:pr-0">
            <div className="flex items-center gap-1.5">
              <span className="size-4 rounded-fig-base bg-bg-brand-softer flex items-center justify-center shrink-0">
                {linkIcon ?? <PercentIcon className="size-2.5 text-text-fg-brand" />}
              </span>
              <span className="text-sm text-text-body">{text ?? "Get 2% pricing commission."}</span>
            </div>
            {linkLabel && (
              <a
                href={linkHref ?? "#"}
                className="flex items-center gap-1.5 text-sm font-medium text-text-fg-brand underline decoration-solid hover:opacity-80 transition-opacity"
              >
                {linkLabel}
                <ArrowRightIcon className="size-4" />
              </a>
            )}
          </div>
          <div className="absolute top-2 right-2 @sm:static">
            <CloseButton onClick={onClose} />
          </div>
        </div>
      </div>
    )
  }

  // ── Logo + Button ─────────────────────────────────────────────────────────
  if (type === "logo-button") {
    return (
      <div className={cn("@container w-full bg-bg-neutral-primary-soft border border-border-default rounded-fig-base shadow-[0px_1px_0.5px_0px_rgba(29,41,61,0.02)]", className)}>
        <div className="flex flex-col @sm:flex-row @sm:items-center @sm:justify-between gap-4 px-4 py-4">
          <div className="flex flex-1 items-center gap-4 min-w-0">
            {/* Mobile (<384px): ícone 48×48 */}
            <Logo size="base" iconOnly {...logoProps} className="@sm:hidden" />
            {/* Tablet (384px–896px): ícone 24×24 */}
            <Logo size="xs" iconOnly {...logoProps} className="hidden @sm:block @4xl:hidden" />
            {/* Desktop (>896px): logo completo */}
            <Logo size="xs" {...logoProps} className="hidden @4xl:block" />
            <div className="border-l border-border-default pl-4 min-w-0">
              <p className="text-base text-text-body leading-6 @sm:truncate">
                {logoText ?? "Build websites even faster with components on top of Tailwind CSS."}
              </p>
            </div>
          </div>
          <div className="flex items-stretch @sm:items-center gap-3 @sm:shrink-0 flex-wrap">
            {primaryAction && (
              <Button
                variant="brand"
                size="xs"
                onClick={primaryAction.onClick}
                className="flex-1 @sm:flex-none justify-center"
              >
                {primaryAction.label}
                {primaryAction.icon}
              </Button>
            )}
            <Button
              variant="tertiary"
              size="xs"
              onClick={onClose}
              className="flex-1 @sm:hidden justify-center"
            >
              <XIcon weight="bold" className="size-3.5" />
              Close
            </Button>
            <div className="hidden @sm:block">
              <CloseButton onClick={onClose} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ── Newsletter ────────────────────────────────────────────────────────────
  return (
    <div className={cn("@container w-full bg-bg-neutral-primary-soft border-b border-border-default", className)}>
      <div className="flex items-center justify-center px-4 py-4 relative">
        <div className="flex flex-col @sm:flex-row items-stretch @sm:items-center gap-3 @sm:gap-4 w-full @sm:w-auto pr-8 @sm:pr-0">
          {/* Figma: text-heading (título), não text-body */}
          <p className="text-sm font-medium text-text-heading @sm:hidden">Sign up to our newsletter</p>
          {/* Input placeholder — substituir pelo componente Input quando disponível */}
          <div className="flex items-center gap-2 bg-bg-neutral-secondary-medium border border-border-default-medium rounded-fig-base px-2.5 py-2 w-full @sm:w-[280px]">
            <EnvelopeIcon className="size-4 text-text-fg-disabled shrink-0" />
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={emailPlaceholder}
              className="flex-1 bg-transparent text-sm text-text-body placeholder:text-text-fg-disabled outline-none min-w-0"
            />
          </div>
          <Button
            variant="brand"
            size="xs"
            onClick={() => onSubscribe?.(email)}
            className="w-full @sm:w-auto justify-center"
          >
            {subscribeLabel}
          </Button>
        </div>
        <div className="absolute right-2 top-2 @sm:right-4 @sm:top-1/2 @sm:-translate-y-1/2">
          <CloseButton onClick={onClose} />
        </div>
      </div>
    </div>
  )
}
