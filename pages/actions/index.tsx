import { useMemo } from 'react'
import { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import DatasourceFooter from 'components/DatasourceFooter'
import ShareSNS from 'components/molecules/result/ShareSNS/ShareSNS'
import ActionsContent from 'components/organisms/actions/ActionsContent/ActionsContent'
import CompletionTransitions from 'components/organisms/completion/CompletionTransitions/CompletionTransitions'
import QuestionContainer from 'components/organisms/questions/Container'
import { useEmissionResult } from 'hooks/emission'

const ActionsPage: NextPage = () => {
  const emission = useEmissionResult('all')

  const additional_hashtag = process.env.NEXT_PUBLIC_TWITTER_SHARE_TAG
    ? `,${process.env.NEXT_PUBLIC_TWITTER_SHARE_TAG}`
    : ''

  const additional_message: string = process.env
    .NEXT_PUBLIC_TOP_TWITTER_SHARE_MESSAGE
    ? ` %0a${process.env.NEXT_PUBLIC_TOP_TWITTER_SHARE_MESSAGE}`
    : ''

  const twitterShareLink = useMemo(() => {
    return `https://twitter.com/share?url=${process.env.NEXT_PUBLIC_CLIENT_URL}/actions/${emission.profile?.shareId}&text=わたしの脱炭素アクション${additional_message}&hashtags=じぶんごとプラネット${additional_hashtag}`
  }, [additional_hashtag, additional_message, emission.profile?.shareId])

  const facebookShareLink = useMemo(() => {
    return `https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_CLIENT_URL}/actions/${emission.profile?.shareId}`
  }, [emission.profile])

  const lineShareLink = useMemo(() => {
    return `https://line.me/R/msg/text/?${process.env.NEXT_PUBLIC_CLIENT_URL}/actions/${emission.profile?.shareId}`
  }, [emission.profile])

  return (
    <QuestionContainer title="あなたの脱炭素アクション">
      <ActionsContent emission={emission} />
      <ShareSNS
        line={lineShareLink}
        twitter={twitterShareLink}
        facebook={facebookShareLink}
      />
      <Box pt={14}>
        <CompletionTransitions />
      </Box>
      <Box mt={6}>
        <DatasourceFooter />
      </Box>
    </QuestionContainer>
  )
}

export default ActionsPage
