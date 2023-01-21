import { useCallback, useState } from 'react'

type Func = (this: any, ...args: any[]) => any

export default function useUncontrolled<T, H extends Func>(defaultValue: T, handler?: H) {
  const [_value, setValue] = useState(defaultValue)
  const _handler = useCallback(
    function (
      this: ThisType<H>,
      value: H extends (arg: infer T) => any ? T : any,
      ...args: H extends (arg: any, ...args: infer T) => any ? T : any
    ) {
      setValue(value)
      if (handler) handler.call(this, value, ...args)
    },
    [handler]
  )

  return [_value, _handler] as const
}
