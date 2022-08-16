import { ParsedUrlQuery } from 'querystring'
import { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import DatasourceFooter from 'components/DatasourceFooter'
import ActionCompleteBtn from 'components/molecules/actions/ActionCompleteBtn/ActionCompleteBtn'
import ActionHeader from 'components/molecules/actions/ActionHeader/ActionHeader'
import ActionChangeRateDialog from 'components/organisms/actions/ActionChangeRateDialog/ActionChangeRateDialog'
import ActionItem from 'components/organisms/actions/ActionItem/ActionItem'
import QuestionContainer from 'components/organisms/questions/Container'
import { useActions } from 'hooks/actions'

interface Params extends ParsedUrlQuery {
  category: Questions.QuestionCategory
}

const ActionPage: NextPage<Params> = ({ category }) => {
  const actions = useActions()
  const [open, setOpen] = useState<boolean>(false)
  const [categorizeActions, setCategorizeActions] = useState([])
  const [selectedAction, setSelectedAction] = useState<Actions.Action | null>(
    null
  )

  useEffect(() => {
    if (actions) {
      setCategorizeActions(actions[category])
    }
  }, [actions])

  const completeActions = () => {
    console.log('completed')
  }

  const changeActionRate = (id: number, rate: number) => {
    const newCategorizeActions = categorizeActions.map((action) => {
      if (action.id === id) {
        action.actionIntensityRate = rate
      }

      return action
    })
    setCategorizeActions([...newCategorizeActions])
    setOpen(false)
  }

  return (
    <QuestionContainer category={category}>
      <ActionHeader />
      <Box pt={10}>
        {categorizeActions &&
          categorizeActions.map((action) => {
            return (
              <ActionItem
                key={action.id}
                actionIntensityRate={action.actionIntensityRate}
                reductionEffect={action.reductionEffect}
                label={action.label}
                description={action.description}
                btnDisabled={!action.rangeActionIntensityRate}
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
