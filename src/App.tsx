import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import CustomizationControls from './components/CustomizationControls'
import Download from './components/Download'
import Experience from './components/Experience'
import ShoePrice from './components/ShoePrice'
import { CANVAS_BG } from './constants'
import { CameraControlsContextProvider } from './context/useCameraControlsContext'
import { INITIAL_CAMERA_POSITION } from './store/customizationStore/useCustomizationStore.contants'

function App() {
  return (
    <CameraControlsContextProvider>
      <Canvas
        dpr={[window.devicePixelRatio, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: INITIAL_CAMERA_POSITION }}
        linear
        shadows
      >
        {import.meta.env.DEV && <Perf position="top-left" />}

        <color attach="background" args={[CANVAS_BG]} />

        <Experience />
      </Canvas>

      <ShoePrice />

      <Download />

      <CustomizationControls />
    </CameraControlsContextProvider>
  )
}

export default App
