const scales = [
  { label: "9xl",  className: "text-9xl font-bold",     sample: "Aa" },
  { label: "8xl",  className: "text-8xl font-bold",     sample: "Aa" },
  { label: "7xl",  className: "text-7xl font-bold",     sample: "Aa" },
  { label: "6xl",  className: "text-6xl font-bold",     sample: "Aa" },
  { label: "5xl",  className: "text-5xl font-bold",     sample: "Aa" },
  { label: "4xl",  className: "text-4xl font-bold",     sample: "Heading XL"  },
  { label: "3xl",  className: "text-3xl font-bold",     sample: "Heading L"   },
  { label: "2xl",  className: "text-2xl font-semibold", sample: "Heading M"   },
  { label: "xl",   className: "text-xl font-semibold",  sample: "Heading S"   },
  { label: "lg",   className: "text-lg font-medium",    sample: "Subtitle"    },
  { label: "base", className: "text-base",              sample: "Body — The quick brown fox jumps over the lazy dog." },
  { label: "sm",   className: "text-sm",                sample: "Small — The quick brown fox jumps over the lazy dog." },
  { label: "xs",   className: "text-xs",                sample: "XS — The quick brown fox jumps over the lazy dog." },
  { label: "xxs",  className: "text-xxs",               sample: "XXS — The quick brown fox jumps over the lazy dog." },
]

const weights = [
  { label: "Thin (100)",       className: "font-thin"       },
  { label: "ExtraLight (200)", className: "font-extralight" },
  { label: "Light (300)",      className: "font-light"      },
  { label: "Normal (400)",     className: "font-normal"     },
  { label: "Medium (500)",     className: "font-medium"     },
  { label: "Semibold (600)",   className: "font-semibold"   },
  { label: "Bold (700)",       className: "font-bold"       },
  { label: "Extrabold (800)",  className: "font-extrabold"  },
  { label: "Black (900)",      className: "font-black"      },
]

export function Typography() {
  return (
    <div className="space-y-10">

      <section>
        <h2 className="text-xs font-bold uppercase tracking-widest text-text-fg-disabled mb-4">
          Type Scale
        </h2>
        <div className="bg-white rounded-fig border border-border-default divide-y divide-border-default overflow-hidden">
          {scales.map(({ label, className, sample }) => (
            <div key={label} className="flex items-baseline gap-6 px-6 py-4">
              <span className="w-10 shrink-0 text-xs text-text-fg-disabled font-mono">{label}</span>
              <span className={`${className} text-text-heading leading-tight`}>{sample}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xs font-bold uppercase tracking-widest text-text-fg-disabled mb-4">
          Font Weights
        </h2>
        <div className="bg-white rounded-fig border border-border-default divide-y divide-border-default overflow-hidden">
          {weights.map(({ label, className }) => (
            <div key={label} className="flex items-center gap-6 px-6 py-4">
              <span className="w-44 shrink-0 text-xs text-text-fg-disabled">{label}</span>
              <span className={`text-base ${className} text-text-heading`}>
                The quick brown fox jumps over the lazy dog.
              </span>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
