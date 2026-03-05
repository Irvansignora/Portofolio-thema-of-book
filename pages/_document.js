import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Muhamad Irpan Yasin — 15+ years expertise in Sales Management, Finance, Data Analysis & Tax. Open for collaboration. Bandung, West Java, Indonesia." />
        <meta property="og:title" content="Muhamad Irpan Yasin — Portfolio" />
        <meta property="og:description" content="15+ years expertise in Sales, Finance, Data Analysis & Tax Management. Open for full-time, freelance & consulting roles." />
        <meta property="og:image" content="/og-banner.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="/og-banner.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Muhamad Irpan Yasin — Portfolio" />
        <meta name="twitter:description" content="Sales · Finance · Data Analysis · Tax Management — 15+ Years Experience" />
        <meta name="keywords" content="Muhamad Irpan Yasin, portfolio, sales manager, finance, tax management, data analysis, Bandung, Indonesia" />
        <meta name="author" content="Muhamad Irpan Yasin" />
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
