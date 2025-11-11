import { cn } from "../../../utils/cn"
import type { ModalFooterProps } from "./types"

export const ModalFooter = ({
  children,
  className,
  padding = true,
}: ModalFooterProps) => {
  return (
    <div className={cn(
      "flex-shrink-0",
      padding && "p-4",
      "bg-stone-50/50",
      className
    )}>
      {children}
    </div>
  )
}

ModalFooter.displayName = "ModalFooter"
