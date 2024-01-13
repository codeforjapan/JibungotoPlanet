import { FC, ReactNode } from 'react'
import Image from 'next/image'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Container, Grid, GridItem, Text } from '@chakra-ui/react'
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
        layout={'fill'}
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

        <Text fontSize={14} mt={'auto'} pt={{ base: 10, md: 20 }}>
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
