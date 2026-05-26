import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import RevealObserver from '@/components/RevealObserver'
import ContactForm from '@/components/ContactForm'
import { SITE, PRICING, FAQ_CATEGORIES } from '@/lib/config'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Pricing — StreamNexus Growth Plans',
  description: 'Simple one-time pricing. Join the StreamNexus raid network and grow your Twitch, Kick, or YouTube channel starting from $49.',
  openGraph: {
    title: 'StreamNexus Pricing — Start Growing From $49',
    description: 'One-time payment. Lifetime access. Real viewers on your stream.',
  },
}

const PRICING_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'StreamNexus Pricing Plans',
  itemListElement: PRICING.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: `StreamNexus ${p.name}`,
      description: p.features.join(', '),
      offers: {
        '@type': 'Offer',
        price: p.price,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: p.link,
      },
    },
  })),
}

const PLATFORMS = [
  {
    icon: '🟣',
    name: 'Twitch',
    color: '#9146ff',
    bg: 'rgba(145,70,255,.06)',
    border: 'rgba(145,70,255,.2)',
    streamers: [
      { name: 'Aydan', handle: 'aydan', cat: 'COD', viewers: '28K' },
      { name: 'Clix', handle: 'clix', cat: 'Fortnite', viewers: '21K' },
      { name: 'NICKMERCS', handle: 'nickmercs', cat: 'Warzone', viewers: '48K' },
      { name: 'CohhCarnage', handle: 'cohhcarnage', cat: 'Variety', viewers: '14K' },
      { name: 'Pokimane', handle: 'pokimane', cat: 'Just Chatting', viewers: '52K' },
      { name: 'Caedrel', handle: 'caedrel', cat: 'LoL Esports', viewers: '43K' },
    ],
  },
  {
    icon: '🟢',
    name: 'Kick',
    color: '#53FC18',
    bg: 'rgba(83,252,24,.06)',
    border: 'rgba(83,252,24,.2)',
    streamers: [
      { name: 'Adin Ross', handle: 'AdinRoss', cat: 'Just Chatting', viewers: '48K' },
      { name: 'xQc', handle: 'xQc', cat: 'Variety', viewers: '61K' },
      { name: 'WestCOL', handle: 'WestCOL', cat: 'IRL', viewers: '54K' },
      { name: 'Absi', handle: 'Absi', cat: 'GTA V', viewers: '28K' },
      { name: 'tyler1', handle: 'tyler1', cat: 'LoL', viewers: '67K' },
      { name: 'Elraenn', handle: 'Elraenn', cat: 'Rust', viewers: '16K' },
    ],
  },
  {
    icon: '🔴',
    name: 'YouTube',
    color: '#FF0000',
    bg: 'rgba(255,0,0,.06)',
    border: 'rgba(255,0,0,.2)',
    streamers: [
      { name: 'TommyInnit', handle: 'TommyInnit', cat: 'Minecraft', viewers: '52K' },
      { name: 'Gaules', handle: 'Gaules', cat: 'CS2 Esports', viewers: '38K' },
      { name: 'Markiplier', handle: 'Markiplier', cat: 'Variety', viewers: '42K' },
      { name: 'TypicalGamer', handle: 'TypicalGamer', cat: 'Fortnite', viewers: '18K' },
      { name: 'TenZ', handle: 'tenz', cat: 'Valorant', viewers: '41K' },
      { name: 'Valkyrae', handle: 'valkyrae', cat: 'Variety', viewers: '31K' },
    ],
  },
  {
    icon: '⚫',
    name: 'TikTok',
    color: '#ffffff',
    bg: 'rgba(255,255,255,.04)',
    border: 'rgba(255,255,255,.1)',
    streamers: [
      { name: 'TikTok Creator A', handle: 'creator_a', cat: 'Gaming', viewers: '12K' },
      { name: 'TikTok Creator B', handle: 'creator_b', cat: 'IRL', viewers: '8K' },
      { name: 'TikTok Creator C', handle: 'creator_c', cat: 'Just Chatting', viewers: '15K' },
      { name: 'TikTok Creator D', handle: 'creator_d', cat: 'Fortnite', viewers: '9K' },
      { name: 'TikTok Creator E', handle: 'creator_e', cat: 'Valorant', viewers: '11K' },
      { name: 'TikTok Creator F', handle: 'creator_f', cat: 'Minecraft', viewers: '7K' },
    ],
  },
]

