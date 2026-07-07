import { useEffect, useRef, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import gsap from 'gsap'

// Fullscreen image viewer:
//  - opens by zooming from the clicked thumbnail to center over a dark backdrop
//  - mouse wheel (or arrow keys / arrows) browses through the set
//  - clicking the darkened area outside the photo (or Esc / ×) closes it
export default function Lightbox({ items, startIndex, origin, onClose }) {
  const [index, setIndex] = useState(startIndex)
  const root = useRef(null)
  const backdrop = useRef(null)
  const figure = useRef(null)
  const img = useRef(null)
  const cooldown = useRef(0)
  const animating = useRef(false)
  const idxRef = useRef(startIndex)
  idxRef.current = index
  const closing = useRef(false)

  const base = import.meta.env.BASE_URL
  const current = items[index]
  const srcOf = (it) => `${base}work/${it.image || `${it.id}.jpg`}`

  // Preload every image so wheel-browsing is instant.
  useEffect(() => {
    items.forEach((it) => {
      const im = new Image()
      im.src = srcOf(it)
    })
  }, [items])

  // OPEN animation — zoom from the origin thumbnail rect to the centered photo.
  useEffect(() => {
    const im = img.current
    const run = () => {
      const fr = im.getBoundingClientRect()
      gsap.set(figure.current, { autoAlpha: 1 })
      if (origin && fr.width > 0) {
        const fc = { x: fr.left + fr.width / 2, y: fr.top + fr.height / 2 }
        const oc = { x: origin.left + origin.width / 2, y: origin.top + origin.height / 2 }
        gsap.fromTo(
          im,
          {
            x: oc.x - fc.x,
            y: oc.y - fc.y,
            scaleX: origin.width / fr.width,
            scaleY: origin.height / fr.height,
            transformOrigin: 'center center',
          },
          { x: 0, y: 0, scaleX: 1, scaleY: 1, duration: 0.62, ease: 'power3.inOut' }
        )
      } else {
        gsap.fromTo(im, { scale: 0.85, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.5, ease: 'power3.out' })
      }
      gsap.fromTo(backdrop.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5, ease: 'power2.out' })
      gsap.fromTo('.lb__chrome', { autoAlpha: 0, y: 8 }, { autoAlpha: 0.85, y: 0, duration: 0.5, delay: 0.28, stagger: 0.04 })
    }

    if (im.complete && im.naturalWidth) run()
    else im.addEventListener('load', run, { once: true })

    // lock background scroll
    window.__lenis?.stop()
    document.documentElement.style.overflow = 'hidden'
    return () => {
      window.__lenis?.start()
      document.documentElement.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const navigate = useCallback(
    (dir) => {
      const im = img.current
      if (animating.current || closing.current) return
      animating.current = true
      const next = (idxRef.current + dir + items.length) % items.length
      gsap.to(im, {
        autoAlpha: 0,
        x: dir > 0 ? -48 : 48,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          setIndex(next)
          requestAnimationFrame(() =>
            gsap.fromTo(
              im,
              { autoAlpha: 0, x: dir > 0 ? 48 : -48 },
              {
                autoAlpha: 1,
                x: 0,
                duration: 0.32,
                ease: 'power2.out',
                onComplete: () => {
                  animating.current = false
                },
              }
            )
          )
        },
      })
    },
    [items.length]
  )

  const close = useCallback(() => {
    if (closing.current) return
    closing.current = true
    window.__lenis?.start()
    document.documentElement.style.overflow = ''
    gsap.to('.lb__chrome', { autoAlpha: 0, duration: 0.18 })
    gsap.to(img.current, { scale: 0.86, autoAlpha: 0, duration: 0.34, ease: 'power2.in' })
    gsap.to(backdrop.current, { autoAlpha: 0, duration: 0.4, ease: 'power2.in', onComplete: onClose })
  }, [onClose])

  // wheel + keyboard
  useEffect(() => {
    const el = root.current
    const onWheel = (e) => {
      e.preventDefault()
      const now = Date.now()
      if (now - cooldown.current < 300) return
      cooldown.current = now
      navigate(e.deltaY > 0 ? 1 : -1)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') navigate(1)
      else if (e.key === 'ArrowLeft') navigate(-1)
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKey)
    return () => {
      el.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKey)
    }
  }, [navigate, close])

  const stop = (e) => e.stopPropagation()

  return createPortal(
    <div className="lb" ref={root} onClick={close} role="dialog" aria-modal="true" aria-label={current.title}>
      <div className="lb__backdrop" ref={backdrop} />

      <figure className="lb__figure" ref={figure} onClick={stop}>
        <img ref={img} className="lb__img" src={srcOf(current)} alt={current.title} draggable="false" />
        <figcaption className="lb__cap lb__chrome">
          <span className="lb__type">{current.type}</span>
          <h3 className="lb__title">{current.title}</h3>
        </figcaption>
      </figure>

      <button className="lb__close lb__chrome" onClick={(e) => { stop(e); close() }} aria-label="Close">
        ×
      </button>
      <button
        className="lb__arrow lb__arrow--prev lb__chrome"
        onClick={(e) => { stop(e); navigate(-1) }}
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        className="lb__arrow lb__arrow--next lb__chrome"
        onClick={(e) => { stop(e); navigate(1) }}
        aria-label="Next"
      >
        ›
      </button>

      <div className="lb__counter lb__chrome">
        <span className="lb__count">
          {String(index + 1).padStart(2, '0')} <i>/</i> {String(items.length).padStart(2, '0')}
        </span>
        <span className="lb__hint">scroll to browse</span>
      </div>
    </div>,
    document.body
  )
}
