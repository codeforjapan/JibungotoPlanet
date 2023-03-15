import { useEffect, useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'
import { useRecoilState } from 'recoil'
import { API } from 'constants/api'
import { PROFILE_ID, USERINFO_SKIP } from 'constants/localstorageKeys'
import { profileAtom, sharedProfileAtom } from 'store/profile'
import { setDynamicUrl } from 'utils/setUrl'
import api from '../utils/api'

export const useProfile = () => {
  const { user } = useUser()
  const [profile, setProfile] = useRecoilState(profileAtom)
  const [userInfoDone, setUserInfoDone] = useState(false)

  useEffect(() => {
    const fetchProfile = async () => {
      if (profile) return
      try {
        const profileId = localStorage.getItem(PROFILE_ID)
        if (!profileId || profileId === 'undefined') {
          let data: Profile.Profile | null = null
          if (user?.sub) {
            const res = await api.post(API.PROFILE.AUTH_INDEX, {
              estimate: true,
              user_id: user?.sub
            })
            data = res.data
          } else {
            const res = await api.post(API.PROFILE.INDEX, {
              estimate: true
            })
            data = res.data
          }
          setProfile(data)
          if (data?.id) {
            localStorage.setItem(PROFILE_ID, data.id)
          }
        } else {
          let data: Profile.Profile | null = null
          if (user?.sub) {
            const authShowUrl = setDynamicUrl(API.PROFILE.AUTH_SHOW, {
              id: user.sub
            })
            const res = await api.get(authShowUrl)
            data = res.data
          } else {
            const showUrl = setDynamicUrl(API.PROFILE.SHOW, { id: profileId })
            const res = await api.get(showUrl)
            data = res.data
          }

          setProfile(data)
        }
      } catch (error) {
        setProfile(null)
        return
      }
    }
    return () => {
      fetchProfile()
    }
  }, [profile, setProfile, user])

  useEffect(() => {
    if (
      (profile?.age && profile?.gender && profile?.region) ||
      localStorage.getItem(USERINFO_SKIP) === 'true'
    ) {
      setUserInfoDone(true)
    }
  }, [profile])

  return { profile, setProfile, userInfoDone }
}

export const useSharedProfile = (shareId: string) => {
  const [profile, setProfile] = useRecoilState(sharedProfileAtom)

  useEffect(() => {
    if (!shareId) return
    const fetchProfile = async () => {
      try {
        const data = await api.get(`/shares/${shareId}`)
        setProfile(data)
      } catch (error) {
        setProfile(null)
        return
      }
    }
    fetchProfile()
  }, [shareId])

  return { profile }
}
