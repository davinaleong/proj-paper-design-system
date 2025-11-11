import React from 'react';
import { cn } from '../../../utils';

interface DropdownMenuSeparatorProps {
  className?: string;
}

export const DropdownMenuSeparator: React.FC<DropdownMenuSeparatorProps> = ({ 
  className 
}) => {
  return (
    <div 
      className={cn(
        'h-px bg-stone-200 dark:bg-stone-700 my-1 mx-2',
        className
      )}
      role="separator"
    />
  );
};

export default DropdownMenuSeparator;
