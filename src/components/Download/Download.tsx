import Button from '../ui/Button'

export const Download = () => {
  const handleClick = () => {
    const link = document.createElement('a')
    link.setAttribute('download', 'air-jordan-1-by-you.webp')
    link.setAttribute(
      'href',
      document
        .querySelector('canvas')!
        .toDataURL('image/webp')
        .replace('image/webp', 'image/octet-stream'),
    )
    link.click()
  }

  return (
    <div className="absolute right-0 top-0 px-5 pt-11 font-sans text-sm font-medium md:px-14">
      <Button classNames="rounded-full bg-white p-2" onClick={handleClick}>
        <img src="icons/upload.svg" />
      </Button>
    </div>
  )
}
