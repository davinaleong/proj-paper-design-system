import React from 'react';
import { cn } from '../../../utils';

interface DropdownMenuLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const DropdownMenuLabel: React.FC<DropdownMenuLabelProps> = ({ 
  children, 
  className 
}) => {
  return (
    <div 
      className={cn(
        'px-3 py-2 text-xs font-semibold text-stone-600 dark:text-stone-400 uppercase tracking-wider',
        className
      )}
      role="presentation"
    >
      {children}
    </div>
  );
};

export default DropdownMenuLabel;