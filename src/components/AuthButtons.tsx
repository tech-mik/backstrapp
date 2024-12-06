import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Barcode, Bell, CaretDown } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import AuthButton from '@/components/AuthButton'

const AuthButtons = () => {
  return (
    <div className='lg:flex hidden'>
      <div className='flex justify-center items-center gap-1 bg-secondary p-1 border border-r-0 border-border rounded-l-md h-10'>
        <AuthButton icon={Barcode} href='#' />
        <Button
          icon={Bell}
          iconProps={{ className: 'w-5 h-5 m-0 p-0', weight: 'regular' }}
          className='flex justify-center items-center p-0 h-full aspect-square'
          variant={'outline'}
        />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={'outline'}
            className='flex gap-2 px-2 border-border rounded-l-none font-normal'>
            <Avatar className='w-8 h-8'>
              <AvatarImage src='/mik.jpg' alt='Mik ten Holt' />
              <AvatarFallback>MT</AvatarFallback>
            </Avatar>
            Mik ten Holt
            <CaretDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>Hallo content</DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
export default AuthButtons
