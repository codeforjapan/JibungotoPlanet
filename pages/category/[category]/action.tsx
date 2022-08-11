import { ParsedUrlQuery } from 'querystring'
import { useState } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import DatasourceFooter from 'components/DatasourceFooter'
import ActionCompleteBtn from 'components/molecules/actions/ActionCompleteBtn/ActionCompleteBtn'
import ActionHeader from 'components/molecules/actions/ActionHeader/ActionHeader'
import ActionChangeRateDialog from 'components/organisms/actions/ActionChangeRateDialog/ActionChangeRateDialog'
import ActionItem from 'components/organisms/actions/ActionItem/ActionItem'
import QuestionContainer from 'components/organisms/questions/Container'
import { actionData } from 'constants/action-mock'

interface Params extends ParsedUrlQuery {
  category: Questions.QuestionCategory
}

const ActionPage: NextPage<Params> = ({ category }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [selectedAction, setSelectedAction] = useState<any>({})

  const completeActions = () => {
    console.log('completed')
  }

  const changeActionRate = (rate: number) => {
    console.log('set rate', rate)
    setOpen(false)
  }

  return (
    <QuestionContainer category={category}>
      <ActionHeader />
      <Box pt={10}>
        {actionData &&
          actionData.map((action) => {
            return (
              <ActionItem
                key={action.id}
                amount={action.amount}
                implementationRate={action.implementationRate}
                action={action.action}
                description={action.description}
                onClick={() => {
                  setSelectedAction(action)
                  setOpen(true)
                }}
              />
            )
          })}
      </Box>
      <Box style={{ padding: '0.5rem 0 4rem 0' }}>
        <DatasourceFooter />
      </Box>
      <ActionCompleteBtn onClick={completeActions} />
      {selectedAction && (
        <ActionChangeRateDialog
          isOpen={open}
          onClose={() => setOpen(false)}
          action={selectedAction}
          onClick={changeActionRate}
        />
      )}
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
