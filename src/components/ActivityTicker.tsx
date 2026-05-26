'use client'
import { useState, useEffect } from 'react'

const TOASTS = [
  { name: 'Aydan', platform: '🟣 Twitch', msg: 'Just hit Affiliate!', avatar: 'https://unavatar.io/twitch/aydan' },
  { name: 'Clix', platform: '🟣 Twitch', msg: 'Viewers up 3×!', avatar: 'https://unavatar.io/twitch/clix' },
  { name: 'WestCOL', platform: '🟢 Kick', msg: 'Hit 100K on Kick!', avatar: 'https://ui-avatars.com/api/?name=WC&background=0d1f07&color=53FC18&bold=true&size=80' },
  { name: 'summit1g', platform: '🟣 Twitch', msg: 'New peak viewers!', avatar: 'https://unavatar.io/twitch/summit1g' },
  { name: 'Tarik', platform: '🟣 Twitch', msg: 'Partner achieved!', avatar: 'https://unavatar.io/twitch/tarik' },
  { name: 'aceu', platform: '🔴 YouTube', msg: 'Channel blowing up!', avatar: 'https://unavatar.io/twitch/aceu' },
  { name: 'CohhCarnage', platform: '🟣 Twitch', msg: '+40% growth this month', avatar: 'https://unavatar.io/twitch/cohhcarnage' },
  { name: 'Tyler1', platform: '🟢 Kick', msg: 'Raid network 🔥', avatar: 'https://unavatar.io/twitch/tyler1' },
]

export default function ActivityTicker() {
  const [toast, setToast] = useState<typeof TOASTS[0] | null>(null)
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const show = () => {
      setToast(TOASTS[idx % TOASTS.length])
      setIdx(i => i + 1)
      setVisible(true)
      setTimeout(() => setVisible(false), 4500)
    }
    const t = setTimeout(show, 2500)
    const interval = setInterval(show, 7000)
    return () => { clearTimeout(t); clearInterval(interval) }
  }, [])

  if (!toast || !visible) return null

  return (
    <div className="activity-ticker">
      <div className="activity-toast">
        <div className="toast-av">
          <img
            src={toast.avatar}
            alt={toast.name}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                `https://ui-avatars.com/api/?name=${toast.name.slice(0,2)}&background=1a1a1a&color=D4AF37&bold=true&size=80`
            }}
          />
        </div>
        <div>
          <div className="toast-name">{toast.name}</div>
          <div className="toast-msg">{toast.msg}</div>
          <div className="toast-platform">{toast.platform} · StreamNexus Member</div>
        </div>
        <span style={{ color: '#00ff80', marginLeft: 'auto', fontSize: '.75rem' }}>✓</span>
      </div>
    </div>
  )
}
