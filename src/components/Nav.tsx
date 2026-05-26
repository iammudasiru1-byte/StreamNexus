'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { SITE } from '@/lib/config'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('sn-theme') as 'dark' | 'light' | null
    const sys = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const t = saved || sys
    setTheme(t)
    document.documentElement.setAttribute('data-theme', t)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('sn-theme', next)
  }

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <div className="nav-logo-dot" />
            StreamNexus
          </Link>

          <ul className="nav-links">
            <li><Link href="/#how-it-works">How It Works</Link></li>
            <li><Link href="/#features">Features</Link></li>
            <li><Link href="/#streamers">Streamers</Link></li>
            <li><Link href="/#proof">Results</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <Link
              href={`mailto:${SITE.email}?subject=StreamNexus%20Join%20Application`}
              className="btn-nav-cta"
            >
              Start Growing →
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
