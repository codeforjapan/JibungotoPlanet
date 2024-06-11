import { ParsedUrlQuery } from 'querystring'
import { useMemo } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import DatasourceFooter from 'components/DatasourceFooter'
import ShareSNS from 'components/molecules/result/ShareSNS/ShareSNS'
import CompletionContent from 'components/organisms/completion/CompletionContent/CompletionContent'
import CompletionHeader from 'components/organisms/completion/CompletionHeader/CompletionHeader'
import CompletionTransitions from 'components/organisms/completion/CompletionTransitions/CompletionTransitions'
import QuestionContainer from 'components/organisms/questions/Container'
import { useProfile } from 'hooks/profile'

interface Params extends ParsedUrlQuery {
  category: Questions.QuestionCategory
}

const CompletionPage: NextPage<Params> = ({ category }) => {
  const { profile } = useProfile()

  const additional_hashtag = process.env.NEXT_PUBLIC_TWITTER_SHARE_TAG
    ? `,${process.env.NEXT_PUBLIC_TWITTER_SHARE_TAG}`
    : ''

  const additional_message: string = process.env
    .NEXT_PUBLIC_TOP_TWITTER_SHARE_MESSAGE
    ? ` %0a${process.env.NEXT_PUBLIC_TOP_TWITTER_SHARE_MESSAGE}`
    : ''

  const twitterShareLink = useMemo(() => {
    return `https://twitter.com/share?url=${process.env.NEXT_PUBLIC_CLIENT_URL}/category/${category}/completion/${profile?.shareId}&text=わたしの脱炭素アクション${additional_message}&hashtags=じぶんごとプラネット${additional_hashtag}`
  }, [profile, category])

  const facebookShareLink = useMemo(() => {
    return `https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_CLIENT_URL}/category/${category}/completion/${profile?.shareId}`
  }, [profile, category])

  const lineShareLink = useMemo(() => {
    return `https://line.me/R/msg/text/?${process.env.NEXT_PUBLIC_CLIENT_URL}/category/${category}/completion/${profile?.shareId}`
  }, [profile, category])

  return (
    <QuestionContainer category={category}>
      <Box fontWeight="bold" textAlign="center" textColor="red" fontSize={16} mt={4} mb={4}>
          「質問カテゴリーへ戻る」を選択して、
          <br />
          アプリの利用を続けてください。
      </Box>
      <CompletionHeader category={category} />
      <CompletionContent category={category} />
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

export const getStaticPaths: GetStaticPaths = () => {
  //ToDo add house, food and comsumption, then concat them

  const allPaths = [
    { params: { category: 'mobility' } },
    { params: { category: 'housing' } },
    { params: { category: 'food' } },
    { params: { category: 'other' } }
  ]

  return {
    paths: allPaths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Params, Params> = ({ params }) => {
  return {
    props: {
      category: params?.category || 'mobility'
    }
  }
}

export default CompletionPage
