'use client'

import { useSearchParams } from 'next/navigation'
import { useRef, useEffect } from 'react'
import { toast } from 'sonner'

const TestToaster = () => {
  const mountedRef = useRef<boolean | null>(null)

  useEffect(() => {
    let timerId: number | string

    if (!mountedRef.current) {
      setTimeout(() => {
        toast('Welcome tester!', {
          description:
            'For testing purposes, the login details are already provided. Enjoy!',
          position: 'top-center',
        })
      })
    }

    mountedRef.current = true

    return () => {
      clearTimeout(timerId)
    }
  }, [])

  return null
}
export default TestToaster
