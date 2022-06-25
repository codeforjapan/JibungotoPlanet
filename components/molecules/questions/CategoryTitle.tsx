import { Box } from '@chakra-ui/react'
import { FC, useMemo } from 'react'

type Props = {
  category: Questions.QuestionCategory
}

const CategoryTitle: FC<Props> = ({ category }) => {
  const text = useMemo(() => {
    switch (category) {
      case 'mobility':
        return '移動について'
      case 'food':
        return '食について'
      case 'house':
        return '住居について'
      case 'consumption':
        return 'モノとサービスについて'
      default:
        return ''
    }
  }, [category])
  return (
    <Box
      color={`${category}.400`}
      textAlign="center"
      fontSize="20px"
      fontWeight="bold"
    >
      {text}
    </Box>
  )
}

export default CategoryTitle
