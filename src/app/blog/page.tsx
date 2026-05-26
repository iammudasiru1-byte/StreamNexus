import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import RevealObserver from '@/components/RevealObserver'
import { SITE } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Blog — StreamNexus Streaming Growth Tips',
  description: 'Expert guides and tips for growing your Twitch, Kick, and YouTube channel. Real strategies used by StreamNexus members.',
}

const POSTS = [
  {
    slug: 'what-is-streamnexus',
    tag: 'Platform',
    title: 'What Is StreamNexus? The Complete Guide for Streamers',
    excerpt: 'StreamNexus is a premium growth network for streamers on Twitch, Kick, YouTube, and TikTok. Here\'s exactly how it works, what you get, and whether it\'s right for you.',
    date: 'May 2025',
    readTime: '8 min read',
    icon: '⚡',
  },
  {
    slug: 'is-streamnexus-real',
    tag: 'Trust & Safety',
    title: 'Is StreamNexus Real? Honest Review from a Member',
    excerpt: 'Skeptical about StreamNexus? In this post we break down exactly how the network works, what results are realistic, and answer the most common doubts new streamers have.',
    date: 'May 2025',
    readTime: '7 min read',
    icon: '🛡',
  },
  {
    slug: 'grow-twitch-channel-fast',
    tag: 'Growth Tips',
    title: 'How to Grow Your Twitch Channel Fast in 2025',
    excerpt: 'The most effective strategies streamers use to go from 0 viewers to Affiliate and Partner. Includes the exact framework StreamNexus members follow.',
    date: 'Apr 2025',
    readTime: '10 min read',
    icon: '📈',
  },
  {
    slug: 'twitch-affiliate-fast',
    tag: 'Twitch',
    title: 'How to Get Twitch Affiliate in Under 30 Days',
    excerpt: 'Twitch Affiliate requires 50 followers, 500 minutes broadcast, 7 unique broadcast days, and 3 average viewers. Here\'s the fastest legitimate path.',
    date: 'Apr 2025',
    readTime: '6 min read',
    icon: '🏆',
  },
  {
    slug: 'raid-network-guide',
    tag: 'Strategy',
    title: 'The Complete Guide to Twitch Raids and How to Use Them',
    excerpt: 'Raids are the most powerful organic growth tool on Twitch. Here\'s how to use them effectively — and why a coordinated raid network multiplies the results.',
    date: 'Mar 2025',
    readTime: '9 min read',
    icon: '🔁',
  },
  {
    slug: 'kick-vs-twitch',
    tag: 'Platforms',
    title: 'Kick vs Twitch in 2025: Which Platform Should You Stream On?',
    excerpt: 'Twitch has the audience. Kick has the opportunity. Here\'s a data-driven comparison to help you decide where to focus your streaming efforts.',
    date: 'Mar 2025',
    readTime: '8 min read',
    icon: '🎮',
  },
]

const BLOG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'StreamNexus Blog',
  url: `${SITE.url}/blog`,
  description: 'Expert streaming growth tips for Twitch, Kick, and YouTube creators.',
  blogPost: POSTS.map(p => ({
    '@type': 'BlogPosting',
    headline: p.title,
    url: `${SITE.url}/blog/${p.slug}`,
    datePublished: p.date,
  })),
}

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BLOG_SCHEMA) }} />
      <Nav />
      <RevealObserver />

      <section style={{ paddingTop:'calc(64px + 4rem)',paddingBottom:'3rem',background:'var(--bg)',textAlign:'center',position:'relative',overflow:'hidden' }}>
        <div aria-hidden="true" style={{ position:'absolute',top:'-40px',left:'50%',transform:'translateX(-50%)',width:'500px',height:'350px',background:'radial-gradient(ellipse,rgba(0,207,255,.07),transparent 70%)',pointerEvents:'none' }} />
        <div className="container" style={{ position:'relative',zIndex:1 }}>
          <span className="sec-eyebrow">Blog</span>
          <h1 style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(2rem,5vw,3.5rem)',lineHeight:1.1,marginBottom:'1rem',letterSpacing:'-.02em' }}>
            Streaming Growth <em>Guides</em>
          </h1>
          <p style={{ color:'var(--text2)',maxWidth:'480px',margin:'0 auto',lineHeight:1.7 }}>
            Practical strategies for growing on Twitch, Kick, YouTube & TikTok — written from real StreamNexus member data.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="blog-grid">
            {POSTS.map((post, i) => (
              <Link key={i} href={`/blog/${post.slug}`} className={`blog-card reveal reveal-delay-${(i % 2) + 1}`} style={{ textDecoration:'none' }}>
                <div style={{ fontSize:'2rem',marginBottom:'1rem' }}>{post.icon}</div>
                <span className="blog-tag">{post.tag}</span>
                <h2 className="blog-title" style={{ fontSize:'1.05rem',marginBottom:'.6rem' }}>{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">{post.date} · {post.readTime}</div>
                <div className="blog-read-more">Read article →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:'var(--bg2)',paddingBottom:'5rem' }}>
        <div className="container" style={{ maxWidth:'600px',textAlign:'center' }}>
          <div className="cta-section reveal">
            <h2 style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(1.5rem,3vw,2rem)',marginBottom:'1rem' }}>
              Ready to <em>Start Growing?</em>
            </h2>
            <p style={{ color:'var(--text2)',marginBottom:'1.75rem',lineHeight:1.7 }}>
              Stop reading about growth — start experiencing it. Join StreamNexus and see results in 48 hours.
            </p>
            <div style={{ display:'flex',justifyContent:'center',gap:'.85rem',flexWrap:'wrap' }}>
              <Link href="/pricing" className="btn btn-primary">View Plans →</Link>
              <a href={`mailto:${SITE.email}`} className="btn btn-secondary">Apply to Join</a>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background:'var(--bg2)',borderTop:'1px solid var(--border)',padding:'2rem 0' }}>
        <div className="container">
          <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'1rem' }}>
            <div className="nav-logo"><div className="nav-logo-dot" />StreamNexus</div>
            <div style={{ display:'flex',gap:'1.25rem',flexWrap:'wrap' }}>
              <Link href="/" style={{ fontSize:'.85rem',color:'var(--text2)' }}>Home</Link>
              <Link href="/pricing" style={{ fontSize:'.85rem',color:'var(--text2)' }}>Pricing</Link>
              <Link href="/faq" style={{ fontSize:'.85rem',color:'var(--text2)' }}>FAQ</Link>
            </div>
          </div>
          <div style={{ borderTop:'1px solid var(--border)',marginTop:'1.25rem',paddingTop:'1.25rem' }}>
            <div className="footer-copy">© 2025 StreamNexus · {SITE.email}</div>
          </div>
        </div>
      </footer>
    </>
  )
}
