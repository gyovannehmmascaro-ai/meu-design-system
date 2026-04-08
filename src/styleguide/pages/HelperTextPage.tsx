import { ComponentPreview } from "../components/ComponentPreview"
import { HelperText } from "@/components/ui/helper-text"
import { ArrowsClockwiseIcon, ArrowRightIcon, InfoIcon } from "@phosphor-icons/react"

export function HelperTextPage() {
  return (
    <div className="flex flex-col gap-8">

      {/* ── Default ── */}
      <ComponentPreview title="Default">
        <div className="flex flex-col gap-3 w-80">
          <HelperText>Texto de apoio ao campo.</HelperText>
          <HelperText>Máximo de 100 caracteres permitidos.</HelperText>
        </div>
      </ComponentPreview>

      {/* ── Com ação à direita ── */}
      <ComponentPreview title="Com ação à direita">
        <div className="flex flex-col gap-3 w-80">
          <HelperText rightIcon={<ArrowsClockwiseIcon weight="bold" />} rightLabel="Refresh">
            Texto de apoio ao campo.
          </HelperText>
          <HelperText rightIcon={<ArrowRightIcon weight="bold" />} rightLabel="Ver mais">
            Informação adicional sobre este campo.
          </HelperText>
          <HelperText rightIcon={<InfoIcon weight="bold" />} rightLabel="Saiba mais">
            Preencha com seus dados de acesso.
          </HelperText>
        </div>
      </ComponentPreview>

      {/* ── Só texto à direita ── */}
      <ComponentPreview title="Só texto à direita">
        <div className="flex flex-col gap-3 w-80">
          <HelperText rightLabel="0/100">
            Descrição do produto.
          </HelperText>
          <HelperText rightLabel="Opcional">
            Telefone de contato.
          </HelperText>
        </div>
      </ComponentPreview>

    </div>
  )
}
