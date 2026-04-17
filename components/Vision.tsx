'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface VisionProps {
  sectionRef: (el: HTMLElement | null) => void
}

const PILLARS = [
  { icon: '◈', label: 'Commerce', desc: 'World-class retail across 500+ stores' },
  { icon: '◉', label: 'Entertainment', desc: 'Rides, aquarium, mini-golf, cinema & more' },
  { icon: '◇', label: 'Culture', desc: 'Live events, concerts & art installations' },
  { icon: '◆', label: 'Hospitality', desc: 'Hotels, fine dining & luxury services' },
]

export default function Vision({ sectionRef }: VisionProps) {
  const inner = useRef<HTMLDivElement>(null)
  const isInView = useInView(inner, { once: true, amount: 0.3 })

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden flex items-center"
      style={{ scrollSnapAlign: 'start', background: '#060606' }}
    >
      {/* Background graphic */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.06, scale: 1 } : {}}
          transition={{ duration: 1.5 }}
          style={{
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            border: '1px solid #D4A843',
            position: 'absolute',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.04, scale: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.2 }}
          style={{
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            border: '1px solid #D4A843',
            position: 'absolute',
          }}
        />
      </div>

      <div ref={inner} className="max-w-6xl mx-auto px-8 md:px-16 w-full relative z-10">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="slide-num block mb-8"
        >03 — THE VISION</motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, lineHeight: 1 }}
          className="text-white text-5xl md:text-7xl lg:text-8xl mb-4"
        >
          A Destination,
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400, fontStyle: 'italic', lineHeight: 1, color: '#D4A843' }}
          className="text-5xl md:text-7xl lg:text-8xl mb-12"
        >
          Not Just Retail.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, maxWidth: '520px', lineHeight: 1.9, color: 'rgba(255,255,255,0.55)' }}
          className="text-base mb-16"
        >
          Mall of America isn't competing with e-commerce. We've built something no website can replicate — a living, breathing ecosystem that gives 40 million people a reason to leave home.
        </motion.p>

        {/* Four pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              className="group bg-black p-6 hover:bg-yellow-400/5 transition-colors duration-300"
            >
              <span style={{ fontSize: '22px', color: '#D4A843', display: 'block', marginBottom: '12px' }}>{p.icon}</span>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '18px', color: 'white', marginBottom: '8px' }}>{p.label}</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
