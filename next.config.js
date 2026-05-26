/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'unavatar.io' },
      { protocol: 'https', hostname: 'ui-avatars.com' },
    ],
  },
}
module.exports = nextConfig
