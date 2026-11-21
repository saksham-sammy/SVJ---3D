import { useEffect, useRef } from 'react'
import './App.css'

import Nav          from './components/Nav'
import Hero         from './components/Hero'
import Marquee      from './components/Marquee'
import Collections  from './components/Collections'
import About        from './components/About'
import Process      from './components/Process'
import Testimonials from './components/Testimonials'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

export default function App() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const mouse   = useRef({ x: 0, y: 0 })
  const ring    = useRef({ x: 0, y: 0 })

  // ─── Custom Cursor ───
  useEffect(() => {
    const dot  = dotRef.current
    const rng  = ringRef.current
    if (!dot || !rng) return

    const isTouch = window.matchMedia('(hover: none)').matches
    if (isTouch) return

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      dot.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`
    }

    let rafId
    const animateRing = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1
      rng.style.transform = `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`
      rafId = requestAnimationFrame(animateRing)
    }
    animateRing()

    document.addEventListener('mousemove', onMove, { passive: true })

    // Hover states
    const interactEls = document.querySelectorAll('a, button, [role="button"]')
    const addHover = () => { dot.classList.add('hover'); rng.classList.add('hover') }
    const removeHover = () => { dot.classList.remove('hover'); rng.classList.remove('hover') }
    const addClick = () => { rng.classList.add('click') }
    const removeClick = () => { rng.classList.remove('click') }

    interactEls.forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })
    document.addEventListener('mousedown', addClick)
    document.addEventListener('mouseup', removeClick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      interactEls.forEach(el => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
      })
      document.removeEventListener('mousedown', addClick)
      document.removeEventListener('mouseup', removeClick)
    }
  }, [])

  // ─── Scroll Reveal Observer ───
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, i * 60)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    const initObserver = () => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    }

    // Wait a tick so Spline content loads
    const id = setTimeout(initObserver, 400)
    return () => { clearTimeout(id); observer.disconnect() }
  }, [])

  return (
    <>
      {/* Custom Cursor */}
      <div id="cursor-dot"  ref={dotRef}  />
      <div id="cursor-ring" ref={ringRef} />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919876543210?text=Hi%20SVJ%2C%20I%20am%20interested%20in%20your%20jewellery%20collection."
        target="_blank"
        rel="noreferrer"
        className="fab-whatsapp"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      <Nav />
      <Hero />
      <Marquee />
      <Collections />
      <About />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
