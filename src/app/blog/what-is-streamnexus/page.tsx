import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import RevealObserver from '@/components/RevealObserver'
import { SITE } from '@/lib/config'

export const metadata: Metadata = {
  title: 'What Is StreamNexus? The Complete Guide for Streamers',
  description: 'StreamNexus is a premium growth network for streamers on Twitch, Kick, YouTube, and TikTok. Learn exactly how it works, what you get, and whether it\'s right for you.',
  openGraph: {
    title: 'What Is StreamNexus? Complete Guide',
    description: 'Everything you need to know about StreamNexus — the streaming growth network used by 10,000+ creators.',
  },
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'What Is StreamNexus? The Complete Guide for Streamers',
  description: 'StreamNexus is a premium growth network for streamers on Twitch, Kick, YouTube, and TikTok.',
  author: { '@type': 'Organization', name: 'StreamNexus' },
  publisher: { '@type': 'Organization', name: 'StreamNexus', url: SITE.url },
  datePublished: '2025-05-01',
  url: `${SITE.url}/blog/what-is-streamnexus`,
}

export default function WhatIsStreamNexusPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <Nav />
      <RevealObserver />

      <article style={{ paddingTop:'calc(64px + 4rem)',paddingBottom:'5rem' }}>
        <div className="container" style={{ maxWidth:740 }}>

          {/* Breadcrumb */}
          <div style={{ fontFamily:'var(--font-mono)',fontSize:'.72rem',color:'var(--text3)',marginBottom:'2rem' }}>
            <Link href="/blog" style={{ color:'var(--text3)',textDecoration:'none' }}>Blog</Link>
            <span style={{ margin:'0 .5rem' }}>›</span>
            <span>What Is StreamNexus?</span>
          </div>

          <span className="blog-tag">Platform</span>
          <h1 style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(1.8rem,4vw,2.8rem)',lineHeight:1.1,margin:'.75rem 0 1rem',letterSpacing:'-.02em' }}>
            What Is StreamNexus? The Complete Guide for Streamers
          </h1>
          <div style={{ fontFamily:'var(--font-mono)',fontSize:'.72rem',color:'var(--text3)',marginBottom:'2.5rem' }}>
            May 2025 · 8 min read · By StreamNexus Team
          </div>

          {/* Lead */}
          <div style={{ background:'rgba(212,175,55,.06)',border:'1px solid rgba(212,175,55,.15)',borderRadius:'var(--r-md)',padding:'1.25rem 1.5rem',marginBottom:'2.5rem',fontSize:'.95rem',lineHeight:1.7,color:'var(--text2)' }}>
            <strong style={{ color:'var(--gold)' }}>TL;DR:</strong> StreamNexus is a paid community of real streamers who support each other through raids, collabs, and mutual viewership. It helps you get discovered faster, reach Twitch Affiliate sooner, and build a genuinely active audience — without bots or fake traffic.
          </div>

          <div style={{ lineHeight:1.8,fontSize:'.96rem',color:'var(--text2)',display:'flex',flexDirection:'column',gap:'1.5rem' }}>
            <section>
              <h2 style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'1.35rem',color:'var(--text)',marginBottom:'.75rem' }}>
                The core problem with solo streaming
              </h2>
              <p>
                If you've streamed consistently for weeks or months and can't break through the 0–3 viewer plateau, you're not alone. The streaming platforms' algorithms heavily favour channels that already have viewers — making it nearly impossible for new creators to get discovered organically.
              </p>
              <p>
                You can have excellent content, a great personality, and stream for 6 hours every day. But without an initial audience, the algorithm has no signal to show your stream to anyone new.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'1.35rem',color:'var(--text)',marginBottom:'.75rem' }}>
                What StreamNexus actually is
              </h2>
              <p>
                StreamNexus is a premium network of over 10,000 verified real streamers who actively support each other's growth. When you join, you gain access to:
              </p>
              <ul style={{ paddingLeft:'1.5rem',display:'flex',flexDirection:'column',gap:'.5rem',margin:'.75rem 0' }}>
                <li><strong style={{ color:'var(--text)' }}>The Raid Network</strong> — Coordinated raids from real StreamNexus members that boost your live viewer count at the exact moments you go live.</li>
                <li><strong style={{ color:'var(--text)' }}>Collab Matchmaking</strong> — Smart matching connects you with streamers in your niche, audience size, and streaming schedule for co-streams and joint events.</li>
                <li><strong style={{ color:'var(--text)' }}>A Private Discord Community</strong> — All coordination, raid requests, collab scheduling, and growth support happens in the private StreamNexus Discord.</li>
                <li><strong style={{ color:'var(--text)' }}>Multi-Platform Support</strong> — Twitch, Kick, YouTube Live, and TikTok Live are all supported.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'1.35rem',color:'var(--text)',marginBottom:'.75rem' }}>
                How the raid network works (step by step)
              </h2>
              <p>
                When you go live, you post in the dedicated Discord channel requesting a raid. StreamNexus members who are currently watching streams — or just finishing their own — can see your request and send their viewers to your channel.
              </p>
              <p>
                These are real Twitch accounts with real viewing history. When 40 StreamNexus members raid your stream simultaneously, Twitch sees a genuine surge of real viewers — which triggers the algorithm to show your stream to more people in the category.
              </p>
              <p>
                This is identical to what large streamers do naturally — they have built communities that raid them. StreamNexus gives smaller streamers that same infrastructure from day one.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'1.35rem',color:'var(--text)',marginBottom:'.75rem' }}>
                Is it safe for my channel?
              </h2>
              <p>
                Yes. Every method used in StreamNexus — raids, collabs, community viewership — is explicitly supported and encouraged by Twitch, Kick, and YouTube. We have never had a member receive any penalty or warning from any platform.
              </p>
              <p>
                The critical difference between StreamNexus and view-buying services is simple: our viewers are real people. Real accounts, real watch time, real engagement. Platforms reward this. They penalise fake traffic.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'1.35rem',color:'var(--text)',marginBottom:'.75rem' }}>
                What results can you expect?
              </h2>
              <p>Based on data from our active members:</p>
              <ul style={{ paddingLeft:'1.5rem',display:'flex',flexDirection:'column',gap:'.5rem',margin:'.75rem 0' }}>
                <li>Average viewer count increases <strong style={{ color:'var(--text)' }}>2–4× within 30 days</strong></li>
                <li><strong style={{ color:'var(--text)' }}>94% of active members</strong> reach Twitch Affiliate within 2 weeks</li>
                <li>Follower growth accelerates <strong style={{ color:'var(--text)' }}>3–5× compared to solo streaming</strong></li>
                <li>Chat activity increases significantly, improving algorithm placement</li>
              </ul>
              <p>Results depend on how actively you participate — members who request raids regularly and engage in collabs see the fastest growth.</p>
            </section>

            <section>
              <h2 style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'1.35rem',color:'var(--text)',marginBottom:'.75rem' }}>
                How much does StreamNexus cost?
              </h2>
              <p>
                StreamNexus uses a one-time payment model — no subscriptions, no monthly fees. There are three tiers:
              </p>
              <ul style={{ paddingLeft:'1.5rem',display:'flex',flexDirection:'column',gap:'.5rem',margin:'.75rem 0' }}>
                <li><strong style={{ color:'var(--text)' }}>Starter — $49</strong>: Raid network access, Discord community, 5 collab requests/month</li>
                <li><strong style={{ color:'var(--gold)' }}>Elite — $139 (Most Popular)</strong>: Everything in Starter plus priority raid placement, unlimited collabs, verified badge</li>
                <li><strong style={{ color:'var(--text)' }}>Nexus Pro — $259</strong>: Everything in Elite plus 1-on-1 coaching, brand deal introductions, homepage feature slot</li>
              </ul>
              <p>All payments are processed securely through Upwork.</p>
            </section>

            <section>
              <h2 style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'1.35rem',color:'var(--text)',marginBottom:'.75rem' }}>
                Is StreamNexus right for you?
              </h2>
              <p>StreamNexus is the right fit if:</p>
              <ul style={{ paddingLeft:'1.5rem',display:'flex',flexDirection:'column',gap:'.5rem',margin:'.75rem 0' }}>
                <li>You're streaming consistently but struggling to break the 0–5 viewer plateau</li>
                <li>You want to reach Twitch Affiliate as fast as legitimately possible</li>
                <li>You're committed to growing and willing to engage with the network</li>
                <li>You want a real community, not bought metrics</li>
              </ul>
              <p>It may not be the right fit if you stream casually with no growth goals, or if you're looking for a passive solution with zero participation required.</p>
            </section>
          </div>

          {/* CTA */}
          <div style={{ background:'rgba(212,175,55,.06)',border:'1px solid rgba(212,175,55,.2)',borderRadius:'var(--r-lg)',padding:'2rem',textAlign:'center',marginTop:'3rem' }}>
            <h3 style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'1.25rem',marginBottom:'.75rem' }}>Ready to See Real Growth?</h3>
            <p style={{ color:'var(--text2)',marginBottom:'1.5rem',lineHeight:1.65,fontSize:'.9rem' }}>Join 10,000+ streamers growing their channels with StreamNexus.</p>
            <div style={{ display:'flex',justifyContent:'center',gap:'1rem',flexWrap:'wrap' }}>
              <Link href="/pricing" className="btn btn-primary">View Pricing →</Link>
              <a href={`mailto:${SITE.email}`} className="btn btn-secondary btn-sm">Ask a Question</a>
            </div>
          </div>

          {/* Back to blog */}
          <div style={{ marginTop:'3rem',paddingTop:'2rem',borderTop:'1px solid var(--border)' }}>
            <Link href="/blog" style={{ fontFamily:'var(--font-mono)',fontSize:'.8rem',color:'var(--text3)',textDecoration:'none',display:'inline-flex',alignItems:'center',gap:'.5rem' }}>
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>

      <footer style={{ background:'var(--bg2)',borderTop:'1px solid var(--border)',padding:'2rem 0' }}>
        <div className="container">
          <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'1rem' }}>
            <div className="nav-logo"><div className="nav-logo-dot" />StreamNexus</div>
            <div style={{ display:'flex',gap:'1.25rem',flexWrap:'wrap' }}>
              <Link href="/" style={{ fontSize:'.85rem',color:'var(--text2)' }}>Home</Link>
              <Link href="/pricing" style={{ fontSize:'.85rem',color:'var(--text2)' }}>Pricing</Link>
              <Link href="/faq" style={{ fontSize:'.85rem',color:'var(--text2)' }}>FAQ</Link>
              <Link href="/blog" style={{ fontSize:'.85rem',color:'var(--text2)' }}>Blog</Link>
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
