import * as React from "react"

interface ComponentPreviewProps {
  title: string
  description?: string
  code?: string
  children: React.ReactNode
  className?: string
}

export function ComponentPreview({ title, description, code, children, className }: ComponentPreviewProps) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    if (!code) return
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const hasCode = Boolean(code)

  return (
    <section>
      <h2 className="text-base font-semibold text-text-heading mb-1">{title}</h2>
      {description && (
        <p className="text-sm text-text-fg-secondary mb-3">{description}</p>
      )}
      <div
        className={[
          "border border-border-default bg-bg-neutral-primary-soft",
          "flex flex-wrap gap-3 items-center p-6",
          hasCode ? "rounded-t-lg" : "rounded-lg",
          className ?? "",
        ].join(" ")}
      >
        {children}
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
