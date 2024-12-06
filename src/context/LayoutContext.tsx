'use client'

import { createContext, useContext, useState } from 'react'

interface ILayoutContext {
  isDrawerOpen?: boolean
  toggleDrawer?: () => void
  setIsDrawerOpen?: (value: boolean) => void
}

const LayoutContext = createContext<ILayoutContext>({})

export function LayoutContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  function toggleDrawer() {
    setIsDrawerOpen((prev) => !prev)
  }

  return (
    <LayoutContext.Provider
      value={{ isDrawerOpen, toggleDrawer, setIsDrawerOpen }}>
      {children}
    </LayoutContext.Provider>
  )
}

export const useLayoutContext = () => useContext(LayoutContext)
