import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Brandmark from './Brandmark.jsx'
import { BUSINESS } from '../data.js'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const root = useRef(null)

  useGSAP(
    () => {
      // Entrance
      const tl = gsap.timeline({ delay: 0.35, defaults: { ease: 'power4.out' } })
      tl.from('.hero__mark', { scale: 0.6, opacity: 0, duration: 1.2, ease: 'power2.out' })
        .from('.hero__eyebrow', { y: 30, opacity: 0, duration: 0.8 }, '-=0.7')
        .from(
          '.hero__title .line span',
          { yPercent: 120, duration: 1.1, stagger: 0.12, ease: 'power4.out' },
          '-=0.5'
        )
        .from('.hero__sub', { y: 24, opacity: 0, duration: 0.8 }, '-=0.6')
        .from('.hero__actions > *', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.5')
        .from('.hero__scroll', { opacity: 0, duration: 0.6 }, '-=0.2')

      // Parallax drift on scroll. fromTo + immediateRender:false pins the
      // "top of page" state so the logo always returns to full opacity when
      // you scroll back up (instead of inheriting the entrance's opacity:0).
      gsap.fromTo(
        '.hero__mark',
        { yPercent: 0, opacity: 1 },
        {
          yPercent: 24,
          opacity: 0.25,
          ease: 'none',
          immediateRender: false,
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        }
      )
      gsap.to('.hero__title', {
        yPercent: -18,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to('.hero__glow', {
        scale: 1.3,
        opacity: 0.5,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    },
    { scope: root }
  )

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero__glow" aria-hidden="true" />
      <Brandmark variant="full" className="hero__mark" />

      <div className="hero__inner">
        <p className="hero__eyebrow">Craftsmanship in every coat · {BUSINESS.area}</p>

        <h1 className="hero__title">
          <span className="line">
            <span>Beautiful work,</span>
          </span>
          <span className="line">
            <span>
              done <i>right.</i>
            </span>
          </span>
        </h1>

        <p className="hero__sub">
          Premium painting, custom woodwork, epoxy flooring &amp; trusted handyman
          craftsmanship — by <strong>{BUSINESS.owner}</strong>.
        </p>

        <div className="hero__actions">
          <a className="btn btn--gold" href="#contact">
            Get a Free Quote
          </a>
          <a className="btn btn--ghost" href="#work">
            See the Work
          </a>
        </div>
      </div>

      <a className="hero__scroll" href="#intro" aria-label="Scroll down">
        <span>Scroll</span>
        <span className="hero__scrollline" />
      </a>
    </section>
  )
}
