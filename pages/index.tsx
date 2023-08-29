import { FC, Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Center,
  Checkbox,
  Container,
  Text,
  useMediaQuery
} from '@chakra-ui/react'
import BasicButton from 'components/atoms/buttons/Basic'
import PatchExclamation from 'components/atoms/icons/PatchExclamation'
import TermOfServiceDialog from 'components/molecules/homes/TermOfServiceDialog/TermOfServiceDialog'
import HomeCaptionSection from 'components/organisms/homes/HomeCaptionSection/HomeCaptionSection'
import HomeChangeSection from 'components/organisms/homes/HomeChangeSection/HomeChangeSection'
import HomeFooter, {
  CampaignItem
} from 'components/organisms/homes/HomeFooter/HomeFooter'
import HomeHeader from 'components/organisms/homes/HomeHeader/HomeHeader'
import HomeKnowSection from 'components/organisms/homes/HomeKnowSection/HomeKnowSection'
import HomeLookBackSection from 'components/organisms/homes/HomeLookBackSection/HomeLookBackSection'
import QuestionContainer from 'components/organisms/questions/Container'
import { termOfServices } from 'constants/termOfService'
import styles from 'styles/Home.module.scss'

const campaigns: (CampaignItem | never)[] = [
  {
    imgSrc: '/campaigns/bs-asahi-campaign.png',
    description: (
      <>
        BS朝日「地球クライシス」にてキャンペーン実施中！
        <br />
        じぶんごとプラネットを活用して気候変動対策に取り組もう
      </>
    ),
    alt: 'bs朝日 地球クライシス',
    url: ''
  }
]

const Home: FC = () => {
  const [isMobile] = useMediaQuery('(max-width: 480px)')
  const [open, setOpen] = useState<boolean>(false)
  const maxW = '1280px'
  const serviceName = 'じぶんごとプラネット'
  const [checked, setChecked] = useState<boolean>(false)
  const router = useRouter()

  if (process.env.NEXT_PUBLIC_SHOW_TOP_TERMS_OF_SERVICE) {
    return (
      // todo 環境変数からtitleを取得するようにする
      <QuestionContainer
        title={
          <span>
            踏み出そう！地球のための一歩 <br /> ～じぶんごとプラネット×BS朝日～
          </span>
        }
      >
        <Box px={{ base: 1, md: 3 }} py={10} position="relative">
          <Box pb={5} display="flex" alignItems="center">
            <PatchExclamation />
            <Text
              fontSize="14px"
              fontWeight="bold"
              pl={3}
            >{`${serviceName} 利用規約`}</Text>
          </Box>
          <Text>
            {serviceName} 利用規約（以下「
            <span className={styles['home__fb']}>本規約</span>」といいます）は、
            一般社団法人コード・フォー・ジャパン（以下「
            <span className={styles['home__fb']}>CfJ</span>
            」といいます）が運営するカーボンフットプリント計算ツールを含むウェブアプリケーション「
            {serviceName}」
            （以下「本サービス」といいます）の利用条件を定めるものです。本サービスを利用する皆様は、ご利用前に本規約をよく読み、本規約に同意の上でご利用ください
          </Text>
          <Box pb={10}>
            {termOfServices.map((termOfService, index) => {
              return (
                <Fragment key={index}>
                  <Text fontWeight="bold" pt={6} pb={3}>
                    {termOfService.title}
                  </Text>
                  <div
                    style={{ whiteSpace: 'pre-wrap' }}
                    dangerouslySetInnerHTML={{
                      __html: termOfService.body
                    }}
                  />
                </Fragment>
              )
            })}
          </Box>
          <Box className={styles['home__dialog__actions']}>
            <Checkbox
              defaultChecked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            >
              利用規約に同意します。
            </Checkbox>
            <BasicButton
              mt={4}
              width="70%"
              textAlign={'center'}
              disabled={!checked}
              onClick={() => router.push('/top')}
            >
              サービスを開始する
            </BasicButton>
          </Box>
        </Box>
        <Center>
          <Text fontSize={14} mt={'auto'} pb={{ base: 0, md: 5 }}>
            © 2023 Code for Japan
          </Text>
        </Center>
      </QuestionContainer>
    )
  } else {
    return (
      <>
        <HomeHeader sp={isMobile} />
        <Container
          maxW={maxW}
          centerContent
          py={{ base: 0, md: 12 }}
          my={{ base: 0, md: 5 }}
        >
          <HomeKnowSection
            className={styles['home__section']}
            sp={isMobile}
            onClick={() => setOpen(true)}
          />
          <HomeLookBackSection
            className={styles['home__section']}
            sp={isMobile}
          />
          <HomeChangeSection
            className={styles['home__section']}
            sp={isMobile}
          />
          <HomeCaptionSection className={styles['home__caption-section']} />
        </Container>
        <HomeFooter
          campaigns={campaigns}
          maxW={maxW}
          onClick={() => setOpen(true)}
        />
        <TermOfServiceDialog
          isOpen={open}
          onClose={() => setOpen(false)}
          sp={isMobile}
        />
      </>
    )
  }
}

export default Home
