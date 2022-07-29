import { FC } from 'react'
import { Container } from '@chakra-ui/react'
import HomeChangeSection from "components/organisms/homes/HomeChangeSection/HomeChangeSection";
import HomeHeader from 'components/organisms/homes/HomeHeader/HomeHeader'
import HomeKnowSection from 'components/organisms/homes/HomeKnowSection/HomeKnowSection'
import HomeLookBackSection from "components/organisms/homes/HomeLookBackSection/HomeLookBackSection";
import styles from 'styles/Home.module.scss'

const Home: FC = () => {
  const maxW = '1280px'

  return (
    <div>
      <HomeHeader />
      <Container maxW={maxW} centerContent py={12} my={5}>
        <HomeKnowSection className={styles['home__section']} />
        <HomeLookBackSection className={styles['home__section']} />
        <HomeChangeSection className={styles['home__section']} />
      </Container>
    </div>
  )
}

export default Home
