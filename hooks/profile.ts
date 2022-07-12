import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { profileAtom } from '../store/profile'
import api from '../utils/api'

export const useProfile = () => {
  const [profile, setProfile] = useRecoilState(profileAtom)

  useEffect(() => {
    const fetchProfile = async () => {
      if (profile) return
      try {
        const profileId = localStorage.getItem('profileId')

        if (!profileId) {
          const data = await api.post('/profiles')
          setProfile(data)
          localStorage.setItem('profileId', data.id)
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

  return { profile, setProfile }
}
