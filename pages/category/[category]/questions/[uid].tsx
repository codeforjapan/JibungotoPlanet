import { ParsedUrlQuery } from 'querystring'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useQuestions } from 'hooks/questions'
import QuestionContainer from 'components/organisms/questions/Container'
import QuestionForm from 'components/molecules/questions/Form'
import {
  FOOD_QUESTION_PAGES,
  HOUSING_QUESTION_PAGES,
  MOBILITY_QUESTION_PAGES,
  OTHER_QUESTION_PAGES
} from 'constants/questions'

interface Params extends ParsedUrlQuery {
  category: Questions.QuestionCategory
  uid: string
}

const QuestionPage: NextPage<Params> = ({ category, uid }) => {
  const questions = useQuestions()
  const questionPage = questions[category].find(
    (question) => question.uid === uid
  )

  return (
    <>
      {questionPage && (
        <QuestionContainer category={questionPage.category}>
          <QuestionForm questionPage={questionPage} />
        </QuestionContainer>
      )}
      {
        //ToDo Render for no questionPage data
      }
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  //ToDo add housing, food and comsumption, then concat them

  const mobilityPaths = MOBILITY_QUESTION_PAGES.map((page) => {
    return { params: { category: page.category, uid: page.uid } }
  })
  const foodPaths = FOOD_QUESTION_PAGES.map((page) => {
    return { params: { category: page.category, uid: page.uid } }
  })
  const housingPaths = HOUSING_QUESTION_PAGES.map((page) => {
    return { params: { category: page.category, uid: page.uid } }
  })
  const otherPaths = OTHER_QUESTION_PAGES.map((page) => {
    return { params: { category: page.category, uid: page.uid } }
  })

  const allPaths = mobilityPaths
    .concat(foodPaths)
    .concat(housingPaths)
    .concat(otherPaths)

  return {
    paths: allPaths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Params, Params> = ({ params }) => {
  return {
    props: {
      uid: params?.uid || '',
      category: params?.category || 'mobility'
    }
  }
}

export default QuestionPage
