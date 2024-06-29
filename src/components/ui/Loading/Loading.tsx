import { Html } from '@react-three/drei'

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
