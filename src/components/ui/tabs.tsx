import * as React from "react"
import { Tabs as TabsPrimitive } from "radix-ui"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

// ── Tipos ──────────────────────────────────────────────────────────────────
/**
 * default         → só texto + ícone, sem fundo nem padding
 * pill            → fundo laranja quando ativo, bordas arredondadas
 * border-bottom   → linha na base quando ativo
 * tab-secondary   → aba estilo arquivo, fundo branco inicial
 * tab-tertiary    → aba estilo arquivo, fundo cinza inicial
 * ghost           → estilo ghost button com ícone leading + trailing
 */
export type TabsVariant =
  | "default"
  | "pill"
  | "border-bottom"
  | "tab-secondary"
  | "tab-tertiary"
  | "ghost"

const TabsVariantContext = React.createContext<TabsVariant>("default")

// ── Variantes do container (TabsList) ──────────────────────────────────────
const listVariants = cva(
  "flex shrink-0",
  {
    variants: {
      variant: {
        "default":
          "items-center gap-6 data-[orientation=vertical]:flex-col data-[orientation=vertical]:gap-3",
        "pill":
          "items-center gap-6 data-[orientation=vertical]:flex-col data-[orientation=vertical]:gap-3",
        "border-bottom":
          "items-center gap-6 border-b border-border-default",
        "tab-secondary":
          "items-center bg-bg-neutral-primary border border-border-default",
        "tab-tertiary":
          "items-center bg-bg-neutral-primary border border-border-default",
        "ghost":
          "items-center gap-1 p-3 bg-bg-neutral-primary border border-border-default rounded-fig data-[orientation=vertical]:flex-col data-[orientation=vertical]:gap-1",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

// ── Variantes do item (TabsTrigger) ────────────────────────────────────────
const triggerVariants = cva(
  [
    "inline-flex items-center gap-1.5 font-medium whitespace-nowrap shrink-0",
    "cursor-pointer select-none transition-colors",
    "outline-none focus-visible:ring-[3px] focus-visible:ring-border-default",
    "disabled:pointer-events-none",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        // ── Default — só texto + ícone leading ──
        "default": [
          "text-sm leading-5 [&_svg:not([class*='size-'])]:size-4",
          "text-text-body",
          "hover:text-text-fg-brand",
          "data-[state=active]:text-text-fg-brand",
          "disabled:text-text-fg-disabled",
        ],
        // ── Pill — fundo brand no hover e active ──
        "pill": [
          "text-sm leading-5 px-4 py-2.5 rounded-full [&_svg:not([class*='size-'])]:size-4",
          "text-text-body",
          "hover:bg-bg-brand hover:text-text-white",
          "data-[state=active]:bg-bg-brand data-[state=active]:text-text-white",
          "disabled:text-text-fg-disabled",
          // vertical: ocupa toda a largura do container
          "data-[orientation=vertical]:w-full",
        ],
        // ── Border bottom — linha inferior brand no hover e active ──
        // pb-[14px] + border-b-2 = 16px de espaço visual total (equiv. ao pb-4 do Figma)
        "border-bottom": [
          "text-sm leading-5 pb-[14px] [&_svg:not([class*='size-'])]:size-4",
          "border-b-2 border-transparent",
          "text-text-body",
          "hover:text-text-fg-brand hover:border-border-brand",
          "data-[state=active]:text-text-fg-brand data-[state=active]:border-border-brand",
          "disabled:text-text-fg-disabled disabled:border-transparent",
        ],
        // ── TAB Secondary — aba tipo arquivo, fundo branco inicial ──
        // gap-px no list cria o separador de 1px entre itens
        "tab-secondary": [
          "text-base leading-6 px-6 py-3.5 [&_svg:not([class*='size-'])]:size-4",
          "border-r border-border-default last:border-r-0",
          "bg-bg-neutral-primary text-text-body",
          "hover:bg-bg-neutral-tertiary hover:text-text-heading",
          "data-[state=active]:bg-bg-neutral-secondary data-[state=active]:text-text-fg-brand",
          "disabled:bg-bg-neutral-secondary disabled:text-text-fg-disabled",
        ],
        // ── TAB Tertiary — aba tipo arquivo, fundo cinza inicial ──
        "tab-tertiary": [
          "text-base leading-6 px-6 py-3.5 [&_svg:not([class*='size-'])]:size-4",
          "border-r border-border-default last:border-r-0",
          "bg-bg-neutral-secondary text-text-body",
          "hover:text-text-heading",
          "data-[state=active]:bg-bg-neutral-tertiary data-[state=active]:text-text-fg-brand",
          "disabled:bg-bg-neutral-primary disabled:text-text-fg-disabled",
        ],
        // ── Ghost — estilo ghost button ──
        "ghost": [
          "text-sm leading-5 px-4 py-2.5 rounded-fig [&_svg:not([class*='size-'])]:size-4",
          "text-text-heading",
          "hover:bg-bg-neutral-secondary",
          "data-[state=active]:bg-bg-neutral-secondary",
          "disabled:text-text-fg-disabled",
          "data-[orientation=vertical]:w-full",
        ],
      },
    },
    defaultVariants: { variant: "default" },
  }
)

// ── Tabs (Root) ────────────────────────────────────────────────────────────
const Tabs = TabsPrimitive.Root

// ── TabsList ───────────────────────────────────────────────────────────────
function TabsList({
  variant = "default",
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
  variant?: TabsVariant
}) {
  return (
    <TabsVariantContext.Provider value={variant}>
      <TabsPrimitive.List
        data-slot="tabs-list"
        className={cn(listVariants({ variant }), className)}
        {...props}
      >
        {children}
      </TabsPrimitive.List>
    </TabsVariantContext.Provider>
  )
}

// ── TabsTrigger ────────────────────────────────────────────────────────────
function TabsTrigger({
  className,
  iconLeading,
  iconTrailing,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
  iconLeading?: React.ReactNode
  iconTrailing?: React.ReactNode
}) {
  const variant = React.useContext(TabsVariantContext)

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(triggerVariants({ variant }), className)}
      {...props}
    >
      {iconLeading && (
        <span className="shrink-0 flex items-center">{iconLeading}</span>
      )}
      {children}
      {iconTrailing && (
        <span className="shrink-0 flex items-center">{iconTrailing}</span>
      )}
    </TabsPrimitive.Trigger>
  )
}

// ── TabsContent ────────────────────────────────────────────────────────────
function TabsContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
