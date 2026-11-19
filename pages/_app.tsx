import '../styles/globals.css'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { getCookieConsentValue } from 'react-cookie-consent'
import TagManager from 'react-gtm-module'
import { RecoilRoot, RecoilEnv } from 'recoil'
import HeadElm from 'components/HeadElm'
import Cookie from 'components/molecules/homes/Cookie/Cookie'
import { chakraTheme } from 'utils/chakratheme'

// Suppress Recoil duplicate atom key warning in development (HMR)
if (process.env.NODE_ENV === 'development') {
  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (getCookieConsentValue() === 'true') {
      // 許諾済み
      process.env.NEXT_PUBLIC_GTMID &&
        TagManager.initialize({
          gtmId: String(process.env.NEXT_PUBLIC_GTMID)
        })
    }
  }, [])

  return (
    <>
      <HeadElm />
      <RecoilRoot>
        <ChakraProvider theme={chakraTheme}>
          <Component {...pageProps} />
          <Cookie />
        </ChakraProvider>
      </RecoilRoot>
    </>
  )
}

export default MyApp
