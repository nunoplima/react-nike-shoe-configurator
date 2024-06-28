import { SpringValue, useSpring } from '@react-spring/three'
import { EColors, ESteps } from '../enums'
import useCustomizationStore from '../store/customizationStore'
import { useDebouncedValue } from './useDebouncedValue'

export const useAnimatedColorsPerStep = () => {
  const steps = useCustomizationStore((state) => state.steps)
  const currentStep = useCustomizationStore((state) => state.currentStep)
  const debouncedCurrentStep = useDebouncedValue(currentStep, 1000)

  const partShouldBlink = debouncedCurrentStep !== currentStep

  const springColors: Record<string, SpringValue<EColors>> = useSpring({
    [ESteps.body]:
      partShouldBlink && currentStep === ESteps.body
        ? EColors.white
        : steps[ESteps.body].selectedColor,
    [ESteps.mudguard]:
      partShouldBlink && currentStep === ESteps.mudguard
        ? EColors.white
        : steps[ESteps.mudguard].selectedColor,
    [ESteps.tongue]:
      partShouldBlink && currentStep === ESteps.tongue
        ? EColors.white
        : steps[ESteps.tongue].selectedColor,
    [ESteps.laces]:
      partShouldBlink && currentStep === ESteps.laces
        ? EColors.white
        : steps[ESteps.laces].selectedColor,
    [ESteps.eyestay]:
      partShouldBlink && currentStep === ESteps.eyestay
        ? EColors.white
        : steps[ESteps.eyestay].selectedColor,
    [ESteps.swoosh]:
      partShouldBlink && currentStep === ESteps.swoosh
        ? EColors.white
        : steps[ESteps.swoosh].selectedColor,
    [ESteps.heel]:
      partShouldBlink && currentStep === ESteps.heel
        ? EColors.white
        : steps[ESteps.heel].selectedColor,
    [ESteps.airLogo]:
      partShouldBlink && currentStep === ESteps.airLogo
        ? EColors.white
        : steps[ESteps.airLogo].selectedColor,
    [ESteps.sole]:
      partShouldBlink && currentStep === ESteps.sole
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
    soleColor: springColors[ESteps.sole],
  }
}
