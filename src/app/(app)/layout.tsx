import AuthButtons from '@/components/AuthButtons'
import Navigation from '@/components/layout/Navigation'
import ToggleMenu from '@/components/layout/ToggleMenu'
import Logo from '@/components/Logo'
import { LayoutContextProvider } from '@/context/LayoutContext'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutContextProvider>
      <div className='grid grid-cols-1 lg:grid-cols-[300px,1fr] grid-rows-[70px,1fr] lg:grid-rows-[80px,1fr] bg-background h-full'>
        <div className='flex justify-center items-center col-span-1 col-start-1 row-span-1 row-start-1 bg-secondary border-b'>
          <Logo />
        </div>

        <header className='flex justify-end items-center col-span-1 col-start-1 lg:col-start-2 row-span-1 row-start-1 bg-secondary px-4 lg:px-10 border-b border-l'>
          <ToggleMenu />
          <AuthButtons />
        </header>

        <Navigation />

        <main className='border-x col-span-1 col-start-1 lg:col-start-2 row-start-2'>
          {children}
        </main>
      </div>
    </LayoutContextProvider>
  )
}
export default layout
