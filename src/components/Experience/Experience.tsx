import {
  CameraControls,
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
} from '@react-three/drei'
import { Suspense } from 'react'
import useCameraControlsContext from '../../context/useCameraControlsContext'
import Shoe from '../Shoe'

export const Loading = () => (
  <Html
    as="div"
    center
    style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <img className="-mt-36 h-20 w-20 animate-spin" src="/icons/spinner.svg" />
  </Html>
)

export const Experience = () => {
  const cameraControlsRef = useCameraControlsContext()?.cameraControlsRef

  return (
    <>
      <Environment preset="studio" environmentIntensity={0.3} />
      <ContactShadows opacity={0.3} scale={7} blur={2} far={4} />

      <ambientLight intensity={0.4} />
      <directionalLight
        position={[-2.2, 3.7, -1]}
        castShadow
        intensity={Math.PI * 1.2}
      />
      <directionalLight
        position={[2.2, 3.7, -1]}
        castShadow
        intensity={Math.PI * 1.2}
      />
      <directionalLight
        position={[-2.2, 3.7, 1]}
        castShadow
        intensity={Math.PI * 1.2}
      />
      <directionalLight
        position={[2.2, 3.7, 1]}
        castShadow
        intensity={Math.PI * 1.3}
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
