'use client'

import { useEffect, useRef, useState } from 'react'
import Hero from './Hero'
import Problem from './Problem'
import Vision from './Vision'
import Stats from './Stats'
import Retail from './Retail'
import EventsModule from './EventsModule'
import CTA from './CTA'

const SLIDES = [
  { id: 'hero', label: 'Overview' },
  { id: 'problem', label: 'The Gap' },
  { id: 'vision', label: 'Vision' },
  { id: 'stats', label: 'Scale' },
  { id: 'retail', label: 'Retail' },
  { id: 'events', label: 'Events' },
  { id: 'cta', label: 'Partner' },
]

export default function DeckClient() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  // Custom cursor
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX + 'px'
        ringRef.current.style.top = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  // Intersection observer for active slide
  useEffect(() => {
    const observers = sectionRefs.current.map((el, i) => {
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSlide(i) },
        { threshold: 0.5 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  const scrollTo = (i: number) => {
    sectionRefs.current[i]?.scrollIntoView({ behavior: 'smooth' })
  }

  const setSectionRef = (i: number) => (el: HTMLElement | null) => {
    sectionRefs.current[i] = el
  }

  return (
    <>
      {/* Custom cursor */}
      <div ref={cursorRef} className="cursor hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />

      {/* Side nav dots */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 hidden md:flex">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => scrollTo(i)}
            title={s.label}
            className="group flex items-center gap-2 justify-end"
          >
            <span className={`text-[10px] tracking-widest uppercase transition-all duration-300 ${
              activeSlide === i ? 'opacity-100 text-yellow-400' : 'opacity-0 group-hover:opacity-60 text-white'
            }`}>{s.label}</span>
            <span className={`block rounded-full transition-all duration-300 ${
              activeSlide === i
                ? 'w-5 h-[3px] bg-yellow-400'
                : 'w-[6px] h-[6px] bg-white/30 group-hover:bg-white/60'
            }`} />
          </button>
        ))}
      </nav>

      {/* Slide counter */}
      <div className="fixed left-6 bottom-8 z-50 hidden md:block">
        <span className="slide-num">{String(activeSlide + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}</span>
      </div>

      {/* Logo */}
      <div className="fixed top-8 left-8 z-50">
        <div className="flex flex-col leading-none">
          <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: '13px', letterSpacing: '0.15em', color: 'white' }}>MALL OF</span>
          <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400, fontSize: '11px', letterSpacing: '0.3em', color: '#D4A843' }}>AMERICA</span>
        </div>
      </div>

      {/* Slides */}
      <main>
        <Hero sectionRef={setSectionRef(0)} />
        <Problem sectionRef={setSectionRef(1)} />
        <Vision sectionRef={setSectionRef(2)} />
        <Stats sectionRef={setSectionRef(3)} />
        <Retail sectionRef={setSectionRef(4)} />
        <EventsModule sectionRef={setSectionRef(5)} />
        <CTA sectionRef={setSectionRef(6)} />
      </main>
    </>
  )
}
