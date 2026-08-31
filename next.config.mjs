/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/bans',
  trailingSlash: true,
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