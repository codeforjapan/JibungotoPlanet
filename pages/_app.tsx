import '../styles/globals.css'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import TagManager from 'react-gtm-module'
import { RecoilRoot } from 'recoil'
import HeadElm from 'components/HeadElm'
import Cookie from 'components/molecules/homes/Cookie/Cookie'
import { chakraTheme } from 'utils/chakratheme'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { publicProvider } from 'wagmi/providers/public'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { hardhat, polygonMumbai } from 'wagmi/chains'

const { provider, webSocketProvider } = configureChains(
  [hardhat, polygonMumbai],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: process.env.NEXT_PUBLIC_JSONRPC_HTTP!,
        webSocket: process.env.NEXT_PUBLIC_JSONRPC_WS!
      }),
      priority: 0
    }),
    publicProvider({ priority: 1 })
  ]
)

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider
})

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
