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

const disable_facebook = process.env.NEXT_PUBLIC_DISABLE_FACEBOOK == 'true'
const disable_twitter = process.env.NEXT_PUBLIC_DISABLE_TWITTER == 'true'
const disable_line = process.env.NEXT_PUBLIC_DISABLE_LINE == 'true'

const ShareSNS: FC<Props> = ({ line, twitter, facebook }) => {
  if (disable_facebook && disable_twitter && disable_line) return <></>

  return (
    <Box className={ styles['share-sns'] }>
      <Box className={ styles['share-sns__title'] }>結果をシェアする</Box>
      <Box display="flex" justifyContent="center">
        { !disable_facebook && (
          <a href={ facebook } target="_blank" rel="noreferrer">
            <IconButton
              background="transparent"
              _hover={ { backgroud: 'transparent' } }
              aria-label="Share result on Facebook"
              icon={ <FacebookIcon/> }
            />
          </a>
        ) }
        { !disable_twitter && (
          <a href={ twitter } target="_blank" rel="noreferrer">
            <IconButton
              background="transparent"
              _hover={ { backgroud: 'transparent' } }
              aria-label="Share result on Twitter"
              icon={ <TwitterIcon/> }
              mx={ 6 }
            />
          </a>
        ) }
        { !disable_line && (
          <a href={ line } target="_blank" rel="noreferrer">
            <IconButton
              background="transparent"
              _hover={ { backgroud: 'transparent' } }
              aria-label="Share result on Line"
              icon={ <LineIcon/> }
            />
          </a>
        ) }
      </Box>
    </Box>
  )
}

export default ShareSNS
