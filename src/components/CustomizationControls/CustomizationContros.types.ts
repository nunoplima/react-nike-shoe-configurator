import { PropsWithChildren } from 'react'
import { ESteps } from '../../enums'

interface IActions {
  stepsKeysArray: ESteps[]
  currentStepIndex: number
  isCollapsed: boolean
  handleToogleIsCollapsed: (fn: (prev: boolean) => boolean) => void
}

interface ICarrousel extends PropsWithChildren {
  currentStep: ESteps
  currentStepIndex: number
  stepsTotal: number
}

interface ITextures {
  currentStep: ESteps
}

interface IColors {
  currentStep: ESteps
}

export type { IActions, ICarrousel, IColors, ITextures }
