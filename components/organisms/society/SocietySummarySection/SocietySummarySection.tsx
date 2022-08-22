import { FC } from 'react'
import Image from 'next/image'
import { Flex, Box, Text } from '@chakra-ui/react'

import SocietyContentCatchPhrase from 'components/molecules/society/SocietyContentCatchPhrase/SocietyContentCatchPhrase'
import SocietyContentTitle from 'components/molecules/society/SocietyContentTitle/SocietyContentTitle'

import styles from 'styles/Society.module.scss'

const SocietySummarySection: FC = () => {
  return (
    <Box width={{ md: '80%' }}>
      <Box background="white">
        <Text
          fontWeight="bold"
          fontSize="16px"
          p={4}
          textAlign={{ base: 'center', md: 'left' }}
        >
          じぶんごとプラネット
        </Text>
      </Box>
      <Box mt={10}>
        <SocietyContentTitle className={styles['society__section__item-title']}>
          じぶんから働きかける
        </SocietyContentTitle>
        <SocietyContentCatchPhrase className={styles['society__section__item']}>
          あなた自身の「脱炭素アクション」が、他の市民、企業、行政の行動をも変えていきます。
          <br /> 「じぶんごとの輪」を広めるために、他にもできることがあります。
        </SocietyContentCatchPhrase>
      </Box>
      <Box className={styles['society__section__img-container']}>
        <Image
          src={'/society/society-venn-diagram.png'}
          alt={'自分から動きかける方法'}
          layout={'responsive'}
          width={1200}
          height={872}
        />
      </Box>
    </Box>
  )
}

export default SocietySummarySection
