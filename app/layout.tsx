import React from 'react'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Navigation from '@/components/Navigation'

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
      </body>
    </html>
  )
}
