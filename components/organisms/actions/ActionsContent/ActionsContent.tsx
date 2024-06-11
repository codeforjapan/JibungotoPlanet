import { FC, useMemo } from 'react'
import { router } from 'next/client'
import { Box, Heading, Spinner } from '@chakra-ui/react'
import BasicButton from 'components/atoms/buttons/Basic'
import CompletionItem from 'components/molecules/completion/CompletionActionItem/CompletionActionItem'
import { useActions } from 'hooks/actions'
import { useEmissionResult } from '../../../../hooks/emission'

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
  const emission = useEmissionResult('all')

  const mobility = useMemo(() => {
    return emission.mobility.find((f) => f.key === 'total')?.value
  }, [emission])

  const food = useMemo(() => {
    return emission.food.find((f) => f.key === 'total')?.value
  }, [emission])

  const housing = useMemo(() => {
    return emission.housing.find((f) => f.key === 'total')?.value
  }, [emission])

  const other = useMemo(() => {
    return emission.other.find((f) => f.key === 'total')?.value
  }, [emission])

  const getSelectedActions = (category: Questions.QuestionCategory) => {
    let selectedActions: Actions.Action[] = []
    if (actions[category]) {
      selectedActions = actions[category].filter(
        (action) => action.actionIntensityRate?.value
      )
    }

    return selectedActions
  }

  const allEmpty = categories.every(
    (category) => getSelectedActions(category).length === 0
  )

  const emissionValues = { mobility, food, housing, other }

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
    <>
      <Box pt={3} pb={6}>
        <Box
          fontWeight="bold"
          textAlign="center"
          textColor="red"
          fontSize={16}
          mt={4}
          mb={4}
        >
          この画面をよくご覧になってください。
          <br />
          アプリの利用を終えるには、
          <br />
          「社会に働きかけるには」を選択して次に進んでください。
        </Box>
        {categories.map((category, index) => {
          const selectedActions = getSelectedActions(category)
          const hasData = !!emissionValues[category]

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
                  <>
                    <Box fontSize="14px" textAlign="center">
                      脱炭素アクションがまだ選択されていません。
                    </Box>
                    {hasData && (
                      <BasicButton
                        width="full"
                        isNext
                        onClick={() =>
                          router.push(`/category/${category}/action`)
                        }
                      >
                        脱炭素アクションを選ぶ
                      </BasicButton>
                    )}
                  </>
                )}
              </Box>
            </Box>
          )
        })}
      </Box>
      {!allEmpty && (
        <BasicButton
          isNext
          onClick={() => router.push('/society')}
          width="full"
          mt={4}
          variant="outline"
          color="brandPrimary.400"
          border="2px solid #009ACE!important"
        >
          社会に働きかけるには
        </BasicButton>
      )}
    </>
  )
}

export default ActionsContent
