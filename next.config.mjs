/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/bans',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'minotar.net'
      }
    ]
  }
};

export default nextConfig;