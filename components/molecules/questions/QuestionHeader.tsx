import { FC } from 'react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { Flex, IconButton, Text } from '@chakra-ui/react'

type Props = {
  numerator: number
  denominator: number
  prevFunc?: () => void
}

const QuestionHeader: FC<Props> = ({ numerator, denominator, prevFunc }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" my={7}>
      {prevFunc && (
        <IconButton
          aria-label="戻る"
          variant="outline"
          icon={<ArrowBackIcon color="grey.400" boxSize="5" />}
          borderRadius="full"
          size="sm"
          borderWidth="2px"
          borderColor="grey.400"
          onClick={prevFunc}
        />
      )}
      <Text
        color="grey.400"
        fontWeight="bold"
        textAlign="center"
        fontSize="14px"
        width="100%"
      >
        Question {numerator}/{denominator}
      </Text>
      {prevFunc && (
        <IconButton aria-label="" size="sm" opacity={0} cursor="default" />
      )}
    </Flex>
  )
}

export default QuestionHeader
