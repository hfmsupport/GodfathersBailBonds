import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import { SITE_URL } from '@/lib/site'
import './globals.css'

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || 'G-5K2DC15V7H'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Godfather's Bail Bonds | Houston, TX | 713-224-3600",
    // Pages whose title already contains the site name must use { absolute: '...' } to prevent duplication.
    template: "%s | Godfather's Bail Bonds",
  },
  description:
    'Fast, professional bail bond services in Houston and Harris County. Open 24/7/365. Call 713-224-3600 anytime. Licensed bail bondsman — License #74603.',
  robots: { index: true, follow: true },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Godfather's Bail Bonds | Houston, TX | 713-224-3600",
    description:
      "Fast, professional bail bond services in Houston and Harris County. Open 24/7/365. Call 713-224-3600 anytime. Licensed bail bondsman — License #74603.",
    url: '/',
    siteName: "Godfather's Bail Bonds",
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Godfather's Bail Bonds | Houston, TX | 713-224-3600",
    description:
      "Fast, professional bail bond services in Houston and Harris County. Open 24/7/365. Call 713-224-3600 anytime. Licensed bail bondsman — License #74603.",
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}');
          `}
        </Script>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
