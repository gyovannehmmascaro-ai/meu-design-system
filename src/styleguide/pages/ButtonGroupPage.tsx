import { useState } from "react"
import { ComponentPreview } from "../components/ComponentPreview"
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group"
import { Badge } from "@/components/ui/badge"
import {
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  TextAlignJustifyIcon,
  CaretLeftIcon,
  CaretRightIcon,
  CaretDownIcon,
  MinusIcon,
  PlusIcon,
  DownloadSimpleIcon,
  BookmarkSimpleIcon,
  DotsThreeIcon,
  EnvelopeSimpleIcon,
  QrCodeIcon,
  FileTextIcon,
  HeartIcon,
} from "@phosphor-icons/react"

// ── Demos interativos ─────────────────────────────────────────────────────────

function PeriodSelectorDemo({ color }: { color: "white" | "gray" }) {
  const [period, setPeriod] = useState("weeks")
  return (
    <ButtonGroup color={color} value={period} onValueChange={setPeriod}>
      <ButtonGroupItem value="days">Dias</ButtonGroupItem>
      <ButtonGroupItem value="weeks">Semanas</ButtonGroupItem>
      <ButtonGroupItem value="months">Meses</ButtonGroupItem>
      <ButtonGroupItem value="years">Anos</ButtonGroupItem>
      <ButtonGroupItem value="decades">Décadas</ButtonGroupItem>
    </ButtonGroup>
  )
}

function AlignmentDemo({ color }: { color: "white" | "gray" }) {
  const [align, setAlign] = useState("center")
  return (
    <ButtonGroup color={color} value={align} onValueChange={setAlign}>
      <ButtonGroupItem iconOnly value="left"    aria-label="Alinhar à esquerda"><TextAlignLeftIcon weight="bold" /></ButtonGroupItem>
      <ButtonGroupItem iconOnly value="center"  aria-label="Centralizar"><TextAlignCenterIcon weight="bold" /></ButtonGroupItem>
      <ButtonGroupItem iconOnly value="right"   aria-label="Alinhar à direita"><TextAlignRightIcon weight="bold" /></ButtonGroupItem>
      <ButtonGroupItem iconOnly value="justify" aria-label="Justificar"><TextAlignJustifyIcon weight="bold" /></ButtonGroupItem>
    </ButtonGroup>
  )
}

function PaginationDemo({ color }: { color: "white" | "gray" }) {
  const [page, setPage] = useState("4")
  const pages = ["2", "3", "4", "5", "6", "7", "8", "9", "10"]
  return (
    <ButtonGroup color={color} size="sm" value={page} onValueChange={setPage}>
      <ButtonGroupItem
        iconOnly
        aria-label="Anterior"
        onClick={() => setPage(p => String(Math.max(2, Number(p) - 1)))}
      >
        <CaretLeftIcon weight="bold" />
      </ButtonGroupItem>
      {pages.map(p => (
        <ButtonGroupItem key={p} value={p} className="w-9 px-0">{p}</ButtonGroupItem>
      ))}
      <ButtonGroupItem
        iconOnly
        aria-label="Próximo"
        onClick={() => setPage(p => String(Math.min(10, Number(p) + 1)))}
      >
        <CaretRightIcon weight="bold" />
      </ButtonGroupItem>
    </ButtonGroup>
  )
}

function CounterDemo({ color }: { color: "white" | "gray" }) {
  const [count, setCount] = useState(104)
  return (
    <ButtonGroup color={color}>
      <ButtonGroupItem iconOnly aria-label="Diminuir" onClick={() => setCount(c => c - 1)}><MinusIcon weight="bold" /></ButtonGroupItem>
      <ButtonGroupItem disabled>{count}</ButtonGroupItem>
      <ButtonGroupItem iconOnly aria-label="Aumentar" onClick={() => setCount(c => c + 1)}><PlusIcon weight="bold" /></ButtonGroupItem>
    </ButtonGroup>
  )
}

function VerticalPeriodDemo({ color }: { color: "white" | "gray" }) {
  const [period, setPeriod] = useState("weeks")
  return (
    <ButtonGroup color={color} orientation="vertical" value={period} onValueChange={setPeriod} className="w-48">
      <ButtonGroupItem value="days">Dias</ButtonGroupItem>
      <ButtonGroupItem value="weeks">Semanas</ButtonGroupItem>
      <ButtonGroupItem value="months">Meses</ButtonGroupItem>
      <ButtonGroupItem value="years">Anos</ButtonGroupItem>
      <ButtonGroupItem value="decades">Décadas</ButtonGroupItem>
    </ButtonGroup>
  )
}

