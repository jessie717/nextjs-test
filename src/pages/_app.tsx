import { AppProps } from 'next/app'

// /pages 目录下页面 tailwindcss 生效
import '../app/globals.css' 

export default function _app({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
