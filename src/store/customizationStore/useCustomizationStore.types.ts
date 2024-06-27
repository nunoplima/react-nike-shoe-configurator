import { EColors, ESteps, ETextures } from '../../enums'

interface ICustomizationStore {
  steps: {
    [ESteps.body]: {
      selectedTexture: undefined
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
      selectedTexture: undefined
      selectedColor: EColors
    }
    [ESteps.heel]: {
      selectedTexture: ETextures
      selectedColor: EColors
    }
    [ESteps.airLogo]: {
      selectedTexture: undefined
      selectedColor: EColors
    }
    [ESteps.sole]: {
      selectedTexture: undefined
      selectedColor: EColors
    }
  }
  currentStep: ESteps
  goToStep: (step: ESteps) => void
  selectTexture: (texture: ETextures) => void
  selectColor: (color: EColors) => void
}

export type { ICustomizationStore }
