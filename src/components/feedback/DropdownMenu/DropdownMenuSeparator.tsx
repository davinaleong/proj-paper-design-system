import React from 'react';
import type { DropdownMenuSeparatorProps } from './types';
import { cn } from '../../../utils';

export const DropdownMenuSeparator: React.FC<DropdownMenuSeparatorProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      role="separator"
      className={cn('paper-dropdown-menu-separator', className)}
      {...props}
    />
  );
};
