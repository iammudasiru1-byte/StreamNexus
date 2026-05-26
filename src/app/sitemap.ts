import { SITE } from '@/lib/config'

export default function sitemap() {
  return [
    { url: SITE.url, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE.url}/blog/what-is-streamnexus`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/blog/is-streamnexus-real`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
