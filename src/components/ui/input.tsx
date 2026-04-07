import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// ── CVA ───────────────────────────────────────────────────────────────────────

/**
 * Wrapper do input (a caixa visível).
 * intent = estado externo (success/danger) + disabled/readonly
 * O foco é tratado via focus-within no CSS.
 */
const inputWrapperVariants = cva(
  "group flex items-center border-1 transition-colors",
  {
    variants: {
      size: {
        sm:   "gap-2 px-2.5 py-2   rounded-fig-base",
        base: "gap-2 px-3   py-2.5 rounded-fig-base",
        lg:   "gap-2 px-3.5 py-3   rounded-fig-base",
        xl:   "gap-2 px-4   py-3.5 rounded-fig-base",
      },
      intent: {
        default:
          "bg-bg-neutral-secondary-medium border-border-default-medium focus-within:border-border-brand",
        success:
          "bg-bg-success-soft border-border-success-subtle",
        danger:
          "bg-bg-danger-soft border-border-danger-subtle",
        disabled:
          "bg-bg-neutral-secondary-medium border-border-default-medium cursor-not-allowed",
        readonly:
          "bg-bg-neutral-tertiary border-border-default-medium",
      },
    },
    defaultVariants: { size: "base", intent: "default" },
  }
)

/**
 * Caixa do addon (leadingAddon / leadingText).
 * Fica à esquerda com fundo diferente e borda direita.
 */
const addonBoxVariants = cva(
  [
    "flex shrink-0 items-center justify-center",
    "border-r border-border-default-medium",
    "rounded-l-fig-base text-text-body-subtle",
  ],
  {
    variants: {
      size: {
        sm:   "gap-2 px-2.5 py-2   text-sm leading-5",
        base: "gap-2 px-2.5 py-2.5 text-sm leading-5",
        lg:   "gap-2 px-2.5 py-3   text-base leading-6",
        xl:   "gap-2 px-2.5 py-3.5 text-base leading-6",
      },
      intent: {
        default:  "bg-bg-neutral-tertiary",
        success:  "bg-bg-success-medium",
        danger:   "bg-bg-danger-medium",
        disabled: "bg-bg-neutral-tertiary",
        readonly: "bg-bg-neutral-tertiary",
      },
    },
    defaultVariants: { size: "base", intent: "default" },
  }
)

/**
 * Caixa do input quando há addon (parte direita).
 */
const inputBoxVariants = cva(
  "flex flex-1 min-w-0 items-center rounded-r-fig-base",
  {
    variants: {
      size: {
        sm:   "gap-2 px-2.5 py-2",
        base: "gap-2 px-2.5 py-2.5",
        lg:   "gap-2 px-2.5 py-3",
        xl:   "gap-2 px-2.5 py-3.5",
      },
    },
    defaultVariants: { size: "base" },
  }
)

// ── Tipos ─────────────────────────────────────────────────────────────────────

export type InputIntent = Exclude<
  VariantProps<typeof inputWrapperVariants>["intent"],
  "disabled" | "readonly" | null | undefined
>

export interface InputProps
  extends Omit<React.ComponentProps<"input">, "size"> {
  /** Tamanho visual do input */
  size?: VariantProps<typeof inputWrapperVariants>["size"]
  /** Estado de validação externo */
  intent?: InputIntent
  /** Ícone à esquerda (Default type) */
  leadingIcon?: React.ReactNode
  /** Ícone à direita (clear, olho, alerta...) */
  trailingIcon?: React.ReactNode
  /** Botão interno à direita (Inner button type) */
  trailingButton?: React.ReactNode
  /** Ícone ou elemento em caixa separada à esquerda (Add-on icon type) */
  leadingAddon?: React.ReactNode
  /** Texto em caixa separada à esquerda, ex: "https://" (Add-on text type) */
  leadingText?: string
  /** Mostra X para limpar quando há valor (conveniência para search) */
  clearable?: boolean
  /** Label fixo interno empilhado abaixo do valor (Stacked placeholder type) */
  stackedLabel?: string
  /** Ícone antes do stackedLabel */
  stackedIcon?: React.ReactNode
  className?: string
}

// ── Componente ────────────────────────────────────────────────────────────────

