/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'bafkreibvunxo4row3xx7ju3cjgietdvpb7mem4luvclzbkbpz37i3scani.ipfs.w3s.link',
      'bafkreih4hdkhpjoxluzj526ehakmylfg5o2ri4wctumedqc3i5lv35k7ay.ipfs.w3s.link',
      'bafkreif6d6f6zlm3kgfwnhujf2ug4qidtnv3qsaix6wtlf3jnr6grz7yya.ipfs.w3s.link',
      'bafkreiajnwdr7cy7ajszr4hf2ywou4cp2wjw7vlkc4kwyqf3ibqpfeoqpm.ipfs.w3s.link',
      'bafkreiemmssqupiqu6uaaeyqcpksj7ialgqff3mrolzd6rcyjzvs252j54.ipfs.w3s.link',
      'bafkreieksxsadiqtmfcz6fom7hecbr24jbpcao2vldlykupdamchbhxp3y.ipfs.w3s.link'
    ],
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