const PRICING_FAQ = FAQ_CATEGORIES.find(c => c.category === 'Pricing & Payment')?.questions ?? []

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PRICING_SCHEMA) }} />
      <Nav />
      <RevealObserver />

      {/* ── HERO ── */}
      <section style={{ paddingTop:'calc(64px + 5rem)',paddingBottom:'4rem',background:'var(--bg)',textAlign:'center',position:'relative',overflow:'hidden' }}>
        <div aria-hidden="true" style={{ position:'absolute',top:'-60px',left:'50%',transform:'translateX(-50%)',width:'600px',height:'400px',background:'radial-gradient(ellipse,rgba(212,175,55,.08),transparent 70%)',pointerEvents:'none' }} />
        <div className="container" style={{ position:'relative',zIndex:1 }}>
          <span className="sec-eyebrow">Pricing</span>
          <h1 style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(2rem,5vw,3.5rem)',lineHeight:1.1,marginBottom:'1rem',letterSpacing:'-.02em' }}>
            Start Small, <em>Scale as You Grow</em>
          </h1>
          <p style={{ color:'var(--text2)',maxWidth:'520px',margin:'0 auto 2rem',lineHeight:1.7,fontSize:'1rem' }}>
            One-time payment. Lifetime network access. No hidden fees, no subscriptions.
            Every plan pays for itself with the growth it delivers.
          </p>
          <div style={{ display:'flex',justifyContent:'center',gap:'.6rem',flexWrap:'wrap' }}>
            <span className="trust-badge">🔒 Secure via Upwork</span>
            <span className="trust-badge">✅ TOS Compliant</span>
            <span className="trust-badge">⚡ Access in 24h</span>
            <span className="trust-badge">📈 Real Viewer Growth</span>
          </div>
        </div>
      </section>

      {/* ── PRICING CARDS ── */}
      <section style={{ paddingTop:'2rem' }}>
        <div className="container">
          <div className="pricing-grid">
            {PRICING.map((plan, i) => (
              <div key={plan.id} className={`plan-card reveal reveal-delay-${i + 1}${plan.badge ? ' featured' : ''}`}>
                {plan.badge && <div className="plan-badge">{plan.badge}</div>}
                <div className="plan-name">{plan.name}</div>
                <div className="plan-price"><sup>$</sup>{plan.price}</div>
                <div className="plan-period">{plan.period}</div>

                {/* Value callout */}
                <div style={{ background:'rgba(212,175,55,.06)',border:'1px solid rgba(212,175,55,.15)',borderRadius:'10px',padding:'.65rem .9rem',marginBottom:'1.25rem',fontSize:'.78rem',color:'var(--text2)',lineHeight:1.5 }}>
                  {plan.id === 'starter' && '✓ Perfect if you\'re just starting out. Join the network today.'}
                  {plan.id === 'elite' && '🔥 Best value. Chosen by 70% of our members. Fastest growth.'}
                  {plan.id === 'pro' && '👑 For serious creators ready to reach Partner level.'}
                </div>

                <div className="plan-divider" />
                <ul className="plan-features">
                  {plan.features.map((f, j) => (
                    <li key={j} className="plan-feat-item">
                      <span className="plan-feat-check">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                  {plan.missing.map((f, j) => (
                    <li key={j} className="plan-feat-item">
                      <span className="plan-feat-cross">✗</span>
                      <span className="plan-feat-missing">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={plan.badge ? 'btn-plan-primary' : 'btn-plan-outline'}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="plan-note reveal" style={{ marginTop:'1.75rem' }}>
            🔒 Secure payment via Upwork · All major cards + PayPal accepted ·{' '}
            Questions? <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section style={{ background:'var(--bg2)' }}>
        <div className="container">
          <div style={{ textAlign:'center',marginBottom:'2.5rem' }} className="reveal">
            <span className="sec-eyebrow">Compare Plans</span>
            <h2 style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(1.6rem,3vw,2.2rem)',lineHeight:1.15 }}>
              What's Included in <em>Each Plan</em>
            </h2>
          </div>
          <div className="reveal" style={{ overflowX:'auto' }}>
            <table style={{ width:'100%',borderCollapse:'collapse',fontFamily:'var(--font-body)',fontSize:'.88rem' }}>
              <thead>
                <tr>
                  <th style={{ textAlign:'left',padding:'1rem 1.25rem',fontFamily:'var(--font-mono)',fontSize:'.7rem',color:'var(--text3)',letterSpacing:'.1em',textTransform:'uppercase',borderBottom:'1px solid var(--border)' }}>Feature</th>
                  {PRICING.map(p => (
                    <th key={p.id} style={{ padding:'1rem 1.25rem',textAlign:'center',fontFamily:'var(--font-display)',fontWeight:700,borderBottom:'1px solid var(--border)',color: p.badge ? 'var(--gold)' : 'var(--text)' }}>
                      {p.name}
                      {p.badge && <div style={{ fontFamily:'var(--font-mono)',fontSize:'.6rem',fontWeight:400,color:'var(--gold)',marginTop:'.2rem' }}>★ Popular</div>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Raid Network Access', vals: [true, true, true] },
                  { label: 'Community Discord', vals: [true, true, true] },
                  { label: 'Collab Requests / mo', vals: ['5', 'Unlimited', 'Unlimited'] },
                  { label: 'Growth Analytics', vals: ['Basic', 'Advanced', 'Advanced'] },
                  { label: 'Priority Raid Placement', vals: [false, true, true] },
                  { label: 'StreamNexus Verified Badge', vals: [false, true, true] },
                  { label: 'Featured in Nexus Discover', vals: [false, true, true] },
                  { label: 'Homepage Feature Slot', vals: [false, false, true] },
                  { label: '1-on-1 Growth Coaching', vals: [false, false, true] },
                  { label: 'Brand Deal Introductions', vals: [false, false, true] },
                  { label: 'Partner Application Support', vals: [false, false, true] },
                  { label: 'Custom Collab Events', vals: [false, false, true] },
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'var(--surface)' }}>
                    <td style={{ padding:'.85rem 1.25rem',color:'var(--text2)',borderBottom:'1px solid var(--border)' }}>{row.label}</td>
                    {row.vals.map((v, j) => (
                      <td key={j} style={{ padding:'.85rem 1.25rem',textAlign:'center',borderBottom:'1px solid var(--border)', color: v === true ? '#00ff80' : v === false ? 'var(--text3)' : 'var(--text)' }}>
                        {v === true ? '✓' : v === false ? '—' : <strong>{v}</strong>}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td style={{ padding:'1.25rem' }} />
                  {PRICING.map(p => (
                    <td key={p.id} style={{ padding:'1.25rem',textAlign:'center' }}>
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className={p.badge ? 'btn-plan-primary' : 'btn-plan-outline'} style={{ display:'inline-block' }}>
                        ${p.price} →
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section id="streamers">
        <div className="container">
          <div style={{ textAlign:'center',marginBottom:'3rem' }} className="reveal">
            <span className="sec-eyebrow">All Platforms</span>
            <h2 style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(1.6rem,3vw,2.5rem)',lineHeight:1.15 }}>
              Grow on <em>Every Platform</em>
            </h2>
            <p style={{ color:'var(--text2)',maxWidth:'480px',margin:'.75rem auto 0',lineHeight:1.7 }}>
              StreamNexus supports all major streaming platforms. One membership, four platforms.
            </p>
          </div>

          <div style={{ display:'flex',flexDirection:'column',gap:'3rem' }}>
            {PLATFORMS.map((plat, pi) => (
              <div key={pi} className="reveal">
                {/* Platform header */}
                <div style={{ display:'flex',alignItems:'center',gap:'1rem',marginBottom:'1.25rem',padding:'1rem 1.5rem',background:plat.bg,border:`1px solid ${plat.border}`,borderRadius:'var(--r-lg)' }}>
                  <span style={{ fontSize:'1.75rem' }}>{plat.icon}</span>
                  <div>
                    <div style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'1.1rem',color:plat.color }}>{plat.name}</div>
                    <div style={{ fontFamily:'var(--font-mono)',fontSize:'.68rem',color:'var(--text3)' }}>StreamNexus {plat.name} Network</div>
                  </div>
                  <div style={{ marginLeft:'auto',fontFamily:'var(--font-display)',fontWeight:800,color:plat.color,fontSize:'1.1rem' }}>
                    {plat.name === 'Twitch' ? '6,500+' : plat.name === 'Kick' ? '2,800+' : plat.name === 'YouTube' ? '1,200+' : '500+'} creators
                  </div>
                </div>

                {/* Streamer cards */}
                <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))',gap:'1rem' }}>
                  {plat.streamers.map((s, si) => {
                    const avatarSrc = plat.name === 'Twitch'
                      ? `https://unavatar.io/twitch/${s.handle}`
                      : plat.name === 'YouTube'
                      ? `https://unavatar.io/youtube/${s.handle}`
                      : plat.name === 'Kick'
                      ? `https://unavatar.io/twitch/${s.handle}`
                      : `https://ui-avatars.com/api/?name=${s.name.slice(0,2)}&background=1a1a1a&color=ffffff&bold=true&size=80`
                    const fallback = `https://ui-avatars.com/api/?name=${s.name.slice(0,2)}&background=1a1a1a&color=D4AF37&bold=true&size=80`

                    return (
                      <div key={si} style={{ background:'var(--card-bg)',border:'1px solid var(--card-border)',borderRadius:'var(--r-md)',padding:'1rem',textAlign:'center',transition:'all .3s var(--ease-spring)' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = plat.border; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)' }}
                        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = ''; (e.currentTarget as HTMLDivElement).style.transform = '' }}
                      >
                        <div style={{ width:'44px',height:'44px',borderRadius:'50%',overflow:'hidden',margin:'0 auto .65rem',border:`2px solid ${plat.border}` }}>
                          <img src={avatarSrc} alt={s.name} style={{ width:'100%',height:'100%',objectFit:'cover' }}
                            onError={(e) => { (e.target as HTMLImageElement).src = fallback }} />
                        </div>
                        <div style={{ fontFamily:'var(--font-display)',fontWeight:700,fontSize:'.82rem',marginBottom:'.2rem' }}>{s.name}</div>
                        <div style={{ fontFamily:'var(--font-mono)',fontSize:'.62rem',color:'var(--text3)' }}>{s.cat}</div>
                        <div style={{ display:'flex',alignItems:'center',justifyContent:'center',gap:'.3rem',marginTop:'.4rem' }}>
                          <span style={{ width:'6px',height:'6px',borderRadius:'50%',background:'var(--red)',display:'inline-block',animation:'logoPulse 2s infinite' }} />
                          <span style={{ fontFamily:'var(--font-mono)',fontSize:'.62rem',color:plat.color }}>{s.viewers}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING FAQ ── */}
      <section style={{ background:'var(--bg2)' }}>
        <div className="container" style={{ maxWidth:760 }}>
          <div style={{ textAlign:'center',marginBottom:'2.5rem' }} className="reveal">
            <span className="sec-eyebrow">Pricing FAQ</span>
            <h2 style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(1.6rem,3vw,2.2rem)',lineHeight:1.15 }}>
              Pricing <em>Questions Answered</em>
            </h2>
          </div>
          <div className="reveal">
            <FAQAccordion items={PRICING_FAQ} />
          </div>
          <div style={{ textAlign:'center',marginTop:'2rem' }} className="reveal">
            <Link href="/faq" className="btn btn-ghost">View All 20 FAQ →</Link>
          </div>
        </div>
      </section>

      {/* ── APPLY FORM ── */}
      <section id="apply">
        <div className="container">
          <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:'3rem',alignItems:'start' }}>
            <div className="reveal">
              <span className="sec-eyebrow">Apply Now</span>
              <h2 style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(1.6rem,3vw,2.5rem)',lineHeight:1.15,marginBottom:'1rem' }}>
                Ready to <em>Join the Network?</em>
              </h2>
              <p style={{ color:'var(--text2)',lineHeight:1.7,marginBottom:'2rem' }}>
                Not sure which plan is right for you? Send us a message and we'll help you choose.
              </p>
              <div style={{ display:'flex',flexDirection:'column',gap:'.7rem' }}>
                {[
                  { icon:'⚡', text:'Response within 24 hours' },
                  { icon:'🌍', text:'Open to creators worldwide' },
                  { icon:'💳', text:'Secure payment via Upwork' },
                  { icon:'🤝', text:'Brand & partnership inquiries welcome' },
                ].map((item, i) => (
                  <div key={i} style={{ display:'flex',alignItems:'center',gap:'.65rem',fontSize:'.9rem',color:'var(--text2)' }}>
                    <span>{item.icon}</span><span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="container">
          <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'1rem' }}>
            <div className="nav-logo">
              <div className="nav-logo-dot" />
              StreamNexus
            </div>
            <div style={{ display:'flex',gap:'1.25rem',flexWrap:'wrap' }}>
              <Link href="/" style={{ fontSize:'.85rem',color:'var(--text2)' }}>Home</Link>
              <Link href="/faq" style={{ fontSize:'.85rem',color:'var(--text2)' }}>FAQ</Link>
              <Link href="/blog" style={{ fontSize:'.85rem',color:'var(--text2)' }}>Blog</Link>
              <a href={SITE.discord} target="_blank" rel="noopener noreferrer" style={{ fontSize:'.85rem',color:'var(--text2)' }}>Discord</a>
            </div>
          </div>
          <div style={{ borderTop:'1px solid var(--border)',marginTop:'1.5rem',paddingTop:'1.5rem' }}>
            <div className="footer-copy">© 2025 StreamNexus · {SITE.email} · 🛡 Zero Bots · ✅ TOS Safe</div>
          </div>
        </div>
      </footer>
    </>
  )
}
