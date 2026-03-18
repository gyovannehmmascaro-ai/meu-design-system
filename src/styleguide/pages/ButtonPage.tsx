import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { ComponentPreview } from "../components/ComponentPreview"

export function ButtonPage() {
  return (
    <div className="space-y-6">
      <ComponentPreview name="Button — Variantes sólidas">
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

      <ComponentPreview name="Button — Variantes outline">
        <Button variant="success" outline>Success</Button>
        <Button variant="danger"  outline>Danger</Button>
        <Button variant="warning" outline>Warning</Button>
        <Button variant="info"    outline>Info</Button>
      </ComponentPreview>

      <ComponentPreview name="Button — Tamanhos">
        <Button size="xs">xs</Button>
        <Button size="sm">sm</Button>
        <Button size="default">base</Button>
        <Button size="lg">lg</Button>
        <Button size="xl">xl</Button>
      </ComponentPreview>

      <ComponentPreview name="Button — Com ícones">
        <Button><ArrowLeft />Leading</Button>
        <Button>Trailing<ArrowRight /></Button>
        <Button size="icon"><ArrowRight /></Button>
        <Button size="icon-sm"><ArrowRight /></Button>
        <Button size="icon-xs"><ArrowRight /></Button>
      </ComponentPreview>

      <ComponentPreview name="Button — Estado disabled">
        <Button variant="brand"   disabled>Brand</Button>
        <Button variant="success" disabled>Success</Button>
        <Button variant="danger"  disabled>Danger</Button>
        <Button variant="success" outline disabled>Success outline</Button>
        <Button variant="info"    outline disabled>Info outline</Button>
      </ComponentPreview>
    </div>
  )
}
