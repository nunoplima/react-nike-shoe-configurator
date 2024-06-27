import { create } from 'zustand'
import { EColors, ESteps, ETextures } from '../../enums'
import { INITIAL_STEPS } from './useCustomizationStore.contants'
import { ICustomizationStore } from './useCustomizationStore.types'

export const useCustomizationStore = create<ICustomizationStore>((set) => ({
  steps: INITIAL_STEPS,
  currentStep: ESteps.body,
  goToStep: (step) => set({ currentStep: step }),
  selectTexture: (texture: ETextures) =>
    set((state) => {
      const { steps, currentStep } = state

      return {
        steps: {
          ...steps,
          [currentStep]: { ...steps[currentStep], selectedTexture: texture },
        },
      }
    }),
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
