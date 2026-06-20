import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import useSmoothScroll from './hooks/useSmoothScroll.js'
import GrainOverlay from './components/GrainOverlay.jsx'
import Loader from './components/Loader.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Gallery from './components/Gallery.jsx'
import Process from './components/Process.jsx'
import Stats from './components/Stats.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Divider from './components/Divider.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [ready, setReady] = useState(false)
  useSmoothScroll()

  // Recalculate triggers once everything (and the intro) has settled.
  useGSAP(() => {
    if (ready) ScrollTrigger.refresh()
  }, [ready])

  return (
    <>
      <GrainOverlay />
      <Loader onComplete={() => setReady(true)} />
      <Nav />

      <main className={`site ${ready ? 'is-ready' : ''}`}>
        <Hero />
        <Marquee />
        <About />
        <Divider />
        <Services />
        <Gallery />
        <Process />
        <Stats />
        <Testimonials />
        <Divider flip />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
