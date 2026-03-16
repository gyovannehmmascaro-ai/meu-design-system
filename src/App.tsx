import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"
import { ArrowLeft, ArrowRight, Clock, X } from "lucide-react"

// ── Button ─────────────────────────────────────────────────────────────────
const buttonVariants = [
  { key: "brand",     label: "Brand"     },
  { key: "secondary", label: "Secondary" },
  { key: "tertiary",  label: "Tertiary"  },
  { key: "success",   label: "Success"   },
  { key: "danger",    label: "Danger"    },
  { key: "warning",   label: "Warning"   },
  { key: "dark",      label: "Dark"      },
  { key: "ghost",     label: "Ghost"     },
  { key: "info",      label: "Info"      },
] as const

const outlineVariants = [
  { key: "success", label: "Success" },
  { key: "danger",  label: "Danger"  },
  { key: "warning", label: "Warning" },
  { key: "info",    label: "Info"    },
] as const

const buttonSizes = [
  { key: "xs",      label: "xs",   note: "h-8"  },
  { key: "sm",      label: "sm",   note: "h-9"  },
  { key: "default", label: "base", note: "h-10" },
  { key: "lg",      label: "l",    note: "h-12" },
  { key: "xl",      label: "xl",   note: "h-13" },
] as const

const iconSizes = [
  { key: "icon-xs", label: "xs"   },
  { key: "icon-sm", label: "sm"   },
  { key: "icon",    label: "base" },
  { key: "icon-lg", label: "l"    },
  { key: "icon-xl", label: "xl"   },
] as const

// ── Badge ──────────────────────────────────────────────────────────────────
const badgeThemes = [
  { key: "gray",    label: "Gray"    },
  { key: "white",   label: "White"   },
  { key: "brand",   label: "Brand"   },
  { key: "danger",  label: "Danger"  },
  { key: "warning", label: "Warning" },
  { key: "success", label: "Success" },
  { key: "info",    label: "Info"    },
] as const

const badgeSizes = [
  { key: "sm", label: "sm" },
  { key: "lg", label: "lg" },
] as const

// ── Helpers ────────────────────────────────────────────────────────────────
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-bold text-text-fg-disabled uppercase tracking-widest mb-4">
      {children}
    </h2>
  )
}

function PageTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="pt-4 border-t border-border-default first:pt-0 first:border-0">
      <h1 className="text-2xl font-bold text-text-heading">{children}</h1>
      {subtitle && <p className="text-text-body mt-1 text-sm">{subtitle}</p>}
    </div>
  )
}

