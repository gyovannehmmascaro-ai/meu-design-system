import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputGroupProps extends React.ComponentProps<"div"> {}

function InputGroup({ className, children, ...props }: InputGroupProps) {
  return (
    <div
      className={cn(
        "flex items-stretch",
        // altura auto para que o padding controle, não h-{size} fixo
        "[&>*]:h-auto",
        // colapsa bordas entre elementos adjacentes
        "[&>*:not(:first-child)]:-ml-px",
        // remove border-radius nos lados internos
        "[&>*:first-child]:rounded-r-none",
        "[&>*:last-child]:rounded-l-none",
        "[&>*:not(:first-child):not(:last-child)]:rounded-none",
        // elemento focado fica acima para a borda aparecer completa
        "[&>*:focus-within]:relative [&>*:focus-within]:z-10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { InputGroup }
