import { ParsedUrlQuery } from 'querystring'
import { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { Box } from '@chakra-ui/react'
import DatasourceFooter from 'components/DatasourceFooter'
import ActionCompleteBtn from 'components/molecules/actions/ActionCompleteBtn/ActionCompleteBtn'
import ActionHeader from 'components/molecules/actions/ActionHeader/ActionHeader'
import ActionChangeRateDialog from 'components/organisms/actions/ActionChangeRateDialog/ActionChangeRateDialog'
import ActionItem from 'components/organisms/actions/ActionItem/ActionItem'
import QuestionContainer from 'components/organisms/questions/Container'
import { useActions } from 'hooks/actions'

interface Params extends ParsedUrlQuery {
  category: Actions.ActionCategory
}

const ActionPage: NextPage<Params> = ({ category }) => {
  const router = useRouter()
  const actions = useActions()
  const [open, setOpen] = useState<boolean>(false)
  const [categorizeActions, setCategorizeActions] = useState<Actions.Action[]>(
    []
  )
  const [selectedAction, setSelectedAction] = useState<Actions.Action | null>(
    null
  )
  const [selectedActions, setSelectedActions] = useState<Actions.Action[]>([])

  useEffect(() => {
    if (actions) {
      setCategorizeActions(actions[category])
    }
  }, [actions])

  const completeActions = () => {
    // todo: selectedActionsをpostする
    console.log('completed')
    router.push(`/category/${category}/completion`)
  }

  const changeActionRate = (id: number, rate: number) => {
    const newCategorizeActions = categorizeActions.map((action) => {
      if (action.id === id) {
        action.actionIntensityRate = rate
      }

      return action
    })
    const newSelectedActions = selectedActions.map((action) => {
      if (action.id === id) {
        action.actionIntensityRate = rate
      }

      return action
    })

    setCategorizeActions([...newCategorizeActions])
    setSelectedActions([...newSelectedActions])
    setOpen(false)
  }

  const handleSelectedActions = (id: number, checked: boolean) => {
    let newSelectedActions: Actions.Action[]

    if (checked) {
      newSelectedActions = categorizeActions
        .filter((action) => action.id === id)
        .concat(selectedActions)
    } else {
      newSelectedActions = selectedActions.filter((action) => action.id !== id)
    }

    setSelectedActions([...newSelectedActions])
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
                action={action}
                onCheck={handleSelectedActions}
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
      <ActionCompleteBtn
        onClick={completeActions}
        disabled={!selectedActions.length}
      />
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
