import * as React from "react"
import { ChevronDown, CircleHelp } from "lucide-react"
import { cn } from "@/lib/utils"

// ── Types ──────────────────────────────────────────────────────────────────
type AccordionType        = "default" | "card" | "flush"
type AccordionColorScheme = "default" | "brand"

// ── Context ────────────────────────────────────────────────────────────────
type AccordionContextValue = {
  type:        AccordionType
  colorScheme: AccordionColorScheme
  openItems:   string[]
  toggle:      (id: string) => void
}

const AccordionContext = React.createContext<AccordionContextValue>({
  type:        "default",
  colorScheme: "default",
  openItems:   [],
  toggle:      () => {},
})

// ── Accordion (container) ──────────────────────────────────────────────────
type AccordionProps = {
  type?:        AccordionType
  colorScheme?: AccordionColorScheme
  /** true = múltiplos itens abertos ao mesmo tempo */
  alwaysOpen?:  boolean
  /** id(s) abertos por padrão */
  defaultOpen?: string | string[]
  className?:   string
  children:     React.ReactNode
}

function Accordion({
  type        = "default",
  colorScheme = "default",
  alwaysOpen  = false,
  defaultOpen,
  className,
  children,
}: AccordionProps) {
  const initial = defaultOpen
    ? Array.isArray(defaultOpen) ? defaultOpen : [defaultOpen]
    : []

  const [openItems, setOpenItems] = React.useState<string[]>(initial)

  const toggle = React.useCallback((id: string) => {
    setOpenItems(prev => {
      const isOpen = prev.includes(id)
      if (isOpen) return prev.filter(i => i !== id)
      return alwaysOpen ? [...prev, id] : [id]
    })
  }, [alwaysOpen])

  const containerClass = {
    default: "border border-border-default rounded-fig-base shadow-[0px_1px_0.5px_0px_rgba(29,41,61,0.02)] overflow-hidden",
    card:    "flex flex-col gap-4",
    flush:   "",
  }[type]

  return (
    <AccordionContext.Provider value={{ type, colorScheme, openItems, toggle }}>
      <div className={cn("w-full", containerClass, className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

// ── AccordionItem ──────────────────────────────────────────────────────────
type AccordionItemProps = {
  id:        string
  title:     string
  /** ícone antes do título — padrão: CircleHelp (substituir quando trocarmos icon lib) */
  icon?:     React.ReactNode
  children:  React.ReactNode
  className?: string
}

function AccordionItem({ id, title, icon, children, className }: AccordionItemProps) {
  const { type, colorScheme, openItems, toggle } = React.useContext(AccordionContext)
  const isOpen = openItems.includes(id)

  // ── Hover classes por colorScheme (aplicadas em ambos os estados) ───────
  const hoverClasses = colorScheme === "brand"
    ? "hover:bg-bg-brand-softer hover:text-text-fg-brand"
    : "hover:bg-bg-neutral-secondary-medium hover:text-text-heading"

  // ── Estilos do wrapper do item ─────────────────────────────────────────
  // Card: borda no wrapper para evitar clipping nas quinas com overflow-hidden
  const itemWrapper = {
    default: "",
    card:    "rounded-fig-base overflow-hidden shadow-[0px_1px_0.5px_0px_rgba(29,41,61,0.02)] border border-border-default",
    flush:   "",
  }[type]

  // ── Estilos do botão header ────────────────────────────────────────────
  const buttonBase = "w-full flex items-center justify-between gap-2 cursor-pointer transition-colors"

  const buttonClasses = {
    default: isOpen
      ? cn("px-6 py-5 bg-bg-neutral-secondary-medium text-text-heading border-b border-border-default", hoverClasses)
      : cn("px-6 py-5 bg-bg-neutral-primary-soft text-text-body border-b border-border-default", hoverClasses),

    // Card: sem borda no botão — wrapper já tem a borda externa
    card: isOpen
      ? cn("px-6 py-5 bg-bg-neutral-secondary-medium text-text-heading border-b border-border-default", hoverClasses)
      : cn("px-6 py-5 bg-bg-neutral-primary-soft text-text-body", hoverClasses),

    // Flush: sem hover visual — Figma não define mudança de estado no hover
    flush: isOpen
      ? "py-5 text-text-heading border-b border-border-default"
      : "py-5 text-text-body border-b border-border-default",
  }[type]

  // ── Estilos do body ────────────────────────────────────────────────────
  const bodyClasses = {
    default: "px-6 py-5 bg-bg-neutral-primary-soft border-b border-border-default",
    card:    "px-6 py-5 bg-bg-neutral-primary-soft",
    flush:   "py-5 border-b border-border-default",
  }[type]

  return (
    <div className={cn(itemWrapper, className)}>
      <h2>
        <button
          type="button"
          onClick={() => toggle(id)}
          aria-expanded={isOpen}
          aria-controls={`accordion-body-${id}`}
          id={`accordion-button-${id}`}
          className={cn(buttonBase, buttonClasses)}
        >
          <span className="flex items-center gap-2 flex-1 min-w-0 text-left">
            <span className="shrink-0 size-5 [&_svg]:size-5 text-current">
              {icon ?? <CircleHelp />}
            </span>
            <span className="font-medium text-base leading-6">{title}</span>
          </span>
          <ChevronDown
            className={cn(
              "size-5 shrink-0 transition-transform duration-200 text-current",
              isOpen && "rotate-180"
            )}
          />
        </button>
      </h2>

      {isOpen && (
        <div
          id={`accordion-body-${id}`}
          role="region"
          aria-labelledby={`accordion-button-${id}`}
          className={cn(
            "text-text-body text-base leading-6 font-normal flex flex-col gap-3",
            bodyClasses
          )}
        >
          {children}
        </div>
      )}
    </div>
  )
}

// ── Exports ────────────────────────────────────────────────────────────────
export { Accordion, AccordionItem }
export type { AccordionProps, AccordionItemProps, AccordionType, AccordionColorScheme }
