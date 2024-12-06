import NavigationLink from '@/components/layout/NavigationLink'
import NavigationSeperator from '@/components/layout/NavigationSeperator'
import { Icon } from '@phosphor-icons/react/dist/lib/types'
import {
  Briefcase,
  Calendar,
  Clipboard,
  HardHat,
  HourglassHigh,
  Layout,
  ListChecks,
  Scissors,
  Toolbox,
  Truck,
} from '@phosphor-icons/react/dist/ssr'

interface INav {
  [key: string]: {
    label: string
    icon: Icon
    href: string
  }[]
}

const nav: INav = {
  general: [
    {
      label: 'Dashboard',
      icon: Layout,
      href: '/',
    },
    {
      label: 'Calendar',
      icon: Calendar,
      href: '/calendar',
    },
    {
      label: 'Office',
      icon: Briefcase,
      href: '/office',
    },
  ],

  production: [
    {
      label: 'Planner',
      icon: ListChecks,
      href: '/planner',
    },
    {
      label: 'Materials',
      icon: Toolbox,
      href: '/materials',
    },
    {
      label: 'Lists',
      icon: Clipboard,
      href: '/lists',
    },
  ],

  office: [
    {
      label: 'Guest List',
      icon: HourglassHigh,
      href: '/guest-list',
    },
    {
      label: 'Crew List',
      icon: HardHat,
      href: '/crew-list',
    },
    {
      label: 'Suppliers',
      icon: Truck,
      href: '/suppliers',
    },
    {
      label: 'Material Inventory',
      icon: Scissors,
      href: '/material-inventory',
    },
  ],
}

const NavigationLinks = () => {
  return Object.keys(nav).map((category) => {
    return (
      <>
        <div key={category} className='space-y-[10px]'>
          <h2 className='px-1 font-medium text-muted-foreground text-sm capitalize'>
            {category}
          </h2>
          <ul className='space-y-1'>
            {nav[category].map((item) => {
              return (
                <NavigationLink
                  key={item.href}
                  {...item}
                  icon={<item.icon weight='light' />}></NavigationLink>
              )
            })}
          </ul>
        </div>
        <NavigationSeperator />
      </>
    )
  })
}
export default NavigationLinks
