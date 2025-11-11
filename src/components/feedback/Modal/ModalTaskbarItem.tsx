import { X } from "lucide-react"
import { Typography } from "../../core"
import { IconButton, Button } from "../../forms"
import { cn } from "../../../utils/cn"
import type { ModalTaskbarItemProps } from "./types"

export const ModalTaskbarItem = ({
  title = "Modal",
  icon: Icon,
  color: _color = "default", // Future use for theming
  active = false,
  position = { x: 20, y: 20 },
  className,
  onClick,
  onClose,
}: ModalTaskbarItemProps) => {

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 z-50",
        "transform transition-all duration-300 ease-in-out",
        "hover:scale-105",
        className
      )}
      style={{
        left: position.x || 20,
        bottom: position.y || 20,
      }}
    >
      <div className={cn(
        "flex items-center space-x-2",
        "bg-white/95 backdrop-blur-md",
        "border border-stone-200/60",
        "rounded-lg shadow-xl",
        "px-3 py-2",
        "min-w-48 max-w-64",
        active && "ring-2 ring-blue-500/50",
        "hover:shadow-2xl"
      )}>
        {/* Main button area */}
        <Button
          variant="ghost"
          size="sm"
          icon={Icon}
          onClick={onClick}
          className={cn(
            "flex-1 justify-start text-left",
            "hover:bg-stone-100/50",
            "px-2 py-1"
          )}
        >
          <Typography 
            variant="small" 
            className="text-stone-700 font-medium truncate"
          >
            {title}
          </Typography>
        </Button>

        {/* Close button */}
        <IconButton
          icon={X}
          variant="ghost"
          size="xs"
          color="danger"
          aria-label="Close modal"
          onClick={onClose}
          className={cn(
            "flex-shrink-0",
            "hover:bg-red-50 hover:text-red-600",
            "w-6 h-6"
          )}
        />
      </div>
    </div>
  )
}

ModalTaskbarItem.displayName = "ModalTaskbarItem"
