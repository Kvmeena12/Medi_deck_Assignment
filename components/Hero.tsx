'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface HeroProps {
  sectionRef: (el: HTMLElement | null) => void
}

export default function Hero({ sectionRef }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden noise"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        muted
        loop
        playsInline
        autoPlay
      />

      {/* Fallback gradient bg if no video */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900" style={{ zIndex: -1 }} />

      {/* Video overlay */}
      <div className="video-overlay absolute inset-0 z-10" />

      {/* Cinematic bars */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-black z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-black z-20" />

      {/* Content */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center text-center px-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="gold-line" />
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', letterSpacing: '0.35em', color: '#D4A843' }}>
            BLOOMINGTON, MINNESOTA · SINCE 1992
          </span>
          <span className="gold-line" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900 }}
          className="text-white mb-4"
        >
          <span className="block text-6xl md:text-8xl lg:text-[110px] leading-[0.95] tracking-tight">
            More Than
          </span>
          <span className="block text-6xl md:text-8xl lg:text-[110px] leading-[0.95] tracking-tight shimmer-text">
            A Mall.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, letterSpacing: '0.08em' }}
          className="text-white/60 text-lg md:text-xl mt-6 max-w-md"
        >
          A global destination platform where 40 million people come to shop, play, eat, and experience something unforgettable.
        </motion.p>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute bottom-20 flex flex-col items-center gap-2"
        >
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.3)' }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-yellow-400/60 to-transparent"
          />
        </motion.div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-12 right-8 z-30 hidden md:block">
        <span style={{ fontSize: '10px', letterSpacing: '0.25em', color: 'rgba(212,168,67,0.5)' }}>
          #1 VISITED MALL · NORTH AMERICA
        </span>
      </div>
    </section>
  )
}
