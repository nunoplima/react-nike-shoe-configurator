import { ReactNode } from 'react'

interface IButton {
  classNames?: string
  onClick?: () => void
  children: ReactNode | ReactNode[]
}

export type { IButton }
