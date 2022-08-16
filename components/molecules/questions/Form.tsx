import { FC, useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import { Box, Heading, Text } from '@chakra-ui/react'
import { Controller, useForm } from 'react-hook-form'
import DatasourceFooter from 'components/DatasourceFooter'
import { useProfile } from '../../../hooks/profile'
import { useAnswerController } from '../../../hooks/questions'
import api from '../../../utils/api'
import { toBoolean } from '../../../utils/datatype'
import BasicButton from '../../atoms/buttons/Basic'
import RadioGroups from '../../atoms/inputs/RadioGroup'
import SelectBox from '../../atoms/inputs/Select'
import TextField from '../../atoms/inputs/TextField'
import QuestionHeader from './QuestionHeader'

type Props = {
  questionPage: Questions.Page
}

interface SendParams extends Profile.Profile {
  estimate: boolean
}

const QuestionForm: FC<Props> = ({ questionPage }) => {
  const { profile, setProfile, userInfoDone } = useProfile()

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

  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm({ defaultValues: defautValues })

  const submit = async (data: any) => {
    setNewAnswer(data)

    await sendData(data)
    let nextPageUid = nextQuestionUid(data)

    if (questionPage.isLast || nextPageUid === 'result') {
      if (!userInfoDone) {
        router.push(`/userinfo?category=${questionPage.category}`)
        return
      }
      router.push(`/category/${questionPage.category}/result`)
    } else {
      router.push(`/category/${questionPage.category}/questions/${nextPageUid}`)
    }
  }

  const sendDataParamsKey = useMemo(() => {
    switch (questionPage.category) {
      case 'mobility':
        return 'mobilityAnswer'
      case 'housing':
        return 'housingAnswer'
      case 'food':
        return 'foodAnswer'
      case 'other':
        return 'otherAnswer'
      default:
        return ''
    }
  }, [questionPage.category])

  const sendData = useCallback(
    async (data: any) => {
      let nextPageUid = nextQuestionUid(data)
      if (!profile) return
      const params: SendParams = {
        ...profile,
        [sendDataParamsKey]: data,
        estimate: questionPage.isLast || nextPageUid === 'result' ? true : false
      }
      try {
        const { data } = await api.put(`/profiles/${profile?.id}`, params)
        setProfile(data)
      } catch (error) {
        console.log(error)
      }
    },
    [profile, questionPage]
  )

  const nextQuestionUid = (data: { [key: string]: string | number }) => {
    let questionValue = toBoolean(data[questionKeys[0]])
    const answeredNextPageUid = questionPage.questions[0].options?.find(
      (qo) => qo.value === questionValue
    )
    const uid =
      answeredNextPageUid?.nextPageUid || questionPage.defaultNextPageUid
    return uid
  }

  const skipQuestion = async () => {
    const nextPageUid = questionPage.skipToPageUid
    if (nextPageUid === 'result') {
      const { data } = await api.get(`/profiles/${profile?.id}`)
      setProfile(data)
      if (!userInfoDone) {
        router.push(`/userinfo?category=${questionPage.category}`)
        return
      }
      router.push(`/category/${questionPage.category}/result`)
    } else if (nextPageUid) {
      router.push(`/category/${questionPage.category}/questions/${nextPageUid}`)
    }
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
        return (
          <SelectBox
            onChange={onChange}
            options={selectOptions}
            disabled={isSubmitting}
          />
        )
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
            disabled={isSubmitting}
          />
        )
      case 'text':
        return (
          <Box mb={7}>
            <TextField
              onChange={onChange}
              value={value}
              type="text"
              unitText={question.unitText}
              disabled={isSubmitting}
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
              unitText={question.unitText}
            />
          </Box>
        )
      default:
        return <></>
    }
  }

  return (
    <Box pb="100px">
      <QuestionHeader questionPage={questionPage} />
      <Box fontSize="24px" textAlign="center" mb={5}>
        <Heading as="h1" fontSize={{ base: '24px' }}>
          {questionPage.title}
        </Heading>
        {questionPage.supplement && (
          <Text fontSize="14px" mt={2} textAlign="center" fontWeight="normal">
            {questionPage.supplement}
          </Text>
        )}
      </Box>
      <form onSubmit={handleSubmit(submit)}>
        <Box pb="5">
          {questionPage.questions.map((question) => (
            <Box key={question.key} mb={5}>
              {question.description && (
                <Heading as="h2" fontSize="18px" mb={2}>
                  {question.description}
                </Heading>
              )}
              {question.subDescription && (
                <Text fontSize="14px" mb={2}>
                  {question.subDescription}
                </Text>
              )}
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
        </Box>

        <Box
          width="90%"
          maxWidth="100%"
          textAlign="center"
          position="absolute"
          bottom={5}
          left="50%"
          transform="translateX(-50%)"
        >
          <BasicButton
            type="submit"
            theme="brandPrimary"
            isNext
            width="90%"
            margin="0 auto 20px"
            isLoading={isSubmitting}
          >
            次の質問へ
          </BasicButton>

          {questionPage.skipToPageUid && (
            <Text
              fontSize={{ base: '18px' }}
              fontWeight="bold"
              textAlign="center"
              textDecoration="underline"
              mb="20px"
              cursor="pointer"
              onClick={() => skipQuestion()}
            >
              分からないのでスキップする
            </Text>
          )}

          <DatasourceFooter />
        </Box>
      </form>
    </Box>
  )
}

export default QuestionForm
