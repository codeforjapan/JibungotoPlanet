import { useUser } from '@auth0/nextjs-auth0/client'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Text } from '@chakra-ui/react'
import BasicButton from 'components/atoms/buttons/Basic'
import { useAccountIntegration } from 'hooks/web3/integrate'
import { FC } from 'react'
import ConnectWallet from './ConnectWallet'

const IntegrateAccount: FC = () => {
  const { integrate, isLoading, integrated } = useAccountIntegration()
  const { user } = useUser()

  return (
    <>
      <Text py={3}>
        じぶんごとプラネットのアカウントとウォレットを紐づけて、最後まで回答したことをブロックチェーンに記録してみよう！
      </Text>

      <ConnectWallet />

      {integrated ? (
        <Text display="flex" alignItems="center" mt={2}>
          <CheckCircleIcon color="brandPrimary.400" mr={1} />
          アカウントとウォレットの連携済
        </Text>
      ) : (
        <BasicButton
          width="full"
          fontSize="sm"
          py={3}
          onClick={() => integrate()}
          isLoading={isLoading}
          mt={2}
          disabled={!user}
        >
          {!user
            ? 'ログインしてください'
            : 'アカウントとウォレットアドレスを連携'}
        </BasicButton>
      )}
    </>
  )
}

export default IntegrateAccount
