/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['bafkreibvunxo4row3xx7ju3cjgietdvpb7mem4luvclzbkbpz37i3scani.ipfs.w3s.link'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.ipfs.w3s.link',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig 