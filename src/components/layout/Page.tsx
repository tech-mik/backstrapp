import { H1, Muted } from '@/components/ui/typogrophy'

interface IPageProps {
  children: React.ReactNode
  title: string
  description: string
  filters?: React.ReactElement
  buttons?: React.ReactElement
}

const Page = ({
  children,
  title,
  description,
  filters,
  buttons,
}: IPageProps) => {
  return (
    <>
      <section className='flex flex-col space-y-3 bg-secondary/50 px-5 lg:px-10 py-4 lg:py-8 border-b w-full h-fit'>
        <H1>{title}</H1>
        <Muted>{description}</Muted>
        {filters || buttons ? (
          <div className='flex md:flex-row flex-col justify-between items-center gap-3 pt-8'>
            {filters && (
              <div className='flex gap-[5px] bg-secondary p-1 border rounded-md w-full md:w-fit h-10 text-sm'>
                {filters}
              </div>
            )}
            {buttons && (
              <div className='flex md:flex-row flex-col gap-2 w-full md:w-fit'>
                {buttons}
              </div>
            )}
          </div>
        ) : null}
      </section>
      <section className='p-5 lg:p-10'>{children}</section>
    </>
  )
}
export default Page
