import { FC, ReactNode } from 'react'
import { Box, Container } from '@chakra-ui/react'
import CategoryTitle from 'components/molecules/questions/CategoryTitle'

type Props = {
  children: ReactNode
  category: Questions.QuestionCategory
}

const QuestionContainer: FC<Props> = ({ children, category }) => {
  return (
    <Box backgroundColor={`${category}.200`} height="100vh">
      <CategoryTitle category={category} />
      <Box display="flex" justifyContent="center">
        <Container
          background="white"
          position="fixed"
          height={{ base: `calc(100vh - 140px)` }}
          width="90%"
          bottom="0"
          borderRadius="10px 10px 0 0"
          overflow="auto"
        >
          <Box pb="40px">{children}</Box>
        </Container>
      </Box>
    </Box>
  )
}

export default QuestionContainer
