import { FC } from 'react'
import Image from 'next/image'
import { Flex, Box } from '@chakra-ui/react'

import SocietyContentCatchPhrase from 'components/molecules/society/SocietyContentCatchPhrase/SocietyContentCatchPhrase'
import SocietyContentTitle from 'components/molecules/society/SocietyContentTitle/SocietyContentTitle'

import styles from 'styles/Society.module.scss'

type Props = {
  className?: string
}

const SocietySummarySection: FC<Props> = (props) => {
  return (
    <Flex
      direction={'column'}
      alignItems={'center'}
      className={props.className}
      width={'80%'}
    >
      <Box px={5}>
        <SocietyContentTitle className={styles['society__section__item-title']}>
          自分から働きかける
        </SocietyContentTitle>
        <SocietyContentCatchPhrase className={styles['society__section__item']}>
          あなた自身の「脱炭素アクション」が、他の市民、企業、行政の行動をも変えていきます。「じぶんごとの輪」を広めるために、他にもできることがあります。
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
    </Flex>
  )
}

export default SocietySummarySection
