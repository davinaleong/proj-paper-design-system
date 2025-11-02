export type Command = {
  id: string
  name: string
  description?: string
  shortcut?: string[]
  execute: () => void
}

export type CommandPaletteProps = {
  commands?: Command[]
  placeholder?: string
  initialOpen?: boolean
  className?: string
  onOpenChange?: (open: boolean) => void
}
