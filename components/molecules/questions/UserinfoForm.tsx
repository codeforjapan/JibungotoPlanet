import { FC, useCallback } from 'react'
import { useRouter } from 'next/router'
import { Box, Heading } from '@chakra-ui/react'
import { Controller, useForm } from 'react-hook-form'
import BasicButton from 'components/atoms/buttons/Basic'
import SelectBox from 'components/atoms/inputs/Select'
import DatasourceFooter from 'components/DatasourceFooter'
import { USERINFO_SKIP } from 'constants/localstorageKeys'
import { useProfile } from 'hooks/profile'
import api from 'utils/api'

type FormData = {
  gender: string
  age: string
  region: string
}

const UserinfoForm: FC = () => {
  const router = useRouter()
  const { category } = router.query

  const { profile, setProfile } = useProfile()

  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<FormData>({
    defaultValues: { gender: '', age: '', region: '' }
  })

  const submit = useCallback(
    async (formData: FormData) => {
      if (!profile) return
      try {
        const { data } = await api.put(`/profiles/${profile?.id}`, {
          ...profile,
          ...formData,
          estimate: true
        })
        setProfile(data)
        router.push(`/category/${category}/result`)
      } catch (error) {
        console.log(error)
      }
    },
    [category, profile]
  )

  const skip = useCallback(() => {
    localStorage.setItem(USERINFO_SKIP, 'true')
    router.push(`/category/${category}/result`)
  }, [category])

  return (
    <Box pt={5}>
      <form onSubmit={handleSubmit(submit)}>
        <Heading as="h2" fontSize="18px" mb={2}>
          性別
        </Heading>

        <Box mb={7}>
          <Controller
            control={control}
            name="gender"
            render={({ field: { value, onChange } }) => (
              <SelectBox
                onChange={onChange}
                options={[
                  { value: 'male', label: '男性' },
                  { value: 'female', label: '女性' },
                  { value: 'unknown', label: '無回答' }
                ]}
              />
            )}
          />
        </Box>

        <Heading as="h2" fontSize="18px" mb={2}>
          年齢
        </Heading>
        <Box mb={7}>
          <Controller
            control={control}
            name="age"
            render={({ field: { value, onChange } }) => (
              <SelectBox
                onChange={onChange}
                options={[
                  { value: '10s', label: '10代' },
                  { value: '20s', label: '20代' },
                  { value: '30s', label: '30代' },
                  { value: '40s', label: '40代' },
                  { value: '50s', label: '50代' },
                  { value: '60s', label: '60代' },
                  { value: '70s-', label: '70代以上' }
                ]}
              />
            )}
          />
        </Box>

        <Heading as="h2" fontSize="18px" mb={2}>
          お住まいの地域
        </Heading>
        <Box mb={7}>
          <Controller
            control={control}
            name="region"
            render={({ field: { value, onChange } }) => (
              <SelectBox
                onChange={onChange}
                options={[
                  { value: 'hokkaido', label: '北海道地方' },
                  { value: 'tohoku', label: '東北地方' },
                  { value: 'kanto', label: '関東地方' },
                  { value: 'tokai', label: '東海地方' },
                  { value: 'kinki', label: '近畿地方' },
                  { value: 'chugoku', label: '中国地方' },
                  { value: 'sikoku', label: '四国地方' },
                  { value: 'kyusyu', label: '九州地方' },
                  { value: 'okinawa', label: '沖縄地方' }
                ]}
              />
            )}
          />
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
          <Box
            as="p"
            mb="6"
            textDecoration="underline"
            fontWeight="bold"
            onClick={skip}
          >
            スキップする
          </Box>
          <BasicButton
            type="submit"
            theme="brandPrimary"
            isNext
            width="90%"
            margin="0 auto 20px"
            isLoading={isSubmitting}
          >
            次へ進む
          </BasicButton>

          <DatasourceFooter />
        </Box>
      </form>
    </Box>
  )
}

export default UserinfoForm
