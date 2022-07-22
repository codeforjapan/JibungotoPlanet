import { ParsedUrlQuery } from 'querystring'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import QuestionResultGraph from 'components/molecules/result/ResultGraph'
import QuestionContainer from 'components/organisms/questions/Container'

interface Params extends ParsedUrlQuery {
  category: Questions.QuestionCategory
}

const QuestionResultPage: NextPage<Params> = ({ category }) => {
  return (
    <QuestionContainer category={category}>
      <QuestionResultGraph category={category} />
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

export default QuestionResultPage
