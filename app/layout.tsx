import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mall of America — Partner With Us',
  description: 'A global destination platform. 40M+ visitors. 5.6M sq ft. One unforgettable address.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
