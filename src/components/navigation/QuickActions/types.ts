import type { LucideIcon } from "lucide-react"

export type QuickAction = {
  id: string
  label: string
  icon: LucideIcon
  onClick: () => void
  disabled?: boolean
  badge?: string | number
}

export type QuickActionsProps = {
  actions: QuickAction[]
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left" | "bottom-center" | "top-center"
  variant?: "fab" | "toolbar" | "menu"
  className?: string
  mainAction?: QuickAction
}