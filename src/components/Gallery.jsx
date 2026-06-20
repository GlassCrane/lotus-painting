import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROJECTS } from '../data.js'
import Lightbox from './Lightbox.jsx'

gsap.registerPlugin(ScrollTrigger)

// Pinned horizontal-scroll showcase. Click any tile to open the lightbox.
export default function Gallery() {
  const root = useRef(null)
  const track = useRef(null)
  const [box, setBox] = useState(null) // { index, origin } | null

  useGSAP(
    () => {
      const panels = gsap.utils.toArray('.work__card')
      const getScroll = () => track.current.scrollWidth - window.innerWidth

      const tween = gsap.to(track.current, {
        x: () => -getScroll(),
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: () => '+=' + getScroll(),
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })

      panels.forEach((card) => {
        const media = card.querySelector('.work__media')
        gsap.fromTo(
          media,
          { scale: 1.18 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              containerAnimation: tween,
              start: 'left right',
              end: 'right left',
              scrub: true,
            },
          }
        )
      })
    },
    { scope: root }
  )

  const open = (e, index) => {
    const r = e.currentTarget.getBoundingClientRect()
    setBox({ index, origin: { left: r.left, top: r.top, width: r.width, height: r.height } })
  }

  return (
    <section className="work" id="work" ref={root}>
      <div className="work__track" ref={track}>
        <div className="work__intro">
          <p className="eyebrow">Featured Work</p>
          <h2 className="section-title">
            Proof in <span className="gold-text">every project.</span>
          </h2>
          <p className="section-lead">Scroll through a few recent transformations — click any photo to enlarge →</p>
        </div>

        {PROJECTS.map((p, i) => (
          <article className="work__card" key={p.id}>
            <div
              className="work__media"
              role="button"
              tabIndex={0}
              aria-label={`Enlarge ${p.title}`}
              onClick={(e) => open(e, i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  open(e, i)
                }
              }}
              style={{
                '--accent': p.accent,
                backgroundImage: `url(${import.meta.env.BASE_URL}work/${p.id}.jpg)`,
              }}
            >
              <span className="work__index">{String(i + 1).padStart(2, '0')}</span>
              <span className="work__zoom" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M16 16l4.5 4.5M11 8v6M8 11h6" strokeLinecap="round" />
                </svg>
              </span>
            </div>
            <div className="work__meta">
              <span className="work__type">{p.type}</span>
              <h3 className="work__title">{p.title}</h3>
            </div>
          </article>
        ))}

        <div className="work__outro">
          <h3>
            Your project <span className="gold-text">next.</span>
          </h3>
          <a className="btn btn--gold" href="#contact">
            Start Yours
          </a>
        </div>
      </div>

      {box && (
        <Lightbox
          items={PROJECTS}
          startIndex={box.index}
          origin={box.origin}
          onClose={() => setBox(null)}
        />
      )}
    </section>
  )
}
