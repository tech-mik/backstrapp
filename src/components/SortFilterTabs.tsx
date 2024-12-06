'use client'

import { Filters } from '@/types/layout'
import { motion } from 'framer-motion'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type TFiltersProps = {
  filters: Filters
}

const SortFilterTabs = ({ filters }: TFiltersProps) => {
  const searchParams = useSearchParams()
  const currentFilters = searchParams.get(filters.queryKey)
  const pathname = usePathname()
  const router = useRouter()
  const defaultFilter = filters.filters.find((filter) => filter.default)

  function changeFilter(filter: string) {
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set(filters.queryKey, filter)

    router.replace(
      `${pathname}?${newSearchParams.toString().replaceAll('%2C', ',')}`,
      { scroll: false },
    )
  }

  return (
    <>
      {/* If there is no default filter, add a all filter */}
      {/* ALL FILTER */}
      {!defaultFilter && (
        <div
          className={`items-center text-center justify-center flex whitespace-nowrap flex-1 md:flex-auto relative cursor-pointer px-3 py-1 rounded-sm ${
            !currentFilters || currentFilters === 'all'
              ? 'text-primary'
              : 'text-muted-foreground'
          }`}
          key={'all'}
          onClick={() => changeFilter('all')}>
          <span className={`relative z-10`}>All</span>
          {(!currentFilters || currentFilters === 'all') && (
            <motion.span
              layoutId={filters.queryKey}
              className='z-0 absolute inset-0 bg-background rounded-sm'
              transition={{ type: 'just', duration: 0.2 }}
            />
          )}
        </div>
      )}

      {/* OTHER FILTERS */}
      {filters.filters.map((filter) => {
        const isActive =
          (defaultFilter?.id === filter.id && !currentFilters) ||
          currentFilters === filter.queryValue

        return (
          <div
            className={`items-center text-center justify-center flex whitespace-nowrap flex-1 md:flex-auto relative cursor-pointer px-3 py-1 rounded-sm ${
              isActive ? 'text-primary' : 'text-muted-foreground'
            }`}
            key={filter.id}
            onClick={() => changeFilter(filter.queryValue)}>
            <span className={`relative z-10`}>{filter.label}</span>
            {isActive && (
              <motion.span
                layoutId={filters.queryKey}
                className='z-0 absolute inset-0 bg-background rounded-sm'
                transition={{ type: 'just', duration: 0.2 }}
              />
            )}
          </div>
        )
      })}
    </>
  )
}

export default SortFilterTabs
