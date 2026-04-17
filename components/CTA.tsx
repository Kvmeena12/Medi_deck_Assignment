'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface CTAProps {
  sectionRef: (el: HTMLElement | null) => void
}

const ACTIONS = [
  {
    title: 'Lease Space',
    desc: 'Retail, F&B, pop-up, or flagship. From 200 to 20,000 sq ft — we have the right address for your brand.',
    cta: 'Explore Leasing',
    icon: '◈',
  },
  {
    title: 'Sponsorship',
    desc: 'Reach 40M+ consumers. Digital, experiential, and naming rights packages across every major touchpoint.',
    cta: 'Partner With Us',
    icon: '◉',
  },
  {
    title: 'Book an Event',
    desc: 'Concerts. Product launches. Brand activations. Corporate conferences. We have the stage and the crowd.',
    cta: 'Plan Your Event',
    icon: '◇',
  },
]

export default function CTA({ sectionRef }: CTAProps) {
  const inner = useRef<HTMLDivElement>(null)
  const isInView = useInView(inner, { once: true, amount: 0.3 })

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden flex items-center"
      style={{ scrollSnapAlign: 'start', background: '#080808' }}
    >
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div style={{ width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,168,67,0.04) 0%, transparent 70%)' }} />
      </div>

      <div ref={inner} className="max-w-6xl mx-auto px-8 md:px-16 w-full relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="slide-num block mb-8"
        >07 — PARTNER WITH US</motion.span>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, lineHeight: 1.05 }} className="text-white text-5xl md:text-6xl mb-6">
              Your Brand<br />
              Belongs<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>Here.</span>
            </h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, lineHeight: 1.85, color: 'rgba(255,255,255,0.45)', maxWidth: '380px' }} className="text-sm">
              Whether you're a luxury flagship seeking the right neighborhood, a brand looking for a captive national audience, or a promoter needing a world-class venue — we're ready for the conversation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-1"
          >
            {ACTIONS.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                className="group flex items-start gap-5 p-5 border border-white/6 hover:border-yellow-400/30 transition-all duration-300 cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.01)' }}
              >
                <span style={{ fontSize: '20px', color: '#D4A843', marginTop: '2px' }}>{a.icon}</span>
                <div className="flex-1">
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '18px', color: 'white', marginBottom: '6px' }}>{a.title}</h3>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '13px', color: 'rgba(255,255,255,0.38)', lineHeight: 1.7 }}>{a.desc}</p>
                </div>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', letterSpacing: '0.15em', color: '#D4A843', opacity: 0, transition: 'opacity 0.3s', alignSelf: 'center', whiteSpace: 'nowrap' }} className="group-hover:opacity-100">
                  {a.cta} →
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom: Contact bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '13px', color: 'white', letterSpacing: '0.1em', marginBottom: '4px' }}>MALL OF AMERICA</div>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>60 East Broadway · Bloomington, MN 55425</div>
          </div>

          <div className="flex gap-4">
            <button
              className="px-8 py-3 text-black text-xs tracking-widest uppercase font-medium transition-all duration-300 hover:opacity-90"
              style={{ fontFamily: 'DM Sans, sans-serif', background: '#D4A843' }}
            >
              Contact Leasing
            </button>
            <button
              className="px-8 py-3 border border-white/20 text-white text-xs tracking-widest uppercase transition-all duration-300 hover:border-yellow-400/50 hover:text-yellow-400"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Download Deck
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
