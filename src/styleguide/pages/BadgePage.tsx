import { Badge } from "@/components/ui/badge"
import { Clock, X } from "lucide-react"
import { ComponentPreview } from "../components/ComponentPreview"

export function BadgePage() {
  return (
    <div className="space-y-6">
      <ComponentPreview name="Badge — Temas">
        <Badge theme="gray">Gray</Badge>
        <Badge theme="brand">Brand</Badge>
        <Badge theme="success">Success</Badge>
        <Badge theme="danger">Danger</Badge>
        <Badge theme="warning">Warning</Badge>
        <Badge theme="info">Info</Badge>
        <Badge theme="white">White</Badge>
      </ComponentPreview>

      <ComponentPreview name="Badge — Variantes">
        <Badge theme="brand" variant="dot">Dot</Badge>
        <Badge theme="brand" variant="rounded">Rounded</Badge>
        <Badge theme="brand" iconLeading={<Clock />}>Icon leading</Badge>
        <Badge theme="brand" iconTrailing={<X />}>Icon trailing</Badge>
        <Badge theme="brand" variant="icon-only" icon={<Clock />} />
        <Badge theme="brand" variant="number" number={5} />
        <Badge theme="brand" variant="secondary-text" iconLeading={<Clock />} secondaryText="Sub">Label</Badge>
      </ComponentPreview>

      <ComponentPreview name="Badge — Tamanhos">
        <Badge theme="brand" size="sm">Small</Badge>
        <Badge theme="brand" size="lg">Large</Badge>
      </ComponentPreview>
    </div>
  )
}
