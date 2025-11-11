import React, { useState } from "react"
import type { TreeViewProps, TreeNode } from "./types"
import { cn } from "../../../utils/cn"
import { Typography } from "../../core"
import { Badge } from "../../layout"
import { ChevronRight, ChevronDown, File, Folder, FolderOpen } from "lucide-react"

export const TreeView: React.FC<TreeViewProps> = ({
  data,
  defaultExpanded = [],
  selectedId,
  onSelect,
  className,
  showLines = true,
  showIcons = true,
}) => {
  const [expanded, setExpanded] = useState<Set<string>>(new Set(defaultExpanded))

  const toggleExpanded = (nodeId: string) => {
    setExpanded(prev => {
      const newSet = new Set(prev)
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId)
      } else {
        newSet.add(nodeId)
      }
      return newSet
    })
  }

  const handleNodeClick = (node: TreeNode) => {
    if (node.disabled) return

    if (node.children && node.children.length > 0) {
      toggleExpanded(node.id)
    }

    onSelect?.(node)
    node.onClick?.()
  }

  const getNodeIcon = (node: TreeNode, isExpanded: boolean) => {
    if (node.icon) {
      const NodeIcon = node.icon
      return <NodeIcon className="w-4 h-4" />
    }

    if (node.children && node.children.length > 0) {
      return isExpanded ? (
        <FolderOpen className="w-4 h-4 text-blue-600" />
      ) : (
        <Folder className="w-4 h-4 text-blue-600" />
      )
    }

    return <File className="w-4 h-4 text-stone-500" />
  }

  const renderNode = (node: TreeNode, level = 0, isLast = false, parentLines: boolean[] = []) => {
    const hasChildren = node.children && node.children.length > 0
    const isExpanded = expanded.has(node.id)
    const isSelected = selectedId === node.id

    return (
      <div key={node.id}>
        <div
          className={cn(
            "flex items-center gap-1 py-1 px-2 rounded-sm cursor-pointer",
            "hover:bg-stone-100 transition-colors",
            isSelected && "bg-blue-100 text-blue-900",
            node.disabled && "opacity-50 cursor-not-allowed"
          )}
          style={{ paddingLeft: `${level * 20 + 8}px` }}
          onClick={() => handleNodeClick(node)}
        >
          {/* Tree lines */}
          {showLines && level > 0 && (
            <div className="absolute left-0 flex">
              {parentLines.map((hasLine, index) => (
                <div
                  key={index}
                  className="w-5 flex justify-center"
                  style={{ left: `${index * 20 + 8}px` }}
                >
                  {hasLine && (
                    <div className="w-px bg-stone-300 h-full" />
                  )}
                </div>
              ))}
              <div
                className="w-5 flex items-center justify-center"
                style={{ left: `${(level - 1) * 20 + 8}px` }}
              >
                <div className="w-px bg-stone-300 h-3" />
                <div className="w-2 h-px bg-stone-300" />
              </div>
            </div>
          )}

          {/* Expand/collapse chevron */}
          {hasChildren ? (
            <button
              className="p-0.5 hover:bg-stone-200 rounded flex-shrink-0"
              onClick={(e) => {
                e.stopPropagation()
                toggleExpanded(node.id)
              }}
            >
              {isExpanded ? (
                <ChevronDown className="w-3 h-3" />
              ) : (
                <ChevronRight className="w-3 h-3" />
              )}
            </button>
          ) : (
            <div className="w-4" />
          )}

          {/* Node icon */}
          {showIcons && (
            <div className="flex-shrink-0">
              {getNodeIcon(node, isExpanded)}
            </div>
          )}

          {/* Node label */}
          <Typography
            variant="body"
            className={cn(
              "flex-1 text-sm",
              isSelected ? "text-blue-900 font-medium" : "text-stone-900",
              node.disabled && "text-stone-400"
            )}
          >
            {node.label}
          </Typography>

          {/* Badge */}
          {node.badge && (
            <Badge
              variant="soft"
              size="sm"
              className="ml-2 flex-shrink-0"
            >
              {node.badge}
            </Badge>
          )}
        </div>

        {/* Children */}
        {hasChildren && isExpanded && (
          <div className="relative">
            {node.children!.map((child, index) => {
              const isChildLast = index === node.children!.length - 1
              const newParentLines = [...parentLines, !isLast]
              
              return renderNode(child, level + 1, isChildLast, newParentLines)
            })}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={cn("space-y-0.5", className)}>
      {data.map((node, index) => {
        const isLast = index === data.length - 1
        return renderNode(node, 0, isLast)
      })}
    </div>
  )
}

TreeView.displayName = "TreeView"

export default TreeView
