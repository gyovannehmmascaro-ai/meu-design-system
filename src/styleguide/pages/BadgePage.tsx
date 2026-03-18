import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Clock, X } from "lucide-react"

// ── Dados ──────────────────────────────────────────────────────────────────
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

// ── Tabela inline ──────────────────────────────────────────────────────────
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
      <div
        className="grid border-b border-border-default bg-bg-neutral-primary-soft"
        style={{ gridTemplateColumns: gridCols }}
      >
        <div className="px-4 py-3 text-xs font-semibold text-text-fg-disabled" />
        {cols.map(c => (
          <div key={c.key} className="px-4 py-3 text-xs font-semibold text-text-fg-disabled text-center">
            {c.label}
            {c.note && <span className="block text-[10px] font-normal opacity-60">{c.note}</span>}
          </div>
        ))}
      </div>
      {rows.map(r => (
        <div
          key={r.key}
          className="grid items-center border-b border-border-default last:border-0"
          style={{ gridTemplateColumns: gridCols }}
        >
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

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-bold text-text-fg-disabled uppercase tracking-widest mb-3">
      {children}
    </h2>
  )
}

// ── BadgePage ──────────────────────────────────────────────────────────────
export function BadgePage() {
  return (
    <div className="space-y-8">

      <section>
        <SectionTitle>Default — Leading + Trailing icon</SectionTitle>
        <Table
          cols={[...badgeSizes]}
          rows={[...badgeThemes]}
          renderCell={(t, s) => (
            <Badge theme={t as any} size={s as any} iconLeading={<Clock />} iconTrailing={<X />}>
              Badge
            </Badge>
          )}
        />
      </section>

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

      <section>
        <SectionTitle>With Avatar</SectionTitle>
        <Table
          cols={[...badgeSizes]}
          rows={[...badgeThemes]}
          renderCell={(t, s) => (
            <Badge
              theme={t as any}
              size={s as any}
              variant="avatar"
              iconTrailing={<X />}
              avatar={<img src="https://i.pravatar.cc/150?img=1" className="w-full h-full object-cover" alt="" />}
            >
              Badge
            </Badge>
          )}
        />
      </section>

      <section>
        <SectionTitle>With Loader</SectionTitle>
        <Table
          cols={[...badgeSizes]}
          rows={[...badgeThemes]}
          renderCell={(t, s) => (
            <Badge theme={t as any} size={s as any} variant="loader">Badge</Badge>
          )}
        />
      </section>

      <section>
        <SectionTitle>With Secondary Text</SectionTitle>
        <Table
          cols={[...badgeSizes]}
          rows={[...badgeThemes]}
          colWidth="minmax(160px, 1fr)"
          renderCell={(t, s) => (
            <Badge
              theme={t as any}
              size={s as any}
              variant="secondary-text"
              iconLeading={<Clock />}
              iconTrailing={<X />}
              secondaryText="Secondary"
            >
              Badge
            </Badge>
          )}
        />
      </section>

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
  )
}
