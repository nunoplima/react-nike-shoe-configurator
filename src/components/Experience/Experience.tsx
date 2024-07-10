import {
  CameraControls,
  ContactShadows,
  Environment,
  OrbitControls,
} from '@react-three/drei'
import { Suspense } from 'react'
import useCameraControlsContext from '../../context/useCameraControlsContext'
import { useIsMobile } from '../../hooks/useIsMobile'
import Shoe from '../Shoe'
import Loading from '../ui/Loading'

export const Experience = () => {
  const cameraControlsRef = useCameraControlsContext()?.cameraControlsRef
  const isMobile = useIsMobile()

  return (
    <>
      <CameraControls ref={cameraControlsRef} enabled />
      <OrbitControls
        maxPolarAngle={Math.PI}
        enablePan={false}
        enableRotate={false}
        makeDefault
        maxDistance={Math.PI * 3}
        minDistance={Math.PI * 1.3}
      />

      <Environment
        preset="studio"
        environmentIntensity={0.7}
        environmentRotation={[0, 0, Math.PI * 0.2]}
        frames={1}
      />
      <ambientLight intensity={0.6} />

      <Suspense fallback={<Loading />}>
        <Shoe
          position-y={isMobile ? 1.2 : 1.5}
          position-x={isMobile ? 1 : 1.25}
          scale-x={isMobile ? 0.84 : 1.05}
          scale-y={isMobile ? 0.8 : 1}
          scale-z={isMobile ? 0.8 : 1}
        />
        <ContactShadows
          opacity={0.8}
          scale={5}
          blur={2}
          far={28}
          position-y={-0.2}
          resolution={256}
          frames={1}
        />
      </Suspense>
    </>
  )
}
