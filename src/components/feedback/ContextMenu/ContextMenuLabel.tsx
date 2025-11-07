import React from 'react';
import type { ContextMenuLabelProps } from './types';
import { cn } from '../../../utils';

export const ContextMenuLabel: React.FC<ContextMenuLabelProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      role="presentation"
      className={cn(
        'paper-context-menu-label',
        'px-3 py-1.5 text-xs font-semibold text-stone-500 dark:text-stone-400',
        'uppercase tracking-wider',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default ContextMenuLabel;