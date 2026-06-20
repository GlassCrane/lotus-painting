import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Brandmark from './Brandmark.jsx'

// Cinematic intro: logo blooms, gold line sweeps, curtain lifts.
export default function Loader({ onComplete }) {
  const root = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete,
      })

      tl.from('.loader__logo', { scale: 0.7, opacity: 0, duration: 1, ease: 'power2.out' })
        .from('.loader__line span', { scaleX: 0, duration: 1, ease: 'power4.inOut' }, '-=0.5')
        .from(
          '.loader__count',
          { opacity: 0, duration: 0.4 },
          '-=1'
        )
        .to('.loader__count', { textContent: 100, duration: 1.1, snap: { textContent: 1 }, ease: 'power1.inOut' }, '<')
        .to('.loader__logo, .loader__meta', { opacity: 0, y: -20, duration: 0.5 }, '+=0.2')
        .to(root.current, {
          yPercent: -100,
          duration: 0.9,
          ease: 'power4.inOut',
        })
        .set(root.current, { display: 'none' })
    },
    { scope: root }
  )

  return (
    <div className="loader" ref={root}>
      <div className="loader__meta">
        <Brandmark variant="full" className="loader__logo" />
        <div className="loader__line">
          <span />
        </div>
        <div className="loader__counter">
          <span className="loader__count">0</span>
          <span className="loader__pct">%</span>
        </div>
      </div>
    </div>
  )
}
