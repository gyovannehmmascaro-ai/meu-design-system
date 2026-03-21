import { Logo } from "@/components/ui/logo"
import { ComponentPreview } from "../components/ComponentPreview"

export function LogoPage() {
  return (
    <div className="space-y-6">
      <ComponentPreview
        title="Tamanhos"
        description="Substitua /public/logo.svg pelo arquivo SVG real do seu logo."
        code={`<Logo size="xs" />
<Logo size="sm" />
<Logo size="base" />
<Logo size="lg" />`}
      >
        <div className="flex flex-col gap-6 items-start w-full">
          {(["xs", "sm", "base", "lg"] as const).map(size => (
            <div key={size} className="flex items-center gap-6">
              <span className="text-xs text-text-fg-disabled w-8 shrink-0">{size}</span>
              <Logo size={size} />
            </div>
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Src customizado"
        description="Passe um src diferente para usar logos distintos por contexto."
        code={`<Logo size="base" src="/logo-dark.svg" alt="Logo dark" />`}
      >
        <Logo size="base" />
      </ComponentPreview>
    </div>
  )
}
