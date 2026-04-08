import { ComponentPreview } from "../components/ComponentPreview"
import { ProgressBar } from "@/components/ui/progress-bar"

export function ProgressBarPage() {
  return (
    <div className="flex flex-col gap-8">

      {/* ── Tamanhos ── */}
      <ComponentPreview title="Tamanhos">
        <div className="flex flex-col gap-4 w-80">
          <ProgressBar value={60} size="base" />
          <ProgressBar value={60} size="lg" />
        </div>
      </ComponentPreview>

      {/* ── Cores ── */}
      <ComponentPreview title="Cores">
        <div className="flex flex-col gap-4 w-80">
          <ProgressBar value={60} color="primary" />
          <ProgressBar value={60} color="success" />
          <ProgressBar value={60} color="warning" />
          <ProgressBar value={60} color="danger" />
          <ProgressBar value={60} color="gray" />
          <ProgressBar value={60} color="dark" />
        </div>
      </ComponentPreview>

      {/* ── Valores ── */}
      <ComponentPreview title="Valores">
        <div className="flex flex-col gap-4 w-80">
          <ProgressBar value={0}   color="danger" />
          <ProgressBar value={25}  color="danger" />
          <ProgressBar value={50}  color="warning" />
          <ProgressBar value={75}  color="warning" />
          <ProgressBar value={100} color="success" />
        </div>
      </ComponentPreview>

      {/* ── Label top ── */}
      <ComponentPreview title="Label top">
        <div className="flex flex-col gap-4 w-80">
          <ProgressBar value={60} color="primary" labelPosition="top" leftLabel="Progresso" rightLabel="60%" />
          <ProgressBar value={100} color="success" labelPosition="top" leftLabel="Concluído" rightLabel="100%" />
        </div>
      </ComponentPreview>

      {/* ── Label bottom ── */}
      <ComponentPreview title="Label bottom">
        <div className="flex flex-col gap-4 w-80">
          <ProgressBar value={40} color="warning" labelPosition="bottom" leftLabel="Fraca" rightLabel="40%" />
          <ProgressBar value={75} color="primary" labelPosition="bottom" leftLabel="Forte" rightLabel="75%" />
        </div>
      </ComponentPreview>

      {/* ── Label side ── */}
      <ComponentPreview title="Label side">
        <div className="flex flex-col gap-4 w-80">
          <ProgressBar value={60} color="primary" labelPosition="side" leftLabel="60%" />
          <ProgressBar value={80} color="success" labelPosition="side" leftLabel="Upload" rightLabel="80%" />
        </div>
      </ComponentPreview>

    </div>
  )
}
