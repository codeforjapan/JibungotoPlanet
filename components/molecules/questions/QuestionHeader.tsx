import { FC, useMemo } from 'react'
import { useRouter } from 'next/router'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { Flex, IconButton, Text } from '@chakra-ui/react'
import { useAnswerController } from '../../../hooks/questions'
import { QUESTION_DENOMINATOR } from 'constants/questions'

type Props = {
  questionPage: Questions.Page
}

const QuestionHeader: FC<Props> = ({ questionPage }) => {
  const router = useRouter()
  const { removeAnswer } = useAnswerController({
    category: questionPage.category
  })

  const prevPage = () => {
    const querstionKeys = questionPage.questions.map((q) => q.key)
    for (const key of querstionKeys) {
      removeAnswer(key)
    }
    router.back()
  }

  const numerator = useMemo(() => {
    return questionPage.numerator
  }, [questionPage])

  const denominator = useMemo(() => {
    return QUESTION_DENOMINATOR[questionPage.category]
  }, [questionPage])

  return (
    <Flex justifyContent="space-between" alignItems="center" my={7}>
      <IconButton
        aria-label="戻る"
        variant="outline"
        icon={<ArrowBackIcon color="grey.400" boxSize="5" />}
        borderRadius="full"
        size="sm"
        borderWidth="2px"
        borderColor="grey.400"
        onClick={() => prevPage()}
      />
      <Text
        color="grey.400"
        fontWeight="bold"
        textAlign="center"
        fontSize="14px"
        width="100%"
      >
        Question {numerator}/{denominator}
      </Text>
      <IconButton aria-label="" size="sm" opacity={0} cursor="default" />
    </Flex>
  )
}

export default QuestionHeader
