import { EColors, ESides, ESteps, ETextures } from '../../enums'

export const STEPS: {
  [ESteps.body]: {
    lookAtPos: {
      [ESides.right]: number[]
      [ESides.left]: number[]
    }
    textures: undefined
    colors: [
      EColors.light,
      EColors.wolfGrey,
      EColors.hemp,
      EColors.wornBlue,
      EColors.sandDrift,
    ]
  }
  [ESteps.tongue]: {
    lookAtPos: {
      [ESides.right]: number[]
      [ESides.left]: number[]
    }
    textures: [ETextures.leather, ETextures.plastic, ETextures.wood]
    colors: [
      EColors.light,
      EColors.wolfGrey,
      EColors.wornBlue,
      EColors.hemp,
      EColors.red,
      EColors.bleachCoral,
      EColors.mintFoam,
      EColors.sandDrift,
    ]
  }
  [ESteps.eyestay]: {
    lookAtPos: {
      [ESides.right]: number[]
      [ESides.left]: number[]
    }
    textures: [ETextures.leather, ETextures.plastic, ETextures.wood]
    colors: [
      EColors.light,
      EColors.wolfGrey,
      EColors.wornBlue,
      EColors.hemp,
      EColors.red,
      EColors.bleachCoral,
      EColors.mintFoam,
      EColors.sandDrift,
    ]
  }
  [ESteps.mudGuard]: {
    lookAtPos: {
      [ESides.right]: number[]
      [ESides.left]: number[]
    }
    textures: [ETextures.leather, ETextures.plastic, ETextures.wood]
    colors: [
      EColors.light,
      EColors.wolfGrey,
      EColors.wornBlue,
      EColors.hemp,
      EColors.red,
      EColors.bleachCoral,
      EColors.mintFoam,
      EColors.sandDrift,
    ]
  }
  [ESteps.swoosh]: {
    lookAtPos: {
      [ESides.right]: number[]
      [ESides.left]: number[]
    }
    textures: [ETextures.leather, ETextures.plastic, ETextures.wood]
    colors: [
      EColors.light,
      EColors.wolfGrey,
      EColors.wornBlue,
      EColors.hemp,
      EColors.red,
      EColors.bleachCoral,
      EColors.mintFoam,
      EColors.sandDrift,
    ]
  }
  [ESteps.laces]: {
    lookAtPos: {
      [ESides.right]: number[]
      [ESides.left]: number[]
    }
    textures: undefined
    colors: [
      EColors.light,
      EColors.wolfGrey,
      EColors.hemp,
      EColors.wornBlue,
      EColors.sandDrift,
    ]
  }
  [ESteps.heel]: {
    lookAtPos: {
      [ESides.right]: number[]
      [ESides.left]: number[]
    }
    textures: [ETextures.leather, ETextures.plastic, ETextures.wood]
    colors: [
      EColors.light,
      EColors.wolfGrey,
      EColors.wornBlue,
      EColors.hemp,
      EColors.red,
      EColors.bleachCoral,
      EColors.mintFoam,
      EColors.sandDrift,
    ]
  }
  [ESteps.airLogo]: {
    lookAtPos: {
      [ESides.right]: number[]
      [ESides.left]: number[]
    }
    textures: undefined
    colors: [
      EColors.light,
      EColors.wolfGrey,
      EColors.wornBlue,
      EColors.hemp,
      EColors.red,
      EColors.bleachCoral,
      EColors.mintFoam,
      EColors.sandDrift,
    ]
  }
  [ESteps.sole]: {
    lookAtPos: {
      [ESides.right]: number[]
      [ESides.left]: number[]
    }
    textures: undefined
    colors: [
      EColors.light,
      EColors.wolfGrey,
      EColors.wornBlue,
      EColors.hemp,
      EColors.red,
      EColors.bleachCoral,
      EColors.mintFoam,
      EColors.sandDrift,
    ]
  }
} = {
  [ESteps.body]: {
    lookAtPos: {
      [ESides.right]: [2, 0, -16],
      [ESides.left]: [2, 0, -16],
    },
    textures: undefined,
    colors: [
      EColors.light,
      EColors.wolfGrey,
      EColors.hemp,
      EColors.wornBlue,
      EColors.sandDrift,
    ],
  },

  [ESteps.tongue]: {
    lookAtPos: {
      [ESides.right]: [2, -2, 0],
      [ESides.left]: [2, -2, 0],
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
      EColors.sandDrift,
    ],
  },
  [ESteps.eyestay]: {
    lookAtPos: {
      [ESides.right]: [2, -2, 0],
      [ESides.left]: [2, -2, 0],
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
      EColors.sandDrift,
    ],
  },
  [ESteps.mudGuard]: {
    lookAtPos: {
      [ESides.right]: [6, -2, -4],
      [ESides.left]: [6, -2, -4],
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
      EColors.sandDrift,
    ],
  },
  [ESteps.swoosh]: {
    lookAtPos: {
      [ESides.right]: [2, 0, -16],
      [ESides.left]: [2, 0, -16],
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
      EColors.sandDrift,
    ],
  },
  [ESteps.laces]: {
    lookAtPos: {
      [ESides.right]: [2, -2, 0],
      [ESides.left]: [2, -2, 0],
    },
    textures: undefined,
    colors: [
      EColors.light,
      EColors.wolfGrey,
      EColors.hemp,
      EColors.wornBlue,
      EColors.sandDrift,
    ],
  },
  [ESteps.heel]: {
    lookAtPos: {
      [ESides.right]: [-3, -2, 0],
      [ESides.left]: [-3, -2, 0],
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
      EColors.sandDrift,
    ],
  },
  [ESteps.airLogo]: {
    lookAtPos: {
      [ESides.right]: [-8, -6, -16],
      [ESides.left]: [-8, -6, -16],
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
      EColors.sandDrift,
    ],
  },
  [ESteps.sole]: {
    lookAtPos: {
      [ESides.right]: [7, 10, 0],
      [ESides.left]: [7, 10, 0],
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
      EColors.sandDrift,
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
  [ESteps.mudGuard]: {
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
    selectedColor: EColors.light,
  },
  [ESteps.sole]: {
    selectedTexture: undefined,
    selectedColor: EColors.red,
  },
}
