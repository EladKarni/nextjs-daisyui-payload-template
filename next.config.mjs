/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
  },
  compress: true,
}

export default nextConfig
