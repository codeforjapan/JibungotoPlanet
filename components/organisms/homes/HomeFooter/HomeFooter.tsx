import { FC } from 'react'
import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import classNames from 'classnames'
import BasicButton from 'components/atoms/buttons/Basic'
import HomeContentCatchPhrase from 'components/molecules/homes/HomeContentCatchPhrase/HomeContentCatchPhrase'
import styles from 'styles/Home.module.scss'

type Props = {
  className?: string
}

const HomeFooter: FC<Props> = (props) => {
  return (
    <Box className={classNames(props.className, styles['home__footer'])}>
      <Image
        src={'/home/home-footer.png'}
        alt={'footerの背景'}
        layout={'fill'}
      />
      <Box className={styles['home__footer__content']}>
        <HomeContentCatchPhrase
          className={styles['home__footer__catch-phrase']}
        >
          あなたのカーボンフットプリント量を知る
        </HomeContentCatchPhrase>
        <BasicButton width={300} textAlign={"center"}>はじめる</BasicButton>
        <Text fontSize={14} mt={'auto'} pb={5}>
          © 2022 Code for Japan
        </Text>
      </Box>
    </Box>
  )
}

export default HomeFooter
