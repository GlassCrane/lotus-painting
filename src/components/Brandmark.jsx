import { useState } from 'react'
import LotusLogo from './LotusLogo.jsx'

// Renders the real logo PNG when present in /public, otherwise falls back to
// the hand-built SVG so the site always looks complete.
//
//   variant="full"  -> lotus + "LOTUS" wordmark  (file: /lotus-logo.png)
//   variant="mark"  -> lotus flower only         (file: /lotus-mark.png)
//
// To use your real artwork, save the files into the project's /public folder
// with those exact names. No code changes needed.
export default function Brandmark({ variant = 'mark', className = '' }) {
  const [failed, setFailed] = useState(false)
  const base = import.meta.env.BASE_URL // '/' in dev, '/lotus-painting/' in build
  const src = variant === 'full' ? `${base}lotus-logo.png` : `${base}lotus-mark.png`

  if (failed) {
    // SVG fallback (mark only). For "full" we add the wordmark beneath it.
    return (
      <span className={`brandmark brandmark--svg ${className}`}>
        <LotusLogo className="brandmark__svg" />
        {variant === 'full' && (
          <span className="brandmark__word">
            <span className="brandmark__name">LOTUS</span>
            <span className="brandmark__sub">Painting &amp; Handy-Man Services</span>
          </span>
        )}
      </span>
    )
  }

  return (
    <img
      className={`brandmark brandmark--img brandmark--${variant} ${className}`}
      src={src}
      alt="Lotus Painting & Handy-Man Services logo"
      onError={() => setFailed(true)}
      draggable="false"
    />
  )
}
