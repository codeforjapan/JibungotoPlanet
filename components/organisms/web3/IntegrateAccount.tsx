import { Text } from '@chakra-ui/react'
import BasicButton from 'components/atoms/buttons/Basic'
import { useAccountIntegration } from 'hooks/web3/integrate'
import { FC } from 'react'
import ConnectWallet from './ConnectWallet'

const IntegrateAccount: FC = () => {
  const { integrate, isLoading } = useAccountIntegration()

  return (
    <>
      <Text py={3}>
        じぶんごとプラネットのアカウントとウォレットを紐づけて、最後まで回答したことをブロックチェーンに記録してみよう！
      </Text>

      <ConnectWallet />

      <BasicButton onClick={() => integrate()} isLoading={isLoading} minW={200}>
        アカウントとウォレットアドレスを連携
      </BasicButton>
    </>
  )
}

export default IntegrateAccount
