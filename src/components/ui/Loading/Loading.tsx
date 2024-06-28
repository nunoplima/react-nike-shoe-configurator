export const Loading = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <div className="flex h-full w-full flex-col items-center justify-center backdrop-blur-sm">
        <img className="h-20 w-20 animate-spin" src="/icons/spinner.svg" />
      </div>
    </div>
  )
}
