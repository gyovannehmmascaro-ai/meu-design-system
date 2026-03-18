interface ComponentPreviewProps {
  name: string
  children: React.ReactNode
  className?: string
}

export function ComponentPreview({ name, children, className }: ComponentPreviewProps) {
  return (
    <div className="rounded-fig border border-border-default overflow-hidden">
      <div className="px-4 py-2 border-b border-border-default bg-bg-neutral-primary-soft">
        <span className="text-xs font-semibold text-text-fg-disabled">{name}</span>
      </div>
      <div className={`p-6 flex flex-wrap gap-3 items-center bg-white ${className ?? ""}`}>
        {children}
      </div>
    </div>
  )
}
