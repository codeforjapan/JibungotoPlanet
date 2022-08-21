import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { PROFILE_ID, USERINFO_SKIP } from 'constants/localstorageKeys'
import { profileAtom, sharedProfileAtom } from 'store/profile'
import api from '../utils/api'

export const useProfile = () => {
  const [profile, setProfile] = useRecoilState(profileAtom)
  const [userInfoDone, setUserInfoDone] = useState(false)

  useEffect(() => {
    const fetchProfile = async () => {
      if (profile) return
      try {
        const profileId = localStorage.getItem(PROFILE_ID)
        if (!profileId) {
          const { data } = await api.post('/profiles')
          setProfile(data)
          localStorage.setItem(PROFILE_ID, data.id)
        } else {
          const data = await api.get(`/profiles/${profileId}`)
          setProfile(data)
        }
      } catch (error) {
        setProfile(null)
        return
      }
    }
    fetchProfile()
  }, [])

  useEffect(() => {
    if (
      (!profile?.age && !profile?.gender && !profile?.region) ||
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
