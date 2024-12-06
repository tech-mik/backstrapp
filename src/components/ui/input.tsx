import * as React from 'react'

import { cn } from '@/lib/utils'
import { Icon } from '@phosphor-icons/react/dist/lib/types'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: Icon
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon: Icon, icon, className, type, ...props }, ref) => {
    return (
      <div className={cn('relative')}>
        {Icon && (
          <Icon
            className={cn(
              'absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground',
            )}
          />
        )}
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className,
            Icon && 'pl-10',
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
