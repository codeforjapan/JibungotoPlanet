import { ParsedUrlQuery } from 'querystring'
import { useMemo } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import QuestionResultGraph from 'components/molecules/result/ResultGraph'
import QuestionContainer from 'components/organisms/questions/Container'
import SharedResult from 'components/organisms/result/SharedResult'
import { useEmissionResult } from 'hooks/emission'

interface Params extends ParsedUrlQuery {
  category: Questions.QuestionCategory
  shareId: string
}

const QuestionResultPage: NextPage<Params> = ({ category, shareId }) => {
  return (
    <QuestionContainer category={category}>
      <SharedResult category={category} shareId={shareId} />
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

export default QuestionResultPage
