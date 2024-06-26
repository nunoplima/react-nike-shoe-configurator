import { EColors, ESteps, ETextures } from '../../enums'

interface ICustomizationStore {
  steps: {
    [ESteps.body]: {
      selectedColor: EColors
    }
    [ESteps.tongue]: {
      selectedTexture: ETextures
      selectedColor: EColors
    }
    [ESteps.eyestay]: {
      selectedTexture: ETextures
      selectedColor: EColors
    }
    [ESteps.mudGuard]: {
      selectedTexture: ETextures
      selectedColor: EColors
    }
    [ESteps.swoosh]: {
      selectedTexture: ETextures
      selectedColor: EColors
      texture: ETextures
    }
    [ESteps.laces]: {
      selectedColor: EColors
    }
    [ESteps.heel]: {
      selectedTexture: ETextures
      selectedColor: EColors
    }
    [ESteps.airLogo]: {
      selectedColor: EColors
    }
    [ESteps.sole]: {
      selectedColor: EColors
    }
  }
  currentStep: ESteps
  goToNextStep: () => void
  goToPreviousStep: () => void
  goToStep: (step: ESteps) => void
  selectColor: (color: EColors) => void
}

export type { ICustomizationStore }
