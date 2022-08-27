import { FC } from 'react'
import { Box, Heading, Spinner } from '@chakra-ui/react'
import CompletionItem from 'components/molecules/completion/CompletionActionItem/CompletionActionItem'
import { useActions } from 'hooks/actions'

type Props = {
  shareId?: string
}

const categories: Questions.QuestionCategory[] = [
  'housing',
  'food',
  'mobility',
  'other'
]

const getCategoryTitle = (category: Questions.QuestionCategory) => {
  switch (category) {
    case 'mobility':
      return '移動について'
    case 'food':
      return '食について'
    case 'housing':
      return '住居について'
    case 'other':
      return 'モノとサービスについて'
    default:
      return ''
  }
}

const ActionsContent: FC<Props> = (props) => {
  const actions = useActions(props.shareId)

  const getSelectedActions = (category: Questions.QuestionCategory) => {
    let selectedActions: Actions.Action[] = []
    if (actions[category]) {
      selectedActions = actions[category].filter(
        (action) => action.actionIntensityRate?.value
      )
    }

    return selectedActions
  }

  if (actions.loading) {
    return (
      <Box
        py={10}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Spinner />
      </Box>
    )
  }

  return (
    <Box pt={3} pb={6}>
      {categories.map((category, index) => {
        const selectedActions = getSelectedActions(category)
        return (
          <Box key={index} py={1}>
            <Heading as="h3" fontSize="18px" mt={2} mb={4}>
              {getCategoryTitle(category)}
            </Heading>
            <Box px={{ md: 16 }}>
              {selectedActions.length ? (
                selectedActions.map((action) => {
                  return (
                    <CompletionItem
                      key={action.id}
                      action={action}
                      category={category}
                    />
                  )
                })
              ) : (
                <Box fontSize="14px" textAlign="center">
                  脱炭素アクションがまだ選択されていません。
                </Box>
              )}
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}

export default ActionsContent
