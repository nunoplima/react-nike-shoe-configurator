import { useTexture } from '@react-three/drei'
import { useMemo } from 'react'
import * as THREE from 'three'
import { ETextures } from '../enums'

export const useTextures = () => {
  const plasticTextureProps = useTexture({
    normalMap: './textures/plastic/Plastic_Rough_001_normal.jpg',
    roughnessMap: './textures/plastic/Plastic_Rough_001_roughness.jpg',
    aoMap: './textures/plastic/Plastic_Rough_001_ambientOcclusion.jpg',
  })

  plasticTextureProps.normalMap.repeat.set(9, 9)
  plasticTextureProps.roughnessMap.repeat.set(9, 9)
  plasticTextureProps.aoMap.repeat.set(9, 9)
  plasticTextureProps.normalMap.wrapS = plasticTextureProps.normalMap.wrapT =
    THREE.MirroredRepeatWrapping
  plasticTextureProps.roughnessMap.wrapS =
    plasticTextureProps.roughnessMap.wrapT = THREE.MirroredRepeatWrapping
  plasticTextureProps.aoMap.wrapS = plasticTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping

  const woodTextureProps = useTexture({
    normalMap: './textures/wood/Wood_Wicker_009_normal.jpg',
    roughnessMap: './textures/wood/Wood_Wicker_009_roughness.jpg',
    aoMap: './textures/wood/Wood_Wicker_009_ambientOcclusion.jpg',
    opacityMap: './textures/wood/Wood_Wicker_009_opacity.jpg',
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
    normalMap: './textures/leather/leather_008_normal.jpg',
    roughnessMap: './textures/leather/leather_008_roughness.jpg',
    aoMap: './textures/leather/leather_008_ambientOcclusion.jpg',
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

  const suedeTextureProps = useTexture({
    normalMap: './textures/suede/suede_005_normal.jpg',
    roughnessMap: './textures/suede/suede_005_roughness.jpg',
    aoMap: './textures/suede/suede_005_ambientOcclusion.jpg',
  })

  suedeTextureProps.normalMap.repeat.set(22, 22)
  suedeTextureProps.roughnessMap.repeat.set(22, 22)
  suedeTextureProps.aoMap.repeat.set(22, 22)
  suedeTextureProps.normalMap.wrapS = suedeTextureProps.normalMap.wrapT =
    THREE.MirroredRepeatWrapping
  suedeTextureProps.roughnessMap.wrapS = suedeTextureProps.roughnessMap.wrapT =
    THREE.MirroredRepeatWrapping
  suedeTextureProps.aoMap.wrapS = suedeTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping

  const ropeTextureProps = useTexture({
    normalMap: './textures/rope/Rope_001_normal.jpg',
    roughnessMap: './textures/rope/Rope_001_roughness.jpg',
    aoMap: './textures/rope/Rope_001_ambientOcclusion.jpg',
    displacementMap: './textures/rope/Rope_001_height.png',
  })

  ropeTextureProps.normalMap.repeat.set(9, 9)
  ropeTextureProps.roughnessMap.repeat.set(9, 9)
  ropeTextureProps.aoMap.repeat.set(9, 9)
  ropeTextureProps.normalMap.wrapS = ropeTextureProps.normalMap.wrapT =
    THREE.MirroredRepeatWrapping
  ropeTextureProps.roughnessMap.wrapS = ropeTextureProps.roughnessMap.wrapT =
    THREE.MirroredRepeatWrapping
  ropeTextureProps.aoMap.wrapS = ropeTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping

  const textures = useMemo(
    () => ({
      [ETextures.leather]: leatherTextureProps,
      [ETextures.plastic]: plasticTextureProps,
      [ETextures.wood]: woodTextureProps,
      [ETextures.suede]: suedeTextureProps,
      [ETextures.rope]: ropeTextureProps,
    }),
    [
      leatherTextureProps,
      plasticTextureProps,
      ropeTextureProps,
      suedeTextureProps,
      woodTextureProps,
    ],
  )

  return textures
}
