import { PropsWithChildren } from 'react'

interface IButton extends PropsWithChildren {
  classNames: string
  onClick?: () => void
}

export type { IButton }
