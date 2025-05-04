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
    
    // Resolve SPL Token package issues
    config.resolve.alias = {
      ...config.resolve.alias,
      '@solana/spl-token': require.resolve('@solana/spl-token'),
      '@solana/web3.js': require.resolve('@solana/web3.js'),
      '@project-serum/anchor': require.resolve('@project-serum/anchor'),
    };
    
    return config;
  }
}

module.exports = nextConfig