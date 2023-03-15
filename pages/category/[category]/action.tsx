import { ParsedUrlQuery } from 'querystring'
import { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0/client'
import { Box, Spinner } from '@chakra-ui/react'
import DatasourceFooter from 'components/DatasourceFooter'
import ActionCompleteBtn from 'components/molecules/action/ActionCompleteBtn/ActionCompleteBtn'
import ActionHeader from 'components/molecules/action/ActionHeader/ActionHeader'
import ActionChangeRateDialog from 'components/organisms/action/ActionChangeRateDialog/ActionChangeRateDialog'
import ActionItem from 'components/organisms/action/ActionItem/ActionItem'
import QuestionContainer from 'components/organisms/questions/Container'
import { API } from 'constants/api'
import { useActions } from 'hooks/actions'
import { useProfile } from 'hooks/profile'
import api from 'utils/api'
import { setDynamicUrl } from 'utils/setUrl'

interface Params extends ParsedUrlQuery {
  category: Actions.ActionCategory
}

const ActionPage: NextPage<Params> = ({ category }) => {
  const { user } = useUser()
  const { profile, setProfile } = useProfile()
  const router = useRouter()
  const actions = useActions()
  const [open, setOpen] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [categorizeActions, setCategorizeActions] = useState<Actions.Action[]>(
    []
  )
  const [selectedAction, setSelectedAction] = useState<Actions.Action | null>(
    null
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
        const params = {
          ...profile,
          ...newProfile,
          estimate: true
        }
        let data = []
        if (user?.sub) {
          const authUrl = setDynamicUrl(API.PROFILE.AUTH_PUT, { id: user.sub })
          data = await api.put(authUrl, params)
        } else {
          const url = setDynamicUrl(API.PROFILE.PUT, { id: profile?.id || '' })
          data = await api.put(url, params)
        }

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
    setOpen(false)
  }

  const handleCheckedActions = (id: number, checked: boolean) => {
    const newCategorizeActions = categorizeActions.map(
      (action: Actions.Action) => {
        if (action.id === id) {
          action.checked = checked
          if (checked) {
            // @ts-ignore
            action.actionIntensityRate.value =
              action.actionIntensityRate?.defaultValue
          } else {
            // @ts-ignore
            action.actionIntensityRate.value = 0
          }
        }
        return action
      }
    )
    setCategorizeActions([...newCategorizeActions])
  }

  return (
    <QuestionContainer category={category}>
      <ActionHeader />
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
            categorizeActions.map((action) => {
              return (
                <ActionItem
                  key={action.id}
                  action={action}
                  onClick={() => {
                    setSelectedAction(action)
                    setOpen(true)
                  }}
                  onCheck={handleCheckedActions}
                />
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
      {selectedAction && selectedAction.actionIntensityRate?.defaultValue && (
        <ActionChangeRateDialog
          isOpen={open}
          onClose={() => setOpen(false)}
          actionId={selectedAction.id}
          actionIntensityRate={
            selectedAction.actionIntensityRate?.value ||
            selectedAction.actionIntensityRate.defaultValue
          }
          onClick={changeActionRate}
        />
      )}
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
