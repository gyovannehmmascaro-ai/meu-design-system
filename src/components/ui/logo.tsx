import * as React from "react"
import { cn } from "@/lib/utils"

// ── Tamanhos extraídos do Figma ────────────────────────────────────────────
export type LogoSize = "xs" | "sm" | "base" | "lg"

const logoSizeMap: Record<LogoSize, { width: number; height: number }> = {
  xs:   { width: 76,  height: 24 },
  sm:   { width: 95,  height: 30 },
  base: { width: 153, height: 48 },
  lg:   { width: 203, height: 64 },
}

// ── Tamanhos do ícone (somente símbolo, sem texto) ─────────────────────────
const iconSizeMap: Record<LogoSize, { width: number; height: number }> = {
  xs:   { width: 24, height: 24 },
  sm:   { width: 30, height: 30 },
  base: { width: 48, height: 48 },
  lg:   { width: 64, height: 64 },
}

export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: LogoSize
  /** Exibe apenas o ícone (símbolo) sem o nome */
  iconOnly?: boolean
  src?: string
  alt?: string
}

export function Logo({
  size = "base",
  iconOnly = false,
  src,
  alt = "Logo",
  className,
  ...props
}: LogoProps) {
  const sizeMap = iconOnly ? iconSizeMap : logoSizeMap
  const { width, height } = sizeMap[size]
  const defaultSrc = iconOnly ? "/logo-icon.svg" : "/logo.svg"

  return (
    <img
      src={src ?? defaultSrc}
      alt={alt}
      width={width}
      height={height}
      className={cn("object-contain shrink-0", className)}
      {...props}
    />
  )
}
