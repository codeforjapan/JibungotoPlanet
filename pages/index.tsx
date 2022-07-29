import { FC } from 'react'
import { Container } from '@chakra-ui/react'
import HomeCaptionSection from 'components/organisms/homes/HomeCaptionSection/HomeCaptionSection'
import HomeChangeSection from 'components/organisms/homes/HomeChangeSection/HomeChangeSection'
import HomeFooter from 'components/organisms/homes/HomeFooter/HomeFooter'
import HomeHeader from 'components/organisms/homes/HomeHeader/HomeHeader'
import HomeKnowSection from 'components/organisms/homes/HomeKnowSection/HomeKnowSection'
import HomeLookBackSection from 'components/organisms/homes/HomeLookBackSection/HomeLookBackSection'
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
        <HomeCaptionSection className={styles['home__caption-section']} />
      </Container>
      <HomeFooter />
    </div>
  )
}

export default Home
