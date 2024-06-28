import { Canvas } from '@react-three/fiber'
import CustomizationControls from './components/CustomizationControls'
import Experience from './components/Experience'
import ShoePrice from './components/ShoePrice'
import { CANVAS_BG } from './constants'
import { CameraControlsContextProvider } from './context/useCameraControlsContext'
import { INITIAL_CAMERA_POSITION } from './store/customizationStore/useCustomizationStore.contants'

function App() {
  return (
    <CameraControlsContextProvider>
      <Canvas
        dpr={window.devicePixelRatio}
        linear
        shadows
        camera={{ position: INITIAL_CAMERA_POSITION }}
      >
        <color attach="background" args={[CANVAS_BG]} />
        <Experience />
      </Canvas>

      <ShoePrice />

      <CustomizationControls />
    </CameraControlsContextProvider>
  )
}

export default App
