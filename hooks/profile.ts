import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { PROFILE_ID, USERINFO_SKIP } from 'constants/localstorageKeys'
import { profileAtom, sharedProfileAtom } from 'store/profile'
import api from '../utils/api'

// 同じ画面で複数のコンポーネントが useProfile を使うため、
// 取得中のリクエストを共有してプロフィールの重複作成を防ぐ
let pendingProfile: Promise<Profile.Profile> | null = null

const fetchOrCreateProfile = (): Promise<Profile.Profile> => {
  if (!pendingProfile) {
    pendingProfile = (async () => {
      const profileId = localStorage.getItem(PROFILE_ID)
      if (!profileId) {
        const { data } = await api.post('/profiles', { estimate: true })
        localStorage.setItem(PROFILE_ID, data.id)
        return data
      }
      return await api.get(`/profiles/${profileId}`)
    })().finally(() => {
      pendingProfile = null
    })
  }
  return pendingProfile
}

export const useProfile = () => {
  const [profile, setProfile] = useRecoilState(profileAtom)
  const [userInfoDone, setUserInfoDone] = useState(false)

  useEffect(() => {
    const fetchProfile = async () => {
      if (profile) return
      try {
        const data = await fetchOrCreateProfile()
        setProfile(data)
      } catch (error) {
        setProfile(null)
        return
      }
    }
    fetchProfile()
  }, [])

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
