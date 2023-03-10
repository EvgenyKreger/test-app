import '@/styles/globals.scss'
import '@/styles/mixins.scss'
import '@/styles/theme.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
