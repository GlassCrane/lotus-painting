import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SERVICES } from '../data.js'

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const root = useRef(null)

  useGSAP(
    () => {
      gsap.from('.services__head > *', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.services__head', start: 'top 82%', once: true },
      })

      // Pure fade-in (no transform) so tiles can NEVER shift out of their grid
      // position — eliminates the "uneven / didn't snap back" issue entirely.
      gsap.set('.svc', { opacity: 0 })
      gsap.to('.svc', {
        opacity: 1,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.06,
        scrollTrigger: { trigger: '.services__grid', start: 'top 88%', once: true },
      })
    },
    { scope: root }
  )

  return (
    <section className="services" id="services" ref={root}>
      <div className="services__head">
        <p className="eyebrow">What We Do</p>
        <h2 className="section-title">
          A full-service craft, <span className="gold-text">under one roof.</span>
        </h2>
        <p className="section-lead">
          From a single accent wall to a whole-home refresh, every job gets the same obsessive
          attention to detail.
        </p>
      </div>

      <div className="services__grid">
        {SERVICES.map((s, i) => (
          <article className="svc" key={s.id}>
            <span className="svc__num">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="svc__title">{s.title}</h3>
            <p className="svc__blurb">{s.blurb}</p>
            <ul className="svc__tags">
              {s.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <span className="svc__shine" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  )
}
