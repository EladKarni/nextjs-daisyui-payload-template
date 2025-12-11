/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    dangerouslyAllowSVG: true,
  },
  compress: true,
}

export default nextConfig
