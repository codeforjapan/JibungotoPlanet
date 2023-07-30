import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0/client'
import { Box, Heading, Text } from '@chakra-ui/react'
import { Controller, FieldErrors, useForm } from 'react-hook-form'
import DatasourceFooter from 'components/DatasourceFooter'
import { API } from 'constants/api'
import { useProfile } from 'hooks/profile'
import { useAnswerController } from 'hooks/questions'
import { toBoolean } from 'utils/datatype'
import { setDynamicUrl } from 'utils/setUrl'
import api from '../../../utils/api'
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
  const { user } = useUser()
  const { profile, setProfile, userInfoDone } = useProfile()
  const [isTransitioning, setIsTransitioning] = useState(false)

  const router = useRouter()
  const { setNewAnswer } = useAnswerController({
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
    try {
      if (questionPage.beforeSubmitProcess) {
        data = questionPage.beforeSubmitProcess(data)
      }

      await sendData(data)
      let nextPageUid = nextQuestionUid(data)

      setIsTransitioning(true)
      if (questionPage.isLast || nextPageUid === 'result') {
        if (!userInfoDone) {
          router.push(`/userinfo?category=${questionPage.category}`)
          return
        }
        router.push(`/category/${questionPage.category}/result`)
      } else {
        router.push(
          `/category/${questionPage.category}/questions/${nextPageUid}`
        )
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setIsTransitioning(false)
  }, [router.asPath])

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
      console.log(profile, 'profile')
      if (!profile) return
      const params: SendParams = {
        ...profile,
        [sendDataParamsKey]: data,
        estimate: questionPage.isLast || nextPageUid === 'result' ? true : false
      }
      try {
        let data: Profile.Profile | null = null
        if (user?.sub) {
          const authUrl = setDynamicUrl(API.PROFILE.AUTH_PUT, { id: user.sub })
          const res = await api.put(authUrl, params)
          console.log(res, 'res')
          data = res.data
        } else {
          const url = setDynamicUrl(API.PROFILE.PUT, { id: profile.id })
          const res = await api.put(url, params)
          console.log(res, 'res2')
          data = res.data
        }
        setProfile(data)
      } catch (error) {
        console.log(error)
      }
    },
    [profile, questionPage, user]
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
    errors: FieldErrors<{
      [key: string]: string | number | undefined
    }>
  }> = ({ question, onChange, value, errors }) => {
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
          <>
            <SelectBox
              onChange={onChange}
              options={selectOptions}
              disabled={isSubmitting}
              returnValueType={question.returnValueType}
            />
            <Text mt={1} fontSize="11px" color="red.300">
              {errors[question.key]?.message}
            </Text>
          </>
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
          <>
            <RadioGroups
              onChange={onChange}
              options={radioOptions}
              value={value}
              disabled={isSubmitting}
            />
            <Text mt={1} fontSize="11px" color="red.300">
              {errors[question.key]?.message}
            </Text>
          </>
        )
      default:
        return (
          <Box mb={7}>
            <>
              <TextField
                onChange={onChange}
                value={value}
                type={question.answerType}
                unitText={question.unitText}
                disabled={isSubmitting}
              />
              <Text mt={1} fontSize="11px" color="red.300">
                {errors[question.key]?.message}
              </Text>
            </>
          </Box>
        )
    }
  }

  const validateFormInput = (v: any) => {
    if (v === '' || v === undefined || v === null) {
      return 'すべての項目が入力必須です。'
    } else {
      return true
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
        <Box pb="30px">
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
                rules={{
                  validate: (v) => validateFormInput(v)
                }}
                render={({
                  field: { value, onChange },
                  formState: { errors }
                }) => (
                  <QuestionInput
                    question={question}
                    onChange={onChange}
                    errors={errors}
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
          {questionPage.skipToPageUid && (
            <Text
              fontSize={{ base: '18px' }}
              fontWeight="bold"
              textAlign="center"
              textDecoration="underline"
              mb="30px"
              cursor="pointer"
              onClick={() => skipQuestion()}
            >
              分からないのでスキップする
            </Text>
          )}
          <BasicButton
            type="submit"
            theme="brandPrimary"
            isNext
            width="90%"
            margin="0 auto 20px"
            isLoading={isSubmitting || isTransitioning}
          >
            次へ進む
          </BasicButton>

          <DatasourceFooter />
        </Box>
      </form>
    </Box>
  )
}

export default QuestionForm
