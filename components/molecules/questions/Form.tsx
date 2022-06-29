import { FC } from 'react'
import { Box, Container, Heading } from '@chakra-ui/react'
import { Controller, useForm } from 'react-hook-form'
import BasicButton from '../../atoms/buttons/Basic'
import RadioGroups from '../../atoms/inputs/RadioGroup'
import SelectBox from '../../atoms/inputs/Select'
import QuestionHeader from './QuestionHeader'
import { useRouter } from 'next/router'

type Props = {
  questionPage: Questions.Page
}

const QuestionForm: FC<Props> = ({ questionPage }) => {
  const defautValues: { [key: string]: string | number | boolean | null } = {}
  const router = useRouter()

  for (const question of questionPage.questions) {
    defautValues[question.key] = ''
  }

  const { control, handleSubmit } = useForm({ defaultValues: defautValues })

  const submit = (data: any) => {
    let nextPageUid = questionPage.defaultNextPageUid
    console.log(data)
    router.push(`/questions/${questionPage.category}/${nextPageUid}`)
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
        <QuestionHeader numerator={1} denominator={2} />
        <Heading as="h1" fontSize="24px" textAlign="center" mb={5}>
          {questionPage.title}
        </Heading>
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

          <Container textAlign="center" position="fixed" bottom={10} left={0}>
            <BasicButton
              type="submit"
              theme="brandPrimary"
              isNext
              width="90%"
              margin="0 auto"
            >
              次の質問へ
            </BasicButton>
          </Container>
        </form>
      </Container>
    </Box>
  )
}

export default QuestionForm
