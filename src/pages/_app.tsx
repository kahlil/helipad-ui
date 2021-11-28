import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import customTheme from '../chakra-ui-config/customTheme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Script
        src="https://kit.fontawesome.com/090ca49637.js"
        crossOrigin="anonymous"
      ></Script>
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
