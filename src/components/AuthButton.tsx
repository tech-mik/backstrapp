import { Button } from '@/components/ui/button'
import { Icon } from '@phosphor-icons/react/dist/lib/types'
import Link from 'next/link'

type TAuthButtonProps =
  | {
      icon: Icon
      href: string
      onClick?: never
    }
  | {
      icon: Icon
      onClick: () => void
      href?: never
    }

const AuthButton = ({ icon, href, onClick }: TAuthButtonProps) => {
  if (href) {
    return (
      <Link href={href} className='h-full aspect-square'>
        <Button
          icon={icon}
          iconProps={{ className: 'w-5 h-5 m-0 p-0', weight: 'regular' }}
          className='flex justify-center items-center p-0 w-full h-full'
          variant={'outline'}
        />
      </Link>
    )
  } else if (onClick) {
    return (
      <Button
        icon={icon}
        iconProps={{ className: 'w-5 h-5 m-0 p-0', weight: 'regular' }}
        className='flex justify-center items-center p-0 h-full aspect-square'
        variant={'outline'}
        onClick={onClick}
      />
    )
  }
}
export default AuthButton
