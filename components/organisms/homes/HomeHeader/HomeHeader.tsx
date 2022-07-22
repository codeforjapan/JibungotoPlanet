import { FC } from 'react'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'
import HomeContentBody from 'components/molecules/homes/HomeContentBody/HomeContentBody'
import HomeContentCatchPhrase from 'components/molecules/homes/HomeContentCatchPhrase/HomeContentCatchPhrase'
import HomeContentTitle from 'components/molecules/homes/HomeContentTitle/HomeContentTitle'
import styles from 'styles/Home.module.scss'

const HomeHeader: FC = () => {
  return (
    <Box>
      <Box height="3vh" py={10}>
        <Box mb={10} className={styles['home__header__item-container']}>
          <HomeContentCatchPhrase
            className={styles['home__header__catch-phrase']}
          >
            じぶんごとプラネット
          </HomeContentCatchPhrase>
        </Box>
      </Box>
      <Box height="97vh" pt={10} style={{ position: 'relative' }}>
        <Box
          maxWidth={'660px'}
          className={styles['home__header__item-container']}
        >
          <Box pt={15}>
            <HomeContentTitle
              className={styles['home__header__title-container']}
            >
              <span>
                気候変動を
                <br />
                <span className={styles['home__header__title']}>
                  じぶんごと
                </span>
                にする
              </span>
            </HomeContentTitle>
            <HomeContentBody>
              脱炭素で持続可能な未来のために、ひとりひとりが今の生活スタイルの気候変動への影響を知り、小さなことから一つずつアクションを起こす。こうして「じぶんごと」の輪が広がっていきます。
            </HomeContentBody>
          </Box>
        </Box>
        <Image
          src={'/home/home-header.png'}
          layout="fill"
          objectFit={'contain'}
          alt="home-header"
        />
      </Box>
    </Box>
  )
}

export default HomeHeader
