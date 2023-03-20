import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0/client'
import { Container, useMediaQuery } from '@chakra-ui/react'
import HomeCaptionSection from 'components/organisms/homes/HomeCaptionSection/HomeCaptionSection'
import HomeChangeSection from 'components/organisms/homes/HomeChangeSection/HomeChangeSection'
import HomeFooter from 'components/organisms/homes/HomeFooter/HomeFooter'
import HomeHeader from 'components/organisms/homes/HomeHeader/HomeHeader'
import HomeKnowSection from 'components/organisms/homes/HomeKnowSection/HomeKnowSection'
import HomeLookBackSection from 'components/organisms/homes/HomeLookBackSection/HomeLookBackSection'
import styles from 'styles/Home.module.scss'

const maxW = '1280px'
const Home: FC = () => {
  const router = useRouter()
  const [isMobile] = useMediaQuery('(max-width: 480px)')
  // TODO: ERROR Handling
  const { user } = useUser()

  useEffect(() => {
    if (user) {
      router.push('/top')
    }
  }, [router, user])

  return (
    <div>
      <HomeHeader sp={isMobile} />
      <Container
        maxW={maxW}
        centerContent
        py={{ base: 0, md: 12 }}
        my={{ base: 0, md: 5 }}
      >
        <HomeKnowSection className={styles['home__section']} sp={isMobile} />
        <HomeLookBackSection
          className={styles['home__section']}
          sp={isMobile}
        />
        <HomeChangeSection className={styles['home__section']} sp={isMobile} />
        <HomeCaptionSection className={styles['home__caption-section']} />
      </Container>
      <HomeFooter />
    </div>
  )
}

export default Home