function Input({
  size = "base",
  intent = "default",
  disabled,
  readOnly,
  leadingIcon,
  trailingIcon,
  trailingButton,
  leadingAddon,
  leadingText,
  clearable,
  stackedLabel,
  stackedIcon,
  value,
  defaultValue,
  onChange,
  className,
  ...props
}: InputProps) {
  // Estado interno para clearable
  const inputRef = React.useRef<HTMLInputElement>(null)

  const [internalValue, setInternalValue] = React.useState(defaultValue ?? "")
  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!isControlled) setInternalValue(e.target.value)
    onChange?.(e)
  }

  function handleClear() {
    if (!isControlled) setInternalValue("")
    if (onChange && inputRef.current) {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set
      nativeInputValueSetter?.call(inputRef.current, "")
      inputRef.current.dispatchEvent(new Event("change", { bubbles: true }))
    }
  }

  // Efective intent para CVA
  const effectiveIntent = disabled ? "disabled" : readOnly ? "readonly" : intent

  // Cor dos ícones por intent
  const iconColorClass = {
    default:  "text-text-body-subtle group-focus-within:text-text-fg-brand",
    success:  "text-text-fg-success-strong",
    danger:   "text-text-fg-danger-strong",
    disabled: "text-text-fg-disabled",
    readonly: "text-text-body",
  }[effectiveIntent]

  // Tamanho dos ícones: leading = size-4 (sm/base) ou size-5 (lg/xl)
  const leadingIconSize  = size === "lg" || size === "xl" ? "size-5" : "size-4"
  // Trailing sempre size-4 (intencional no Figma)
  const trailingIconSize = "size-4"

  // Cor e tamanho do texto do input
  const inputTextClass = cn(
    "flex-1 min-w-0 bg-transparent outline-none font-sans",
    "placeholder:text-text-body-subtle [&::-webkit-search-cancel-button]:hidden [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none appearance-none",
    size === "lg" || size === "xl" ? "text-base leading-6" : "text-sm leading-5",
    {
      default:  "text-text-heading",
      success:  "text-text-fg-success-strong",
      danger:   "text-text-fg-danger-strong",
      disabled: "text-text-fg-disabled cursor-not-allowed",
      readonly: "text-text-body",
    }[effectiveIntent]
  )

  // Mostra X se clearable e tem valor
  const showClear = clearable && !!currentValue && !disabled && !readOnly

  // ── Stacked placeholder ───────────────────────────────────────────────────
  if (stackedLabel !== undefined) {
    return (
      <div
        data-slot="input"
        data-intent={effectiveIntent}
        className={cn(
          inputWrapperVariants({ size, intent: effectiveIntent }),
          "flex-col items-center justify-center gap-0.5",
          className
        )}
      >
        <input
          ref={inputRef}
          value={currentValue}
          onChange={handleChange}
          disabled={disabled}
          readOnly={readOnly}
          className={cn(inputTextClass, "text-center w-full")}
          {...props}
        />
        <div className={cn("flex items-center gap-0.5", iconColorClass)}>
          {stackedIcon && (
            <span className={cn("shrink-0", trailingIconSize, iconColorClass)}>
              {stackedIcon}
            </span>
          )}
          <span className="text-xs leading-4 text-text-body-subtle whitespace-nowrap">
            {stackedLabel}
          </span>
        </div>
      </div>
    )
  }

  // ── Add-on (caixa separada à esquerda) ────────────────────────────────────
  if (leadingAddon || leadingText) {
    return (
      <div
        data-slot="input"
        data-intent={effectiveIntent}
        className={cn(
          "group flex items-stretch border-1 rounded-fig-base transition-colors overflow-hidden",
          {
            default:  "bg-bg-neutral-secondary-medium border-border-default-medium focus-within:border-border-brand",
            success:  "bg-bg-success-soft border-border-success-subtle",
            danger:   "bg-bg-danger-soft border-border-danger-subtle",
            disabled: "bg-bg-neutral-secondary-medium border-border-default-medium cursor-not-allowed",
            readonly: "bg-bg-neutral-tertiary border-border-default-medium",
          }[effectiveIntent],
          className
        )}
      >
        {/* Caixa addon */}
        <div className={addonBoxVariants({ size, intent: effectiveIntent })}>
          {leadingAddon ? (
            <span className={cn("shrink-0", leadingIconSize, iconColorClass)}>
              {leadingAddon}
            </span>
          ) : (
            <span className={cn("whitespace-nowrap", iconColorClass)}>
              {leadingText}
            </span>
          )}
        </div>

        {/* Caixa input */}
        <div className={inputBoxVariants({ size })}>
          <input
            ref={inputRef}
            value={currentValue}
            onChange={handleChange}
            disabled={disabled}
            readOnly={readOnly}
            className={inputTextClass}
            {...props}
          />
          {showClear && (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Limpar"
              className={cn("shrink-0 cursor-pointer", trailingIconSize, iconColorClass)}
            >
              {trailingIcon}
            </button>
          )}
          {!showClear && !clearable && trailingIcon && (
            <span className={cn("shrink-0", trailingIconSize, iconColorClass)}>
              {trailingIcon}
            </span>
          )}
        </div>
      </div>
    )
  }

  // ── Default / Inner button ─────────────────────────────────────────────────
  return (
    <div
      data-slot="input"
      data-intent={effectiveIntent}
      className={cn(inputWrapperVariants({ size, intent: effectiveIntent }), className)}
    >
      {/* Leading icon */}
      {leadingIcon && (
        <span className={cn("shrink-0", leadingIconSize, iconColorClass)}>
          {leadingIcon}
        </span>
      )}

      {/* Input */}
      <input
        ref={inputRef}
        value={currentValue}
        onChange={handleChange}
        disabled={disabled}
        readOnly={readOnly}
        className={inputTextClass}
        {...props}
      />

      {/* Clear (clearable) */}
      {showClear && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Limpar"
          className={cn("shrink-0 cursor-pointer", trailingIconSize, iconColorClass)}
        >
          {trailingIcon}
        </button>
      )}

      {/* Trailing icon (quando não clearable ou sem valor) */}
      {!showClear && !clearable && trailingIcon && (
        <span className={cn("shrink-0", trailingIconSize, iconColorClass)}>
          {trailingIcon}
        </span>
      )}

      {/* Inner button */}
      {trailingButton && (
        <span className="shrink-0 flex items-center">
          {trailingButton}
        </span>
      )}
    </div>
  )
}

export { Input }
