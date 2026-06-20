import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { STATS } from '../data.js'

gsap.registerPlugin(ScrollTrigger)

export default function Stats() {
  const root = useRef(null)

  useGSAP(
    () => {
      gsap.utils.toArray('.stat').forEach((stat) => {
        const numEl = stat.querySelector('.stat__num')
        const target = Number(numEl.dataset.value)
        const obj = { v: 0 }

        ScrollTrigger.create({
          trigger: stat,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to(obj, {
              v: target,
              duration: 1.6,
              ease: 'power2.out',
              onUpdate: () => {
                numEl.textContent = Math.round(obj.v)
              },
            })
            gsap.from(stat, { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out' })
          },
        })
      })
    },
    { scope: root }
  )

  return (
    <section className="stats" ref={root}>
      <div className="stats__grid">
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat__value">
              <span className="stat__num" data-value={s.value}>
                0
              </span>
              <span className="stat__suffix">{s.suffix}</span>
            </div>
            <span className="stat__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
