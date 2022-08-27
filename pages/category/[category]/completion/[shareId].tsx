import { ParsedUrlQuery } from 'querystring'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Box } from '@chakra-ui/react'
import BasicButton from 'components/atoms/buttons/Basic'
import DatasourceFooter from 'components/DatasourceFooter'
import CompletionContent from 'components/organisms/completion/CompletionContent/CompletionContent'
import CompletionHeader from 'components/organisms/completion/CompletionHeader/CompletionHeader'
import QuestionContainer from 'components/organisms/questions/Container'

interface Params extends ParsedUrlQuery {
  category: Questions.QuestionCategory
  shareId: string
}

const CompletionPage: NextPage<Params> = ({ category, shareId }) => {
  const router = useRouter()

  return (
    <QuestionContainer category={category}>
      <CompletionHeader category={category} />
      <CompletionContent category={category} shareId={shareId} />
      <Box pt={14}>
        <BasicButton isNext onClick={() => router.push('/')} width="full">
          じぶんもやってみる
        </BasicButton>
      </Box>
      <Box mt={6}>
        <DatasourceFooter />
      </Box>
    </QuestionContainer>
  )
}

export const getServerSideProps: ({ params }: { params: any }) => {
  props: {
    shareId: string
    category: 'food' | 'mobility' | 'housing' | 'other'
  }
} = ({ params }) => {
  return {
    props: {
      category: params?.category || 'mobility',
      shareId: params?.shareId || ''
    }
  }
}

export default CompletionPage
