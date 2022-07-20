import { ParsedUrlQuery } from 'querystring'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import QuestionForm from '../../../components/molecules/questions/Form'
import QuestionContainer from '../../../components/organisms/questions/Container'
import { MOBILITY_QUESTION_PAGES } from '../../../constants/questions'
import { useQuestions } from '../../../hooks/questions'

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
  //ToDo add house, food and comsumption, then concat them

  const mobilityPaths = MOBILITY_QUESTION_PAGES.map((page) => {
    return { params: { category: page.category, uid: page.uid } }
  })

  const allPaths = mobilityPaths

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
