// lib/config.ts
export const SITE = {
  name: 'StreamNexus',
  tagline: 'Premium Streaming Growth Network',
  url: 'https://streamnexus-rho.vercel.app',
  email: 'contact.streamnexus@gmail.com',
  discord: 'https://discord.gg/emF5fsmuxn',
  twitter: 'https://twitter.com/streamnexus',
  description:
    'StreamNexus helps streamers on Twitch, Kick, YouTube and TikTok grow their audience with real viewers, raid networks, and collab matchmaking.',
}

export const PRICING = [
  {
    id: 'starter',
    name: 'Starter',
    price: 49,
    period: 'one-time',
    badge: null,
    features: [
      'Join the Raid Network',
      'Community Discord Access',
      '5 Collab requests / month',
      'Basic growth analytics',
    ],
    missing: ['Priority raid placement', 'Verified badge'],
    cta: 'Order Starter — $49',
    link: 'https://www.upwork.com/services/product/marketing-embed-your-twitch-live-stream-to-bring-in-more-live-viewers-1853591890421926851?ref=project_share',
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 139,
    period: 'one-time',
    badge: 'MOST POPULAR',
    features: [
      'Everything in Starter',
      'Priority raid placement',
      'Unlimited collab requests',
      'StreamNexus Verified badge',
      'Featured in Nexus Discover',
      'Advanced growth analytics',
    ],
    missing: [],
    cta: 'Order Elite — $139 🔥',
    link: 'https://www.upwork.com/services/product/marketing-embed-your-twitch-live-stream-to-bring-in-more-live-viewers-1853591890421926851?ref=project_share&tier=1',
  },
  {
    id: 'pro',
    name: 'Nexus Pro',
    price: 259,
    period: 'one-time',
    badge: null,
    features: [
      'Everything in Elite',
      'Homepage feature slot',
      '1-on-1 growth coaching',
      'Brand deal introductions',
      'Partner application support',
      'Custom collab events',
    ],
    missing: [],
    cta: 'Order Pro — $259',
    link: 'https://www.upwork.com/services/product/marketing-embed-your-twitch-live-stream-to-bring-in-more-live-viewers-1853591890421926851?ref=project_share&tier=2',
  },
]

export const STATS = [
  { value: '10,000+', label: 'Active Streamers', suffix: '' },
  { value: '94', label: 'Affiliate Rate', suffix: '%' },
  { value: '3,200+', label: 'Collabs Formed', suffix: '' },
  { value: '4,800+', label: 'Five-Star Reviews', suffix: '' },
]

export const TESTIMONIALS = [
  {
    name: 'Aydan',
    handle: '@aydan',
    platform: 'Twitch · COD',
    avatar: 'https://unavatar.io/twitch/aydan',
    text: 'Hit Partner in 14 days. The raid network alone is worth every penny — real viewers showing up every single stream.',
    result: 'Partner in 14 days',
    color: '#9146ff',
  },
  {
    name: 'Clix',
    handle: '@Clix',
    platform: 'Twitch · Fortnite',
    avatar: 'https://unavatar.io/twitch/clix',
    text: 'My viewer count tripled in 5 weeks. StreamNexus collabs brought an audience I never could have built alone.',
    result: 'Viewers ×3 in 5 weeks',
    color: '#9146ff',
  },
  {
    name: 'WestCOL',
    handle: '@WestCOL',
    platform: 'Kick · Just Chatting',
    avatar: 'https://ui-avatars.com/api/?name=WC&background=0d1f07&color=53FC18&bold=true&size=80',
    text: 'StreamNexus collab connections are next level. Hit 100K on Kick within my first month in the network.',
    result: '100K Kick milestone',
    color: '#53FC18',
  },
  {
    name: 'TenZ',
    handle: '@TenZ',
    platform: 'YouTube · Valorant',
    avatar: 'https://unavatar.io/twitch/tenz',
    text: 'YouTube raid trains are real. StreamNexus organises them perfectly — total game changer for live growth.',
    result: 'Live CCV ×2.5',
    color: '#FF0000',
  },
]

