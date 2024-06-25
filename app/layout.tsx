import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="max-w-3xl px-10 mt-16 mx-auto">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  )
}
