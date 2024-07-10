import { EColors, ESides, ESteps, ETextures } from '../../enums'

export const FIRST_STEP = ESteps.body

export const FIRST_STEP_CAMERA_POSITION: [number, number, number] = [
  -0.2, 1.5, 6.2,
]
export const INITIAL_CAMERA_POSITION: [number, number, number] = [
  FIRST_STEP_CAMERA_POSITION[0],
  FIRST_STEP_CAMERA_POSITION[1],
  -1 * FIRST_STEP_CAMERA_POSITION[2],
]

export const STEPS = {
  [FIRST_STEP]: {
    cameraPos: {
      [ESides.right]: FIRST_STEP_CAMERA_POSITION,
      [ESides.left]: INITIAL_CAMERA_POSITION,
    },
    textures: undefined,
    colors: [
      EColors.light,
      EColors.black,
      EColors.wolfGrey,
      EColors.hemp,
      EColors.mintFoam,
    ],
  },

  [ESteps.tongue]: {
    cameraPos: {
      [ESides.right]: [-6, 3, 0],
      [ESides.left]: [-6, 3, 0],
    },
    textures: [ETextures.fabric, ETextures.leather],
    colors: [
      EColors.light,
      EColors.black,
      EColors.wolfGrey,
      EColors.hemp,
      EColors.red,
      EColors.bleachCoral,
      EColors.mintFoam,
    ],
  },
  [ESteps.eyestay]: {
    cameraPos: {
      [ESides.right]: [-6, 3, 0],
      [ESides.left]: [-6, 3, 0],
    },
    textures: [ETextures.fabric, ETextures.leather, ETextures.wood],
    colors: [
      EColors.light,
      EColors.wolfGrey,
      EColors.blue,
      EColors.hemp,
      EColors.red,
      EColors.mintFoam,
    ],
  },
  [ESteps.mudguard]: {
    cameraPos: {
      [ESides.right]: [-6, 3, 3],
      [ESides.left]: [-6, 3, -3],
    },
    textures: [ETextures.fabric, ETextures.leather],
    colors: [
      EColors.light,
      EColors.wolfGrey,
      EColors.blue,
      EColors.hemp,
      EColors.red,
      EColors.bleachCoral,
      EColors.mintFoam,
    ],
  },
  [ESteps.swoosh]: {
    cameraPos: {
      [ESides.right]: [2, 1.5, 4],
      [ESides.left]: [2, 1.5, -4],
    },
    textures: [ETextures.fabric, ETextures.leather, ETextures.wood],
    colors: [
      EColors.light,
      EColors.black,
      EColors.wolfGrey,
      EColors.blue,
      EColors.hemp,
      EColors.red,
      EColors.mintFoam,
    ],
  },
  [ESteps.laces]: {
    cameraPos: {
      [ESides.right]: [-6, 3, 0],
      [ESides.left]: [-6, 3, 0],
    },
    textures: undefined,
    colors: [
      EColors.light,
      EColors.black,
      EColors.wolfGrey,
      EColors.hemp,
      EColors.mintFoam,
      EColors.red,
    ],
  },
  [ESteps.heel]: {
    cameraPos: {
      [ESides.right]: [6.5, 2, 0],
      [ESides.left]: [6.5, 2, 0],
    },
    textures: [ETextures.fabric, ETextures.leather, ETextures.wood],
    colors: [
      EColors.light,
      EColors.wolfGrey,
      EColors.blue,
      EColors.hemp,
      EColors.red,
      EColors.bleachCoral,
      EColors.mintFoam,
    ],
  },
  [ESteps.airLogo]: {
    cameraPos: {
      [ESides.right]: [2, 3, 4],
      [ESides.left]: [2, 3, -4],
    },
    textures: undefined,
    colors: [
      EColors.light,
      EColors.black,
      EColors.wolfGrey,
      EColors.hemp,
      EColors.red,
      EColors.mintFoam,
    ],
  },
  [ESteps.upperSole]: {
    cameraPos: {
      [ESides.right]: [3.5, 2, 5.5],
      [ESides.left]: [3.5, 2, 5.5],
    },
    textures: undefined,
    colors: [
      EColors.light,
      EColors.black,
      EColors.blue,
      EColors.hemp,
      EColors.red,
      EColors.bleachCoral,
      EColors.mintFoam,
    ],
  },
  [ESteps.sole]: {
    cameraPos: {
      [ESides.right]: [-4, -3, 0],
      [ESides.left]: [-4, -3, 0],
    },
    textures: undefined,
    colors: [
      EColors.light,
      EColors.black,
      EColors.blue,
      EColors.hemp,
      EColors.red,
      EColors.bleachCoral,
      EColors.mintFoam,
    ],
  },
}

export const INITIAL_STEPS = {
  [ESteps.body]: {
    selectedTexture: undefined,
    selectedColor: EColors.light,
  },
  [ESteps.tongue]: {
    selectedTexture: ETextures.leather,
    selectedColor: EColors.light,
  },
  [ESteps.eyestay]: {
    selectedTexture: ETextures.leather,
    selectedColor: EColors.blue,
  },
  [ESteps.mudguard]: {
    selectedTexture: ETextures.leather,
    selectedColor: EColors.blue,
  },
  [ESteps.swoosh]: {
    selectedTexture: ETextures.leather,
    selectedColor: EColors.black,
  },
  [ESteps.laces]: {
    selectedTexture: undefined,
    selectedColor: EColors.black,
  },
  [ESteps.heel]: {
    selectedTexture: ETextures.leather,
    selectedColor: EColors.blue,
  },
  [ESteps.airLogo]: {
    selectedTexture: undefined,
    selectedColor: EColors.black,
  },
  [ESteps.upperSole]: {
    selectedTexture: undefined,
    selectedColor: EColors.light,
  },
  [ESteps.sole]: {
    selectedTexture: undefined,
    selectedColor: EColors.blue,
  },
}
