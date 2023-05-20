import { ToastContainer } from '@/components/toast/toastContainer'
import { GlobalStyle } from '@/styles/global'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.ico" />
        <meta name="description" content="Encontre os melhores animes em um só lugar! Nosso site oferece uma extensa lista de animes com informações detalhadas, classificações e recomendações. Desfrute de uma experiência completa para os amantes de anime." />
        <meta name="keywords" content="animes, lista de animes, melhores animes, assistir animes, anime online, catálogo de animes, recomendações de anime" />
        <title>Anime view</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer/>
    </>
  )
}
