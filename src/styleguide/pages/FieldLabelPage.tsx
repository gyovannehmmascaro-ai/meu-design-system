import { ComponentPreview } from "../components/ComponentPreview"
import { FieldLabel } from "@/components/ui/field-label"
import { QuestionIcon, InfoIcon, WarningIcon } from "@phosphor-icons/react"

export function FieldLabelPage() {
  return (
    <div className="flex flex-col gap-8">

      {/* ── Default ── */}
      <ComponentPreview title="Default">
        <div className="flex flex-col gap-3">
          <FieldLabel>First name</FieldLabel>
        </div>
      </ComponentPreview>

      {/* ── Required ── */}
      <ComponentPreview title="Required">
        <div className="flex flex-col gap-3">
          <FieldLabel required>First name</FieldLabel>
        </div>
      </ComponentPreview>

      {/* ── Required & icon ── */}
      <ComponentPreview title="Required & icon">
        <div className="flex flex-col gap-3">
          <FieldLabel required icon={<QuestionIcon weight="bold" />}>First name</FieldLabel>
          <FieldLabel required icon={<InfoIcon weight="bold" />}>Email</FieldLabel>
          <FieldLabel required icon={<WarningIcon weight="bold" />}>Senha</FieldLabel>
        </div>
      </ComponentPreview>

      {/* ── Com subtext (row) ── */}
      <ComponentPreview title="Com subtext (row)">
        <div className="flex flex-col gap-3">
          <FieldLabel required icon={<QuestionIcon weight="bold" />} subtext="Opcional">
            First name
          </FieldLabel>
          <FieldLabel required icon={<InfoIcon weight="bold" />} subtext="Máx. 100 caracteres">
            Descrição
          </FieldLabel>
        </div>
      </ComponentPreview>

      {/* ── Com subtext (col) ── */}
      <ComponentPreview title="Com subtext (col)">
        <div className="flex flex-col gap-3">
          <FieldLabel required icon={<QuestionIcon weight="bold" />} subtext="Opcional" subtextLayout="col">
            First name
          </FieldLabel>
          <FieldLabel required icon={<InfoIcon weight="bold" />} subtext="Máx. 100 caracteres" subtextLayout="col">
            Descrição
          </FieldLabel>
        </div>
      </ComponentPreview>

    </div>
  )
}
