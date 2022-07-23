import { FC } from 'react'
import Image from 'next/image'
import { Box, SimpleGrid } from '@chakra-ui/react'
import HomeContentBody from 'components/molecules/homes/HomeContentBody/HomeContentBody'
import HomeContentCatchPhrase from 'components/molecules/homes/HomeContentCatchPhrase/HomeContentCatchPhrase'
import HomeContentTitle from 'components/molecules/homes/HomeContentTitle/HomeContentTitle'
import styles from 'styles/Home.module.scss'

type Props = {
  className?: string
}

const HomeLookBackSection: FC<Props> = (props) => {
  return (
    <SimpleGrid columns={2} spacing={10} className={props.className}>
      <Box px={5}>
        <HomeContentTitle className={styles['home__section__item-title']}>
          <span>2.見直す</span>
        </HomeContentTitle>
        <HomeContentCatchPhrase className={styles['home__section__item']}>
          あなたの暮らしに地球が何個必要か知っていますか？
          <br />
          地球に負担をかけない、丁寧な暮らし方への見直しが、いま求められています
        </HomeContentCatchPhrase>
        <HomeContentBody className={styles['home__section__item']}>
          <span>
            エコロジカルフットプリント
            <small>（人類が地球に与えている負荷の大きさを測る指標）</small>
            によると、 もし、世界中の人が日本と同じ暮らしをすると、地球が
            <span style={{ backgroundColor: '#F1FF55' }}>約2.8個分</span>
            必要になると言われています<sup>3</sup>。
            これは、私たちが地球が生み出す自然の資源を必要以上に採取し、自然に吸収される量より多くのCO2を排出していることを意味します。
            <br />
            住居、移動、食生活、衣類など、私たちの暮らしを支えるあらゆるモノやサービスは、これらを作り、運び、使い、捨てるまでの間に温室効果ガスを排出し、
            その量はカーボンフットプリント全体の約6割を占めています<sup>2</sup>
            。
          </span>
        </HomeContentBody>
      </Box>
      <Box className={styles['home__section__img-container']}>
        <Image
          src={'/home/home-content-look-back.png'}
          alt={'見直すセクション'}
          layout={'fill'}
        />
      </Box>
    </SimpleGrid>
  )
}

export default HomeLookBackSection
