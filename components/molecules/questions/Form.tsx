import { FC, useMemo } from 'react'
import { Box, Container, Heading } from '@chakra-ui/react'
import { Controller, useForm } from 'react-hook-form'
import BasicButton from '../../atoms/buttons/Basic'
import RadioGroups from '../../atoms/inputs/RadioGroup'
import SelectBox from '../../atoms/inputs/Select'
import QuestionHeader from './QuestionHeader'
import { useRouter } from 'next/router'
import TextField from '../../atoms/inputs/TextField'
import { toBoolean } from '../../../utils/datatype'
import { useAnswerController } from '../../../hooks/questions'

type Props = {
  questionPage: Questions.Page
}

const QuestionForm: FC<Props> = ({ questionPage }) => {
  const router = useRouter()
  const { setNewAnswer, answers } = useAnswerController({
    category: questionPage.category
  })

  const defautValues: { [key: string]: string | number | undefined } = {}
  for (const question of questionPage.questions) {
    defautValues[question.key] = ''
  }

  const questionKeys = useMemo(() => {
    return questionPage.questions.map((q) => q.key)
  }, [questionPage])

  const { control, handleSubmit } = useForm({ defaultValues: defautValues })

  const submit = async (data: any) => {
    setNewAnswer(data)

    if (questionPage.isLast) {
      await sendData()
    } else {
      let nextPageUid = nextQuestionUid(data)
      router.push(`/questions/${questionPage.category}/${nextPageUid}`)
    }
  }

  const sendData = async () => {
    console.log(answers)
  }

  const nextQuestionUid = (data: { [key: string]: string | number }) => {
    let questionValue = toBoolean(data[questionKeys[0]])
    console.log(questionValue, questionKeys)
    const answeredNextPageUid = questionPage.questions[0].options?.find(
      (qo) => qo.value === questionValue
    )
    console.log(answeredNextPageUid)
    const uid =
      answeredNextPageUid?.nextPageUid || questionPage.defaultNextPageUid
    return uid
  }

  const QuestionInput: FC<{
    question: Questions.Question
    onChange: () => void
    value: string | number | undefined
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
            const val =
              typeof option.value === 'number'
                ? option.value
                : String(option.value)
            return {
              value: val,
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
          <Box mb={7}>
            <TextField
              onChange={onChange}
              value={value}
              type="text"
              description={question.description}
              unitText={question.unitText}
            />
          </Box>
        )
      case 'numeric':
        return (
          <Box mb={7}>
            <TextField
              onChange={onChange}
              value={value}
              type="numeric"
              description={question.description}
              unitText={question.unitText}
            />
          </Box>
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
        height={{ base: `calc(100vh - 140px)` }}
        width="90%"
        bottom="0"
        borderRadius="10px 10px 0 0"
        overflow="auto"
        pb="100px"
      >
        <QuestionHeader
          numerator={1}
          denominator={2}
          questionPage={questionPage}
        />
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

          <Container
            textAlign="center"
            position="fixed"
            bottom={10}
            left="50%"
            transform="translateX(-50%)"
          >
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
