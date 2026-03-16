import * as React from "react"
import { cn } from "@/lib/utils"

// ── Mapeamento de tamanhos — extraídos do Figma ────────────────────────────
// xs=12px | small=24px | medium=50px | base=75px | large=100px
const sizeConfig = {
  xs:     { diameter: 12,  stroke: 1.5 },
  small:  { diameter: 24,  stroke: 2.5 },
  medium: { diameter: 50,  stroke: 4   },
  base:   { diameter: 75,  stroke: 6   },
  large:  { diameter: 100, stroke: 8   },
} as const

export interface SpinnerProps extends React.SVGAttributes<SVGSVGElement> {
  /**
   * Tamanhos do Figma:
   * xs (12px) | small (24px) | medium (50px) | base (75px) | large (100px)
   */
  size?: keyof typeof sizeConfig
  /**
   * true  → mostra a trilha cinza + arco laranja (bg-neutral-quaternary)
   * false → só o arco laranja, sem trilha
   */
  track?: boolean
  /**
   * Cor do arco — qualquer classe Tailwind de cor (text-*)
   * Padrão: "text-bg-brand" (laranja)
   */
  arcColor?: string
  /**
   * Cor da trilha — qualquer classe Tailwind de cor (text-*)
   * Padrão: "text-bg-neutral-quaternary" (cinza)
   */
  trackColor?: string
}

function Spinner({
  size = "small",
  track = true,
  arcColor = "text-bg-brand",
  trackColor = "text-bg-neutral-quaternary",
  className,
  style,
  ...props
}: SpinnerProps) {
  const { diameter, stroke } = sizeConfig[size]

  const r             = (diameter - stroke) / 2  // raio interno
  const cx            = diameter / 2
  const cy            = diameter / 2
  const circumference = 2 * Math.PI * r

  // Arco ~25% da volta — igual ao Figma
  const arcLength = circumference * 0.25
  const gapLength = circumference - arcLength

  return (
    <svg
      width={diameter}
      height={diameter}
      viewBox={`0 0 ${diameter} ${diameter}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Carregando"
      role="status"
      className={cn("animate-spin", className)}
      style={{
        animationDuration: "0.75s",
        animationTimingFunction: "linear",
        ...style,
      }}
      {...props}
    >
      {/* Trilha — círculo completo, cor via trackColor */}
      {track && (
        <circle
          cx={cx}
          cy={cy}
          r={r}
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
          className={trackColor}
        />
      )}

      {/* Arco — ~25% da volta, cor via arcColor */}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${arcLength} ${gapLength}`}
        transform={`rotate(-90 ${cx} ${cy})`}
        className={arcColor}
      />
    </svg>
  )
}

export { Spinner }