/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/bans',
        destination: '/bans.html',
      },
    ]
  }
}
