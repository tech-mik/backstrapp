'use client'

import NavigationSeperator from '@/components/layout/NavigationSeperator'
import { Drawer, DrawerContent } from '@/components/ui/drawer'
import { useLayoutContext } from '@/context/LayoutContext'
import { useMediaQuery } from 'usehooks-ts'
import NavigationLinks from '@/components/layout/NavigationLinks'
import { SelectProject } from '@/components/layout/SelectProject'

const Navigation = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useLayoutContext()
  const isSmallOrMediumScreen = useMediaQuery('(max-width: 1024px)')

  return (
    <>
      {/* LARGE NAV */}
      <nav className='lg:block hidden lg:row-start-2 bg-secondary p-5'>
        <SelectProject />
        <NavigationSeperator />
        <NavigationLinks />
      </nav>

      {/* MOBILE NAV */}
      {isSmallOrMediumScreen && (
        <Drawer
          direction='right'
          open={isDrawerOpen}
          onOpenChange={setIsDrawerOpen}>
          <DrawerContent>
            <nav className='bg-secondary p-5'>
              <NavigationLinks />
            </nav>
          </DrawerContent>
        </Drawer>
      )}
    </>
  )
}

export default Navigation
