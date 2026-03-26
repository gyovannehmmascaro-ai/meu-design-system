import { Alert } from "@/components/ui/alert"
import { ComponentPreview } from "../components/ComponentPreview"

const colors = ["default", "success", "danger", "warning", "info", "brand"] as const

const text = "Great job! You've acknowledged this significant alert message."
const description = "We're adding extra text to illustrate how longer notifications are displayed. By doing this, you can see how text wrapping and spacing are managed."

export function AlertPage() {
  return (
    <div className="space-y-6">

      <ComponentPreview title="Alert — Default">
        <div className="flex flex-col gap-3 w-full">
          {colors.map(color => (
            <Alert key={color} theme={color} title={text} />
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview title="Alert — Default com fechar">
        <div className="flex flex-col gap-3 w-full">
          {colors.map(color => (
            <Alert key={color} theme={color} title={text} onDismiss={() => {}} />
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview title="Alert — Complex">
        <div className="flex flex-col gap-3 w-full">
          {colors.map(color => (
            <Alert
              key={color}
              type="complex"
              theme={color}
              title="Alert heading"
              description={description}
              onDismiss={() => {}}
              onAction={() => {}}
            />
          ))}
        </div>
      </ComponentPreview>

      <ComponentPreview title="Alert — Small">
        {colors.map(color => (
          <Alert key={color} type="small" theme={color} title="Alert message." />
        ))}
      </ComponentPreview>

      <ComponentPreview title="Alert — Border top">
        <div className="flex flex-col gap-3 w-full">
          {colors.map(color => (
            <Alert key={color} type="border-top" theme={color} title={text} onDismiss={() => {}} />
          ))}
        </div>
      </ComponentPreview>

    </div>
  )
}
