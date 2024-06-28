import { EColors, ESides, ESteps, ETextures } from '../../enums'

export const FIRST_STEP = ESteps.body

export const FIRST_STEP_CAMERA_POSITION: [number, number, number] = [
  -2.5, 2, 5.5,
]
export const INITIAL_CAMERA_POSITION: [number, number, number] = [
  FIRST_STEP_CAMERA_POSITION[0],
  FIRST_STEP_CAMERA_POSITION[1],
  -1 * FIRST_STEP_CAMERA_POSITION[2],
]

export const STEPS = {
  [FIRST_STEP]: {
    lookAtPos: {
      [ESides.right]: FIRST_STEP_CAMERA_POSITION,
      [ESides.left]: INITIAL_CAMERA_POSITION,
    },
    textures: undefined,
    colors: [
      EColors.light,
      EColors.wolfGrey,
      EColors.hemp,
      EColors.wornBlue,
      EColors.sanddrift,
    ],
  },

  [ESteps.tongue]: {
    lookAtPos: {
      [ESides.right]: [-6, 3, 0],
      [ESides.left]: [-6, 3, 0],
    },
    textures: [ETextures.suede, ETextures.leather, ETextures.plastic],
    colors: [
      EColors.light,
      EColors.wolfGrey,
      EColors.wornBlue,
      EColors.hemp,
      EColors.red,
      EColors.bleachCoral,
      EColors.mintFoam,
      EColors.sanddrift,
    ],
  },
  [ESteps.eyestay]: {
    lookAtPos: {
      [ESides.right]: [-6, 3, 0],
      [ESides.left]: [-6, 3, 0],
    },
    textures: [
      ETextures.suede,
      ETextures.leather,
      ETextures.plastic,
      ETextures.wood,
    ],
    colors: [
      EColors.light,
      EColors.wolfGrey,
      EColors.wornBlue,
      EColors.hemp,
      EColors.red,
      EColors.bleachCoral,
      EColors.mintFoam,
      EColors.sanddrift,
    ],
  },
  [ESteps.mudguard]: {
    lookAtPos: {
      [ESides.right]: [-6, 3, 3],
      [ESides.left]: [-6, 3, -3],
    },
    textures: [ETextures.suede, ETextures.leather, ETextures.plastic],
    colors: [
      EColors.light,
      EColors.wolfGrey,
      EColors.wornBlue,
      EColors.hemp,
      EColors.red,
      EColors.bleachCoral,
      EColors.mintFoam,
      EColors.sanddrift,
    ],
  },
  [ESteps.swoosh]: {
    lookAtPos: {
      [ESides.right]: [2, 1.5, 4],
      [ESides.left]: [2, 1.5, -4],
    },
    textures: [ETextures.leather, ETextures.plastic, ETextures.wood],
    colors: [
      EColors.light,
      EColors.wolfGrey,
      EColors.wornBlue,
      EColors.hemp,
      EColors.red,
      EColors.bleachCoral,
      EColors.mintFoam,
      EColors.sanddrift,
    ],
  },
  [ESteps.laces]: {
    lookAtPos: {
      [ESides.right]: [-6, 3, 0],
      [ESides.left]: [-6, 3, 0],
    },
    textures: undefined,
    colors: [
      EColors.light,
      EColors.wolfGrey,
      EColors.hemp,
      EColors.wornBlue,
      EColors.sanddrift,
      EColors.red,
    ],
  },
  [ESteps.heel]: {
    lookAtPos: {
      [ESides.right]: [7, 2, 0],
      [ESides.left]: [7, 2, 0],
    },
    textures: [
      ETextures.suede,
      ETextures.leather,
      ETextures.plastic,
      ETextures.wood,
    ],
    colors: [
      EColors.light,
      EColors.wolfGrey,
      EColors.wornBlue,
      EColors.hemp,
      EColors.red,
      EColors.bleachCoral,
      EColors.mintFoam,
      EColors.sanddrift,
    ],
  },
  [ESteps.airLogo]: {
    lookAtPos: {
      [ESides.right]: [2, 3, 4],
      [ESides.left]: [2, 3, -4],
    },
    textures: undefined,
    colors: [
      EColors.light,
      EColors.wolfGrey,
      EColors.wornBlue,
      EColors.hemp,
      EColors.red,
      EColors.bleachCoral,
      EColors.mintFoam,
      EColors.sanddrift,
    ],
  },
  [ESteps.sole]: {
    lookAtPos: {
      [ESides.right]: [-3.7, -3, 0],
      [ESides.left]: [-3.7, -3, 0],
    },
    textures: undefined,
    colors: [
      EColors.light,
      EColors.wolfGrey,
      EColors.wornBlue,
      EColors.hemp,
      EColors.red,
      EColors.bleachCoral,
      EColors.mintFoam,
      EColors.sanddrift,
    ],
  },
}

export const INITIAL_STEPS = {
  [ESteps.body]: {
    selectedTexture: undefined,
    selectedColor: EColors.hemp,
  },
  [ESteps.tongue]: {
    selectedTexture: ETextures.leather,
    selectedColor: EColors.hemp,
  },
  [ESteps.eyestay]: {
    selectedTexture: ETextures.leather,
    selectedColor: EColors.red,
  },
  [ESteps.mudguard]: {
    selectedTexture: ETextures.leather,
    selectedColor: EColors.red,
  },
  [ESteps.swoosh]: {
    selectedTexture: ETextures.leather,
    selectedColor: EColors.red,
    texture: ETextures.leather,
  },
  [ESteps.laces]: {
    selectedTexture: undefined,
    selectedColor: EColors.red,
  },
  [ESteps.heel]: {
    selectedTexture: ETextures.leather,
    selectedColor: EColors.red,
  },
  [ESteps.airLogo]: {
    selectedTexture: undefined,
    selectedColor: EColors.sanddrift,
  },
  [ESteps.sole]: {
    selectedTexture: undefined,
    selectedColor: EColors.red,
  },
}
