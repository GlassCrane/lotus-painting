// Full-screen film-grain + plaster texture overlay for cinematic depth.
export default function GrainOverlay() {
  return (
    <svg className="grain" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <filter id="grainFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grainFilter)" />
    </svg>
  )
}
