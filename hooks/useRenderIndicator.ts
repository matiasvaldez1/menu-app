import { useRef } from 'react'

export default function useRenderIndicator() {
  const firstRenderRef = useRef(true)

  return {
    ref: firstRenderRef,
    get first() {
      const result = firstRenderRef.current
      if (firstRenderRef.current) {
        firstRenderRef.current = false
      }
      return result
    },
  }
}
