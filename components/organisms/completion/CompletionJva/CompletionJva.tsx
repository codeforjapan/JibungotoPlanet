import { FC } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  Box,
  Divider,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  useMediaQuery
} from '@chakra-ui/react'
import BasicButton from 'components/atoms/buttons/Basic'
import styles from './CompletionJva.module.scss'

const CompletionJva: FC = () => {
  const [isMobile] = useMediaQuery('(max-width: 480px)')
  const router = useRouter()

  return (
    <Box>
      <Divider margin="25px 0" />
      <Heading
        as="h5"
        pb={6}
        fontSize={isMobile ? '18px' : '20px'}
        textAlign={'center'}
      >
        限定画像をダウンロード！
      </Heading>
      <Box display={'flex'}>
        {/* TODO: ダウンロードリンクの設定 */}
        <Link href="/apple-touch-icon.png" download mr={5} width={'full'}>
          <BasicButton
            width="full"
            isNext
            backgroundColor="grey.200"
            color="#333333"
            py={'13px'}
          >
            女性選手
          </BasicButton>
        </Link>
        {/* TODO: ダウンロードリンクの設定 */}
        <Link href="/apple-touch-icon.png" download width={'full'}>
          <BasicButton
            width="100%"
            isNext
            backgroundColor="grey.200"
            color="#333333"
            py={'13px'}
          >
            男性選手
          </BasicButton>
        </Link>
      </Box>
      <Divider margin="25px 0" />

      <Box py={5}>
        <Heading
          as="h3"
          fontSize={isMobile ? '18px' : '24px'}
          textAlign="center"
          mb={6}
        >
          結果をシェアして日本代表選手サイン入り
          <br />
          マイボトルを当てよう！
        </Heading>
        <Box textAlign={'center'} pb={10}>
          <Image
            src={'/campaign/jva2.png'}
            alt={'キャンペーン画像'}
            width={isMobile ? '311px' : '608px'}
            height={isMobile ? '164px' : '320px'}
          />
        </Box>
        <Box pb={12}>
          <Box as="span" p={1} borderRadius={4} fontWeight="bold" border="1px">
            応募方法
          </Box>
          <OrderedList pt={4} pl={4}>
            <ListItem
              fontSize={isMobile ? '16px' : ' 18px'}
              className={styles.list}
              pb={4}
            >
              『結果をシェア』ボタンから、 X（旧Twitter）にて ハッシュタグ
              #JVA環境アクション をつけて結果をツイート
            </ListItem>
            <ListItem
              fontSize={isMobile ? '16px' : ' 18px'}
              className={styles.list}
            >
              さらにX（旧Twitter）にて@JVA_Volleyballをフォロー
            </ListItem>
          </OrderedList>
          <Box
            pt={{ base: 5, sm: 5, md: 6 }}
            fontWeight={400}
            fontSize={isMobile ? '16px' : ' 18px'}
          >
            <Text>※複数アカウントの応募は無効</Text>
            <Text pt={4}>
              抽選で10名の方に日本代表選手のサイン入りタンブラーをプレゼント
            </Text>
          </Box>
        </Box>
        <Box>
          <Box as="span" p={1} borderRadius={4} fontWeight="bold" border="1px">
            〆切
          </Box>
          <Text
            pt={{ base: 4, sm: 4, md: 6 }}
            fontSize={isMobile ? '16px' : ' 18px'}
          >
            10月8日（日）23:59まで <br />
            当選は11月初旬頃DMよりご連絡いたします
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default CompletionJva
