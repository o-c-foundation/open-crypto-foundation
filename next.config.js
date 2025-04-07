/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      'bafkreidnf7j4gen5gwgnqxmi3fcprksdmorptbdenb4q76ejbpgbjqkzqq.ipfs.w3s.link',
      'bafkreih4hdkhpjoxluzj526ehakmylfg5o2ri4wctumedqc3i5lv35k7ay.ipfs.w3s.link',
      'ipfs.w3s.link',
      'ipfs.io',
      'infura-ipfs.io',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.ipfs.w3s.link',
        pathname: '/**',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = { 
      fs: false, 
      path: false,
      os: false,
      crypto: false,
    };
    return config;
  },
  experimental: {
    runtime: 'edge',
  },
  unstable_runtimeJS: true,
  unstable_JsPreload: false
}

module.exports = nextConfig 