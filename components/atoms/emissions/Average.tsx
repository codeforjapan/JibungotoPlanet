import { FC, useMemo } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import EarthSmileIcon from '../icons/EarthSmile'
import EarthTroubledIcon from '../icons/EarthTroubled'

type Props = {
  category: Questions.QuestionCategory
  amount: number
}

const Average: FC<Props> = ({ category, amount }) => {
  const japaneseAverage = {
    food: 1728,
    housing: 2147,
    mobility: 1379,
    other: 1862
  }
  const compareAverage = useMemo(() => {
    const diff = Math.round((amount / japaneseAverage[category]) * 100 - 100)
    const isOver = diff >= 0
    return { diff, isOver }
  }, [category, amount])

  return (
    <Flex fontWeight="bold" justifyContent="center" alignItems="center" my={3}>
      <Box as="span" p={1} borderRadius={4} border="1px">
        日本平均より
      </Box>
      <Box mx={2}>
        {Math.abs(compareAverage.diff)}%
        {compareAverage.isOver ? '多い' : '少ない'}
      </Box>
      <Flex width={8} alignItems="center">
        {compareAverage.isOver ? <EarthTroubledIcon /> : <EarthSmileIcon />}
      </Flex>
    </Flex>
  )
}

export default Average
