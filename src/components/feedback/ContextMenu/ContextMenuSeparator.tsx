import React from 'react';
import type { ContextMenuSeparatorProps } from './types';
import { cn } from '../../../utils';

export const ContextMenuSeparator: React.FC<ContextMenuSeparatorProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      role="separator"
      className={cn(
        'paper-context-menu-separator',
        'h-px bg-stone-200 dark:bg-stone-700 my-1 mx-2',
        className
      )}
      {...props}
    />
  );
};

export default ContextMenuSeparator;
