import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HealthContentAI',
  description: 'Generador de FAQs Médicas con IA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Navigation />
        {children}
        
        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        {/* Inicialización de AdSense */}
        <Script
          id="adsense-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (adsbygoogle = window.adsbygoogle || []).push({});
            `,
          }}
        />
      </body>
    </html>
  )
}