import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'
import HeadElm from 'components/HeadElm'
import { chakraTheme } from 'utils/chakratheme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadElm />
      <RecoilRoot>
        <ChakraProvider theme={chakraTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </RecoilRoot>
    </>
  )
}

export default MyApp
