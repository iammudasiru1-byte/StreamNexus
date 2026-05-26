'use client'
import { useState } from 'react'
import { SITE } from '@/lib/config'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', email: '', platform: '', inquiry: '', channel: '', viewers: '', goals: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const update = (field: string, val: string) => setForm(f => ({ ...f, [field]: val }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`StreamNexus Application — ${form.name} (${form.platform})`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPlatform: ${form.platform}\nInquiry: ${form.inquiry}\nChannel: ${form.channel}\nAvg Viewers: ${form.viewers}\n\nGoals:\n${form.goals}`
    )
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  if (submitted) return (
    <div style={{ padding: '2rem', textAlign: 'center', background: 'rgba(0,255,128,.06)', border: '1px solid rgba(0,255,128,.2)', borderRadius: '16px' }}>
      <div style={{ fontSize: '2rem', marginBottom: '.5rem' }}>✅</div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '.35rem' }}>Application Sent!</div>
      <div style={{ color: 'var(--text2)', fontSize: '.88rem' }}>We'll reply within 24 hours.</div>
    </div>
  )

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="form-field">
          <label className="form-label">Your Name</label>
          <input className="form-input" required placeholder="Streamer Name" value={form.name} onChange={e => update('name', e.target.value)} />
        </div>
        <div className="form-field">
          <label className="form-label">Email</label>
          <input className="form-input" type="email" required placeholder="you@email.com" value={form.email} onChange={e => update('email', e.target.value)} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="form-field">
          <label className="form-label">Platform</label>
          <select className="form-select" value={form.platform} onChange={e => update('platform', e.target.value)}>
            <option value="">Select platform</option>
            <option>Twitch</option>
            <option>Kick</option>
            <option>YouTube</option>
            <option>TikTok</option>
            <option>Multiple Platforms</option>
          </select>
        </div>
        <div className="form-field">
          <label className="form-label">Inquiry Type</label>
          <select className="form-select" value={form.inquiry} onChange={e => update('inquiry', e.target.value)}>
            <option value="">Select type</option>
            <option>Streamer Application</option>
            <option>Collaboration / Partnership</option>
            <option>Brand Sponsorship</option>
            <option>General Inquiry</option>
          </select>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="form-field">
          <label className="form-label">Channel Link</label>
          <input className="form-input" placeholder="twitch.tv/yourchannel" value={form.channel} onChange={e => update('channel', e.target.value)} />
        </div>
        <div className="form-field">
          <label className="form-label">Avg Viewers</label>
          <select className="form-select" value={form.viewers} onChange={e => update('viewers', e.target.value)}>
            <option value="">Select range</option>
            <option>0–5 viewers</option>
            <option>5–20 viewers</option>
            <option>20–100 viewers</option>
            <option>100–500 viewers</option>
            <option>500+ viewers</option>
          </select>
        </div>
      </div>
      <div className="form-field">
        <label className="form-label">Your Goals</label>
        <textarea className="form-textarea" placeholder="Tell us about your streaming goals..." value={form.goals} onChange={e => update('goals', e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '.5rem' }}>
        ✦ Submit Application
      </button>
    </form>
  )
}
