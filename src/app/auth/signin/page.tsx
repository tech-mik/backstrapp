import Seperator from '@/app/auth/signin/components/Seperator'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { H1, P } from '@/components/ui/typogrophy'
import { Info, WindowsLogo } from '@phosphor-icons/react/dist/ssr'
import Slider from './components/Slider'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import Logo from '@/components/Logo'
import LogoIcon from '@/components/LogoIcon'
import { login } from '@/actions/auth'

const images = [
  {
    src: '/awake.jpg',
    alt: 'awake',
  },
]

const Signin = async () => {
  return (
    <main className='flex flex-col justify-center items-center bg-background sm:bg-secondary sm:px-10 w-screen h-screen'>
      <div className='flex justify-center sm:justify-start sm:px-5 lg:px-0 sm:pb-8 lg:pb-5 w-full sm:w-[420px] lg:w-full max-w-[1200px]'>
        <span className='sm:block hidden drop-shadow-md'>
          <Logo />
        </span>
        <span className='sm:hidden'>
          <LogoIcon />
        </span>
      </div>
      <Card className='sm:flex shadow-lg lg:w-full max-w-[1200px] overflow-hidden contents'>
        <CardContent className='relative lg:flex hidden p-0 lg:w-[60%]'>
          <Slider images={images} />
        </CardContent>
        <CardContent className='flex flex-col lg:justify-center gap-5 lg:p-10 w-full lg:w-[40%] min-w-[320px] sm:min-w-[420px] max-w-[420px] lg:max-w-[500px] lg:min-h-[600px]'>
          <div className='flex flex-col sm:justify-start items-center sm:items-start lg:p-0 pt-6'>
            <H1 className='text-primary'>Welcome back.</H1>
            <P className='!mt-0 text-muted-foreground'>
              Let&apos;s get started
            </P>
          </div>
          <form className='flex flex-col gap-5 w-full' action={login}>
            <div className='w-full'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                name='email'
                type='email'
                value='example@mail.com'
                placeholder='example@mail.com'
              />
            </div>

            <div className='flex justify-start items-center gap-2'>
              <Checkbox id='remember' name='remember' />
              <Label htmlFor='remember' className='font-normal'>
                Remember me
              </Label>
              <Tooltip delayDuration={0}>
                <TooltipTrigger type='button' asChild>
                  <Info />
                </TooltipTrigger>
                <TooltipContent side='right' className='text-xs'>
                  Stay logged in on your next visit
                </TooltipContent>
              </Tooltip>
            </div>

            <Button className='w-full'>Sign in with email</Button>

            <Seperator />

            <Button
              variant='secondary'
              type='button'
              icon={WindowsLogo}
              className='w-full'>
              Sign in with Microsoft
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}
export default Signin
