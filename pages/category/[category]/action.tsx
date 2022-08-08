import { ParsedUrlQuery } from 'querystring'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import ActionCompleteBtn from 'components/molecules/actions/ActionCompleteBtn/ActionCompleteBtn'
import ActionHeader from 'components/molecules/actions/ActionHeader/ActionHeader'
import ActionItem from 'components/organisms/actions/ActionItem/ActionItem'
import QuestionContainer from 'components/organisms/questions/Container'
import { actionData } from 'constants/action-mock'

interface Params extends ParsedUrlQuery {
  category: Questions.QuestionCategory
}

const ActionPage: NextPage<Params> = ({ category }) => {
  const completeActions = () => {
    console.log('completed')
  }

  return (
    <QuestionContainer category={category}>
      <ActionHeader />
      <Box pt={10} pb={{base: 12, md: 2}}>
        {actionData &&
          actionData.map((action) => {
            return (
              <ActionItem
                key={action.id}
                amount={action.amount}
                implementationRate={action.implementationRate}
                action={action.action}
                description={action.description}
              />
            )
          })}
      </Box>
      <ActionCompleteBtn onClick={completeActions} />
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

export default ActionPage
