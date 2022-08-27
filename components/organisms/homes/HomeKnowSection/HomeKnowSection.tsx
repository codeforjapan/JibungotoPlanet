import { FC } from 'react'
import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import BasicButton from 'components/atoms/buttons/Basic'
import HomeContentBody from 'components/molecules/homes/HomeContentBody/HomeContentBody'
import HomeContentCatchPhrase from 'components/molecules/homes/HomeContentCatchPhrase/HomeContentCatchPhrase'
import HomeContentTitle from 'components/molecules/homes/HomeContentTitle/HomeContentTitle'
import HomeSectionContainer from 'components/molecules/homes/HomeSectionContainer/HomeSectionContainer'
import styles from 'styles/Home.module.scss'

type Props = {
  className?: string
  sp: boolean
  onClick: { (): void }
}

const HomeKnowSection: FC<Props> = (props) => {
  return (
    <HomeSectionContainer className={props.className || ''}>
      {props.sp && (
        <HomeContentTitle className={styles['home__section__item-title']}>
          <span>1.知る</span>
        </HomeContentTitle>
      )}
      <Box className={styles['home__section__img-container']}>
        <Image
          src={'/home/home-content-know.png'}
          alt={'知るセクション'}
          objectFit={'contain'}
          layout={'fill'}
        />
      </Box>
      <Box px={{ base: 0, md: 5 }}>
        {!props.sp && (
          <HomeContentTitle className={styles['home__section__item-title']}>
            <span>1.知る</span>
          </HomeContentTitle>
        )}
        <HomeContentCatchPhrase className={styles['home__section__item']}>
          まずはあなたの現状を知ることからはじめ、ひとりひとりの具体的な気候変動対策を
        </HomeContentCatchPhrase>
        <HomeContentBody className={styles['home__section__item']}>
          <span>
            日本でも大型台風、集中豪雨、35℃以上の猛暑日などの異常気象が起きています。こうした気候変動による自然災害の増加、食料生産や経済システムへの悪影響を食い止めるには、産業革命後の気温上昇をできる限り1.5℃、少なくとも2℃未満に抑えることが必要です
            <sup>1</sup>。<br />
            この気候目標を達成するためには、2030年までに1人1年あたりのカーボンフットプリント量
            <small>（ひとりの暮らしで発生する炭素の排出量）</small>を
              約3トンCO₂e
              <small>（二酸化炭素に換算した温室効果ガスの排出量）</small>
              に減らす必要があります。
            現在、日本人1人あたりの平均は約7トンCO₂eです<sup>2</sup>。
          </span>
        </HomeContentBody>
        <Box pt={5}>
          <Text pb={3} fontSize={'18px'} fontWeight={'bold'}>
            あなたのカーボンフットプリント量を知る
          </Text>
          <BasicButton
            width={'full'}
            textAlign={'center'}
            onClick={props.onClick}
          >
            はじめる
          </BasicButton>
        </Box>
      </Box>
    </HomeSectionContainer>
  )
}

export default HomeKnowSection
