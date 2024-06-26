import React from 'react'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Navigation from '@/components/Navigation'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Kriss Gardner',
  description:
    "Hey! I'm Kriss Gardner. I'm a full stack developer & community builder.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <div className="antialiased max-w-3xl px-10 my-16 mx-auto">
          <Navigation />
          {children}
        </div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
