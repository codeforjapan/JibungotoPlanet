import { FC } from 'react'
import { GridItem, Text } from '@chakra-ui/react'
import BasicButton from 'components/atoms/buttons/Basic'
import { useApproveAction } from 'hooks/web3/action'
import { ActionRegistory } from 'typechain-types'

type Props = {
  action: ActionRegistory.ActionStructOutput
  actionId: number
  approved: boolean
}

const ActionCard: FC<Props> = ({ action, actionId, approved }) => {
  const { approve, isLoading } = useApproveAction(actionId)

  return (
    <GridItem borderRadius={5} boxShadow="0 0 4px 1px lightgrey" p={3}>
      <Text fontWeight="bold" fontSize="lg" mb={1}>
        {action.name}
      </Text>
      <Text>{action.description}</Text>
      <BasicButton
        size="xs"
        width="full"
        theme="brandAccent"
        mt={5}
        disabled={!approve || approved}
        onClick={() => approve?.()}
        isLoading={isLoading}
      >
        {approved ? '許可済み' : '書き込みを許可'}
      </BasicButton>
    </GridItem>
  )
}

export default ActionCard
