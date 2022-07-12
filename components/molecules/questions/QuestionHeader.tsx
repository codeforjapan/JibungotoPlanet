import { FC } from 'react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { Flex, IconButton, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useAnswerController } from '../../../hooks/questions'

type Props = {
  numerator: number
  denominator: number
  questionPage: Questions.Page
}

const QuestionHeader: FC<Props> = ({
  numerator,
  denominator,
  questionPage
}) => {
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
