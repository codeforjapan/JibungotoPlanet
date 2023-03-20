import { FC, ReactNode } from 'react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { hardhat, polygonMumbai } from 'wagmi/chains'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { publicProvider } from 'wagmi/providers/public'

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

const WagmiProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  return <WagmiConfig client={client}>{children}</WagmiConfig>
}

export default WagmiProvider
