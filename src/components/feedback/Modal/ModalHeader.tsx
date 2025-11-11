import { Maximize2, Minimize2, Square, X } from "lucide-react"
import { Typography } from "../../core"
import { IconButton } from "../../forms"
import { cn } from "../../../utils/cn"
import type { ModalHeaderProps } from "./types"

export const ModalHeader = ({
  title,
  description,
  icon: Icon,
  minimizable = true,
  maximizable = true,
  closable = true,
  state = "open",
  color = "default",
  optimalTextClasses,
  children,
  className,
  onMinimize,
  onMaximize,
  onClose,
  onRestore: _onRestore, // Future use for window management
}: ModalHeaderProps) => {
  return (
    <div className={cn(
      "flex items-center justify-between p-4",
      "bg-white/50 backdrop-blur-sm",
      className
    )}>
      {/* Left side - Icon, Title, Description */}
      <div className="flex items-center space-x-3 min-w-0 flex-1">
        {Icon && (
          <div className="flex-shrink-0">
            <Icon className={cn(
              "w-5 h-5",
              optimalTextClasses || "text-stone-600"
            )} />
          </div>
        )}
        
        <div className="min-w-0 flex-1">
          {title && (
            <Typography 
              variant="h5" 
              className={cn(
                "font-semibold truncate",
                optimalTextClasses || "text-stone-900"
              )}
            >
              {title}
            </Typography>
          )}
          {description && (
            <Typography 
              variant="small" 
              className={cn(
                "truncate opacity-80",
                optimalTextClasses || "text-stone-600"
              )}
            >
              {description}
            </Typography>
          )}
        </div>
      </div>

      {/* Custom header content */}
      {children && (
        <div className="flex items-center space-x-2">
          {children}
        </div>
      )}

      {/* Right side - Control buttons */}
      <div className="flex items-center space-x-1 flex-shrink-0 ml-3">
        {minimizable && (
          <IconButton
            icon={Minimize2}
            variant="ghost"
            size="sm"
            color={color}
            aria-label="Minimize"
            onClick={onMinimize}
            className="hover:bg-stone-100"
          />
        )}
        
        {maximizable && (
          <IconButton
            icon={state === "open" ? Maximize2 : Square}
            variant="ghost"
            size="sm"
            color={color}
            aria-label={state === "open" ? "Maximize" : "Restore"}
            onClick={onMaximize}
            className="hover:bg-stone-100"
          />
        )}
        
        {closable && (
          <IconButton
            icon={X}
            variant="ghost"
            size="sm"
            color="danger"
            aria-label="Close"
            onClick={onClose}
            className="hover:bg-red-50 hover:text-red-600"
          />
        )}
      </div>
    </div>
  )
}

ModalHeader.displayName = "ModalHeader"
