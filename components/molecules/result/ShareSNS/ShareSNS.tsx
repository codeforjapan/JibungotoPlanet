import { FC } from 'react'
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

const ShareSNS: FC<Props> = ({ line, twitter, facebook }) => {
  return (
    <Box className={styles['share-sns']}>
      <Box className={styles['share-sns__title']}>結果をシェアする</Box>
      <Box display="flex" justifyContent="center">
        <a href={facebook} target="_blank" rel="noreferrer">
          <IconButton
            background="transparent"
            _hover={{ backgroud: 'transparent' }}
            aria-label="Share result on Facebook"
            icon={<FacebookIcon />}
          />
        </a>
        <a href={twitter} target="_blank" rel="noreferrer">
          <IconButton
            background="transparent"
            _hover={{ backgroud: 'transparent' }}
            aria-label="Share result on Twitter"
            icon={<TwitterIcon />}
            mx={6}
          />
        </a>
        <a href={line} target="_blank" rel="noreferrer">
          <IconButton
            background="transparent"
            _hover={{ backgroud: 'transparent' }}
            aria-label="Share result on Line"
            icon={<LineIcon />}
          />
        </a>
      </Box>
    </Box>
  )
}

export default ShareSNS
