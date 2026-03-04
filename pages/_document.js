import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Muhamad Irpan Yasin — Portfolio. A professional book-style portfolio showcasing 15+ years of experience in Sales, Finance, Data Analysis & Tax Management." />
        <meta property="og:title" content="Muhamad Irpan Yasin — Portfolio" />
        <meta property="og:description" content="15+ years experience in Sales, Finance, Data Analysis & Tax Management." />
        <meta property="og:image" content="/irvan.jpg" />
        <meta name="theme-color" content="#1a0f05" />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&family=Cinzel:wght@400;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&family=UnifrakturMaguntia&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
