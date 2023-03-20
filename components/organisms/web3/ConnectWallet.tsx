import BasicButton from 'components/atoms/buttons/Basic'
import { FC } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

const ConnectWallet: FC = () => {
  const { connect } = useConnect({ connector: new InjectedConnector() })
  const { disconnect } = useDisconnect()
  const { isConnected } = useAccount()

  return (
    <BasicButton
      width="full"
      fontSize="sm"
      py={3}
      onClick={() => {
        isConnected ? disconnect() : connect()
      }}
      theme={isConnected ? 'brandAccent' : 'brandPrimary'}
    >
      {isConnected ? 'Disconnect Wallet' : 'Connect Wallet'}
    </BasicButton>
  )
}

export default ConnectWallet
