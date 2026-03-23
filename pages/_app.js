import '../styles/globals.css'
import { IM_Fell_English, Cinzel, Crimson_Text, UnifrakturMaguntia } from 'next/font/google'

// next/font downloads & serves fonts from your own domain at build time
// → eliminates Google Fonts network dependency chain (335ms saving)
// → cache is controlled by Vercel (1 year immutable)
const imFell = IM_Fell_English({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-fell',
  display: 'swap',
  preload: true,
})

const cinzel = Cinzel({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
})

const crimsonText = Crimson_Text({
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  preload: true,
})

const unifraktur = UnifrakturMaguntia({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-fraktur',
  display: 'swap',
  preload: false, // only used in intro splash, non-critical
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${imFell.variable} ${cinzel.variable} ${crimsonText.variable} ${unifraktur.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
