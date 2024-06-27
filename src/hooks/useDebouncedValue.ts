import { useEffect, useRef, useState } from 'react'

export const useDebouncedValue = <T = any>(
  value: T,
  wait: number = 400,
  options = { leading: false },
) => {
  const [_value, setValue] = useState(value)
  const mountedRef = useRef(false)
  const timeoutRef = useRef<number | null>(null)
  const cooldownRef = useRef(false)

  const cancel = () => clearTimeout(timeoutRef.current!)

  useEffect(() => {
    if (mountedRef.current) {
      if (!cooldownRef.current && options.leading) {
        cooldownRef.current = true
        setValue(value)
      } else {
        cancel()
        timeoutRef.current = setTimeout(() => {
          cooldownRef.current = false
          setValue(value)
        }, wait)
      }
    }
  }, [value, options.leading, wait])

  useEffect(() => {
    mountedRef.current = true
    return cancel
  }, [])

  return _value
}
