'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface RetailProps {
  sectionRef: (el: HTMLElement | null) => void
}

const CATEGORIES = [
  { label: 'Luxury Flagship', count: '30+', color: '#D4A843' },
  { label: 'Fast Fashion', count: '60+', color: 'rgba(255,255,255,0.7)' },
  { label: 'F&B Concepts', count: '50+', color: 'rgba(255,255,255,0.5)' },
  { label: 'Entertainment', count: '20+', color: 'rgba(255,255,255,0.4)' },
]

// Multiple high-quality mall/luxury retail images — cycles on hover
const IMAGES = [
  'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=90', // luxury mall interior
  'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=90', // shopping mall atrium
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=90', // retail store interior
]

export default function Retail({ sectionRef }: RetailProps) {
  const inner = useRef<HTMLDivElement>(null)
  const isInView = useInView(inner, { once: true, amount: 0.3 })
  const [imgIndex, setImgIndex] = useState(0)
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden flex items-center"
      style={{ scrollSnapAlign: 'start', background: '#080808' }}
    >
      <div ref={inner} className="max-w-6xl mx-auto px-8 md:px-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ── Left: Content ── */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="slide-num block mb-8"
            >
              05 — RETAIL
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900, lineHeight: 1.05 }}
              className="text-white text-5xl md:text-6xl mb-6"
            >
              The Most<br />
              <span style={{ color: '#D4A843', fontStyle: 'italic' }}>Coveted</span><br />
              Address.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 300,
                lineHeight: 1.85,
                color: 'rgba(255,255,255,0.5)',
                maxWidth: '380px',
              }}
              className="text-sm mb-10"
            >
              From luxury flagships to pop-up concepts, Mall of America offers retailers
              a captive audience that no e-commerce platform can match. Every category
              thrives here.
            </motion.p>

            {/* Category rows */}
            <div className="flex flex-col gap-0">
              {CATEGORIES.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex items-center justify-between py-3"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <span style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    letterSpacing: '0.1em',
                    color: 'rgba(255,255,255,0.45)',
                  }}>
                    {c.label}
                  </span>
                  <span style={{
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 700,
                    fontSize: '20px',
                    color: c.color,
                  }}>
                    {c.count}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8 px-6 py-3 text-xs tracking-widest uppercase transition-colors duration-300"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                border: '1px solid rgba(212,168,67,0.5)',
                color: '#D4A843',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(212,168,67,0.1)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              View Leasing Opportunities →
            </motion.button>
          </div>

          {/* ── Right: Image Panel ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative overflow-hidden hidden md:block"
            style={{
              height: '520px',
              background: '#111',
              cursor: 'pointer',
            }}
            // Click to cycle through images
            onClick={() => setImgIndex(prev => (prev + 1) % IMAGES.length)}
          >
            {/* Actual image — always visible */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={imgIndex}
              src={IMAGES[imgIndex]}
              alt="Mall of America retail interior"
              onLoad={() => setImgLoaded(true)}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'opacity 0.6s ease',
                opacity: imgLoaded ? 1 : 0,
              }}
            />

            {/* Shimmer placeholder while image loads */}
            {!imgLoaded && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(110deg, #111 30%, #1a1a1a 50%, #111 70%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmerLoad 1.4s infinite',
                }}
              />
            )}

            {/* Dark gradient overlay at bottom */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.2) 100%)',
              }}
            />

            {/* Gold top-left corner accent */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '40px',
              height: '2px',
              background: '#D4A843',
            }} />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '2px',
              height: '40px',
              background: '#D4A843',
            }} />

            {/* Bottom label */}
            <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <span style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.3em',
                color: 'rgba(212,168,67,0.9)',
              }}>
                IMMERSIVE RETAIL
              </span>
              {/* Image counter dots */}
              <div style={{ display: 'flex', gap: '6px' }}>
                {IMAGES.map((_, i) => (
                  <span
                    key={i}
                    style={{
                      display: 'block',
                      width: i === imgIndex ? '18px' : '6px',
                      height: '3px',
                      borderRadius: '2px',
                      background: i === imgIndex ? '#D4A843' : 'rgba(255,255,255,0.3)',
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Hover hint */}
            <div style={{
              position: 'absolute',
              top: 16,
              right: 16,
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.3)',
            }}>
              TAP TO BROWSE
            </div>
          </motion.div>
        </div>
      </div>

      {/* Shimmer keyframe injected inline */}
      <style>{`
        @keyframes shimmerLoad {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  )
}