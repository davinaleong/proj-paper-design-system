import { cn } from "../../../utils/cn"
import type { ModalBodyProps } from "./types"

export const ModalBody = ({
  children,
  className,
  padding = true,
}: ModalBodyProps) => {
  return (
    <div className={cn(
      "flex-1 overflow-y-auto",
      padding && "p-6",
      className
    )}>
      {children}
    </div>
  )
}

ModalBody.displayName = "ModalBody"
