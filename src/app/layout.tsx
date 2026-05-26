import type { Metadata } from 'next'
import { SITE } from '@/lib/config'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'StreamNexus — Get Real Viewers & Grow Your Stream',
    template: '%s | StreamNexus',
  },
  description: SITE.description,
  keywords: [
    'grow twitch channel',
    'get real viewers twitch',
    'twitch growth network',
    'kick streaming growth',
    'youtube live viewers',
    'stream raid network',
    'twitch affiliate fast',
    'streamer collab',
    'StreamNexus',
  ],
  authors: [{ name: 'StreamNexus' }],
  creator: 'StreamNexus',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.name,
    title: 'StreamNexus — Get Real Viewers & Grow Your Stream',
    description: SITE.description,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StreamNexus — Get Real Viewers & Grow Your Stream',
    description: SITE.description,
  },
  verification: {
    google: 'google07d7c8a4e0de6346',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="theme-color" content="#0a0a0f" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#f8f8fc" media="(prefers-color-scheme: light)" />
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            var t = localStorage.getItem('sn-theme') || 
              (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            document.documentElement.setAttribute('data-theme', t);
          })();
        `}} />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
