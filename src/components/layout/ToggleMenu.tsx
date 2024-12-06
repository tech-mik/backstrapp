'use client'

import { Button } from '@/components/ui/button'
import { useLayoutContext } from '@/context/LayoutContext'
import { List } from '@phosphor-icons/react/dist/ssr'

const ToggleMenu = () => {
  const { toggleDrawer } = useLayoutContext()

  return (
    <Button variant='outline' onClick={toggleDrawer} className='lg:hidden'>
      <List />
    </Button>
  )
}
export default ToggleMenu
