import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import ActivityTicker from '@/components/ActivityTicker'
import RevealObserver from '@/components/RevealObserver'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import { SITE, PRICING, STATS, TESTIMONIALS, HOW_IT_WORKS, FAQ_CATEGORIES } from '@/lib/config'

export const metadata: Metadata = {
  title: 'StreamNexus — Get Real Viewers & Grow Your Stream Fast',
  description: 'StreamNexus is a premium streaming growth network. Get real viewers, join raid networks, and grow your Twitch, Kick, or YouTube channel organically.',
  openGraph: {
    title: 'StreamNexus — Get Real Viewers & Grow Your Stream Fast',
    description: 'Premium streaming growth network for Twitch, Kick, YouTube & TikTok creators.',
  },
}

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'StreamNexus',
  url: SITE.url,
  email: SITE.email,
  description: SITE.description,
  sameAs: [SITE.discord],
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'StreamNexus',
  url: SITE.url,
}

const CHART_HEIGHTS = [25, 38, 32, 55, 42, 70, 58, 82, 68, 90, 75, 95]

const PROBLEMS = [
  'Streaming to 0–3 viewers for months with no growth',
  'Going live and getting ignored by the algorithm',
  'No idea how to get discovered in a crowded category',
  'Building a community alone takes years, not weeks',
  'Chat is empty — no one to engage with your content',
]

const SOLUTIONS = [
  'Get real viewers in your stream from day one',
  'Raid network boosts your channel at peak moments',
  'Collab matchmaking puts you in front of new audiences',
  'Build an active community of engaged regular viewers',
  'Grow on Twitch, Kick, YouTube and TikTok simultaneously',
]

const FEATURES = [
  { icon: '🔁', title: 'Raid Network', desc: 'Coordinated raids from real streamers boost your live viewer count the moment it matters most.', color: 'rgba(123,47,247,.08)' },
  { icon: '🤝', title: 'Collab Matchmaking', desc: 'Smart matching by niche, size & availability connects you with the right co-stream partners.', color: 'rgba(0,207,255,.08)' },
  { icon: '📈', title: 'Real Audience Growth', desc: 'Zero bots. Every viewer is a real person from our vetted network of active streamers.', color: 'rgba(212,175,55,.08)' },
  { icon: '⚡', title: 'Faster Affiliate / Partner', desc: 'Members reach Twitch Affiliate 3× faster than solo streamers — on average within 14 days.', color: 'rgba(83,252,24,.06)' },
  { icon: '💬', title: 'Active Chat Engagement', desc: 'More chat activity = better algorithm signals = better discoverability for your channel.', color: 'rgba(212,175,55,.06)' },
  { icon: '🌍', title: 'Multi-Platform Support', desc: 'Twitch, Kick, YouTube Live, TikTok Live — grow across every platform from one network.', color: 'rgba(0,207,255,.06)' },
]

const TRUST_ITEMS = [
  { icon: '🛡', title: 'Zero Bot Policy', desc: 'Every network member is a verified real human streamer. We actively remove any fake accounts.' },
  { icon: '✅', title: 'TOS Compliant', desc: 'All methods — raids, collabs, mutual viewership — are explicitly allowed by Twitch, Kick, and YouTube.' },
  { icon: '🔒', title: 'Secure Payments', desc: 'All transactions processed through Upwork with full buyer protection. No hidden charges.' },
  { icon: '⚡', title: '24-Hour Onboarding', desc: 'Discord access granted within 24 hours of purchase. Start your first raid the same day.' },
  { icon: '🌍', title: 'Global Network', desc: '10,000+ streamers across 40+ countries. Find collaborators in your timezone and language.' },
  { icon: '💯', title: '94% Affiliate Rate', desc: '94% of active members reach Twitch Affiliate within 2 weeks. The network works.' },
]

