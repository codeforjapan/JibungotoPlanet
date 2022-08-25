import { FC } from 'react'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'
import HomeContentBody from 'components/molecules/homes/HomeContentBody/HomeContentBody'
import HomeContentCatchPhrase from 'components/molecules/homes/HomeContentCatchPhrase/HomeContentCatchPhrase'
import HomeContentTitle from 'components/molecules/homes/HomeContentTitle/HomeContentTitle'
import styles from 'styles/Home.module.scss'

type Props = {
  sp: boolean
}

const HomeHeader: FC<Props> = (props) => {
  return (
    <Box
      height={{ base: '100vh' }}
      style={{ position: 'relative' }}
    >
      <Box className={styles['home__header__item-container']}>
        <Box mb={{ base: 10, md: 20 }}>
          <HomeContentCatchPhrase>じぶんごとプラネット</HomeContentCatchPhrase>
        </Box>
        <Box pt={15} width={'100%'}>
          <HomeContentTitle className={styles['home__header__title-container']}>
            <span>
              気候変動を
              <br />
              <span className={styles['home__header__title']}>じぶんごと</span>
              にする
            </span>
          </HomeContentTitle>
          <HomeContentBody>
            脱炭素で持続可能な未来のために、ひとりひとりが今の生活スタイルの気候変動への影響を知り、小さなことから一つずつアクションを起こす。こうして「じぶんごと」の輪が広がっていきます。
          </HomeContentBody>
        </Box>
      </Box>
      {props.sp ? (
        <Box height="470px" style={{ position: 'relative' }}>
          <Image
            src={'/home/home-header--sp.png'}
            layout="fill"
            objectFit="contain"
            alt="home-header"
          />
        </Box>
      ) : (
        <Image
          src={'/home/home-header.png'}
          layout="fill"
          alt="home-header"
          objectFit="cover"
        />
      )}
    </Box>
  )
}

export default HomeHeader
