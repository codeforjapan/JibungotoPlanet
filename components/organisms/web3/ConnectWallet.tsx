import BasicButton from 'components/atoms/buttons/Basic'
import { FC, useEffect, useState } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

const ConnectWallet: FC = () => {
  // const [mounted, setMounted] = useState(false)

  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  const { connect } = useConnect({ connector: new InjectedConnector() })
  const { disconnect } = useDisconnect()
  const { isConnected } = useAccount()

  return isConnected ? (
    <BasicButton
      onClick={() => {
        disconnect()
      }}
    >
      Disconnect Wallet
    </BasicButton>
  ) : (
    <BasicButton
      onClick={() => {
        connect()
      }}
    >
      Connect Wallet
    </BasicButton>
  )
}

export default ConnectWallet
