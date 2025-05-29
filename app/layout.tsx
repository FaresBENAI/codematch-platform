import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CodeMatch - Connectez vos projets aux meilleurs développeurs IA',
  description: 'Plateforme de mise en relation entre entreprises et développeurs spécialisés en Intelligence Artificielle et Automatisation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