export const FAQ_CATEGORIES = [
  {
    category: 'Safety & Legitimacy',
    icon: '🛡',
    questions: [
      {
        q: 'Is StreamNexus safe for my Twitch channel?',
        a: 'Yes. StreamNexus operates through organic community engagement — raids, collabs, and mutual viewership between real streamers. We do not use bots, view injections, or any method that violates Twitch Terms of Service. Every viewer comes from a real person in our network.',
      },
      {
        q: 'Are these real viewers?',
        a: 'Absolutely. Every person in the StreamNexus network is a verified human streamer. When they watch your stream as part of a raid or collab, they are real accounts with real viewing history — not bots or fake profiles.',
      },
      {
        q: 'Will Twitch, Kick or YouTube penalise my channel?',
        a: 'No. Our methods align fully with the Terms of Service of all supported platforms. Raids, collabs, and community viewership are features these platforms actively encourage. We have never had a member penalised.',
      },
      {
        q: 'What makes StreamNexus different from view-buying services?',
        a: 'View-buying services send fake traffic that platforms detect and penalise. StreamNexus is a vetted community of real streamers who support each other. The difference is the same as buying fake followers versus making real friends in your niche.',
      },
    ],
  },
  {
    category: 'Results & Timeline',
    icon: '📈',
    questions: [
      {
        q: 'How fast can I see results?',
        a: "Most members see their first measurable viewer increase within 48–72 hours of joining. Significant growth — reaching Affiliate or hitting new viewership peaks — typically happens within 2–4 weeks, depending on how actively you participate in the network's events and raids.",
      },
      {
        q: 'What results can I realistically expect?',
        a: 'Based on member data: average viewer count increases 2–4× within 30 days, follower growth accelerates 3–5× compared to solo streaming, and 94% of active members reach Twitch Affiliate within 2 weeks of joining.',
      },
      {
        q: 'Does it work for small streamers with 0–5 viewers?',
        a: 'Especially yes. StreamNexus is specifically designed for streamers who are under-discovered. Our raid network gives you an immediate audience boost, making your channel visible to the algorithm at the most critical moments.',
      },
      {
        q: 'Do I need to be on Twitch specifically?',
        a: 'No. StreamNexus supports Twitch, Kick, YouTube Live, and TikTok. Our multi-platform collab matching connects you with creators across whichever platforms you stream on.',
      },
    ],
  },
  {
    category: 'How It Works',
    icon: '⚙️',
    questions: [
      {
        q: 'How does the raid network actually work?',
        a: 'When you go live, you can request a raid from the network. Other StreamNexus members who are watching — or finishing their own streams — send their audience to you. The raids are coordinated through our Discord, ensuring they happen at peak impact moments.',
      },
      {
        q: 'What is the collab matchmaking system?',
        a: 'Our system matches you with streamers in compatible niches, with similar audience sizes, who are available at similar times. You can co-stream, host joint events, or do a simple channel recommendation swap. Every collab grows both audiences.',
      },
      {
        q: 'How do I access StreamNexus after purchasing?',
        a: 'After your order is confirmed via Upwork, you receive a Discord invite link within 24 hours. All network coordination, raid requests, collab matching, and growth tools live in our private Discord server.',
      },
    ],
  },
  {
    category: 'Pricing & Payment',
    icon: '💳',
    questions: [
      {
        q: 'Why is it a one-time payment and not a subscription?',
        a: 'We believe in giving you permanent access without locking you into recurring charges. Your one-time payment gives you lifetime membership in the network at that tier.',
      },
      {
        q: 'Can I upgrade my plan later?',
        a: 'Yes. You can upgrade at any time by paying the difference between your current plan and the new one. Contact us at contact.streamnexus@gmail.com and we will arrange the upgrade.',
      },
      {
        q: 'Is there a refund policy?',
        a: "We offer a satisfaction review within 7 days of purchase. If you've actively participated in the network and seen zero results, contact us and we'll work with you to make it right. Results vary but we stand behind the quality of the network.",
      },
      {
        q: 'What payment methods are accepted?',
        a: 'Payments are processed securely through Upwork, which accepts all major credit/debit cards, PayPal, and other regional payment methods. Upwork provides full buyer protection on all transactions.',
      },
    ],
  },
  {
    category: 'Platform Support',
    icon: '🎮',
    questions: [
      {
        q: 'Which platforms does StreamNexus support?',
        a: 'StreamNexus fully supports Twitch, Kick, YouTube Live, and TikTok Live. Our network includes streamers from all four platforms, and our collab matching works across platforms.',
      },
      {
        q: 'Can I grow on multiple platforms at once?',
        a: "Yes. Many of our members stream on 2–3 platforms simultaneously. The Nexus Pro plan includes cross-platform coaching to help you maximise growth on each platform you're active on.",
      },
      {
        q: 'Is there extra support for Kick streamers?',
        a: 'Absolutely. We have a dedicated Kick section in our network with over 500 active Kick creators. The raid and collab tools work identically to the Twitch side.',
      },
    ],
  },
]

export const HOW_IT_WORKS = [
  {
    step: '01',
    icon: '🎯',
    title: 'Apply & Join',
    desc: 'Choose your plan, complete your order via Upwork, and receive your private Discord invite within 24 hours.',
  },
  {
    step: '02',
    icon: '🔁',
    title: 'Enter the Raid Network',
    desc: 'Request raids, join raid queues, and receive real viewers from network members at the exact moments you go live.',
  },
  {
    step: '03',
    icon: '🤝',
    title: 'Get Matched for Collabs',
    desc: "Our system connects you with compatible streamers in your niche. Co-stream, host joint events, and grow each other's audiences.",
  },
  {
    step: '04',
    icon: '📈',
    title: 'Watch Your Channel Grow',
    desc: 'Track your follower growth, viewer increases, and engagement improvements. Most members hit new milestones within 2 weeks.',
  },
]
