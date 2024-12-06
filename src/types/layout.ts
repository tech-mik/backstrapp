import { ReactNode } from 'react'

/**
 * The filter searchparams can contain multiple filters, separated by commas:
 * "all,edited,deleted"
 *
 * And it has a All filter by default.
 */
export interface Filters {
  queryKey: string
  type?: 'multiple' | 'single'
  filters: {
    queryValue: string
    id: string
    label: ReactNode
    default?: boolean
  }[]
}
