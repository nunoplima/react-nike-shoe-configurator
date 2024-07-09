import { useTexture } from '@react-three/drei'
import { useMemo } from 'react'
import * as THREE from 'three'
import { ETextures } from '../enums'

export const useTextures = () => {
  const woodTextureProps = useTexture({
    normalMap: '/textures/wood/Wood_Wicker_009_normal.jpg',
    roughnessMap: '/textures/wood/Wood_Wicker_009_roughness.jpg',
    aoMap: '/textures/wood/Wood_Wicker_009_ambientOcclusion.jpg',
    opacityMap: '/textures/wood/Wood_Wicker_009_opacity.jpg',
  })

  woodTextureProps.normalMap.repeat.set(16, 16)
  woodTextureProps.roughnessMap.repeat.set(16, 16)
  woodTextureProps.aoMap.repeat.set(16, 16)
  woodTextureProps.opacityMap.repeat.set(16, 16)
  woodTextureProps.normalMap.wrapS = woodTextureProps.normalMap.wrapT =
    THREE.MirroredRepeatWrapping
  woodTextureProps.roughnessMap.wrapS = woodTextureProps.roughnessMap.wrapT =
    THREE.MirroredRepeatWrapping
  woodTextureProps.aoMap.wrapS = woodTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping
  woodTextureProps.opacityMap.wrapS = woodTextureProps.opacityMap.wrapT =
    THREE.RepeatWrapping

  const leatherTextureProps = useTexture({
    normalMap: '/textures/leather/leather_008_normal.jpg',
    roughnessMap: '/textures/leather/leather_008_roughness.jpg',
    aoMap: '/textures/leather/leather_008_ambientOcclusion.jpg',
  })

  leatherTextureProps.normalMap.repeat.set(3, 3)
  leatherTextureProps.roughnessMap.repeat.set(3, 3)
  leatherTextureProps.aoMap.repeat.set(3, 3)
  leatherTextureProps.normalMap.wrapS = leatherTextureProps.normalMap.wrapT =
    THREE.MirroredRepeatWrapping
  leatherTextureProps.roughnessMap.wrapS =
    leatherTextureProps.roughnessMap.wrapT = THREE.MirroredRepeatWrapping
  leatherTextureProps.aoMap.wrapS = leatherTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping

  const fabricTextureProps = useTexture({
    normalMap: '/textures/fabric/Fabric_Knitted_006_normal.jpg',
    roughnessMap: '/textures/fabric/Fabric_Knitted_006_roughness.jpg',
    aoMap: '/textures/fabric/Fabric_Knitted_006_ambientOcclusion.jpg',
  })

  fabricTextureProps.normalMap.repeat.set(6, 6)
  fabricTextureProps.roughnessMap.repeat.set(6, 6)
  fabricTextureProps.aoMap.repeat.set(6, 6)
  fabricTextureProps.normalMap.wrapS = fabricTextureProps.normalMap.wrapT =
    THREE.MirroredRepeatWrapping
  fabricTextureProps.roughnessMap.wrapS =
    fabricTextureProps.roughnessMap.wrapT = THREE.MirroredRepeatWrapping
  fabricTextureProps.aoMap.wrapS = fabricTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping

  const textures = useMemo(
    () => ({
      [ETextures.leather]: leatherTextureProps,
      [ETextures.wood]: woodTextureProps,
      [ETextures.fabric]: fabricTextureProps,
    }),
    [leatherTextureProps, fabricTextureProps, woodTextureProps],
  )

  return textures
}
