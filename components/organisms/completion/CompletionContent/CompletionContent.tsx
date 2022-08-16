import { FC } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import CompletionItem from 'components/molecules/completion/CompletionActionItem/CompletionActionItem'
import { actionData } from 'constants/action-mock'

type Props = {
  category: Questions.QuestionCategory
}

const CompletionContent: FC<Props> = (props) => {
  return (
    <Box>
      <Heading as="h2" fontSize="18px" textAlign="center" my={10}>
        あなたの脱炭素アクション
      </Heading>
      <Box px={{ md: 16 }}>
        {actionData.map((action) => {
          return (
            <CompletionItem
              key={action.id}
              amount={action.amount}
              implementationRate={action.implementationRate}
              action={action.action}
              description={action.description}
            />
          )
        })}
      </Box>
    </Box>
  )
}

export default CompletionContent