// Tabela genérica com colunas dinâmicas
function Table({
  cols,
  rows,
  renderCell,
  colWidth = "1fr",
  labelWidth = "120px",
}: {
  cols: { key: string; label: string; note?: string }[]
  rows: { key: string; label: string }[]
  renderCell: (rowKey: string, colKey: string) => React.ReactNode
  colWidth?: string
  labelWidth?: string
}) {
  const gridCols = `${labelWidth} repeat(${cols.length}, ${colWidth})`
  return (
    <div className="bg-white rounded-fig-base border border-border-default overflow-hidden">
      {/* Header */}
      <div className="grid border-b border-border-default bg-bg-neutral-primary-soft"
        style={{ gridTemplateColumns: gridCols }}>
        <div className="px-4 py-3 text-xs font-semibold text-text-fg-disabled" />
        {cols.map(c => (
          <div key={c.key} className="px-4 py-3 text-xs font-semibold text-text-fg-disabled text-center">
            {c.label}
            {c.note && <span className="block text-[10px] font-normal opacity-60">{c.note}</span>}
          </div>
        ))}
      </div>
      {/* Rows */}
      {rows.map(r => (
        <div key={r.key} className="grid items-center border-b border-border-default last:border-0"
          style={{ gridTemplateColumns: gridCols }}>
          <div className="px-4 py-5 text-xs font-semibold text-text-heading border-r border-border-default bg-bg-neutral-primary-soft">
            {r.label}
          </div>
          {cols.map(c => (
            <div key={c.key} className="flex items-center justify-center px-2 py-5">
              {renderCell(r.key, c.key)}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

// ── App ────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-bg-neutral-primary-soft p-10 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* ══════════════════════════════════════════
            BUTTON
        ══════════════════════════════════════════ */}
        <PageTitle subtitle="Todas as variantes × tamanhos definidos no Figma.">Button</PageTitle>

        <section>
          <SectionTitle>Variantes × Tamanhos</SectionTitle>
          <Table
            cols={buttonSizes.map(s => ({ key: s.key, label: s.label, note: s.note }))}
            rows={[...buttonVariants]}
            renderCell={(v, s) => (
              <Button variant={v as any} size={s as any}>Button</Button>
            )}
          />
        </section>

        <section>
          <SectionTitle>Icon Only × Tamanhos</SectionTitle>
          <Table
            cols={[...iconSizes]}
            rows={[...buttonVariants]}
            renderCell={(v, s) => (
              <Button variant={v as any} size={s as any}><ArrowRight /></Button>
            )}
          />
        </section>

        <section>
          <SectionTitle>Icon Leading × Tamanhos</SectionTitle>
          <Table
            cols={buttonSizes.map(s => ({ key: s.key, label: s.label }))}
            rows={[...buttonVariants]}
            renderCell={(v, s) => (
              <Button variant={v as any} size={s as any}><ArrowLeft />Button</Button>
            )}
          />
        </section>

        <section>
          <SectionTitle>Icon Trailing × Tamanhos</SectionTitle>
          <Table
            cols={buttonSizes.map(s => ({ key: s.key, label: s.label }))}
            rows={[...buttonVariants]}
            renderCell={(v, s) => (
              <Button variant={v as any} size={s as any}>Button<ArrowRight /></Button>
            )}
          />
        </section>

        <section>
          <SectionTitle>Estado Disabled</SectionTitle>
          <Table
            cols={buttonSizes.map(s => ({ key: s.key, label: s.label }))}
            rows={[...buttonVariants]}
            renderCell={(v, s) => (
              <Button variant={v as any} size={s as any} disabled>Button</Button>
            )}
          />
        </section>

        <section>
          <SectionTitle>Outline × Tamanhos</SectionTitle>
          <Table
            cols={buttonSizes.map(s => ({ key: s.key, label: s.label, note: s.note }))}
            rows={[...outlineVariants]}
            renderCell={(v, s) => (
              <Button variant={v as any} size={s as any} outline>Button</Button>
            )}
          />
        </section>

        <section>
          <SectionTitle>Outline — Icon Leading × Tamanhos</SectionTitle>
          <Table
            cols={buttonSizes.map(s => ({ key: s.key, label: s.label }))}
            rows={[...outlineVariants]}
            renderCell={(v, s) => (
              <Button variant={v as any} size={s as any} outline><ArrowLeft />Button</Button>
            )}
          />
        </section>

        <section>
          <SectionTitle>Outline — Icon Trailing × Tamanhos</SectionTitle>
          <Table
            cols={buttonSizes.map(s => ({ key: s.key, label: s.label }))}
            rows={[...outlineVariants]}
            renderCell={(v, s) => (
              <Button variant={v as any} size={s as any} outline>Button<ArrowRight /></Button>
            )}
          />
        </section>

        <section>
          <SectionTitle>Outline — Estado Disabled</SectionTitle>
          <Table
            cols={buttonSizes.map(s => ({ key: s.key, label: s.label }))}
            rows={[...outlineVariants]}
            renderCell={(v, s) => (
              <Button variant={v as any} size={s as any} outline disabled>Button</Button>
            )}
          />
        </section>

        {/* ══════════════════════════════════════════
            SPINNER
        ══════════════════════════════════════════ */}
        <PageTitle subtitle="Todos os tamanhos × variações de track definidos no Figma.">Spinner</PageTitle>

        {/* Spinner — com trilha */}
        <section>
          <SectionTitle>With Track</SectionTitle>
          <div className="bg-white rounded-fig-base border border-border-default overflow-hidden">
            <div className="grid border-b border-border-default bg-bg-neutral-primary-soft"
              style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
              {(["xs", "small", "medium", "base", "large"] as const).map(s => (
                <div key={s} className="px-4 py-3 text-xs font-semibold text-text-fg-disabled text-center">{s}</div>
              ))}
            </div>
            <div className="grid" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
              {(["xs", "small", "medium", "base", "large"] as const).map(s => (
                <div key={s} className="flex items-center justify-center px-2 py-8">
                  <Spinner size={s} track={true} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spinner — sem trilha */}
        <section>
          <SectionTitle>Without Track</SectionTitle>
          <div className="bg-white rounded-fig-base border border-border-default overflow-hidden">
            <div className="grid border-b border-border-default bg-bg-neutral-primary-soft"
              style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
              {(["xs", "small", "medium", "base", "large"] as const).map(s => (
                <div key={s} className="px-4 py-3 text-xs font-semibold text-text-fg-disabled text-center">{s}</div>
              ))}
            </div>
            <div className="grid" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
              {(["xs", "small", "medium", "base", "large"] as const).map(s => (
                <div key={s} className="flex items-center justify-center px-2 py-8">
                  <Spinner size={s} track={false} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            BADGE
        ══════════════════════════════════════════ */}
        <PageTitle subtitle="Todas as variantes × temas × tamanhos definidos no Figma.">Badge</PageTitle>

        {/* Default — ícone leading + trailing */}
        <section>
          <SectionTitle>Default — Leading + Trailing icon</SectionTitle>
          <Table
            cols={[...badgeSizes]}
            rows={[...badgeThemes]}
            colWidth="1fr"
            renderCell={(t, s) => (
              <Badge theme={t as any} size={s as any} iconLeading={<Clock />} iconTrailing={<X />}>
                Badge
              </Badge>
            )}
          />
        </section>

        {/* Default — apenas leading */}
        <section>
          <SectionTitle>Default — Leading icon</SectionTitle>
          <Table
            cols={[...badgeSizes]}
            rows={[...badgeThemes]}
            renderCell={(t, s) => (
              <Badge theme={t as any} size={s as any} iconLeading={<Clock />}>
                Badge
              </Badge>
            )}
          />
        </section>

        {/* Default — apenas trailing */}
        <section>
          <SectionTitle>Default — Trailing icon</SectionTitle>
          <Table
            cols={[...badgeSizes]}
            rows={[...badgeThemes]}
            renderCell={(t, s) => (
              <Badge theme={t as any} size={s as any} iconTrailing={<X />}>
                Badge
              </Badge>
            )}
          />
        </section>

        {/* Default — só texto */}
        <section>
          <SectionTitle>Default — Só texto</SectionTitle>
          <Table
            cols={[...badgeSizes]}
            rows={[...badgeThemes]}
            renderCell={(t, s) => (
              <Badge theme={t as any} size={s as any}>Badge</Badge>
            )}
          />
        </section>

        {/* With Dot */}
        <section>
          <SectionTitle>With Dot</SectionTitle>
          <Table
            cols={[...badgeSizes]}
            rows={[...badgeThemes]}
            renderCell={(t, s) => (
              <Badge theme={t as any} size={s as any} variant="dot">Badge</Badge>
            )}
          />
        </section>

        {/* With Dot + trailing */}
        <section>
          <SectionTitle>With Dot + Trailing icon</SectionTitle>
          <Table
            cols={[...badgeSizes]}
            rows={[...badgeThemes]}
            renderCell={(t, s) => (
              <Badge theme={t as any} size={s as any} variant="dot" iconTrailing={<X />}>Badge</Badge>
            )}
          />
        </section>

        {/* With Avatar */}
        <section>
          <SectionTitle>With Avatar (placeholder)</SectionTitle>
          <Table
            cols={[...badgeSizes]}
            rows={[...badgeThemes]}
            renderCell={(t, s) => (
              <Badge theme={t as any} size={s as any} variant="avatar" iconTrailing={<X />}>Badge</Badge>
            )}
          />
        </section>

        {/* With Loader */}
        <section>
          <SectionTitle>With Loader (placeholder)</SectionTitle>
          <Table
            cols={[...badgeSizes]}
            rows={[...badgeThemes]}
            renderCell={(t, s) => (
              <Badge theme={t as any} size={s as any} variant="loader">Badge</Badge>
            )}
          />
        </section>

        {/* With Secondary Text */}
        <section>
          <SectionTitle>With Secondary Text</SectionTitle>
          <Table
            cols={[...badgeSizes]}
            rows={[...badgeThemes]}
            colWidth="minmax(160px, 1fr)"
            renderCell={(t, s) => (
              <Badge theme={t as any} size={s as any} variant="secondary-text"
                iconLeading={<Clock />} iconTrailing={<X />} secondaryText="Secondary">
                Badge
              </Badge>
            )}
          />
        </section>

        {/* Icon Only — redondo */}
        <section>
          <SectionTitle>Icon Only — redondo</SectionTitle>
          <Table
            cols={[...badgeSizes]}
            rows={[...badgeThemes]}
            renderCell={(t, s) => (
              <Badge theme={t as any} size={s as any} variant="icon-only" icon={<Clock />} />
            )}
          />
        </section>

        {/* Number — redondo */}
        <section>
          <SectionTitle>Number — redondo</SectionTitle>
          <Table
            cols={[...badgeSizes]}
            rows={[...badgeThemes]}
            renderCell={(t, s) => (
              <Badge theme={t as any} size={s as any} variant="number" number={1} />
            )}
          />
        </section>

        {/* Rounded — pílula */}
        <section>
          <SectionTitle>Rounded — pílula</SectionTitle>
          <Table
            cols={[{ key: "sm", label: "sm" }]}
            rows={[...badgeThemes]}
            renderCell={(t) => (
              <Badge theme={t as any} variant="rounded">New</Badge>
            )}
          />
        </section>

      </div>
    </div>
  )
}