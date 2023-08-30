import { FC, ReactNode } from 'react'
import { Box, Container, Grid, Text } from '@chakra-ui/react'
import CategoryTitle from 'components/molecules/questions/CategoryTitle'

type Props = {
  children: ReactNode
  title?: string | ReactNode
  hideHeader?: boolean
}

const ActionsContainer: FC<Props> = ({ children }) => {
  return (
    <Grid
      backgroundColor={'grey.200'}
      gridTemplateColumns="100%"
      gridTemplateRows="auto auto 1fr"
    >
      <Box mt={2} mb={5}>
        <CategoryTitle title="あなたの選んだアクション" />
      </Box>
      <Box>
        <Container
          background="white"
          height="100%"
          width="90%"
          maxWidth="736px"
          bottom="0"
          overflow="auto"
          overflowX="hidden"
          position="relative"
          px={{ base: 3, md: 10 }}
        >
          <Box py="40px">{children}</Box>
        </Container>
      </Box>
    </Grid>
  )
}

export default ActionsContainer
