import { FC, ReactNode } from 'react'
import { Box, Container, Text } from '@chakra-ui/react'
import CategoryTitle from 'components/molecules/questions/CategoryTitle'

type Props = {
  children: ReactNode
  category?: Questions.QuestionCategory
}

const QuestionContainer: FC<Props> = ({ children, category }) => {
  return (
    <Box
      backgroundColor={category ? `${category}.200` : 'grey.200'}
      height="100vh"
    >
      <Box background="white">
        <Text fontWeight="bold" fontSize="16px" p={4} textAlign="center">
          じぶんごとプラネット
        </Text>
      </Box>
      <CategoryTitle category={category} />
      <Box display="flex" justifyContent="center">
        <Container
          background="white"
          position="fixed"
          height={{ base: `calc(100vh - ${category ? '180px' : '150px'})` }}
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
