import {
  CameraControls,
  ContactShadows,
  Environment,
  OrbitControls,
} from '@react-three/drei'
import { Suspense } from 'react'
import useCameraControlsContext from '../../context/useCameraControlsContext'
import Shoe from '../Shoe'
import Loading from '../ui/Loading'

export const Experience = () => {
  const cameraControlsRef = useCameraControlsContext()?.cameraControlsRef

  return (
    <>
      <Environment preset="studio" environmentIntensity={0.6} />
      <ContactShadows
        opacity={0.4}
        scale={6}
        blur={2}
        far={4}
        position-y={-0.3}
      />
      <ambientLight intensity={0.6} />

      <CameraControls ref={cameraControlsRef} enabled />
      <OrbitControls
        maxPolarAngle={Math.PI}
        enablePan={false}
        makeDefault
        maxDistance={Math.PI * 3}
        minDistance={Math.PI * 1.3}
      />

      <Suspense fallback={<Loading />}>
        <Shoe />
      </Suspense>
    </>
  )
}
