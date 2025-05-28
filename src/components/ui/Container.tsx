import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: 'default' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, as: Component = 'div', size = 'default', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'mx-auto w-full px-4',
          {
            'max-w-7xl': size === 'default',
            'max-w-5xl': size === 'sm',
            'max-w-6xl': size === 'md',
            'max-w-8xl': size === 'lg',
            'max-w-[1400px]': size === 'xl',
            'max-w-full': size === 'full',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';

export { Container };

