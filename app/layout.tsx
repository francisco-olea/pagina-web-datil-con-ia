import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dátil con IA – Plataforma de inteligencia artificial para el dátil',
  description:
    'Dátil con IA habilita a productores de dátil a consultar información de manera rápida e inteligente para optimizar la toma de decisiones.',
  keywords: ['dátil', 'inteligencia artificial', 'IA', 'productores', 'Mexicali', 'San Luis Río Colorado', 'agricultura'],
  authors: [{ name: 'Dátil con IA' }],
  openGraph: {
    title: 'Dátil con IA',
    description: 'Plataforma de IA especializada en el ecosistema del dátil de la región noroeste de México.',
    type: 'website',
    locale: 'es_MX',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1a1208',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${geistMono.variable} dark bg-background`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
