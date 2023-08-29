import { FC } from 'react'
import { useRouter } from 'next/router'
import { Box } from '@chakra-ui/react'
import BasicButton from 'components/atoms/buttons/Basic'

const CompletionTransitions: FC = () => {
  const router = useRouter()

  return (
    <Box>
      <BasicButton isNext onClick={() => router.push('/top')} width="full">
        次のカテゴリーを選ぶ
      </BasicButton>
    </Box>
  )
}

export default CompletionTransitions
