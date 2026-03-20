import { Spinner } from "@/components/ui/spinner"
import { ComponentPreview } from "../components/ComponentPreview"

export function SpinnerPage() {
  return (
    <div className="space-y-6">
      <ComponentPreview title="Spinner — With track">
        <Spinner size="xs"     track />
        <Spinner size="small"  track />
        <Spinner size="medium" track />
        <Spinner size="base"   track />
        <Spinner size="large"  track />
      </ComponentPreview>

      <ComponentPreview title="Spinner — Without track">
        <Spinner size="xs"     track={false} />
        <Spinner size="small"  track={false} />
        <Spinner size="medium" track={false} />
        <Spinner size="base"   track={false} />
        <Spinner size="large"  track={false} />
      </ComponentPreview>
    </div>
  )
}
