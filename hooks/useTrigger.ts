import { useCallback, useState } from 'react'

export default function useTrigger(initialValue: boolean) {
  const [value, setValue] = useState(initialValue)
  const toggle = useCallback(() => setValue((value) => !value), [])
  return [value, toggle, setValue] as const
}
