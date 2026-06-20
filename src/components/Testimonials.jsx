import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TESTIMONIALS } from '../data.js'

gsap.registerPlugin(ScrollTrigger)

export default function Testimonials() {
  const root = useRef(null)

  useGSAP(
    () => {
      gsap.from('.tcard', {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.tgrid', start: 'top 80%' },
      })
    },
    { scope: root }
  )

  return (
    <section className="testi" ref={root}>
      <div className="testi__head">
        <p className="eyebrow">Kind Words</p>
        <h2 className="section-title">
          Homeowners who <span className="gold-text">noticed the difference.</span>
        </h2>
      </div>

      <div className="tgrid">
        {TESTIMONIALS.map((t, i) => (
          <figure className="tcard" key={i}>
            <span className="tcard__quote">”</span>
            <blockquote>{t.quote}</blockquote>
            <figcaption>
              <span className="tcard__name">{t.name}</span>
              <span className="tcard__role">{t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
