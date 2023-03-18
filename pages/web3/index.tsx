import QuestionContainer from 'components/organisms/questions/Container'
import IntegrateAccount from 'components/organisms/web3/IntegrateAccount'
import WagmiProvider from 'components/providers/WagmiProvider'
import { NextPage } from 'next'

const Web3: NextPage = () => {
  return (
    <WagmiProvider>
      <QuestionContainer title="ブロックチェーン連携">
        <IntegrateAccount />
      </QuestionContainer>
    </WagmiProvider>
  )
}

export default Web3
