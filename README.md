# Mall of America — Cinematic Sales Deck

A fully interactive, browser-based cinematic sales deck for Mall of America. Built as a high-impact pitch tool for prospective retail tenants, sponsors, and event partners.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — slide transitions and scroll-triggered animations
- **Google Fonts** — Playfair Display (display) + DM Sans (body)

## Features

- Full-screen scroll-snapped slides (7 sections)
- Custom gold cursor with ring tracker
- Side navigation with active state
- Animated stat counters
- Video backgrounds (hero, retail, events)
- Hover-interactive cards
- Shimmer headline effect
- Noise texture overlay
- Slide number tracker

## Project Structure

```
mall-deck/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx          # Entry point
│   └── globals.css       # Global styles, fonts, scroll-snap
├── components/
│   ├── DeckClient.tsx    # Client orchestrator + cursor + nav
│   ├── Hero.tsx          # Slide 1: Cinematic hero + video
│   ├── Problem.tsx       # Slide 2: Retail is broken
│   ├── Vision.tsx        # Slide 3: Unified destination ecosystem
│   ├── Stats.tsx         # Slide 4: Animated counters
│   ├── Retail.tsx        # Slide 5: Leasing + video
│   ├── EventsModule.tsx  # Slide 6: Events platform
│   └── CTA.tsx           # Slide 7: Partner CTA
└── public/
    └── videos/
        ├── hero.mp4          # Hero background video
        ├── entertainment.mp4 # Retail section video
        └── event.mp4         # Events section video
```

## Setup & Run

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

## Adding Videos

Place MP4 videos in `public/videos/`:
- `hero.mp4` — Wide cinematic shot of the mall interior
- `entertainment.mp4` — Retail/lifestyle footage
- `event.mp4` — Concert or event footage

The app gracefully falls back to gradient backgrounds if videos are missing.

## Deployment

### Vercel (recommended)
```bash
npx vercel
```

### GitHub Pages
```bash
npm run build && npm run export
```
Then push `out/` to `gh-pages` branch.

## AI Tools Used

- **Claude (Anthropic)** — Full codebase generation
- **Midjourney / DALL-E** — Supplemental imagery
- **RunwayML** — Video generation (optional)

## Design Decisions

1. **Scroll-snap + full-screen sections** — Forces cinematic pacing, prevents skim reading
2. **Playfair Display + DM Sans** — Editorial luxury pairing; serif gravitas + clean readability
3. **Gold accent (#D4A843)** — Warm, premium, non-clichéd alternative to pure white
4. **Noise overlay** — Adds tactile texture to flat black backgrounds
5. **Custom cursor** — Signals this isn't a regular website from first interaction
6. **Counter animations** — Stats feel earned, not just listed

## What I'd Improve With More Time

- Add actual video assets (or AI-generated ones via RunwayML)
- Build out sponsorship and leasing sub-modules (Phase 2)
- Add WebGL particle effects to hero
- Integrate real demographic data API
- Add keyboard navigation (arrow keys)
- Add a loading/intro screen with logo reveal
