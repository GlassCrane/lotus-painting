import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WORDS = [
  'Interior',
  'Exterior',
  'Backsplashes',
  'Custom Woodwork',
  'Epoxy Floors',
  'Cabinet Refinishing',
  'Drywall',
  'Handyman',
]

// Velocity-aware marquee: base drift, speeds up with scroll velocity.
export default function Marquee() {
  const root = useRef(null)

  useGSAP(
    () => {
      const track = root.current.querySelector('.marquee__track')
      const base = gsap.to(track, { xPercent: -50, repeat: -1, duration: 22, ease: 'none' })

      ScrollTrigger.create({
        trigger: root.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const v = 1 + Math.min(Math.abs(self.getVelocity()) / 300, 6)
          base.timeScale(self.direction === -1 ? -v : v)
          gsap.to(base, { timeScale: self.direction === -1 ? -1 : 1, duration: 0.6, overwrite: true })
        },
      })
    },
    { scope: root }
  )

  const set = (
    <>
      {WORDS.map((w, i) => (
        <span className="marquee__item" key={i}>
          {w}
          <i className="marquee__dot">✦</i>
        </span>
      ))}
    </>
  )

  return (
    <div className="marquee" ref={root} aria-hidden="true">
      <div className="marquee__track">
        {set}
        {set}
      </div>
    </div>
  )
}
