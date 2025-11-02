import React, { useEffect, useMemo, useRef, useState } from "react"
import type { CommandPaletteProps, Command } from "./types"
import { cn } from "../../../utils/cn"
import { Paper, Typography } from "../../core"

const isMac = () => typeof navigator !== "undefined" && /Mac|iPod|iPhone|iPad/.test(navigator.platform)

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  commands = [],
  placeholder = "Search commands...",
  initialOpen = false,
  className,
  onOpenChange,
}) => {
  const [open, setOpen] = useState<boolean>(initialOpen)
  const [query, setQuery] = useState<string>("")
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const listRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => onOpenChange?.(open), [open, onOpenChange])

  // Global hotkey: Ctrl/Cmd + K to toggle
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const mod = isMac() ? e.metaKey : e.ctrlKey
      if (mod && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === "Escape") {
        setOpen(false)
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 0)
    } else {
      setQuery("")
      setActiveIndex(0)
    }
  }, [open])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter((c) => {
      return (
        c.name.toLowerCase().includes(q) ||
        (c.description || "").toLowerCase().includes(q)
      )
    })
  }, [commands, query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === "Enter") {
      e.preventDefault()
      const cmd = filtered[activeIndex]
      if (cmd) {
        cmd.execute()
        setOpen(false)
      }
    }
  }

  const handleClickItem = (cmd: Command) => {
    cmd.execute()
    setOpen(false)
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-28"
      aria-hidden={!open}
    >
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      <Paper
        className={cn(
          "relative w-full max-w-2xl mx-auto shadow-xl border border-stone-200",
          className
        )}
      >
        <div className="p-4">
          <div className="flex items-center gap-3">
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setActiveIndex(0)
              }}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              className="w-full bg-transparent placeholder:text-stone-400 text-stone-900 outline-none px-2 py-2 text-sm"
              aria-label="Command palette input"
            />
            <div className="text-xs text-stone-500">Press {isMac() ? "⌘K" : "Ctrl+K"}</div>
          </div>

          <div ref={listRef} className="mt-3 max-h-64 overflow-auto">
            {filtered.length === 0 ? (
              <div className="p-3 text-sm text-stone-500">No results</div>
            ) : (
              filtered.map((cmd, idx) => (
                <button
                  key={cmd.id}
                  onClick={() => handleClickItem(cmd)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={cn(
                    "w-full text-left p-3 rounded-md flex flex-col",
                    idx === activeIndex
                      ? "bg-stone-100 dark:bg-gray-800"
                      : "hover:bg-stone-50"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <Typography variant="body" className="font-medium">
                      {cmd.name}
                    </Typography>
                    {cmd.shortcut ? (
                      <div className="flex items-center gap-1 text-xs text-stone-500">
                        {cmd.shortcut.map((s) => (
                          <kbd key={s} className="px-1 bg-gray-100 rounded text-[10px]">
                            {s}
                          </kbd>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  {cmd.description ? (
                    <Typography variant="caption" className="text-stone-600 mt-1">
                      {cmd.description}
                    </Typography>
                  ) : null}
                </button>
              ))
            )}
          </div>
        </div>
      </Paper>
    </div>
  )
}

CommandPalette.displayName = "CommandPalette"

export default CommandPalette
