export const Footer = () => (
  <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center bg-black p-1">
    <p className="whitespace-nowrap text-[0.6rem] text-white md:text-xs">
      3d model by{' '}
      <span>
        <a
          className="text-wolfGrey underline"
          href="https://sketchfab.com/ar41k"
          target="_blank"
        >
          Ar41k
        </a>
      </span>{' '}
      under{' '}
      <span>
        <a
          className="text-wolfGrey underline"
          href="http://creativecommons.org/licenses/by/4.0/"
          target="_blank"
        >
          CC Attribution
        </a>
      </span>{' '}
      butchered by{' '}
      <span>
        <a
          className="text-wolfGrey underline"
          href="https://linkedin.com/in/nunoplima"
          target="_blank"
        >
          me
        </a>
      </span>
    </p>
  </div>
)
