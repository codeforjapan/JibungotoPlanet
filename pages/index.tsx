import { FC } from 'react'
import { Container } from '@chakra-ui/react'
import HomeHeader from 'components/organisms/homes/HomeHeader/HomeHeader'
import HomeKnowSection from 'components/organisms/homes/HomeKnowSection/HomeKnowSection'

const Home: FC = () => {
  const maxW = '1280px'

  return (
    <div>
      <HomeHeader />
      <Container maxW={maxW} centerContent py={12} my={5}>
        <HomeKnowSection />
      </Container>
    </div>
  )
}

export default Home
