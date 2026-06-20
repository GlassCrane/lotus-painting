import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROJECTS } from '../data.js'

gsap.registerPlugin(ScrollTrigger)

// Pinned horizontal-scroll showcase. Drop real photos into /public/work/p1.jpg…
// and set background-image on .work__media to replace the duotone placeholders.
export default function Gallery() {
  const root = useRef(null)
  const track = useRef(null)

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

      // subtle parallax + reveal on each card as it crosses center
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

  return (
    <section className="work" id="work" ref={root}>
      <div className="work__track" ref={track}>
        <div className="work__intro">
          <p className="eyebrow">Featured Work</p>
          <h2 className="section-title">
            Proof in <span className="gold-text">every project.</span>
          </h2>
          <p className="section-lead">Drag through a few recent transformations →</p>
        </div>

        {PROJECTS.map((p, i) => (
          <article className="work__card" key={p.id}>
            <div
              className="work__media"
              style={{
                '--accent': p.accent,
                backgroundImage: `url(${import.meta.env.BASE_URL}work/${p.id}.jpg)`,
              }}
            >
              <span className="work__index">{String(i + 1).padStart(2, '0')}</span>
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
    </section>
  )
}
