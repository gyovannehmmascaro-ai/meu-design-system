import { ComponentPreview } from "../components/ComponentPreview"
import { FieldLabel } from "@/components/ui/field-label"
import { Input } from "@/components/ui/input"
import { HelperText } from "@/components/ui/helper-text"
import { InputGroup } from "@/components/ui/input-group"
import { Button } from "@/components/ui/button"

export function InputFieldPage() {
  return (
    <div className="flex flex-col gap-8">

      {/* ── Default ── */}
      <ComponentPreview title="Default">
        <div className="w-96">
          <div className="flex flex-col gap-2.5">
            <FieldLabel htmlFor="default-input" required>Label</FieldLabel>
            <Input id="default-input" placeholder="Placeholder text" />
            <HelperText>Helper text</HelperText>
          </div>
        </div>
      </ComponentPreview>

      {/* ── 2 inputs ── */}
      <ComponentPreview title="2 inputs">
        <div className="w-96">
          <div className="flex flex-col gap-2.5">
            <FieldLabel htmlFor="range-from">Label</FieldLabel>
            <InputGroup>
              <Input id="range-from" placeholder="De" />
              <Input placeholder="Até" />
            </InputGroup>
            <HelperText>Helper text</HelperText>
          </div>
        </div>
      </ComponentPreview>

      {/* ── Input + Button ── */}
      <ComponentPreview title="Com botão (Input + Button)">
        <div className="w-96">
          <div className="flex flex-col gap-2.5">
            <FieldLabel htmlFor="email-subscribe">Label</FieldLabel>
            <InputGroup>
              <Input id="email-subscribe" placeholder="seu@email.com" />
              <Button variant="brand">Assinar</Button>
            </InputGroup>
            <HelperText>Helper text</HelperText>
          </div>
        </div>
      </ComponentPreview>

      {/* ── Button + Input + Button ── */}
      <ComponentPreview title="2 botões (Button + Input + Button)">
        <div className="w-96">
          <div className="flex flex-col gap-2.5">
            <FieldLabel htmlFor="search-input">Label</FieldLabel>
            <InputGroup>
              <Button variant="secondary">Anterior</Button>
              <Input id="search-input" placeholder="Buscar..." />
              <Button variant="secondary">Próximo</Button>
            </InputGroup>
            <HelperText>Helper text</HelperText>
          </div>
        </div>
      </ComponentPreview>

      {/* ── Stacked ── */}
      <ComponentPreview title="Stacked (Input + Button empilhados)">
        <div className="w-96">
          <div className="flex flex-col gap-2.5">
            <FieldLabel htmlFor="stacked-input">Label</FieldLabel>
            <div className="flex flex-col gap-4">
              <Input id="stacked-input" placeholder="Enter your email" />
              <Button variant="brand">Subscribe</Button>
            </div>
            <HelperText>Helper text</HelperText>
          </div>
        </div>
      </ComponentPreview>

      {/* ── Inline ── */}
      <ComponentPreview title="Inline (label ao lado)">
        <div className="w-96">
          <div className="flex items-center gap-4">
            <FieldLabel htmlFor="inline-input">Label</FieldLabel>
            <Input id="inline-input" size="sm" placeholder="Placeholder text" className="flex-1" />
          </div>
        </div>
      </ComponentPreview>

      {/* ── Range inputs ── */}
      <ComponentPreview title="Range (dois campos lado a lado)">
        <div className="w-96 flex gap-4">
          <div className="flex-1 flex flex-col gap-2.5">
            <FieldLabel htmlFor="range-min">De</FieldLabel>
            <Input id="range-min" placeholder="Mínimo" />
            <HelperText>Helper text</HelperText>
          </div>
          <div className="flex-1 flex flex-col gap-2.5">
            <FieldLabel htmlFor="range-max">Até</FieldLabel>
            <Input id="range-max" placeholder="Máximo" />
            <HelperText>Helper text</HelperText>
          </div>
        </div>
      </ComponentPreview>

    </div>
  )
}
