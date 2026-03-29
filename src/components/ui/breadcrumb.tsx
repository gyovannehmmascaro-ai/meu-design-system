import * as React from "react"
import { cn } from "@/lib/utils"
import { CaretRightIcon } from "@phosphor-icons/react"

// ── BreadcrumbItem ─────────────────────────────────────────────────────────

interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * URL de destino. Se fornecido, o item é renderizado como link clicável
   * com hover na cor brand. Se omitido e houver children, é tratado como
   * página atual (não clicável, cor muted). Se omitido sem children,
   * renderiza apenas o separador (útil para separar elementos não-BreadcrumbItem).
   */
  href?: string
  /** Ícone leading opcional (ex: HouseIcon). */
  icon?: React.ReactNode
  /** Exibe o separador após o item. Padrão: true. */
  showSeparator?: boolean
  /**
   * Componente usado no lugar do <a> nativo — útil para usar o <Link>
   * do framework (Next.js, React Router…) sem trocar a API do BreadcrumbItem.
   * Ex: linkAs={NextLink}
   */
  linkAs?: React.ElementType
}

function BreadcrumbItem({
  href,
  icon,
  children,
  className,
  showSeparator = true,
  linkAs,
  ...props
}: BreadcrumbItemProps) {
  const hasContent = !!(icon || children)
  const LinkComp = linkAs ?? "a"

  return (
    <span
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    >
      {hasContent && (
        href ? (
          // Link — hover muda texto e ícone para brand via currentColor
          <LinkComp
            href={href}
            className="inline-flex items-center gap-1.5 text-sm font-medium leading-5 text-text-body hover:text-text-fg-brand transition-colors [&_svg]:size-3.5 [&_svg]:shrink-0"
          >
            {icon}
            {children}
          </LinkComp>
        ) : (
          // Página atual — não clicável, cor muted
          <span
            aria-current="page"
            className="inline-flex items-center gap-1.5 text-sm font-medium leading-5 text-text-body-subtle [&_svg]:size-3.5 [&_svg]:shrink-0"
          >
            {icon}
            {children}
          </span>
        )
      )}

      {/* Separador — oculto no último BreadcrumbItem via seletor no container */}
      {showSeparator && (
        <CaretRightIcon
          data-slot="separator"
          weight="bold"
          className="size-3.5 shrink-0 text-text-body"
        />
      )}
    </span>
  )
}
BreadcrumbItem.displayName = "BreadcrumbItem"

// ── Breadcrumb ──────────────────────────────────────────────────────────────

interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Adiciona fundo, borda, padding e sombra ao container.
   * Usar quando o breadcrumb aparece sobre um fundo com conteúdo.
   */
  background?: boolean
}

function Breadcrumb({
  background = false,
  className,
  children,
  ...props
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "inline-flex items-center gap-2.5",
        // Oculta o separador do último BreadcrumbItem que seja o último filho
        // do container. Funciona corretamente mesmo quando há elementos não-
        // BreadcrumbItem (Button, Badge…) após os itens de texto.
        "[&>[data-slot=breadcrumb-item]:last-child>[data-slot=separator]]:hidden",
        background && [
          "bg-bg-neutral-secondary-medium",
          "border border-border-default-medium",
          "p-2.5 rounded-fig-base",
          "shadow-[0px_1px_0.5px_0px_rgba(29,41,61,0.02)]",
        ],
        className
      )}
      {...props}
    >
      {children}
    </nav>
  )
}
Breadcrumb.displayName = "Breadcrumb"

export { Breadcrumb, BreadcrumbItem }
