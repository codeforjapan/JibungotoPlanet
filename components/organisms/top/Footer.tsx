import { FC, useMemo } from 'react'
import { useRouter } from 'next/router'
import { Box, Text } from '@chakra-ui/react'
import BasicButton from 'components/atoms/buttons/Basic'
import DatasourceFooter from 'components/DatasourceFooter'
import ShareSNS from 'components/molecules/result/ShareSNS/ShareSNS'
import { useEmissionResult } from 'hooks/emission'
import { useProfile } from 'hooks/profile'

const TopCategories: FC = () => {
  const router = useRouter()
  const emission = useEmissionResult('all')
  const { profile } = useProfile()
  const additional_hashtag = process.env.NEXT_PUBLIC_TWITTER_SHARE_TAG
    ? `,${process.env.NEXT_PUBLIC_TWITTER_SHARE_TAG}`
    : ''
  const additional_message: string = process.env
    .NEXT_PUBLIC_TOP_TWITTER_SHARE_MESSAGE
    ? ` ${process.env.NEXT_PUBLIC_TOP_TWITTER_SHARE_MESSAGE}`
    : ''

  const twitterShareLink = useMemo(() => {
    return `https://twitter.com/share?url=${process.env.NEXT_PUBLIC_CLIENT_URL}/actions/${profile?.shareId}&text=${additional_message}&hashtags=じぶんごとプラネット${additional_hashtag}`
  }, [additional_hashtag, profile?.shareId])

  const facebookShareLink = useMemo(() => {
    return `https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_CLIENT_URL}/actions/${profile?.shareId}`
  }, [profile])

  const lineShareLink = useMemo(() => {
    return `https://line.me/R/msg/text/?${process.env.NEXT_PUBLIC_CLIENT_URL}/actions/${profile?.shareId}`
  }, [profile])

  const mobility = useMemo(() => {
    return emission.mobility.find((f) => f.key === 'total')?.value
  }, [emission])

  const food = useMemo(() => {
    return emission.food.find((f) => f.key === 'total')?.value
  }, [emission])

  const housing = useMemo(() => {
    return emission.housing.find((f) => f.key === 'total')?.value
  }, [emission])

  const other = useMemo(() => {
    return emission.other.find((f) => f.key === 'total')?.value
  }, [emission])

  return (
    <>
      {emission?.profile?.shareId && (
        <Text textAlign="right" fontSize="xs" mt={2}>
          識別ID: {emission.profile.shareId}
        </Text>
      )}
      {housing && food && mobility && other ? (
        <Box mt={8}>
          <ShareSNS
            line={lineShareLink}
            twitter={twitterShareLink}
            facebook={facebookShareLink}
          />
          <Box mt={8}>
            <BasicButton
              isNext
              onClick={() => router.push('/society')}
              width="full"
              variant="outline"
              color="brandPrimary.400"
              border="2px solid #009ACE!important"
            >
              社会へ働きかけるには
            </BasicButton>
          </Box>
        </Box>
      ) : (
        ''
      )}
      <Box mt={6}>
        <DatasourceFooter />
      </Box>
    </>
  )
}

export default TopCategories
