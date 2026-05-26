import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import RevealObserver from '@/components/RevealObserver'
import FAQAccordion from '@/components/FAQAccordion'
import { SITE, FAQ_CATEGORIES } from '@/lib/config'

export const metadata: Metadata = {
  title: 'FAQ — StreamNexus Frequently Asked Questions',
  description: 'Everything you need to know about StreamNexus. Is it safe? Are viewers real? How fast can you see results? All 20 questions answered.',
  openGraph: {
    title: 'StreamNexus FAQ — All Your Questions Answered',
    description: 'Is StreamNexus safe? Are viewers real? Get answers to all 20 common questions.',
  },
}

// FAQPage schema for Google rich results
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_CATEGORIES.flatMap(cat =>
    cat.questions.map(q => ({
      '@type': 'Question',
      name: q.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.a,
      },
    }))
  ),
}

export default function FAQPage() {
  const totalQuestions = FAQ_CATEGORIES.reduce((acc, c) => acc + c.questions.length, 0)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Nav />
      <RevealObserver />

      {/* ── HERO ── */}
      <section style={{ paddingTop:'calc(64px + 4rem)',paddingBottom:'3rem',textAlign:'center',background:'var(--bg)',position:'relative',overflow:'hidden' }}>
        <div aria-hidden="true" style={{ position:'absolute',top:'-40px',left:'50%',transform:'translateX(-50%)',width:'500px',height:'350px',background:'radial-gradient(ellipse,rgba(123,47,247,.08),transparent 70%)',pointerEvents:'none' }} />
        <div className="container" style={{ position:'relative',zIndex:1 }}>
          <span className="sec-eyebrow">Help Centre</span>
          <h1 style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(2rem,5vw,3.5rem)',lineHeight:1.1,marginBottom:'1rem',letterSpacing:'-.02em' }}>
            Frequently Asked <em>Questions</em>
          </h1>
          <p style={{ color:'var(--text2)',maxWidth:'500px',margin:'0 auto 1.5rem',lineHeight:1.7 }}>
            {totalQuestions} questions across {FAQ_CATEGORIES.length} categories.
            Can't find what you need? Email us at{' '}
            <a href={`mailto:${SITE.email}`} style={{ color:'var(--gold)' }}>{SITE.email}</a>
          </p>

          {/* Category pills */}
          <div style={{ display:'flex',justifyContent:'center',gap:'.5rem',flexWrap:'wrap' }}>
            {FAQ_CATEGORIES.map((cat, i) => (
              <a
                key={i}
                href={`#cat-${i}`}
                style={{ display:'inline-flex',alignItems:'center',gap:'.4rem',fontFamily:'var(--font-mono)',fontSize:'.72rem',color:'var(--text2)',background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'100px',padding:'.3rem .85rem',textDecoration:'none',transition:'all .2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-gold)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--gold)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = ''; (e.currentTarget as HTMLAnchorElement).style.color = '' }}
              >
                {cat.icon} {cat.category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK ANSWERS ── */}
      <section style={{ paddingTop:'2rem',paddingBottom:'3rem',background:'var(--bg2)' }}>
        <div className="container">
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:'1rem' }} className="reveal">
            {[
              { q:'Is it safe for Twitch?', a:'Yes. 100% TOS compliant.', icon:'🛡', color:'rgba(0,255,128,.1)', border:'rgba(0,255,128,.2)' },
              { q:'Are viewers real?', a:'Every viewer is a verified human.', icon:'✅', color:'rgba(212,175,55,.08)', border:'rgba(212,175,55,.2)' },
              { q:'How fast are results?', a:'48–72 hours for first increase.', icon:'⚡', color:'rgba(0,207,255,.08)', border:'rgba(0,207,255,.2)' },
              { q:'Refund policy?', a:'7-day satisfaction review.', icon:'💳', color:'rgba(123,47,247,.08)', border:'rgba(123,47,247,.2)' },
            ].map((item, i) => (
              <div key={i} style={{ background:item.color,border:`1px solid ${item.border}`,borderRadius:'var(--r-md)',padding:'1.25rem' }}>
                <div style={{ fontSize:'1.5rem',marginBottom:'.5rem' }}>{item.icon}</div>
                <div style={{ fontFamily:'var(--font-display)',fontWeight:700,fontSize:'.9rem',marginBottom:'.3rem' }}>{item.q}</div>
                <div style={{ fontSize:'.82rem',color:'var(--text2)' }}>{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ CATEGORIES ── */}
      <section>
        <div className="container" style={{ maxWidth:820 }}>
          <div style={{ display:'flex',flexDirection:'column',gap:'4rem' }}>
            {FAQ_CATEGORIES.map((cat, ci) => (
              <div key={ci} id={`cat-${ci}`} className="reveal">
                {/* Category header */}
                <div style={{ display:'flex',alignItems:'center',gap:'1rem',marginBottom:'1.5rem',paddingBottom:'1rem',borderBottom:'1px solid var(--border)' }}>
                  <span style={{ fontSize:'1.75rem',background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--r-sm)',width:'48px',height:'48px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>{cat.icon}</span>
                  <div>
                    <div style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'1.15rem' }}>{cat.category}</div>
                    <div style={{ fontFamily:'var(--font-mono)',fontSize:'.68rem',color:'var(--text3)' }}>{cat.questions.length} questions</div>
                  </div>
                </div>
                <FAQAccordion items={cat.questions} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STILL HAVE QUESTIONS ── */}
      <section style={{ background:'var(--bg2)',paddingTop:'4rem',paddingBottom:'5rem' }}>
        <div className="container">
          <div className="cta-section reveal" style={{ maxWidth:'600px',margin:'0 auto' }}>
            <div style={{ fontSize:'2.5rem',marginBottom:'1rem' }}>💬</div>
            <h2 style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(1.5rem,3vw,2rem)',marginBottom:'1rem' }}>
              Still Have <em>Questions?</em>
            </h2>
            <p style={{ color:'var(--text2)',marginBottom:'1.75rem',lineHeight:1.7 }}>
              Our team responds to every email within 24 hours.
              Join our Discord for instant community support.
            </p>
            <div style={{ display:'flex',justifyContent:'center',gap:'.85rem',flexWrap:'wrap' }}>
              <a href={`mailto:${SITE.email}`} className="btn btn-primary">
                ✉ Email Us
              </a>
              <a href={SITE.discord} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                💬 Join Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section>
        <div className="container" style={{ textAlign:'center' }}>
          <div className="reveal">
            <p style={{ fontFamily:'var(--font-mono)',fontSize:'.75rem',color:'var(--text3)',marginBottom:'1rem' }}>Ready to start growing?</p>
            <h2 style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(1.5rem,3vw,2rem)',marginBottom:'1.5rem' }}>
              Join <em>StreamNexus</em> Today
            </h2>
            <div style={{ display:'flex',justifyContent:'center',gap:'1rem',flexWrap:'wrap' }}>
              <Link href="/pricing" className="btn btn-primary btn-lg">View Pricing →</Link>
              <a href={`mailto:${SITE.email}`} className="btn btn-secondary btn-lg">Apply to Join</a>
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
              <Link href="/blog" style={{ fontSize:'.85rem',color:'var(--text2)' }}>Blog</Link>
              <a href={SITE.discord} target="_blank" rel="noopener noreferrer" style={{ fontSize:'.85rem',color:'var(--text2)' }}>Discord</a>
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
