'use client'

import { useEffect, useState } from 'react'
import {
  useSearchParams as next_useSearchParams,
  usePathname,
  useRouter,
} from 'next/navigation'

export const useSearchParams = (param: string) => {
  const searchParams = next_useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const [params, setParamsState] = useState<URLSearchParams>(searchParams)

  function setParams(newSearchParams: string[][]) {
    const updatedParams = new URLSearchParams(params)

    newSearchParams.forEach((value, key) => {
      updatedParams.set(value[0], value[1])
    })

    setParamsState(updatedParams)

    router.replace(`${pathname}?${updatedParams.toString()}`)
  }

  return { searchParams: params, setSearchParams: setParams }
}
