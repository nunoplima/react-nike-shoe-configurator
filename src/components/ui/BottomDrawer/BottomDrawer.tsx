import { motion } from 'framer-motion'
import { FC } from 'react'
import { ANIMATION_CONFIG } from '../../../constants'
import { IBottomDrawer } from './BottomDrawer.types'

export const BottomDrawer: FC<IBottomDrawer> = ({ animate, children }) => (
  <motion.div
    initial={false}
    animate={animate}
    transition={ANIMATION_CONFIG}
    className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-between overflow-hidden bg-white py-6 md:px-14"
  >
    <div className="relative w-full">{children}</div>
  </motion.div>
)
