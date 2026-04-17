'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ProblemProps {
  sectionRef: (el: HTMLElement | null) => void
}

const PAIN_POINTS = [
  {
    num: '01',
    title: 'Foot traffic is dying',
    body: 'Traditional malls have lost 35% of visitors since 2017. Retailers are closing, not opening. The model is broken.',
  },
  {
    num: '02',
    title: 'Pure retail is not enough',
    body: 'Consumers don\'t drive 45 minutes to buy something they can click to receive in hours. The shopping trip needs a reason.',
  },
  {
    num: '03',
    title: 'Brands need more than shelf space',
    body: 'Partners want audience, experience, and reach — not just square footage. Landlords have failed to evolve their offer.',
  },
]

export default function Problem({ sectionRef }: ProblemProps) {
  const inner = useRef<HTMLDivElement>(null)
  const isInView = useInView(inner, { once: true, amount: 0.3 })

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden flex items-center"
      style={{ scrollSnapAlign: 'start', background: '#0a0a0a' }}
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-yellow-400/40 to-transparent" />

      <div ref={inner} className="max-w-6xl mx-auto px-8 md:px-16 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Headline */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="slide-num block mb-6"
            >02 — THE PROBLEM</motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, lineHeight: 1 }}
              className="text-5xl md:text-7xl text-white mb-6"
            >
              Retail<br />
              <span style={{ color: '#D4A843' }}>is</span><br />
              Broken.
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ originX: 0 }}
              className="h-px bg-yellow-400/30 mb-6 max-w-xs"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, lineHeight: 1.8 }}
              className="text-white/50 text-base max-w-sm"
            >
              Most malls are managing decline. Shrinking rosters. Empty anchor spaces. No solution in sight.
            </motion.p>
          </div>

          {/* Right: Pain points */}
          <div className="flex flex-col gap-6">
            {PAIN_POINTS.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                className="group border border-white/8 rounded-sm p-5 hover:border-yellow-400/30 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <div className="flex items-start gap-4">
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', letterSpacing: '0.2em', color: '#D4A843', minWidth: '24px', marginTop: '3px' }}>{p.num}</span>
                  <div>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '18px', marginBottom: '6px', color: 'white' }}>{p.title}</h3>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{p.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
