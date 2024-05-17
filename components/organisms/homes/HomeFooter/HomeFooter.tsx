import { FC, ReactNode } from 'react'
import Image from 'next/image'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
  VStack
} from '@chakra-ui/react'
import classNames from 'classnames'
import BasicButton from 'components/atoms/buttons/Basic'
import HomeContentCatchPhrase from 'components/molecules/homes/HomeContentCatchPhrase/HomeContentCatchPhrase'
import styles from 'styles/Home.module.scss'

type Props = {
  className?: string
  campaigns: (CampaignItem | never)[]
  maxW: string
  onClick: { (): void }
}
export type CampaignItem = {
  imgSrc: string
  description: string | ReactNode
  url?: string
  alt: string
}

const HomeFooter: FC<Props> = (props) => {
  return (
    <Box className={classNames(props.className, styles['home__footer'])}>
      <Image
        src={'/home/home-footer.png'}
        alt={'footerの背景'}
        fill
        style={{ objectFit: 'fill' }}
      />
      <Box className={styles['home__footer__content']}>
        <HomeContentCatchPhrase
          className={styles['home__footer__catch-phrase']}
        >
          あなたのカーボン
          <br className={styles['br-sp']} />
          フットプリント量を
          <br className={styles['br-sp']} />
          知る
        </HomeContentCatchPhrase>
        <BasicButton width={300} textAlign={'center'} onClick={props.onClick}>
          はじめる
        </BasicButton>

        {props.campaigns?.length > 0 && (
          <Container maxW={props.maxW} margin="120px 0 80px 0">
            <Grid
              templateColumns={
                props.campaigns.length > 1
                  ? { base: 'repeat(1, 1fr)', xl: 'repeat(2, 1fr)' }
                  : 'repeat(1, 1fr)'
              }
              gap={4}
              alignContent="center"
            >
              {props.campaigns.map((campaign, index) => (
                <GridItem key={index} colSpan={1}>
                  <Box
                    padding="24px"
                    bg="white"
                    h="100%"
                    onClick={() => {
                      if (campaign.url) window.open(campaign.url)
                    }}
                  >
                    <Box
                      display={{ base: 'block', xl: 'flex' }}
                      textAlign={{ base: 'center', xl: 'start' }}
                      alignItems="center"
                      justifyContent="center"
                      h="100%"
                    >
                      <Box
                        minW="272px"
                        h="152px"
                        display="inline-block"
                        position="relative"
                      >
                        <Image
                          src={campaign.imgSrc}
                          alt={campaign.alt}
                          layout="fill"
                          style={{ objectFit: 'contain' }}
                        />
                      </Box>
                      <Box ml="16px" textAlign="start">
                        <Text fontSize="20px" fontWeight="bold">
                          {campaign.description}
                          {campaign.url && <ExternalLinkIcon />}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </Container>
        )}

        <Container
          maxW="container.xl"
          bg="white"
          borderRadius="md"
          boxShadow="md"
          p={6}
          mt={10}
        >
          <VStack spacing={4} alignItems={'left'}>
            <Heading size="sm">Web APIを公開しました</Heading>
            <Text>
              国立環境研究所が発行している「国内52都市における脱炭素型ライフスタイルの選択肢：カーボンフットプリントと削減効果データブック」のデータをWeb
              APIで取得できるようになりました。これにより日本の地域別の温室効果ガス排出量（カーボンフットプリント）を活用することができます。
              <br />
              また、アプリ画面上で質問に答えカーボンフットプリント量を計算するのではなく、質問の回答を投げることで1年間、または1ヶ月のフットプリント量をAPIで取得できるようになりました。詳細については
              <Link
                textDecoration={'underline'}
                href={
                  'https://codeforjapan.github.io/JibungotoPlanet-API/swagger/'
                }
              >
                APIドキュメント
              </Link>
              をご確認ください。
            </Text>
          </VStack>
        </Container>

        <Text fontSize={14} mt={'auto'} pt={{ base: 10, md: 20 }} mb={6}>
          本アプリケーションは、日本財団の「グーグル基金」の支援金を受けて一部機能の追加を実施しました
        </Text>
        <Text fontSize={14} mt={'auto'} pb={{ base: 0, md: 5 }}>
          © Code for Japan
        </Text>
      </Box>
    </Box>
  )
}

export default HomeFooter
