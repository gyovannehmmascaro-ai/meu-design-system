import { ComponentPreview } from "../components/ComponentPreview"
import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group"
import { Badge } from "@/components/ui/badge"
import {
  HouseIcon,
  DatabaseIcon,
  GitBranchIcon,
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from "@phosphor-icons/react"

export function BreadcrumbPage() {
  return (
    <div className="space-y-10">

      {/* ── Intro ── */}
      <div className="space-y-1">
        <h1 className="text-xl font-bold text-text-heading">Breadcrumb</h1>
        <p className="text-sm text-text-body max-w-2xl">
          Indica a localização atual do usuário na hierarquia de navegação.
          Cada <code className="font-mono text-xs bg-bg-neutral-secondary px-1 rounded">BreadcrumbItem</code> com{" "}
          <code className="font-mono text-xs bg-bg-neutral-secondary px-1 rounded">href</code> é um link clicável;
          sem <code className="font-mono text-xs bg-bg-neutral-secondary px-1 rounded">href</code> representa a página atual.
          Sem <code className="font-mono text-xs bg-bg-neutral-secondary px-1 rounded">href</code> e sem children,
          renderiza apenas o separador — útil para separar elementos externos (Button, Badge…).
        </p>
      </div>

      {/* ── 1. Default ── */}
      <ComponentPreview
        title="Default"
        description="Itens de texto com link. Primeiro item com ícone House. Último item sem href = página atual (cor muted, sem separador)."
      >
        <Breadcrumb>
          <BreadcrumbItem href="/" icon={<HouseIcon weight="bold" />} onClick={(e) => e.preventDefault()}>Home</BreadcrumbItem>
          <BreadcrumbItem href="/ecommerce" onClick={(e) => e.preventDefault()}>E-commerce</BreadcrumbItem>
          <BreadcrumbItem href="/users" onClick={(e) => e.preventDefault()}>Users</BreadcrumbItem>
          <BreadcrumbItem>All users</BreadcrumbItem>
        </Breadcrumb>
      </ComponentPreview>

      {/* ── 2. Background ── */}
      <ComponentPreview
        title="Background"
        description="Mesmo que Default mas com fundo, borda, padding e sombra. Use quando o breadcrumb aparece sobre um fundo com conteúdo."
      >
        <Breadcrumb background>
          <BreadcrumbItem href="/" icon={<HouseIcon weight="bold" />} onClick={(e) => e.preventDefault()}>Home</BreadcrumbItem>
          <BreadcrumbItem href="/ecommerce" onClick={(e) => e.preventDefault()}>E-commerce</BreadcrumbItem>
          <BreadcrumbItem href="/users" onClick={(e) => e.preventDefault()}>Users</BreadcrumbItem>
          <BreadcrumbItem>All users</BreadcrumbItem>
        </Breadcrumb>
      </ComponentPreview>

      {/* ── 3. With dropdown ── */}
      <ComponentPreview
        title="With dropdown"
        description="Itens de texto seguidos de um Button com ícone e CaretDown — normalmente abre um menu de contexto ou seletor."
      >
        <Breadcrumb>
          <BreadcrumbItem href="/" icon={<HouseIcon weight="bold" />} onClick={(e) => e.preventDefault()}>Home</BreadcrumbItem>
          <BreadcrumbItem href="/settings" onClick={(e) => e.preventDefault()}>Settings</BreadcrumbItem>
          <BreadcrumbItem href="/databases" onClick={(e) => e.preventDefault()}>Databases</BreadcrumbItem>
          <Button variant="secondary" size="xs">
            <DatabaseIcon weight="bold" />
            Flowbite
            <CaretDownIcon weight="bold" />
          </Button>
        </Breadcrumb>
      </ComponentPreview>

      {/* ── 4. With group buttons ── */}
      <ComponentPreview
        title="With group buttons"
        description="ButtonGroup de navegação (anterior/próximo) posicionado antes dos itens de texto."
      >
        <Breadcrumb>
          <ButtonGroup size="xs">
            <ButtonGroupItem iconOnly aria-label="Anterior"><CaretLeftIcon weight="bold" /></ButtonGroupItem>
            <ButtonGroupItem iconOnly aria-label="Próximo"><CaretRightIcon weight="bold" /></ButtonGroupItem>
          </ButtonGroup>
          <BreadcrumbItem href="/" icon={<HouseIcon weight="bold" />} onClick={(e) => e.preventDefault()}>Home</BreadcrumbItem>
          <BreadcrumbItem href="/settings" onClick={(e) => e.preventDefault()}>Settings</BreadcrumbItem>
          <BreadcrumbItem>User settings</BreadcrumbItem>
        </Breadcrumb>
      </ComponentPreview>

      {/* ── 5. Only buttons ── */}
      <ComponentPreview
        title="Only buttons"
        description={`Todos os itens são Buttons. Use um BreadcrumbItem vazio (sem href e sem children) entre os botões para renderizar apenas o separador.`}
      >
        <Breadcrumb className="gap-1">
          <Button variant="ghost" size="xs">
            <GitBranchIcon weight="bold" />
            flowbite.com
            <CaretDownIcon weight="bold" />
          </Button>
          <BreadcrumbItem />
          <Button variant="ghost" size="xs">
            <DatabaseIcon weight="bold" />
            databaseName
            <CaretDownIcon weight="bold" />
          </Button>
        </Breadcrumb>
      </ComponentPreview>

      {/* ── 6. With badge ── */}
      <ComponentPreview
        title="With badge"
        description="Combina itens de texto com um Badge e um Button. O último BreadcrumbItem representa a página atual (sem href, cor muted). Use showSeparator={false} para omitir o separador antes dos elementos externos."
      >
        <Breadcrumb>
          <BreadcrumbItem href="/" onClick={(e) => e.preventDefault()}>flowbite.com</BreadcrumbItem>
          <BreadcrumbItem href="/develop" onClick={(e) => e.preventDefault()}>develop</BreadcrumbItem>
          <BreadcrumbItem showSeparator={false}>Issue #312</BreadcrumbItem>
          <Badge theme="brand" size="sm">docs</Badge>
          <Button variant="secondary" size="xs">
            <GitBranchIcon weight="bold" />
            Fix #6597
            <CaretDownIcon weight="bold" />
          </Button>
        </Breadcrumb>
      </ComponentPreview>

      {/* ── API ── */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-text-heading">API</h2>
        <div className="rounded-lg border border-border-default overflow-hidden">
          <table className="w-full text-sm text-text-body">
            <thead className="bg-bg-neutral-secondary-medium border-b border-border-default">
              <tr>
                <th className="text-left px-4 py-2 font-semibold text-text-heading">Prop</th>
                <th className="text-left px-4 py-2 font-semibold text-text-heading">Tipo</th>
                <th className="text-left px-4 py-2 font-semibold text-text-heading">Padrão</th>
                <th className="text-left px-4 py-2 font-semibold text-text-heading">Descrição</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-default">
              <tr className="bg-bg-neutral-primary-soft">
                <td className="px-4 py-2 font-mono text-xs" colSpan={4}>
                  <span className="font-semibold text-text-heading">Breadcrumb</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs text-text-fg-brand">background</td>
                <td className="px-4 py-2 font-mono text-xs">boolean</td>
                <td className="px-4 py-2 font-mono text-xs">false</td>
                <td className="px-4 py-2">Adiciona fundo, borda, padding e sombra ao container</td>
              </tr>
              <tr className="bg-bg-neutral-primary-soft">
                <td className="px-4 py-2 font-mono text-xs" colSpan={4}>
                  <span className="font-semibold text-text-heading">BreadcrumbItem</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs text-text-fg-brand">href</td>
                <td className="px-4 py-2 font-mono text-xs">string</td>
                <td className="px-4 py-2 font-mono text-xs">—</td>
                <td className="px-4 py-2">URL do link. Sem href = página atual. Sem href + sem children = separador puro</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs text-text-fg-brand">icon</td>
                <td className="px-4 py-2 font-mono text-xs">ReactNode</td>
                <td className="px-4 py-2 font-mono text-xs">—</td>
                <td className="px-4 py-2">Ícone leading (ex: HouseIcon com weight="bold")</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  )
}
