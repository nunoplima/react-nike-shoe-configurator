import { AnimatePresence, motion } from 'framer-motion'
import { FC, startTransition, useState } from 'react'
import { ANIMATION_CONFIG } from '../../constants'
import useCameraControlsContext from '../../context/useCameraControlsContext'
import { EColors, ESides, ESteps, ETextures } from '../../enums'
import { useDebouncedValue } from '../../hooks/useDebouncedValue'
import useCustomizationStore from '../../store/customizationStore'
import { STEPS } from '../../store/customizationStore/useCustomizationStore.contants'
import BottomDrawer from '../ui/BottomDrawer'
import Button from '../ui/Button'
import {
  camelCaseToWords,
  capitalize,
  getKeyFromEnum,
} from './CustomizationControls.functions'
import {
  IActions,
  ICarrousel,
  IColors,
  ITextures,
} from './CustomizationContros.types'

const Actions: FC<IActions> = ({
  stepsKeysArray,
  currentStepIndex,
  isCollapsed,
  handleToogleIsCollapsed,
}) => {
  const cameraControlsRef = useCameraControlsContext()?.cameraControlsRef

  const goToStep = useCustomizationStore((state) => state.goToStep)

  const getNextStepByOffset = (offset: 1 | -1) => {
    const boundedStetpIndex =
      (currentStepIndex + offset + stepsKeysArray.length) %
      stepsKeysArray.length

    return stepsKeysArray[boundedStetpIndex]
  }

  const doGoToStep = (step: ESteps) => {
    startTransition(() => goToStep(step))

    if (!cameraControlsRef?.current) return

    const [camX, camY, camZ] = STEPS[step].lookAtPos[ESides.right]
    cameraControlsRef.current.setPosition(camX, camY, camZ, true)
  }

  const handleGoToPreviousStep = () => {
    const previousStep = getNextStepByOffset(-1)
    doGoToStep(previousStep)
  }

  const handleGoToNextStep = () => {
    const nextStep = getNextStepByOffset(1)
    doGoToStep(nextStep)
  }

  const handleCollapse = () => {
    handleToogleIsCollapsed((prevIsCollapsed) => !prevIsCollapsed)
  }

  return (
    <>
      <button
        onClick={handleCollapse}
        className="absolute left-0 z-10 flex hidden h-10 w-10 items-center justify-center rounded-full border border-lightGrey md:flex"
      >
        <img
          className={`transition ease-in-out ${isCollapsed ? '' : 'duration-400 rotate-180'}`}
          src="/icons/chevron.svg"
        />
      </button>

      <div className="absolute left-2/4 top-0 z-10 flex w-[240px] -translate-x-2/4 justify-between pt-1.5 md:w-[420px]">
        <button onClick={handleGoToPreviousStep}>
          <img className="rotate-180" src="/icons/arrow.svg" />
        </button>

        <button onClick={handleGoToNextStep}>
          <img src="/icons/arrow.svg" />
        </button>
      </div>

      <Button classNames="z-10 absolute right-0 hidden md:flex">
        <img className="h-6 w-6 pr-2" src="/icons/hamburger.svg" />
        Menu
      </Button>
    </>
  )
}

const Carrousel: FC<ICarrousel> = ({
  currentStep,
  currentStepIndex,
  stepsTotal,
  children,
}) => {
  const debouncedCurrentStepIndex = useDebouncedValue(currentStepIndex)

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={currentStep}
        className="relative flex h-40 max-h-[30vh] flex-col items-center justify-between pt-1 md:h-48"
        initial={{
          x: currentStepIndex > debouncedCurrentStepIndex ? '30px' : '-30px',
          opacity: 0,
        }}
        exit={{ opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={ANIMATION_CONFIG}
      >
        <p className="font-sans font-medium">
          {currentStep}
          <span className="ml-2 text-lg text-grey">
            {currentStepIndex + 1} / {stepsTotal}
          </span>
        </p>

        {children}
      </motion.div>
    </AnimatePresence>
  )
}

const Textures: FC<ITextures> = ({ currentStep }) => {
  const selectTexture = useCustomizationStore((state) => state.selectTexture)
  const steps = useCustomizationStore((state) => state.steps)

  const selectedTexture = steps[currentStep].selectedTexture
  const textures = STEPS[currentStep].textures

  const handleTextureClick = (texture: ETextures) => () => {
    selectTexture(texture)
  }

  return (
    <>
      {!!selectedTexture && !!textures ? (
        <div className="-mx-2 flex w-full justify-center gap-4 overflow-x-auto md:gap-8">
          {textures.map((texture) => (
            <Button
              key={texture}
              onClick={handleTextureClick(texture)}
              classNames={`w-22 pt-1 ${texture === selectedTexture ? 'border-black' : ''}`}
            >
              {capitalize(texture)}
            </Button>
          ))}
        </div>
      ) : null}
    </>
  )
}

const Colors: FC<IColors> = ({ currentStep }) => {
  const selectColor = useCustomizationStore((state) => state.selectColor)
  const steps = useCustomizationStore((state) => state.steps)

  const selectedColor = steps[currentStep].selectedColor
  const colors = STEPS[currentStep].colors

  const handleColorClick = (color: EColors) => () => {
    selectColor(color)
  }

  return (
    <div className="flex w-full justify-center">
      <div className="flex gap-4 overflow-x-auto pb-4">
        {colors.map((color) => (
          <button
            key={color}
            className="relative flex flex-col items-center justify-center first-of-type:pl-6 last-of-type:pr-6"
          >
            <div
              onClick={handleColorClick(color)}
              className={`after:content-[''] after:bg-${getKeyFromEnum(color, EColors)} transition-border relative h-10 w-10 cursor-pointer rounded-full after:h-8 after:w-8 after:rounded-full ${selectedColor === color ? 'border border-lightGrey' : ''} flex items-center justify-center`}
            />

            <AnimatePresence>
              {color === selectedColor && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={ANIMATION_CONFIG}
                  className="absolute -bottom-4 whitespace-nowrap text-xs"
                >
                  {camelCaseToWords(getKeyFromEnum(color, EColors) || '')}
                </motion.p>
              )}
            </AnimatePresence>
          </button>
        ))}
      </div>
    </div>
  )
}

export const CustomizationControls = () => {
  const currentStep = useCustomizationStore((state) => state.currentStep)

  const [isCollapsed, setToggleIsCollapsed] = useState(false)

  const stepsKeysArray = Object.keys(STEPS) as ESteps[]
  const currentStepIndex = stepsKeysArray.findIndex(
    (step) => step === currentStep,
  )

  return (
    <BottomDrawer
      animate={{
        bottom: isCollapsed ? '-140px' : '0px',
      }}
    >
      <Actions
        stepsKeysArray={stepsKeysArray}
        currentStepIndex={currentStepIndex}
        isCollapsed={isCollapsed}
        handleToogleIsCollapsed={setToggleIsCollapsed}
      />

      <Carrousel
        currentStep={currentStep}
        currentStepIndex={currentStepIndex}
        stepsTotal={stepsKeysArray.length}
      >
        <Textures currentStep={currentStep} />

        <Colors currentStep={currentStep} />
      </Carrousel>
    </BottomDrawer>
  )
}
