/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
  allowedDevOrigins: ['172.21.80.1'],
}

module.exports = nextConfig