import { NextPage } from 'next'
import { Divider, Grid, Heading } from '@chakra-ui/react'
import ActionCard from 'components/molecules/web3/ActionCard'
import QuestionContainer from 'components/organisms/questions/Container'
import IntegrateAccount from 'components/organisms/web3/IntegrateAccount'
import WagmiProvider from 'components/providers/WagmiProvider'
import { useActionRegistory } from 'hooks/web3/standard'

const Web3: NextPage = () => {
  const { actions, approvedIds } = useActionRegistory()
  return (
    <WagmiProvider>
      <QuestionContainer title="ブロックチェーン連携">
        <IntegrateAccount />
        <Divider my={8} />
        <Heading fontSize="xl" mb={4}>
          ブロックチェーンに書き込める実績
        </Heading>
        <Grid gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }} gridGap={4}>
          {Object.keys(actions).map((actionId, index) => (
            <>
              <ActionCard
                action={actions[Number(actionId)]}
                actionId={Number(actionId)}
                approved={approvedIds.includes(Number(actionId))}
                key={index}
              />
            </>
          ))}
        </Grid>
      </QuestionContainer>
    </WagmiProvider>
  )
}

export default Web3
