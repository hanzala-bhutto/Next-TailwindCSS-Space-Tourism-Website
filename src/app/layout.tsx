import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import { barlow } from '@/fonts/fonts'

export const metadata: Metadata = {
  title: 'Space Tourism',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <Navigation />
          {children}
      </body>
    </html>
  )
}
