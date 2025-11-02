import type { LucideIcon } from "lucide-react"

export type TreeNode = {
  id: string
  label: string
  icon?: LucideIcon
  badge?: string | number
  disabled?: boolean
  children?: TreeNode[]
  href?: string
  onClick?: () => void
}

export type TreeViewProps = {
  data: TreeNode[]
  defaultExpanded?: string[]
  selectedId?: string
  onSelect?: (node: TreeNode) => void
  className?: string
  showLines?: boolean
  showIcons?: boolean
}