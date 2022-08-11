import { FC } from 'react'
import { useRouter } from 'next/router'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Spinner } from '@chakra-ui/react'
import BasicButton from 'components/atoms/buttons/Basic'

const CompletionTransitions: FC = () => {
  const router = useRouter()

  return (
    <Box>
      <BasicButton isNext onClick={() => router.push('/top')} width="full">
        質問カテゴリーへ戻る
      </BasicButton>
      {/*todo: urlの変更*/}
      <BasicButton
        isNext
        onClick={() => router.push('/')}
        width="full"
        mt={4}
        variant="outline"
        color="brandPrimary.400"
        border="2px solid #009ACE!important"
      >
        社会へ働きかけるには
      </BasicButton>
    </Box>
  )
}

export default CompletionTransitions
