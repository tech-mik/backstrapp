const Seperator = () => {
  return (
    <div className='w-full flex gap-2'>
      <SeperatorLine />
      <div className='w-fit text-xs text-muted-foreground'>or</div>
      <SeperatorLine />
    </div>
  )
}

const SeperatorLine = (): React.ReactElement => {
  return (
    <div className='w-full flex flex-col'>
      <div className='h-[calc(50%+1px)] border-b-[1px]'></div>
      <div className='h-[calc(50%-1px)]'></div>
    </div>
  )
}

export default Seperator
