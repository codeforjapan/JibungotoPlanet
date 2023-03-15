import QuestionContainer from 'components/organisms/questions/Container'
import ConnectWallet from 'components/organisms/web3/ConnectWallet'
import WagmiProvider from 'components/providers/WagmiProvider'
import { NextPage } from 'next'

const Web3: NextPage = () => {
  return (
    <WagmiProvider>
      <QuestionContainer title="ブロックチェーン連携">
        <ConnectWallet />
      </QuestionContainer>
    </WagmiProvider>
  )
}

export default Web3
