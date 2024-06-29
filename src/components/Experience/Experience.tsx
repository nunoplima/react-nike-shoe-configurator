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
      <Environment preset="studio" environmentIntensity={0.3} />
      <ContactShadows opacity={0.4} scale={6} blur={2} far={4} />

      <directionalLight
        position={[-2.4, 3, -1.2]}
        castShadow
        intensity={Math.PI * 1.2}
      />
      <directionalLight
        position={[2.2, 3, -1.2]}
        castShadow
        intensity={Math.PI * 1.2}
      />
      <directionalLight
        position={[-2.4, 3, 1.2]}
        castShadow
        intensity={Math.PI * 1.2}
      />
      <directionalLight
        position={[2.2, 3, 1.2]}
        castShadow
        intensity={Math.PI * 1.2}
      />

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
