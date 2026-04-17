'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface EventsProps {
  sectionRef: (el: HTMLElement | null) => void
}

const EVENT_CARDS = [
  {
    num: '01',
    title: 'Concerts & Live Music',
    desc: 'World-class performances in the Rotunda and dedicated event spaces. Capacity for 5,000+ attendees.',
    stat: '100+',
    statLabel: 'Events per year',
  },
  {
    num: '02',
    title: 'Brand Activations',
    desc: 'Immersive brand takeovers with foot traffic guaranteed. Every Fortune 500 brand has activated here.',
    stat: '40M',
    statLabel: 'Eyes on your brand',
  },
  {
    num: '03',
    title: 'Festivals & Pop-Ups',
    desc: 'Seasonal programming, pop-up marketplaces, and cultural festivals that draw regional and national media.',
    stat: '52',
    statLabel: 'Weekends of programming',
  },
  {
    num: '04',
    title: 'Corporate & Convention',
    desc: 'Exposition Center with 65,000 sq ft of flexible event space. Ideal for product launches and conferences.',
    stat: '65K',
    statLabel: 'Sq ft event space',
  },
]

export default function EventsModule({ sectionRef }: EventsProps) {
  const inner = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isInView = useInView(inner, { once: true, amount: 0.2 })
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    if (videoRef.current && isInView) {
      videoRef.current.play().catch(() => {})
    }
  }, [isInView])

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ scrollSnapAlign: 'start', background: '#060606' }}
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        src="/videos/event.mp4"
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50" />

      <div ref={inner} className="relative z-10 h-full flex flex-col justify-center max-w-6xl mx-auto px-8 md:px-16 w-full">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="slide-num block mb-6"
        >06 — EVENTS & PLATFORM</motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, lineHeight: 1 }}
          className="text-white text-5xl md:text-6xl mb-4"
        >
          A Stage for<br />
          <span style={{ color: '#D4A843', fontStyle: 'italic' }}>Everything.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, color: 'rgba(255,255,255,0.45)', maxWidth: '420px', marginBottom: '48px', lineHeight: 1.8 }}
          className="text-sm"
        >
          Mall of America isn't just a building. It's a platform — with built-in audiences, guaranteed reach, and infrastructure that makes every event extraordinary.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/5">
          {EVENT_CARDS.map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative p-6 bg-black/80 transition-all duration-300 cursor-pointer"
              style={{
                background: hovered === i ? 'rgba(212,168,67,0.08)' : 'rgba(0,0,0,0.8)',
                borderTop: hovered === i ? '1px solid rgba(212,168,67,0.4)' : '1px solid transparent',
              }}
            >
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', letterSpacing: '0.2em', color: '#D4A843', display: 'block', marginBottom: '16px' }}>{card.num}</span>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '17px', color: 'white', marginBottom: '10px', lineHeight: 1.3 }}>{card.title}</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: '20px' }}>{card.desc}</p>
              <div className="mt-auto">
                <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, fontSize: '28px', color: hovered === i ? '#D4A843' : 'rgba(255,255,255,0.8)', lineHeight: 1, transition: 'color 0.3s' }}>{card.stat}</div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', marginTop: '4px' }}>{card.statLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
