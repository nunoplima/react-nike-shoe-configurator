import { useMemo } from 'react'

export const useIsMobile = () =>
  useMemo(() => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent), [])
