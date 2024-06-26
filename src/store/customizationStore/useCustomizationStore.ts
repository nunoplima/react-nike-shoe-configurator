import { create } from 'zustand'
import { EColors, ESteps } from '../../enums'
import { INITIAL_STEPS, STEPS } from './useCustomizationStore.contants'
import { ICustomizationStore } from './useCustomizationStore.types'

export const useCustomizationStore = create<ICustomizationStore>((set) => ({
  steps: INITIAL_STEPS,
  currentStep: ESteps.body,
  goToNextStep: () =>
    set((state) => {
      const { currentStep } = state
      const stepsKeysArray = Object.keys(STEPS) as ESteps[]
      const currentStepIndex = stepsKeysArray.findIndex(
        (step) => step === currentStep,
      )
      const nextStepIndex = currentStepIndex + 1
      const nextStep: ESteps =
        stepsKeysArray[Math.min(stepsKeysArray.length - 1, nextStepIndex)]

      return {
        currentStep: nextStep,
      }
    }),
  goToPreviousStep: () =>
    set((state) => {
      const { currentStep } = state
      const stepsKeysArray = Object.keys(STEPS) as ESteps[]
      const currentStepIndex = stepsKeysArray.findIndex(
        (step) => step === currentStep,
      )
      const previousStepIndex = currentStepIndex - 1
      const previousStep: ESteps =
        stepsKeysArray[Math.max(0, previousStepIndex)]

      return {
        currentStep: previousStep,
      }
    }),
  goToStep: (step) => set({ currentStep: step }),
  selectColor: (color: EColors) =>
    set((state) => {
      const { steps, currentStep } = state

      return {
        steps: {
          ...steps,
          [currentStep]: { ...steps[currentStep], selectedColor: color },
        },
      }
    }),
}))
