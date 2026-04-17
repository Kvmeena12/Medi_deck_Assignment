'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatsProps {
  sectionRef: (el: HTMLElement | null) => void
}

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    const steps = 60
    const inc = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += inc
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, duration / steps)
    return () => clearInterval(timer)
  }, [active, target, duration])
  return count
}

const STATS = [
  { value: 40, suffix: 'M+', label: 'Annual Visitors', sub: 'More than any other US mall', unit: '' },
  { value: 520, suffix: '+', label: 'Stores & Restaurants', sub: 'Across 3 floors of curated retail', unit: '' },
  { value: 56, suffix: 'M', label: 'Square Feet', sub: 'Including 2.9M sq ft of retail', unit: '' },
  { value: 12, suffix: 'K+', label: 'Employees on-site', sub: 'One of MN\'s largest employers', unit: '' },
  { value: 2, suffix: 'M', label: 'Hotel Rooms Nearby', sub: 'Within a 5-mile radius', unit: '' },
  { value: 100, suffix: '+', label: 'Events per Year', sub: 'Concerts, activations & more', unit: '' },
]

export default function Stats({ sectionRef }: StatsProps) {
  const inner = useRef<HTMLDivElement>(null)
  const isInView = useInView(inner, { once: true, amount: 0.3 })

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden flex items-center"
      style={{ scrollSnapAlign: 'start', background: '#0c0c0c' }}
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

      <div ref={inner} className="max-w-6xl mx-auto px-8 md:px-16 w-full">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="slide-num block mb-8"
        >04 — THE SCALE</motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, lineHeight: 1 }}
          className="text-white text-5xl md:text-6xl mb-16"
        >
          Numbers that<br />
          <span style={{ color: '#D4A843' }}>define a category.</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {STATS.map((s, i) => {
            const count = useCounter(s.value, 1800, isInView)
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                className="group"
              >
                <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, lineHeight: 1, color: 'white' }} className="flex items-end gap-1 mb-2">
                  <span className="text-5xl md:text-6xl">{count}</span>
                  <span className="text-3xl md:text-4xl" style={{ color: '#D4A843', marginBottom: '4px' }}>{s.suffix}</span>
                </div>
                <div className="h-px bg-yellow-400/20 mb-3 group-hover:bg-yellow-400/50 transition-colors duration-500" />
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '13px', letterSpacing: '0.1em', color: 'white', marginBottom: '4px' }}>{s.label}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>{s.sub}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '13px', color: 'rgba(255,255,255,0.25)', marginTop: '48px' }}
        >
          Source: Mall of America Property Data, 2024. Figures approximate.
        </motion.p>
      </div>
    </section>
  )
}
