import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BUSINESS } from '../data.js'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const root = useRef(null)

  useGSAP(
    () => {
      // Word-by-word reveal of the lead statement
      const words = gsap.utils.toArray('.about__lead .w')
      gsap.from(words, {
        opacity: 0.12,
        stagger: 0.05,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about__lead',
          start: 'top 80%',
          end: 'bottom 55%',
          scrub: true,
        },
      })

      gsap.from('.about__card', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.about__card', start: 'top 85%' },
      })
    },
    { scope: root }
  )

  const lead =
    'We treat every home like our own — meticulous prep, premium materials, and clean lines that last. One trusted craftsman, start to finish.'

  return (
    <section className="about" id="intro" ref={root}>
      <div className="about__grid">
        <p className="about__eyebrow">The Lotus Standard</p>
        <h2 className="about__lead">
          {lead.split(' ').map((w, i) => (
            <span className="w" key={i}>
              {w}
            </span>
          ))}
        </h2>

        <div className="about__card">
          <div className="about__cardglow" />
          <p className="about__quote">
            “Like the lotus, beautiful work rises out of careful, patient effort. I don’t leave
            until it’s right.”
          </p>
          <div className="about__sig">
            <span className="about__signame">{BUSINESS.owner}</span>
            <span className="about__sigrole">Founder &amp; Lead Craftsman</span>
          </div>
        </div>
      </div>
    </section>
  )
}
