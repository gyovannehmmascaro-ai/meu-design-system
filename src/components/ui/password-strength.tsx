import * as React from "react"
import { CheckIcon, XIcon } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import { ProgressBar, type ProgressBarProps } from "./progress-bar"

export interface Criterion {
  label: string
  test: (value: string) => boolean
}

export interface PasswordStrengthProps extends React.ComponentProps<"div"> {
  /** Valor atual da senha */
  value: string
  /** Critérios configuráveis — cada um tem label e função de teste */
  criteria: Criterion[]
  /** Título acima da lista. Padrão: "A senha deve conter:" */
  heading?: string
}

type BarColor = NonNullable<ProgressBarProps["color"]>

function getStrength(progress: number): { color: BarColor; label: string } {
  if (progress === 0)  return { color: "danger",  label: "Muito fraca"  }
  if (progress <= 33)  return { color: "danger",  label: "Fraca"        }
  if (progress <= 66)  return { color: "warning", label: "Média"        }
  if (progress < 100)  return { color: "primary", label: "Forte"        }
  return                      { color: "success", label: "Muito forte"  }
}

function PasswordStrength({
  value,
  criteria,
  heading = "A senha deve conter:",
  className,
  ...props
}: PasswordStrengthProps) {
  const results = criteria.map(c => ({ ...c, passed: c.test(value) }))
  const passed = results.filter(r => r.passed).length
  const progress = criteria.length === 0 ? 0 : Math.round((passed / criteria.length) * 100)
  const { color, label } = getStrength(progress)

  return (
    <div className={cn("flex flex-col gap-2.5", className)} {...props}>
      <ProgressBar
        value={progress}
        color={color}
        labelPosition="bottom"
        leftLabel={label}
      />

      <div className="flex flex-col gap-2.5">
        <span className="text-sm leading-5 font-medium text-text-heading">
          {heading}
        </span>

        <div className="flex flex-col gap-1.5">
          {results.map((criterion, i) => (
            <div
              key={i}
              className={cn(
                "flex items-center gap-1.5 text-sm leading-5 font-normal",
                criterion.passed ? "text-text-fg-success" : "text-text-body"
              )}
            >
              <span className="size-4 shrink-0">
                {criterion.passed
                  ? <CheckIcon weight="bold" />
                  : <XIcon weight="bold" />
                }
              </span>
              <span>{criterion.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { PasswordStrength }
