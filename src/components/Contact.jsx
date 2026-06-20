import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Brandmark from './Brandmark.jsx'
import { BUSINESS } from '../data.js'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const root = useRef(null)

  useGSAP(
    () => {
      gsap.from('.contact__inner > *', {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.contact__inner', start: 'top 80%' },
      })
      gsap.to('.contact__glow', {
        scale: 1.25,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true },
      })
    },
    { scope: root }
  )

  return (
    <section className="contact" id="contact" ref={root}>
      <div className="contact__glow" aria-hidden="true" />
      <div className="contact__inner">
        <Brandmark variant="mark" className="contact__mark" />
        <p className="eyebrow">Let’s Talk</p>
        <h2 className="contact__title">
          Ready for work you’ll <span className="gold-text">actually love?</span>
        </h2>
        <p className="contact__lead">
          Free estimates across {BUSINESS.area}. Tell {BUSINESS.owner.split(' ')[0]} what you have
          in mind — most quotes come back within a day.
        </p>

        <div className="contact__actions">
          <a className="btn btn--gold btn--lg" href={BUSINESS.phoneHref}>
            Call {BUSINESS.phone}
          </a>
          <a className="btn btn--ghost btn--lg" href={BUSINESS.emailHref}>
            Email Us
          </a>
        </div>

        <div className="contact__rows">
          <a href={BUSINESS.phoneHref}>
            <span>Phone</span>
            {BUSINESS.phone}
          </a>
          <a href={BUSINESS.emailHref}>
            <span>Email</span>
            {BUSINESS.email}
          </a>
          <div>
            <span>Service Area</span>
            {BUSINESS.area}
          </div>
        </div>
      </div>
    </section>
  )
}
