import QuestionContainer from 'components/organisms/questions/Container'
import TopCategories from 'components/organisms/top/Categories'
import { NextPage } from 'next'

const TopPage: NextPage = () => {
  return (
    <QuestionContainer>
      <TopCategories />
    </QuestionContainer>
  )
}

export default TopPage
