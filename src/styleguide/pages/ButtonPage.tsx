import { Button } from "@/components/ui/button"
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react"
import { ComponentPreview } from "../components/ComponentPreview"

export function ButtonPage() {
  return (
    <div className="space-y-6">
      <ComponentPreview title="Button — Variantes sólidas">
        <Button variant="brand">Brand</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="info">Info</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="ghost">Ghost</Button>
      </ComponentPreview>

      <ComponentPreview title="Button — Variantes outline">
        <Button variant="success" outline>Success</Button>
        <Button variant="danger"  outline>Danger</Button>
        <Button variant="warning" outline>Warning</Button>
        <Button variant="info"    outline>Info</Button>
      </ComponentPreview>

      <ComponentPreview title="Button — Tamanhos">
        <Button size="xs">xs</Button>
        <Button size="sm">sm</Button>
        <Button size="default">base</Button>
        <Button size="lg">lg</Button>
        <Button size="xl">xl</Button>
      </ComponentPreview>

      <ComponentPreview title="Button — Com ícones">
        <Button><ArrowLeftIcon weight="bold" />Leading</Button>
        <Button>Trailing<ArrowRightIcon weight="bold" /></Button>
        <Button size="icon"><ArrowRightIcon weight="bold" /></Button>
        <Button size="icon-sm"><ArrowRightIcon weight="bold" /></Button>
        <Button size="icon-xs"><ArrowRightIcon weight="bold" /></Button>
      </ComponentPreview>

      <ComponentPreview title="Button — Logo inside (variantes)">
        <Button variant="secondary" size="icon"><img src="/logo-icon.svg" className="size-7" /></Button>
        <Button variant="tertiary"  size="icon"><img src="/logo-icon.svg" className="size-7" /></Button>
        <Button variant="ghost"     size="icon"><img src="/logo-icon.svg" className="size-7" /></Button>
      </ComponentPreview>

      <ComponentPreview title="Button — Logo inside (tamanhos)">
        <Button variant="secondary" size="icon-xs"><img src="/logo-icon.svg" className="size-5" /></Button>
        <Button variant="secondary" size="icon-sm"><img src="/logo-icon.svg" className="size-6" /></Button>
        <Button variant="secondary" size="icon">   <img src="/logo-icon.svg" className="size-7" /></Button>
        <Button variant="secondary" size="icon-lg"><img src="/logo-icon.svg" className="size-7" /></Button>
        <Button variant="secondary" size="icon-xl"><img src="/logo-icon.svg" className="size-8" /></Button>
      </ComponentPreview>

      <ComponentPreview title="Button — Estado disabled">
        <Button variant="brand"   disabled>Brand</Button>
        <Button variant="success" disabled>Success</Button>
        <Button variant="danger"  disabled>Danger</Button>
        <Button variant="success" outline disabled>Success outline</Button>
        <Button variant="info"    outline disabled>Info outline</Button>
      </ComponentPreview>
    </div>
  )
}
