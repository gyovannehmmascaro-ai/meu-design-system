import { ComponentPreview } from "../components/ComponentPreview"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  UserIcon,
  MagnifyingGlassIcon,
  XIcon,
  EyeIcon,
  EyeSlashIcon,
  LockIcon,
  BedIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react"
import { useState } from "react"

// ── Exemplo de toggle de senha ───────────────────────────────────────────────
function PasswordExample() {
  const [visible, setVisible] = useState(false)
  return (
    <Input
      type={visible ? "text" : "password"}
      placeholder="Digite sua senha"
      leadingIcon={<LockIcon weight="bold" />}
      trailingIcon={
        visible
          ? <EyeSlashIcon weight="bold" onClick={() => setVisible(false)} className="cursor-pointer" />
          : <EyeIcon weight="bold" onClick={() => setVisible(true)} className="cursor-pointer" />
      }
    />
  )
}

// ── Exemplo de clearable ─────────────────────────────────────────────────────
function ClearableExample() {
  const [value, setValue] = useState("")
  return (
    <Input
      type="search"
      placeholder="Buscar..."
      leadingIcon={<MagnifyingGlassIcon weight="bold" />}
      trailingIcon={<XIcon weight="bold" />}
      clearable
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  )
}

export function InputPage() {
  return (
    <div className="space-y-10">

      {/* ── Intro ── */}
      <div className="space-y-1">
        <h1 className="text-xl font-bold text-text-heading">Input</h1>
        <p className="text-sm text-text-body max-w-2xl">
          Caixa de entrada de texto. Aceita ícones, addon, botão interno e label empilhado.
        </p>
      </div>

      {/* ── Tamanhos ── */}
      <ComponentPreview title="Tamanhos">
        <div className="flex flex-col gap-3 w-80">
          <Input size="sm"   placeholder="Small" />
          <Input size="base" placeholder="Base" />
          <Input size="lg"   placeholder="Large" />
          <Input size="xl"   placeholder="X-Large" />
        </div>
      </ComponentPreview>

      {/* ── Estados ── */}
      <ComponentPreview title="Estados">
        <div className="flex flex-col gap-3 w-80">
          <Input placeholder="Initial" />
          <Input placeholder="Focused" autoFocus />
          <Input defaultValue="Filled" />
          <Input placeholder="Disabled" disabled />
          <Input readOnly defaultValue="Read-only" />
          <Input intent="success" defaultValue="Success" />
          <Input intent="danger" defaultValue="Danger" />
        </div>
      </ComponentPreview>

      {/* ── Add-on icon ── */}
      <ComponentPreview title="Add-on icon">
        <div className="flex flex-col gap-3 w-80">
          <Input placeholder="Initial"   leadingAddon={<UserIcon weight="bold" />} />
          <Input placeholder="Focused"   leadingAddon={<UserIcon weight="bold" />} autoFocus />
          <Input leadingAddon={<UserIcon weight="bold" />} defaultValue="Filled" />
          <Input placeholder="Disabled"  leadingAddon={<UserIcon weight="bold" />} disabled />
          <Input leadingAddon={<UserIcon weight="bold" />} readOnly defaultValue="Read-only" />
          <Input intent="success" leadingAddon={<UserIcon weight="bold" />} defaultValue="Success" />
          <Input intent="danger"  leadingAddon={<UserIcon weight="bold" />} defaultValue="Danger" />
        </div>
      </ComponentPreview>

      {/* ── Add-on text ── */}
      <ComponentPreview title="Add-on text">
        <div className="flex flex-col gap-3 w-80">
          <Input placeholder="meusite.com" leadingText="https://" />
          <Input placeholder="usuario"     leadingText="@" />
          <Input placeholder="00000-000"   leadingText="+55" />
        </div>
      </ComponentPreview>

      {/* ── Inner button ── */}
      <ComponentPreview title="Inner button (trailingButton)">
        <div className="flex flex-col gap-3 w-80">
          <Input
            placeholder="Placeholder"
            leadingIcon={<UserIcon weight="bold" />}
            trailingButton={
              <Button variant="tertiary" size="xs">
                <ArrowLeftIcon weight="bold" /> Button text <ArrowRightIcon weight="bold" />
              </Button>
            }
          />
        </div>
      </ComponentPreview>

      {/* ── Stacked placeholder ── */}
      <ComponentPreview title="Stacked placeholder">
        <div className="flex gap-3">
          <Input
            type="number"
            defaultValue="3"
            stackedLabel="Bedrooms"
            stackedIcon={<BedIcon weight="bold" />}
            className="w-32"
          />
          <Input
            type="number"
            defaultValue="2"
            stackedLabel="Bathrooms"
            className="w-32"
          />
        </div>
      </ComponentPreview>

      {/* ── Clearable (search) ── */}
      <ComponentPreview title="Clearable">
        <div className="w-80">
          <ClearableExample />
        </div>
      </ComponentPreview>

      {/* ── Password toggle ── */}
      <ComponentPreview title="Password toggle">
        <div className="w-80">
          <PasswordExample />
        </div>
      </ComponentPreview>

    </div>
  )
}
