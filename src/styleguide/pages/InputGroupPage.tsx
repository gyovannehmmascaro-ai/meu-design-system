import { ComponentPreview } from "../components/ComponentPreview"
import { InputGroup } from "@/components/ui/input-group"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function InputGroupPage() {
  return (
    <div className="flex flex-col gap-8">

      {/* ── 2 inputs ── */}
      <ComponentPreview title="2 inputs">
        <div className="w-96">
          <InputGroup>
            <Input placeholder="De" />
            <Input placeholder="Até" />
          </InputGroup>
        </div>
      </ComponentPreview>

      {/* ── Input + Button ── */}
      <ComponentPreview title="Input + Button">
        <div className="w-96">
          <InputGroup>
            <Input placeholder="seu@email.com" />
            <Button variant="brand">Assinar</Button>
          </InputGroup>
        </div>
      </ComponentPreview>

      {/* ── Button + Input + Button ── */}
      <ComponentPreview title="Button + Input + Button">
        <div className="w-96">
          <InputGroup>
            <Button variant="secondary">Anterior</Button>
            <Input placeholder="Buscar..." />
            <Button variant="secondary">Próximo</Button>
          </InputGroup>
        </div>
      </ComponentPreview>

      {/* ── 3 inputs ── */}
      <ComponentPreview title="3 inputs">
        <div className="w-96">
          <InputGroup>
            <Input placeholder="Dia" />
            <Input placeholder="Mês" />
            <Input placeholder="Ano" />
          </InputGroup>
        </div>
      </ComponentPreview>

      {/* ── Input group com gap externo ── */}
      <ComponentPreview title="InputGroup + Button separado (com gap)">
        <div className="flex items-center gap-4 w-96">
          <InputGroup className="flex-1">
            <Input placeholder="De" />
            <Input placeholder="Até" />
          </InputGroup>
          <Button variant="brand">Buscar</Button>
        </div>
      </ComponentPreview>

    </div>
  )
}