const FAQ_PREVIEW = FAQ_CATEGORIES[0].questions.slice(0, 4)

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <Nav />
      <ActivityTicker />
      <RevealObserver />

      {/* ══ HERO ══ */}
      <section className="hero" id="hero">
        <div className="hero-grid" aria-hidden="true" />
        {/* decorative orbs */}
        <div aria-hidden="true" style={{ position:'absolute',top:'20%',left:'5%',width:'400px',height:'400px',borderRadius:'50%',background:'radial-gradient(circle,rgba(123,47,247,.12),transparent 70%)',pointerEvents:'none' }} />
        <div aria-hidden="true" style={{ position:'absolute',bottom:'10%',right:'8%',width:'350px',height:'350px',borderRadius:'50%',background:'radial-gradient(circle,rgba(0,207,255,.08),transparent 70%)',pointerEvents:'none' }} />

        <div className="container">
          <div className="hero-content">
            <div style={{ display:'flex',justifyContent:'center',gap:'.6rem',flexWrap:'wrap',marginBottom:'1.5rem' }}>
              <span className="trust-badge">🛡 Zero Bots</span>
              <span className="trust-badge">✅ TOS Safe</span>
              <span className="trust-badge">⚡ Results in 48h</span>
              <span className="trust-badge">🌍 10,000+ Streamers</span>
            </div>

            <h1 className="hero-title display">
              Get <em>Real Viewers</em> on Your Stream<br />
              — Grow Without Bots
            </h1>

            <p className="hero-sub">
              StreamNexus is a premium growth network for Twitch, Kick, YouTube &amp; TikTok creators.
              Increase visibility, attract active viewers, and build a real audience — organically.
            </p>

            <div className="hero-actions">
              <Link
                href={`mailto:${SITE.email}?subject=StreamNexus%20Application&body=Hi%20StreamNexus%20Team%2C%0A%0AI%20want%20to%20join%20the%20network.%0A%0AMy%20name%3A%20%0AMy%20platform%3A%20%0AMy%20channel%3A%20%0A%0AThanks!`}
                className="btn btn-primary btn-lg"
              >
                🚀 Start Growing
              </Link>
              <Link href="#proof" className="btn btn-secondary btn-lg">
                📊 View Live Results
              </Link>
            </div>

            <div className="hero-stats">
              {STATS.map((s, i) => (
                <div key={i} style={{ textAlign:'center' }}>
                  <div className="hero-stat-val">{s.value}{s.suffix}</div>
                  <div className="hero-stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PLATFORM STRIP ══ */}
      <div className="platform-strip" aria-label="Supported platforms">
        <div className="platform-strip-inner">
          {[...Array(2)].flatMap(() => [
            <div key={Math.random()} className="plat-chip">🟣 Twitch</div>,
            <div key={Math.random()} className="plat-chip">🟢 Kick</div>,
            <div key={Math.random()} className="plat-chip">🔴 YouTube</div>,
            <div key={Math.random()} className="plat-chip">⚫ TikTok Live</div>,
            <div key={Math.random()} className="plat-chip" style={{ color:'rgba(255,255,255,.08)' }}>·</div>,
            <div key={Math.random()} className="plat-chip">🔁 Raid Network</div>,
            <div key={Math.random()} className="plat-chip">🤝 Collab Matching</div>,
            <div key={Math.random()} className="plat-chip">📈 Real Growth</div>,
            <div key={Math.random()} className="plat-chip">⚡ Affiliate Fast</div>,
            <div key={Math.random()} className="plat-chip" style={{ color:'rgba(255,255,255,.08)' }}>·</div>,
          ])}
        </div>
      </div>

      {/* ══ PROBLEM / SOLUTION ══ */}
      <section style={{ background:'var(--bg2)' }}>
        <div className="container">
          <div style={{ textAlign:'center',marginBottom:'3rem' }} className="reveal">
            <span className="sec-eyebrow">The Problem</span>
            <h2 className="sec-title">Why Most Streamers <em>Never Grow</em></h2>
            <p className="sec-sub" style={{ margin:'0 auto' }}>
              97% of streamers plateau at 0–3 viewers. Here's why — and how StreamNexus solves it.
            </p>
          </div>
          <div className="problem-grid reveal">
            <div className="problem-card">
              <div style={{ display:'flex',alignItems:'center',gap:'.75rem',marginBottom:'1.25rem' }}>
                <span style={{ fontSize:'1.5rem' }}>😓</span>
                <div>
                  <div style={{ fontFamily:'var(--font-display)',fontWeight:700,color:'var(--red)' }}>The Struggle</div>
                  <div style={{ fontFamily:'var(--font-mono)',fontSize:'.68rem',color:'var(--text3)' }}>Solo streaming problems</div>
                </div>
              </div>
              {PROBLEMS.map((p, i) => (
                <div key={i} className="problem-item">
                  <span style={{ color:'var(--red)',fontSize:'.8rem',marginTop:'.15rem' }}>✗</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
            <div className="solution-card">
              <div style={{ display:'flex',alignItems:'center',gap:'.75rem',marginBottom:'1.25rem' }}>
                <span style={{ fontSize:'1.5rem' }}>⚡</span>
                <div>
                  <div style={{ fontFamily:'var(--font-display)',fontWeight:700,color:'var(--green)' }}>The StreamNexus Solution</div>
                  <div style={{ fontFamily:'var(--font-mono)',fontSize:'.68rem',color:'var(--text3)' }}>What changes when you join</div>
                </div>
              </div>
              {SOLUTIONS.map((s, i) => (
                <div key={i} className="solution-item">
                  <span style={{ color:'var(--green)',fontSize:'.8rem',marginTop:'.15rem' }}>✓</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section id="how-it-works">
        <div className="container">
          <div style={{ textAlign:'center',marginBottom:'3rem' }} className="reveal">
            <span className="sec-eyebrow">How It Works</span>
            <h2 className="sec-title">From Zero to <em>Growing</em> in 4 Steps</h2>
            <p className="sec-sub" style={{ margin:'0 auto' }}>Simple to join. Immediate results. No technical setup required.</p>
          </div>
          <div className="steps-grid">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={i} className={`step-card reveal reveal-delay-${i + 1}`}>
                <div className="step-num">{step.step}</div>
                <span className="step-icon">{step.icon}</span>
                <div className="step-title">{step.title}</div>
                <div className="step-desc">{step.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center',marginTop:'2.5rem' }} className="reveal">
            <Link
              href={`mailto:${SITE.email}?subject=StreamNexus%20Application`}
              className="btn btn-primary"
            >
              Apply to Join Now →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ FEATURES ══ */}
      <section id="features" style={{ background:'var(--bg2)' }}>
        <div className="container">
          <div style={{ textAlign:'center',marginBottom:'3rem' }} className="reveal">
            <span className="sec-eyebrow">Features</span>
            <h2 className="sec-title">Everything You Need to <em>Grow Faster</em></h2>
            <p className="sec-sub" style={{ margin:'0 auto' }}>One network. Every tool a serious streamer needs.</p>
          </div>
          <div className="features-grid">
            {FEATURES.map((f, i) => (
              <div key={i} className={`feature-card reveal reveal-delay-${(i % 3) + 1}`} style={{ '--feature-color': f.color } as React.CSSProperties}>
                <span className="feature-icon">{f.icon}</span>
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DASHBOARD PROOF ══ */}
      <section id="proof">
        <div className="container">
          <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:'3rem',alignItems:'center' }}>
            <div className="reveal">
              <span className="sec-eyebrow">Real Results</span>
              <h2 className="sec-title">See What <em>Members Achieve</em></h2>
              <p style={{ color:'var(--text2)',marginTop:'1rem',lineHeight:'1.7',fontSize:'.95rem' }}>
                Based on data from 10,000+ active StreamNexus members. Results vary by participation level, but the network delivers.
              </p>
              <div style={{ display:'flex',flexDirection:'column',gap:'.75rem',marginTop:'1.75rem' }}>
                {[
                  { label: 'Average viewer increase', val: '+2–4×', color: 'var(--gold)' },
                  { label: 'Affiliate rate (active members)', val: '94%', color: 'var(--green)' },
                  { label: 'Avg days to first milestone', val: '14 days', color: 'var(--blue)' },
                  { label: 'Member satisfaction score', val: '4.8 / 5', color: 'var(--purple)' },
                ].map((m, i) => (
                  <div key={i} style={{ display:'flex',alignItems:'center',justifyContent:'space-between',padding:'.85rem 1rem',background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'10px' }}>
                    <span style={{ fontSize:'.88rem',color:'var(--text2)' }}>{m.label}</span>
                    <span style={{ fontFamily:'var(--font-display)',fontWeight:800,color:m.color }}>{m.val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="dashboard-preview">
                <div className="dash-titlebar">
                  <div className="dash-dot" style={{ background:'#ff5f57' }} />
                  <div className="dash-dot" style={{ background:'#ffbd2e' }} />
                  <div className="dash-dot" style={{ background:'#28c840' }} />
                  <span className="dash-title">StreamNexus · Member Dashboard</span>
                  <span style={{ marginLeft:'auto',display:'flex',alignItems:'center',gap:'.35rem',fontFamily:'var(--font-mono)',fontSize:'.62rem',color:'var(--green)' }}>
                    <span style={{ width:'6px',height:'6px',borderRadius:'50%',background:'var(--green)',display:'inline-block',animation:'logoPulse 2s infinite' }} />
                    Live
                  </span>
                </div>
                <div className="dash-stats">
                  {[
                    { val: '2,847', lbl: 'Followers', change: '+312 this week' },
                    { val: '94', lbl: 'Avg Viewers', change: '+41 vs last week' },
                    { val: '28', lbl: 'Raid Events', change: '+12 this month' },
                    { val: '4.9★', lbl: 'Rating', change: '92% satisfaction' },
                  ].map((s, i) => (
                    <div key={i} className="dash-stat">
                      <div className="dash-stat-val">{s.val}</div>
                      <div className="dash-stat-lbl">{s.lbl}</div>
                      <div className="dash-stat-change">{s.change}</div>
                    </div>
                  ))}
                </div>
                <div className="dash-chart">
                  <div style={{ fontFamily:'var(--font-mono)',fontSize:'.62rem',color:'var(--text3)',marginBottom:'.75rem' }}>Viewer Growth — Last 12 Streams</div>
                  <div className="chart-bars">
                    {CHART_HEIGHTS.map((h, i) => (
                      <div
                        key={i}
                        className="chart-bar"
                        style={{ height: `${h}%`, '--bar-delay': `${i * 0.06}s` } as React.CSSProperties}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STREAMERS SECTION ══ */}
      <section id="streamers" style={{ background:'var(--bg2)' }}>
        <div className="container">
          <div style={{ textAlign:'center',marginBottom:'3rem' }} className="reveal">
            <span className="sec-eyebrow">Network Members</span>
            <h2 className="sec-title">Streamers from Every <em>Platform</em></h2>
            <p className="sec-sub" style={{ margin:'0 auto' }}>
              Our network includes creators across Twitch, Kick, YouTube, and TikTok.
            </p>
          </div>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1rem' }} className="reveal">
            {[
              { icon:'🟣',name:'Twitch',count:'6,500+',desc:'Category-wide raid queues',color:'rgba(145,70,255,.12)',border:'rgba(145,70,255,.25)' },
              { icon:'🟢',name:'Kick',count:'2,800+',desc:'Dedicated Kick raid network',color:'rgba(83,252,24,.08)',border:'rgba(83,252,24,.2)' },
              { icon:'🔴',name:'YouTube',count:'1,200+',desc:'Live stream collaborations',color:'rgba(255,0,0,.08)',border:'rgba(255,0,0,.2)' },
              { icon:'⚫',name:'TikTok',count:'500+',desc:'TikTok Live co-stream',color:'rgba(255,255,255,.04)',border:'rgba(255,255,255,.1)' },
            ].map((p,i) => (
              <div key={i} style={{ background:p.color,border:`1px solid ${p.border}`,borderRadius:'var(--r-lg)',padding:'1.5rem',textAlign:'center' }} className={`reveal reveal-delay-${i+1}`}>
                <div style={{ fontSize:'2rem',marginBottom:'.5rem' }}>{p.icon}</div>
                <div style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'1rem',marginBottom:'.25rem' }}>{p.name}</div>
                <div style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'1.5rem',color:'var(--gold)',marginBottom:'.25rem' }}>{p.count}</div>
                <div style={{ fontSize:'.8rem',color:'var(--text2)' }}>{p.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center',marginTop:'2rem' }} className="reveal">
            <Link href={SITE.url} className="btn btn-ghost" target="_blank">
              🔴 View Live Streamer Directory →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section>
        <div className="container">
          <div style={{ textAlign:'center',marginBottom:'3rem' }} className="reveal">
            <span className="sec-eyebrow">Social Proof</span>
            <h2 className="sec-title">Real Streamers, <em>Real Results</em></h2>
            <p className="sec-sub" style={{ margin:'0 auto' }}>No fake reviews. Every result from a verified StreamNexus member.</p>
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={`testi-card reveal reveal-delay-${(i % 2) + 1}`}>
                <div className="testi-header">
                  <div className="testi-av">
                    <img src={t.avatar} alt={t.name}
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${t.name.slice(0,2)}&background=1a1a1a&color=D4AF37&bold=true&size=80`
                      }}
                    />
                  </div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-plat" style={{ color: t.color }}>{t.platform}</div>
                  </div>
                  <div className="testi-stars">★★★★★</div>
                </div>
                <p className="testi-text">"{t.text}"</p>
                <div className="testi-result">{t.result}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center',marginTop:'2.5rem' }} className="reveal">
            <p style={{ fontFamily:'var(--font-mono)',fontSize:'.75rem',color:'var(--text3)',marginBottom:'1rem' }}>
              65+ verified reviews across Twitch 🟣 · Kick 🟢 · YouTube 🔴
            </p>
            <Link href={SITE.url + '/#reviews'} className="btn btn-ghost" target="_blank">
              Read All 65+ Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ TRUST ══ */}
      <section style={{ background:'var(--bg2)' }}>
        <div className="container">
          <div style={{ textAlign:'center',marginBottom:'3rem' }} className="reveal">
            <span className="sec-eyebrow">Why Trust Us</span>
            <h2 className="sec-title">Built on <em>Transparency</em></h2>
          </div>
          <div className="trust-grid reveal">
            {TRUST_ITEMS.map((t, i) => (
              <div key={i} className="trust-item">
                <span className="trust-icon">{t.icon}</span>
                <div>
                  <div className="trust-label">{t.title}</div>
                  <div className="trust-desc">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRICING ══ */}
      <section id="pricing">
        <div className="container">
          <div style={{ textAlign:'center',marginBottom:'3rem' }} className="reveal">
            <span className="sec-eyebrow">Pricing</span>
            <h2 className="sec-title">Start Small, <em>Scale as You Grow</em></h2>
            <p className="sec-sub" style={{ margin:'0 auto' }}>
              One-time payment. No subscriptions. Lifetime access at your tier.
            </p>
          </div>
          <div className="pricing-grid">
            {PRICING.map((plan, i) => (
              <div key={plan.id} className={`plan-card reveal reveal-delay-${i + 1}${plan.badge ? ' featured' : ''}`}>
                {plan.badge && <div className="plan-badge">{plan.badge}</div>}
                <div className="plan-name">{plan.name}</div>
                <div className="plan-price">
                  <sup>$</sup>{plan.price}
                </div>
                <div className="plan-period">{plan.period}</div>
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
          <p className="plan-note reveal">
            🔒 Secure payment via Upwork · Questions?{' '}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
        </div>
      </section>

      {/* ══ FAQ PREVIEW ══ */}
      <section style={{ background:'var(--bg2)' }}>
        <div className="container" style={{ maxWidth:780 }}>
          <div style={{ textAlign:'center',marginBottom:'3rem' }} className="reveal">
            <span className="sec-eyebrow">FAQ</span>
            <h2 className="sec-title">Common <em>Questions</em></h2>
          </div>
          <div className="reveal">
            <FAQAccordion items={FAQ_PREVIEW} />
          </div>
          <div style={{ textAlign:'center',marginTop:'2rem' }} className="reveal">
            <Link href="/faq" className="btn btn-ghost">
              View All 20 Questions →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="reveal">
              <span className="sec-eyebrow">Apply Now</span>
              <h2 className="sec-title">Ready to <em>Start Growing?</em></h2>
              <p style={{ color:'var(--text2)',marginTop:'1rem',lineHeight:1.7,fontSize:'.95rem',marginBottom:'2rem' }}>
                Whether you're applying to join, exploring partnerships, or have a question — reach out directly.
              </p>
              <a href={`mailto:${SITE.email}`} style={{ display:'flex',alignItems:'center',gap:'.5rem',color:'var(--gold)',fontFamily:'var(--font-mono)',fontSize:'.88rem',marginBottom:'1.5rem',textDecoration:'none' }}>
                ✉ {SITE.email}
              </a>
              <div style={{ display:'flex',flexDirection:'column',gap:'.65rem' }}>
                {[
                  { icon:'⚡', text:'Response within 24 hours' },
                  { icon:'🌍', text:'Open to creators worldwide' },
                  { icon:'🤝', text:'Brand partnerships welcome' },
                ].map((item, i) => (
                  <div key={i} style={{ display:'flex',alignItems:'center',gap:'.65rem',fontSize:'.88rem',color:'var(--text2)' }}>
                    <span>{item.icon}</span><span>{item.text}</span>
                  </div>
                ))}
                <a href={SITE.discord} target="_blank" rel="noopener noreferrer" style={{ display:'inline-flex',alignItems:'center',gap:'.5rem',marginTop:'.5rem',color:'var(--blue)',fontSize:'.88rem',textDecoration:'none' }}>
                  💬 Join our Discord community →
                </a>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section style={{ paddingBottom:'5rem' }}>
        <div className="container">
          <div className="cta-section reveal">
            <span className="sec-eyebrow" style={{ marginBottom:'1.5rem' }}>Don't Wait</span>
            <h2 style={{ fontSize:'clamp(1.8rem,4vw,2.8rem)',fontFamily:'var(--font-display)',fontWeight:800,marginBottom:'1rem' }}>
              Your Stream Is One Raid Away<br />From <em>Changing Everything</em>
            </h2>
            <p style={{ color:'var(--text2)',maxWidth:'460px',margin:'0 auto 2rem',lineHeight:1.7 }}>
              Join 10,000+ streamers already growing with StreamNexus. Real viewers. Real results. Starting in 24 hours.
            </p>
            <div style={{ display:'flex',justifyContent:'center',gap:'1rem',flexWrap:'wrap' }}>
              <Link
                href={`mailto:${SITE.email}?subject=StreamNexus%20Application`}
                className="btn btn-primary btn-lg"
              >
                🚀 Start Growing Today
              </Link>
              <Link href="/pricing" className="btn btn-secondary btn-lg">
                View Pricing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="nav-logo">
                <div className="nav-logo-dot" />
                StreamNexus
              </div>
              <p>Premium streaming growth network for Twitch, Kick, YouTube & TikTok creators.</p>
              <div style={{ display:'flex',gap:'.75rem',marginTop:'1rem',flexWrap:'wrap' }}>
                <a href={SITE.discord} target="_blank" rel="noopener noreferrer" className="trust-badge">💬 Discord</a>
                <a href={`mailto:${SITE.email}`} className="trust-badge">✉ Email</a>
              </div>
            </div>
            <div>
              <div className="footer-col-title">Platform</div>
              <ul className="footer-links">
                <li><Link href="/#how-it-works">How It Works</Link></li>
                <li><Link href="/#features">Features</Link></li>
                <li><Link href="/#streamers">Streamers</Link></li>
                <li><Link href="/#proof">Results</Link></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Resources</div>
              <ul className="footer-links">
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><a href={SITE.discord} target="_blank" rel="noopener noreferrer">Discord</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Contact</div>
              <ul className="footer-links">
                <li><a href={`mailto:${SITE.email}`}>Apply to Join</a></li>
                <li><a href={`mailto:${SITE.email}`}>Partnerships</a></li>
                <li><a href={`mailto:${SITE.email}`}>Brand Deals</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">© 2025 StreamNexus · {SITE.email}</div>
            <div style={{ display:'flex',gap:'1rem',flexWrap:'wrap' }}>
              <span className="footer-copy">🛡 Zero Bots · ✅ TOS Safe · 🔒 Secure Payments</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
