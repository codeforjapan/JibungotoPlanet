import { FC, useMemo } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import CompletionItem from 'components/molecules/completion/CompletionActionItem/CompletionActionItem'
import { useActions } from 'hooks/actions'

type Props = {
  category: Questions.QuestionCategory
}

const CompletionContent: FC<Props> = (props) => {
  const actions = useActions()

  const selectedActions = useMemo(() => {
    let selectedActions: Actions.Action[] = []
    if (actions[props.category]) {
      selectedActions = actions[props.category].filter(
        (action) => action.actionIntensityRate?.value
      )
    }

    return selectedActions
  }, [actions, props.category])

  return (
    <Box>
      <Heading as="h2" fontSize="18px" textAlign="center" my={10}>
        あなたの脱炭素アクション
      </Heading>
      <Box px={{ md: 16 }}>
        {selectedActions.map((action) => {
          return <CompletionItem key={action.id} action={action} />
        })}
      </Box>
    </Box>
  )
}

export default CompletionContent
