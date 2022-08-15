import { FC, ReactNode } from 'react'
import { Box, Container, Grid, Text } from '@chakra-ui/react'
import CategoryTitle from 'components/molecules/questions/CategoryTitle'

type Props = {
  children: ReactNode
  category?: Questions.QuestionCategory
  title?: string
}

const QuestionContainer: FC<Props> = ({ children, category, title }) => {
  return (
    <Grid
      backgroundColor={category ? `${category}.200` : 'grey.200'}
      gridTemplateColumns="100%"
      gridTemplateRows="auto auto 1fr"
      minHeight="100vh"
    >
      <Box background="white">
        <Text fontWeight="bold" fontSize="16px" p={4} textAlign="center">
          じぶんごとプラネット
        </Text>
      </Box>
      <Box mb={3}>
        <CategoryTitle category={category} title={title} />
      </Box>
      <Box>
        <Container
          background="white"
          height="100%"
          width="90%"
          maxWidth="736px"
          bottom="0"
          borderRadius="10px 10px 0 0"
          overflow="auto"
          overflowX="hidden"
          position="relative"
          px={{ base: 3, md: 10 }}
        >
          <Box pb="40px">{children}</Box>
        </Container>
      </Box>
    </Grid>
  )
}

export default QuestionContainer
