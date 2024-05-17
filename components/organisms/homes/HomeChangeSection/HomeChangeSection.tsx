import { FC } from 'react'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'
import HomeContentBody from 'components/molecules/homes/HomeContentBody/HomeContentBody'
import HomeContentCatchPhrase from 'components/molecules/homes/HomeContentCatchPhrase/HomeContentCatchPhrase'
import HomeContentTitle from 'components/molecules/homes/HomeContentTitle/HomeContentTitle'
import HomeSectionContainer from 'components/molecules/homes/HomeSectionContainer/HomeSectionContainer'
import styles from 'styles/Home.module.scss'

type Props = {
  className?: string
  sp: boolean
}

const HomeChangeSection: FC<Props> = (props) => {
  return (
    <HomeSectionContainer className={props.className}>
      {props.sp && (
        <HomeContentTitle className={styles['home__section__item-title']}>
          <span>3.変える</span>
        </HomeContentTitle>
      )}
      <Box className={styles['home__section__img-container']}>
        <Image
          src={'/home/home-content-change.png'}
          alt={'変えるセクション'}
          fill
          style={{
            objectFit: 'contain'
          }}
        />
      </Box>
      <Box px={{ base: 0, md: 5 }}>
        {!props.sp && (
          <HomeContentTitle className={styles['home__section__item-title']}>
            <span>3.変える</span>
          </HomeContentTitle>
        )}
        <HomeContentCatchPhrase className={styles['home__section__item']}>
          あなたにあった行動の選択肢の中から、脱炭素社会に向けてできることからはじめましょう
        </HomeContentCatchPhrase>
        <HomeContentBody className={styles['home__section__item']}>
          <span>
            気候変動への影響を小さくするために、私たちにできることはたくさんあります。
            毎日の生活で、モノを買う、使う、捨てる、食事する、移動する、電気を使う。ライフステージの節目で、
            住んでいる街のこと、家のこと、車のことを考える。こうした場面のそれぞれで、あなたにしかできない脱炭素アクションの選択肢があります。
            いま、多くの人が気候変動を「じぶんごと」にし、脱炭素をキーワードにした企業や自治体の取り組みが加速し、その輪が広がっています。私たちの生活スタイルを見直し、一つでも多くの脱炭素アクションを起こすことが、気候変動を止めることにつながります。
          </span>
        </HomeContentBody>
      </Box>
    </HomeSectionContainer>
  )
}

export default HomeChangeSection
