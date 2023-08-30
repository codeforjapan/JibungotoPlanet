import { FC, useMemo } from 'react'
import { useRouter } from 'next/router'
import { Box } from '@chakra-ui/react'
import BasicButton from 'components/atoms/buttons/Basic'

type Props = {
  isCompleted?: boolean
}

const CompletionTransitions: FC<Props> = ({ isCompleted }) => {
  const router = useRouter()
  const text = useMemo(() => {
    return isCompleted ? '最終結果を見る' : '次のカテゴリーを選ぶ'
  }, [isCompleted])

  return (
    <Box>
      <BasicButton isNext onClick={() => router.push('/top')} width="full">
        {text}
      </BasicButton>
    </Box>
  )
}

export default CompletionTransitions
