import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'
import HeadElm from 'components/HeadElm'
import { chakraTheme } from 'utils/chakratheme'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import Cookie from 'components/molecules/homes/Cookie/Cookie'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (document.cookie) {
      const cookies = document.cookie
      const array = cookies.split(';')

      const CookieConcent = array.filter((value) => {
        const content = value.split('=')
        return content[0] === 'CookieConsent' && content[1] === 'true'
      })
      if (!!CookieConcent.length) {
        // 許諾済み
        process.env.NEXT_PUBLIC_GTMID &&
          TagManager.initialize({
            gtmId: String(process.env.NEXT_PUBLIC_GTMID)
          })
      }
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
