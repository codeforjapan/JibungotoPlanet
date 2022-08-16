import { FC } from 'react'
import { useRouter } from 'next/router'
import { Box, IconButton } from '@chakra-ui/react'
import FacebookIcon from 'components/atoms/icons/FaceBookIcon'
import LineIcon from 'components/atoms/icons/LineIcon'
import TwitterIcon from 'components/atoms/icons/TwitterIcon'
import styles from 'components/molecules/result/ShareSNS/ShareSNS.module.scss'

type Props = {
  line: string
  twitter: string
  facebook: string
}

const ShareSNS: FC<Props> = (props) => {
  const router = useRouter()
  return (
    <Box className={styles['share-sns']}>
      <Box className={styles['share-sns__title']}>結果をシェアする</Box>
      <Box display="flex" justifyContent="center">
        <IconButton
          aria-label="Share result on Facebook"
          icon={<FacebookIcon />}
          onClick={() => router.push(props.facebook)}
        />
        <IconButton
          aria-label="Share result on Twitter"
          icon={<TwitterIcon />}
          onClick={() => router.push(props.twitter)}
          mx={6}
        />
        <IconButton
          aria-label="Share result on Line"
          icon={<LineIcon />}
          onClick={() => router.push(props.line)}
        />
      </Box>
    </Box>
  )
}

export default ShareSNS
