import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Clock, X } from "lucide-react"
import { ComponentPreview } from "../components/ComponentPreview"

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
    <div className="w-full bg-white rounded-lg border border-border-default overflow-hidden">
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

// ── BadgePage ──────────────────────────────────────────────────────────────
export function BadgePage() {
  return (
    <div className="space-y-8">

      <div className="mb-2">
        <h1 className="text-2xl font-bold text-text-heading">Badge</h1>
        <p className="text-sm text-text-fg-secondary mt-1">
          Use badges para exibir contagens, status ou rótulos curtos em qualquer lugar da interface.
        </p>
      </div>

      <ComponentPreview
        title="Default — Leading + Trailing icon"
        description="Ícone à esquerda para contexto e à direita para ação como remover."
        className="p-4 block"
        code={`<Badge theme="brand" size="lg" iconLeading={<Clock />} iconTrailing={<X />}>
  Badge
</Badge>`}
      >
        <Table
          cols={[...badgeSizes]}
          rows={[...badgeThemes]}
          renderCell={(t, s) => (
            <Badge theme={t as any} size={s as any} iconLeading={<Clock />} iconTrailing={<X />}>
              Badge
            </Badge>
          )}
        />
      </ComponentPreview>

      <ComponentPreview
        title="Default — Leading icon"
        description="Ícone à esquerda para reforçar o significado do rótulo."
        className="p-4 block"
        code={`<Badge theme="brand" size="lg" iconLeading={<Clock />}>
  Badge
</Badge>`}
      >
        <Table
          cols={[...badgeSizes]}
          rows={[...badgeThemes]}
          renderCell={(t, s) => (
            <Badge theme={t as any} size={s as any} iconLeading={<Clock />}>
              Badge
            </Badge>
          )}
        />
      </ComponentPreview>

      <ComponentPreview
        title="Default — Trailing icon"
        description="Ícone à direita, geralmente usado para ação de remoção."
        className="p-4 block"
        code={`<Badge theme="brand" size="lg" iconTrailing={<X />}>
  Badge
</Badge>`}
      >
        <Table
          cols={[...badgeSizes]}
          rows={[...badgeThemes]}
          renderCell={(t, s) => (
            <Badge theme={t as any} size={s as any} iconTrailing={<X />}>
              Badge
            </Badge>
          )}
        />
      </ComponentPreview>

      <ComponentPreview
        title="Default — Só texto"
        description="Badge simples apenas com rótulo de texto."
        className="p-4 block"
        code={`<Badge theme="brand" size="lg">Badge</Badge>`}
      >
        <Table
          cols={[...badgeSizes]}
          rows={[...badgeThemes]}
          renderCell={(t, s) => (
            <Badge theme={t as any} size={s as any}>Badge</Badge>
          )}
        />
      </ComponentPreview>

      <ComponentPreview
        title="With Dot"
        description="Indicador visual de status usando um ponto colorido."
        className="p-4 block"
        code={`<Badge theme="brand" size="lg" variant="dot">Badge</Badge>`}
      >
        <Table
          cols={[...badgeSizes]}
          rows={[...badgeThemes]}
          renderCell={(t, s) => (
            <Badge theme={t as any} size={s as any} variant="dot">Badge</Badge>
          )}
        />
      </ComponentPreview>

      <ComponentPreview
        title="With Dot + Trailing icon"
        description="Combinação de ponto de status com ícone de remoção."
        className="p-4 block"
        code={`<Badge theme="brand" size="lg" variant="dot" iconTrailing={<X />}>Badge</Badge>`}
      >
        <Table
          cols={[...badgeSizes]}
          rows={[...badgeThemes]}
          renderCell={(t, s) => (
            <Badge theme={t as any} size={s as any} variant="dot" iconTrailing={<X />}>Badge</Badge>
          )}
        />
      </ComponentPreview>

      <ComponentPreview
        title="With Avatar"
        description="Badge com avatar de usuário, ideal para tags de pessoas."
        className="p-4 block"
        code={`<Badge theme="brand" size="lg" variant="avatar" iconTrailing={<X />}
  avatar={<img src="..." className="w-full h-full object-cover" alt="" />}
>
  Badge
</Badge>`}
      >
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
      </ComponentPreview>

      <ComponentPreview
        title="With Loader"
        description="Indica estado de carregamento dentro da badge."
        className="p-4 block"
        code={`<Badge theme="brand" size="lg" variant="loader">Badge</Badge>`}
      >
        <Table
          cols={[...badgeSizes]}
          rows={[...badgeThemes]}
          renderCell={(t, s) => (
            <Badge theme={t as any} size={s as any} variant="loader">Badge</Badge>
          )}
        />
      </ComponentPreview>

      <ComponentPreview
        title="With Secondary Text"
        description="Dois níveis de texto para contexto adicional."
        className="p-4 block"
        code={`<Badge theme="brand" size="lg" variant="secondary-text"
  iconLeading={<Clock />} iconTrailing={<X />} secondaryText="Secondary"
>
  Badge
</Badge>`}
      >
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
      </ComponentPreview>

      <ComponentPreview
        title="Icon Only"
        description="Badge circular com apenas um ícone, sem texto."
        className="p-4 block"
        code={`<Badge theme="brand" size="lg" variant="icon-only" icon={<Clock />} />`}
      >
        <Table
          cols={[...badgeSizes]}
          rows={[...badgeThemes]}
          renderCell={(t, s) => (
            <Badge theme={t as any} size={s as any} variant="icon-only" icon={<Clock />} />
          )}
        />
      </ComponentPreview>

      <ComponentPreview
        title="Number"
        description="Badge circular com contagem numérica."
        className="p-4 block"
        code={`<Badge theme="brand" size="lg" variant="number" number={1} />`}
      >
        <Table
          cols={[...badgeSizes]}
          rows={[...badgeThemes]}
          renderCell={(t, s) => (
            <Badge theme={t as any} size={s as any} variant="number" number={1} />
          )}
        />
      </ComponentPreview>

      <ComponentPreview
        title="Rounded — pílula"
        description="Formato pílula para destacar novidades ou versões."
        className="p-4 block"
        code={`<Badge theme="brand" variant="rounded">New</Badge>`}
      >
        <Table
          cols={[{ key: "sm", label: "sm" }]}
          rows={[...badgeThemes]}
          renderCell={(t) => (
            <Badge theme={t as any} variant="rounded">New</Badge>
          )}
        />
      </ComponentPreview>

    </div>
  )
}
