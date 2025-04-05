import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1F2937" />
      </Head>
      <body className="bg-gray-900 text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 