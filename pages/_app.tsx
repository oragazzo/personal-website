import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
        }
      `}</style>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
      <SpeedInsights />
    </>
  )
}
