import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROCESS } from '../data.js'

gsap.registerPlugin(ScrollTrigger)

export default function Process() {
  const root = useRef(null)

  useGSAP(
    () => {
      gsap.from('.process__head > *', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.process__head', start: 'top 80%' },
      })

      // progress line draws as you scroll the steps
      gsap.from('.process__line i', {
        scaleY: 0,
        ease: 'none',
        transformOrigin: 'top',
        scrollTrigger: {
          trigger: '.process__steps',
          start: 'top 70%',
          end: 'bottom 70%',
          scrub: true,
        },
      })

      gsap.utils.toArray('.step').forEach((step) => {
        gsap.from(step, {
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: step, start: 'top 80%' },
        })
      })
    },
    { scope: root }
  )

  return (
    <section className="process" id="process" ref={root}>
      <div className="process__head">
        <p className="eyebrow">How It Works</p>
        <h2 className="section-title">
          Four steps, <span className="gold-text">zero stress.</span>
        </h2>
      </div>

      <div className="process__steps">
        <div className="process__line">
          <i />
        </div>
        {PROCESS.map((p) => (
          <div className="step" key={p.n}>
            <div className="step__node">{p.n}</div>
            <div className="step__body">
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
