'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface INavigationLinkProps {
  label: string
  href: string
  icon: React.ReactElement
}

const NavigationLink = ({ label, href, icon }: INavigationLinkProps) => {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <li
      className={cn(
        'group transition-all rounded-md border border-transparent',
        active && 'bg-background border-border ',
      )}>
      <Link
        href={href}
        className='flex justify-start items-center gap-2 px-4 py-1 w-full h-full'>
        <span
          className={cn('text-muted-foreground ', active && 'text-primary')}>
          {icon}
        </span>
        <span
          className={`transition-all ${
            active ? '' : 'group-hover:translate-x-1'
          }`}>
          {label}
        </span>
      </Link>
    </li>
  )
}
export default NavigationLink
