import { useEffect } from 'react'
import { NextPage } from 'next'
import { useUser } from '@auth0/nextjs-auth0/client'
import QuestionContainer from 'components/organisms/questions/Container'
import TopCategories from 'components/organisms/top/Categories'

const TopPage: NextPage = () => {
  const { user, error, isLoading } = useUser()

  // TODO: backendに投げる
  useEffect(() => {
    console.log(user, 'user')
  }, [user])

  return (
    <QuestionContainer>
      <TopCategories />
    </QuestionContainer>
  )
}

export default TopPage
