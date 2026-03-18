type Page = "colors" | "typography" | "button" | "badge" | "spinner" | "shadcn-components"

interface SidebarProps {
  activePage: Page
  setActivePage: (page: Page) => void
}

const nav: { group: string; items: { id: Page; label: string }[] }[] = [
  {
    group: "Foundation",
    items: [
      { id: "colors",     label: "Colors"     },
      { id: "typography", label: "Typography" },
    ],
  },
  {
    group: "Figma Components",
    items: [
      { id: "button",  label: "Button"  },
      { id: "badge",   label: "Badge"   },
      { id: "spinner", label: "Spinner" },
    ],
  },
  {
    group: "Shadcn Components",
    items: [],
  },
]

export function Sidebar({ activePage, setActivePage }: SidebarProps) {
  return (
    <aside className="w-56 shrink-0 border-r border-border-default bg-bg-neutral-primary-soft min-h-screen p-4">
      <div className="mb-6 px-2">
        <span className="text-sm font-bold text-text-heading">Design System</span>
      </div>
      {nav.map(({ group, items }) => (
        <div key={group} className="mb-6">
          <p className="px-2 mb-1 text-xs font-semibold uppercase tracking-widest text-text-fg-disabled">
            {group}
          </p>
          {items.map(item => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full text-left px-2 py-1.5 rounded-fig-sm text-sm transition-colors ${
                activePage === item.id
                  ? "bg-bg-neutral-tertiary text-text-heading font-medium"
                  : "text-text-body hover:bg-bg-neutral-tertiary hover:text-text-heading"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      ))}
    </aside>
  )
}
