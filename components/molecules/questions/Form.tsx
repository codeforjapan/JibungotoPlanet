import { FC } from 'react'
import { Box, Container } from '@chakra-ui/react'
import { Controller, useForm } from 'react-hook-form'
import BasicButton from '../../atoms/buttons/Basic'
import RadioGroups from '../../atoms/inputs/RadioGroup'
import SelectBox from '../../atoms/inputs/Select'
import TextField from '../../atoms/inputs/TextField'

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
    value: any
  }> = ({ question, onChange, value }) => {
    switch (question.answerType) {
      case 'select':
        const selectOptions =
          question.options?.map((option) => {
            const val =
              typeof option.value === 'number'
                ? option.value
                : String(option.value)
            return { value: val, label: option.label }
          }) || []
        return <SelectBox onChange={onChange} options={selectOptions} />
      case 'radio':
        const radioOptions =
          question.options?.map((option) => {
            return {
              value: String(option.value),
              label: option.label,
              subLabel: option.subLabel
            }
          }) || []
        return (
          <RadioGroups
            onChange={onChange}
            options={radioOptions}
            value={value}
          />
        )
      case 'text':
        return (
          <TextField
            onChange={onChange}
            value={value}
            type="text"
            description={question.description}
            unitText={question.unitText}
          />
        )
      case 'numeric':
        return (
          <TextField
            onChange={onChange}
            value={value}
            type="numeric"
            description={question.description}
            unitText={question.unitText}
          />
        )
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
        width="90%"
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
                  <QuestionInput
                    question={question}
                    onChange={onChange}
                    value={value}
                  />
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
