import { useEffect, useState } from "react"

interface ColorToken {
  name: string
  variable: string
}

interface ColorGroup {
  title: string
  tokens: ColorToken[]
}

const colorGroups: ColorGroup[] = [
  {
    title: "Brand",
    tokens: [
      { name: "brand-softer",  variable: "--bg-brand-softer"  },
      { name: "brand-soft",    variable: "--bg-brand-soft"    },
      { name: "brand-medium",  variable: "--bg-brand-medium"  },
      { name: "brand",         variable: "--bg-brand"         },
      { name: "brand-strong",  variable: "--bg-brand-strong"  },
    ],
  },
  {
    title: "Success",
    tokens: [
      { name: "success-soft",    variable: "--bg-success-soft"    },
      { name: "success-medium",  variable: "--bg-success-medium"  },
      { name: "success",         variable: "--bg-success"         },
      { name: "success-strong",  variable: "--bg-success-strong"  },
    ],
  },
  {
    title: "Danger",
    tokens: [
      { name: "danger-soft",    variable: "--bg-danger-soft"    },
      { name: "danger-medium",  variable: "--bg-danger-medium"  },
      { name: "danger",         variable: "--bg-danger"         },
      { name: "danger-strong",  variable: "--bg-danger-strong"  },
    ],
  },
  {
    title: "Warning",
    tokens: [
      { name: "warning-soft",    variable: "--bg-warning-soft"    },
      { name: "warning-medium",  variable: "--bg-warning-medium"  },
      { name: "warning",         variable: "--bg-warning"         },
      { name: "warning-strong",  variable: "--bg-warning-strong"  },
    ],
  },
  {
    title: "Info",
    tokens: [
      { name: "info-softer",  variable: "--bg-info-softer"  },
      { name: "info-soft",    variable: "--bg-info-soft"    },
      { name: "info-medium",  variable: "--bg-info-medium"  },
      { name: "info",         variable: "--bg-info"         },
      { name: "info-strong",  variable: "--bg-info-strong"  },
    ],
  },
  {
    title: "Neutral",
    tokens: [
      { name: "neutral-secondary-soft",    variable: "--bg-neutral-secondary-soft"    },
      { name: "neutral-secondary",         variable: "--bg-neutral-secondary"         },
      { name: "neutral-tertiary",          variable: "--bg-neutral-tertiary"          },
      { name: "neutral-quaternary",        variable: "--bg-neutral-quaternary"        },
      { name: "gray",                      variable: "--bg-gray"                      },
    ],
  },
  {
    title: "Dark",
    tokens: [
      { name: "dark",        variable: "--bg-dark"        },
      { name: "dark-strong", variable: "--bg-dark-strong" },
      { name: "disabled",    variable: "--bg-disabled"    },
    ],
  },
  {
    title: "Extended",
    tokens: [
      { name: "purple",   variable: "--bg-purple"   },
      { name: "sky",      variable: "--bg-sky"      },
      { name: "teal",     variable: "--bg-teal"     },
      { name: "pink",     variable: "--bg-pink"     },
      { name: "cyan",     variable: "--bg-cyan"     },
      { name: "fuchsia",  variable: "--bg-fuchsia"  },
      { name: "indigo",   variable: "--bg-indigo"   },
      { name: "orange",   variable: "--bg-orange"   },
    ],
  },
]

function ColorSwatch({ name, variable }: ColorToken) {
  const [value, setValue] = useState("")

  useEffect(() => {
    const raw = getComputedStyle(document.documentElement).getPropertyValue(variable).trim()
    setValue(raw)
  }, [variable])

  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="h-12 w-full rounded-fig border border-border-default-subtle"
        style={{ backgroundColor: `var(${variable})` }}
      />
      <div>
        <p className="text-xs font-medium text-text-heading">{name}</p>
        <p className="text-xs text-text-fg-disabled font-mono">{value}</p>
      </div>
    </div>
  )
}

export function Colors() {
  return (
    <div className="space-y-10">
      {colorGroups.map(group => (
        <section key={group.title}>
          <h2 className="text-xs font-bold uppercase tracking-widest text-text-fg-disabled mb-4">
            {group.title}
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {group.tokens.map(token => (
              <ColorSwatch key={token.variable} {...token} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
