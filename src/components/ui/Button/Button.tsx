import { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { IButton } from './Button.types'

export const Button: FC<IButton> = ({
  classNames,
  onClick,
  children,
  ...props
}) => (
  <button
    {...props}
    onClick={onClick}
    className={twMerge(
      'flex items-center justify-center rounded-3xl border border-lightGrey px-[18px] py-1.5',
      classNames,
    )}
  >
    {children}
  </button>
)
