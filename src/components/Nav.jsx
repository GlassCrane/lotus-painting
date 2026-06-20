import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Brandmark from './Brandmark.jsx'
import { BUSINESS } from '../data.js'

gsap.registerPlugin(ScrollTrigger)

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const nav = useRef(null)
  const [open, setOpen] = useState(false)

  useGSAP(
    () => {
      // reveal nav after intro
      gsap.from(nav.current, { y: -80, opacity: 0, duration: 1, delay: 0.2, ease: 'power3.out' })

      // solidify on scroll
      ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: { className: 'nav--scrolled', targets: nav.current },
      })
    },
    { scope: nav }
  )

  const go = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (!el) return
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -10 })
    else el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="nav" ref={nav}>
      <a className="nav__brand" href="#top" onClick={(e) => go(e, '#top')}>
        <Brandmark variant="mark" className="nav__mark" />
        <span className="nav__brandtext">
          LOTUS<em>Painting &amp; Handy-Man</em>
        </span>
      </a>

      <nav className={`nav__links ${open ? 'is-open' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>
            {l.label}
          </a>
        ))}
        <a className="nav__cta" href={BUSINESS.phoneHref}>
          {BUSINESS.phone}
        </a>
      </nav>

      <button
        className={`nav__burger ${open ? 'is-open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="Menu"
      >
        <span />
        <span />
      </button>
    </header>
  )
}
