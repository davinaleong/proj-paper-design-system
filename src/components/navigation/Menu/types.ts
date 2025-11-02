import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"

export type MenuItem = {
  id: string
  label: string
  icon?: LucideIcon
  shortcut?: string[]
  disabled?: boolean
  separator?: boolean
  children?: MenuItem[]
  onClick?: () => void
}

export type MenuProps = {
  items: MenuItem[]
  trigger: ReactNode
  align?: "start" | "center" | "end"
  side?: "top" | "right" | "bottom" | "left"
  className?: string
  disabled?: boolean
}