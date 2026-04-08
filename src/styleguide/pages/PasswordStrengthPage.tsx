import { useState } from "react"
import { ComponentPreview } from "../components/ComponentPreview"
import { PasswordStrength } from "@/components/ui/password-strength"
import { Input } from "@/components/ui/input"

const defaultCriteria = [
  { label: "Mínimo 10 caracteres",      test: (v: string) => v.length >= 10         },
  { label: "Ao menos um número",         test: (v: string) => /\d/.test(v)            },
  { label: "Ao menos uma letra minúscula", test: (v: string) => /[a-z]/.test(v)      },
  { label: "Ao menos uma letra maiúscula", test: (v: string) => /[A-Z]/.test(v)      },
  { label: "Ao menos um símbolo",        test: (v: string) => /[^a-zA-Z0-9]/.test(v) },
]

const simpleCriteria = [
  { label: "Mínimo 8 caracteres", test: (v: string) => v.length >= 8   },
  { label: "Ao menos um número",  test: (v: string) => /\d/.test(v)     },
  { label: "Ao menos maiúscula",  test: (v: string) => /[A-Z]/.test(v)  },
]

function LiveDemo() {
  const [password, setPassword] = useState("")
  return (
    <div className="flex flex-col gap-3 w-80">
      <Input
        type="password"
        placeholder="Digite uma senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <PasswordStrength value={password} criteria={defaultCriteria} />
    </div>
  )
}

export function PasswordStrengthPage() {
  return (
    <div className="flex flex-col gap-8">

      {/* ── Demo interativo ── */}
      <ComponentPreview title="Demo interativo">
        <LiveDemo />
      </ComponentPreview>

      {/* ── Critérios customizados ── */}
      <ComponentPreview title="Critérios customizados">
        <div className="w-80">
          <PasswordStrength value="Abc1" criteria={simpleCriteria} />
        </div>
      </ComponentPreview>

      {/* ── Estados da barra ── */}
      <ComponentPreview title="Estados da barra">
        <div className="flex flex-col gap-6 w-80">
          <PasswordStrength value=""         criteria={defaultCriteria} />
          <PasswordStrength value="abc"      criteria={defaultCriteria} />
          <PasswordStrength value="abc12"    criteria={defaultCriteria} />
          <PasswordStrength value="Abc12sym!" criteria={defaultCriteria} />
          <PasswordStrength value="Abc12sym!X" criteria={defaultCriteria} />
        </div>
      </ComponentPreview>

      {/* ── Heading customizado ── */}
      <ComponentPreview title="Heading customizado">
        <div className="w-80">
          <PasswordStrength
            value="Abc1"
            criteria={simpleCriteria}
            heading="Sua senha precisa ter:"
          />
        </div>
      </ComponentPreview>

    </div>
  )
}
