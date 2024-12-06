import { Filters } from '@/types/layout'
import {
  ArrowDown,
  ArrowUp,
  Clock,
  CloudCheck,
} from '@phosphor-icons/react/dist/ssr'

export const filter: Filters = {
  queryKey: 'filter',
  filters: [
    {
      queryValue: 'new',
      id: 'new',
      label: 'New',
    },
    {
      queryValue: 'edited',
      id: 'edited',
      label: 'Edited',
    },
    {
      queryValue: 'deleted',
      id: 'deleted',
      label: 'Deleted',
    },
  ],
}
