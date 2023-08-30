import { ParsedUrlQuery } from 'querystring'
import { useMemo } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import DatasourceFooter from 'components/DatasourceFooter'
import CompletionContent from 'components/organisms/completion/CompletionContent/CompletionContent'
import CompletionHeader from 'components/organisms/completion/CompletionHeader/CompletionHeader'
import CompletionTransitions from 'components/organisms/completion/CompletionTransitions/CompletionTransitions'
import QuestionContainer from 'components/organisms/questions/Container'
import { useEmissionResult } from 'hooks/emission'

interface Params extends ParsedUrlQuery {
  category: Questions.QuestionCategory
}

const CompletionPage: NextPage<Params> = ({ category }) => {
  const emission = useEmissionResult('all')

  const answeredAllQuestion = useMemo(() => {
    const mobility = emission.mobility.find((f) => f.key === 'total')?.value
    const food = emission.food.find((f) => f.key === 'total')?.value
    const housing = emission.housing.find((f) => f.key === 'total')?.value
    const other = emission.other.find((f) => f.key === 'total')?.value

    return Boolean(mobility && food && housing && other)
  }, [emission])

  return (
    <QuestionContainer category={category}>
      <CompletionHeader category={category} />
      <CompletionContent category={category} />
      <Box pt={14}>
        <CompletionTransitions isCompleted={answeredAllQuestion} />
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
