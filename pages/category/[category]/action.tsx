import { ParsedUrlQuery } from 'querystring'
import { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Box, Divider, Spinner } from '@chakra-ui/react'
import DatasourceFooter from 'components/DatasourceFooter'
import ActionCompleteBtn from 'components/molecules/action/ActionCompleteBtn/ActionCompleteBtn'
import ActionHeader from 'components/molecules/action/ActionHeader/ActionHeader'
import ActionItem from 'components/organisms/action/ActionItem/ActionItem'
import QuestionContainer from 'components/organisms/questions/Container'
import { useActions } from 'hooks/actions'
import { useProfile } from 'hooks/profile'
import api from 'utils/api'

interface Params extends ParsedUrlQuery {
  category: Actions.ActionCategory
}

const ActionPage: NextPage<Params> = ({ category }) => {
  const { profile, setProfile } = useProfile()
  const router = useRouter()
  const actions = useActions()
  const [loading, setLoading] = useState<boolean>(false)
  const [categorizeActions, setCategorizeActions] = useState<Actions.Action[]>(
    []
  )

  useEffect(() => {
    if (actions) {
      setCategorizeActions(actions[category])
    }
  }, [actions, category])

  const completeActions = async () => {
    await setLoading(true)
    const actionIntensityRates = categorizeActions.map(
      (action) => action.actionIntensityRate
    )
    if (profile || !actionIntensityRates.includes(null)) {
      const newProfile = Object.assign({}, profile)
      // @ts-ignore
      newProfile.actionIntensityRates = actionIntensityRates

      try {
        const { data } = await api.put(`/profiles/${profile?.id}`, {
          ...profile,
          ...newProfile,
          estimate: true
        })

        setProfile(data)
        router.push(`/category/${category}/completion`)
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }
  }

  const changeActionRate = (id: number, rate: number) => {
    const newCategorizeActions = categorizeActions.map((action) => {
      if (action.id === id) {
        // @ts-ignore
        action.actionIntensityRate.value = rate
      }
      return action
    })

    setCategorizeActions([...newCategorizeActions])
  }

  const handleCheckedActions = (id: number, checked: boolean) => {
    const newCategorizeActions = categorizeActions.map((action) => {
      if (action.id === id) {
        action.checked = checked
        if (checked) {
          // @ts-ignore
          action.actionIntensityRate.value =
            // @ts-ignore
            action.actionIntensityRate.defaultValue
        } else {
          // @ts-ignore
          action.actionIntensityRate.value = 0
        }
      }
      return action
    })
    setCategorizeActions([...newCategorizeActions])
  }

  return (
    <QuestionContainer category={category}>
      <Box padding="40px 12px 0 12px">
        <ActionHeader actions={categorizeActions} category={category} />
        <Box fontWeight="bold" textAlign="center" textColor="red" fontSize={16} mt={4} mb={4}>
          あなたの暮らしや考え方にあった、
          <br />
          脱炭素アクションを1つ以上、いくつでも選んでください。
        </Box>
        {loading ? (
          <Box
            py={10}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Spinner />
          </Box>
        ) : (
          <Box pt={10}>
            {categorizeActions && categorizeActions.length ? (
              categorizeActions.map((action, index) => {
                return (
                  <Box as="div" key={action.id}>
                    {index > 0 && <Divider margin="16px 0" />}
                    <ActionItem
                      action={action}
                      category={category}
                      onCheck={handleCheckedActions}
                      onChangeActionRate={changeActionRate}
                    />
                  </Box>
                )
              })
            ) : (
              <Box textAlign="center">
                <Box as={'h4'}>選択できるアクションが存在しません。</Box>
                <Box py={4}>
                  <Link href={'/top'}>
                    <h4
                      style={{
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                      }}
                    >
                      質問カテゴリーへ戻る
                    </h4>
                  </Link>
                </Box>
              </Box>
            )}
          </Box>
        )}
        <Box style={{ padding: '0.5rem 0 4rem 0' }}>
          <DatasourceFooter />
        </Box>
        <ActionCompleteBtn
          onClick={completeActions}
          disabled={
            !categorizeActions.find((action) => action.checked) || loading
          }
        />
      </Box>
    </QuestionContainer>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  //ToDo add house, food and comsumption, then concat them

  const allPaths = [
    { params: { category: 'mobility' } },
    { params: { category: 'housing' } },
    { params: { category: 'food' } },
    { params: { category: 'other' } }
  ]

  return {
    paths: allPaths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Params, Params> = ({ params }) => {
  return {
    props: {
      category: params?.category || 'mobility'
    }
  }
}

export default ActionPage
