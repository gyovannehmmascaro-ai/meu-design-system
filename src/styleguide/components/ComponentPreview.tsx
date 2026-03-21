import * as React from "react"
import { Monitor, Tablet, Smartphone } from "lucide-react"

interface ComponentPreviewProps {
  title: string
  description?: string
  code?: string
  children: React.ReactNode
  className?: string
  responsive?: boolean
}

type Viewport = "desktop" | "tablet" | "mobile"

const viewportWidth: Record<Viewport, string> = {
  desktop: "w-full",
  tablet:  "w-[768px]",
  mobile:  "w-[375px]",
}

export function ComponentPreview({ title, description, code, children, className, responsive }: ComponentPreviewProps) {
  const [copied, setCopied] = React.useState(false)
  const [viewport, setViewport] = React.useState<Viewport>("desktop")

  const hasCode = Boolean(code)

  const handleCopy = () => {
    if (!code) return
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-base font-semibold text-text-heading">{title}</h2>
        {responsive && (
          <div className="flex items-center gap-1">
            {(["desktop", "tablet", "mobile"] as Viewport[]).map((v) => {
              const Icon = v === "desktop" ? Monitor : v === "tablet" ? Tablet : Smartphone
              return (
                <button
                  key={v}
                  onClick={() => setViewport(v)}
                  title={v.charAt(0).toUpperCase() + v.slice(1)}
                  className={`size-7 flex items-center justify-center rounded transition-colors ${
                    viewport === v
                      ? "bg-bg-neutral-tertiary text-text-heading"
                      : "text-text-fg-disabled hover:bg-bg-neutral-tertiary hover:text-text-heading"
                  }`}
                >
                  <Icon className="size-4" />
                </button>
              )
            })}
          </div>
        )}
      </div>
      {description && (
        <p className="text-sm text-text-fg-secondary mb-3">{description}</p>
      )}
      <div
        className={[
          "border border-border-default bg-bg-neutral-primary-soft overflow-hidden",
          hasCode ? "rounded-t-lg" : "rounded-lg",
          responsive ? "flex justify-start p-0" : "flex flex-wrap gap-3 items-center p-6",
          className ?? "",
        ].join(" ")}
      >
        {responsive ? (
          <div className={`${viewportWidth[viewport]} transition-all duration-300 overflow-hidden p-6`}>
            {children}
          </div>
        ) : (
          children
        )}
      </div>
      {hasCode && (
        <div className="relative border border-t-0 border-border-default rounded-b-lg bg-gray-900 overflow-hidden">
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 text-xs text-gray-400 hover:text-gray-100 px-2 py-1 rounded border border-gray-700 transition-colors"
          >
            {copied ? "Copiado!" : "Copiar"}
          </button>
          <pre className="p-4 pt-10 text-sm text-gray-300 overflow-x-auto leading-relaxed">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </section>
  )
}
