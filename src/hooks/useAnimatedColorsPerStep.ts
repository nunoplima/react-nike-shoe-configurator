import { SpringValue, useSpring } from '@react-spring/three'
import { useDeferredValue } from 'react'
import { EColors, ESteps } from '../enums'
import useCustomizationStore from '../store/customizationStore'
import { useDebouncedValue } from './useDebouncedValue'

export const useAnimatedColorsPerStep = () => {
  const steps = useCustomizationStore((state) => state.steps)
  const currentStep = useCustomizationStore((state) => state.currentStep)
  const debouncedCurrentStep = useDebouncedValue(currentStep, 1000)
  const deferredCurrentStep = useDeferredValue(currentStep)

  const partShouldBlink = debouncedCurrentStep !== currentStep

  const springColors: Record<string, SpringValue<EColors>> = useSpring({
    [ESteps.body]:
      partShouldBlink && deferredCurrentStep === ESteps.body
        ? EColors.white
        : steps[ESteps.body].selectedColor,
    [ESteps.mudguard]:
      partShouldBlink && deferredCurrentStep === ESteps.mudguard
        ? EColors.white
        : steps[ESteps.mudguard].selectedColor,
    [ESteps.tongue]:
      partShouldBlink && deferredCurrentStep === ESteps.tongue
        ? EColors.white
        : steps[ESteps.tongue].selectedColor,
    [ESteps.laces]:
      partShouldBlink && deferredCurrentStep === ESteps.laces
        ? EColors.white
        : steps[ESteps.laces].selectedColor,
    [ESteps.eyestay]:
      partShouldBlink && deferredCurrentStep === ESteps.eyestay
        ? EColors.white
        : steps[ESteps.eyestay].selectedColor,
    [ESteps.swoosh]:
      partShouldBlink && deferredCurrentStep === ESteps.swoosh
        ? EColors.white
        : steps[ESteps.swoosh].selectedColor,
    [ESteps.heel]:
      partShouldBlink && deferredCurrentStep === ESteps.heel
        ? EColors.white
        : steps[ESteps.heel].selectedColor,
    [ESteps.airLogo]:
      partShouldBlink && deferredCurrentStep === ESteps.airLogo
        ? EColors.white
        : steps[ESteps.airLogo].selectedColor,
    [ESteps.upperSole]:
      partShouldBlink && deferredCurrentStep === ESteps.upperSole
        ? EColors.white
        : steps[ESteps.upperSole].selectedColor,
    [ESteps.sole]:
      partShouldBlink && deferredCurrentStep === ESteps.sole
        ? EColors.white
        : steps[ESteps.sole].selectedColor,
  })

  return {
    bodyColor: springColors[ESteps.body],
    mudguardColor: springColors[ESteps.mudguard],
    tongueColor: springColors[ESteps.tongue],
    lacesColor: springColors[ESteps.laces],
    eyestayColor: springColors[ESteps.eyestay],
    swooshColor: springColors[ESteps.swoosh],
    heelColor: springColors[ESteps.heel],
    airLogoColor: springColors[ESteps.airLogo],
    upperSoleColor: springColors[ESteps.upperSole],
    soleColor: springColors[ESteps.sole],
  }
}
