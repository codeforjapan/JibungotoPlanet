import { ParsedUrlQuery } from 'querystring'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import DatasourceFooter from 'components/DatasourceFooter'
import ShareSNS from 'components/molecules/result/ShareSNS/ShareSNS'
import CompletionContent from 'components/organisms/completion/CompletionContent/CompletionContent'
import CompletionHeader from 'components/organisms/completion/CompletionHeader/CompletionHeader'
import CompletionTransitions from 'components/organisms/completion/CompletionTransitions/CompletionTransitions'
import QuestionContainer from 'components/organisms/questions/Container'

interface Params extends ParsedUrlQuery {
  category: Questions.QuestionCategory
}

const CompletionPage: NextPage<Params> = ({ category }) => {
  return (
    <QuestionContainer category={category}>
      <CompletionHeader category={category} />
      <CompletionContent category={category} />
      // todo: sns link
      <ShareSNS line={'/'} twitter={'/'} facebook={'/'} />
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
