import * as React from "react"
import { Slot } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // ── Tamanho de SVG não é global — cada size define o seu via [&_svg:not([class*='size-'])]:size-X (Figma) ──
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-fig text-sm font-medium transition-all shadow-[0px_1px_0.5px_0px_rgba(29,41,61,0.02)] disabled:pointer-events-none [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        /* ── Variantes do Figma ── */
        brand:
          // disabled: adiciona borda border-default-medium (Figma: bg-disabled + border-default-medium + text-fg-disabled)
          "bg-bg-brand text-text-white hover:bg-bg-brand-strong disabled:bg-bg-disabled disabled:border disabled:border-border-default-medium disabled:text-text-fg-disabled focus-visible:ring-bg-brand/40",

        secondary:
          "bg-bg-neutral-secondary-medium text-text-body border border-border-default-medium hover:bg-bg-neutral-tertiary disabled:bg-bg-disabled disabled:text-text-fg-disabled focus-visible:ring-border-default",

        tertiary:
          "bg-bg-neutral-primary-soft text-text-body border border-border-default hover:bg-bg-neutral-secondary disabled:bg-bg-disabled disabled:text-text-fg-disabled focus-visible:ring-border-default",

        success:
          "bg-bg-success text-text-white hover:bg-bg-success-strong disabled:bg-bg-disabled disabled:text-text-fg-disabled focus-visible:ring-bg-success/40",

        danger:
          "bg-bg-danger text-text-white hover:bg-bg-danger-strong disabled:bg-bg-disabled disabled:text-text-fg-disabled focus-visible:ring-bg-danger/40",

        warning:
          "bg-bg-warning text-text-white hover:bg-bg-warning-strong disabled:bg-bg-disabled disabled:text-text-fg-disabled focus-visible:ring-bg-warning/40",

        dark:
          "bg-bg-dark text-text-white hover:bg-bg-dark-strong disabled:bg-bg-disabled disabled:text-text-fg-disabled focus-visible:ring-bg-dark/40",

        ghost:
          "bg-transparent text-text-heading hover:bg-bg-neutral-secondary disabled:text-text-fg-disabled focus-visible:ring-border-default shadow-none",

        info:
          "bg-bg-info text-text-white hover:bg-bg-info-strong disabled:bg-bg-disabled disabled:text-text-fg-disabled focus-visible:ring-bg-info/40",

        /* ── Variantes do shadcn (mantidas para compatibilidade) ── */
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        "secondary-shadcn":
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        "ghost-shadcn":
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link:
          "text-primary underline-offset-4 hover:underline shadow-none",
      },
      outline: {
        true: "",
        false: "",
      },
      size: {
        // Figma icon sizes por size de botão de texto: xs=14px, sm/base/lg=16px, xl=20px
        xs:      "h-8  px-3  py-1.5 text-xs  [&_svg:not([class*='size-'])]:size-3.5",
        sm:      "h-9  px-3  py-2             [&_svg:not([class*='size-'])]:size-4",
        default: "h-10 px-4  py-2.5          [&_svg:not([class*='size-'])]:size-4",
        lg:      "h-12 px-5  py-3   text-base [&_svg:not([class*='size-'])]:size-4",
        xl:      "h-13 px-6  py-3.5 text-base [&_svg:not([class*='size-'])]:size-5",
        // Figma icon sizes por size icon-only: xs=14px, sm=16px, base/l/xl=20px
        "icon-xs": "size-8  [&_svg:not([class*='size-'])]:size-3.5",
        "icon-sm": "size-9  [&_svg:not([class*='size-'])]:size-4",
        icon:      "size-10 [&_svg:not([class*='size-'])]:size-5",
        "icon-lg": "size-11 [&_svg:not([class*='size-'])]:size-5",
        "icon-xl": "size-12 [&_svg:not([class*='size-'])]:size-5",
      },
    },
    compoundVariants: [
      {
        variant: "success",
        outline: true,
        class:
          "bg-transparent border border-border-success text-text-fg-success hover:bg-bg-success-strong hover:text-text-white disabled:bg-bg-disabled disabled:border-border-default-medium disabled:text-text-fg-disabled focus-visible:ring-border-success/40",
      },
      {
        variant: "danger",
        outline: true,
        class:
          "bg-transparent border border-border-danger text-text-fg-danger hover:bg-bg-danger-strong hover:text-text-white disabled:bg-bg-disabled disabled:border-border-default-medium disabled:text-text-fg-disabled focus-visible:ring-border-danger/40",
      },
      {
        variant: "warning",
        outline: true,
        class:
          "bg-transparent border border-border-warning text-text-fg-warning-subtle hover:bg-bg-warning-strong hover:text-text-white disabled:bg-bg-disabled disabled:border-border-default-medium disabled:text-text-fg-disabled focus-visible:ring-border-warning/40",
      },
      {
        variant: "info",
        outline: true,
        class:
          "bg-transparent border border-border-blue text-text-fg-infos hover:bg-bg-info-strong hover:text-text-white disabled:bg-bg-disabled disabled:border-border-default-medium disabled:text-text-fg-disabled focus-visible:ring-border-blue/40",
      },
    ],
    defaultVariants: {
      variant: "brand",
      size: "default",
      outline: false,
    },
  }
)

function Button({
  className,
  variant = "brand",
  size = "default",
  outline = false,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, outline, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }