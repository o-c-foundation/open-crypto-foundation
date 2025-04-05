import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="https://bafkreih4hdkhpjoxluzj526ehakmylfg5o2ri4wctumedqc3i5lv35k7ay.ipfs.w3s.link/" sizes="any" />
        <link rel="apple-touch-icon" href="https://bafkreih4hdkhpjoxluzj526ehakmylfg5o2ri4wctumedqc3i5lv35k7ay.ipfs.w3s.link/" />
        <meta name="theme-color" content="#000000" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-dark text-light">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 