function VerticalIconsDemo({ color }: { color: "white" | "gray" }) {
  const [selected, setSelected] = useState("2")
  return (
    <ButtonGroup color={color} orientation="vertical" value={selected} onValueChange={setSelected}>
      <ButtonGroupItem iconOnly value="1" aria-label="Favoritar item 1"><HeartIcon weight="bold" /></ButtonGroupItem>
      <ButtonGroupItem iconOnly value="2" aria-label="Favoritar item 2"><HeartIcon weight="bold" /></ButtonGroupItem>
      <ButtonGroupItem iconOnly value="3" aria-label="Favoritar item 3"><HeartIcon weight="bold" /></ButtonGroupItem>
      <ButtonGroupItem iconOnly value="4" aria-label="Favoritar item 4"><HeartIcon weight="bold" /></ButtonGroupItem>
      <ButtonGroupItem iconOnly value="5" aria-label="Favoritar item 5"><HeartIcon weight="bold" /></ButtonGroupItem>
    </ButtonGroup>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export function ButtonGroupPage() {
  return (
    <div className="space-y-10">

      {/* ── Intro ── */}
      <div className="space-y-1">
        <h1 className="text-xl font-bold text-text-heading">Button Group</h1>
        <p className="text-sm text-text-body max-w-2xl">
          Agrupa ações relacionadas numa barra contínua horizontal ou vertical. Cada item é um{" "}
          <code className="font-mono text-xs bg-bg-neutral-secondary px-1 rounded">Button</code> com
          variante <strong>tertiary</strong> (cor <code className="font-mono text-xs bg-bg-neutral-secondary px-1 rounded">white</code>) ou{" "}
          <strong>secondary</strong> (cor <code className="font-mono text-xs bg-bg-neutral-secondary px-1 rounded">gray</code>).
          Bordas entre itens colapsam automaticamente e o arredondamento é aplicado apenas nas extremidades.
          Use <code className="font-mono text-xs bg-bg-neutral-secondary px-1 rounded">iconOnly</code> nos itens que contêm apenas ícone para que fiquem quadrados.
        </p>
      </div>

      {/* ── 1. Default — Seleção de período ── */}
      <ComponentPreview
        title="Default — Seleção de período"
        description="Grupo padrão com texto. Passe value e onValueChange para habilitar seleção exclusiva (só um item ativo por vez). O item ativo fica com texto brand (laranja). Clique para testar."
      >
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center gap-3">
            <span className="text-xs text-text-fg-disabled w-10 shrink-0">white</span>
            <PeriodSelectorDemo color="white" />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-text-fg-disabled w-10 shrink-0">gray</span>
            <PeriodSelectorDemo color="gray" />
          </div>
        </div>
      </ComponentPreview>

      {/* ── 2. Numbers — Paginação ── */}
      <ComponentPreview
        title="Numbers — Paginação"
        description="Misture itens de navegação (iconOnly, sem value) com itens de seleção (número, com value). Os botões de seta usam onClick direto; os números usam onValueChange."
      >
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center gap-3">
            <span className="text-xs text-text-fg-disabled w-10 shrink-0">white</span>
            <PaginationDemo color="white" />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-text-fg-disabled w-10 shrink-0">gray</span>
            <PaginationDemo color="gray" />
          </div>
        </div>
      </ComponentPreview>

      {/* ── 3. Only icons — Alinhamento ── */}
      <ComponentPreview
        title="Only icons — Alinhamento de texto"
        description="Use iconOnly em todos os itens para botões quadrados sem padding. O segundo item (center) está ativo por padrão, igual ao Figma. Clique para alternar."
      >
        <div className="flex gap-4 flex-wrap">
          <AlignmentDemo color="white" />
          <AlignmentDemo color="gray" />
        </div>
      </ComponentPreview>

      {/* ── 4. Icon button + Info ── */}
      <ComponentPreview
        title="Icon button + Info"
        description="Primeiro item com ícone + texto; segundo item apenas com texto informativo (ex: contagem). Nenhum dos dois precisa de value neste caso."
      >
        <div className="flex gap-4 flex-wrap">
          <ButtonGroup color="white" size="sm">
            <ButtonGroupItem><DownloadSimpleIcon weight="bold" />Download</ButtonGroupItem>
            <ButtonGroupItem>456k</ButtonGroupItem>
          </ButtonGroup>
          <ButtonGroup color="gray" size="sm">
            <ButtonGroupItem><DownloadSimpleIcon weight="bold" />Download</ButtonGroupItem>
            <ButtonGroupItem>456k</ButtonGroupItem>
          </ButtonGroup>
        </div>
      </ComponentPreview>

      {/* ── 5. Button + Icon ── */}
      <ComponentPreview
        title="Button + Icon"
        description="Dois botões distintos: o primeiro com texto, o segundo icon-only com ação separada (ex: salvar nos favoritos). O ícone fica num botão próprio, não junto ao texto."
      >
        <div className="flex gap-4 flex-wrap">
          <ButtonGroup color="white" size="sm">
            <ButtonGroupItem>Save book</ButtonGroupItem>
            <ButtonGroupItem iconOnly aria-label="Bookmark"><BookmarkSimpleIcon weight="bold" /></ButtonGroupItem>
          </ButtonGroup>
          <ButtonGroup color="gray" size="sm">
            <ButtonGroupItem>Save book</ButtonGroupItem>
            <ButtonGroupItem iconOnly aria-label="Bookmark"><BookmarkSimpleIcon weight="bold" /></ButtonGroupItem>
          </ButtonGroup>
        </div>
      </ComponentPreview>

      {/* ── 6. Start CTA button ── */}
      <ComponentPreview
        title="Start CTA button"
        description="Ícone de contexto em botão icon-only separado antes da ação principal (ex: QR Code antes de login)."
      >
        <div className="flex gap-4 flex-wrap">
          <ButtonGroup color="white" size="sm">
            <ButtonGroupItem iconOnly aria-label="QR Code"><QrCodeIcon weight="bold" /></ButtonGroupItem>
            <ButtonGroupItem>Entrar</ButtonGroupItem>
          </ButtonGroup>
          <ButtonGroup color="gray" size="sm">
            <ButtonGroupItem iconOnly aria-label="QR Code"><QrCodeIcon weight="bold" /></ButtonGroupItem>
            <ButtonGroupItem>Entrar</ButtonGroupItem>
          </ButtonGroup>
        </div>
      </ComponentPreview>

      {/* ── 7. With dropdown button ── */}
      <ComponentPreview
        title="With dropdown button"
        description="Ações principais com texto seguidas de um botão icon-only de overflow (···) para ações secundárias."
      >
        <div className="flex gap-4 flex-wrap">
          <ButtonGroup color="white" size="sm">
            <ButtonGroupItem><FileTextIcon weight="bold" />Todos os arquivos</ButtonGroupItem>
            <ButtonGroupItem><DownloadSimpleIcon weight="bold" />Download</ButtonGroupItem>
            <ButtonGroupItem iconOnly aria-label="Mais opções"><DotsThreeIcon weight="bold" /></ButtonGroupItem>
          </ButtonGroup>
          <ButtonGroup color="gray" size="sm">
            <ButtonGroupItem><FileTextIcon weight="bold" />Todos os arquivos</ButtonGroupItem>
            <ButtonGroupItem><DownloadSimpleIcon weight="bold" />Download</ButtonGroupItem>
            <ButtonGroupItem iconOnly aria-label="Mais opções"><DotsThreeIcon weight="bold" /></ButtonGroupItem>
          </ButtonGroup>
        </div>
      </ComponentPreview>

      {/* ── 8. With badge ── */}
      <ComponentPreview
        title="With badge"
        description="Um item pode conter um badge de notificação inline. O segundo botão (CaretDown icon-only) normalmente abre um menu dropdown."
      >
        <div className="flex gap-4 flex-wrap">
          {(["white", "gray"] as const).map(color => (
            <ButtonGroup key={color} color={color} size="sm">
              <ButtonGroupItem>
                <EnvelopeSimpleIcon weight="bold" />
                Mensagens
                <Badge variant="number" theme="danger" size="sm" number={1} />
              </ButtonGroupItem>
              <ButtonGroupItem iconOnly aria-label="Expandir"><CaretDownIcon weight="bold" /></ButtonGroupItem>
            </ButtonGroup>
          ))}
        </div>
      </ComponentPreview>

      {/* ── 9. 2 buttons — Navegação ── */}
      <ComponentPreview
        title="2 buttons — Navegação"
        description="Grupo mínimo com dois botões icon-only. Sem value/onValueChange, funcionam como botões independentes sem estado ativo."
      >
        <div className="flex gap-4 flex-wrap">
          <ButtonGroup color="white" size="sm">
            <ButtonGroupItem iconOnly aria-label="Anterior"><CaretLeftIcon weight="bold" /></ButtonGroupItem>
            <ButtonGroupItem iconOnly aria-label="Próximo"><CaretRightIcon weight="bold" /></ButtonGroupItem>
          </ButtonGroup>
          <ButtonGroup color="gray" size="sm">
            <ButtonGroupItem iconOnly aria-label="Anterior"><CaretLeftIcon weight="bold" /></ButtonGroupItem>
            <ButtonGroupItem iconOnly aria-label="Próximo"><CaretRightIcon weight="bold" /></ButtonGroupItem>
          </ButtonGroup>
        </div>
      </ComponentPreview>

      {/* ── 10. Plus & Minus — Contador ── */}
      <ComponentPreview
        title="Plus & Minus — Contador"
        description="Botões ± são icon-only (quadrados); o item central é um botão de texto desabilitado exibindo o valor. Clique para testar."
      >
        <div className="flex gap-4 flex-wrap">
          <CounterDemo color="white" />
          <CounterDemo color="gray" />
        </div>
      </ComponentPreview>

      {/* ── 11. Vertical ── */}
      <ComponentPreview
        title="Vertical"
        description={`Passe orientation="vertical" para empilhar os itens. Arredondamento aplicado no topo e na base (12 px). Itens ocupam largura total do container. Ideal para menus laterais.`}
      >
        <div className="flex gap-10 flex-wrap items-start">
          <div className="flex items-start gap-3">
            <span className="text-xs text-text-fg-disabled w-10 shrink-0 mt-2">white</span>
            <VerticalPeriodDemo color="white" />
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xs text-text-fg-disabled w-10 shrink-0 mt-2">gray</span>
            <VerticalPeriodDemo color="gray" />
          </div>
        </div>
      </ComponentPreview>

      {/* ── 12. Vertical com ícones ── */}
      <ComponentPreview
        title="Vertical com ícones"
        description="Orientação vertical com itens icon-only. Botões ficam quadrados e empilhados. Clique para alternar o item ativo."
      >
        <div className="flex gap-10 flex-wrap items-start">
          <div className="flex items-start gap-3">
            <span className="text-xs text-text-fg-disabled w-10 shrink-0 mt-2">white</span>
            <VerticalIconsDemo color="white" />
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xs text-text-fg-disabled w-10 shrink-0 mt-2">gray</span>
            <VerticalIconsDemo color="gray" />
          </div>
        </div>
      </ComponentPreview>

      {/* ── Tamanhos: White ── */}
      <ComponentPreview
        title="Tamanhos — White"
        description="A prop size controla a altura e o padding de todos os itens. Segue a mesma escala do Button individual."
      >
        <div className="flex flex-col gap-4">
          {(["xs", "sm", "base", "lg"] as const).map(size => (
            <div key={size} className="flex items-center gap-3">
              <span className="text-xs text-text-fg-disabled w-8 shrink-0">{size}</span>
              <ButtonGroup color="white" size={size}>
                <ButtonGroupItem>Botão</ButtonGroupItem>
                <ButtonGroupItem>Botão</ButtonGroupItem>
                <ButtonGroupItem>Botão</ButtonGroupItem>
                <ButtonGroupItem>Botão</ButtonGroupItem>
              </ButtonGroup>
            </div>
          ))}
        </div>
      </ComponentPreview>

      {/* ── Tamanhos: Gray ── */}
      <ComponentPreview
        title="Tamanhos — Gray"
        description="A variante gray usa Button secondary internamente: fundo levemente cinza com borda border-default-medium."
      >
        <div className="flex flex-col gap-4">
          {(["xs", "sm", "base", "lg"] as const).map(size => (
            <div key={size} className="flex items-center gap-3">
              <span className="text-xs text-text-fg-disabled w-8 shrink-0">{size}</span>
              <ButtonGroup color="gray" size={size}>
                <ButtonGroupItem>Botão</ButtonGroupItem>
                <ButtonGroupItem>Botão</ButtonGroupItem>
                <ButtonGroupItem>Botão</ButtonGroupItem>
                <ButtonGroupItem>Botão</ButtonGroupItem>
              </ButtonGroup>
            </div>
          ))}
        </div>
      </ComponentPreview>

      {/* ── Desabilitado ── */}
      <ComponentPreview
        title="Desabilitado"
        description="Itens são desabilitados individualmente via prop disabled. Não respondem a cliques e não alteram o estado ativo do grupo."
      >
        <div className="flex flex-col gap-4">
          <ButtonGroup color="white" size="sm">
            <ButtonGroupItem>Normal</ButtonGroupItem>
            <ButtonGroupItem disabled>Desabilitado</ButtonGroupItem>
            <ButtonGroupItem>Normal</ButtonGroupItem>
            <ButtonGroupItem>Normal</ButtonGroupItem>
          </ButtonGroup>
          <ButtonGroup color="gray" size="sm">
            <ButtonGroupItem>Normal</ButtonGroupItem>
            <ButtonGroupItem disabled>Desabilitado</ButtonGroupItem>
            <ButtonGroupItem>Normal</ButtonGroupItem>
            <ButtonGroupItem>Normal</ButtonGroupItem>
          </ButtonGroup>
        </div>
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
                  <span className="font-semibold text-text-heading">ButtonGroup</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs text-text-fg-brand">color</td>
                <td className="px-4 py-2 font-mono text-xs">"white" | "gray"</td>
                <td className="px-4 py-2 font-mono text-xs">"white"</td>
                <td className="px-4 py-2">Variante visual de todos os itens</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs text-text-fg-brand">size</td>
                <td className="px-4 py-2 font-mono text-xs">"xs" | "sm" | "base" | "lg"</td>
                <td className="px-4 py-2 font-mono text-xs">"sm"</td>
                <td className="px-4 py-2">Tamanho de todos os itens</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs text-text-fg-brand">orientation</td>
                <td className="px-4 py-2 font-mono text-xs">"horizontal" | "vertical"</td>
                <td className="px-4 py-2 font-mono text-xs">"horizontal"</td>
                <td className="px-4 py-2">Direção de empilhamento dos itens</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs text-text-fg-brand">value</td>
                <td className="px-4 py-2 font-mono text-xs">string</td>
                <td className="px-4 py-2 font-mono text-xs">—</td>
                <td className="px-4 py-2">Valor do item atualmente ativo</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs text-text-fg-brand">onValueChange</td>
                <td className="px-4 py-2 font-mono text-xs">(v: string) =&gt; void</td>
                <td className="px-4 py-2 font-mono text-xs">—</td>
                <td className="px-4 py-2">Chamado quando o usuário clica num item com value</td>
              </tr>
              <tr className="bg-bg-neutral-primary-soft">
                <td className="px-4 py-2 font-mono text-xs" colSpan={4}>
                  <span className="font-semibold text-text-heading">ButtonGroupItem</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs text-text-fg-brand">value</td>
                <td className="px-4 py-2 font-mono text-xs">string</td>
                <td className="px-4 py-2 font-mono text-xs">—</td>
                <td className="px-4 py-2">Identificador do item para o estado ativo</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs text-text-fg-brand">iconOnly</td>
                <td className="px-4 py-2 font-mono text-xs">boolean</td>
                <td className="px-4 py-2 font-mono text-xs">false</td>
                <td className="px-4 py-2">Botão quadrado sem padding — use em itens com só ícone</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs text-text-fg-brand">disabled</td>
                <td className="px-4 py-2 font-mono text-xs">boolean</td>
                <td className="px-4 py-2 font-mono text-xs">false</td>
                <td className="px-4 py-2">Desabilita o item individualmente</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs text-text-fg-brand">color / size</td>
                <td className="px-4 py-2 font-mono text-xs">idem ao grupo</td>
                <td className="px-4 py-2 font-mono text-xs">herdado</td>
                <td className="px-4 py-2">Sobrescreve o valor do grupo para este item</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  )
}
