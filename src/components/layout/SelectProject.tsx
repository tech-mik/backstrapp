'use client'

import { ChevronsUpDown } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { Check } from '@phosphor-icons/react/dist/ssr'

const frameworks = [
  {
    value: 'awfs-summer-2024',
    label: 'Awakenings Summer 2024',
  },
  {
    value: 'awfs-upclose-2024',
    label: 'Awakenings Upclose 2024',
  },
  {
    value: 'awfs-summer-2023',
    label: 'Awakenings Summer 2023',
  },
  {
    value: 'awfs-spring-2023',
    label: 'Awakenings Spring 2023',
  },
]

export function SelectProject() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='justify-between border-border w-[260px]'>
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : 'Select project...'}
          <ChevronsUpDown className='opacity-50 ml-2 w-4 h-4 shrink-0' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='p-0 w-[260px]'>
        <Command>
          <CommandInput placeholder='Search project...' />
          <CommandList>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}>
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === framework.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
