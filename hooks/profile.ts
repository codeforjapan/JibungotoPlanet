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

// enabled が false のときは、自分のプロフィールを取得・作成しない（シェアページ用）
export const useProfile = (enabled = true) => {
  const [profile, setProfile] = useRecoilState(profileAtom)
  const [userInfoDone, setUserInfoDone] = useState(false)

  useEffect(() => {
    const fetchProfile = async () => {
      if (!enabled || profile) return
      try {
        const data = await fetchOrCreateProfile()
        setProfile(data)
      } catch (error) {
        setProfile(null)
        return
      }
    }
    fetchProfile()
    // マウント時に1回だけ取得する意図のため、依存は空にしている。
    // enabled はマウント中に変わらず（シェアページでは最初から false）、
    // 取得済みかどうかは関数の中で profile を見て判断している
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export const useSharedProfile = (shareId?: string) => {
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
  }, [shareId, setProfile])

  return { profile }
}
