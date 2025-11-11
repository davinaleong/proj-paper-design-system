import React from 'react';
import type { DropdownMenuLabelProps } from './types';
import { cn } from '../../../utils';

export const DropdownMenuLabel: React.FC<DropdownMenuLabelProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      role="group"
      className={cn('paper-dropdown-menu-label', className)}
      {...props}
    >
      {children}
    </div>
  );
};
