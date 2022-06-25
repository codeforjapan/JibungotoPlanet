import { Box, Container } from '@chakra-ui/react'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import BasicButton from '../../atoms/buttons/Basic'
import SelectBox from '../../atoms/inputs/Select'

type Props = {
  questionPage: Questions.Page
}

const QuestionForm: FC<Props> = ({ questionPage }) => {
  const defautValues: { [key: string]: string | number | boolean | null } = {}
  for (const question of questionPage.questions) {
    defautValues[question.key] = ''
  }

  const { control, handleSubmit } = useForm({ defaultValues: defautValues })

  const submit = (data: any) => {
    console.log(data)
  }

  const QuestionInput: FC<{
    question: Questions.Question
    onChange: () => void
  }> = ({ question, onChange }) => {
    switch (question.answerType) {
      case 'select':
        const options =
          question.options?.map((option) => {
            const val =
              typeof option.value === 'number'
                ? option.value
                : String(option.value)
            return { value: val, label: option.label }
          }) || []
        return <SelectBox onChange={onChange} options={options} />

      default:
        return <></>
    }
  }

  return (
    <Box display="flex" justifyContent="center">
      <Container
        background="white"
        position="fixed"
        height="80vh"
        bottom="0"
        borderRadius="10px 10px 0 0"
      >
        <form onSubmit={handleSubmit(submit)}>
          {questionPage.questions.map((question) => (
            <Box key={question.key}>
              <Controller
                control={control}
                name={question.key}
                render={({ field: { value, onChange } }) => (
                  <QuestionInput question={question} onChange={onChange} />
                )}
              />
            </Box>
          ))}

          <Box textAlign="center">
            <BasicButton type="submit" isNext width={200}>
              送信
            </BasicButton>
          </Box>
        </form>
      </Container>
    </Box>
  )
}

export default QuestionForm
